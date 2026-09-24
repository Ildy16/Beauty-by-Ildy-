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

test('alternatives prefer brand diversity when possible',()=>{
 const products=[
  p('aestura-atobarrier365-cream','AESTURA'),
  p('aestura-hydro-soothing-cream','AESTURA'),
  p('aestura-cera-ha-serum','AESTURA'),
  p('axis-y-panthenol-10','AXIS-Y'),
  p('skin1004-centella-ampoule','SKIN1004')
 ];
 const r=recommend(products,{journey:'skin',primaryGoal:'hydration',secondaryGoals:['barrier'],skinType:'dry',routineLevel:'balanced'});
 const brands=r.alternatives.map(x=>x.product.brand);
 assert.equal(new Set(brands).size,brands.length);
});
