import{r as R,J as N,ay as Y,P as v,d as X,Q as F,U as ne,R as le,y as f,az as P,a9 as M,B as J,W as V,X as se,F as Z,N as ue,ax as re,O as K,aA as G,Y as y,aB as j,aC as oe,aD as ie,aE as Q,aF as I,af as U,ag as de,o as x,c as z,w as E,f as _,h as g,l as k,Z as ce,e as $,a4 as ve,n as T,g as pe,t as L,_ as ee,a1 as Ae,s as ge,v as be,q as me}from"./index-CCio_QS_.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";function q(e,u){if(e)return e;let a=u??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function he(e,u){let a=R(q(e.value.type,e.value.as));return N(()=>{a.value=q(e.value.type,e.value.as)}),Y(()=>{var c;a.value||v(u)&&v(u)instanceof HTMLButtonElement&&!((c=v(u))!=null&&c.hasAttribute("type"))&&(a.value="button")}),a}let ye=X({props:{onFocus:{type:Function,required:!0}},setup(e){let u=R(!0);return()=>u.value?F(le,{as:"button",type:"button",features:ne.Focusable,onFocus(a){a.preventDefault();let c,A=50;function r(){var l;if(A--<=0){c&&cancelAnimationFrame(c);return}if((l=e.onFocus)!=null&&l.call(e)){u.value=!1,cancelAnimationFrame(c);return}c=requestAnimationFrame(r)}c=requestAnimationFrame(r)}}):null}});var Ie=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ie||{}),xe=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(xe||{});let te=Symbol("TabsContext");function C(e){let u=K(te,null);if(u===null){let a=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,C),a}return u}let ae=Symbol("TabsSSRContext"),Oe=X({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:u,attrs:a,emit:c}){var A;let r=R((A=e.selectedIndex)!=null?A:e.defaultIndex),l=R([]),s=R([]),O=f(()=>e.selectedIndex!==null),S=f(()=>O.value?e.selectedIndex:r.value);function h(n){var o;let d=P(i.tabs.value,v),t=P(i.panels.value,v),p=d.filter(b=>{var m;return!((m=v(b))!=null&&m.hasAttribute("disabled"))});if(n<0||n>d.length-1){let b=G(r.value===null?0:Math.sign(n-r.value),{[-1]:()=>1,0:()=>G(Math.sign(n),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),m=G(b,{0:()=>d.indexOf(p[0]),1:()=>d.indexOf(p[p.length-1])});m!==-1&&(r.value=m),i.tabs.value=d,i.panels.value=t}else{let b=d.slice(0,n),m=[...d.slice(n),...b].find(W=>p.includes(W));if(!m)return;let H=(o=d.indexOf(m))!=null?o:i.selectedIndex.value;H===-1&&(H=i.selectedIndex.value),r.value=H,i.tabs.value=d,i.panels.value=t}}let i={selectedIndex:f(()=>{var n,o;return(o=(n=r.value)!=null?n:e.defaultIndex)!=null?o:null}),orientation:f(()=>e.vertical?"vertical":"horizontal"),activation:f(()=>e.manual?"manual":"auto"),tabs:l,panels:s,setSelectedIndex(n){S.value!==n&&c("change",n),O.value||h(n)},registerTab(n){var o;if(l.value.includes(n))return;let d=l.value[r.value];if(l.value.push(n),l.value=P(l.value,v),!O.value){let t=(o=l.value.indexOf(d))!=null?o:r.value;t!==-1&&(r.value=t)}},unregisterTab(n){let o=l.value.indexOf(n);o!==-1&&l.value.splice(o,1)},registerPanel(n){s.value.includes(n)||(s.value.push(n),s.value=P(s.value,v))},unregisterPanel(n){let o=s.value.indexOf(n);o!==-1&&s.value.splice(o,1)}};M(te,i);let B=R({tabs:[],panels:[]}),D=R(!1);N(()=>{D.value=!0}),M(ae,f(()=>D.value?null:B.value));let w=f(()=>e.selectedIndex);return N(()=>{J([w],()=>{var n;return h((n=e.selectedIndex)!=null?n:e.defaultIndex)},{immediate:!0})}),Y(()=>{if(!O.value||S.value==null||i.tabs.value.length<=0)return;let n=P(i.tabs.value,v);n.some((o,d)=>v(i.tabs.value[d])!==v(o))&&i.setSelectedIndex(n.findIndex(o=>v(o)===v(i.tabs.value[S.value])))}),()=>{let n={selectedIndex:r.value};return F(Z,[l.value.length<=0&&F(ye,{onFocus:()=>{for(let o of l.value){let d=v(o);if((d==null?void 0:d.tabIndex)===0)return d.focus(),!0}return!1}}),V({theirProps:{...a,...se(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:n,slots:u,attrs:a,name:"TabGroup"})])}}}),Re=X({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:u,slots:a}){let c=C("TabList");return()=>{let A={selectedIndex:c.selectedIndex.value},r={role:"tablist","aria-orientation":c.orientation.value};return V({ourProps:r,theirProps:e,slot:A,attrs:u,slots:a,name:"TabList"})}}}),Be=X({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:u,slots:a,expose:c}){var A;let r=(A=e.id)!=null?A:`headlessui-tabs-tab-${ue()}`,l=C("Tab"),s=R(null);c({el:s,$el:s}),N(()=>l.registerTab(s)),re(()=>l.unregisterTab(s));let O=K(ae),S=f(()=>{if(O.value){let t=O.value.tabs.indexOf(r);return t===-1?O.value.tabs.push(r)-1:t}return-1}),h=f(()=>{let t=l.tabs.value.indexOf(s);return t===-1?S.value:t}),i=f(()=>h.value===l.selectedIndex.value);function B(t){var p;let b=t();if(b===j.Success&&l.activation.value==="auto"){let m=(p=ie(s))==null?void 0:p.activeElement,H=l.tabs.value.findIndex(W=>v(W)===m);H!==-1&&l.setSelectedIndex(H)}return b}function D(t){let p=l.tabs.value.map(b=>v(b)).filter(Boolean);if(t.key===y.Space||t.key===y.Enter){t.preventDefault(),t.stopPropagation(),l.setSelectedIndex(h.value);return}switch(t.key){case y.Home:case y.PageUp:return t.preventDefault(),t.stopPropagation(),B(()=>Q(p,I.First));case y.End:case y.PageDown:return t.preventDefault(),t.stopPropagation(),B(()=>Q(p,I.Last))}if(B(()=>G(l.orientation.value,{vertical(){return t.key===y.ArrowUp?Q(p,I.Previous|I.WrapAround):t.key===y.ArrowDown?Q(p,I.Next|I.WrapAround):j.Error},horizontal(){return t.key===y.ArrowLeft?Q(p,I.Previous|I.WrapAround):t.key===y.ArrowRight?Q(p,I.Next|I.WrapAround):j.Error}}))===j.Success)return t.preventDefault()}let w=R(!1);function n(){var t;w.value||(w.value=!0,!e.disabled&&((t=v(s))==null||t.focus({preventScroll:!0}),l.setSelectedIndex(h.value),oe(()=>{w.value=!1})))}function o(t){t.preventDefault()}let d=he(f(()=>({as:e.as,type:u.type})),s);return()=>{var t,p;let b={selected:i.value,disabled:(t=e.disabled)!=null?t:!1},{...m}=e,H={ref:s,onKeydown:D,onMousedown:o,onClick:n,id:r,role:"tab",type:d.value,"aria-controls":(p=v(l.panels.value[h.value]))==null?void 0:p.id,"aria-selected":i.value,tabIndex:i.value?0:-1,disabled:e.disabled?!0:void 0};return V({ourProps:H,theirProps:m,slot:b,attrs:u,slots:a,name:"Tab"})}}});const je=X({__name:"HTabList",props:U({options:{}},{modelValue:{},modelModifiers:{}}),emits:U(["change"],["update:modelValue"]),setup(e,{emit:u}){const a=e,c=u,A=de(e,"modelValue"),r=f({get(){return a.options.findIndex(s=>s.value===A.value)},set(s){A.value=a.options[s].value}});J(A,s=>{s&&c("change",s)});function l(s){A.value=a.options[s].value}return(s,O)=>{const S=ee;return x(),z(g(Oe),{"selected-index":g(r),onChange:l},{default:E(()=>[_(g(Re),{class:"inline-flex select-none items-center justify-center rounded-md bg-stone-1 p-1 ring-1 ring-stone-2 dark-bg-stone-9 dark-ring-stone-8"},{default:E(()=>[(x(!0),k(Z,null,ce(s.options,(h,i)=>(x(),z(g(Be),{key:i,as:"template"},{default:E(({selected:B})=>[$("button",{class:ve(["w-full inline-flex items-center justify-center gap-1 whitespace-nowrap border-size-0 rounded-md bg-inherit px-2 py-1.5 text-sm text-dark ring-stone-2 ring-inset dark-text-white focus-outline-none focus-ring-2 dark-ring-stone-8",{"cursor-default bg-white dark-bg-dark-9":B,"cursor-pointer opacity-50 hover-opacity-100":!B}])},[h.icon?(x(),z(S,{key:0,name:h.icon,class:"flex-shrink-0"},null,8,["name"])):T("",!0),pe(" "+L(h.label),1)],2)]),_:2},1024))),128))]),_:1})]),_:1},8,["selected-index"])}}}),Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRGOUZCMUI3NTEzQjExRUM5OTQxQjUzOTc2RDQ3NTBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRGOUZCMUI4NTEzQjExRUM5OTQxQjUzOTc2RDQ3NTBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REY5RkIxQjU1MTNCMTFFQzk5NDFCNTM5NzZENDc1MEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REY5RkIxQjY1MTNCMTFFQzk5NDFCNTM5NzZENDc1MEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5kfzU3AAAL+ElEQVR42uydXWyT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",He=e=>(ge("data-v-b2152b28"),e=e(),be(),e),Se={key:0,class:"copyright"},ke=He(()=>$("span",null,"Copyright",-1)),Qe={key:0},Xe=["href"],we={key:1},Pe={key:2,href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},Te=X({name:"Copyright",__name:"index",setup(e){const u=me(),a=Ae();return(c,A)=>{const r=ee;return g(u).meta.copyright??g(a).settings.copyright.enable?(x(),k("footer",Se,[ke,_(r,{name:"i-ri:copyright-line",size:18}),g(a).settings.copyright.dates?(x(),k("span",Qe,L(g(a).settings.copyright.dates),1)):T("",!0),g(a).settings.copyright.company?(x(),k(Z,{key:1},[g(a).settings.copyright.website?(x(),k("a",{key:0,href:g(a).settings.copyright.website,target:"_blank",rel:"noopener"},L(g(a).settings.copyright.company),9,Xe)):(x(),k("span",we,L(g(a).settings.copyright.company),1))],64)):T("",!0),g(a).settings.copyright.beian?(x(),k("a",Pe,L(g(a).settings.copyright.beian),1)):T("",!0)])):T("",!0)}}}),Ne=fe(Te,[["__scopeId","data-v-b2152b28"]]);export{Ne as C,je as _,Ge as i,he as s};
