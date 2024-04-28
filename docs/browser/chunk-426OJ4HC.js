import{a as $}from"./chunk-MCRJI3T3.js";var j,st=d=>{if(j===void 0){let a=d.style.animationName!==void 0,p=d.style.webkitAnimationName!==void 0;j=!a&&p?"-webkit-":""}return j},ee=(d,a,p)=>{let v=a.startsWith("animation")?st(d):"";d.style.setProperty(v+a,p)},L=(d=[],a)=>{if(a!==void 0){let p=Array.isArray(a)?a:[a];return[...d,...p]}return d},at=d=>{let a,p,v,O,U,z,i=[],V=[],M=[],y=!1,o,N={},q=[],B=[],G={},A=0,x=!1,P=!1,b,k,C,S=!0,w=!1,W=!0,n,T=!1,te=d,H=[],_=[],D=[],g=[],c=[],ne=[],re=[],se=[],oe=[],ie=[],h=[],pe=typeof AnimationEffect=="function"||$!==void 0&&typeof $.AnimationEffect=="function",u=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&pe,fe=()=>h,ge=e=>(c.forEach(t=>{t.destroy(e)}),ye(e),g.length=0,c.length=0,i.length=0,Ce(),y=!1,W=!0,n),ye=e=>{ce(),e&&Se()},Ee=()=>{x=!1,P=!1,W=!0,b=void 0,k=void 0,C=void 0,A=0,w=!1,S=!0,T=!1},Ae=()=>A!==0&&!T,ae=(e,t)=>{let r=t.findIndex(s=>s.c===e);r>-1&&t.splice(r,1)},be=(e,t)=>(D.push({c:e,o:t}),n),J=(e,t)=>((t?.oneTimeCallback?_:H).push({c:e,o:t}),n),Ce=()=>(H.length=0,_.length=0,n),ce=()=>{u&&(h.forEach(e=>{e.cancel()}),h.length=0)},Se=()=>{ne.forEach(e=>{e?.parentNode&&e.parentNode.removeChild(e)}),ne.length=0},Fe=e=>(re.push(e),n),ve=e=>(se.push(e),n),ke=e=>(oe.push(e),n),we=e=>(ie.push(e),n),We=e=>(V=L(V,e),n),_e=e=>(M=L(M,e),n),Re=(e={})=>(N=e,n),xe=(e=[])=>{for(let t of e)N[t]="";return n},Pe=e=>(q=L(q,e),n),Te=e=>(B=L(B,e),n),De=(e={})=>(G=e,n),Ke=(e=[])=>{for(let t of e)G[t]="";return n},Q=()=>U!==void 0?U:o?o.getFill():"both",K=()=>b!==void 0?b:z!==void 0?z:o?o.getDirection():"normal",X=()=>x?"linear":v!==void 0?v:o?o.getEasing():"linear",F=()=>P?0:k!==void 0?k:p!==void 0?p:o?o.getDuration():0,Y=()=>O!==void 0?O:o?o.getIterations():1,Z=()=>C!==void 0?C:a!==void 0?a:o?o.getDelay():0,Ie=()=>i,Le=e=>(z=e,l(!0),n),Oe=e=>(U=e,l(!0),n),Ue=e=>(a=e,l(!0),n),ze=e=>(v=e,l(!0),n),Ve=e=>(!u&&e===0&&(e=1),p=e,l(!0),n),Me=e=>(O=e,l(!0),n),Ne=e=>(o=e,n),qe=e=>{if(e!=null)if(e.nodeType===1)g.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)g.push(e[t]);else console.error("Invalid addElement value");return n},Be=e=>{if(e!=null)if(Array.isArray(e))for(let t of e)t.parent(n),c.push(t);else e.parent(n),c.push(e);return n},Ge=e=>{let t=i!==e;return i=e,t&&He(i),n},He=e=>{u&&fe().forEach(t=>{let r=t.effect;if(r.setKeyframes)r.setKeyframes(e);else{let s=new KeyframeEffect(r.target,e,r.getTiming());t.effect=s}})},Je=()=>{re.forEach(s=>s()),se.forEach(s=>s());let e=V,t=M,r=N;g.forEach(s=>{let f=s.classList;e.forEach(m=>f.add(m)),t.forEach(m=>f.remove(m));for(let m in r)r.hasOwnProperty(m)&&ee(s,m,r[m])})},Qe=()=>{oe.forEach(f=>f()),ie.forEach(f=>f());let e=S?1:0,t=q,r=B,s=G;g.forEach(f=>{let m=f.classList;t.forEach(E=>m.add(E)),r.forEach(E=>m.remove(E));for(let E in s)s.hasOwnProperty(E)&&ee(f,E,s[E])}),k=void 0,b=void 0,C=void 0,H.forEach(f=>f.c(e,n)),_.forEach(f=>f.c(e,n)),_.length=0,W=!0,S&&(w=!0),S=!0},I=()=>{A!==0&&(A--,A===0&&(Qe(),o&&o.animationFinish()))},Xe=()=>{g.forEach(e=>{let t=e.animate(i,{id:te,delay:Z(),duration:F(),easing:X(),iterations:Y(),fill:Q(),direction:K()});t.pause(),h.push(t)}),h.length>0&&(h[0].onfinish=()=>{I()})},le=()=>{Je(),i.length>0&&u&&Xe(),y=!0},R=e=>{e=Math.min(Math.max(e,0),.9999),u&&h.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+F()*e,t.pause()})},ue=e=>{h.forEach(t=>{t.effect.updateTiming({delay:Z(),duration:F(),easing:X(),iterations:Y(),fill:Q(),direction:K()})}),e!==void 0&&R(e)},l=(e=!1,t=!0,r)=>(e&&c.forEach(s=>{s.update(e,t,r)}),u&&ue(r),n),Ye=(e=!1,t)=>(c.forEach(r=>{r.progressStart(e,t)}),de(),x=e,y||le(),l(!1,!0,t),n),Ze=e=>(c.forEach(t=>{t.progressStep(e)}),R(e),n),$e=(e,t,r)=>(x=!1,c.forEach(s=>{s.progressEnd(e,t,r)}),r!==void 0&&(k=r),w=!1,S=!0,e===0?(b=K()==="reverse"?"normal":"reverse",b==="reverse"&&(S=!1),u?(l(),R(1-t)):(C=(1-t)*F()*-1,l(!1,!1))):e===1&&(u?(l(),R(t)):(C=t*F()*-1,l(!1,!1))),e!==void 0&&!o&&he(),n),de=()=>{y&&(u?h.forEach(e=>{e.pause()}):g.forEach(e=>{ee(e,"animation-play-state","paused")}),T=!0)},je=()=>(c.forEach(e=>{e.pause()}),de(),n),et=()=>{I()},tt=()=>{h.forEach(e=>{e.play()}),(i.length===0||g.length===0)&&I()},nt=()=>{u&&(R(0),ue())},he=e=>new Promise(t=>{e?.sync&&(P=!0,J(()=>P=!1,{oneTimeCallback:!0})),y||le(),w&&(nt(),w=!1),W&&(A=c.length+1,W=!1);let r=()=>{ae(s,_),t()},s=()=>{ae(r,D),t()};J(s,{oneTimeCallback:!0}),be(r,{oneTimeCallback:!0}),c.forEach(f=>{f.play()}),u?tt():et(),T=!1}),rt=()=>{c.forEach(e=>{e.stop()}),y&&(ce(),y=!1),Ee(),D.forEach(e=>e.c(0,n)),D.length=0},me=(e,t)=>{let r=i[0];return r!==void 0&&(r.offset===void 0||r.offset===0)?r[e]=t:i=[{offset:0,[e]:t},...i],n};return n={parentAnimation:o,elements:g,childAnimations:c,id:te,animationFinish:I,from:me,to:(e,t)=>{let r=i[i.length-1];return r!==void 0&&(r.offset===void 0||r.offset===1)?r[e]=t:i=[...i,{offset:1,[e]:t}],n},fromTo:(e,t,r)=>me(e,t).to(e,r),parent:Ne,play:he,pause:je,stop:rt,destroy:ge,keyframes:Ge,addAnimation:Be,addElement:qe,update:l,fill:Oe,direction:Le,iterations:Me,duration:Ve,easing:ze,delay:Ue,getWebAnimations:fe,getKeyframes:Ie,getFill:Q,getDirection:K,getDelay:Z,getIterations:Y,getEasing:X,getDuration:F,afterAddRead:ke,afterAddWrite:we,afterClearStyles:Ke,afterStyles:De,afterRemoveClass:Te,afterAddClass:Pe,beforeAddRead:Fe,beforeAddWrite:ve,beforeClearStyles:xe,beforeStyles:Re,beforeRemoveClass:_e,beforeAddClass:We,onFinish:J,isRunning:Ae,progressStart:Ye,progressStep:Ze,progressEnd:$e}};export{at as a};