async function s({fetch:o}){const e=async a=>{const t=await o(`https://www.consultingninja.tech/data/${a==="home"?"homeData.json":"libData.json"}`);if(!t.ok){const n=await t.text();return new Error(`${t.status}: ${n}`)}return await t.json()};return{videos:e("home"),videoLib:e("library")}}const i=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{i as _,s as l};
