import test from 'node:test';
import assert from 'node:assert/strict';
import {finderMeta} from './finderData.js';
import {evaluateSafety,recommend} from './finderEngine.js';

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
