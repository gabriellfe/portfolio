import{a as c}from"./chunk-MCRJI3T3.js";import{a as d}from"./chunk-SG3LS7O3.js";import{e as l}from"./chunk-FP7EQKGB.js";var h=()=>d.get("experimentalCloseWatcher",!1)&&c!==void 0&&"CloseWatcher"in c,m=()=>{document.addEventListener("backbutton",()=>{})},E=()=>{let s=document,r=!1,a=()=>{if(r)return;let n=0,o=[],u=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){o.push({priority:t,handler:e,id:n++})}}});s.dispatchEvent(u);let f=t=>l(void 0,null,function*(){try{if(t?.handler){let e=t.handler(i);e!=null&&(yield e)}}catch(e){console.error(e)}}),i=()=>{if(o.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};o.forEach(e=>{e.priority>=t.priority&&(t=e)}),r=!0,o=o.filter(e=>e.id!==t.id),f(t).then(()=>r=!1)}};i()};if(h()){let n,o=()=>{n?.destroy(),n=new c.CloseWatcher,n.onclose=()=>{a(),o()}};o()}else s.addEventListener("backbutton",a)},v=100,k=99;export{h as a,m as b,E as c,v as d,k as e};
