import {v,y as ye$1,D as De,e as Ai$1,U as UI,a6 as wh,a8 as re,P as Pe$1,bD as Q$1,X as u,ac as W,ab as q,R as Rc$1,C as fp,E as kc$1,az as Dp,aA as LE,aB as FE,g as ai$1,Y as Ye,ay as Vn$1,h as ei$1,aE as Zt$1,i as yn,r as rs$1,Z as iu$1,at as vu,f as fi$1,d as dp,l as lD,A as Ac$1,o as fE,q as cv,s as pE,M as Mp,aW as Ip,T as TE,aq as MD,n as vp,F as AE,ap as jp,bp as RD,$ as $p,m as Yv,O as Oc$1,B as Bp,J as Jv,u as up,a3 as CD,G as hu,I as gu,H as dD}from'./main-BI7U4UVS.js';import {z}from'./chunk-BjjjsOvS.js';var ra=(()=>{class e{constructor(){this.api=v(z);}consultarCredito(n){return Ai$1(this,null,function*(){return (yield wh(this.api.post("clientes/pago-publico/consultar-credito",{client_access_key:n},{},false,true,true))).data??false})}procesarPago(n){return Ai$1(this,null,function*(){return (yield wh(this.api.post("clientes/pago-publico/procesar-pago",n,{},false,true,true))).data??false})}static{this.\u0275fac=function(r){return new(r||e)};}static{this.\u0275prov=re({token:e,factory:e.\u0275fac,providedIn:"root"});}}return e})();var xa=Array.isArray,yl=Array.prototype.indexOf,dn=Array.prototype.includes,wl=Array.from,cr=Object.keys,On=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,xl=Object.getOwnPropertyDescriptors,Cl=Object.prototype,El=Array.prototype,Ca=Object.getPrototypeOf,ia=Object.isExtensible,$t=()=>{};function Sl(e){for(var t=0;t<e.length;t++)e[t]();}function Ea(){var e,t,n=new Promise((r,i)=>{e=r,t=i;});return {promise:n,resolve:e,reject:t}}var Ce=2,fn=4,pr=8,ci=1<<24,nt=16,pt=32,xt=64,Hr=128,qe=512,me=1024,we=2048,mt=4096,Ze=8192,at=16384,Vt=32768,Kr=1<<25,Mt=65536,ur=1<<17,kl=1<<18,Zt=1<<19,Tl=1<<20,Yt=65536,dr=1<<21,cn=1<<22,It=1<<23,un=Symbol("$state"),Al=Symbol("legacy props"),Pl=Symbol(""),Sa=Symbol("attributes"),Wr=Symbol("class"),Yr=Symbol("style"),Gr=Symbol("text"),Rn=Symbol("form reset"),mr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},jn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Fn=3,Un=8;function ka(e){return e===this.v}function Ta(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function $l(e){return !Ta(e,this.v)}function Il(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ml(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Rl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Dl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Vl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ll(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ol(){throw new Error("https://svelte.dev/e/hydration_failed")}function Nl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function jl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Fl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ul(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}var zl=1,Bl=2,ui="[",Aa="[!",aa="[?",Pa="]",Gt={},de=Symbol("uninitialized"),$a="http://www.w3.org/1999/xhtml",Hl="http://www.w3.org/2000/svg",Kl="http://www.w3.org/1998/Math/MathML",Wl="@attach",Oe=null;function hn(e){Oe=e;}function Et(e,t=false,n){Oe={p:Oe,i:false,c:null,e:null,s:e,x:null,r:R,l:null};}function St(e){var t=Oe,n=t.e;if(n!==null){t.e=null;for(var r of n)ao(r);}return e!==void 0&&(t.x=e),t.i=true,Oe=t.p,e??{}}function Ia(){return  true}var Ut=[];function Ma(){var e=Ut;Ut=[],Sl(e);}function wt(e){if(Ut.length===0&&!Dn){var t=Ut;queueMicrotask(()=>{t===Ut&&Ma();});}Ut.push(e);}function Yl(){for(;Ut.length>0;)Ma();}function Gl(){console.warn("https://svelte.dev/e/derived_inert");}function zn(e){console.warn("https://svelte.dev/e/hydration_mismatch");}function ql(){console.warn("https://svelte.dev/e/select_multiple_invalid_value");}function Zl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");}var D=false;function vt(e){D=e;}var U;function $e(e){if(e===null)throw zn(),Gt;return U=e}function qt(){return $e(bt(U))}function Q(e){if(D){if(bt(U)!==null)throw zn(),Gt;U=e;}}function di(e=1){if(D){for(var t=e,n=U;t--;)n=bt(n);U=n;}}function fi(e=true){for(var t=0,n=U;;){if(n.nodeType===Un){var r=n.data;if(r===Pa){if(t===0)return n;t-=1;}else (r===ui||r===Aa||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1);}var i=bt(n);e&&n.remove(),n=i;}}function Ra(e){if(!e||e.nodeType!==Un)throw zn(),Gt;return e.data}function yt(e){if(typeof e!="object"||e===null||un in e)return e;let t=Ca(e);if(t!==Cl&&t!==El)return e;var n=new Map,r=xa(e),i=O(0),a=Wt,l=s=>{if(Wt===a)return s();var c=B,u=Wt;Xe(null),fa(a);var f=s();return Xe(c),fa(u),f};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(s,c,u){(!("value"in u)||u.configurable===false||u.enumerable===false||u.writable===false)&&Nl();var f=n.get(c);return f===void 0?l(()=>{var v=O(u.value);return n.set(c,v),v}):E(f,u.value,true),true},deleteProperty(s,c){var u=n.get(c);if(u===void 0){if(c in s){let f=l(()=>O(de));n.set(c,f),Vn(i);}}else E(u,de),Vn(i);return  true},get(s,c,u){if(c===un)return e;var f=n.get(c),v=c in s;if(f===void 0&&(!v||sn(s,c)?.writable)&&(f=l(()=>{var _=yt(v?s[c]:de),g=O(_);return g}),n.set(c,f)),f!==void 0){var h=o(f);return h===de?void 0:h}return Reflect.get(s,c,u)},getOwnPropertyDescriptor(s,c){var u=Reflect.getOwnPropertyDescriptor(s,c);if(u&&"value"in u){var f=n.get(c);f&&(u.value=o(f));}else if(u===void 0){var v=n.get(c),h=v?.v;if(v!==void 0&&h!==de)return {enumerable:true,configurable:true,value:h,writable:true}}return u},has(s,c){if(c===un)return  true;var u=n.get(c),f=u!==void 0&&u.v!==de||Reflect.has(s,c);if(u!==void 0||R!==null&&(!f||sn(s,c)?.writable)){u===void 0&&(u=l(()=>{var h=f?yt(s[c]):de,_=O(h);return _}),n.set(c,u));var v=o(u);if(v===de)return  false}return f},set(s,c,u,f){var v=n.get(c),h=c in s;if(r&&c==="length")for(var _=u;_<v.v;_+=1){var g=n.get(_+"");g!==void 0?E(g,de):_ in s&&(g=l(()=>O(de)),n.set(_+"",g));}if(v===void 0)(!h||sn(s,c)?.writable)&&(v=l(()=>O(void 0)),E(v,yt(u)),n.set(c,v));else {h=v.v!==de;var T=l(()=>yt(u));E(v,T);}var M=Reflect.getOwnPropertyDescriptor(s,c);if(M?.set&&M.set.call(f,u),!h){if(r&&typeof c=="string"){var N=n.get("length"),fe=Number(c);Number.isInteger(fe)&&fe>=N.v&&E(N,fe+1);}Vn(i);}return  true},ownKeys(s){o(i);var c=Reflect.ownKeys(s).filter(v=>{var h=n.get(v);return h===void 0||h.v!==de});for(var[u,f]of n)f.v!==de&&!(u in s)&&c.push(u);return c},setPrototypeOf(){jl();}})}function oa(e){try{if(e!==null&&typeof e=="object"&&un in e)return e[un]}catch(t){}return e}function Jl(e,t){return Object.is(oa(e),oa(t))}var Ht,qr,Da,Va,La;function Zr(){if(Ht===void 0){Ht=window,qr=document,Da=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Va=sn(t,"firstChild").get,La=sn(t,"nextSibling").get,ia(e)&&(e[Wr]=void 0,e[Sa]=null,e[Yr]=void 0,e.__e=void 0),ia(n)&&(n[Gr]=void 0);}}function ot(e=""){return document.createTextNode(e)}function ze(e){return Va.call(e)}function bt(e){return La.call(e)}function ie(e,t){if(!D)return ze(e);var n=ze(U);if(n===null)n=U.appendChild(ot());else if(t&&n.nodeType!==Fn){var r=ot();return n?.before(r),$e(r),r}return t&&gr(n),$e(n),n}function on(e,t=false){if(!D){var n=ze(e);return n instanceof Comment&&n.data===""?bt(n):n}if(t){if(U?.nodeType!==Fn){var r=ot();return U?.before(r),$e(r),r}gr(U);}return U}function ee(e,t=1,n=false){let r=D?U:e;for(var i;t--;)i=r,r=bt(r);if(!D)return r;if(n){if(r?.nodeType!==Fn){var a=ot();return r===null?i?.after(a):r.before(a),$e(a),a}gr(r);}return $e(r),r}function Xl(e){e.textContent="";}function Ql(){return  false}function hi(e,t,n){return document.createElementNS(t??$a,e,void 0)}function gr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Fn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling;}function Oa(e){var t=R;if(t===null)return B.f|=It,e;if((t.f&Vt)===0&&(t.f&fn)===0)throw e;Pt(e,t);}function Pt(e,t){for(;t!==null;){if((t.f&Hr)!==0){if((t.f&Vt)===0)throw e;try{t.b.error(e);return}catch(n){e=n;}}t=t.parent;}throw e}var es=-7169;function se(e,t){e.f=e.f&es|t;}function vi(e){(e.f&qe)!==0||e.deps===null?se(e,me):se(e,mt);}function Na(e){if(e!==null)for(let t of e)(t.f&Ce)===0||(t.f&Yt)===0||(t.f^=Yt,Na(t.deps));}function ja(e,t,n){(e.f&we)!==0?t.add(e):(e.f&mt)!==0&&n.add(e),Na(e.deps),se(e,me);}function Fa(e,t,n){if(e==null)return t(void 0),$t;let r=Kn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var rn=[];function ts(e,t=$t){let n=null,r=new Set;function i(s){if(Ta(e,s)&&(e=s,n)){let c=!rn.length;for(let u of r)u[1](),rn.push(u,e);if(c){for(let u=0;u<rn.length;u+=2)rn[u][0](rn[u+1]);rn.length=0;}}}function a(s){i(s(e));}function l(s,c=$t){let u=[s,c];return r.add(u),r.size===1&&(n=t(i,a)||$t),s(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null);}}return {set:i,update:a,subscribe:l}}function In(e){let t;return Fa(e,n=>t=n)(),t}var Jr=Symbol("unmounted");function la(e,t,n){let r=n[t]??={store:null,source:qa(void 0),unsubscribe:$t};if(r.store!==e&&!(Jr in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=$t;else {var i=true;r.unsubscribe=Fa(e,a=>{i?r.source.v=a:E(r.source,a);}),i=false;}return e&&Jr in n?In(e):o(r.source)}function ns(){let e={};function t(){_r(()=>{for(var n in e)e[n].unsubscribe();On(e,Jr,{enumerable:false,value:true});});}return [e,t]}var Or=null,an=null,L=null,Xr=null,rt=null,Qr=null,Dn=false,Nr=false,ln=null,or=null,sa=0;var rs=1,Rt=class e{id=rs++;#e=false;linked=true;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;unblocked=new Set;#s=new Set;#r=new Set;#a=new Set;#i=0;#o=new Map;#f=null;#l=[];#v=[];#h=new Set;#c=new Set;#u=new Map;#d=new Set;is_fork=false;#g=false;#w(){if(this.is_fork)return  true;for(let r of this.#o.keys()){for(var t=r,n=false;t.parent!==null;){if(this.#u.has(t)){n=true;break}t=t.parent;}if(!n)return  true}return  false}skip_effect(t){this.#u.has(t)||this.#u.set(t,{d:[],m:[]}),this.#d.delete(t);}unskip_effect(t,n=r=>this.schedule(r)){var r=this.#u.get(t);if(r){this.#u.delete(t);for(var i of r.d)se(i,we),n(i);for(i of r.m)se(i,mt),n(i);}this.#d.add(t);}#m(){if(this.#e=true,sa++>1e3&&(this.#y(),is()),!this.#w()){for(let c of this.#h)this.#c.delete(c),se(c,we),this.schedule(c);for(let c of this.#c)se(c,mt),this.schedule(c);}let t=this.#l;this.#l=[],this.apply();var n=ln=[],r=[],i=or=[];for(let c of t)try{this.#x(c,n,r);}catch(u){throw Ba(c),u}if(L=null,i.length>0){var a=e.ensure();for(let c of i)a.schedule(c);}if(ln=null,or=null,this.#w()){this.#p(r),this.#p(n);for(let[c,u]of this.#u)za(c,u);i.length>0&&L.#m();return}let l=this.#C();if(l){l.#b(this);return}this.#h.clear(),this.#c.clear();for(let c of this.#s)c(this);this.#s.clear(),Xr=this,ca(r),ca(n),Xr=null,this.#f?.resolve();var s=L;if(this.linked&&this.#i===0&&this.#y(),this.#l.length>0){s===null&&(s=this,this.#_());let c=s;c.#l.push(...this.#l.filter(u=>!c.#l.includes(u)));}s!==null&&s.#m();}#x(t,n,r){t.f^=me;for(var i=t.first;i!==null;){var a=i.f,l=(a&(pt|xt))!==0,s=l&&(a&me)!==0,c=s||(a&Ze)!==0||this.#u.has(i);if(!c&&i.fn!==null){l?i.f^=me:(a&fn)!==0?n.push(i):Hn(i)&&((a&nt)!==0&&this.#c.add(i),vn(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent;}}}#C(){for(var t=this.#t;t!==null;){if(!t.is_fork){for(let[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=t.#t;}return null}#b(t){for(let[r,i]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,i);for(let[r,i]of t.async_deriveds){let a=this.async_deriveds.get(r);a&&i.promise.then(a.resolve);}let n=r=>{var i=r.reactions;if(i!==null)for(let s of i){var a=s.f;if((a&Ce)!==0)n(s);else {var l=s;a&(cn|nt)&&!this.async_deriveds.has(l)&&(this.#c.delete(l),se(l,we),this.schedule(l));}}};for(let r of this.current.keys())n(r);this.oncommit(()=>t.discard()),t.#y(),L=this,this.#m();}#p(t){for(var n=0;n<t.length;n+=1)ja(t[n],this.#h,this.#c);}capture(t,n,r=false){t.v!==de&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&It)===0&&(this.current.set(t,[n,r]),rt?.set(t,n)),this.is_fork||(t.v=n);}activate(){L=this;}deactivate(){L=null,rt=null;}flush(){try{Nr=!0,L=this,this.#m();}finally{sa=0,Qr=null,ln=null,or=null,Nr=false,L=null,rt=null,Kt.clear();}}discard(){for(let t of this.#r)t(this);this.#r.clear(),this.#a.clear(),this.#y();}register_created_effect(t){this.#v.push(t);}#E(){this.#y();for(let f=Or;f!==null;f=f.#n){var t=f.id<this.id,n=[];for(let[v,[h,_]]of this.current){if(f.current.has(v)){var r=f.current.get(v)[0];if(t&&h!==r)f.current.set(v,[h,_]);else continue}n.push(v);}if(t)for(let[v,h]of this.async_deriveds){let _=f.async_deriveds.get(v);_&&h.promise.then(_.resolve);}if(f.#e){var i=[...f.current.keys()].filter(v=>!this.current.has(v));if(i.length===0)t&&f.discard();else if(n.length>0){if(t)for(let v of this.#d)f.unskip_effect(v,h=>{(h.f&(nt|cn))!==0?f.schedule(h):f.#p([h]);});f.activate();var a=new Set,l=new Map;for(var s of n)Ua(s,i,a,l);l=new Map;var c=[...f.current.keys()].filter(v=>this.current.has(v)?this.current.get(v)[0]!==v.v:true);if(c.length>0)for(let v of this.#v)(v.f&(at|Ze|ur))===0&&pi(v,c,l)&&((v.f&(cn|nt))!==0?(se(v,we),f.schedule(v)):f.#h.add(v));if(f.#l.length>0){f.apply();for(var u of f.#l)f.#x(u,[],[]);f.#l=[];}f.deactivate();}}}}increment(t,n){if(this.#i+=1,t){let r=this.#o.get(n)??0;this.#o.set(n,r+1);}}decrement(t,n){if(this.#i-=1,t){let r=this.#o.get(n)??0;r===1?this.#o.delete(n):this.#o.set(n,r-1);}this.#g||(this.#g=true,wt(()=>{this.#g=false,this.linked&&this.flush();}));}transfer_effects(t,n){for(let r of t)this.#h.add(r);for(let r of n)this.#c.add(r);t.clear(),n.clear();}oncommit(t){this.#s.add(t);}ondiscard(t){this.#r.add(t);}on_fork_commit(t){this.#a.add(t);}run_fork_commit_callbacks(){for(let t of this.#a)t(this);this.#a.clear();}settled(){return (this.#f??=Ea()).promise}static ensure(){if(L===null){let t=L=new e;t.#_(),!Nr&&!Dn&&wt(()=>{t.#e||t.flush();});}return L}apply(){{rt=null;return}}schedule(t){if(Qr=t,t.b?.is_pending&&(t.f&(fn|pr|ci))!==0&&(t.f&Vt)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(ln!==null&&n===R&&(B===null||(B.f&Ce)===0))return;if((r&(xt|pt))!==0){if((r&me)===0)return;n.f^=me;}}this.#l.push(n);}#_(){an===null?Or=an=this:(an.#n=this,this.#t=an),an=this;}#y(){var t=this.#t,n=this.#n;t===null?Or=n:t.#n=n,n===null?an=t:n.#t=t,this.linked=false;}};function J(e){var t=Dn;Dn=true;try{for(var n;;){if(Yl(),L===null)return n;L.flush();}}finally{Dn=t;}}function is(){try{Ll();}catch(e){Pt(e,Qr);}}var _t=null;function ca(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(at|Ze))===0&&Hn(r)&&(_t=new Set,vn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&co(r),_t?.size>0)){Kt.clear();for(let i of _t){if((i.f&(at|Ze))!==0)continue;let a=[i],l=i.parent;for(;l!==null;)_t.has(l)&&(_t.delete(l),a.push(l)),l=l.parent;for(let s=a.length-1;s>=0;s--){let c=a[s];(c.f&(at|Ze))===0&&vn(c);}}_t.clear();}}_t=null;}}function Ua(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let a=i.f;(a&Ce)!==0?Ua(i,t,n,r):(a&(cn|nt))!==0&&(a&we)===0&&pi(i,t,r)&&(se(i,we),mi(i));}}function pi(e,t,n){let r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(let i of e.deps){if(dn.call(t,i))return  true;if((i.f&Ce)!==0&&pi(i,t,n))return n.set(i,true),true}return n.set(e,false),false}function mi(e){L.schedule(e);}function za(e,t){if(!((e.f&pt)!==0&&(e.f&me)!==0)){(e.f&we)!==0?t.d.push(e):(e.f&mt)!==0&&t.m.push(e),se(e,me);for(var n=e.first;n!==null;)za(n,t),n=n.next;}}function Ba(e){se(e,me);for(var t=e.first;t!==null;)Ba(t),t=t.next;}function as(e){let t=0,n=Bn(0),r;return ()=>{_i()&&(o(n),yr(()=>(t===0&&(r=Kn(()=>e(()=>Vn(n)))),t+=1,()=>{wt(()=>{t-=1,t===0&&(r?.(),r=void 0,Vn(n));});})));}}var os=Mt|Zt;function ls(e,t,n,r){new ei(e,t,n,r);}var ei=class{parent;is_pending=false;transform_error;#e;#t=D?U:null;#n;#s;#r;#a=null;#i=null;#o=null;#f=null;#l=0;#v=0;#h=false;#c=new Set;#u=new Set;#d=null;#g=as(()=>(this.#d=Bn(this.#l),()=>{this.#d=null;}));constructor(t,n,r,i){this.#e=t,this.#n=n,this.#s=a=>{var l=R;l.b=this,l.f|=Hr,r(a);},this.parent=R.b,this.transform_error=i??this.parent?.transform_error??(a=>a),this.#r=Wn(()=>{if(D){let a=this.#t;qt();let l=a.data===Aa;if(a.data.startsWith(aa)){let c=JSON.parse(a.data.slice(aa.length));this.#m(c);}else l?this.#x():this.#w();}else this.#C();},os),D&&(this.#e=U);}#w(){try{this.#a=tt(()=>this.#s(this.#e));}catch(t){this.error(t);}}#m(t){let n=this.#n.failed;n&&(this.#o=tt(()=>{n(this.#e,()=>t,()=>()=>{});}));}#x(){let t=this.#n.pending;t&&(this.is_pending=true,this.#i=tt(()=>t(this.#e)),wt(()=>{var n=this.#f=document.createDocumentFragment(),r=ot();n.append(r),this.#a=this.#p(()=>tt(()=>this.#s(r))),this.#v===0&&(this.#e.before(n),this.#f=null,Ln(this.#i,()=>{this.#i=null;}),this.#b(L));}));}#C(){try{if(this.is_pending=this.has_pending_snippet(),this.#v=0,this.#l=0,this.#a=tt(()=>{this.#s(this.#e);}),this.#v>0){var t=this.#f=document.createDocumentFragment();ho(this.#a,t);let n=this.#n.pending;this.#i=tt(()=>n(this.#e));}else this.#b(L);}catch(n){this.error(n);}}#b(t){this.is_pending=false,t.transfer_effects(this.#c,this.#u);}defer_effect(t){ja(t,this.#c,this.#u);}is_rendered(){return !this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return !!this.#n.pending}#p(t){var n=R,r=B,i=Oe;gt(this.#r),Xe(this.#r),hn(this.#r.ctx);try{return Rt.ensure(),t()}catch(a){return Oa(a),null}finally{gt(n),Xe(r),hn(i);}}#E(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#E(t,n);return}this.#v+=t,this.#v===0&&(this.#b(n),this.#i&&Ln(this.#i,()=>{this.#i=null;}),this.#f&&(this.#e.before(this.#f),this.#f=null));}update_pending_count(t,n){this.#E(t,n),this.#l+=t,!(!this.#d||this.#h)&&(this.#h=true,wt(()=>{this.#h=false,this.#d&&vr(this.#d,this.#l);}));}get_effect_pending(){return this.#g(),o(this.#d)}error(t){if(!this.#n.onerror&&!this.#n.failed)throw t;L?.is_fork?(this.#a&&L.skip_effect(this.#a),this.#i&&L.skip_effect(this.#i),this.#o&&L.skip_effect(this.#o),L.on_fork_commit(()=>{this.#_(t);})):this.#_(t);}#_(t){this.#a&&(xe(this.#a),this.#a=null),this.#i&&(xe(this.#i),this.#i=null),this.#o&&(xe(this.#o),this.#o=null),D&&($e(this.#t),di(),$e(fi()));var n=this.#n.onerror;let r=this.#n.failed;var i=false,a=false;let l=()=>{if(i){Zl();return}i=true,a&&Ul(),this.#o!==null&&Ln(this.#o,()=>{this.#o=null;}),this.#p(()=>{this.#C();});},s=c=>{try{a=!0,n?.(c,l),a=!1;}catch(u){Pt(u,this.#r&&this.#r.parent);}r&&(this.#o=this.#p(()=>{try{return tt(()=>{var u=R;u.b=this,u.f|=Hr,r(this.#e,()=>c,()=>l);})}catch(u){return Pt(u,this.#r.parent),null}}));};wt(()=>{var c;try{c=this.transform_error(t);}catch(u){Pt(u,this.#r&&this.#r.parent);return}c!==null&&typeof c=="object"&&typeof c.then=="function"?c.then(s,u=>Pt(u,this.#r&&this.#r.parent)):s(c);});}};function Ha(e,t,n,r){let i=gi;var a=e.filter(h=>!h.settled);if(n.length===0&&a.length===0){r(t.map(i));return}var l=R,s=ss(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function u(h){if((l.f&at)===0){s();try{r(h);}catch(_){Pt(_,l);}fr();}}var f=Ka();if(n.length===0){c.then(()=>u(t.map(i))).finally(f);return}function v(){Promise.all(n.map(h=>cs(h))).then(h=>u([...t.map(i),...h])).catch(h=>Pt(h,l)).finally(f);}c?c.then(()=>{s(),v(),fr();}):v();}function ss(){var e=R,t=B,n=Oe,r=L;return function(a=true){gt(e),Xe(t),hn(n),a&&(e.f&at)===0&&(r?.activate(),r?.apply());}}function fr(e=true){gt(null),Xe(null),hn(null),e&&L?.deactivate();}function Ka(){var e=R,t=e.b,n=L,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),()=>{t.update_pending_count(-1,n),n.decrement(r,e);}}function gi(e){var t=Ce|we;return R!==null&&(R.f|=Zt),{ctx:Oe,deps:null,effects:null,equals:ka,f:t,fn:e,reactions:null,rv:0,v:de,wv:0,parent:R,ac:null}}var rr=Symbol("obsolete");function cs(e,t,n){let r=R;r===null&&Ml();var i=void 0,a=Bn(de),l=!B,s=new Set;return ws(()=>{var c=R,u=Ea();i=u.promise;try{Promise.resolve(e()).then(u.resolve,_=>{_!==mr&&u.reject(_);}).finally(fr);}catch(_){u.reject(_),fr();}var f=L;if(l){if((c.f&Vt)!==0)var v=Ka();if(r.b.is_rendered())f.async_deriveds.get(c)?.reject(rr);else for(let _ of s.values())_.reject(rr);s.add(u),f.async_deriveds.set(c,u);}let h=(_,g=void 0)=>{v?.(),s.delete(u),g!==rr&&(f.activate(),g?(a.f|=It,vr(a,g)):((a.f&It)!==0&&(a.f^=It),vr(a,_)),f.deactivate());};u.promise.then(h,_=>h(null,_||"unknown"));}),_r(()=>{for(let c of s)c.reject(rr);}),new Promise(c=>{function u(f){function v(){f===i?c(a):u(i);}f.then(v,v);}u(i);})}function Pe(e){let t=gi(e);return Xa(t),t}function us(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)xe(t[n]);}}function bi(e){var t,n=R,r=e.parent;if(!Ct&&r!==null&&e.v!==de&&(r.f&(at|Ze))!==0)return Gl(),e.v;gt(r);try{e.f&=~Yt,us(e),t=no(e);}finally{gt(n);}return t}function Wa(e){var t=bi(e);if(!e.equals(t)&&(e.wv=eo(),(!L?.is_fork||e.deps===null)&&(L!==null?(L.capture(e,t,true),Xr?.capture(e,t,true)):e.v=t,e.deps===null))){se(e,me);return}Ct||(rt!==null?(_i()||L?.is_fork)&&rt.set(e,t):vi(e));}function ds(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(mr),t.fn!==null&&(t.teardown=$t),t.ac=null,Nn(t,0),wi(t));}function Ya(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&vn(t);}var hr=new Set,Kt=new Map,Ga=false;function Bn(e,t){var n={f:0,v:e,reactions:null,equals:ka,rv:0,wv:0};return n}function O(e,t){let n=Bn(e);return Xa(n),n}function qa(e,t=false,n=true){let r=Bn(e);return t||(r.equals=$l),r}function E(e,t,n=false){B!==null&&(!it||(B.f&ur)!==0)&&Ia()&&(B.f&(Ce|nt|cn|ur))!==0&&(Je===null||!dn.call(Je,e))&&Fl();let r=n?yt(t):t;return vr(e,r,or)}function vr(e,t,n=null){if(!e.equals(t)){Kt.set(e,Ct?t:e.v);var r=Rt.ensure();if(r.capture(e,t),(e.f&Ce)!==0){let i=e;(e.f&we)!==0&&bi(i),rt===null&&vi(i);}e.wv=eo(),Za(e,we,n),R!==null&&(R.f&me)!==0&&(R.f&(pt|xt))===0&&(Ge===null?ps([e]):Ge.push(e)),!r.is_fork&&hr.size>0&&!Ga&&fs();}return t}function fs(){Ga=false;for(let e of hr){(e.f&me)!==0&&se(e,mt);let t;try{t=Hn(e);}catch(n){t=true;}t&&vn(e);}hr.clear();}function Vn(e){E(e,e.v+1);}function Za(e,t,n){var r=e.reactions;if(r!==null)for(var i=r.length,a=0;a<i;a++){var l=r[a],s=l.f,c=(s&we)===0;if(c&&se(l,t),(s&ur)!==0)hr.add(l);else if((s&Ce)!==0){var u=l;rt?.delete(u),(s&Yt)===0&&(s&qe&&(R===null||(R.f&dr)===0)&&(l.f|=Yt),Za(u,mt,n));}else if(c){var f=l;(s&nt)!==0&&_t!==null&&_t.add(f),n!==null?n.push(f):mi(f);}}}function hs(e,t){if(t){let n=document.body;e.autofocus=true,wt(()=>{document.activeElement===n&&e.focus();});}}var ua=false;function Ja(){ua||(ua=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[Rn]?.();});},{capture:true}));}function br(e){var t=B,n=R;Xe(null),gt(null);try{return e()}finally{Xe(t),gt(n);}}function vs(e,t,n,r=n){e.addEventListener(t,()=>br(n));let i=e[Rn];i?e[Rn]=()=>{i(),r(true);}:e[Rn]=()=>r(true),Ja();}var lr=false,Ct=false;function da(e){Ct=e;}var B=null,it=false;function Xe(e){B=e;}var R=null;function gt(e){R=e;}var Je=null;function Xa(e){B!==null&&(Je===null?Je=[e]:Je.push(e));}var Le=null,Fe=0,Ge=null;function ps(e){Ge=e;}var Qa=1,zt=0,Wt=zt;function fa(e){Wt=e;}function eo(){return ++Qa}function Hn(e){var t=e.f;if((t&we)!==0)return  true;if(t&Ce&&(e.f&=~Yt),(t&mt)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Hn(a)&&Wa(a),a.wv>e.wv)return  true}(t&qe)!==0&&rt===null&&se(e,me);}return  false}function to(e,t,n=true){var r=e.reactions;if(r!==null&&!(Je!==null&&dn.call(Je,e)))for(var i=0;i<r.length;i++){var a=r[i];(a.f&Ce)!==0?to(a,t,false):t===a&&(n?se(a,we):(a.f&me)!==0&&se(a,mt),mi(a));}}function no(e){var t=Le,n=Fe,r=Ge,i=B,a=Je,l=Oe,s=it,c=Wt,u=e.f;Le=null,Fe=0,Ge=null,B=(u&(pt|xt))===0?e:null,Je=null,hn(e.ctx),it=false,Wt=++zt,e.ac!==null&&(br(()=>{e.ac.abort(mr);}),e.ac=null);try{e.f|=dr;var f=e.fn,v=f();e.f|=Vt;var h=e.deps,_=L?.is_fork;if(Le!==null){var g;if(_||Nn(e,Fe),h!==null&&Fe>0)for(h.length=Fe+Le.length,g=0;g<Le.length;g++)h[Fe+g]=Le[g];else e.deps=h=Le;if(_i()&&(e.f&qe)!==0)for(g=Fe;g<h.length;g++)(h[g].reactions??=[]).push(e);}else !_&&h!==null&&Fe<h.length&&(Nn(e,Fe),h.length=Fe);if(Ia()&&Ge!==null&&!it&&h!==null&&(e.f&(Ce|mt|we))===0)for(g=0;g<Ge.length;g++)to(Ge[g],e);if(i!==null&&i!==e){if(zt++,i.deps!==null)for(let T=0;T<n;T+=1)i.deps[T].rv=zt;if(t!==null)for(let T of t)T.rv=zt;Ge!==null&&(r===null?r=Ge:r.push(...Ge));}return (e.f&It)!==0&&(e.f^=It),v}catch(T){return Oa(T)}finally{e.f^=dr,Le=t,Fe=n,Ge=r,B=i,Je=a,hn(l),it=s,Wt=c;}}function ms(e,t){let n=t.reactions;if(n!==null){var r=yl.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop());}}if(n===null&&(t.f&Ce)!==0&&(Le===null||!dn.call(Le,t))){var a=t;(a.f&qe)!==0&&(a.f^=qe,a.f&=~Yt),a.v!==de&&vi(a),ds(a),Nn(a,0);}}function Nn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ms(e,n[r]);}function vn(e){var t=e.f;if((t&at)===0){se(e,me);var n=R,r=lr;R=e,lr=true;try{(t&(nt|ci))!==0?xs(e):wi(e),lo(e);var i=no(e);e.teardown=typeof i=="function"?i:null,e.wv=Qa;var a;}finally{lr=r,R=n;}}}function Bt(){return Ai$1(this,null,function*(){yield Promise.resolve(),J();})}function o(e){var t=e.f,n=(t&Ce)!==0;if(B!==null&&!it){var r=R!==null&&(R.f&at)!==0;if(!r&&(Je===null||!dn.call(Je,e))){var i=B.deps;if((B.f&dr)!==0)e.rv<zt&&(e.rv=zt,Le===null&&i!==null&&i[Fe]===e?Fe++:Le===null?Le=[e]:Le.push(e));else {(B.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[B]:dn.call(a,B)||a.push(B);}}}if(Ct&&Kt.has(e))return Kt.get(e);if(n){var l=e;if(Ct){var s=l.v;return ((l.f&me)===0&&l.reactions!==null||io(l))&&(s=bi(l)),Kt.set(l,s),s}var c=(l.f&qe)===0&&!it&&B!==null&&(lr||(B.f&qe)!==0),u=(l.f&Vt)===0;Hn(l)&&(c&&(l.f|=qe),Wa(l)),c&&!u&&(Ya(l),ro(l));}if(rt?.has(e))return rt.get(e);if((e.f&It)!==0)throw e.v;return e.v}function ro(e){if(e.f|=qe,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&Ce)!==0&&(t.f&qe)===0&&(Ya(t),ro(t));}function io(e){if(e.v===de)return  true;if(e.deps===null)return  false;for(let t of e.deps)if(Kt.has(t)||(t.f&Ce)!==0&&io(t))return  true;return  false}function Kn(e){var t=it;try{return it=!0,e()}finally{it=t;}}function gs(e){R===null&&(B===null&&Vl(),Dl()),Ct&&Rl();}function bs(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e);}function lt(e,t){var n=R;n!==null&&(n.f&Ze)!==0&&(e|=Ze);var r={ctx:Oe,deps:null,nodes:null,f:e|we|qe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};L?.register_created_effect(r);var i=r;if((e&fn)!==0)ln!==null?ln.push(r):Rt.ensure().schedule(r);else if(t!==null){try{vn(r);}catch(l){throw xe(r),l}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Zt)===0&&(i=i.first,(e&nt)!==0&&(e&Mt)!==0&&i!==null&&(i.f|=Mt));}if(i!==null&&(i.parent=n,n!==null&&bs(i,n),B!==null&&(B.f&Ce)!==0&&(e&xt)===0)){var a=B;(a.effects??=[]).push(i);}return r}function _i(){return B!==null&&!it}function _r(e){let t=lt(pr,null);return se(t,me),t.teardown=e,t}function Ue(e){gs();var t=R.f,n=!B&&(t&pt)!==0&&(t&Vt)===0;if(n){var r=Oe;(r.e??=[]).push(e);}else return ao(e)}function ao(e){return lt(fn|Tl,e)}function _s(e){Rt.ensure();let t=lt(xt|Zt,e);return ()=>{xe(t);}}function ys(e){Rt.ensure();let t=lt(xt|Zt,e);return (n={})=>new Promise(r=>{n.outro?Ln(t,()=>{xe(t),r(void 0);}):(xe(t),r(void 0));})}function yi(e){return lt(fn,e)}function ws(e){return lt(cn|Zt,e)}function yr(e,t=0){return lt(pr|t,e)}function Te(e,t=[],n=[],r=[]){Ha(r,t,n,i=>{lt(pr,()=>e(...i.map(o)));});}function Wn(e,t=0){var n=lt(nt|t,e);return n}function oo(e,t=0){var n=lt(ci|t,e);return n}function tt(e){return lt(pt|Zt,e)}function lo(e){var t=e.teardown;if(t!==null){let n=Ct,r=B;da(true),Xe(null);try{t.call(null);}finally{da(n),Xe(r);}}}function wi(e,t=false){var n=e.first;for(e.first=e.last=null;n!==null;){let i=n.ac;i!==null&&br(()=>{i.abort(mr);});var r=n.next;(n.f&xt)!==0?n.parent=null:xe(n,t),n=r;}}function xs(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&pt)===0&&xe(t),t=n;}}function xe(e,t=true){var n=false;(t||(e.f&kl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(so(e.nodes.start,e.nodes.end),n=true),se(e,Kr),wi(e,t&&!n),Nn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let a of r)a.stop();lo(e),e.f^=Kr,e.f|=at;var i=e.parent;i!==null&&i.first!==null&&co(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null;}function so(e,t){for(;e!==null;){var n=e===t?null:bt(e);e.remove(),e=n;}}function co(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n));}function Ln(e,t,n=true){var r=[];uo(e,r,true);var i=()=>{n&&xe(e),t&&t();},a=r.length;if(a>0){var l=()=>--a||i();for(var s of r)s.out(l);}else i();}function uo(e,t,n){if((e.f&Ze)===0){e.f^=Ze;var r=e.nodes&&e.nodes.t;if(r!==null)for(let s of r)(s.is_global||n)&&t.push(s);for(var i=e.first;i!==null;){var a=i.next;if((i.f&xt)===0){var l=(i.f&Mt)!==0||(i.f&pt)!==0&&(e.f&nt)!==0;uo(i,t,l?n:false);}i=a;}}}function Cs(e){fo(e,true);}function fo(e,t){if((e.f&Ze)!==0){e.f^=Ze,(e.f&me)===0&&(se(e,we),Rt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Mt)!==0||(n.f&pt)!==0;fo(n,i?t:false),n=r;}var a=e.nodes&&e.nodes.t;if(a!==null)for(let l of a)(l.is_global||t)&&l.in();}}function ho(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:bt(n);t.append(n),n=i;}}function ha(e){let t={get:n=>In(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(In(t.store),{[n]:r}):Object.assign(In(t.store),n),t.store.set(In(t.store));},store:ts(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:ha({}),i18n:ha({}),instances:new Set,plugins:new Set};var Es={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",Es);var Ss="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Ss);var Mn=Symbol("events"),vo=new Set,ti=new Set;function po(e,t,n,r={}){function i(a){if(r.capture||ni.call(t,a),!a.cancelBubble)return br(()=>n?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?wt(()=>{t.addEventListener(e,i,r);}):t.addEventListener(e,i,r),i}function pe(e,t,n,r,i){var a={capture:r,passive:i},l=po(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&_r(()=>{t.removeEventListener(e,l,a);});}function wr(e,t,n){(t[Mn]??={})[e]=n;}function xr(e){for(var t=0;t<e.length;t++)vo.add(e[t]);for(var n of ti)n(e);}var va=null;function ni(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;va=e;var l=0,s=va===e&&e[Mn];if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window)){e[Mn]=t;return}var u=i.indexOf(t);if(u===-1)return;c<=u&&(l=c);}if(a=i[l]||e.target,a!==t){On(e,"currentTarget",{configurable:true,get(){return a||n}});var f=B,v=R;Xe(null),gt(null);try{for(var h,_=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var T=a[Mn]?.[r];T!=null&&(!a.disabled||e.target===a)&&T.call(a,e);}catch(M){h?_.push(M):h=M;}if(e.cancelBubble||g===t||g===null)break;a=g;}if(h){for(let M of _)queueMicrotask(()=>{throw M});throw h}}finally{e[Mn]=t,delete e.currentTarget,Xe(f),gt(v);}}}var ks=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Ts(e){return ks?.createHTML(e)??e}function mo(e){var t=hi("template");return t.innerHTML=Ts(e.replaceAll("<!>","<!---->")),t.content}function Be(e,t){var n=R;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null});}function ne(e,t){var n=(t&zl)!==0,r=(t&Bl)!==0,i,a=!e.startsWith("<!>");return ()=>{if(D)return Be(U,null),U;i===void 0&&(i=mo(a?e:"<!>"+e),n||(i=ze(i)));var l=r||Da?document.importNode(i,true):i.cloneNode(true);if(n){var s=ze(l),c=l.lastChild;Be(s,c);}else Be(l,l);return l}}function As(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,a;return ()=>{if(D)return Be(U,null),U;if(!a){var l=mo(i),s=ze(l);a=ze(s);}var c=a.cloneNode(true);return Be(c,c),c}}function xi(e,t){return As(e,t,"svg")}function ir(e=""){if(!D){var t=ot(e+"");return Be(t,t),t}var n=U;return n.nodeType!==Fn?(n.before(n=ot()),$e(n)):gr(n),Be(n,n),n}function pa(){if(D)return Be(U,null),U;var e=document.createDocumentFragment(),t=document.createComment(""),n=ot();return e.append(t,n),Be(t,n),e}function F(e,t){if(D){var n=R;((n.f&Vt)===0||n.nodes.end===null)&&(n.nodes.end=U),qt();return}e!==null&&e.before(t);}function Ps(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}var $s=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Is(e){return $s.includes(e)}var Ms={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Rs(e){return e=e.toLowerCase(),Ms[e]??e}var Ds=["touchstart","touchmove"];function Vs(e){return Ds.includes(e)}function ht(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Gr]??=e.nodeValue)&&(e[Gr]=n,e.nodeValue=`${n}`);}function go(e,t){return bo(e,t)}function Ls(e,t){Zr(),t.intro=t.intro??false;let n=t.target,r=D,i=U;try{for(var a=ze(n);a&&(a.nodeType!==Un||a.data!==ui);)a=bt(a);if(!a)throw Gt;vt(!0),$e(a);let l=bo(e,W(q({},t),{anchor:a}));return vt(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw l;return l!==Gt&&console.warn("Failed to hydrate: ",l),t.recover===false&&Ol(),Zr(),Xl(n),vt(false),go(e,t)}finally{vt(r),$e(i);}}var ar=new Map;function bo(e,{target:t,anchor:n,props:r={},events:i,context:a,intro:l=true,transformError:s}){Zr();var c=void 0,u=ys(()=>{var f=n??t.appendChild(ot());ls(f,{pending:()=>{}},_=>{Et({});var g=Oe;if(a&&(g.c=a),i&&(r.$$events=i),D&&Be(_,null),c=e(_,r)||{},D&&(R.nodes.end=U,U===null||U.nodeType!==Un||U.data!==Pa))throw zn(),Gt;St();},s);var v=new Set,h=_=>{for(var g=0;g<_.length;g++){var T=_[g];if(!v.has(T)){v.add(T);var M=Vs(T);for(let ce of [t,document]){var N=ar.get(ce);N===void 0&&(N=new Map,ar.set(ce,N));var fe=N.get(T);fe===void 0?(ce.addEventListener(T,ni,{passive:M}),N.set(T,1)):N.set(T,fe+1);}}}};return h(wl(vo)),ti.add(h),()=>{for(var _ of v)for(let M of [t,document]){var g=ar.get(M),T=g.get(_);--T==0?(M.removeEventListener(_,ni),g.delete(_),g.size===0&&ar.delete(M)):g.set(_,T);}ti.delete(h),f!==n&&f.parentNode?.removeChild(f);}});return ri.set(c,u),c}var ri=new WeakMap;function Os(e,t){let n=ri.get(e);return n?(ri.delete(e),n(t)):Promise.resolve()}var pn=class{anchor;#e=new Map;#t=new Map;#n=new Map;#s=new Set;#r=true;constructor(t,n=true){this.anchor=t,this.#r=n;}#a=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)Cs(r),this.#s.delete(n);else {var i=this.#n.get(n);i&&(this.#t.set(n,i.effect),this.#n.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect);}for(let[a,l]of this.#e){if(this.#e.delete(a),a===t)break;let s=this.#n.get(l);s&&(xe(s.effect),this.#n.delete(l));}for(let[a,l]of this.#t){if(a===n||this.#s.has(a))continue;let s=()=>{if(Array.from(this.#e.values()).includes(a)){var u=document.createDocumentFragment();ho(l,u),u.append(ot()),this.#n.set(a,{effect:l,fragment:u});}else xe(l);this.#s.delete(a),this.#t.delete(a);};this.#r||!r?(this.#s.add(a),Ln(l,s,false)):s();}}};#i=t=>{this.#e.delete(t);let n=Array.from(this.#e.values());for(let[r,i]of this.#n)n.includes(r)||(xe(i.effect),this.#n.delete(r));};ensure(t,n){var r=L,i=Ql();if(n&&!this.#t.has(t)&&!this.#n.has(t))this.#t.set(t,tt(()=>n(this.anchor)));if(this.#e.set(r,t),i);else D&&(this.anchor=U),this.#a(r);}};function Ns(e,t,...n){var r=new pn(e);Wn(()=>{let i=t()??null;r.ensure(i,i&&(a=>i(a,...n)));},Mt);}function Ci(e){Oe===null&&Il(),Ue(()=>{let t=Kn(e);if(typeof t=="function")return t});}function ve(e,t,n=false){var r;D&&(r=U,qt());var i=new pn(e),a=n?Mt:0;function l(s,c){if(D){var u=Ra(r);if(s!==parseInt(u.substring(1))){var f=fi();$e(f),i.anchor=f,vt(false),i.ensure(s,c),vt(true);return}}i.ensure(s,c);}Wn(()=>{var s=false;t((c,u=0)=>{s=true,l(u,c);}),s||l(-1,null);},a);}var js=Symbol("NaN");function Fs(e,t,n){D&&qt();var r=new pn(e);Wn(()=>{var i=t();i!==i&&(i=js),r.ensure(i,n);});}function _o(e,t,n=false,r=false,i=false,a=false){var l=e,s="";if(n){var c=e;D&&(l=$e(ze(c)));}Te(()=>{var u=R;if(s===(s=t()??"")){D&&qt();return}if(n&&!D){u.nodes=null,c.innerHTML=s,s!==""&&Be(ze(c),c.lastChild);return}if(u.nodes!==null&&(so(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){if(D){U.data;for(var f=qt(),v=f;f!==null&&(f.nodeType!==Un||f.data!=="");)v=f,f=bt(f);if(f===null)throw zn(),Gt;Be(U,v),l=$e(f);return}var h=r?Hl:i?Kl:void 0,_=hi(r?"svg":i?"math":"template",h);_.innerHTML=s;var g=r||i?_:_.content;if(Be(ze(g),g.lastChild),r||i)for(;ze(g);)l.before(ze(g));else l.before(g);}});}function Us(e,t,n){var r;D&&(r=U,qt());var i=new pn(e);Wn(()=>{var a=t()??null;if(D){var l=Ra(r),s=l===ui,c=a!==null;if(s!==c){var u=fi();$e(u),i.anchor=u,vt(false),i.ensure(a,a&&(f=>n(f,a))),vt(true);return}}i.ensure(a,a&&(f=>n(f,a)));},Mt);}function zs(e,t){var n=void 0,r;oo(()=>{n!==(n=t())&&(r&&(xe(r),r=null),n&&(r=tt(()=>{yi(()=>n(e));})));});}function yo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=yo(e[t]))&&(r&&(r+=" "),r+=n);}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Bs(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=yo(e))&&(r&&(r+=" "),r+=t);return r}function Hs(e){return typeof e=="object"?Bs(e):e??""}var ma=[...` 	
\r\f\xA0\v\uFEFF`];function Ks(e,t,n){var r=e==null?"":""+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var a=i.length,l=0;(l=r.indexOf(i,l))>=0;){var s=l+a;(l===0||ma.includes(r[l-1]))&&(s===r.length||ma.includes(r[s]))?r=(l===0?"":r.substring(0,l))+r.substring(s+1):l=s;}}return r===""?null:r}function ga(e,t=false){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(r+=" "+i+": "+a+n);}return r}function jr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ws(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=false,l=0,s=false,c=[];r&&c.push(...Object.keys(r).map(jr)),i&&c.push(...Object.keys(i).map(jr));var u=0,f=-1;let T=e.length;for(var v=0;v<T;v++){var h=e[v];if(s?h==="/"&&e[v-1]==="*"&&(s=false):a?a===h&&(a=false):h==="/"&&e[v+1]==="*"?s=true:h==='"'||h==="'"?a=h:h==="("?l++:h===")"&&l--,!s&&a===false&&l===0){if(h===":"&&f===-1)f=v;else if(h===";"||v===T-1){if(f!==-1){var _=jr(e.substring(u,f).trim());if(!c.includes(_)){h!==";"&&v++;var g=e.substring(u,v).trim();n+=" "+g+";";}}u=v+1,f=-1;}}}}return r&&(n+=ga(r)),i&&(n+=ga(i,true)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ys(e,t,n,r,i,a){var l=e[Wr];if(D||l!==n||l===void 0){var s=Ks(n,r,a);(!D||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[Wr]=n;}else if(a&&i!==a)for(var c in a){var u=!!a[c];(i==null||u!==!!i[c])&&e.classList.toggle(c,u);}return a}function Fr(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r));}}function Gs(e,t,n,r){var i=e[Yr];if(D||i!==t){var a=Ws(t,r);(!D||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e[Yr]=t;}else r&&(Array.isArray(r)?(Fr(e,n?.[0],r[0]),Fr(e,n?.[1],r[1],"important")):Fr(e,n,r));return r}function ii(e,t,n=false){if(e.multiple){if(t==null)return;if(!xa(t))return ql();for(var r of e.options)r.selected=t.includes(ba(r));return}for(r of e.options){var i=ba(r);if(Jl(i,t)){r.selected=true;return}}(!n||t!==void 0)&&(e.selectedIndex=-1);}function qs(e){var t=new MutationObserver(()=>{ii(e,e.__value);});t.observe(e,{childList:true,subtree:true,attributes:true,attributeFilter:["value"]}),_r(()=>{t.disconnect();});}function ba(e){return "__value"in e?e.__value:e.value}var Pn=Symbol("class"),$n=Symbol("style"),wo=Symbol("is custom element"),xo=Symbol("is html"),Zs=jn?"link":"LINK",Js=jn?"input":"INPUT",Xs=jn?"option":"OPTION",Qs=jn?"select":"SELECT",ec=jn?"progress":"PROGRESS";function Ei(e){if(D){var t=false,n=()=>{if(!t){if(t=true,e.hasAttribute("value")){var r=e.value;Y(e,"value",null),e.value=r;}if(e.hasAttribute("checked")){var i=e.checked;Y(e,"checked",null),e.checked=i;}}};e[Rn]=n,wt(n),Ja();}}function tc(e,t){var n=Si(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ec)||(e.value=t??"");}function nc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected");}function Y(e,t,n,r){var i=Si(e);D&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Zs)||i[t]!==(i[t]=n)&&(t==="loading"&&(e[Pl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Co(e).includes(t)?e[t]=n:e.setAttribute(t,n));}function rc(e,t,n,r,i=false,a=false){if(D&&i&&e.nodeName===Js){var l=e,s=l.type==="checkbox"?"defaultChecked":"defaultValue";s in n||Ei(l);}var c=Si(e),u=c[wo],f=!c[xo];let v=D&&u;v&&vt(false);var h=t||{},_=e.nodeName===Xs;for(var g in t)g in n||(n[g]=null);n.class?n.class=Hs(n.class):n[Pn]&&(n.class=null),n[$n]&&(n.style??=null);var T=Co(e);for(let k in n){let j=n[k];if(_&&k==="value"&&j==null){e.value=e.__value="",h[k]=j;continue}if(k==="class"){var M=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ys(e,M,j,r,t?.[Pn],n[Pn]),h[k]=j,h[Pn]=n[Pn];continue}if(k==="style"){Gs(e,j,t?.[$n],n[$n]),h[k]=j,h[$n]=n[$n];continue}var N=h[k];if(!(j===N&&!(j===void 0&&e.hasAttribute(k)))){h[k]=j;var fe=k[0]+k[1];if(fe!=="$$")if(fe==="on"){let ae={},H="$$"+k,z=k.slice(2);var ce=Is(z);if(Ps(z)&&(z=z.slice(0,-7),ae.capture=true),!ce&&N){if(j!=null)continue;e.removeEventListener(z,h[H],ae),h[H]=null;}if(ce)wr(z,e,j),xr([z]);else if(j!=null){let Qe=function(Ae){h[k].call(this,Ae);};h[H]=po(z,e,Qe,ae);}}else if(k==="style")Y(e,k,j);else if(k==="autofocus")hs(e,!!j);else if(!u&&(k==="__value"||k==="value"&&j!=null))e.value=e.__value=j;else if(k==="selected"&&_)nc(e,j);else {var G=k;f||(G=Rs(G));var st=G==="defaultValue"||G==="defaultChecked";if(j==null&&!u&&!st)if(c[k]=null,G==="value"||G==="checked"){let ae=e,H=t===void 0;if(G==="value"){let z=ae.defaultValue;ae.removeAttribute(G),ae.defaultValue=z,ae.value=ae.__value=H?z:null;}else {let z=ae.defaultChecked;ae.removeAttribute(G),ae.defaultChecked=z,ae.checked=H?z:false;}}else e.removeAttribute(k);else st||T.includes(G)&&(u||typeof j!="string")?(e[G]=j,G in c&&(c[G]=de)):typeof j!="function"&&Y(e,G,j);}}}return v&&vt(true),h}function Cr(e,t,n=[],r=[],i=[],a,l=false,s=false){Ha(i,n,r,c=>{var u=void 0,f={},v=e.nodeName===Qs,h=!1;if(oo(()=>{var g=t(...c.map(o)),T=rc(e,u,g,a,l,s);h&&v&&"value"in g&&ii(e,g.value);for(let N of Object.getOwnPropertySymbols(f))g[N]||xe(f[N]);for(let N of Object.getOwnPropertySymbols(g)){var M=g[N];N.description===Wl&&(!u||M!==u[N])&&(f[N]&&xe(f[N]),f[N]=tt(()=>zs(e,()=>M))),T[N]=M;}u=T;}),v){var _=e;yi(()=>{ii(_,u.value,!0),qs(_);});}h=!0;});}function Si(e){return e[Sa]??={[wo]:e.nodeName.includes("-"),[xo]:e.namespaceURI===$a}}var _a=new Map;function Co(e){var t=e.getAttribute("is")||e.nodeName,n=_a.get(t);if(n)return n;_a.set(t,n=[]);for(var r,i=e,a=Element.prototype;a!==i;){r=xl(i);for(var l in r)r[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&n.push(l);i=Ca(i);}return n}function ic(e,t,n=t){var r=new WeakSet;vs(e,"input",i=>Ai$1(null,null,function*(){var a=i?e.defaultValue:e.value;if(a=Ur(e)?zr(a):a,n(a),L!==null&&r.add(L),yield Bt(),a!==(a=t())){var l=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??"",s!==null){var u=e.value.length;l===s&&s===c&&u>c?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(s,u));}}})),(D&&e.defaultValue!==e.value||Kn(t)==null&&e.value)&&(n(Ur(e)?zr(e.value):e.value),L!==null&&r.add(L)),yr(()=>{var i=t();if(e===document.activeElement){var a=L;if(r.has(a))return}Ur(e)&&i===zr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function Ur(e){var t=e.type;return t==="number"||t==="range"}function zr(e){return e===""?null:+e}function Br(e,t){return e===t||e?.[un]===t}function Dt(e={},t,n,r){var i=Oe.r,a=R;return yi(()=>{var l,s;return yr(()=>{l=s,s=[],Kn(()=>{Br(n(...s),e)||(t(e,...s),l&&Br(n(...l),e)&&t(null,...l));});}),()=>{let c=a;for(;c!==i&&c.parent!==null&&c.parent.f&Kr;)c=c.parent;let u=()=>{s&&Br(n(...s),e)&&t(null,...s);},f=c.teardown;c.teardown=()=>{u(),f?.();};}}),e}var ac={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return  false},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return {enumerable:true,configurable:true,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?false:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Er(e,t,n){return new Proxy({props:e,exclude:t},ac)}function te(e,t,n,r){var i=r,a=true,l=()=>(a&&(a=false,i=r),i),s;s=e[t],s===void 0&&r!==void 0&&(s=l());var c;c=()=>{var h=e[t];return h===void 0?l():(a=true,h)};var u=false,f=gi(()=>(u=false,c())),v=R;return function(h,_){if(arguments.length>0){let g=_?o(f):h;return E(f,g),u=true,i!==void 0&&(i=g),h}return Ct&&u||(v.f&at)!==0?f.v:o(f)}}function oc(e){return new ai(e)}var ai=class{#e;#t;constructor(t){var n=new Map,r=(a,l)=>{var s=qa(l,false,false);return n.set(a,s),s};let i=new Proxy(W(q({},t.props||{}),{$$events:{}}),{get(a,l){return o(n.get(l)??r(l,Reflect.get(a,l)))},has(a,l){return l===Al?true:(o(n.get(l)??r(l,Reflect.get(a,l))),Reflect.has(a,l))},set(a,l,s){return E(n.get(l)??r(l,s),s),Reflect.set(a,l,s)}});this.#t=(t.hydrate?Ls:go)(t.component,{target:t.target,anchor:t.anchor,props:i,context:t.context,intro:t.intro??false,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===false)&&J(),this.#e=i.$$events;for(let a of Object.keys(this.#t))a==="$set"||a==="$destroy"||a==="$on"||On(this,a,{get(){return this.#t[a]},set(l){this.#t[a]=l;},enumerable:true});this.#t.$set=a=>{Object.assign(i,a);},this.#t.$destroy=()=>{Os(this.#t);};}$set(t){this.#t.$set(t);}$on(t,n){this.#e[t]=this.#e[t]||[];let r=(...i)=>n.call(this,...i);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(i=>i!==r);}}$destroy(){this.#t.$destroy();}},Eo=class{};typeof HTMLElement=="function"&&(Eo=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=false;$$d={};$$r=false;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n));}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r);}super.addEventListener(e,t,n);}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t));}}connectedCallback(){return Ai$1(this,null,function*(){if(this.$$cn=true,!this.$$c){let t=function(i){return a=>{let l=hi("slot");i!=="default"&&(l.name=i),F(a,l);}};if(yield Promise.resolve(),!this.$$cn||this.$$c)return;let n={},r=lc(this);for(let i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=t(i),n.default=true):n[i]=t(i));for(let i of this.attributes){let a=this.$$g_p(i.name);a in this.$$d||(this.$$d[a]=sr(a,i.value,this.$$p_d,"toProp"));}for(let i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=oc({component:this.$$ctor,target:this.$$shadowRoot||this,props:W(q({},this.$$d),{$$slots:n,$$host:this})}),this.$$me=_s(()=>{yr(()=>{this.$$r=true;for(let i of cr(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];let a=sr(i,this.$$d[i],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,a);}this.$$r=false;});});for(let i in this.$$l)for(let a of this.$$l[i]){let l=this.$$c.$on(i,a);this.$$l_u.set(a,l);}this.$$l={};}})}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=sr(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}));}disconnectedCallback(){this.$$cn=false,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0);});}$$g_p(e){return cr(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function sr(e,t,n,r){let i=n[e]?.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(i){case "Object":case "Array":return t==null?null:JSON.stringify(t);case "Boolean":return t?"":null;case "Number":return t??null;default:return t}else switch(i){case "Object":case "Array":return t&&JSON.parse(t);case "Boolean":return t;case "Number":return t!=null?+t:t;default:return t}}function lc(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=true;}),t}function Lt(e,t,n,r,i,a){let l=class extends Eo{constructor(){super(e,n,i),this.$$p_d=t;}static get observedAttributes(){return cr(t).map(s=>(t[s].attribute||s).toLowerCase())}};return cr(t).forEach(s=>{On(l.prototype,s,{get(){return this.$$c&&s in this.$$c?this.$$c[s]:this.$$d[s]},set(c){c=sr(s,c,t),this.$$d[s]=c;var u=this.$$c;if(u){var f=sn(u,s)?.get;f?u[s]=c:u.$set({[s]:c});}}});}),r.forEach(s=>{On(l.prototype,s,{get(){return this.$$c?.[s]}});}),e.element=l,l}var sc=ne('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function So(e,t){Et(t,true);let n=te(t,"loading"),r=Er(t,["$$slots","$$events","$$legacy","$$host","loading"]),i;function a(){i?.click();}var l={get loading(){return n()},set loading(f){n(f),J();}},s=sc(),c=ie(s);Cr(c,()=>q({type:"checkbox"},r),void 0,void 0,void 0,void 0,true),Dt(c,f=>i=f,()=>i);var u=ee(c,2);return di(2),Q(s),Te(()=>Y(s,"data-loading",n())),wr("click",u,a),F(e,s),St(l)}xr(["click"]);Lt(So,{loading:{}},[],[],{mode:"open"});var cc=ne('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function ko(e,t){Et(t,true);let n=te(t,"loading"),r=Er(t,["$$slots","$$events","$$legacy","$$host","loading"]);var i={get loading(){return n()},set loading(s){n(s),J();}},a=cc(),l=ie(a);return Cr(l,()=>q({type:"checkbox"},r),void 0,void 0,void 0,void 0,true),di(2),Q(a),Te(()=>Y(a,"data-loading",n())),F(e,a),St(i)}Lt(ko,{loading:{}},[],[],{mode:"open"});var uc=ne('<div><a target="_blank" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function ki(e,t){Et(t,true);let n=te(t,"strings"),r="https://altcha.org";var i={get strings(){return n()},set strings(s){n(s),J();}},a=uc(),l=ie(a);return Y(l,"href",r),Q(a),Te(()=>Y(l,"aria-label",n().ariaLinkLabel)),F(e,a),St(i)}Lt(ki,{strings:{}},[],[],{mode:"open"});var dc=ne('<div class="altcha-footer"><p></p> <!></div>');function oi(e,t){Et(t,true);let n=te(t,"logo"),r=te(t,"strings");var i={get logo(){return n()},set logo(u){n(u),J();},get strings(){return r()},set strings(u){r(u),J();}},a=dc(),l=ie(a);_o(l,()=>r().footer,true),Q(l);var s=ee(l,2);{var c=u=>{ki(u,{get strings(){return r()}});};ve(s,u=>{n()&&u(c);});}return Q(a),F(e,a),St(i)}Lt(oi,{logo:{},strings:{}},[],[],{mode:"open"});var fc=ne('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function To(e,t){Et(t,true);let n=te(t,"loading"),r=Er(t,["$$slots","$$events","$$legacy","$$host","loading"]),i;function a(){i?.click();}var l={get loading(){return n()},set loading(f){n(f),J();}},s=fc(),c=ie(s);Cr(c,()=>q({type:"checkbox"},r),void 0,void 0,void 0,void 0,true),Dt(c,f=>i=f,()=>i);var u=ee(c,2);return Q(s),Te(()=>Y(s,"data-loading",n())),wr("click",u,a),F(e,s),St(l)}xr(["click"]);Lt(To,{loading:{}},[],[],{mode:"open"});var ye=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(ye||{}),K=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(K||{}),hc=ne('<div class="altcha-code-challenge-title"> </div>'),vc=ne('<div class="altcha-spinner"></div>'),pc=xi('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),mc=xi('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),gc=xi('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),bc=ne('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),_c=ne('<audio hidden="" autoplay=""></audio>'),yc=ne('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function Ao(e,t){Et(t,true);let n=te(t,"audioUrl"),r=te(t,"codeChallenge"),i=te(t,"config"),a=te(t,"imageUrl"),l=te(t,"onCancel"),s=te(t,"onReload"),c=te(t,"onSubmit"),u=te(t,"strings"),f=O(void 0),v=O(void 0),h=O(void 0),_=O(false),g=O(""),T=O(false);Ci(()=>(i().disableAutoFocus||Bt().then(()=>{o(h)?.focus();}),()=>{o(v)&&(o(v).pause(),E(v,void 0));}));function M(){E(f,ye.PAUSED,true);}function N(x){E(f,ye.ERROR,true);}function fe(){E(f,ye.READY,true);}function ce(){E(f,ye.LOADING,true);}function he(){E(f,ye.PLAYING,true);}function G(){E(f,ye.PAUSED,true);}function st(x){x.code==="Space"?(x.preventDefault(),x.stopPropagation(),j()):x.code==="Escape"&&(x.preventDefault(),x.stopPropagation(),l()?.());}function k(x){x.preventDefault(),x.stopPropagation(),c()?.(o(g));}function j(){o(v)?o(f)===ye.LOADING||(o(v).paused?(n()&&o(v).src!==n()&&(o(v).src=n()),o(v).currentTime=0,o(v).play()):o(v).pause()):(E(T,true),requestAnimationFrame(()=>{o(v)&&n()&&(o(v).src=n(),o(v).play());}));}var ae={get audioUrl(){return n()},set audioUrl(x){n(x),J();},get codeChallenge(){return r()},set codeChallenge(x){r(x),J();},get config(){return i()},set config(x){i(x),J();},get imageUrl(){return a()},set imageUrl(x){a(x),J();},get onCancel(){return l()},set onCancel(x){l(x),J();},get onReload(){return s()},set onReload(x){s(x),J();},get onSubmit(){return c()},set onSubmit(x){c(x),J();},get strings(){return u()},set strings(x){u(x),J();}},H=yc(),z=ie(H),Qe=ie(z);{var Ae=x=>{var oe=hc(),jt=ie(oe,true);Q(oe),Te(()=>ht(jt,u().verificationRequired)),F(x,oe);};ve(Qe,x=>{i().codeChallengeDisplay!=="standard"&&x(Ae);});}var Ie=ee(Qe,2),re=ie(Ie,true);Q(Ie);var ct=ee(Ie,2),A=ee(ct,2),q=ie(A);Ei(q),q.disabled=o(_),Dt(q,x=>E(h,x),()=>o(h));var Ne=ee(q,2);{var y=x=>{var oe=bc(),jt=ie(oe);{var kr=Me=>{var ut=vc();F(Me,ut);},_n=Me=>{var ut=pc();F(Me,ut);},Tr=Me=>{var ut=mc();F(Me,ut);},Ar=Me=>{var ut=gc();F(Me,ut);};ve(jt,Me=>{o(f)===ye.LOADING?Me(kr):o(f)===ye.ERROR?Me(_n,1):o(f)===ye.PLAYING?Me(Tr,2):Me(Ar,-1);});}Q(oe),Te(()=>{Y(oe,"title",u().getAudioChallenge),oe.disabled=o(f)===ye.LOADING||o(f)===ye.ERROR,Y(oe,"aria-label",o(f)===ye.LOADING?u().loading:u().getAudioChallenge);}),pe("click",oe,()=>j(),true),F(x,oe);};ve(Ne,x=>{r().audio&&x(y);});}var Ot=ee(Ne,2);Q(A);var Yn=ee(A,2),He=ie(Yn),Sr=ie(He,true);Q(He);var Nt=ee(He,2),mn=ie(Nt,true);Q(Nt),Q(Yn),Q(z);var gn=ee(z,2);{var bn=x=>{var oe=_c();Dt(oe,jt=>E(v,jt),()=>o(v)),pe("error",oe,N),pe("loadstart",oe,ce),pe("canplay",oe,fe),pe("pause",oe,G),pe("playing",oe,he),pe("ended",oe,M),F(x,oe);};ve(gn,x=>{o(T)&&x(bn);});}return Q(H),Te(()=>{ht(re,u().enterCodeFromImage),Y(ct,"src",a()),Y(q,"minlength",r().length||1),Y(q,"maxlength",r().length),Y(q,"placeholder",u().enterCode),Y(q,"aria-label",o(f)===ye.LOADING?u().loading:o(f)===ye.PLAYING?"":u().enterCodeAria),Y(q,"aria-live",o(f)?"assertive":"polite"),Y(q,"aria-busy",o(f)===ye.LOADING),Y(Ot,"title",u().reload),Y(Ot,"aria-label",u().reload),Y(He,"aria-label",u().verify),ht(Sr,u().verify),Y(Nt,"aria-label",u().cancel),ht(mn,u().cancel);}),pe("submit",z,k,true),wr("keydown",q,st),ic(q,()=>o(g),x=>E(g,x)),pe("click",Ot,()=>s()?.(),true),pe("click",Nt,()=>l()?.(),true),F(e,H),St(ae)}xr(["keydown"]);Lt(Ao,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var wc=ne('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),xc=ne('<div class="altcha-popover-arrow"></div>'),Cc=ne('<div role="button" class="altcha-popover-close">&times;</div>'),Ec=ne('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function li(e,t){Et(t,true);let n=te(t,"anchor"),r=te(t,"children"),i=te(t,"display",7,"standard"),a=te(t,"backdrop",7,false),l=te(t,"onClickOutside"),s=te(t,"onClickOutsideDelay",7,600),c=te(t,"onClose"),u=te(t,"placement",7,"auto"),f=te(t,"updateUISignal"),v=te(t,"variant",7,"neutral"),h=Er(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),_=O(void 0),g=O(void 0),T=O(false),M=O(0);Ue(()=>{u()!=="auto"&&E(T,u()==="top");}),Ue(()=>{f()&&G();}),Ci(()=>{let A=i()==="bottomsheet"||i()==="overlay";return A&&(o(g)&&document.body.append(o(g)),o(_)&&document.body.append(o(_))),G(),Bt().then(()=>{E(M,Date.now(),true);}),()=>{A&&(o(g)&&document.body.removeChild(o(g)),o(_)&&document.body.removeChild(o(_)));}});function N(){c()?.();}function fe(A){let q=A.target;!o(_)?.contains(q)&&(!s()||o(M)+s()<Date.now())&&l()?.();}function ce(){G();}function he(){G();}function G(){if(n()&&u()==="auto"&&o(_)){let A=n().getBoundingClientRect(),Ne=document.documentElement.clientHeight-(A.top+A.height)<o(_).clientHeight;o(T)!==Ne&&E(T,Ne);}}var st={get anchor(){return n()},set anchor(A){n(A),J();},get children(){return r()},set children(A){r(A),J();},get display(){return i()},set display(A="standard"){i(A),J();},get backdrop(){return a()},set backdrop(A=false){a(A),J();},get onClickOutside(){return l()},set onClickOutside(A){l(A),J();},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(A=600){s(A),J();},get onClose(){return c()},set onClose(A){c(A),J();},get placement(){return u()},set placement(A="auto"){u(A),J();},get updateUISignal(){return f()},set updateUISignal(A){f(A),J();},get variant(){return v()},set variant(A="neutral"){v(A),J();}},k=Ec();pe("click",Ht,fe,true),pe("resize",Ht,ce),pe("scroll",Ht,he);var j=on(k);{var ae=A=>{var q=wc();Dt(q,Ne=>E(g,Ne),()=>o(g)),F(A,q);};ve(j,A=>{a()&&A(ae);});}var H=ee(j,2);Cr(H,()=>W(q({},h),{class:`altcha-popover ${(t.class||"")??""}`,"data-popover":true,"data-variant":v(),"data-top":o(T),"data-display":i()}));var z=ie(H);{var Qe=A=>{var q=xc();F(A,q);};ve(z,A=>{i()==="standard"&&A(Qe);});}var Ae=ee(z,2);{var Ie=A=>{var q=Cc();pe("click",q,N,true),F(A,q);};ve(Ae,A=>{i()!=="standard"&&A(Ie);});}var re=ee(Ae,2),ct=ie(re);return Ns(ct,()=>r()??$t),Q(re),Q(H),Dt(H,A=>E(_,A),()=>o(_)),F(e,k),St(st)}Lt(li,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function Sc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function kc(e,t="altcha-css",n){if(typeof document<"u"&&document&&!document.getElementById(t)){let r=document.createElement("style");r.id=t,r.textContent=e;let i=document.currentScript?.nonce??document.querySelector('meta[name="csp-nonce"]')?.content;i&&(r.nonce=i),document.head.appendChild(r);}}function Po(e){return Ai$1(this,null,function*(){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:i,onOutOfMemory:a=h=>h>1?Math.floor(h/2):0,counterMode:l,timeout:s=9e4}=e,c=Math.min(16,Math.max(1,n)),u=[],f=()=>{for(let h of u)h.terminate();};for(let h=0;h<c;h++)u.push(yield i(t.parameters.algorithm));let v=null;try{v=yield Promise.race(u.map((h,_)=>(r.signal.addEventListener("abort",()=>{h.postMessage({type:"abort"});}),new Promise((g,T)=>{h.addEventListener("error",M=>{T(M);}),h.addEventListener("message",M=>{if(M.data){for(let N of u)N!==h&&N.postMessage({type:"abort"});if(M.data.error)return T(new Error(M.data.error))}g(M.data);}),h.postMessage({challenge:t,counterMode:l,counterStart:_,counterStep:c,timeout:s,type:"work"});}))));}catch(h){if(h instanceof Error&&!!h?.message?.includes("Out of memory")&&a){f();let g=a(c);if(g)return Po(W(q({},e),{challenge:t,controller:r,concurrency:g,createWorker:i}))}throw h}finally{f();}return r.signal.aborted?null:v||null})}var si=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){let{maxSamples:n=60,sampleInterval:r=50,target:i=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=i,this.attach();}destroy(){let t={capture:true};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t);}export(){return {focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){let t={passive:true,capture:true};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t);}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples);}onFocus=t=>{if(this.focusInteraction===2)return;let n=t.target;if(!(n instanceof Element))return;let r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus);};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0;},100);};onPointer=t=>{if(t.pointerType==="touch")return;let n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer));};onScroll=()=>{let t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll));};onTouchMove=t=>{let n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)));}},Tc=ne('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Ac=ne('<div class="altcha-overlay-content"></div>'),Pc=ne('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),$c=ne('<div class="altcha-floating-arrow"></div>'),Ic=ne('<input type="hidden"/>'),Mc=ne('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Rc=ne('<div class="altcha-error"> </div>'),Dc=ne('<div class="altcha-error"> </div>'),Vc=ne("<!> <!>",1),Lc=ne('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Oc(e,t){Et(t,true);let n=()=>la(f,"$altchaDefaults",i),r=()=>la(g,"$altchaI18nStore",i),[i,a]=ns(),l='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',s='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',c=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:f}=globalThis.$altcha.defaults,v=navigator.hardwareConcurrency||2,h=navigator.deviceMemory||0,_=h&&h<=4?Math.min(4,v):v,g=globalThis.$altcha.i18n.store,T=t.$$host,M=(d,p)=>{Bt().then(()=>{T?.dispatchEvent(new CustomEvent(d,{detail:p}));});},N=null,fe=O(yt(new URL(location.origin))),ce=O(false),he=O(null),G=O(null),st=O(null),k=O(yt(K.UNVERIFIED)),j=O(void 0),ae=O(void 0),H=O(null),z=O(void 0),Qe=O(null),Ae=O(null),Ie=O(null),re=O(null),ct=O(yt([])),A=O(0),q$1=O(yt({})),Ne=O(true),y=Pe(()=>q(q({fetch:(d,p)=>fetch(d,p),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:false,disableAutoFocus:false,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:false,floatingPlacement:"auto",hideFooter:false,hideLogo:false,humanInteractionSignature:true,language:"",mockError:false,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:true,setCookie:null,serverVerificationFields:false,serverVerificationTimeZone:false,test:false,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:_},n()),o(q$1))),Ot=Pe(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Yn=Pe(()=>Oo(o(y).type)),He=Pe(()=>o(y).auto),Sr=Pe(()=>o(k)===K.VERIFYING),Nt=Pe(()=>!o(y).hideFooter),mn=Pe(()=>!o(y).hideLogo&&o(y).display!=="bar"),gn=Pe(()=>No(r(),[o(y).language,document.documentElement.lang,...navigator.languages])),bn=Pe(()=>c.includes(o(gn).language)?"rtl":void 0),x=Pe(()=>q({},o(gn).strings)),oe=Pe(()=>o(he)?.audio?.match(/^(https?:)?\//)?Gn(o(he).audio,o(fe),{language:o(y).audioChallengeLanguage||o(gn).language}).toString():o(he)?.audio),jt=Pe(()=>o(he)?.image?.match(/^(https?:)?\//)?Gn(o(he).image,o(fe)):o(he)?.image);Ue(()=>{yn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers});}),Ue(()=>{if(t.configuration)try{yn(JSON.parse(t.configuration));}catch(d){Z("unable to parse the `configuration` attribute (JSON expected)");}}),Ue(()=>{o(st)!==o(y).display&&qn(o(y).display);}),Ue(()=>{o(ce)&&o(k)===K.VERIFYING&&E(ce,false);}),Ue(()=>{!o(ce)&&o(k)===K.VERIFIED&&E(ce,true);}),Ue(()=>{if(!o(ce)){let d=Pr();d&&d.checked&&(d.checked=false);}}),Ue(()=>{o(k)===K.VERIFIED&&Pr()?.setCustomValidity("");}),Ue(()=>{if(o(He)==="onload"){let d=setTimeout(()=>{Jt();},1);return ()=>{d&&clearTimeout(d);}}}),Ue(()=>{o(Ae)&&Z("error:",o(Ae));}),Ue(()=>{o(re)&&o(y).setCookie&&Xo(o(re),o(y).setCookie);}),Ci(()=>(Z("mounted","3.1.0"),T&&globalThis.$altcha.instances.add(T),E(H,o(z)?.closest("form"),true),o(H)?.addEventListener("reset",Mi),o(H)?.addEventListener("submit",Ri,{capture:true}),o(H)?.addEventListener("focusin",Ii),kr(),o(y).humanInteractionSignature&&(Z("human interaction signature enabled"),N=new si),M("load"),u||Z("secure context (HTTPS) required"),()=>{Tr(),T&&globalThis.$altcha.instances.delete(T),o(Ie)&&clearTimeout(o(Ie)),o(H)?.removeEventListener("reset",Mi),o(H)?.removeEventListener("submit",Ri,{capture:true}),o(H)?.removeEventListener("focusin",Ii),N?.destroy();}));function kr(){E(ct,[...globalThis.$altcha.plugins].map(d=>new d(T)),true),Z("activating plugins",o(ct).map(d=>d.constructor.name));for(let d of o(ct))d.activate();}function _n(d,...p){return Ai$1(this,null,function*(){let C;for(let S of o(ct))C=yield S[d].call(S,...p);return C})}function Tr(){for(let d of o(ct))d.destroy();}function Ar(d){let[p,C]=d.salt.split("?"),S={};if(C)try{Object.assign(S,Object.fromEntries(new URLSearchParams(C).entries()));}catch(P){}let $={codeChallenge:d.codeChallenge,parameters:{algorithm:d.algorithm,cost:1,data:S,expiresAt:S?.expires?parseInt(S.expires,10):void 0,keyLength:d.algorithm==="SHA-512"?64:d.algorithm==="SHA-384"?48:32,nonce:Sc(new TextEncoder().encode(d.salt)),keyPrefix:d.challenge,salt:""},signature:d.signature};return Object.defineProperties($,{_originalSalt:{enumerable:false,value:d.salt,writable:false},_version:{enumerable:false,value:1,writable:false}}),$}function Me(d,p){return {algorithm:d.parameters.algorithm,challenge:d.parameters.keyPrefix,number:p.counter,salt:"_originalSalt"in d?d._originalSalt:d.parameters.nonce,signature:d.signature,took:p.time||0}}function ut(d){return Ai$1(this,null,function*(){yield new Promise(p=>setTimeout(p,d));})}function $i(){return Ai$1(this,arguments,function*(d=o(y).challenge,p){let C=yield _n("onFetchChallenge",d),S=null;if(C!==void 0)return C;if(typeof d=="string")if(d.startsWith("{")){Z("parsing JSON challenge");try{S=JSON.parse(d);}catch($){throw new Error("Unable to parse JSON challenge.")}}else {Z("fetching challenge from",p?.method||"GET",d),E(fe,new URL(d,location.origin),true);let $=yield o(y).fetch(d,q({credentials:o(y).credentials||void 0},p));yield Vi($);let P=$.headers.get("x-altcha-config");P&&qo(P);let W=yield $.json();if(W&&"his"in W&&W.his){if(Z("requested HIS"),!N)throw new Error("Server requested HIS data but collector is disabled.");return $i(Gn(W.his.url,o(fe)),{body:JSON.stringify({his:N.export()}),headers:{"content-type":"application/json"},method:"POST"})}W&&"hisResult"in W&&W.hisResult&&Z("HIS result",W.hisResult),S=W;}else if(d&&typeof d=="object")try{S=JSON.parse(JSON.stringify(d));}catch($){throw new Error("Unable to parse JSON challenge.")}if(Vo(S)&&(S=Ar(S)),!Lo(S))throw new Error("Challenge validation failed.");return S})}function Vo(d){return typeof d=="object"&&"challenge"in d}function Lo(d){return !!d&&typeof d=="object"&&"parameters"in d&&!!d.parameters&&typeof d.parameters=="object"&&"algorithm"in d.parameters&&"nonce"in d.parameters&&"salt"in d.parameters&&"keyPrefix"in d.parameters}function Pr(){return document.getElementById(o(Ot))}function Oo(d){switch(d){case "checkbox":return So;case "switch":return To;default:return ko}}function No(d,p){let C=Object.keys(d).map($=>$.toLowerCase()),S=p.reduce(($,P)=>(P=P.toLowerCase(),$||(d[P]?P:null)||C.find(W=>P.split("-")[0]===W.split("-")[0])||null),null);return d[S||""]||(S="en"),{language:S,strings:d[S]}}function jo(d){switch(d){case "bar":return o(y).barPlacement||"bottom";case "floating":return o(y).floatingPlacement||"auto";default:return}}function Fo(d){return [...o(H)?.querySelectorAll(l)||[]].reduce((C,S)=>{let $=S.name,P=S.value;return $&&P&&(C[$]=/\n/.test(P)?P.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):P),C},{})}function Uo(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(d){}}function Gn(d,p,C){let S=new URL(d,p);if(S.search||(S.search=p.search),C)for(let $ in C)C[$]!==void 0&&C[$]!==null&&S.searchParams.set($,C[$]);return S.toString()}function zo(d){!o(ce)&&d.currentTarget.checked?(d.preventDefault(),d.currentTarget.checked=false,o(k)!==K.VERIFYING&&Jt()):d.currentTarget.checked||(d.preventDefault(),Ke());}function Bo(d){o(k)===K.VERIFYING?d.currentTarget.setCustomValidity(o(x).waitAlert):o(y).validationMessage&&d.currentTarget.setCustomValidity(o(y).validationMessage);}function Ho(){qn(o(y).display),Ke();}function Ko(){Zn();}function Wo(d){let p=d.target;o(y).display==="floating"&&p&&!T?.contains(p)&&!p.hasAttribute("data-backdrop")&&!p.closest("[data-popover]")&&o(k)!==K.VERIFIED&&!o(y).floatingPersist&&$r();}function Ii(d){o(He)==="onfocus"&&o(k)===K.UNVERIFIED&&Jt();}function Mi(){qn(o(y).display),Ke();}function Ri(d){d.target?.getAttribute("data-code-challenge")!=="true"&&o(He)==="onsubmit"&&o(k)===K.UNVERIFIED&&(d.preventDefault(),d.stopPropagation(),E(Qe,d.submitter,true),Ir(),Jt().then(C=>{C&&!o(he)&&Bt().then(()=>{Di(o(Qe));});}));}function Yo(d){d.persisted&&(qn(o(y).display),Ke());}function Go(){Zn();}function qo(d){try{let p=JSON.parse(d);p&&typeof p=="object"&&yn(q({serverVerificationFields:p?.sentinel?.fields,serverVerificationTimeZone:p?.sentinel?.timeZone,verifyUrl:p.verifyurl},p));}catch(p){Z("unable to configure from x-altcha-config header",p);}}function Zo(d=20){if(!o(z))return;let p=o(y).floatingPlacement;if(!o(ae)&&(E(ae,(o(y).floatingAnchor instanceof HTMLElement?o(y).floatingAnchor:o(y).floatingAnchor?document.querySelector(o(y).floatingAnchor):o(H)?.querySelector(s))||o(H),true),!o(ae))){Z("unable to find floating anchor element");return}let C=parseInt(o(y).floatingOffset,10)||12,S=o(ae).getBoundingClientRect(),$=o(z).getBoundingClientRect(),P=document.documentElement.clientHeight,W=document.documentElement.clientWidth,je=!p||p==="auto"?S.bottom+$.height+C+d>P:p==="top",X=Math.max(d,Math.min(W-d-$.width,S.left+S.width/2-$.width/2));if(o(z).style.setProperty("--altcha-floating-left",`${X}px`),o(z).style.setProperty("--altcha-floating-top",je?`${S.top-($.height+C)}px`:`${S.bottom+C}px`),o(z).setAttribute("data-floating-position",je?"top":"bottom"),o(j)){let ue=o(j).getBoundingClientRect();o(j).style.left=S.left-X+S.width/2-ue.width/2+"px";}}function Jo(d,p){return Ai$1(this,null,function*(){let C=yield _n("onRequestServerVerification",d,p);if(C!==void 0)return C;if(Z("requesting server verification from",o(y).verifyUrl),!o(y).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");let S=yield o(y).fetch(Gn(o(y).verifyUrl,o(fe)),{body:JSON.stringify({code:p,fields:o(y).serverVerificationFields?Fo():void 0,payload:d,timeZone:o(y).serverVerificationTimeZone?Uo():void 0}),credentials:o(y).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});yield Vi(S);let $=yield S.json();return $&&typeof $=="object"&&"payload"in $&&$.payload&&M("serververification",$),$})}function Di(d){o(H)&&"requestSubmit"in o(H)?o(H).requestSubmit(d):o(H)?.reportValidity()&&(d?d.click():o(H).submit());}function Xo(d,p={}){let{domain:C,name:S=o(y).name,maxAge:$,path:P,sameSite:W,secure:je}=p,X=`${encodeURIComponent(S)}=${encodeURIComponent(d)}`;C&&(X+=`; Domain=${C}`),$!=null&&(X+=`; Max-Age=${$}`),P&&(X+=`; Path=${P}`),W&&(X+=`; SameSite=${W}`),je&&(X+="; Secure"),document.cookie=X;}function qn(d){switch(d){case "bar":case "floating":case "overlay":$r(),(!o(He)||o(He)==="off")&&(o(q$1).auto="onsubmit");break;case "standard":Ir();}o(st)!==d&&E(st,d,true);}function Qo(d){o(Ie)&&clearTimeout(o(Ie));let p=()=>{o(k)!==K.UNVERIFIED?(E(ce,false),We(K.EXPIRED)):Ke(),M("expired");},C=d*1e3-Date.now();C>=1?E(Ie,setTimeout(p,C),true):p();}function Vi(d){return Ai$1(this,null,function*(){if(d.status>=400){if(d.headers.get("content-type")?.includes("/json")){let C;try{C=yield d.json();}catch(S){}if(C&&"error"in C)throw new Error(`Server responded with ${d.status} - ${C.error}`)}throw new Error(`Server responded with ${d.status}.`)}let p=d.headers.get("content-type");if(!p||!p.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${p}.`)})}function Li(d){return Ai$1(this,null,function*(){if(!o(re)){We(K.ERROR,"Cannot verify code challenge without PoW payload.");return}We(K.VERIFYING);let p=null;if(o(y).verifyUrl)p=yield Jo(o(re),d);else if(o(y).verifyFunction)p=yield o(y).verifyFunction(o(re),d);else {We(K.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}p?.payload&&(E(re,p.payload,true),Z("server payload",o(re))),p?.verified===true?(Z("verified"),We(K.VERIFIED),M("verified",{payload:o(re)}),o(He)==="onsubmit"&&Bt().then(()=>{Di(o(Qe));})):We(K.ERROR,p?.reason||"Verification failed."),o(y).disableAutoFocus||Pr()?.focus();})}function yn(d){Object.assign(o(q$1),q({},Object.fromEntries(Object.entries(d).filter(([p,C])=>C!==void 0))));}function el(){return q({},o(y))}function tl(){return o(k)}function $r(){E(Ne,false);}function Z(...d){(o(y).debug||d.some(p=>p instanceof Error))&&console[d[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(y).name}]`,...d);}function Ke(d=K.UNVERIFIED,p=null){E(ce,false),E(Ae,p,true),E(re,null),o(G)&&o(G).abort(),o(Ie)&&(clearTimeout(o(Ie)),E(Ie,null)),We(d);}function We(d,p=null){E(k,d,true),E(Ae,p,true),M("statechange",{payload:o(re),state:o(k)});}function Ir(){E(Ne,true),Bt().then(()=>{Zn();});}function Zn(){if(o(y).display==="floating")return Zo();E(A,o(A)+1);}function Jt(){return Ai$1(this,arguments,function*(d={}){let{concurrency:p=Math.max(1,o(y).workers),controller:C=new AbortController,minDuration:S=o(y).minDuration}=d,$=performance.now(),P=null,W=null,je=false,X=yield _n("onVerify",d);if(X!==void 0)return X;Ke(K.VERIFYING),E(G,C,true);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(o(y).mockError)throw new Error("Mock error.");if(o(y).test)return Z("running test mode with null challenge"),yield ut(Math.max(0,S-(performance.now()-$))),o(G)?.signal.aborted?(Ke(),null):(E(re,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),Z("verified"),We(K.VERIFIED),M("verified",{payload:o(re)}),{payload:o(re)});if(P=yield $i(),!P)throw new Error("Failed to fetch challenge.");Z("challenge",P),"configuration"in P&&(Z("re-configuring from challenge",P.configuration),yn(P.configuration)),P.parameters.expiresAt&&Qo(P.parameters.expiresAt),je="_version"in P&&P._version===1;let ue=globalThis.$altcha.algorithms.get(P.parameters.algorithm);if(!ue)throw new Error(`Unsupported algorithm ${P.parameters.algorithm}.`);if(W=yield Po({challenge:P,concurrency:p,controller:C,createWorker:ue,counterMode:je?"string":"uint32",onOutOfMemory:kt=>{if(Z("out of memory error received"),M("outofmemory"),o(y).retryOnOutOfMemoryError&&kt>1){let Tt=Math.floor(kt/2);return Z(`retrying with ${Tt} workers...`),Tt}},timeout:o(y).timeout}),o(G)?.signal.aborted)return Ke(),null;if(!W)throw new Error("Failed to find solution.");Z("solution",W),yield ut(Math.max(0,S-(performance.now()-$))),E(he,P.codeChallenge||o(y).codeChallenge||null,!0),je?E(re,btoa(JSON.stringify(Me(P,W))),!0):E(re,btoa(JSON.stringify({challenge:{parameters:P.parameters,signature:P.signature},solution:W})),!0),o(he)?(Z("requesting code verification"),We(K.CODE),M("codechallenge",{codeChallenge:o(he)})):o(y).verifyUrl?yield Li():(Z("verified"),We(K.VERIFIED),M("verified",{payload:o(re)}));}catch(ue){return Z("verification failed",ue),We(K.ERROR,String(ue)),null}finally{E(G,null);}return {challenge:P,payload:o(re),solution:W}})}var nl={configure:yn,getConfiguration:el,getState:tl,hide:$r,log:Z,reset:Ke,setState:We,show:Ir,updateUI:Zn,verify:Jt},Oi=Lc();pe("scroll",qr,Ko),pe("click",qr,Wo),pe("pageshow",Ht,Yo),pe("resize",Ht,Go);var Ni=on(Oi);{var rl=d=>{var p=Tc();F(d,p);};ve(Ni,d=>{o(y).display==="overlay"&&o(Ne)&&d(rl);});}var dt=ee(Ni,2),ji=ie(dt);{var il=d=>{var p=Pc(),C=on(p),S=ee(C,2);{var $=P=>{var W=Ac();_o(W,()=>document.querySelector(o(y).overlayContent)?.innerHTML,true),Q(W),F(P,W);};ve(S,P=>{o(y).overlayContent&&P($);});}pe("click",C,Ho,true),F(d,p);};ve(ji,d=>{o(y).display==="overlay"&&o(Ne)&&d(il);});}var Mr=ee(ji,2),Rr=ie(Mr),Dr=ie(Rr),Fi=ie(Dr);{let d=Pe(()=>o(y).display==="standard"&&o(He)!=="onsubmit"||o(k)===K.VERIFYING);Us(Fi,()=>o(Yn),(p,C)=>{C(p,{get id(){return o(Ot)},name:"",get required(){return o(d)},get loading(){return o(Sr)},get checked(){return o(ce)},onchange:zo,oninvalid:Bo});});}var Vr=ee(Fi,2),al=ie(Vr);{var ol=d=>{var p=ir();Te(()=>ht(p,o(x).verificationRequired)),F(d,p);},ll=d=>{var p=ir();Te(()=>ht(p,o(x).verifying)),F(d,p);},sl=d=>{var p=ir();Te(()=>ht(p,o(x).verified)),F(d,p);},cl=d=>{var p=ir();Te(()=>ht(p,o(x).label)),F(d,p);};ve(al,d=>{o(k)===K.CODE&&o(he)?d(ol):o(k)===K.VERIFYING?d(ll,1):o(k)===K.VERIFIED?d(sl,2):d(cl,-1);});}Q(Vr),Q(Dr);var ul=ee(Dr,2);{var dl=d=>{ki(d,{get strings(){return o(x)}});};ve(ul,d=>{o(mn)&&d(dl);});}Q(Rr);var Ui=ee(Rr,2);{var fl=d=>{{let p=Pe(()=>o(y).display==="bar"&&o(mn));oi(d,{get logo(){return o(p)},get strings(){return o(x)}});}};ve(Ui,d=>{o(Nt)&&d(fl);});}var zi=ee(Ui,2);{var hl=d=>{var p=$c();Dt(p,C=>E(j,C),()=>o(j)),F(d,p);};ve(zi,d=>{o(y).display==="floating"&&d(hl);});}var vl=ee(zi,2);{var pl=d=>{var p=Ic();Ei(p),Te(()=>{Y(p,"name",o(y).name),tc(p,o(re));}),F(d,p);};ve(vl,d=>{o(y).setCookie||d(pl);});}Q(Mr);var ml=ee(Mr,2);{var gl=d=>{li(d,{get anchor(){return o(z)},onClickOutside:()=>{u&&Ke();},get placement(){return o(y).popoverPlacement},role:"alert",variant:"error",get dir(){return o(bn)},get updateUISignal(){return o(A)},children:(p,C)=>{var S=pa(),$=on(S);{var P=X=>{var ue=Mc();F(X,ue);},W=X=>{var ue=Rc(),kt=ie(ue,true);Q(ue),Te(()=>ht(kt,o(x).expired)),F(X,ue);},je=X=>{var ue=Dc(),kt=ie(ue,true);Q(ue),Te(()=>{Y(ue,"title",o(Ae)),ht(kt,o(x).error);}),F(X,ue);};ve($,X=>{!o(Ae)&&!u?X(P):!o(Ae)&&o(k)===K.EXPIRED?X(W,1):X(je,-1);});}F(p,S);},$$slots:{default:true}});},bl=d=>{var p=pa(),C=on(p);Fs(C,()=>o(he),S=>{{let $=Pe(()=>o(y).codeChallengeDisplay!=="standard");li(S,{get anchor(){return o(z)},get backdrop(){return o($)},get display(){return o(y).codeChallengeDisplay},onClose:()=>{Ke();},get placement(){return o(y).popoverPlacement},role:"dialog",get"aria-label"(){return o(x).verificationRequired},get dir(){return o(bn)},get updateUISignal(){return o(A)},children:(P,W)=>{var je=Vc(),X=on(je);Ao(X,{get audioUrl(){return o(oe)},get imageUrl(){return o(jt)},onCancel:()=>Ke(),onReload:()=>Jt(),onSubmit:Tt=>Li(Tt),get codeChallenge(){return o(he)},get config(){return o(y)},get strings(){return o(x)}});var ue=ee(X,2);{var kt=Tt=>{oi(Tt,{get logo(){return o(mn)},get strings(){return o(x)}});};ve(ue,Tt=>{o(Nt)&&o(y).codeChallengeDisplay!=="standard"&&Tt(kt);});}F(P,je);},$$slots:{default:true}});}}),F(d,p);};ve(ml,d=>{o(Ae)||o(k)===K.EXPIRED||!u?d(gl):o(he)&&o(k)===K.CODE&&d(bl,1);});}Q(dt),Dt(dt,d=>E(z,d),()=>o(z)),Te(d=>{Y(dt,"data-state",o(k)),Y(dt,"data-display",o(y).display||void 0),Y(dt,"data-placement",d),Y(dt,"data-visible",o(Ne)||void 0),Y(dt,"dir",o(bn)),Y(Vr,"for",o(Ot)),dt.dir=dt.dir;},[()=>jo(o(y).display)]),F(e,Oi);var _l=St(nl);return a(),_l}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Lt(Oc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));var $o=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,ya=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",$o],{type:"text/javascript;charset=utf-8"});function Ti(e){let t;try{if(t=ya&&(self.URL||self.webkitURL).createObjectURL(ya),!t)throw "";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t);}),n}catch(n){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent($o),{name:e?.name})}}var Io=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,wa=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Io],{type:"text/javascript;charset=utf-8"});function Ai(e){let t;try{if(t=wa&&(self.URL||self.webkitURL).createObjectURL(wa),!t)throw "";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t);}),n}catch(n){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Io),{name:e?.name})}}var Nc=`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`;kc(Nc);$altcha.algorithms.set("SHA-256",()=>new Ai);$altcha.algorithms.set("SHA-384",()=>new Ai);$altcha.algorithms.set("SHA-512",()=>new Ai);$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Ti);$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Ti);$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Ti);var jc=["altchaWidget"],Pi=(()=>{class e{constructor(){this.captchaValid=new Pe$1,this.zone=v(Q$1),this.payload="",this.challengeUrl=`${u.api_url}/clientes/pago-publico/altcha-challenge`,this.stateHandler=n=>this.onStateChange(n);}ngAfterViewInit(){let n=this.widgetRef?.nativeElement;n&&(n.setAttribute("challenge",this.challengeUrl),n.setAttribute("type","checkbox"),n.setAttribute("language","es"),n.addEventListener("statechange",this.stateHandler));}ngOnDestroy(){let n=this.widgetRef?.nativeElement;n&&n.removeEventListener("statechange",this.stateHandler);}onStateChange(n){let r=n.detail;r?.state==="verified"?this.zone.run(()=>{this.payload=r.payload??"",this.captchaValid.emit(true);}):(r?.state==="error"||r?.state==="expired")&&this.zone.run(()=>{this.payload="",this.captchaValid.emit(false);});}getAltchaPayload(){return this.payload}static{this.\u0275fac=function(r){return new(r||e)};}static{this.\u0275cmp=UI({type:e,selectors:[["app-captcha"]],viewQuery:function(r,i){if(r&1&&Dp(jc,5),r&2){let a;LE(a=FE())&&(i.widgetRef=a.first);}},outputs:{captchaValid:"captchaValid"},decls:3,vars:0,consts:[["altchaWidget",""],[1,"mb-3"]],template:function(r,i){r&1&&(Rc$1(0,"div",1),fp(1,"altcha-widget",null,0),kc$1());},encapsulation:2,changeDetection:1});}}return e})();var Fc=(e,t)=>({"is-valid":e,"is-invalid":t});function Uc(e,t){e&1&&(fi$1(0,"div",14),dp(1,"i",25),Ac$1());}function zc(e,t){e&1&&(fi$1(0,"div",15)(1,"span",26),lD(2,"1"),Ac$1()());}function Bc(e,t){e&1&&(fi$1(0,"div",16)(1,"span",26),lD(2,"1"),Ac$1()());}function Hc(e,t){e&1&&(fi$1(0,"div",14),dp(1,"i",25),Ac$1());}function Kc(e,t){e&1&&(fi$1(0,"div",15)(1,"span",26),lD(2,"2"),Ac$1()());}function Wc(e,t){e&1&&(fi$1(0,"div",16)(1,"span",26),lD(2,"2"),Ac$1()());}function Yc(e,t){e&1&&(fi$1(0,"div",14),dp(1,"i",25),Ac$1());}function Gc(e,t){e&1&&(fi$1(0,"div",16)(1,"span",26),lD(2,"3"),Ac$1()());}function qc(e,t){if(e&1){let n=TE();fi$1(0,"div",24)(1,"div",27)(2,"div",28),dp(3,"i",29),Ac$1(),fi$1(4,"h3",30),lD(5,"Pago registrado exitosamente"),Ac$1(),fi$1(6,"p",31),lD(7," Su pago ha sido procesado y registrado en el sistema. "),Ac$1(),fi$1(8,"div",32)(9,"div",33)(10,"div",34)(11,"small",35),lD(12,"Referencia"),Ac$1(),fi$1(13,"strong",36),lD(14),Ac$1()(),fi$1(15,"div",34)(16,"small",35),lD(17,"Monto"),Ac$1(),fi$1(18,"strong",37),lD(19),MD(20,"currency"),Ac$1()(),fi$1(21,"div",38)(22,"small",35),lD(23,"Se enviar\xE1 un comprobante a su correo electr\xF3nico"),Ac$1()()()(),fi$1(24,"button",39),vp("click",function(){hu(n);let i=AE();return gu(i.volverAlInicio())}),dp(25,"i",40),lD(26," Volver al inicio "),Ac$1()()();}if(e&2){let n=AE();cv(14),jp(n.referenciaPago),cv(5),jp(RD(20,2,n.montoAPagar,"USD","symbol","1.2-2"));}}function Zc(e,t){e&1&&(fi$1(0,"div",45)(1,"div",50)(2,"span",51),lD(3,"Cargando..."),Ac$1()(),fi$1(4,"p",52),lD(5,"Consultando informaci\xF3n del cr\xE9dito..."),Ac$1()());}function Jc(e,t){if(e&1&&(fi$1(0,"div",46),dp(1,"i",53),lD(2),Ac$1()),e&2){let n=AE(2);cv(2),Oc$1(" ",n.errorMsg," ");}}function Xc(e,t){e&1&&(fi$1(0,"div",72),dp(1,"i",78),lD(2," No tiene saldo vencido. El monto de referencia es el pr\xF3ximo mes. "),Ac$1());}function Qc(e,t){if(e&1){let n=TE();fi$1(0,"div")(1,"div",54)(2,"label",55),dp(3,"i",56),lD(4," Acreditado "),Ac$1(),dp(5,"input",57),Ac$1(),fi$1(6,"div",58)(7,"div",59)(8,"label",60),dp(9,"i",61),lD(10," Saldo vencido "),Ac$1(),dp(11,"input",62),MD(12,"currency"),Ac$1(),fi$1(13,"div",59)(14,"label",63),dp(15,"i",64),lD(16," Pr\xF3ximo mes "),Ac$1(),dp(17,"input",65),MD(18,"currency"),Ac$1()(),fi$1(19,"div",54)(20,"label",66),dp(21,"i",67),lD(22," Monto a pagar "),Ac$1(),fi$1(23,"div",68)(24,"span",69),dp(25,"i",70),Ac$1(),fi$1(26,"input",71),$p("ngModelChange",function(i){hu(n);let a=AE(2);return dD(a.montoAPagar,i)||(a.montoAPagar=i),gu(i)}),vp("ngModelChange",function(){hu(n);let i=AE(2);return gu(i.calcularMesesVencidos())}),Ac$1(),Yv(),Ac$1(),fE(27,Xc,3,0,"div",72),Ac$1(),fi$1(28,"div",28)(29,"label",73),dp(30,"i",74),lD(31," Meses equivalentes "),Ac$1(),dp(32,"input",75),Ac$1(),fi$1(33,"button",76),vp("click",function(){hu(n);let i=AE(2);return gu(i.irAPaso2())}),dp(34,"i",77),lD(35," Siguiente "),Ac$1()();}if(e&2){let n=AE(2);cv(5),up("value",n.creditoData.acreditado_nombre),cv(6),up("value",RD(12,8,n.creditoData.saldo_vencido,"USD","symbol","1.2-2")),cv(6),up("value",RD(18,13,n.creditoData.saldo_proximo_mes,"USD","symbol","1.2-2")),cv(9),Bp("ngModel",n.montoAPagar),up("min",0),Jv(),cv(),pE(n.creditoData.saldo_vencido===0&&n.creditoData.saldo_proximo_mes>0?27:-1),cv(5),up("value",n.mesesVencidosDisplay),cv(),up("disabled",n.montoAPagar<=0);}}function eu(e,t){if(e&1&&(fi$1(0,"div",24)(1,"div",41)(2,"h4",42),dp(3,"i",43),lD(4," Consulta de saldo "),Ac$1(),fi$1(5,"p",44),lD(6,"Verifica el estado de tu cr\xE9dito"),Ac$1(),fE(7,Zc,6,0,"div",45),fE(8,Jc,3,1,"div",46),fE(9,Qc,36,18,"div"),fi$1(10,"div",47)(11,"div",48),dp(12,"i",49),fi$1(13,"div",36)(14,"strong"),lD(15,"\xBFNecesitas ayuda?"),Ac$1(),dp(16,"br"),lD(17," Puedes pagar el saldo vencido completo, parcial, o abonar de m\xE1s para aplicar a capital. "),Ac$1()()()()()),e&2){let n=AE();cv(7),pE(n.isLoadingConsulta?7:-1),cv(),pE(n.errorMsg&&!n.isLoadingConsulta&&!n.creditoData?8:-1),cv(),pE(n.creditoData&&!n.isLoadingConsulta?9:-1);}}function tu(e,t){if(e&1&&(fi$1(0,"div",46),dp(1,"i",53),lD(2),Ac$1()),e&2){let n=AE(2);cv(2),Oc$1(" ",n.errorMsg," ");}}function nu(e,t){e&1&&(fi$1(0,"div",90),lD(1,"Los correos no coinciden"),Ac$1());}function ru(e,t){e&1&&(fi$1(0,"span"),dp(1,"i",108),lD(2," Pagar Ahora "),Ac$1());}function iu(e,t){e&1&&(fi$1(0,"span"),dp(1,"span",109),lD(2," Procesando... "),Ac$1());}function au(e,t){if(e&1){let n=TE();fi$1(0,"div",24)(1,"div",41)(2,"h4",42),dp(3,"i",79),lD(4," Datos de pago "),Ac$1(),fi$1(5,"p",44),lD(6,"Completa los datos para procesar tu pago"),Ac$1(),fi$1(7,"div",80)(8,"div",81)(9,"div",82)(10,"small",35),lD(11,"Cr\xE9dito"),Ac$1(),fi$1(12,"strong"),lD(13),Ac$1()(),fi$1(14,"div",82)(15,"small",35),lD(16,"Acreditado"),Ac$1(),fi$1(17,"strong",36),lD(18),Ac$1()(),fi$1(19,"div",82)(20,"small",35),lD(21,"Monto a pagar"),Ac$1(),fi$1(22,"strong",37),lD(23),MD(24,"currency"),Ac$1()()()(),fE(25,tu,3,1,"div",46),fi$1(26,"div",54)(27,"label",83),dp(28,"i",84),lD(29," Correo electr\xF3nico "),Ac$1(),fi$1(30,"input",85),$p("ngModelChange",function(i){hu(n);let a=AE();return dD(a.email,i)||(a.email=i),gu(i)}),Ac$1(),Yv(),fi$1(31,"div",86),lD(32," Recibir\xE1s tu comprobante de pago en este correo "),Ac$1()(),fi$1(33,"div",28)(34,"label",87),dp(35,"i",88),lD(36," Confirmar correo "),Ac$1(),fi$1(37,"input",89),$p("ngModelChange",function(i){hu(n);let a=AE();return dD(a.emailConfirm,i)||(a.emailConfirm=i),gu(i)}),Ac$1(),Yv(),fE(38,nu,2,0,"div",90),Ac$1(),dp(39,"hr",91),fi$1(40,"h6",92),dp(41,"i",93),lD(42," Datos de tarjeta "),Ac$1(),fi$1(43,"div",54)(44,"label",94),lD(45,"N\xFAmero de tarjeta"),Ac$1(),fi$1(46,"input",95),vp("input",function(i){hu(n);let a=AE();return gu(a.formatearNumeroTarjeta(i))}),Ac$1()(),fi$1(47,"div",54)(48,"label",96),lD(49,"Nombre del titular"),Ac$1(),fi$1(50,"input",97),$p("ngModelChange",function(i){hu(n);let a=AE();return dD(a.datosTarjeta.titular,i)||(a.datosTarjeta.titular=i),gu(i)}),Ac$1(),Yv(),Ac$1(),fi$1(51,"div",98)(52,"div",59)(53,"label",99),lD(54,"Vencimiento"),Ac$1(),fi$1(55,"input",100),vp("input",function(i){hu(n);let a=AE();return gu(a.formatearVencimiento(i))}),Ac$1()(),fi$1(56,"div",59)(57,"label",101),lD(58,"CVV"),Ac$1(),fi$1(59,"input",102),vp("input",function(i){hu(n);let a=AE();return gu(a.formatearCvv(i))}),Ac$1()()(),fi$1(60,"app-captcha",103),vp("captchaValid",function(i){hu(n);let a=AE();return gu(a.onCaptchaValid(i))}),Ac$1(),fi$1(61,"div",104)(62,"button",105),vp("click",function(){hu(n);let i=AE();return gu(i.volverAPaso1())}),dp(63,"i",106),lD(64," Volver "),Ac$1(),fi$1(65,"button",107),vp("click",function(){hu(n);let i=AE();return gu(i.procesarPago())}),fE(66,ru,3,0,"span")(67,iu,3,0,"span"),Ac$1()()()();}if(e&2){let n=AE();cv(13),Oc$1("#",n.creditoData?.credito_id),cv(5),jp(n.creditoData?.acreditado_nombre),cv(5),jp(RD(24,14,n.montoAPagar,"USD","symbol","1.2-2")),cv(2),pE(n.errorMsg?25:-1),cv(5),Bp("ngModel",n.email),Jv(),cv(7),Bp("ngModel",n.emailConfirm),up("ngClass",CD(19,Fc,n.emailConfirm.length>0&&n.email===n.emailConfirm,n.emailConfirm.length>0&&n.email!==n.emailConfirm)),Jv(),cv(),pE(n.emailConfirm.length>0&&n.email!==n.emailConfirm?38:-1),cv(8),up("value",n.datosTarjeta.numero),cv(4),Bp("ngModel",n.datosTarjeta.titular),Jv(),cv(5),up("value",n.datosTarjeta.vencimiento),cv(4),up("value",n.datosTarjeta.cvv),cv(6),up("disabled",!n.formPagoValido||n.isSubmitting),cv(),pE(n.isSubmitting?67:66);}}var Mo=(()=>{class e{constructor(){this.route=v(ye$1),this.router=v(De),this.pagoService=v(ra),this.clientAccessKey="",this.step=1,this.creditoData=null,this.montoAPagar=0,this.isLoadingConsulta=false,this.errorMsg="",this.mesesVencidosCalculados=0,this.email="",this.emailConfirm="",this.datosTarjeta={numero:"",titular:"",vencimiento:"",cvv:""},this.isSubmitting=false,this.captchaValid=false,this.pagoExitoso=false,this.referenciaPago="";}ngOnInit(){let n=this.route.snapshot.paramMap.get("hash");n&&n.trim().length>0?(this.clientAccessKey=n.trim(),this.consultarCredito()):this.errorMsg="No se proporcion\xF3 un identificador de cr\xE9dito v\xE1lido.";}consultarCredito(){return Ai$1(this,null,function*(){if(this.isLoadingConsulta)return;this.isLoadingConsulta=true,this.errorMsg="";let n=yield this.pagoService.consultarCredito(this.clientAccessKey);n?(this.creditoData=n,this.montoAPagar=n.saldo_vencido>0?n.saldo_vencido:n.saldo_proximo_mes,this.calcularMesesVencidos()):this.errorMsg="Este cr\xE9dito se encuentra inactivo o no es posible realizar abonos en este momento. Por favor, contacte a soporte.",this.isLoadingConsulta=false;})}calcularMesesVencidos(){if(!this.creditoData||this.creditoData.pago_por_mes<=0){this.mesesVencidosCalculados=0;return}this.mesesVencidosCalculados=Math.round(this.montoAPagar/this.creditoData.pago_por_mes*10)/10;}get mesesVencidosDisplay(){if(this.mesesVencidosCalculados===0)return "0 meses";let n=Math.floor(this.mesesVencidosCalculados),r=this.mesesVencidosCalculados-n;return r>.4&&r<.6?`${n} mes${n!==1?"es":""} y medio`:`${this.mesesVencidosCalculados} mes${n!==1?"es":""}`}get montoReferencia(){return this.creditoData?this.creditoData.saldo_vencido>0?this.creditoData.saldo_vencido:this.creditoData.saldo_proximo_mes:0}get formPagoValido(){return this.email.length>0&&this.email===this.emailConfirm&&this.datosTarjeta.numero.length>=13&&this.datosTarjeta.titular.length>=2&&this.datosTarjeta.vencimiento.length===5&&this.datosTarjeta.cvv.length>=3&&this.montoAPagar>0&&this.captchaValid}irAPaso2(){!this.creditoData||this.montoAPagar<=0||(this.step=2);}volverAPaso1(){this.step=1;}onCaptchaValid(n){this.captchaValid=n;}formatearNumeroTarjeta(n){let r=n.target,i=r.value.replace(/\D/g,"");i.length>16&&(i=i.substring(0,16));let a=i.match(/.{1,4}/g);this.datosTarjeta.numero=a?a.join(" "):i,r.value=this.datosTarjeta.numero;}formatearVencimiento(n){let r=n.target,i=r.value.replace(/\D/g,"");i.length>4&&(i=i.substring(0,4)),i.length>=2&&(i=i.substring(0,2)+"/"+i.substring(2)),this.datosTarjeta.vencimiento=i,r.value=i;}formatearCvv(n){let r=n.target,i=r.value.replace(/\D/g,"");i.length>4&&(i=i.substring(0,4)),this.datosTarjeta.cvv=i,r.value=i;}validarLuhn(n){let r=n.replace(/\D/g,"");if(r.length<13)return  false;let i=0,a=false;for(let l=r.length-1;l>=0;l--){let s=parseInt(r[l],10);a&&(s*=2,s>9&&(s-=9)),i+=s,a=!a;}return i%10===0}procesarPago(){return Ai$1(this,null,function*(){if(!this.formPagoValido||this.isSubmitting)return;this.isSubmitting=true,this.errorMsg="";let n={client_access_key:this.clientAccessKey,monto_a_pagar:this.montoAPagar,email:this.email,datos_tarjeta:{numero:this.datosTarjeta.numero.replace(/\s/g,""),titular:this.datosTarjeta.titular,vencimiento:this.datosTarjeta.vencimiento,cvv:this.datosTarjeta.cvv},altcha_payload:this.captchaComponent?.getAltchaPayload()??""},r=yield this.pagoService.procesarPago(n);if(r){if(r.requires_redirect&&r.redirection_url){window.location.href=r.redirection_url;return}this.pagoExitoso=true,this.referenciaPago=r.referencia??r.transaction_id??"";}else this.errorMsg="No fue posible procesar el pago. Por favor, intente nuevamente.";this.isSubmitting=false;})}volverAlInicio(){this.router.navigate(["/ciudadano/auth/login"]);}static{this.\u0275fac=function(r){return new(r||e)};}static{this.\u0275cmp=UI({type:e,selectors:[["app-pago-credito"]],viewQuery:function(r,i){if(r&1&&Dp(Pi,5),r&2){let a;LE(a=FE())&&(i.captchaComponent=a.first);}},decls:54,vars:32,consts:[[1,"bg-texture-1","min-vh-100","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center","g-4"],[1,"col-lg-4","col-md-5","d-flex","align-items-stretch"],[1,"card","border-0","shadow-sm","w-100"],[1,"card-body","p-4","d-flex","flex-column"],[1,"text-center","mb-4"],["src","../../../assets/logo-fondos-sei-rojo.png","alt","Secretar\xEDa de Econom\xEDa e Innovaci\xF3n",1,"img-fluid","mb-3",2,"max-height","60px"],[1,"h5","fw-bold","mb-1"],[1,"text-muted","small","mb-0"],[1,"my-3"],[1,"flex-grow-1"],[1,"d-flex","align-items-start","mb-4"],[1,"me-3"],[1,"d-inline-flex","align-items-center","justify-content-center","rounded-circle","bg-success","text-white",2,"width","40px","height","40px"],[1,"d-inline-flex","align-items-center","justify-content-center","rounded-circle","bg-primary","text-white",2,"width","40px","height","40px"],[1,"d-inline-flex","align-items-center","justify-content-center","rounded-circle","bg-light","text-muted","border",2,"width","40px","height","40px"],[1,"mb-1","fw-semibold"],[1,"ms-4","border-start","border-2","mb-4",2,"height","20px"],[1,"d-flex","align-items-start"],[1,"text-center"],[1,"badge","bg-success","text-white","px-3","py-2"],[1,"bi","bi-shield-check","me-1"],[1,"col-lg-8","col-md-7","d-flex","align-items-stretch"],[1,"card","shadow-lg","border-0","w-100"],[1,"bi","bi-check-lg","fs-5"],[1,"fw-bold"],[1,"card-body","text-center","px-4","py-5","px-md-5","d-flex","flex-column","justify-content-center"],[1,"mb-4"],[1,"bi","bi-check-circle-fill","text-success",2,"font-size","5rem"],[1,"h4","mb-3","fw-bold"],[1,"text-muted","mb-4"],[1,"alert","alert-light","border","mb-4","mx-auto",2,"max-width","400px"],[1,"row","text-start"],[1,"col-6","mb-2"],[1,"text-muted","d-block"],[1,"small"],[1,"text-success"],[1,"col-12"],["type","button",1,"btn","btn-primary","btn-lg","fw-semibold","mx-auto",2,"max-width","300px",3,"click"],[1,"bi","bi-box-arrow-left","me-2"],[1,"card-body","px-4","py-4","px-md-5"],[1,"fw-bold","mb-1"],[1,"bi","bi-search","me-2","text-primary"],[1,"text-muted","small","mb-4"],[1,"text-center","py-5"],["role","alert",1,"alert","alert-danger","text-center"],["role","alert",1,"alert","alert-info","mt-4","mb-0"],[1,"d-flex","align-items-center"],[1,"bi","bi-info-circle","me-2","flex-shrink-0"],["role","status",1,"spinner-border","text-primary","mb-3",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"text-muted"],[1,"bi","bi-exclamation-triangle","me-2"],[1,"mb-3"],["for","acreditadoNombre",1,"form-label","fw-semibold","text-muted","small"],[1,"bi","bi-person","me-1"],["type","text","id","acreditadoNombre","readonly","",1,"form-control",2,"background-color","#f8f9fa",3,"value"],[1,"row","mb-3"],[1,"col-6"],["for","saldoVencido",1,"form-label","fw-semibold","text-muted","small"],[1,"bi","bi-exclamation-circle","me-1"],["type","text","id","saldoVencido","readonly","",1,"form-control",2,"background-color","#f8f9fa","color","#dc3545","font-weight","bold",3,"value"],["for","saldoProximoMes",1,"form-label","fw-semibold","text-muted","small"],[1,"bi","bi-calendar","me-1"],["type","text","id","saldoProximoMes","readonly","",1,"form-control",2,"background-color","#f8f9fa","color","#0d6efd","font-weight","bold",3,"value"],["for","montoAPagar",1,"form-label","fw-semibold"],[1,"bi","bi-cash","me-2"],[1,"input-group","input-group-lg"],[1,"input-group-text","bg-light","border-end-0"],[1,"bi","bi-currency-dollar","text-primary"],["type","number","id","montoAPagar","step","0.01","placeholder","0.00",1,"form-control","border-start-0",3,"ngModelChange","ngModel","min"],[1,"form-text","text-info"],["for","mesesEquivalentes",1,"form-label","fw-semibold","text-muted","small"],[1,"bi","bi-calendar-check","me-1"],["type","text","id","mesesEquivalentes","readonly","",1,"form-control","fw-bold",2,"background-color","#f8f9fa","font-size","1.1rem",3,"value"],["type","button",1,"btn","btn-primary","btn-lg","w-100","fw-semibold",3,"click","disabled"],[1,"bi","bi-arrow-right","me-2"],[1,"bi","bi-info-circle","me-1"],[1,"bi","bi-credit-card","me-2","text-primary"],[1,"alert","alert-light","border","mb-4"],[1,"row","text-center"],[1,"col-4"],["for","email",1,"form-label","fw-semibold"],[1,"bi","bi-envelope","me-2"],["type","email","id","email","placeholder","tu@correo.com","autocomplete","email",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],[1,"form-text"],["for","emailConfirm",1,"form-label","fw-semibold"],[1,"bi","bi-envelope-check","me-2"],["type","email","id","emailConfirm","placeholder","Repite tu correo electr\xF3nico",1,"form-control","form-control-lg",3,"ngModelChange","ngModel","ngClass"],[1,"invalid-feedback"],[1,"my-4"],[1,"fw-bold","mb-3"],[1,"bi","bi-credit-card","me-2"],["for","numeroTarjeta",1,"form-label","fw-semibold"],["type","text","id","numeroTarjeta","placeholder","1234 5678 9012 3456","maxlength","19","autocomplete","cc-number",1,"form-control","form-control-lg",3,"input","value"],["for","titular",1,"form-label","fw-semibold"],["type","text","id","titular","placeholder","Como aparece en la tarjeta","autocomplete","cc-name",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],[1,"row","mb-4"],["for","vencimiento",1,"form-label","fw-semibold"],["type","text","id","vencimiento","placeholder","MM/YY","maxlength","5","autocomplete","cc-exp",1,"form-control","form-control-lg",3,"input","value"],["for","cvv",1,"form-label","fw-semibold"],["type","password","id","cvv","placeholder","123","maxlength","4","autocomplete","cc-csc",1,"form-control","form-control-lg",3,"input","value"],[3,"captchaValid"],[1,"d-flex","gap-2","mt-4"],["type","button",1,"btn","btn-outline-secondary","btn-lg","flex-grow-1",3,"click"],[1,"bi","bi-arrow-left","me-1"],["type","button",1,"btn","btn-success","btn-lg","flex-grow-1","fw-semibold",3,"click","disabled"],[1,"bi","bi-lock","me-1"],["role","status",1,"spinner-border","spinner-border-sm","me-1"]],template:function(r,i){r&1&&(fi$1(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),dp(7,"img",7),fi$1(8,"h3",8),lD(9,"Pago de Cr\xE9dito"),Ac$1(),fi$1(10,"p",9),lD(11,"Consulta y realiza tu pago en l\xEDnea"),Ac$1()(),dp(12,"hr",10),fi$1(13,"div",11)(14,"div",12)(15,"div",13),fE(16,Uc,2,0,"div",14)(17,zc,3,0,"div",15)(18,Bc,3,0,"div",16),Ac$1(),fi$1(19,"div")(20,"h6",17),lD(21," Consulta "),Ac$1(),fi$1(22,"p",9),lD(23,"Verifica tu saldo y selecciona monto"),Ac$1()()(),dp(24,"div",18),fi$1(25,"div",12)(26,"div",13),fE(27,Hc,2,0,"div",14)(28,Kc,3,0,"div",15)(29,Wc,3,0,"div",16),Ac$1(),fi$1(30,"div")(31,"h6",17),lD(32," Pago "),Ac$1(),fi$1(33,"p",9),lD(34,"Ingresa tus datos de pago"),Ac$1()()(),dp(35,"div",18),fi$1(36,"div",19)(37,"div",13),fE(38,Yc,2,0,"div",14)(39,Gc,3,0,"div",16),Ac$1(),fi$1(40,"div")(41,"h6",17),lD(42," Confirmaci\xF3n "),Ac$1(),fi$1(43,"p",9),lD(44,"Comprobante de pago"),Ac$1()()()(),dp(45,"hr",10),fi$1(46,"div",20)(47,"span",21),dp(48,"i",22),lD(49," Pago seguro "),Ac$1()()()()(),fi$1(50,"div",23),fE(51,qc,27,7,"div",24),fE(52,eu,18,3,"div",24),fE(53,au,68,22,"div",24),Ac$1()()()()),r&2&&(cv(16),pE(i.pagoExitoso||i.step>1?16:i.step===1?17:18),cv(4),Mp("text-success",i.pagoExitoso||i.step>1)("text-primary",i.step===1)("text-muted",i.step<1&&!i.pagoExitoso),cv(4),Mp("border-success",i.pagoExitoso||i.step>1)("border-primary",i.step===2)("border-secondary",i.step<2&&!i.pagoExitoso),cv(3),pE(i.pagoExitoso?27:i.step===2?28:29),cv(4),Mp("text-success",i.pagoExitoso)("text-primary",i.step===2)("text-muted",i.step<2&&!i.pagoExitoso),cv(4),Mp("border-success",i.pagoExitoso)("border-secondary",!i.pagoExitoso),cv(3),pE(i.pagoExitoso?38:39),cv(3),Mp("text-success",i.pagoExitoso)("text-muted",!i.pagoExitoso),cv(10),pE(i.pagoExitoso?51:-1),cv(),pE(!i.pagoExitoso&&i.step===1?52:-1),cv(),pE(!i.pagoExitoso&&i.step===2?53:-1));},dependencies:[ai$1,Ye,Vn$1,ei$1,Zt$1,yn,rs$1,iu$1,Pi,vu],encapsulation:2,changeDetection:1});}}return e})();function ou(e,t){if(e&1&&(Rc$1(0,"div",12)(1,"div",15)(2,"div",16)(3,"small",17),lD(4,"Referencia de transacci\xF3n"),kc$1(),Rc$1(5,"strong",18),lD(6),kc$1()(),Rc$1(7,"div",19)(8,"small",17),lD(9,"Se enviar\xE1 un comprobante a su correo electr\xF3nico"),kc$1()()()()),e&2){let n=AE();cv(6),jp(n.transactionId);}}var Ro=(()=>{class e{constructor(){this.route=v(ye$1),this.router=v(De),this.transactionId="";}ngOnInit(){this.transactionId=this.route.snapshot.paramMap.get("transactionId")??"";}volverAlInicio(){this.router.navigate(["/ciudadano/auth/login"]);}static{this.\u0275fac=function(r){return new(r||e)};}static{this.\u0275cmp=UI({type:e,selectors:[["app-pago-exito"]],decls:18,vars:1,consts:[[1,"bg-texture-1","min-vh-100","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6"],[1,"card","shadow-lg","border-0"],[1,"text-center","mb-4","mt-4"],["src","../../../assets/logo-fondos-sei-rojo.png","alt","Secretar\xEDa de Econom\xEDa e Innovaci\xF3n",1,"img-fluid","mb-2"],[1,"card-body","text-center","px-4","pb-4","px-md-5"],[1,"mb-4"],[1,"bi","bi-check-circle-fill","text-success",2,"font-size","4rem"],[1,"h4","mb-3"],[1,"text-muted","mb-3"],[1,"alert","alert-light","border","mb-4"],["type","button",1,"btn","btn-primary","btn-lg","w-100","fw-semibold",3,"click"],[1,"bi","bi-box-arrow-left","me-2"],[1,"row","text-start"],[1,"col-12","mb-2"],[1,"text-muted","d-block"],[1,"small"],[1,"col-12"]],template:function(r,i){r&1&&(Rc$1(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),fp(6,"img",6),kc$1(),Rc$1(7,"div",7)(8,"div",8),fp(9,"i",9),kc$1(),Rc$1(10,"h3",10),lD(11,"Pago procesado exitosamente"),kc$1(),Rc$1(12,"p",11),lD(13," Su pago ha sido autenticado y est\xE1 siendo procesado. "),kc$1(),fE(14,ou,10,1,"div",12),Rc$1(15,"button",13),Ip("click",function(){return i.volverAlInicio()}),fp(16,"i",14),lD(17," Volver al inicio "),kc$1()()()()()()()),r&2&&(cv(14),pE(i.transactionId?14:-1));},dependencies:[rs$1],encapsulation:2,changeDetection:1});}}return e})();var Do=(()=>{class e{constructor(){this.route=v(ye$1),this.router=v(De),this.hash="";}ngOnInit(){this.hash=this.route.snapshot.paramMap.get("hash")??"";}volverAlInicio(){this.router.navigate(["/ciudadano/auth/login"]);}intentarDeNuevo(){this.hash?this.router.navigate(["/ciudadano/pagar/credito",this.hash]):this.router.navigate(["/ciudadano/auth/login"]);}static{this.\u0275fac=function(r){return new(r||e)};}static{this.\u0275cmp=UI({type:e,selectors:[["app-pago-cancelado"]],decls:21,vars:0,consts:[[1,"bg-texture-1","min-vh-100","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6"],[1,"card","shadow-lg","border-0"],[1,"text-center","mb-4","mt-4"],["src","../../../assets/logo-fondos-sei-rojo.png","alt","Secretar\xEDa de Econom\xEDa e Innovaci\xF3n",1,"img-fluid","mb-2"],[1,"card-body","text-center","px-4","pb-4","px-md-5"],[1,"mb-4"],[1,"bi","bi-x-circle-fill","text-danger",2,"font-size","4rem"],[1,"h4","mb-3"],[1,"text-muted","mb-3"],[1,"d-flex","gap-2"],["type","button",1,"btn","btn-outline-secondary","btn-lg","flex-grow-1",3,"click"],[1,"bi","bi-box-arrow-left","me-1"],["type","button",1,"btn","btn-primary","btn-lg","flex-grow-1","fw-semibold",3,"click"],[1,"bi","bi-arrow-repeat","me-1"]],template:function(r,i){r&1&&(Rc$1(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),fp(6,"img",6),kc$1(),Rc$1(7,"div",7)(8,"div",8),fp(9,"i",9),kc$1(),Rc$1(10,"h3",10),lD(11,"Pago cancelado"),kc$1(),Rc$1(12,"p",11),lD(13," El proceso de pago fue cancelado. No se realiz\xF3 ning\xFAn cargo a su tarjeta. "),kc$1(),Rc$1(14,"div",12)(15,"button",13),Ip("click",function(){return i.volverAlInicio()}),fp(16,"i",14),lD(17," Inicio "),kc$1(),Rc$1(18,"button",15),Ip("click",function(){return i.intentarDeNuevo()}),fp(19,"i",16),lD(20," Intentar de nuevo "),kc$1()()()()()()()());},dependencies:[rs$1],encapsulation:2,changeDetection:1});}}return e})();var td=[{path:"credito/:hash",component:Mo},{path:"exito/:transactionId",component:Ro},{path:"cancelar/:hash",component:Do}];export{td as pagoCreditoRoutes};