import './polyfills.server.mjs';
import{f as r,g as i}from"./chunk-6ZVVDZJT.mjs";import"./chunk-QZXE35H7.mjs";import{m as a,n as m}from"./chunk-DPG4D6ZO.mjs";import{b as s}from"./chunk-IYODFONF.mjs";import{i as n}from"./chunk-ITQ3FBGB.mjs";var y=()=>{let e=window;e.addEventListener("statusTap",()=>{a(()=>{let c=e.innerWidth,d=e.innerHeight,o=document.elementFromPoint(c/2,d/2);if(!o)return;let t=r(o);t&&new Promise(p=>s(t,p)).then(()=>{m(()=>n(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield i(t,300),t.style.removeProperty("--overflow")}))})})})};export{y as startStatusTap};
