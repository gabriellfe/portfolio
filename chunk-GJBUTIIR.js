import"./chunk-FP7EQKGB.js";var O=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");var L=e=>{let t=[],r=0;return e=e.replace(/(\[[^\]]*\])/g,(o,a)=>{let c=`__ph-${r}__`;return t.push(a),r++,c}),{content:e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(o,a,c)=>{let p=`__ph-${r}__`;return t.push(c),r++,a+p}),placeholders:t}},P=(e,t)=>t.replace(/__ph-(\d+)__/g,(r,s)=>e[+s]),g="-shadowcsshost",w="-shadowcssslotted",b="-shadowcsscontext",H=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",x=new RegExp("("+g+H,"gim"),j=new RegExp("("+b+H,"gim"),N=new RegExp("("+w+H,"gim"),f=g+"-no-combinator",M=/-shadowcsshost-no-combinator([^\s]*)/,D=[/::shadow/g,/::content/g],K="([>\\s~+[.,{:][\\s\\S]*)?$",R=/-shadowcsshost/gim,E=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),U=E("::slotted"),Y=E(":host"),A=E(":host-context"),G=/\/\*\s*[\s\S]*?\*\//g,I=e=>e.replace(G,""),q=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,z=e=>e.match(q)||[],F=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,J=/([{}])/g,Q=/(^.*?[^\\])??((:+)(.*)|$)/,V="{",X="}",S="%BLOCK%",$=(e,t)=>{let r=Z(e),s=0;return r.escapedString.replace(F,(...n)=>{let o=n[2],a="",c=n[4],p="";c&&c.startsWith("{"+S)&&(a=r.blocks[s++],c=c.substring(S.length+1),p="{");let i=t({selector:o,content:a});return`${n[1]}${i.selector}${n[3]}${p}${i.content}${c}`})},Z=e=>{let t=e.split(J),r=[],s=[],n=0,o=[];for(let c=0;c<t.length;c++){let p=t[c];p===X&&n--,n>0?o.push(p):(o.length>0&&(s.push(o.join("")),r.push(S),o=[]),r.push(p)),p===V&&n++}return o.length>0&&(s.push(o.join("")),r.push(S)),{escapedString:r.join(""),blocks:s}},T=e=>(e=e.replace(A,`$1${b}`).replace(Y,`$1${g}`).replace(U,`$1${w}`),e),k=(e,t,r)=>e.replace(t,(...s)=>{if(s[2]){let n=s[2].split(","),o=[];for(let a=0;a<n.length;a++){let c=n[a].trim();if(!c)break;o.push(r(f,c,s[3]))}return o.join(",")}else return f+s[3]}),y=(e,t,r)=>e+t.replace(g,"")+r,ee=e=>k(e,x,y),te=(e,t,r)=>t.indexOf(g)>-1?y(e,t,r):e+t+r+", "+t+" "+e+r,re=(e,t)=>{let r="."+t+" > ",s=[];return e=e.replace(N,(...n)=>{if(n[2]){let o=n[2].trim(),a=n[3],c=r+o+a,p="";for(let h=n[4]-1;h>=0;h--){let u=n[5][h];if(u==="}"||u===",")break;p=u+p}let l=(p+c).trim(),i=`${p.trimEnd()}${c.trim()}`.trim();if(l!==i){let h=`${i}, ${l}`;s.push({orgSelector:l,updatedSelector:h})}return c}else return f+n[3]}),{selectors:s,cssText:e}},oe=e=>k(e,j,te),ne=e=>D.reduce((t,r)=>t.replace(r," "),e),se=e=>{let t=/\[/g,r=/\]/g;return e=e.replace(t,"\\[").replace(r,"\\]"),new RegExp("^("+e+")"+K,"m")},ce=(e,t)=>!se(t).test(e),B=(e,t)=>e.replace(Q,(r,s="",n,o="",a="")=>s+t+o+a),ae=(e,t,r)=>{if(R.lastIndex=0,R.test(e)){let s=`.${r}`;return e.replace(M,(n,o)=>B(o,s)).replace(R,s+" ")}return t+" "+e},le=(e,t,r)=>{let s=/\[is=([^\]]*)\]/g;t=t.replace(s,(v,...d)=>d[0]);let n="."+t,o=v=>{let d=v.trim();if(!d)return"";if(v.indexOf(f)>-1)d=ae(v,t,r);else{let _=v.replace(R,"");_.length>0&&(d=B(_,n))}return d},a=L(e);e=a.content;let c="",p=0,l,i=/( |>|\+|~(?!=))\s*/g,u=!(e.indexOf(f)>-1);for(;(l=i.exec(e))!==null;){let v=l[1],d=e.slice(p,l.index).trim();u=u||d.indexOf(f)>-1;let _=u?o(d):d;c+=`${_} ${v} `,p=i.lastIndex}let m=e.substring(p);return u=u||m.indexOf(f)>-1,c+=u?o(m):m,P(a.placeholders,c)},pe=(e,t,r,s)=>e.split(",").map(n=>s&&n.indexOf("."+s)>-1?n.trim():ce(n,t)?le(n,t,r).trim():n.trim()).join(", "),W=(e,t,r,s,n)=>$(e,o=>{let a=o.selector,c=o.content;return o.selector[0]!=="@"?a=pe(o.selector,t,r,s):(o.selector.startsWith("@media")||o.selector.startsWith("@supports")||o.selector.startsWith("@page")||o.selector.startsWith("@document"))&&(c=W(o.content,t,r,s,n)),{selector:a.replace(/\s{2,}/g," ").trim(),content:c}}),ie=(e,t,r,s,n)=>{e=T(e),e=ee(e),e=oe(e);let o=re(e,s);return e=o.cssText,e=ne(e),t&&(e=W(e,t,r,s,n)),e=C(e,r),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:o.selectors.map(a=>({orgSelector:C(a.orgSelector,r),updatedSelector:C(a.updatedSelector,r)}))}},C=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),ue=(e,t,r)=>{let s=t+"-h",n=t+"-s",o=z(e);e=I(e);let a=[];if(r){let p=l=>{let i=`/*!@___${a.length}___*/`,h=`/*!@${l.selector}*/`;return a.push({placeholder:i,comment:h}),l.selector=i+l.selector,l};e=$(e,l=>l.selector[0]!=="@"?p(l):((l.selector.startsWith("@media")||l.selector.startsWith("@supports")||l.selector.startsWith("@page")||l.selector.startsWith("@document"))&&(l.content=$(l.content,p)),l))}let c=ie(e,t,s,n,r);return e=[c.cssText,...o].join(`
`),r&&a.forEach(({placeholder:p,comment:l})=>{e=e.replace(p,l)}),c.slottedSelectors.forEach(p=>{let l=new RegExp(O(p.orgSelector),"g");e=e.replace(l,p.updatedSelector)}),e};export{ue as scopeCss};
