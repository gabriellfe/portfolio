"use strict";(self.webpackChunkangulardemo=self.webpackChunkangulardemo||[]).push([[9013],{9013:(m,a,e)=>{e.r(a),e.d(a,{ion_picker_column_option:()=>n});var i=e(4635),c=e(4920),d=e(333),u=e(9690);const n=class{constructor(t){(0,i.r)(this,t),this.pickerColumn=null,this.ariaLabel=null,this.disabled=!1,this.value=void 0,this.color="primary"}onAriaLabelChange(t){this.ariaLabel=t}componentWillLoad(){const t=(0,c.h)(this.el,["aria-label"]);this.ariaLabel=t["aria-label"]||null}connectedCallback(){this.pickerColumn=this.el.closest("ion-picker-column")}disconnectedCallback(){this.pickerColumn=null}componentDidLoad(){const{pickerColumn:t}=this;null!==t&&t.scrollActiveItemIntoView()}onClick(){const{pickerColumn:t}=this;null!==t&&t.setValue(this.value)}render(){const{color:t,disabled:r,ariaLabel:s}=this,l=(0,u.b)(this);return(0,i.h)(i.f,{key:"c743c6ef44bb9f765cc15b3b5d2864de6520203a",class:(0,d.c)(t,{[l]:!0,"option-disabled":r})},(0,i.h)("button",{key:"4c3d9eb245c52b2c007f727e145cfb55759bd7a9",tabindex:"-1","aria-label":s,disabled:r,onClick:()=>this.onClick()},(0,i.h)("slot",{key:"4c907d2187cbe9d5941e27f2b12578e2b7271461"})))}get el(){return(0,i.i)(this)}static get watchers(){return{"aria-label":["onAriaLabelChange"]}}};n.style={ios:"button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}",md:"button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}"}},333:(m,a,e)=>{e.d(a,{c:()=>d,g:()=>p,h:()=>c,o:()=>b});var i=e(467);const c=(o,n)=>null!==n.closest(o),d=(o,n)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},n):n,p=o=>{const n={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(o).forEach(t=>n[t]=!0),n},h=/^[a-z][a-z0-9+\-.]*:/,b=function(){var o=(0,i.A)(function*(n,t,r,s){if(null!=n&&"#"!==n[0]&&!h.test(n)){const l=document.querySelector("ion-router");if(l)return t?.preventDefault(),l.push(n,r,s)}return!1});return function(t,r,s,l){return o.apply(this,arguments)}}()}}]);