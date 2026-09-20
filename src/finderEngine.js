import {finderMeta} from './finderData.js';

const evidenceBonus={A:5,B:3,C:0,U:-5};
const has=(arr,x)=>Array.isArray(arr)&&arr.includes(x);
const overlap=(a=[],b=[])=>a.filter(x=>b.includes(x)).length;

export function evaluateSafety(meta,answers={}){
  let status='GREEN', penalty=0;
  const reasons=[];
  const flags=meta.flags||[];
  const red=(reason)=>{status='RED'; reasons.push(reason)};
  const amber=(reason,p=15)=>{if(status!=='RED')status='AMBER'; penalty=Math.max(penalty,p); reasons.push(reason)};

  if(flags.includes('retinoid')){
    if(answers.pregnancy===true) red('pregnancy_retinoid');
    else if(answers.prescription===true) red('prescription_active');
    else if(answers.irritated===true) red('irritated_retinoid');
    else if(answers.currentRetinoid===true && answers.sensitive===true) red('retinoid_stack_sensitive');
    else if(answers.currentRetinoid===true) amber('retinoid_stack');
    else if(answers.sensitive===true) amber('sensitive_retinoid');
  }
  if(flags.includes('strong_active') && answers.multipleAcids===true && answers.irritated===true) red('active_overload');
  if(flags.includes('eye_area') && answers.eyeSensitive===true) amber('eye_sensitivity',12);
  if(flags.includes('mechanical_irritation') && answers.sensitive===true) amber('mechanical_irritation',10);
  if(flags.includes('fragrance') && answers.sensitive===true) amber('fragrance_sensitivity',10);
  if(flags.includes('needs_verification')) amber('verification_pending',10);
  if(flags.includes('supplement')){
    if(answers.adult===false) red('under_18_supplement');
    if(answers.wellnessPregnancy===true) red('pregnancy_supplement');
    if(answers.medication===true) amber('medication_interaction_check',15);
  }
  if(flags.includes('caffeine') && answers.caffeineSensitive===true) red('caffeine_avoidance');
  if(flags.includes('herbal_hormonal_context') && (answers.medication===true||answers.hormonalConcern===true||answers.wellnessPregnancy===true)) red('herbal_hormonal_context');

  return {status,penalty,reasons};
}

export function scoreProduct(product,meta,answers={}){
  const safety=evaluateSafety(meta,answers);
  if(safety.status==='RED') return {...safety,score:-Infinity,reasons:safety.reasons};

  let score=0;
  const reasons=[...safety.reasons];
  if(meta.type!==answers.journey && !(answers.journey==='skin'&&meta.type==='skincare')) return {...safety,score:-Infinity,reasons:['journey_mismatch']};

  if(has(meta.goals,answers.primaryGoal)){score+=35; reasons.push('primary_goal_match')}
  const secondary=overlap(meta.goals.concat(meta.secondary||[]),answers.secondaryGoals||[]);
  score+=Math.min(secondary*7.5,15);
  if(secondary) reasons.push('secondary_goal_match');

  if(!answers.skinType || has(meta.skinTypes,'all') || has(meta.skinTypes,answers.skinType)){score+=15; reasons.push('profile_match')}
  else if(meta.type==='skincare') score-=5;

  if(!answers.routineLevel || has(meta.routineLevels,answers.routineLevel)){score+=10; reasons.push('routine_fit')}
  else if(answers.routineLevel==='essential'&&has(meta.routineLevels,'advanced')) score-=10;

  if(answers.sensitive===true && (has(meta.skinTypes,'sensitive')||has(meta.skinTypes,'all'))) score+=10;
  else if(answers.sensitive===true && meta.flags?.includes('sensitive_conditional')) score-=5;
  else score+=5;

  if(answers.pricePreference==='premium' && meta.flags?.includes('premium')) score+=5;
  if(answers.pricePreference==='smart' && meta.flags?.includes('premium')) score-=5;

  score+=(evidenceBonus[meta.evidence]??0);
  score-=safety.penalty;

  if(meta.flags?.includes('partner')) reasons.push('partner_link_ignored_for_ranking');
  return {...safety,score:Math.max(0,Math.round(score*10)/10),reasons};
}

function roleScore(x,role,answers={}){
  let s=x.score;
  if(role==='base'){
    const foundationGoals=['barrier','hydration','soothing'];
    const foundationMatch=foundationGoals.some(g=>has(x.meta.goals,g)||has(x.meta.secondary,g));
    if(foundationMatch)s+=12;
    if((answers.sensitive===true||answers.irritated===true||answers.currentRetinoid===true)&&foundationMatch)s+=18;
    if(has(x.meta.goals,answers.primaryGoal)&&!foundationMatch)s-=8;
  }
  if(role==='targeted'&&has(x.meta.goals,answers.primaryGoal))s+=15;
  if(role==='extra'&&x.meta.routineLevels.includes('advanced')&&answers.routineLevel==='essential')s-=15;
  return s;
}

function chooseRole(candidates,role,usedSlugs,usedBrands,answers={},limitSameBrand=2){
  const valid=candidates
    .filter(x=>has(x.meta.roles,role)&&!usedSlugs.has(x.product.slug))
    .map(x=>({...x,roleScore:roleScore(x,role,answers)}))
    .sort((a,b)=>b.roleScore-a.roleScore);
  for(const x of valid){
    if((usedBrands.get(x.product.brand)||0)<limitSameBrand) return x;
  }
  return valid[0]||null;
}

export function recommend(products,answers={}){
  const evaluated=products
    .map(product=>{
      const meta=finderMeta[product.slug];
      if(!meta)return null;
      const result=scoreProduct(product,meta,answers);
      return {product,meta,...result};
    })
    .filter(Boolean)
    .filter(x=>Number.isFinite(x.score))
    .sort((a,b)=>b.score-a.score);

  const usedSlugs=new Set(), usedBrands=new Map(), primary=[];
  const add=(x,role)=>{
    if(!x)return;
    primary.push({...x,recommendationRole:role});
    usedSlugs.add(x.product.slug);
    usedBrands.set(x.product.brand,(usedBrands.get(x.product.brand)||0)+1);
  };

  if(answers.journey==='wellness'){
    add(chooseRole(evaluated,'targeted',usedSlugs,usedBrands,answers),'targeted');
    add(chooseRole(evaluated,'extra',usedSlugs,usedBrands,answers),'extra');
  }else{
    add(chooseRole(evaluated,'base',usedSlugs,usedBrands,answers),'base');
    add(chooseRole(evaluated,'targeted',usedSlugs,usedBrands,answers),'targeted');
    add(chooseRole(evaluated,'extra',usedSlugs,usedBrands,answers),'extra');
  }

  const alternatives=evaluated.filter(x=>!usedSlugs.has(x.product.slug)).slice(0,2);
  const education=[];
  if(answers.primaryGoal==='pigmentation'&&answers.sunscreen!==true) education.push('spf_first');
  if(answers.irritated===true) education.push('barrier_first');
  if(answers.currentRetinoid===true) education.push('avoid_unnecessary_retinoid_stacking');

  return {version:'1.0',primary,alternatives,education,evaluated};
}
