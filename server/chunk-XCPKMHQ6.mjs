import './polyfills.server.mjs';
import{c as y,d as x,e as I}from"./chunk-CTMG3RCU.mjs";import"./chunk-2ZWSGT7G.mjs";import{b as w}from"./chunk-4AINQFRV.mjs";import{b as v,c as k}from"./chunk-DJWZLVU4.mjs";import{b}from"./chunk-MGCQ5COH.mjs";import{c as l,d as C,g as A,h as E,k as S}from"./chunk-DPG4D6ZO.mjs";import{h as g,i as h}from"./chunk-IYODFONF.mjs";import{i as p}from"./chunk-ITQ3FBGB.mjs";var L=":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:end;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:start;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",V=L,N=class{constructor(n){S(this,n),this.ionChange=E(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.centerPickerItemInView=(e,t=!0,s=!0)=>{let{isColumnVisible:i,scrollEl:o}=this;if(i&&o){let r=e.offsetTop-3*e.clientHeight+e.clientHeight/2;o.scrollTop!==r&&(this.canExitInputMode=s,o.scroll({top:r,left:0,behavior:t?"smooth":void 0}))}},this.setPickerItemActiveState=(e,t)=>{t?e.classList.add(u):e.classList.remove(u)},this.inputModeChange=e=>{if(!this.numericInput)return;let{useInputMode:t,inputModeColumn:s}=e.detail,i=s===void 0||s===this.el;if(!t||!i){this.setInputModeActive(!1);return}this.setInputModeActive(!0)},this.setInputModeActive=e=>{if(this.isScrolling){this.scrollEndCallback=()=>{this.isActive=e};return}this.isActive=e},this.initializeScrollListener=()=>{let e=v("ios"),{el:t,scrollEl:s}=this,i,o=this.activeItem,r=()=>{h(()=>{if(!s)return;i&&(clearTimeout(i),i=void 0),this.isScrolling||(e&&y(),this.isScrolling=!0);let a=s.getBoundingClientRect(),M=a.x+a.width/2,P=a.y+a.height/2,f=t.getRootNode(),m=f instanceof ShadowRoot?f:b;if(m===void 0)return;let c=m.elementsFromPoint(M,P).find(d=>d.tagName==="ION-PICKER-COLUMN-OPTION");o!==void 0&&this.setPickerItemActiveState(o,!1),!(c===void 0||c.disabled)&&(c!==o&&(e&&x(),this.canExitInputMode&&this.exitInputMode()),o=c,this.setPickerItemActiveState(c,!0),i=setTimeout(()=>{this.isScrolling=!1,e&&I();let{scrollEndCallback:d}=this;d&&(d(),this.scrollEndCallback=void 0),this.canExitInputMode=!0,this.setValue(c.value)},250))})};h(()=>{s&&(s.addEventListener("scroll",r),this.destroyScrollListener=()=>{s.removeEventListener("scroll",r)})})},this.exitInputMode=()=>{let{parentEl:e}=this;e!=null&&(e.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.isActive=!1,this.disabled=!1,this.value=void 0,this.color="primary",this.numericInput=!1}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView(!0)}componentWillLoad(){let n=this.parentEl=this.el.closest("ion-picker"),e=t=>{if(t[t.length-1].isIntersecting){let{activeItem:i,el:o}=this;this.isColumnVisible=!0;let r=g(o).querySelector(`.${u}`);r&&this.setPickerItemActiveState(r,!1),this.scrollActiveItemIntoView(),i&&this.setPickerItemActiveState(i,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)};new IntersectionObserver(e,{threshold:.001,root:this.parentEl}).observe(this.el),n!==null&&n.addEventListener("ionInputModeChange",t=>this.inputModeChange(t))}componentDidRender(){let{el:n,activeItem:e,isColumnVisible:t,value:s}=this;if(t&&!e){let i=n.querySelector("ion-picker-column-option");i!==null&&i.value!==s&&this.setValue(i.value)}}scrollActiveItemIntoView(n=!1){return p(this,null,function*(){let e=this.activeItem;e&&this.centerPickerItemInView(e,n,!1)})}setValue(n){return p(this,null,function*(){this.disabled===!0||this.value===n||(this.value=n,this.ionChange.emit({value:n}))})}setFocus(){return p(this,null,function*(){this.scrollEl&&this.scrollEl.focus()})}get activeItem(){let{value:n}=this;return Array.from(this.el.querySelectorAll("ion-picker-column-option")).find(t=>!this.disabled&&t.disabled?!1:t.value===n)}render(){let{color:n,disabled:e,isActive:t,numericInput:s}=this,i=k(this);return l(C,{key:"59648ef23cef1ab6d30955bb95bc23e670ec7256",class:w(n,{[i]:!0,"picker-column-active":t,"picker-column-numeric-input":s,"picker-column-disabled":e})},l("slot",{key:"fd93192d4945b2c33e0fe93cc90b505f2cec12fc",name:"prefix"}),l("div",{key:"99e49c6d58badd2fe5e75f0ebcd4bc00eb50aa58",class:"picker-opts",tabindex:e?void 0:0,ref:o=>{this.scrollEl=o}},l("div",{key:"bb44892ef179b25373e45e4b4bc4d1fa617b1ea1",class:"picker-item-empty","aria-hidden":"true"},"\xA0"),l("div",{key:"9ee7aeb8468bbb03f7192d56849dae089b7a0250",class:"picker-item-empty","aria-hidden":"true"},"\xA0"),l("div",{key:"0baa4bda4bf02a8d06dbf3392b1516ca8ea8d26a",class:"picker-item-empty","aria-hidden":"true"},"\xA0"),l("slot",{key:"ff4cad20fd82ab66599473f60d10c18dc1dc76d8"}),l("div",{key:"04dcb0390209081e6223b90e45b8f2ef0fdf94bd",class:"picker-item-empty","aria-hidden":"true"},"\xA0"),l("div",{key:"734e3b431a30ce93957e1452516efc86e29ff9c9",class:"picker-item-empty","aria-hidden":"true"},"\xA0"),l("div",{key:"1c68dcf9a029e607bb6bc9c19cd02214914eb6d7",class:"picker-item-empty","aria-hidden":"true"},"\xA0")),l("slot",{key:"d85210cc99c8c1bf83eb1cd51540ebe875d4adeb",name:"suffix"}))}get el(){return A(this)}static get watchers(){return{value:["valueChange"]}}},u="option-active";N.style=V;export{N as ion_picker_column};
