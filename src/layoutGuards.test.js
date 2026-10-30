import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';

const read=p=>readFile(new URL(p,import.meta.url),'utf8');
const exists=p=>access(new URL(p,import.meta.url)).then(()=>true,()=>false);
const indexHtml=await read('../index.html');
const mainSource=await read('./main.jsx');
const homepageCss=await read('./homepage-design-system.css');

test('Solutions visual navigation is a React child of the Solutions page only',async()=>{
 // A DOM injector left unstyled panel text on the homepage after Solutions -> Home.
 assert.equal(/solutionsEnhance/.test(indexHtml),false);
 assert.equal(await exists('./solutionsEnhance.js'),false);
 assert.equal(mainSource.match(/<SolutionsVisualNav /g)?.length,1);
 const solutionsBranch=mainSource.slice(mainSource.indexOf('page === "solutions"'),mainSource.indexOf('page === "longevity"'));
 assert.ok(solutionsBranch.includes('<SolutionsVisualNav lang={lang} />'));
});

test('Solutions sections share the approved homepage section styles',async()=>{
 assert.ok(mainSource.includes('<main id="solutionsPage" className="solutionsPage">'));
 assert.equal(await exists('./solutions-design-system.css'),false);
 for(const section of ['.needs','.pillars','.featureBand','.routineGrid','.standardGrid','.brandGrid']){
  assert.ok(homepageCss.includes(`:is(main#top, main#solutionsPage) ${section}`),section);
 }
});
