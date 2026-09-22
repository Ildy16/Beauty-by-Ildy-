import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const productsSource=await readFile(new URL('./products.jsx',import.meta.url),'utf8');
const finderSource=await readFile(new URL('./beautyFinder.jsx',import.meta.url),'utf8');
const mainSource=await readFile(new URL('./main.jsx',import.meta.url),'utf8');
const finderDataSource=await readFile(new URL('./finderData.js',import.meta.url),'utf8');

test('Neumi is fully separated from the Beauty by Ildy public experience',()=>{
 assert.equal(/NEUMI|Neumi|neumi-/.test(productsSource),false);
 assert.equal(/NEUMI|Neumi|neumi-/.test(mainSource),false);
 assert.equal(/NEUMI|Neumi|neumi-/.test(finderDataSource),false);
});

test('Beauty Route uses the current Beauty by Ildy product catalogue',()=>{
 assert.ok(finderSource.includes("import {products,localIngredient} from './products.jsx';"));
 assert.ok(finderSource.includes('recommend(products,a)'));
});

test('wellness route points to editorial guidance instead of automated supplement ranking',()=>{
 assert.ok(finderSource.includes("if(a.journey==='wellness')return"));
 assert.ok(finderSource.includes('href="#wellness"'));
});
