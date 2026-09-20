import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const productsSource=await readFile(new URL('./products.jsx',import.meta.url),'utf8');
const finderSource=await readFile(new URL('./beautyFinder.jsx',import.meta.url),'utf8');

test('Neumi public gate is disabled on the multi-brand site',()=>{
 assert.ok(productsSource.includes('export const NEUMI_PUBLIC_ENABLED=false;'));
 assert.ok(productsSource.includes("publicProducts=products.filter(p=>NEUMI_PUBLIC_ENABLED||p.brand!=='NEUMI')"));
});

test('public product pages use the gated catalog',()=>{
 assert.ok(productsSource.includes('publicProducts.filter('));
 assert.ok(productsSource.includes('publicProducts.find(x=>x.slug===slug)'));
});

test('Smart Finder uses the gated public catalog',()=>{
 assert.ok(finderSource.includes("import {publicProducts,localIngredient} from './products.jsx';"));
 assert.ok(finderSource.includes('recommend(publicProducts,a)'));
});

test('Finder hides journeys with no public products',()=>{
 assert.ok(finderSource.includes("if(key==='wellness')return publicProducts.some(p=>p.category==='wellness')"));
 assert.ok(finderSource.includes('filter(([key])=>journeyAvailable(key))'));
});
