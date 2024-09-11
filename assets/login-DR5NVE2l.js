import{d as C,u as D,r as b,a as P,b as m,o as I,c as V,w as o,e as a,f as e,g as d,h as l,i as B,V as O,_ as q,j as G,k as K,l as z,F as T,t as E,m as H,n as A,p as X,T as J,q as Q,s as W,v as Y,x as ee}from"./index-CCio_QS_.js";import{_ as oe,C as te,i as ne}from"./index-BNMer_dZ.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";const le=a("h3",{class:"mb-8 text-xl color-[var(--el-text-color-primary)] font-bold"}," 忘记密码了? 🔒 ",-1),ae={class:"mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]"},re=C({name:"ResetPasswordForm",__name:"index",props:{account:{}},emits:["onLogin","onResetPassword"],setup(x,{emit:k}){const y=x,g=k,{required:u,minLength:c,maxLength:v}=O,h=D(),R=b(!1),t=P({account:[y.account??localStorage.login_account??"",u],captcha:["",u],newPassword:["",[u,c(6),v(18)]]});function i(){h.info("重置密码仅提供界面演示，无实际功能，需开发者自行扩展"),t.valid.value?g("onResetPassword",t.getValue().account):t.markAsDirty()}return(r,f)=>{const n=q,p=m("IxInput"),s=m("IxFormItem"),_=m("IxButton"),w=m("IxForm");return I(),V(w,{control:l(t),class:"min-h-500px w-full flex-col-stretch-center p-12"},{default:o(()=>[le,a("div",null,[e(s,{message:"请输入用户名"},{default:o(()=>[e(p,{control:"account",size:"lg",placeholder:"用户名",tabindex:"1"},{prefix:o(()=>[e(n,{name:"ri:user-3-fill"})]),_:1})]),_:1}),e(s,{message:"请输入验证码"},{default:o(()=>[e(p,{control:"captcha",size:"lg",placeholder:"验证码",tabindex:"2"},{prefix:o(()=>[e(n,{name:"ic:baseline-verified-user"})]),suffix:o(()=>[e(_,{size:"xs"},{default:o(()=>[d(" 发送验证码 ")]),_:1})]),_:1})]),_:1}),e(s,{message:"请输入新密码"},{default:o(()=>[e(p,{control:"newPassword",size:"lg",type:"password",placeholder:"新密码",tabindex:"3"},{prefix:o(()=>[e(n,{name:"ri:lock-2-fill"})]),_:1})]),_:1})]),e(_,{loading:l(R),mode:"primary",size:"lg",style:{width:"100%","margin-top":"20px"},onClick:B(i,["prevent"])},{default:o(()=>[d(" 确认 ")]),_:1},8,["loading"]),a("div",ae,[e(_,{mode:"link",onClick:f[0]||(f[0]=L=>g("onLogin",l(t).getValue().account))},{default:o(()=>[d(" 去登录 ")]),_:1})])]),_:1},8,["control"])}}}),ce=a("h3",{class:"mb-8 text-xl color-[var(--el-text-color-primary)] font-bold"}," 探索从这里开始! 🚀 ",-1),ie={class:"mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]"},de=C({name:"RegisterForm",__name:"index",props:{account:{}},emits:["onLogin","onRegister"],setup(x,{emit:k}){const y=x,g=k,{required:u,minLength:c,maxLength:v}=O,h=D(),R=b(!1);function t(f,n){var p;if(f){if(f!==((p=n.root.get("password"))==null?void 0:p.getValue()))return{passwordConfirm:{message:"两次密码输入不一致"}}}else return{passwordRequired:{message:"请确认你的密码"}}}const i=P({account:[y.account??"",u],captcha:["",u],password:["",[u,c(6),v(18)]],checkPassword:["",[t]]});function r(){h.info("注册模块仅提供界面演示，无实际功能，需开发者自行扩展"),i.valid.value?g("onRegister",i.getValue().account):i.markAsDirty()}return(f,n)=>{const p=q,s=m("IxInput"),_=m("IxFormItem"),w=m("IxButton"),L=m("IxForm");return I(),V(L,{control:l(i),class:"min-h-500px w-full flex-col-stretch-center p-12"},{default:o(()=>[ce,a("div",null,[e(_,{message:"请输入用户名"},{default:o(()=>[e(s,{control:"account",size:"lg",placeholder:"用户名",tabindex:"1"},{prefix:o(()=>[e(p,{name:"ri:user-3-fill"})]),_:1})]),_:1}),e(_,{message:"请输入验证码"},{default:o(()=>[e(s,{control:"captcha",size:"lg",placeholder:"验证码",tabindex:"2"},{prefix:o(()=>[e(p,{name:"ic:baseline-verified-user"})]),suffix:o(()=>[e(w,{size:"xs"},{default:o(()=>[d(" 发送验证码 ")]),_:1})]),_:1})]),_:1}),e(_,{message:"请输入密码，密码长度为6到18位"},{default:o(()=>[e(s,{control:"password",size:"lg",type:"password",placeholder:"密码",tabindex:"3"},{prefix:o(()=>[e(p,{name:"ri:lock-2-fill"})]),_:1})]),_:1}),e(_,{message:"两次输入的密码不一致"},{default:o(()=>[e(s,{control:"checkPassword",size:"lg",type:"password",placeholder:"确认密码",tabindex:"4"},{prefix:o(()=>[e(p,{name:"ri:lock-2-fill"})]),_:1})]),_:1})]),e(w,{loading:l(R),mode:"primary",size:"lg",style:{width:"100%","margin-top":"20px"},onClick:B(r,["prevent"])},{default:o(()=>[d(" 注册 ")]),_:1},8,["loading"]),a("div",ie,[d(" 已经有帐号? "),e(w,{mode:"link",onClick:n[0]||(n[0]=S=>g("onLogin",l(i).getValue().account))},{default:o(()=>[d(" 去登录 ")]),_:1})])]),_:1},8,["control"])}}}),me={class:"mb-6"},ue={class:"mb-8 text-xl color-[var(--el-text-color-primary)] font-bold"},pe={class:"mb-4 flex-center-between"},_e={class:"mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]"},fe={key:1,class:"flex-col-center"},ge=a("img",{src:"https://s2.loli.net/2024/04/26/GsahtuIZ9XOg5jr.png",class:"h-[250px] w-[250px]"},null,-1),xe=a("div",{class:"mt-2 op-50"}," 请使用微信扫码登录 ",-1),ve=[ge,xe],Ie={class:"mt-4 text-center -mb-4"},he=C({name:"LoginForm",__name:"index",props:{account:{}},emits:["onLogin","onRegister","onResetPassword"],setup(x,{emit:k}){const y=x,g=k,{required:u,minLength:c,maxLength:v}=O,h=G(),R="One-step-admin 基础版",t=b(!1),i=b("default"),r=P({account:[y.account??localStorage.login_account??"",u],password:["",[u,c(6),v(18)]],remember:[!!localStorage.login_account]});function f(){r.valid.value?(t.value=!0,h.login(r.getValue()).then(()=>{t.value=!1,r.getValue().remember?localStorage.setItem("login_account",r.getValue().account):localStorage.removeItem("login_account"),g("onLogin",r.getValue().account)}).catch(()=>{t.value=!1})):r.markAsDirty()}function n(p){var s,_;(s=r.get("account"))==null||s.setValue(p),(_=r.get("password"))==null||_.setValue("123456"),X(()=>f())}return(p,s)=>{const _=oe,w=q,L=m("IxInput"),S=m("IxFormItem"),M=m("IxCheckbox"),$=m("IxButton"),U=m("IxDivider"),Z=m("IxSpace"),j=m("IxForm");return I(),V(j,{control:l(r),class:"min-h-500px w-full flex-col-stretch-center p-12"},{default:o(()=>[a("div",me,[e(_,{modelValue:l(i),"onUpdate:modelValue":s[0]||(s[0]=F=>K(i)?i.value=F:null),options:[{label:"账号密码登录",value:"default"},{label:"扫码登录",value:"qrcode"}]},null,8,["modelValue"])]),l(i)==="default"?(I(),z(T,{key:0},[a("h3",ue," 欢迎使用 "+E(l(R))+" ! 👋🏻 ",1),a("div",null,[e(S,{message:"请输入用户名"},{default:o(()=>[e(L,{control:"account",size:"lg",placeholder:"用户名",tabindex:"1"},{prefix:o(()=>[e(w,{name:"ri:user-3-fill"})]),_:1})]),_:1}),e(S,{message:"请输入密码，密码长度为6到18位"},{default:o(()=>[e(L,{control:"password",size:"lg",type:"password",placeholder:"密码",tabindex:"2",onKeyup:H(f,["enter"])},{prefix:o(()=>[e(w,{name:"ri:lock-2-fill"})]),_:1})]),_:1})]),a("div",pe,[e(M,{control:"remember"},{default:o(()=>[d(" 记住我 ")]),_:1}),e($,{mode:"link",onClick:s[1]||(s[1]=F=>g("onResetPassword",l(r).getValue().account))},{default:o(()=>[d(" 忘记密码了? ")]),_:1})]),e($,{loading:l(t),mode:"primary",size:"lg",style:{width:"100%"},onClick:B(f,["prevent"])},{default:o(()=>[d(" 登录 ")]),_:1},8,["loading"]),a("div",_e,[d(" 还没有帐号? "),e($,{mode:"link",onClick:s[2]||(s[2]=F=>g("onRegister",l(r).getValue().account))},{default:o(()=>[d(" 创建新帐号 ")]),_:1})])],64)):l(i)==="qrcode"?(I(),z("div",fe,ve)):A("",!0),a("div",Ie,[e(U,null,{default:o(()=>[d("演示账号一键登录")]),_:1}),e(Z,null,{default:o(()=>[e($,{mode:"primary",size:"xs",onClick:s[3]||(s[3]=F=>n("admin"))},{default:o(()=>[d(" admin ")]),_:1}),e($,{size:"xs",onClick:s[4]||(s[4]=F=>n("test"))},{default:o(()=>[d(" test ")]),_:1})]),_:1})])]),_:1},8,["control"])}}}),we=""+new URL("login-banner-ZfMZACb6.png",import.meta.url).href,N=x=>(W("data-v-e76978b8"),x=x(),Y(),x),be=N(()=>a("div",{class:"bg-banner"},null,-1)),ke={class:"login-box"},ye=N(()=>a("div",{class:"login-banner"},[a("img",{src:ne,class:"absolute left-4 top-4 h-30px rounded ring ring-stone-2 dark-ring-stone-8"}),a("img",{src:we,class:"banner"})],-1)),Re={class:"login-form flex-col-center"},Ve=C({name:"Login",__name:"login",setup(x){var h;const k=Q(),y=ee(),g=b(((h=k.query.redirect)==null?void 0:h.toString())??"/"),u=b(),c=b("login"),v=b();return(R,t)=>{const i=he,r=de,f=re;return I(),z(T,null,[be,a("div",ke,[ye,a("div",Re,[e(J,{name:"fade",mode:"out-in"},{default:o(()=>[l(c)==="login"?(I(),V(i,{key:0,ref_key:"formRef",ref:v,account:l(u),onOnLogin:t[0]||(t[0]=n=>l(y).push(l(g))),onOnRegister:t[1]||(t[1]=n=>{c.value="register",n=n}),onOnResetPassword:t[2]||(t[2]=n=>{c.value="resetPassword",n=n})},null,8,["account"])):l(c)==="register"?(I(),V(r,{key:1,ref_key:"formRef",ref:v,account:l(u),onOnRegister:t[3]||(t[3]=n=>{c.value="login",n=n}),onOnLogin:t[4]||(t[4]=n=>c.value="login")},null,8,["account"])):l(c)==="resetPassword"?(I(),V(f,{key:2,ref_key:"formRef",ref:v,account:l(u),onOnResetPassword:t[5]||(t[5]=n=>{c.value="login",n=n}),onOnLogin:t[6]||(t[6]=n=>c.value="login")},null,8,["account"])):A("",!0)]),_:1})])]),e(te)],64)}}}),Ce=se(Ve,[["__scopeId","data-v-e76978b8"]]);export{Ce as default};
