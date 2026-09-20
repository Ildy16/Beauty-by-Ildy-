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

test('wellness requires explicit age confirmation before results',()=>{
 assert.ok(source.includes("a.journey==='wellness'?a.adult!==null:true"));
 assert.ok(source.includes("aria-pressed={a.adult===true}"));
 assert.ok(source.includes("aria-pressed={a.adult===false}"));
});

test('restart clears age and safety-sensitive state',()=>{
 const restart=source.match(/const restart=()=>{[^\n]+/s)?.[0]||'';
 assert.ok(restart.includes("ageBand:null"));
 assert.ok(restart.includes("currentRetinoid:false"));
 assert.ok(restart.includes("medication:false"));
});

test('result navigation hides sections that do not exist',()=>{
 assert.ok(source.includes("resultComparisonCount>=2"));
 assert.ok(source.includes("results?.whyNot?.length>0"));
});
