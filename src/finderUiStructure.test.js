import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source=await readFile(new URL('./beautyFinder.jsx',import.meta.url),'utf8');

test('skincare flow uses six ordered screens',()=>{
 assert.ok(source.includes("const maxStep=a.journey==='device'?0:a.journey==='wellness'?2:a.journey==='hair'?3:5;"));
 assert.ok(source.includes("{step===2&&a.journey==='skin'&&<><h1>{t.skinType}</h1>"));
 assert.ok(source.includes("{step===3&&a.journey==='skin'&&<><h1>{t.age}</h1>"));
 assert.ok(source.includes("{step===4&&a.journey==='skin'&&<><h1>{t.routine}</h1>"));
 assert.ok(source.includes("{step===5&&a.journey==='skin'&&<><h1>{t.safety}</h1>"));
});

test('hair flow uses four screens without a blank safety page',()=>{
 assert.ok(source.includes("{step===2&&a.journey==='hair'&&<><h1>{t.routine}</h1>"));
 assert.ok(source.includes("{step===3&&a.journey==='hair'&&<><h1>{t.price}</h1>"));
 assert.equal(source.includes("step===4&&a.journey==='hair'"),false);
});

test('wellness route opens evidence-led guidance without automated supplement ranking',()=>{
 assert.ok(source.includes("if(a.journey==='wellness')return"));
 assert.ok(source.includes('href="#wellness"'));
});

test('restart clears age and safety-sensitive state',()=>{
 const start=source.indexOf("const restart=()=>{");
 const end=source.indexOf("\n\n if(!started)",start);
 const restart=start>=0&&end>start?source.slice(start,end):'';
 assert.ok(restart.includes("ageBand:null"));
 assert.ok(restart.includes("currentRetinoid:false"));
 assert.ok(restart.includes("medication:false"));
});

test('result navigation hides sections that do not exist',()=>{
 assert.ok(source.includes("resultComparisonCount>=2"));
 assert.ok(source.includes("results?.whyNot?.length>0"));
});

test('all four Finder journeys remain visible',()=>{
 assert.ok(source.includes("Object.entries(t.journeys).map(([key,v])=>"));
 assert.equal(source.includes("filter(([key])=>journeyAvailable(key))"),false);
});

test('Beauty Route uses the current Beauty by Ildy product catalog',()=>{
 assert.ok(source.includes("import {products,localIngredient} from './products.jsx';"));
 assert.ok(source.includes("recommend(products,a)"));
});
