import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const doterra=await readFile(new URL('./doterra.jsx',import.meta.url),'utf8');
const nuskin=await readFile(new URL('./brandPages.jsx',import.meta.url),'utf8');
const parse=(src,start,end)=>{const i=src.indexOf(start);assert.ok(i>=0,start);const j=src.indexOf(end,i+start.length);assert.ok(j>i,end);return JSON.parse(src.slice(i+start.length,j).replace(/,\s*([\]}])/g,'$1'));};
const d= parse(doterra,'const PRODUCTS = ',';\n\nconst DUPLICATE_PRODUCT_URLS');
const t= parse(doterra,'const CATEGORY_INFO_TRANSLATED = ',';\n\nfunction getProductInfo');
const n= parse(nuskin,'const NUSKIN_LOCALIZED_DESCRIPTIONS = ',';\n\nconst NUSKIN = [');
const products= parse(nuskin,'const NUSKIN = ',';\n\n');
test('doTERRA: unique product names and referral URLs',()=>{
 assert.equal(d.length,109);
 assert.equal(new Set(d.map(x=>x[0])).size,d.length);
 assert.equal(new Set(d.map(x=>x[2])).size,d.length);
 assert.ok(d.every(x=>x[2].startsWith('https://doterra.me/')));
});
test('doTERRA: English and German info for every category',()=>{
 for(const lang of ['en','de'])for(const group of new Set(d.map(x=>x[1]))){
  const fields=t[lang][group];
  assert.equal(fields?.length,3,lang+' '+group);
  assert.ok(fields.every(x=>typeof x==='string'&&x.length>12),lang+' '+group);
 }
});
test('Nu Skin: all 73 entries have HU EN DE copy',()=>{
 assert.equal(products.length,73);
 for(const [name] of products){
  assert.ok(n[name],name);
  for(const lang of ['hu','en','de'])assert.ok(n[name][lang]?.length>20,name+' '+lang);
 }
});
