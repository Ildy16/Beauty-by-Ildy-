import test from 'node:test';
import assert from 'node:assert/strict';
import {finderMeta} from './finderData.js';
import {evaluateSafety,recommend,validateFinderCatalog} from './finderEngine.js';

const p=(slug,brand='TEST')=>({slug,brand,name:slug,ingredients:[]});

test('pregnancy excludes retinoid from personalized recommendations',()=>{
 const r=evaluateSafety(finderMeta['iope-retinol-rx-2'],{pregnancy:true});
 assert.equal(r.status,'RED');
});

test('existing retinoid plus sensitive skin excludes another retinoid',()=>{
 const r=evaluateSafety(finderMeta['haruharu-rose-pdrn'],{currentRetinoid:true,sensitive:true});
 assert.equal(r.status,'RED');
});

test('caffeine avoidance excludes caffeine wellness product',()=>{
 const r=evaluateSafety(finderMeta['neumi-neuro'],{adult:true,caffeineSensitive:true});
 assert.equal(r.status,'RED');
});

test('medication makes ordinary supplement at least amber',()=>{
 const r=evaluateSafety(finderMeta['neumi-nutriswish'],{adult:true,medication:true});
 assert.equal(r.status,'AMBER');
});

test('partner flag never adds ranking score',()=>{
 const products=[p('neumi-skin','NEUMI'),p('sulwhasoo-ginseng-serum','SULWHASOO')];
 const r=recommend(products,{journey:'skin',primaryGoal:'firmness',skinType:'normal',routineLevel:'balanced'});
 const neumi=r.evaluated.find(x=>x.product.slug==='neumi-skin');
 assert.ok(neumi.reasons.includes('partner_link_ignored_for_ranking'));
});

test('pigmentation without sunscreen creates SPF education',()=>{
 const products=[p('axis-y-dark-spot','AXIS-Y'),p('aestura-atobarrier365-cream','AESTURA')];
 const r=recommend(products,{journey:'skin',primaryGoal:'pigmentation',skinType:'normal',routineLevel:'essential',sunscreen:false});
 assert.ok(r.education.includes('spf_first'));
});

test('primary routine contains no duplicate slug',()=>{
 const products=['aestura-atobarrier365-cream','axis-y-dark-spot','biodance-caviar-pdrn-eye-patch','skin1004-centella-ampoule'].map(x=>p(x,x.split('-')[0]));
 const r=recommend(products,{journey:'skin',primaryGoal:'hydration',skinType:'dry',routineLevel:'balanced'});
 assert.equal(new Set(r.primary.map(x=>x.product.slug)).size,r.primary.length);
});

test('wellness caffeine sensitivity does not substitute unrelated products',()=>{
 const products=[
  p('neumi-neumist-energy','NEUMI'),
  p('neumi-neuro','NEUMI'),
  p('neumi-nutriswish','NEUMI'),
  p('neumi-hers','NEUMI'),
  p('neumi-neumist-immunity','NEUMI'),
  p('neumi-neumist-relax','NEUMI')
 ];
 const r=recommend(products,{journey:'wellness',primaryGoal:'energy_support',secondaryGoals:[],routineLevel:'wellness',adult:true,caffeineSensitive:true});
 assert.equal(r.primary.length,0);
 assert.equal(r.alternatives.length,0);
});

test('wellness extra must match the selected goal',()=>{
 const products=[
  p('neumi-neuro','NEUMI'),
  p('neumi-neumist-energy','NEUMI')
 ];
 const r=recommend(products,{journey:'wellness',primaryGoal:'focus_support',secondaryGoals:[],routineLevel:'wellness',adult:true,caffeineSensitive:false});
 assert.equal(r.primary.length,1);
 assert.equal(r.primary[0].product.slug,'neumi-neuro');
});

test('irrelevant extra is omitted from a simple pigmentation route',()=>{
 const products=[
  p('axis-y-dark-spot','AXIS-Y'),
  p('aestura-hydro-soothing-cream','AESTURA'),
  p('biodance-caviar-pdrn-eye-patch','BIODANCE'),
  p('thesaem-aloe-99','THE SAEM')
 ];
 const r=recommend(products,{journey:'skin',primaryGoal:'pigmentation',secondaryGoals:[],skinType:'combination',routineLevel:'essential',sunscreen:false});
 assert.equal(r.primary.some(x=>x.recommendationRole==='extra'),false);
});

test('whyNot exposes relevant retinoid exclusion reason',()=>{
 const products=[
  p('iope-retinol-rx-2','IOPE'),
  p('aestura-atobarrier365-cream','AESTURA')
 ];
 const r=recommend(products,{journey:'skin',primaryGoal:'lines',secondaryGoals:[],skinType:'dry',routineLevel:'balanced',pregnancy:true});
 const blocked=r.whyNot.find(x=>x.product.slug==='iope-retinol-rx-2');
 assert.ok(blocked);
 assert.ok(blocked.reasons.includes('pregnancy_retinoid'));
});

test('catalog validator accepts a one-to-one product metadata set',()=>{
 const products=Object.keys(finderMeta).map(slug=>p(slug));
 const r=validateFinderCatalog(products);
 assert.equal(r.ok,true);
 assert.equal(r.productCount,r.metadataCount);
});

test('catalog validator reports missing metadata',()=>{
 const products=[...Object.keys(finderMeta).map(slug=>p(slug)),p('unknown-product')];
 const r=validateFinderCatalog(products);
 assert.equal(r.ok,false);
 assert.ok(r.issues.some(x=>x.code==='missing_metadata'&&x.slug==='unknown-product'));
});

test('under-18 wellness route blocks supplements',()=>{
 const products=[p('neumi-nutriswish','NEUMI'),p('neumi-neuro','NEUMI')];
 const r=recommend(products,{journey:'wellness',primaryGoal:'general_wellness',secondaryGoals:[],routineLevel:'wellness',adult:false});
 assert.equal(r.primary.length,0);
 assert.ok(r.whyNot.some(x=>x.reasons.includes('under_18_supplement')));
});

test('prescription dermatology treatment excludes retinoid candidates',()=>{
 const products=[p('iope-retinol-rx-2','IOPE'),p('aestura-atobarrier365-cream','AESTURA')];
 const r=recommend(products,{journey:'skin',primaryGoal:'lines',secondaryGoals:[],skinType:'dry',routineLevel:'balanced',prescription:true});
 assert.ok(r.whyNot.some(x=>x.product.slug==='iope-retinol-rx-2'&&x.reasons.includes('prescription_active')));
});

test('prescription skin treatment prioritizes a barrier base',()=>{
 const products=[
  p('aestura-atobarrier365-cream','AESTURA'),
  p('sulwhasoo-ginseng-cream','SULWHASOO'),
  p('hubislab-eternal','HUBISLAB'),
  p('iope-retinol-rx-2','IOPE')
 ];
 const r=recommend(products,{journey:'skin',primaryGoal:'lines',secondaryGoals:['hydration'],skinType:'dry',routineLevel:'balanced',prescription:true});
 const base=r.primary.find(x=>x.recommendationRole==='base');
 assert.equal(base?.product.slug,'aestura-atobarrier365-cream');
});

test('sensitive skin type alone activates sensitive retinoid protection',()=>{
 const products=[p('iope-retinol-rx-2','IOPE'),p('aestura-atobarrier365-cream','AESTURA')];
 const r=recommend(products,{journey:'skin',primaryGoal:'lines',secondaryGoals:[],skinType:'sensitive',routineLevel:'balanced',currentRetinoid:true,sensitive:false});
 assert.ok(r.whyNot.some(x=>x.product.slug==='iope-retinol-rx-2'&&x.reasons.includes('retinoid_stack_sensitive')));
});

test('severe irritation recovery mode returns base only and no alternatives',()=>{
 const products=[
  p('aestura-atobarrier365-cream','AESTURA'),
  p('hubislab-eternal','HUBISLAB'),
  p('iope-retinol-rx-2','IOPE')
 ];
 const r=recommend(products,{journey:'skin',primaryGoal:'lines',secondaryGoals:['hydration'],skinType:'sensitive',routineLevel:'balanced',currentRetinoid:true,multipleAcids:true,irritated:true,prescription:true});
 assert.equal(r.recoveryOnly,true);
 assert.equal(r.primary.length,1);
 assert.equal(r.primary[0].recommendationRole,'base');
 assert.equal(r.alternatives.length,0);
});
