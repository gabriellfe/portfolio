import './polyfills.server.mjs';
var d=(e,n)=>{e.componentOnReady?e.componentOnReady().then(t=>n(t)):u(()=>n(e))},c=e=>e.componentOnReady!==void 0,l=(e,n=[])=>{let t={};return n.forEach(i=>{e.hasAttribute(i)&&(e.getAttribute(i)!==null&&(t[i]=e.getAttribute(i)),e.removeAttribute(i))}),t};var f=(e,n,t,i)=>{var a;if(typeof window<"u"){let o=window,r=(a=o?.Ionic)===null||a===void 0?void 0:a.config;if(r){let s=r.get("_ael");if(s)return s(e,n,t,i);if(r._ael)return r._ael(e,n,t,i)}}return e.addEventListener(n,t,i)},h=(e,n,t,i)=>{var a;if(typeof window<"u"){let o=window,r=(a=o?.Ionic)===null||a===void 0?void 0:a.config;if(r){let s=r.get("_rel");if(s)return s(e,n,t,i);if(r._rel)return r._rel(e,n,t,i)}}return e.removeEventListener(n,t,i)},m=(e,n=e)=>e.shadowRoot||n,u=e=>typeof __zone_symbol__requestAnimationFrame=="function"?__zone_symbol__requestAnimationFrame(e):typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e);var w=e=>{if(e.focus(),e.classList.contains("ion-focusable")){let n=e.closest("ion-app");n&&n.setFocus([e])}};var b=(e,n,t)=>Math.max(e,Math.min(n,t));var v=e=>{if(e){let n=e.changedTouches;if(n&&n.length>0){let t=n[0];return{x:t.clientX,y:t.clientY}}if(e.pageX!==void 0)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}};export{d as a,c as b,l as c,f as d,h as e,m as f,u as g,w as h,b as i,v as j};
