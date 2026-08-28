(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ui(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const q={},St=[],Be=()=>{},qr=()=>!1,An=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fi=e=>e.startsWith("onUpdate:"),ce=Object.assign,hi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zr=Object.prototype.hasOwnProperty,U=(e,t)=>Zr.call(e,t),I=Array.isArray,Ft=e=>vn(e)==="[object Map]",ws=e=>vn(e)==="[object Set]",K=e=>typeof e=="function",ne=e=>typeof e=="string",st=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Ts=e=>(X(e)||K(e))&&K(e.then)&&K(e.catch),Ps=Object.prototype.toString,vn=e=>Ps.call(e),Qr=e=>vn(e).slice(8,-1),Ds=e=>vn(e)==="[object Object]",di=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),En=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xr=/-(\w)/g,Ce=En(e=>e.replace(Xr,(t,n)=>n?n.toUpperCase():"")),ea=/\B([A-Z])/g,gt=En(e=>e.replace(ea,"-$1").toLowerCase()),Cn=En(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=En(e=>e?`on${Cn(e)}`:""),it=(e,t)=>!Object.is(e,t),cn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rs=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Jn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oi;const Sn=()=>Oi||(Oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mi(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=ne(i)?sa(i):mi(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ne(e)||X(e))return e}const ta=/;(?![^(]*\))/g,na=/:([^]+)/,ia=/\/\*[^]*?\*\//g;function sa(e){const t={};return e.replace(ia,"").split(ta).forEach(n=>{if(n){const i=n.split(na);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function pi(e){let t="";if(ne(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const i=pi(e[n]);i&&(t+=i+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ra="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aa=ui(ra);function Ms(e){return!!e||e===""}const js=e=>!!(e&&e.__v_isRef===!0),ft=e=>ne(e)?e:e==null?"":I(e)||X(e)&&(e.toString===Ps||!K(e.toString))?js(e)?ft(e.value):JSON.stringify(e,Os,2):String(e),Os=(e,t)=>js(t)?Os(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[On(i,r)+" =>"]=s,n),{})}:ws(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>On(n))}:st(t)?On(t):X(t)&&!I(t)&&!Ds(t)?String(t):t,On=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class oa{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function la(){return be}let Q;const Gn=new WeakSet;class Gs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gn.has(this)&&(Gn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gi(this),Is(this);const t=Q,n=ke;Q=this,ke=!0;try{return this.fn()}finally{Ks(this),Q=t,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bi(t);this.deps=this.depsTail=void 0,Gi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yn(this)&&this.run()}get dirty(){return Yn(this)}}let Hs=0,Kt,Nt;function Bs(e,t=!1){if(e.flags|=8,t){e.next=Nt,Nt=e;return}e.next=Kt,Kt=e}function gi(){Hs++}function yi(){if(--Hs>0)return;if(Nt){let t=Nt;for(Nt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Kt;){let t=Kt;for(Kt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Is(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ks(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),bi(i),ca(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Yn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ns(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ns(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Wt))return;e.globalVersion=Wt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Yn(e)){e.flags&=-3;return}const n=Q,i=ke;Q=e,ke=!0;try{Is(e);const s=e.fn(e._value);(t.version===0||it(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Q=n,ke=i,Ks(e),e.flags&=-3}}function bi(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)bi(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ca(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ke=!0;const Ls=[];function rt(){Ls.push(ke),ke=!1}function at(){const e=Ls.pop();ke=e===void 0?!0:e}function Gi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Q;Q=void 0;try{t()}finally{Q=n}}}let Wt=0;class ua{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _i{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Q||!ke||Q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Q)n=this.activeLink=new ua(Q,this),Q.deps?(n.prevDep=Q.depsTail,Q.depsTail.nextDep=n,Q.depsTail=n):Q.deps=Q.depsTail=n,$s(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Q.depsTail,n.nextDep=void 0,Q.depsTail.nextDep=n,Q.depsTail=n,Q.deps===n&&(Q.deps=i)}return n}trigger(t){this.version++,Wt++,this.notify(t)}notify(t){gi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yi()}}}function $s(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)$s(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qn=new WeakMap,ht=Symbol(""),Zn=Symbol(""),Jt=Symbol("");function re(e,t,n){if(ke&&Q){let i=qn.get(e);i||qn.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new _i),s.map=i,s.key=n),s.track()}}function Ue(e,t,n,i,s,r){const a=qn.get(e);if(!a){Wt++;return}const o=l=>{l&&l.trigger()};if(gi(),t==="clear")a.forEach(o);else{const l=I(e),h=l&&di(n);if(l&&n==="length"){const f=Number(i);a.forEach((d,p)=>{(p==="length"||p===Jt||!st(p)&&p>=f)&&o(d)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),h&&o(a.get(Jt)),t){case"add":l?h&&o(a.get("length")):(o(a.get(ht)),Ft(e)&&o(a.get(Zn)));break;case"delete":l||(o(a.get(ht)),Ft(e)&&o(a.get(Zn)));break;case"set":Ft(e)&&o(a.get(ht));break}}yi()}function At(e){const t=V(e);return t===e?t:(re(t,"iterate",Jt),Ee(e)?t:t.map(ae))}function Fn(e){return re(e=V(e),"iterate",Jt),e}const fa={__proto__:null,[Symbol.iterator](){return Hn(this,Symbol.iterator,ae)},concat(...e){return At(this).concat(...e.map(t=>I(t)?At(t):t))},entries(){return Hn(this,"entries",e=>(e[1]=ae(e[1]),e))},every(e,t){return Le(this,"every",e,t,void 0,arguments)},filter(e,t){return Le(this,"filter",e,t,n=>n.map(ae),arguments)},find(e,t){return Le(this,"find",e,t,ae,arguments)},findIndex(e,t){return Le(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Le(this,"findLast",e,t,ae,arguments)},findLastIndex(e,t){return Le(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Le(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bn(this,"includes",e)},indexOf(...e){return Bn(this,"indexOf",e)},join(e){return At(this).join(e)},lastIndexOf(...e){return Bn(this,"lastIndexOf",e)},map(e,t){return Le(this,"map",e,t,void 0,arguments)},pop(){return Ot(this,"pop")},push(...e){return Ot(this,"push",e)},reduce(e,...t){return Hi(this,"reduce",e,t)},reduceRight(e,...t){return Hi(this,"reduceRight",e,t)},shift(){return Ot(this,"shift")},some(e,t){return Le(this,"some",e,t,void 0,arguments)},splice(...e){return Ot(this,"splice",e)},toReversed(){return At(this).toReversed()},toSorted(e){return At(this).toSorted(e)},toSpliced(...e){return At(this).toSpliced(...e)},unshift(...e){return Ot(this,"unshift",e)},values(){return Hn(this,"values",ae)}};function Hn(e,t,n){const i=Fn(e),s=i[t]();return i!==e&&!Ee(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const ha=Array.prototype;function Le(e,t,n,i,s,r){const a=Fn(e),o=a!==e&&!Ee(e),l=a[t];if(l!==ha[t]){const d=l.apply(e,r);return o?ae(d):d}let h=n;a!==e&&(o?h=function(d,p){return n.call(this,ae(d),p,e)}:n.length>2&&(h=function(d,p){return n.call(this,d,p,e)}));const f=l.call(a,h,i);return o&&s?s(f):f}function Hi(e,t,n,i){const s=Fn(e);let r=n;return s!==e&&(Ee(e)?n.length>3&&(r=function(a,o,l){return n.call(this,a,o,l,e)}):r=function(a,o,l){return n.call(this,a,ae(o),l,e)}),s[t](r,...i)}function Bn(e,t,n){const i=V(e);re(i,"iterate",Jt);const s=i[t](...n);return(s===-1||s===!1)&&Ei(n[0])?(n[0]=V(n[0]),i[t](...n)):s}function Ot(e,t,n=[]){rt(),gi();const i=V(e)[t].apply(e,n);return yi(),at(),i}const da=ui("__proto__,__v_isRef,__isVue"),Vs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st));function ma(e){st(e)||(e=String(e));const t=V(this);return re(t,"has",e),t.hasOwnProperty(e)}class Us{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Sa:Ys:r?Js:Ws).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=I(t);if(!s){let l;if(a&&(l=fa[n]))return l;if(n==="hasOwnProperty")return ma}const o=Reflect.get(t,n,le(t)?t:i);return(st(n)?Vs.has(n):da(n))||(s||re(t,"get",n),r)?o:le(o)?a&&di(n)?o:o.value:X(o)?s?Zs(o):tn(o):o}}class zs extends Us{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];if(!this._isShallow){const l=pt(r);if(!Ee(i)&&!pt(i)&&(r=V(r),i=V(i)),!I(t)&&le(r)&&!le(i))return l?!1:(r.value=i,!0)}const a=I(t)&&di(n)?Number(n)<t.length:U(t,n),o=Reflect.set(t,n,i,le(t)?t:s);return t===V(s)&&(a?it(i,r)&&Ue(t,"set",n,i):Ue(t,"add",n,i)),o}deleteProperty(t,n){const i=U(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&Ue(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!st(n)||!Vs.has(n))&&re(t,"has",n),i}ownKeys(t){return re(t,"iterate",I(t)?"length":ht),Reflect.ownKeys(t)}}class pa extends Us{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ga=new zs,ya=new pa,ba=new zs(!0);const Qn=e=>e,an=e=>Reflect.getPrototypeOf(e);function _a(e,t,n){return function(...i){const s=this.__v_raw,r=V(s),a=Ft(r),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,h=s[e](...i),f=n?Qn:t?Xn:ae;return!t&&re(r,"iterate",l?Zn:ht),{next(){const{value:d,done:p}=h.next();return p?{value:d,done:p}:{value:o?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function on(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Aa(e,t){const n={get(s){const r=this.__v_raw,a=V(r),o=V(s);e||(it(s,o)&&re(a,"get",s),re(a,"get",o));const{has:l}=an(a),h=t?Qn:e?Xn:ae;if(l.call(a,s))return h(r.get(s));if(l.call(a,o))return h(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&re(V(s),"iterate",ht),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,a=V(r),o=V(s);return e||(it(s,o)&&re(a,"has",s),re(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=V(o),h=t?Qn:e?Xn:ae;return!e&&re(l,"iterate",ht),o.forEach((f,d)=>s.call(r,h(f),h(d),a))}};return ce(n,e?{add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear")}:{add(s){!t&&!Ee(s)&&!pt(s)&&(s=V(s));const r=V(this);return an(r).has.call(r,s)||(r.add(s),Ue(r,"add",s,s)),this},set(s,r){!t&&!Ee(r)&&!pt(r)&&(r=V(r));const a=V(this),{has:o,get:l}=an(a);let h=o.call(a,s);h||(s=V(s),h=o.call(a,s));const f=l.call(a,s);return a.set(s,r),h?it(r,f)&&Ue(a,"set",s,r):Ue(a,"add",s,r),this},delete(s){const r=V(this),{has:a,get:o}=an(r);let l=a.call(r,s);l||(s=V(s),l=a.call(r,s)),o&&o.call(r,s);const h=r.delete(s);return l&&Ue(r,"delete",s,void 0),h},clear(){const s=V(this),r=s.size!==0,a=s.clear();return r&&Ue(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_a(s,e,t)}),n}function Ai(e,t){const n=Aa(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(U(n,s)&&s in i?n:i,s,r)}const va={get:Ai(!1,!1)},Ea={get:Ai(!1,!0)},Ca={get:Ai(!0,!1)};const Ws=new WeakMap,Js=new WeakMap,Ys=new WeakMap,Sa=new WeakMap;function Fa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ka(e){return e.__v_skip||!Object.isExtensible(e)?0:Fa(Qr(e))}function tn(e){return pt(e)?e:vi(e,!1,ga,va,Ws)}function qs(e){return vi(e,!1,ba,Ea,Js)}function Zs(e){return vi(e,!0,ya,Ca,Ys)}function vi(e,t,n,i,s){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const a=ka(e);if(a===0)return e;const o=new Proxy(e,a===2?i:n);return s.set(e,o),o}function kt(e){return pt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function Ei(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function xa(e){return!U(e,"__v_skip")&&Object.isExtensible(e)&&Rs(e,"__v_skip",!0),e}const ae=e=>X(e)?tn(e):e,Xn=e=>X(e)?Zs(e):e;function le(e){return e?e.__v_isRef===!0:!1}function nt(e){return Qs(e,!1)}function wa(e){return Qs(e,!0)}function Qs(e,t){return le(e)?e:new Ta(e,t)}class Ta{constructor(t,n){this.dep=new _i,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:V(t),this._value=n?t:ae(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ee(t)||pt(t);t=i?t:V(t),it(t,n)&&(this._rawValue=t,this._value=i?t:ae(t),this.dep.trigger())}}function dt(e){return le(e)?e.value:e}const Pa={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Xs(e){return kt(e)?e:new Proxy(e,Pa)}class Da{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new _i(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Q!==this)return Bs(this,!0),!0}get value(){const t=this.dep.track();return Ns(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ra(e,t,n=!1){let i,s;return K(e)?i=e:(i=e.get,s=e.set),new Da(i,s,n)}const ln={},dn=new WeakMap;let ut;function Ma(e,t=!1,n=ut){if(n){let i=dn.get(n);i||dn.set(n,i=[]),i.push(e)}}function ja(e,t,n=q){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=n,h=D=>s?D:Ee(D)||s===!1||s===0?ze(D,1):ze(D);let f,d,p,g,C=!1,E=!1;if(le(e)?(d=()=>e.value,C=Ee(e)):kt(e)?(d=()=>h(e),C=!0):I(e)?(E=!0,C=e.some(D=>kt(D)||Ee(D)),d=()=>e.map(D=>{if(le(D))return D.value;if(kt(D))return h(D);if(K(D))return l?l(D,2):D()})):K(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){rt();try{p()}finally{at()}}const D=ut;ut=f;try{return l?l(e,3,[g]):e(g)}finally{ut=D}}:d=Be,t&&s){const D=d,z=s===!0?1/0:s;d=()=>ze(D(),z)}const j=la(),R=()=>{f.stop(),j&&j.active&&hi(j.effects,f)};if(r&&t){const D=t;t=(...z)=>{D(...z),R()}}let P=E?new Array(e.length).fill(ln):ln;const G=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(t){const z=f.run();if(s||C||(E?z.some((te,ee)=>it(te,P[ee])):it(z,P))){p&&p();const te=ut;ut=f;try{const ee=[z,P===ln?void 0:E&&P[0]===ln?[]:P,g];l?l(t,3,ee):t(...ee),P=z}finally{ut=te}}}else f.run()};return o&&o(G),f=new Gs(d),f.scheduler=a?()=>a(G,!1):G,g=D=>Ma(D,!1,f),p=f.onStop=()=>{const D=dn.get(f);if(D){if(l)l(D,4);else for(const z of D)z();dn.delete(f)}},t?i?G(!0):P=f.run():a?a(G.bind(null,!0),!0):f.run(),R.pause=f.pause.bind(f),R.resume=f.resume.bind(f),R.stop=R,R}function ze(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,le(e))ze(e.value,t,n);else if(I(e))for(let i=0;i<e.length;i++)ze(e[i],t,n);else if(ws(e)||Ft(e))e.forEach(i=>{ze(i,t,n)});else if(Ds(e)){for(const i in e)ze(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ze(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nn(e,t,n,i){try{return i?e(...i):e()}catch(s){kn(s,t,n)}}function Ke(e,t,n,i){if(K(e)){const s=nn(e,t,n,i);return s&&Ts(s)&&s.catch(r=>{kn(r,t,n)}),s}if(I(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Ke(e[r],t,n,i));return s}}function kn(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||q;if(t){let o=t.parent;const l=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,l,h)===!1)return}o=o.parent}if(r){rt(),nn(r,null,10,[e,l,h]),at();return}}Oa(e,n,s,i,a)}function Oa(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const fe=[];let Ge=-1;const xt=[];let Xe=null,vt=0;const er=Promise.resolve();let mn=null;function tr(e){const t=mn||er;return e?t.then(this?e.bind(this):e):t}function Ga(e){let t=Ge+1,n=fe.length;for(;t<n;){const i=t+n>>>1,s=fe[i],r=Yt(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function Ci(e){if(!(e.flags&1)){const t=Yt(e),n=fe[fe.length-1];!n||!(e.flags&2)&&t>=Yt(n)?fe.push(e):fe.splice(Ga(t),0,e),e.flags|=1,nr()}}function nr(){mn||(mn=er.then(sr))}function Ha(e){I(e)?xt.push(...e):Xe&&e.id===-1?Xe.splice(vt+1,0,e):e.flags&1||(xt.push(e),e.flags|=1),nr()}function Bi(e,t,n=Ge+1){for(;n<fe.length;n++){const i=fe[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;fe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ir(e){if(xt.length){const t=[...new Set(xt)].sort((n,i)=>Yt(n)-Yt(i));if(xt.length=0,Xe){Xe.push(...t);return}for(Xe=t,vt=0;vt<Xe.length;vt++){const n=Xe[vt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xe=null,vt=0}}const Yt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sr(e){try{for(Ge=0;Ge<fe.length;Ge++){const t=fe[Ge];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),nn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ge<fe.length;Ge++){const t=fe[Ge];t&&(t.flags&=-2)}Ge=-1,fe.length=0,ir(),mn=null,(fe.length||xt.length)&&sr()}}let _e=null,rr=null;function pn(e){const t=_e;return _e=e,rr=e&&e.type.__scopeId||null,t}function Si(e,t=_e,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Ji(-1);const r=pn(t);let a;try{a=e(...s)}finally{pn(r),i._d&&Ji(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ba(e,t){if(_e===null)return e;const n=Rn(_e),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=q]=t[s];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&ze(a),i.push({dir:r,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function lt(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(rt(),Ke(l,n,8,[e.el,o,e,t]),at())}}const Ia=Symbol("_vte"),Ka=e=>e.__isTeleport;function Fi(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Fi(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ar(e,t){return K(e)?ce({name:e.name},t,{setup:e}):e}function or(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function gn(e,t,n,i,s=!1){if(I(e)){e.forEach((C,E)=>gn(C,t&&(I(t)?t[E]:t),n,i,s));return}if(Lt(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gn(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?Rn(i.component):i.el,a=s?null:r,{i:o,r:l}=e,h=t&&t.r,f=o.refs===q?o.refs={}:o.refs,d=o.setupState,p=V(d),g=d===q?()=>!1:C=>U(p,C);if(h!=null&&h!==l&&(ne(h)?(f[h]=null,g(h)&&(d[h]=null)):le(h)&&(h.value=null)),K(l))nn(l,o,12,[a,f]);else{const C=ne(l),E=le(l);if(C||E){const j=()=>{if(e.f){const R=C?g(l)?d[l]:f[l]:l.value;s?I(R)&&hi(R,r):I(R)?R.includes(r)||R.push(r):C?(f[l]=[r],g(l)&&(d[l]=f[l])):(l.value=[r],e.k&&(f[e.k]=l.value))}else C?(f[l]=a,g(l)&&(d[l]=a)):E&&(l.value=a,e.k&&(f[e.k]=a))};a?(j.id=-1,ye(j,n)):j()}}}Sn().requestIdleCallback;Sn().cancelIdleCallback;const Lt=e=>!!e.type.__asyncLoader,lr=e=>e.type.__isKeepAlive;function Na(e,t){cr(e,"a",t)}function La(e,t){cr(e,"da",t)}function cr(e,t,n=oe){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(xn(t,i,n),n){let s=n.parent;for(;s&&s.parent;)lr(s.parent.vnode)&&$a(i,t,n,s),s=s.parent}}function $a(e,t,n,i){const s=xn(t,e,i,!0);wn(()=>{hi(i[t],s)},n)}function xn(e,t,n=oe,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{rt();const o=sn(n),l=Ke(t,n,e,a);return o(),at(),l});return i?s.unshift(r):s.push(r),r}}const Je=e=>(t,n=oe)=>{(!Qt||e==="sp")&&xn(e,(...i)=>t(...i),n)},Va=Je("bm"),ur=Je("m"),Ua=Je("bu"),za=Je("u"),Wa=Je("bum"),wn=Je("um"),Ja=Je("sp"),Ya=Je("rtg"),qa=Je("rtc");function Za(e,t=oe){xn("ec",e,t)}const Qa="components";function ki(e,t){return eo(Qa,e,!0,t)||e}const Xa=Symbol.for("v-ndc");function eo(e,t,n=!0,i=!1){const s=_e||oe;if(s){const r=s.type;{const o=No(r,!1);if(o&&(o===t||o===Ce(t)||o===Cn(Ce(t))))return r}const a=Ii(s[e]||r[e],t)||Ii(s.appContext[e],t);return!a&&i?r:a}}function Ii(e,t){return e&&(e[t]||e[Ce(t)]||e[Cn(Ce(t))])}function fr(e,t,n,i){let s;const r=n,a=I(e);if(a||ne(e)){const o=a&&kt(e);let l=!1;o&&(l=!Ee(e),e=Fn(e)),s=new Array(e.length);for(let h=0,f=e.length;h<f;h++)s[h]=t(l?ae(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r)}else if(X(e))if(e[Symbol.iterator])s=Array.from(e,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(e);s=new Array(o.length);for(let l=0,h=o.length;l<h;l++){const f=o[l];s[l]=t(e[f],f,l,r)}}else s=[];return s}const ei=e=>e?Mr(e)?Rn(e):ei(e.parent):null,$t=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ei(e.parent),$root:e=>ei(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>dr(e),$forceUpdate:e=>e.f||(e.f=()=>{Ci(e.update)}),$nextTick:e=>e.n||(e.n=tr.bind(e.proxy)),$watch:e=>Eo.bind(e)}),In=(e,t)=>e!==q&&!e.__isScriptSetup&&U(e,t),to={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=e;let h;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(In(i,t))return a[t]=1,i[t];if(s!==q&&U(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&U(h,t))return a[t]=3,r[t];if(n!==q&&U(n,t))return a[t]=4,n[t];ti&&(a[t]=0)}}const f=$t[t];let d,p;if(f)return t==="$attrs"&&re(e.attrs,"get",""),f(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==q&&U(n,t))return a[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return In(s,t)?(s[t]=n,!0):i!==q&&U(i,t)?(i[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!n[a]||e!==q&&U(e,a)||In(t,a)||(o=r[0])&&U(o,a)||U(i,a)||U($t,a)||U(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ki(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ti=!0;function no(e){const t=dr(e),n=e.proxy,i=e.ctx;ti=!1,t.beforeCreate&&Ni(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:C,activated:E,deactivated:j,beforeDestroy:R,beforeUnmount:P,destroyed:G,unmounted:D,render:z,renderTracked:te,renderTriggered:ee,errorCaptured:we,serverPrefetch:Ye,expose:Te,inheritAttrs:qe,components:ot,directives:Pe,filters:Mt}=t;if(h&&io(h,i,null),a)for(const J in a){const L=a[J];K(L)&&(i[J]=L.bind(n))}if(s){const J=s.call(n,n);X(J)&&(e.data=tn(J))}if(ti=!0,r)for(const J in r){const L=r[J],Ne=K(L)?L.bind(n,n):K(L.get)?L.get.bind(n,n):Be,Ze=!K(L)&&K(L.set)?L.set.bind(n):Be,De=Fe({get:Ne,set:Ze});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:de=>De.value=de})}if(o)for(const J in o)hr(o[J],i,n,J);if(l){const J=K(l)?l.call(n):l;Reflect.ownKeys(J).forEach(L=>{un(L,J[L])})}f&&Ni(f,e,"c");function ie(J,L){I(L)?L.forEach(Ne=>J(Ne.bind(n))):L&&J(L.bind(n))}if(ie(Va,d),ie(ur,p),ie(Ua,g),ie(za,C),ie(Na,E),ie(La,j),ie(Za,we),ie(qa,te),ie(Ya,ee),ie(Wa,P),ie(wn,D),ie(Ja,Ye),I(Te))if(Te.length){const J=e.exposed||(e.exposed={});Te.forEach(L=>{Object.defineProperty(J,L,{get:()=>n[L],set:Ne=>n[L]=Ne})})}else e.exposed||(e.exposed={});z&&e.render===Be&&(e.render=z),qe!=null&&(e.inheritAttrs=qe),ot&&(e.components=ot),Pe&&(e.directives=Pe),Ye&&or(e)}function io(e,t,n=Be){I(e)&&(e=ni(e));for(const i in e){const s=e[i];let r;X(s)?"default"in s?r=Ie(s.from||i,s.default,!0):r=Ie(s.from||i):r=Ie(s),le(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function Ni(e,t,n){Ke(I(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function hr(e,t,n,i){let s=i.includes(".")?xr(n,i):()=>n[i];if(ne(e)){const r=t[e];K(r)&&Tt(s,r)}else if(K(e))Tt(s,e.bind(n));else if(X(e))if(I(e))e.forEach(r=>hr(r,t,n,i));else{const r=K(e.handler)?e.handler.bind(n):t[e.handler];K(r)&&Tt(s,r,e)}}function dr(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(h=>yn(l,h,a,!0)),yn(l,t,a)),X(t)&&r.set(t,l),l}function yn(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&yn(e,r,n,!0),s&&s.forEach(a=>yn(e,a,n,!0));for(const a in t)if(!(i&&a==="expose")){const o=so[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const so={data:Li,props:$i,emits:$i,methods:Bt,computed:Bt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Bt,directives:Bt,watch:ao,provide:Li,inject:ro};function Li(e,t){return t?e?function(){return ce(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function ro(e,t){return Bt(ni(e),ni(t))}function ni(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?ce(Object.create(null),e,t):t}function $i(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ce(Object.create(null),Ki(e),Ki(t??{})):t}function ao(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const i in t)n[i]=ue(e[i],t[i]);return n}function mr(){return{app:null,config:{isNativeTag:qr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oo=0;function lo(e,t){return function(i,s=null){K(i)||(i=ce({},i)),s!=null&&!X(s)&&(s=null);const r=mr(),a=new WeakSet,o=[];let l=!1;const h=r.app={_uid:oo++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:$o,get config(){return r.config},set config(f){},use(f,...d){return a.has(f)||(f&&K(f.install)?(a.add(f),f.install(h,...d)):K(f)&&(a.add(f),f(h,...d))),h},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),h},component(f,d){return d?(r.components[f]=d,h):r.components[f]},directive(f,d){return d?(r.directives[f]=d,h):r.directives[f]},mount(f,d,p){if(!l){const g=h._ceVNode||he(i,s);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(g,f,p),l=!0,h._container=f,f.__vue_app__=h,Rn(g.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Ke(o,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,d){return r.provides[f]=d,h},runWithContext(f){const d=wt;wt=h;try{return f()}finally{wt=d}}};return h}}let wt=null;function un(e,t){if(oe){let n=oe.provides;const i=oe.parent&&oe.parent.provides;i===n&&(n=oe.provides=Object.create(i)),n[e]=t}}function Ie(e,t,n=!1){const i=oe||_e;if(i||wt){const s=wt?wt._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(i&&i.proxy):t}}const pr={},gr=()=>Object.create(pr),yr=e=>Object.getPrototypeOf(e)===pr;function co(e,t,n,i=!1){const s={},r=gr();e.propsDefaults=Object.create(null),br(e,t,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=i?s:qs(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function uo(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,o=V(s),[l]=e.propsOptions;let h=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Tn(e.emitsOptions,p))continue;const g=t[p];if(l)if(U(r,p))g!==r[p]&&(r[p]=g,h=!0);else{const C=Ce(p);s[C]=ii(l,o,C,g,e,!1)}else g!==r[p]&&(r[p]=g,h=!0)}}}else{br(e,t,s,r)&&(h=!0);let f;for(const d in o)(!t||!U(t,d)&&((f=gt(d))===d||!U(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=ii(l,o,d,void 0,e,!0)):delete s[d]);if(r!==o)for(const d in r)(!t||!U(t,d))&&(delete r[d],h=!0)}h&&Ue(e.attrs,"set","")}function br(e,t,n,i){const[s,r]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(It(l))continue;const h=t[l];let f;s&&U(s,f=Ce(l))?!r||!r.includes(f)?n[f]=h:(o||(o={}))[f]=h:Tn(e.emitsOptions,l)||(!(l in i)||h!==i[l])&&(i[l]=h,a=!0)}if(r){const l=V(n),h=o||q;for(let f=0;f<r.length;f++){const d=r[f];n[d]=ii(s,l,d,h[d],e,!U(h,d))}}return a}function ii(e,t,n,i,s,r){const a=e[n];if(a!=null){const o=U(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&K(l)){const{propsDefaults:h}=s;if(n in h)i=h[n];else{const f=sn(s);i=h[n]=l.call(null,t),f()}}else i=l;s.ce&&s.ce._setProp(n,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===gt(n))&&(i=!0))}return i}const fo=new WeakMap;function _r(e,t,n=!1){const i=n?fo:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,a={},o=[];let l=!1;if(!K(e)){const f=d=>{l=!0;const[p,g]=_r(d,t,!0);ce(a,p),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!l)return X(e)&&i.set(e,St),St;if(I(r))for(let f=0;f<r.length;f++){const d=Ce(r[f]);Vi(d)&&(a[d]=q)}else if(r)for(const f in r){const d=Ce(f);if(Vi(d)){const p=r[f],g=a[d]=I(p)||K(p)?{type:p}:ce({},p),C=g.type;let E=!1,j=!0;if(I(C))for(let R=0;R<C.length;++R){const P=C[R],G=K(P)&&P.name;if(G==="Boolean"){E=!0;break}else G==="String"&&(j=!1)}else E=K(C)&&C.name==="Boolean";g[0]=E,g[1]=j,(E||U(g,"default"))&&o.push(d)}}const h=[a,o];return X(e)&&i.set(e,h),h}function Vi(e){return e[0]!=="$"&&!It(e)}const Ar=e=>e[0]==="_"||e==="$stable",xi=e=>I(e)?e.map(He):[He(e)],ho=(e,t,n)=>{if(t._n)return t;const i=Si((...s)=>xi(t(...s)),n);return i._c=!1,i},vr=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Ar(s))continue;const r=e[s];if(K(r))t[s]=ho(s,r,i);else if(r!=null){const a=xi(r);t[s]=()=>a}}},Er=(e,t)=>{const n=xi(t);e.slots.default=()=>n},Cr=(e,t,n)=>{for(const i in t)(n||i!=="_")&&(e[i]=t[i])},mo=(e,t,n)=>{const i=e.slots=gr();if(e.vnode.shapeFlag&32){const s=t._;s?(Cr(i,t,n),n&&Rs(i,"_",s,!0)):vr(t,i)}else t&&Er(e,t)},po=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,a=q;if(i.shapeFlag&32){const o=t._;o?n&&o===1?r=!1:Cr(s,t,n):(r=!t.$stable,vr(t,s)),a=t}else t&&(Er(e,t),a={default:1});if(r)for(const o in s)!Ar(o)&&a[o]==null&&delete s[o]},ye=To;function go(e){return yo(e)}function yo(e,t){const n=Sn();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Be,insertStaticContent:C}=e,E=(c,u,m,y=null,A=null,_=null,k=void 0,F=null,S=!!u.dynamicChildren)=>{if(c===u)return;c&&!Gt(c,u)&&(y=b(c),de(c,A,_,!0),c=null),u.patchFlag===-2&&(S=!1,u.dynamicChildren=null);const{type:v,ref:H,shapeFlag:w}=u;switch(v){case Pn:j(c,u,m,y);break;case qt:R(c,u,m,y);break;case Nn:c==null&&P(u,m,y,k);break;case Se:ot(c,u,m,y,A,_,k,F,S);break;default:w&1?z(c,u,m,y,A,_,k,F,S):w&6?Pe(c,u,m,y,A,_,k,F,S):(w&64||w&128)&&v.process(c,u,m,y,A,_,k,F,S,M)}H!=null&&A&&gn(H,c&&c.ref,_,u||c,!u)},j=(c,u,m,y)=>{if(c==null)i(u.el=o(u.children),m,y);else{const A=u.el=c.el;u.children!==c.children&&h(A,u.children)}},R=(c,u,m,y)=>{c==null?i(u.el=l(u.children||""),m,y):u.el=c.el},P=(c,u,m,y)=>{[c.el,c.anchor]=C(c.children,u,m,y,c.el,c.anchor)},G=({el:c,anchor:u},m,y)=>{let A;for(;c&&c!==u;)A=p(c),i(c,m,y),c=A;i(u,m,y)},D=({el:c,anchor:u})=>{let m;for(;c&&c!==u;)m=p(c),s(c),c=m;s(u)},z=(c,u,m,y,A,_,k,F,S)=>{u.type==="svg"?k="svg":u.type==="math"&&(k="mathml"),c==null?te(u,m,y,A,_,k,F,S):Ye(c,u,A,_,k,F,S)},te=(c,u,m,y,A,_,k,F)=>{let S,v;const{props:H,shapeFlag:w,transition:O,dirs:B}=c;if(S=c.el=a(c.type,_,H&&H.is,H),w&8?f(S,c.children):w&16&&we(c.children,S,null,y,A,Kn(c,_),k,F),B&&lt(c,null,y,"created"),ee(S,c,c.scopeId,k,y),H){for(const Z in H)Z!=="value"&&!It(Z)&&r(S,Z,null,H[Z],_,y);"value"in H&&r(S,"value",null,H.value,_),(v=H.onVnodeBeforeMount)&&Oe(v,y,c)}B&&lt(c,null,y,"beforeMount");const N=bo(A,O);N&&O.beforeEnter(S),i(S,u,m),((v=H&&H.onVnodeMounted)||N||B)&&ye(()=>{v&&Oe(v,y,c),N&&O.enter(S),B&&lt(c,null,y,"mounted")},A)},ee=(c,u,m,y,A)=>{if(m&&g(c,m),y)for(let _=0;_<y.length;_++)g(c,y[_]);if(A){let _=A.subTree;if(u===_||Tr(_.type)&&(_.ssContent===u||_.ssFallback===u)){const k=A.vnode;ee(c,k,k.scopeId,k.slotScopeIds,A.parent)}}},we=(c,u,m,y,A,_,k,F,S=0)=>{for(let v=S;v<c.length;v++){const H=c[v]=F?et(c[v]):He(c[v]);E(null,H,u,m,y,A,_,k,F)}},Ye=(c,u,m,y,A,_,k)=>{const F=u.el=c.el;let{patchFlag:S,dynamicChildren:v,dirs:H}=u;S|=c.patchFlag&16;const w=c.props||q,O=u.props||q;let B;if(m&&ct(m,!1),(B=O.onVnodeBeforeUpdate)&&Oe(B,m,u,c),H&&lt(u,c,m,"beforeUpdate"),m&&ct(m,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&f(F,""),v?Te(c.dynamicChildren,v,F,m,y,Kn(u,A),_):k||L(c,u,F,null,m,y,Kn(u,A),_,!1),S>0){if(S&16)qe(F,w,O,m,A);else if(S&2&&w.class!==O.class&&r(F,"class",null,O.class,A),S&4&&r(F,"style",w.style,O.style,A),S&8){const N=u.dynamicProps;for(let Z=0;Z<N.length;Z++){const W=N[Z],pe=w[W],me=O[W];(me!==pe||W==="value")&&r(F,W,pe,me,A,m)}}S&1&&c.children!==u.children&&f(F,u.children)}else!k&&v==null&&qe(F,w,O,m,A);((B=O.onVnodeUpdated)||H)&&ye(()=>{B&&Oe(B,m,u,c),H&&lt(u,c,m,"updated")},y)},Te=(c,u,m,y,A,_,k)=>{for(let F=0;F<u.length;F++){const S=c[F],v=u[F],H=S.el&&(S.type===Se||!Gt(S,v)||S.shapeFlag&70)?d(S.el):m;E(S,v,H,null,y,A,_,k,!0)}},qe=(c,u,m,y,A)=>{if(u!==m){if(u!==q)for(const _ in u)!It(_)&&!(_ in m)&&r(c,_,u[_],null,A,y);for(const _ in m){if(It(_))continue;const k=m[_],F=u[_];k!==F&&_!=="value"&&r(c,_,F,k,A,y)}"value"in m&&r(c,"value",u.value,m.value,A)}},ot=(c,u,m,y,A,_,k,F,S)=>{const v=u.el=c?c.el:o(""),H=u.anchor=c?c.anchor:o("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:B}=u;B&&(F=F?F.concat(B):B),c==null?(i(v,m,y),i(H,m,y),we(u.children||[],m,H,A,_,k,F,S)):w>0&&w&64&&O&&c.dynamicChildren?(Te(c.dynamicChildren,O,m,A,_,k,F),(u.key!=null||A&&u===A.subTree)&&Sr(c,u,!0)):L(c,u,m,H,A,_,k,F,S)},Pe=(c,u,m,y,A,_,k,F,S)=>{u.slotScopeIds=F,c==null?u.shapeFlag&512?A.ctx.activate(u,m,y,k,S):Mt(u,m,y,A,_,k,S):yt(c,u,S)},Mt=(c,u,m,y,A,_,k)=>{const F=c.component=Go(c,y,A);if(lr(c)&&(F.ctx.renderer=M),Ho(F,!1,k),F.asyncDep){if(A&&A.registerDep(F,ie,k),!c.el){const S=F.subTree=he(qt);R(null,S,u,m)}}else ie(F,c,u,m,A,_,k)},yt=(c,u,m)=>{const y=u.component=c.component;if(xo(c,u,m))if(y.asyncDep&&!y.asyncResolved){J(y,u,m);return}else y.next=u,y.update();else u.el=c.el,y.vnode=u},ie=(c,u,m,y,A,_,k)=>{const F=()=>{if(c.isMounted){let{next:w,bu:O,u:B,parent:N,vnode:Z}=c;{const Me=Fr(c);if(Me){w&&(w.el=Z.el,J(c,w,k)),Me.asyncDep.then(()=>{c.isUnmounted||F()});return}}let W=w,pe;ct(c,!1),w?(w.el=Z.el,J(c,w,k)):w=Z,O&&cn(O),(pe=w.props&&w.props.onVnodeBeforeUpdate)&&Oe(pe,N,w,Z),ct(c,!0);const me=zi(c),Re=c.subTree;c.subTree=me,E(Re,me,d(Re.el),b(Re),c,A,_),w.el=me.el,W===null&&wo(c,me.el),B&&ye(B,A),(pe=w.props&&w.props.onVnodeUpdated)&&ye(()=>Oe(pe,N,w,Z),A)}else{let w;const{el:O,props:B}=u,{bm:N,m:Z,parent:W,root:pe,type:me}=c,Re=Lt(u);ct(c,!1),N&&cn(N),!Re&&(w=B&&B.onVnodeBeforeMount)&&Oe(w,W,u),ct(c,!0);{pe.ce&&pe.ce._injectChildStyle(me);const Me=c.subTree=zi(c);E(null,Me,m,y,c,A,_),u.el=Me.el}if(Z&&ye(Z,A),!Re&&(w=B&&B.onVnodeMounted)){const Me=u;ye(()=>Oe(w,W,Me),A)}(u.shapeFlag&256||W&&Lt(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&ye(c.a,A),c.isMounted=!0,u=m=y=null}};c.scope.on();const S=c.effect=new Gs(F);c.scope.off();const v=c.update=S.run.bind(S),H=c.job=S.runIfDirty.bind(S);H.i=c,H.id=c.uid,S.scheduler=()=>Ci(H),ct(c,!0),v()},J=(c,u,m)=>{u.component=c;const y=c.vnode.props;c.vnode=u,c.next=null,uo(c,u.props,y,m),po(c,u.children,m),rt(),Bi(c),at()},L=(c,u,m,y,A,_,k,F,S=!1)=>{const v=c&&c.children,H=c?c.shapeFlag:0,w=u.children,{patchFlag:O,shapeFlag:B}=u;if(O>0){if(O&128){Ze(v,w,m,y,A,_,k,F,S);return}else if(O&256){Ne(v,w,m,y,A,_,k,F,S);return}}B&8?(H&16&&ve(v,A,_),w!==v&&f(m,w)):H&16?B&16?Ze(v,w,m,y,A,_,k,F,S):ve(v,A,_,!0):(H&8&&f(m,""),B&16&&we(w,m,y,A,_,k,F,S))},Ne=(c,u,m,y,A,_,k,F,S)=>{c=c||St,u=u||St;const v=c.length,H=u.length,w=Math.min(v,H);let O;for(O=0;O<w;O++){const B=u[O]=S?et(u[O]):He(u[O]);E(c[O],B,m,null,A,_,k,F,S)}v>H?ve(c,A,_,!0,!1,w):we(u,m,y,A,_,k,F,S,w)},Ze=(c,u,m,y,A,_,k,F,S)=>{let v=0;const H=u.length;let w=c.length-1,O=H-1;for(;v<=w&&v<=O;){const B=c[v],N=u[v]=S?et(u[v]):He(u[v]);if(Gt(B,N))E(B,N,m,null,A,_,k,F,S);else break;v++}for(;v<=w&&v<=O;){const B=c[w],N=u[O]=S?et(u[O]):He(u[O]);if(Gt(B,N))E(B,N,m,null,A,_,k,F,S);else break;w--,O--}if(v>w){if(v<=O){const B=O+1,N=B<H?u[B].el:y;for(;v<=O;)E(null,u[v]=S?et(u[v]):He(u[v]),m,N,A,_,k,F,S),v++}}else if(v>O)for(;v<=w;)de(c[v],A,_,!0),v++;else{const B=v,N=v,Z=new Map;for(v=N;v<=O;v++){const ge=u[v]=S?et(u[v]):He(u[v]);ge.key!=null&&Z.set(ge.key,v)}let W,pe=0;const me=O-N+1;let Re=!1,Me=0;const jt=new Array(me);for(v=0;v<me;v++)jt[v]=0;for(v=B;v<=w;v++){const ge=c[v];if(pe>=me){de(ge,A,_,!0);continue}let je;if(ge.key!=null)je=Z.get(ge.key);else for(W=N;W<=O;W++)if(jt[W-N]===0&&Gt(ge,u[W])){je=W;break}je===void 0?de(ge,A,_,!0):(jt[je-N]=v+1,je>=Me?Me=je:Re=!0,E(ge,u[je],m,null,A,_,k,F,S),pe++)}const Mi=Re?_o(jt):St;for(W=Mi.length-1,v=me-1;v>=0;v--){const ge=N+v,je=u[ge],ji=ge+1<H?u[ge+1].el:y;jt[v]===0?E(null,je,m,ji,A,_,k,F,S):Re&&(W<0||v!==Mi[W]?De(je,m,ji,2):W--)}}},De=(c,u,m,y,A=null)=>{const{el:_,type:k,transition:F,children:S,shapeFlag:v}=c;if(v&6){De(c.component.subTree,u,m,y);return}if(v&128){c.suspense.move(u,m,y);return}if(v&64){k.move(c,u,m,M);return}if(k===Se){i(_,u,m);for(let w=0;w<S.length;w++)De(S[w],u,m,y);i(c.anchor,u,m);return}if(k===Nn){G(c,u,m);return}if(y!==2&&v&1&&F)if(y===0)F.beforeEnter(_),i(_,u,m),ye(()=>F.enter(_),A);else{const{leave:w,delayLeave:O,afterLeave:B}=F,N=()=>i(_,u,m),Z=()=>{w(_,()=>{N(),B&&B()})};O?O(_,N,Z):Z()}else i(_,u,m)},de=(c,u,m,y=!1,A=!1)=>{const{type:_,props:k,ref:F,children:S,dynamicChildren:v,shapeFlag:H,patchFlag:w,dirs:O,cacheIndex:B}=c;if(w===-2&&(A=!1),F!=null&&gn(F,null,m,c,!0),B!=null&&(u.renderCache[B]=void 0),H&256){u.ctx.deactivate(c);return}const N=H&1&&O,Z=!Lt(c);let W;if(Z&&(W=k&&k.onVnodeBeforeUnmount)&&Oe(W,u,c),H&6)rn(c.component,m,y);else{if(H&128){c.suspense.unmount(m,y);return}N&&lt(c,null,u,"beforeUnmount"),H&64?c.type.remove(c,u,m,M,y):v&&!v.hasOnce&&(_!==Se||w>0&&w&64)?ve(v,u,m,!1,!0):(_===Se&&w&384||!A&&H&16)&&ve(S,u,m),y&&bt(c)}(Z&&(W=k&&k.onVnodeUnmounted)||N)&&ye(()=>{W&&Oe(W,u,c),N&&lt(c,null,u,"unmounted")},m)},bt=c=>{const{type:u,el:m,anchor:y,transition:A}=c;if(u===Se){_t(m,y);return}if(u===Nn){D(c);return}const _=()=>{s(m),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(c.shapeFlag&1&&A&&!A.persisted){const{leave:k,delayLeave:F}=A,S=()=>k(m,_);F?F(c.el,_,S):S()}else _()},_t=(c,u)=>{let m;for(;c!==u;)m=p(c),s(c),c=m;s(u)},rn=(c,u,m)=>{const{bum:y,scope:A,job:_,subTree:k,um:F,m:S,a:v}=c;Ui(S),Ui(v),y&&cn(y),A.stop(),_&&(_.flags|=8,de(k,c,u,m)),F&&ye(F,u),ye(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ve=(c,u,m,y=!1,A=!1,_=0)=>{for(let k=_;k<c.length;k++)de(c[k],u,m,y,A)},b=c=>{if(c.shapeFlag&6)return b(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=p(c.anchor||c.el),m=u&&u[Ia];return m?p(m):u};let T=!1;const x=(c,u,m)=>{c==null?u._vnode&&de(u._vnode,null,null,!0):E(u._vnode||null,c,u,null,null,null,m),u._vnode=c,T||(T=!0,Bi(),ir(),T=!1)},M={p:E,um:de,m:De,r:bt,mt:Mt,mc:we,pc:L,pbc:Te,n:b,o:e};return{render:x,hydrate:void 0,createApp:lo(x)}}function Kn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ct({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function bo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Sr(e,t,n=!1){const i=e.children,s=t.children;if(I(i)&&I(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=et(s[r]),o.el=a.el),!n&&o.patchFlag!==-2&&Sr(a,o)),o.type===Pn&&(o.el=a.el)}}function _o(e){const t=e.slice(),n=[0];let i,s,r,a,o;const l=e.length;for(i=0;i<l;i++){const h=e[i];if(h!==0){if(s=n[n.length-1],e[s]<h){t[i]=s,n.push(i);continue}for(r=0,a=n.length-1;r<a;)o=r+a>>1,e[n[o]]<h?r=o+1:a=o;h<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}function Fr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fr(t)}function Ui(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ao=Symbol.for("v-scx"),vo=()=>Ie(Ao);function Tt(e,t,n){return kr(e,t,n)}function kr(e,t,n=q){const{immediate:i,deep:s,flush:r,once:a}=n,o=ce({},n),l=t&&i||!t&&r!=="post";let h;if(Qt){if(r==="sync"){const g=vo();h=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Be,g.resume=Be,g.pause=Be,g}}const f=oe;o.call=(g,C,E)=>Ke(g,f,C,E);let d=!1;r==="post"?o.scheduler=g=>{ye(g,f&&f.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(g,C)=>{C?g():Ci(g)}),o.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=ja(e,t,o);return Qt&&(h?h.push(p):l&&p()),p}function Eo(e,t,n){const i=this.proxy,s=ne(e)?e.includes(".")?xr(i,e):()=>i[e]:e.bind(i,i);let r;K(t)?r=t:(r=t.handler,n=t);const a=sn(this),o=kr(s,r.bind(i),n);return a(),o}function xr(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Co=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ce(t)}Modifiers`]||e[`${gt(t)}Modifiers`];function So(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||q;let s=n;const r=t.startsWith("update:"),a=r&&Co(i,t.slice(7));a&&(a.trim&&(s=n.map(f=>ne(f)?f.trim():f)),a.number&&(s=n.map(Jn)));let o,l=i[o=jn(t)]||i[o=jn(Ce(t))];!l&&r&&(l=i[o=jn(gt(t))]),l&&Ke(l,e,6,s);const h=i[o+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ke(h,e,6,s)}}function wr(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let a={},o=!1;if(!K(e)){const l=h=>{const f=wr(h,t,!0);f&&(o=!0,ce(a,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!o?(X(e)&&i.set(e,null),null):(I(r)?r.forEach(l=>a[l]=null):ce(a,r),X(e)&&i.set(e,a),a)}function Tn(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,gt(t))||U(e,t))}function zi(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:C,inheritAttrs:E}=e,j=pn(e);let R,P;try{if(n.shapeFlag&4){const D=s||i,z=D;R=He(h.call(z,D,f,d,g,p,C)),P=o}else{const D=t;R=He(D.length>1?D(d,{attrs:o,slots:a,emit:l}):D(d,null)),P=t.props?o:Fo(o)}}catch(D){Vt.length=0,kn(D,e,1),R=he(qt)}let G=R;if(P&&E!==!1){const D=Object.keys(P),{shapeFlag:z}=G;D.length&&z&7&&(r&&D.some(fi)&&(P=ko(P,r)),G=Pt(G,P,!1,!0))}return n.dirs&&(G=Pt(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Fi(G,n.transition),R=G,pn(j),R}const Fo=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},ko=(e,t)=>{const n={};for(const i in e)(!fi(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function xo(e,t,n){const{props:i,children:s,component:r}=e,{props:a,children:o,patchFlag:l}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Wi(i,a,h):!!a;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(a[p]!==i[p]&&!Tn(h,p))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Wi(i,a,h):!0:!!a;return!1}function Wi(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Tn(n,r))return!0}return!1}function wo({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Tr=e=>e.__isSuspense;function To(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):Ha(e)}const Se=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Nn=Symbol.for("v-stc"),Vt=[];let Ae=null;function We(e=!1){Vt.push(Ae=e?null:[])}function Po(){Vt.pop(),Ae=Vt[Vt.length-1]||null}let Zt=1;function Ji(e,t=!1){Zt+=e,e<0&&Ae&&t&&(Ae.hasOnce=!0)}function Pr(e){return e.dynamicChildren=Zt>0?Ae||St:null,Po(),Zt>0&&Ae&&Ae.push(e),e}function mt(e,t,n,i,s,r){return Pr(se(e,t,n,i,s,r,!0))}function Dr(e,t,n,i,s){return Pr(he(e,t,n,i,s,!0))}function bn(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const Rr=({key:e})=>e??null,fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||le(e)||K(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function se(e,t=null,n=null,i=0,s=null,r=e===Se?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rr(t),ref:t&&fn(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return o?(wi(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Zt>0&&!a&&Ae&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ae.push(l),l}const he=Do;function Do(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Xa)&&(e=qt),bn(e)){const o=Pt(e,t,!0);return n&&wi(o,n),Zt>0&&!r&&Ae&&(o.shapeFlag&6?Ae[Ae.indexOf(e)]=o:Ae.push(o)),o.patchFlag=-2,o}if(Lo(e)&&(e=e.__vccOpts),t){t=Ro(t);let{class:o,style:l}=t;o&&!ne(o)&&(t.class=pi(o)),X(l)&&(Ei(l)&&!I(l)&&(l=ce({},l)),t.style=mi(l))}const a=ne(e)?1:Tr(e)?128:Ka(e)?64:X(e)?4:K(e)?2:0;return se(e,t,n,i,s,a,r,!0)}function Ro(e){return e?Ei(e)||yr(e)?ce({},e):e:null}function Pt(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=e,h=t?Mo(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Rr(h),ref:t&&t.ref?n&&r?I(r)?r.concat(fn(t)):[r,fn(t)]:fn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Fi(f,l.clone(f)),f}function Dn(e=" ",t=0){return he(Pn,null,e,t)}function He(e){return e==null||typeof e=="boolean"?he(qt):I(e)?he(Se,null,e.slice()):bn(e)?et(e):he(Pn,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function wi(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),wi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!yr(t)?t._ctx=_e:s===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),i&64?(n=16,t=[Dn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mo(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=pi([t.class,i.class]));else if(s==="style")t.style=mi([t.style,i.style]);else if(An(s)){const r=t[s],a=i[s];a&&r!==a&&!(I(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=i[s])}return t}function Oe(e,t,n,i=null){Ke(e,t,7,[n,i])}const jo=mr();let Oo=0;function Go(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||jo,r={uid:Oo++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_r(i,s),emitsOptions:wr(i,s),emit:null,emitted:null,propsDefaults:q,inheritAttrs:i.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=So.bind(null,r),e.ce&&e.ce(r),r}let oe=null,_n,si;{const e=Sn(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};_n=t("__VUE_INSTANCE_SETTERS__",n=>oe=n),si=t("__VUE_SSR_SETTERS__",n=>Qt=n)}const sn=e=>{const t=oe;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},Yi=()=>{oe&&oe.scope.off(),_n(null)};function Mr(e){return e.vnode.shapeFlag&4}let Qt=!1;function Ho(e,t=!1,n=!1){t&&si(t);const{props:i,children:s}=e.vnode,r=Mr(e);co(e,i,r,t),mo(e,s,n);const a=r?Bo(e,t):void 0;return t&&si(!1),a}function Bo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,to);const{setup:i}=n;if(i){rt();const s=e.setupContext=i.length>1?Ko(e):null,r=sn(e),a=nn(i,e,0,[e.props,s]),o=Ts(a);if(at(),r(),(o||e.sp)&&!Lt(e)&&or(e),o){if(a.then(Yi,Yi),t)return a.then(l=>{qi(e,l)}).catch(l=>{kn(l,e,0)});e.asyncDep=a}else qi(e,a)}else jr(e)}function qi(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Xs(t)),jr(e)}function jr(e,t,n){const i=e.type;e.render||(e.render=i.render||Be);{const s=sn(e);rt();try{no(e)}finally{at(),s()}}}const Io={get(e,t){return re(e,"get",""),e[t]}};function Ko(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Io),slots:e.slots,emit:e.emit,expose:t}}function Rn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xs(xa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}})):e.proxy}function No(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Lo(e){return K(e)&&"__vccOpts"in e}const Fe=(e,t)=>Ra(e,t,Qt);function Or(e,t,n){const i=arguments.length;return i===2?X(t)&&!I(t)?bn(t)?he(e,null,[t]):he(e,t):he(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&bn(n)&&(n=[n]),he(e,t,n))}const $o="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ri;const Zi=typeof window<"u"&&window.trustedTypes;if(Zi)try{ri=Zi.createPolicy("vue",{createHTML:e=>e})}catch{}const Gr=ri?e=>ri.createHTML(e):e=>e,Vo="http://www.w3.org/2000/svg",Uo="http://www.w3.org/1998/Math/MathML",Ve=typeof document<"u"?document:null,Qi=Ve&&Ve.createElement("template"),zo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Ve.createElementNS(Vo,e):t==="mathml"?Ve.createElementNS(Uo,e):n?Ve.createElement(e,{is:n}):Ve.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Ve.createTextNode(e),createComment:e=>Ve.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ve.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const a=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qi.innerHTML=Gr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=Qi.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Wo=Symbol("_vtc");function Jo(e,t,n){const i=e[Wo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xi=Symbol("_vod"),Yo=Symbol("_vsh"),qo=Symbol(""),Zo=/(^|;)\s*display\s*:/;function Qo(e,t,n){const i=e.style,s=ne(n);let r=!1;if(n&&!s){if(t)if(ne(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&hn(i,o,"")}else for(const a in t)n[a]==null&&hn(i,a,"");for(const a in n)a==="display"&&(r=!0),hn(i,a,n[a])}else if(s){if(t!==n){const a=i[qo];a&&(n+=";"+a),i.cssText=n,r=Zo.test(n)}}else t&&e.removeAttribute("style");Xi in e&&(e[Xi]=r?i.display:"",e[Yo]&&(i.display="none"))}const es=/\s*!important$/;function hn(e,t,n){if(I(n))n.forEach(i=>hn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Xo(e,t);es.test(n)?e.setProperty(gt(i),n.replace(es,""),"important"):e[i]=n}}const ts=["Webkit","Moz","ms"],Ln={};function Xo(e,t){const n=Ln[t];if(n)return n;let i=Ce(t);if(i!=="filter"&&i in e)return Ln[t]=i;i=Cn(i);for(let s=0;s<ts.length;s++){const r=ts[s]+i;if(r in e)return Ln[t]=r}return t}const ns="http://www.w3.org/1999/xlink";function is(e,t,n,i,s,r=aa(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ns,t.slice(6,t.length)):e.setAttributeNS(ns,t,n):n==null||r&&!Ms(n)?e.removeAttribute(t):e.setAttribute(t,r?"":st(n)?String(n):n)}function ss(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Gr(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ms(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Et(e,t,n,i){e.addEventListener(t,n,i)}function el(e,t,n,i){e.removeEventListener(t,n,i)}const rs=Symbol("_vei");function tl(e,t,n,i,s=null){const r=e[rs]||(e[rs]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=nl(t);if(i){const h=r[t]=rl(i,s);Et(e,o,h,l)}else a&&(el(e,o,a,l),r[t]=void 0)}}const as=/(?:Once|Passive|Capture)$/;function nl(e){let t;if(as.test(e)){t={};let i;for(;i=e.match(as);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let $n=0;const il=Promise.resolve(),sl=()=>$n||(il.then(()=>$n=0),$n=Date.now());function rl(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ke(al(i,n.value),t,5,[i])};return n.value=e,n.attached=sl(),n}function al(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ol=(e,t,n,i,s,r)=>{const a=s==="svg";t==="class"?Jo(e,i,a):t==="style"?Qo(e,n,i):An(t)?fi(t)||tl(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ll(e,t,i,a))?(ss(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&is(e,t,i,a,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ne(i))?ss(e,Ce(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),is(e,t,i,a))};function ll(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&os(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return os(t)&&ne(n)?!1:t in e}const ls=e=>{const t=e.props["onUpdate:modelValue"]||!1;return I(t)?n=>cn(t,n):t};function cl(e){e.target.composing=!0}function cs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Vn=Symbol("_assign"),ul={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[Vn]=ls(s);const r=i||s.props&&s.props.type==="number";Et(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),r&&(o=Jn(o)),e[Vn](o)}),n&&Et(e,"change",()=>{e.value=e.value.trim()}),t||(Et(e,"compositionstart",cl),Et(e,"compositionend",cs),Et(e,"change",cs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},a){if(e[Vn]=ls(a),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?Jn(e.value):e.value,l=t??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===l)||(e.value=l))}},fl=ce({patchProp:ol},zo);let us;function hl(){return us||(us=go(fl))}const dl=(...e)=>{const t=hl().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=pl(i);if(!s)return;const r=t._component;!K(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,ml(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function ml(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pl(e){return ne(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ct=typeof document<"u";function Hr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function gl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Hr(e.default)}const $=Object.assign;function Un(e,t){const n={};for(const i in t){const s=t[i];n[i]=xe(s)?s.map(e):e(s)}return n}const Ut=()=>{},xe=Array.isArray,Br=/#/g,yl=/&/g,bl=/\//g,_l=/=/g,Al=/\?/g,Ir=/\+/g,vl=/%5B/g,El=/%5D/g,Kr=/%5E/g,Cl=/%60/g,Nr=/%7B/g,Sl=/%7C/g,Lr=/%7D/g,Fl=/%20/g;function Ti(e){return encodeURI(""+e).replace(Sl,"|").replace(vl,"[").replace(El,"]")}function kl(e){return Ti(e).replace(Nr,"{").replace(Lr,"}").replace(Kr,"^")}function ai(e){return Ti(e).replace(Ir,"%2B").replace(Fl,"+").replace(Br,"%23").replace(yl,"%26").replace(Cl,"`").replace(Nr,"{").replace(Lr,"}").replace(Kr,"^")}function xl(e){return ai(e).replace(_l,"%3D")}function wl(e){return Ti(e).replace(Br,"%23").replace(Al,"%3F")}function Tl(e){return e==null?"":wl(e).replace(bl,"%2F")}function Xt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pl=/\/$/,Dl=e=>e.replace(Pl,"");function zn(e,t,n="/"){let i,s={},r="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,o>-1?o:t.length),s=e(r)),o>-1&&(i=i||t.slice(0,o),a=t.slice(o,t.length)),i=Ol(i??t,n),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:Xt(a)}}function Rl(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function fs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ml(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Dt(t.matched[i],n.matched[s])&&$r(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $r(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jl(e[n],t[n]))return!1;return!0}function jl(e,t){return xe(e)?hs(e,t):xe(t)?hs(t,e):e===t}function hs(e,t){return xe(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Ol(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var en;(function(e){e.pop="pop",e.push="push"})(en||(en={}));var zt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zt||(zt={}));function Gl(e){if(!e)if(Ct){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Dl(e)}const Hl=/^[^#]+#/;function Bl(e,t){return e.replace(Hl,"#")+t}function Il(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Mn=()=>({left:window.scrollX,top:window.scrollY});function Kl(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Il(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ds(e,t){return(history.state?history.state.position-t:-1)+e}const oi=new Map;function Nl(e,t){oi.set(e,t)}function Ll(e){const t=oi.get(e);return oi.delete(e),t}let $l=()=>location.protocol+"//"+location.host;function Vr(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let o=s.includes(e.slice(r))?e.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),fs(l,"")}return fs(n,e)+i+s}function Vl(e,t,n,i){let s=[],r=[],a=null;const o=({state:p})=>{const g=Vr(e,location),C=n.value,E=t.value;let j=0;if(p){if(n.value=g,t.value=p,a&&a===C){a=null;return}j=E?p.position-E.position:0}else i(g);s.forEach(R=>{R(n.value,C,{delta:j,type:en.pop,direction:j?j>0?zt.forward:zt.back:zt.unknown})})};function l(){a=n.value}function h(p){s.push(p);const g=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return r.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState($({},p.state,{scroll:Mn()}),"")}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:d}}function ms(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?Mn():null}}function Ul(e){const{history:t,location:n}=window,i={value:Vr(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,h,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:$l()+e+l;try{t[f?"replaceState":"pushState"](h,"",p),s.value=h}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function a(l,h){const f=$({},t.state,ms(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});r(l,f,!0),i.value=l}function o(l,h){const f=$({},s.value,t.state,{forward:l,scroll:Mn()});r(f.current,f,!0);const d=$({},ms(i.value,l,null),{position:f.position+1},h);r(l,d,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function zl(e){e=Gl(e);const t=Ul(e),n=Vl(e,t.state,t.location,t.replace);function i(r,a=!0){a||n.pauseListeners(),history.go(r)}const s=$({location:"",base:e,go:i,createHref:Bl.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Wl(e){return typeof e=="string"||e&&typeof e=="object"}function Ur(e){return typeof e=="string"||typeof e=="symbol"}const zr=Symbol("");var ps;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ps||(ps={}));function Rt(e,t){return $(new Error,{type:e,[zr]:!0},t)}function $e(e,t){return e instanceof Error&&zr in e&&(t==null||!!(e.type&t))}const gs="[^/]+?",Jl={sensitive:!1,strict:!1,start:!0,end:!0},Yl=/[.+*?^${}()[\]/\\]/g;function ql(e,t){const n=$({},Jl,t),i=[];let s=n.start?"^":"";const r=[];for(const h of e){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let d=0;d<h.length;d++){const p=h[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Yl,"\\$&"),g+=40;else if(p.type===1){const{value:C,repeatable:E,optional:j,regexp:R}=p;r.push({name:C,repeatable:E,optional:j});const P=R||gs;if(P!==gs){g+=10;try{new RegExp(`(${P})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${C}" (${P}): `+D.message)}}let G=E?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(G=j&&h.length<2?`(?:/${G})`:"/"+G),j&&(G+="?"),s+=G,g+=20,j&&(g+=-8),E&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}i.push(f)}if(n.strict&&n.end){const h=i.length-1;i[h][i[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function o(h){const f=h.match(a),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",C=r[p-1];d[C.name]=g&&C.repeatable?g.split("/"):g}return d}function l(h){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:C,repeatable:E,optional:j}=g,R=C in h?h[C]:"";if(xe(R)&&!E)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const P=xe(R)?R.join("/"):R;if(!P)if(j)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=P}}return f||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function Zl(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Wr(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=Zl(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(ys(i))return 1;if(ys(s))return-1}return s.length-i.length}function ys(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ql={type:0,value:""},Xl=/[a-zA-Z0-9_]/;function ec(e){if(!e)return[[]];if(e==="/")return[[Ql]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${h}": ${g}`)}let n=0,i=n;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,h="",f="";function d(){h&&(n===0?r.push({type:0,value:h}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),h="")}function p(){h+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(h&&d(),a()):l===":"?(d(),n=1):p();break;case 4:p(),n=i;break;case 1:l==="("?n=2:Xl.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),d(),a(),s}function tc(e,t,n){const i=ql(ec(e.path),n),s=$(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function nc(e,t){const n=[],i=new Map;t=vs({strict:!1,end:!0,sensitive:!1},t);function s(d){return i.get(d)}function r(d,p,g){const C=!g,E=_s(d);E.aliasOf=g&&g.record;const j=vs(t,d),R=[E];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of D)R.push(_s($({},E,{components:g?g.record.components:E.components,path:z,aliasOf:g?g.record:E})))}let P,G;for(const D of R){const{path:z}=D;if(p&&z[0]!=="/"){const te=p.record.path,ee=te[te.length-1]==="/"?"":"/";D.path=p.record.path+(z&&ee+z)}if(P=tc(D,p,j),g?g.alias.push(P):(G=G||P,G!==P&&G.alias.push(P),C&&d.name&&!As(P)&&a(d.name)),Jr(P)&&l(P),E.children){const te=E.children;for(let ee=0;ee<te.length;ee++)r(te[ee],P,g&&g.children[ee])}g=g||P}return G?()=>{a(G)}:Ut}function a(d){if(Ur(d)){const p=i.get(d);p&&(i.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return n}function l(d){const p=rc(d,n);n.splice(p,0,d),d.record.name&&!As(d)&&i.set(d.record.name,d)}function h(d,p){let g,C={},E,j;if("name"in d&&d.name){if(g=i.get(d.name),!g)throw Rt(1,{location:d});j=g.record.name,C=$(bs(p.params,g.keys.filter(G=>!G.optional).concat(g.parent?g.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),d.params&&bs(d.params,g.keys.map(G=>G.name))),E=g.stringify(C)}else if(d.path!=null)E=d.path,g=n.find(G=>G.re.test(E)),g&&(C=g.parse(E),j=g.record.name);else{if(g=p.name?i.get(p.name):n.find(G=>G.re.test(p.path)),!g)throw Rt(1,{location:d,currentLocation:p});j=g.record.name,C=$({},p.params,d.params),E=g.stringify(C)}const R=[];let P=g;for(;P;)R.unshift(P.record),P=P.parent;return{name:j,path:E,params:C,matched:R,meta:sc(R)}}e.forEach(d=>r(d));function f(){n.length=0,i.clear()}return{addRoute:r,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:o,getRecordMatcher:s}}function bs(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function _s(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ic(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ic(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function As(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sc(e){return e.reduce((t,n)=>$(t,n.meta),{})}function vs(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function rc(e,t){let n=0,i=t.length;for(;n!==i;){const r=n+i>>1;Wr(e,t[r])<0?i=r:n=r+1}const s=ac(e);return s&&(i=t.lastIndexOf(s,i-1)),i}function ac(e){let t=e;for(;t=t.parent;)if(Jr(t)&&Wr(e,t)===0)return t}function Jr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function oc(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Ir," "),a=r.indexOf("="),o=Xt(a<0?r:r.slice(0,a)),l=a<0?null:Xt(r.slice(a+1));if(o in t){let h=t[o];xe(h)||(h=t[o]=[h]),h.push(l)}else t[o]=l}return t}function Es(e){let t="";for(let n in e){const i=e[n];if(n=xl(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(xe(i)?i.map(r=>r&&ai(r)):[i&&ai(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function lc(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=xe(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const cc=Symbol(""),Cs=Symbol(""),Pi=Symbol(""),Di=Symbol(""),li=Symbol("");function Ht(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tt(e,t,n,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const h=p=>{p===!1?l(Rt(4,{from:n,to:t})):p instanceof Error?l(p):Wl(p)?l(Rt(2,{from:t,to:p})):(a&&i.enterCallbacks[s]===a&&typeof p=="function"&&a.push(p),o())},f=r(()=>e.call(i&&i.instances[s],t,n,h));let d=Promise.resolve(f);e.length<3&&(d=d.then(h)),d.catch(p=>l(p))})}function Wn(e,t,n,i,s=r=>r()){const r=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(Hr(l)){const f=(l.__vccOpts||l)[t];f&&r.push(tt(f,n,i,a,o,s))}else{let h=l();r.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=gl(f)?f.default:f;a.mods[o]=f,a.components[o]=d;const g=(d.__vccOpts||d)[t];return g&&tt(g,n,i,a,o,s)()}))}}return r}function Ss(e){const t=Ie(Pi),n=Ie(Di),i=Fe(()=>{const l=dt(e.to);return t.resolve(l)}),s=Fe(()=>{const{matched:l}=i.value,{length:h}=l,f=l[h-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Dt.bind(null,f));if(p>-1)return p;const g=Fs(l[h-2]);return h>1&&Fs(f)===g&&d[d.length-1].path!==g?d.findIndex(Dt.bind(null,l[h-2])):p}),r=Fe(()=>s.value>-1&&mc(n.params,i.value.params)),a=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&$r(n.params,i.value.params));function o(l={}){if(dc(l)){const h=t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(Ut);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:i,href:Fe(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function uc(e){return e.length===1?e[0]:e}const fc=ar({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ss,setup(e,{slots:t}){const n=tn(Ss(e)),{options:i}=Ie(Pi),s=Fe(()=>({[ks(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ks(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&uc(t.default(n));return e.custom?r:Or("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),hc=fc;function dc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mc(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!xe(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function Fs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ks=(e,t,n)=>e??t??n,pc=ar({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Ie(li),s=Fe(()=>e.route||i.value),r=Ie(Cs,0),a=Fe(()=>{let h=dt(r);const{matched:f}=s.value;let d;for(;(d=f[h])&&!d.components;)h++;return h}),o=Fe(()=>s.value.matched[a.value]);un(Cs,Fe(()=>a.value+1)),un(cc,o),un(li,s);const l=nt();return Tt(()=>[l.value,o.value,e.name],([h,f,d],[p,g,C])=>{f&&(f.instances[d]=h,g&&g!==f&&h&&h===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),h&&f&&(!g||!Dt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(E=>E(h))},{flush:"post"}),()=>{const h=s.value,f=e.name,d=o.value,p=d&&d.components[f];if(!p)return xs(n.default,{Component:p,route:h});const g=d.props[f],C=g?g===!0?h.params:typeof g=="function"?g(h):g:null,j=Or(p,$({},C,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return xs(n.default,{Component:j,route:h})||j}}});function xs(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gc=pc;function yc(e){const t=nc(e.routes,e),n=e.parseQuery||oc,i=e.stringifyQuery||Es,s=e.history,r=Ht(),a=Ht(),o=Ht(),l=wa(Qe);let h=Qe;Ct&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Un.bind(null,b=>""+b),d=Un.bind(null,Tl),p=Un.bind(null,Xt);function g(b,T){let x,M;return Ur(b)?(x=t.getRecordMatcher(b),M=T):M=b,t.addRoute(M,x)}function C(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function E(){return t.getRoutes().map(b=>b.record)}function j(b){return!!t.getRecordMatcher(b)}function R(b,T){if(T=$({},T||l.value),typeof b=="string"){const m=zn(n,b,T.path),y=t.resolve({path:m.path},T),A=s.createHref(m.fullPath);return $(m,y,{params:p(y.params),hash:Xt(m.hash),redirectedFrom:void 0,href:A})}let x;if(b.path!=null)x=$({},b,{path:zn(n,b.path,T.path).path});else{const m=$({},b.params);for(const y in m)m[y]==null&&delete m[y];x=$({},b,{params:d(m)}),T.params=d(T.params)}const M=t.resolve(x,T),Y=b.hash||"";M.params=f(p(M.params));const c=Rl(i,$({},b,{hash:kl(Y),path:M.path})),u=s.createHref(c);return $({fullPath:c,hash:Y,query:i===Es?lc(b.query):b.query||{}},M,{redirectedFrom:void 0,href:u})}function P(b){return typeof b=="string"?zn(n,b,l.value.path):$({},b)}function G(b,T){if(h!==b)return Rt(8,{from:T,to:b})}function D(b){return ee(b)}function z(b){return D($(P(b),{replace:!0}))}function te(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:x}=T;let M=typeof x=="function"?x(b):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),$({query:b.query,hash:b.hash,params:M.path!=null?{}:b.params},M)}}function ee(b,T){const x=h=R(b),M=l.value,Y=b.state,c=b.force,u=b.replace===!0,m=te(x);if(m)return ee($(P(m),{state:typeof m=="object"?$({},Y,m.state):Y,force:c,replace:u}),T||x);const y=x;y.redirectedFrom=T;let A;return!c&&Ml(i,M,x)&&(A=Rt(16,{to:y,from:M}),De(M,M,!0,!1)),(A?Promise.resolve(A):Te(y,M)).catch(_=>$e(_)?$e(_,2)?_:Ze(_):L(_,y,M)).then(_=>{if(_){if($e(_,2))return ee($({replace:u},P(_.to),{state:typeof _.to=="object"?$({},Y,_.to.state):Y,force:c}),T||y)}else _=ot(y,M,!0,u,Y);return qe(y,M,_),_})}function we(b,T){const x=G(b,T);return x?Promise.reject(x):Promise.resolve()}function Ye(b){const T=_t.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Te(b,T){let x;const[M,Y,c]=bc(b,T);x=Wn(M.reverse(),"beforeRouteLeave",b,T);for(const m of M)m.leaveGuards.forEach(y=>{x.push(tt(y,b,T))});const u=we.bind(null,b,T);return x.push(u),ve(x).then(()=>{x=[];for(const m of r.list())x.push(tt(m,b,T));return x.push(u),ve(x)}).then(()=>{x=Wn(Y,"beforeRouteUpdate",b,T);for(const m of Y)m.updateGuards.forEach(y=>{x.push(tt(y,b,T))});return x.push(u),ve(x)}).then(()=>{x=[];for(const m of c)if(m.beforeEnter)if(xe(m.beforeEnter))for(const y of m.beforeEnter)x.push(tt(y,b,T));else x.push(tt(m.beforeEnter,b,T));return x.push(u),ve(x)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),x=Wn(c,"beforeRouteEnter",b,T,Ye),x.push(u),ve(x))).then(()=>{x=[];for(const m of a.list())x.push(tt(m,b,T));return x.push(u),ve(x)}).catch(m=>$e(m,8)?m:Promise.reject(m))}function qe(b,T,x){o.list().forEach(M=>Ye(()=>M(b,T,x)))}function ot(b,T,x,M,Y){const c=G(b,T);if(c)return c;const u=T===Qe,m=Ct?history.state:{};x&&(M||u?s.replace(b.fullPath,$({scroll:u&&m&&m.scroll},Y)):s.push(b.fullPath,Y)),l.value=b,De(b,T,x,u),Ze()}let Pe;function Mt(){Pe||(Pe=s.listen((b,T,x)=>{if(!rn.listening)return;const M=R(b),Y=te(M);if(Y){ee($(Y,{replace:!0,force:!0}),M).catch(Ut);return}h=M;const c=l.value;Ct&&Nl(ds(c.fullPath,x.delta),Mn()),Te(M,c).catch(u=>$e(u,12)?u:$e(u,2)?(ee($(P(u.to),{force:!0}),M).then(m=>{$e(m,20)&&!x.delta&&x.type===en.pop&&s.go(-1,!1)}).catch(Ut),Promise.reject()):(x.delta&&s.go(-x.delta,!1),L(u,M,c))).then(u=>{u=u||ot(M,c,!1),u&&(x.delta&&!$e(u,8)?s.go(-x.delta,!1):x.type===en.pop&&$e(u,20)&&s.go(-1,!1)),qe(M,c,u)}).catch(Ut)}))}let yt=Ht(),ie=Ht(),J;function L(b,T,x){Ze(b);const M=ie.list();return M.length?M.forEach(Y=>Y(b,T,x)):console.error(b),Promise.reject(b)}function Ne(){return J&&l.value!==Qe?Promise.resolve():new Promise((b,T)=>{yt.add([b,T])})}function Ze(b){return J||(J=!b,Mt(),yt.list().forEach(([T,x])=>b?x(b):T()),yt.reset()),b}function De(b,T,x,M){const{scrollBehavior:Y}=e;if(!Ct||!Y)return Promise.resolve();const c=!x&&Ll(ds(b.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return tr().then(()=>Y(b,T,c)).then(u=>u&&Kl(u)).catch(u=>L(u,b,T))}const de=b=>s.go(b);let bt;const _t=new Set,rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:C,clearRoutes:t.clearRoutes,hasRoute:j,getRoutes:E,resolve:R,options:e,push:D,replace:z,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:ie.add,isReady:Ne,install(b){const T=this;b.component("RouterLink",hc),b.component("RouterView",gc),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),Ct&&!bt&&l.value===Qe&&(bt=!0,D(s.location).catch(Y=>{}));const x={};for(const Y in Qe)Object.defineProperty(x,Y,{get:()=>l.value[Y],enumerable:!0});b.provide(Pi,T),b.provide(Di,qs(x)),b.provide(li,l);const M=b.unmount;_t.add(b),b.unmount=function(){_t.delete(b),_t.size<1&&(h=Qe,Pe&&Pe(),Pe=null,l.value=Qe,bt=!1,J=!1),M()}}};function ve(b){return b.reduce((T,x)=>T.then(()=>Ye(x)),Promise.resolve())}return rn}function bc(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const o=t.matched[a];o&&(e.matched.find(h=>Dt(h,o))?i.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(h=>Dt(h,l))||s.push(l))}return[n,i,s]}function Yr(e){return Ie(Di)}const _c={__name:"App",setup(e){const t=Yr();return Tt(()=>t.fullPath,n=>{console.log("Route changed to:",n)}),(n,i)=>{const s=ki("router-view");return We(),Dr(s,{key:n.$route.fullPath})}}},Ac={id:"90s-mashup",title:"90s Mashup",bpm:88,chords:["Am","G","Em","C","F"],songs:[{title:"Woh Pehli Baar",lyrics:`
  [Am]                  [G]
  Woh pehli baar jab hum mile
              [Em]          [Am]
  Haathon mein haath jab hum chale
  [Am]             [G]
  Ho gaya ye dil deewana
  [G]          [Em]     [Am]
  Hota hai pyaar kya isne jaana
  
  [C]                     [G]
  Teri aankhon mein jannat basake chala
  [G]                       [Em] 
  Teri zulfon ki chhaaon mein chalta chala
  [Am]                      [G]
  Tere neinon mein chein tere labh pe khushi
  [G]                   [Em]    [Am]
  Tujhko hi main mohabbat bana ke chala
        `},{title:"Bheegi Bheegi Raaton Mein",lyrics:`
  [Am]                                [G]
Bheegi bheegi raaton mein phir tum aao na
  [Am]                                [G]
Bheegi bheegi raaton mein phir tum aao na
[F]              [G]    [Am]
Aisi barsaaton mein aao na
[F]              [G]     [Am]
Aisi barsaaton mein aao na…
        `},{title:"Chaand Chhupa Baadal Mein",lyrics:`
[Am] [Dm]
Chand chupa badal mein
[G] [C]
Sharma ke meri jaana
[Am] [Dm]
Seene se lag ja tu
[G] [Am]
Balkha ke meri jaana


[E]
Gumsum sa hai, gupchup sa hai
[C]
Madhosh hai, khamosh hai
[G] [E]
Ye samaa haan ye sama kuch aur hai
[Am] [Dm]
Ho ho ho chand chupa baadal mein
[G] [C]
Sharma ke meri jaana
[Am] [Dm]
Seene se lag ja tu
[G] [Am] [Dm]
Balkha ke meri jaana`},{title:"Pehla Pehla Pyaar Hai",lyrics:`
[Am]            [G]
Pehla Phela Pyaar Hai
[G]             [Am]
Pehli pehli bar hai
[A]         [Dm]
Jaan Ke Bhi Anjaana
[C]        [G]    [Am]
Kaisa Mera Yaar Hai

[Am]            [G]
Pehla Phela Pyaar Hai
[G]             [Am]
Pehli pehli bar hai
`},{title:"Agar Tum Mil Jaao",lyrics:`
[G]
Agar Tum Mil Jao
[Em] [Am]
Zamana Chhod Denge Hum
[C]                 [Em]
Tumhe Paakar Zamane Bhar Se
       [G]
Rishta Tod Denge Hum

[G]
Agar Tum Mil Jao
[Em] [Am]
Zamana Chhod Denge Hum
`},{title:"Pyaar Kiya To Nibhaana",lyrics:`
[Am]
Kehta Hai Pal Pal Tumse
[G]
Ho Ke Dil Ye Deewana
[Em]
Ek Pal Bhi Jaane Jaana
[Am]
Mujhse Door Nahin Jana
[G]
Pyaar Kiya To Nibhana
[Am]
Pyaar Kiya To Nibhana`},{title:"Tere Dar Par Sanam",lyrics:`
[G]
Tere Dar Par
[Am]
Sanam Chale Aaye
[G]
Tu Na Aaya To
[Am]
Hum Chale Aaye`},{title:"Tujhe Dekha Toh Ye Jaana Sanam",lyrics:`
[Am]
Aankhen meri, sapne tere.
[F] [Am]
Dil mera, yaadein teri.
[Am]
Oh, mera hai kya? La la la...
[Am]
Sab kuch tera. La la la...
[F] [Am]
Jaan teri; saansein teri
[Am] [G]
Meri aankhon mein aansu, tere, agaaye.
[F] [Am]
Muskuraane lage saare gham...


[Am] [C] [Am]
Tujhe dekha to yeh jaana sanam -
[C] [G]
Pyaar hota hai deewana sanam.
[Em]
Ab yahaan se kahaan jaaye hum?
[G] [Am]
Teri baahoon mein mar jaaye hum.
[Am] [C] [Am]
Tujhe dekha to yeh jaana sanam...`},{title:"Tanha Tanha Yaha Pe Jeena",lyrics:`
[Am]        [G]            [F]
Tanha tanha yaha pe jeena, ye koi baat hai
[Am]        [G]            [F]
Koi saath nahi tera yaha to, ye koi baat hai
 
[Am]          [G]    [Am]           [G]
Kisi ko pyaar de de, kisi ka pyaar lele
[Am]             [G]     [F]         [Am]
Is saare zamaane me yahi pyaari baat hai
`},{title:"Dil De Diya Hai",lyrics:`
[Am]             [G]
Dil De Diya Hai, Jaan Tumhe Denge
[F]               [Am]
Daga Nahi Karenge Sanam...

[Am]             [G]
Dil De Diya Hai, Jaan Tumhe Denge
[F]               [Am]
Daga Nahi Karenge Sanam
     
[C]           [G]          [F]
Hooo… Rab Dee Kasam Yaara, Rab Dee Kasam...

[Am]             [G]
Dil De Diya Hai, Jaan Tumhe Denge
[F]               [Am]
Daga Nahi Karenge Sanam...`},{title:"Hum Ko Humi Se Chura Lo",lyrics:`
[Am] [G]
Humko humise chura lo,
[G] [Am]
Dil mein kahin tum chupa lo.
[Am] [G]
Humko humise chura lo,
[G] [Am]
Dil mein kahin tum chupa lo.
[Am] [G]
Hum akele, kho na jaayen,
[G] [A] [G]
Door tumse, ho na jaayen,
[C] [A]
..Paas aao gale se laga lo`},{title:"Dil Ko Tumse Pyaar Hua",lyrics:`
[Am]
Kho gaya main khyalon main,
[Am]
Ab neend bhi nahi aankhon main.
[Am]
Karwate was badalta hoon,
[Am]
Ab jaagta hoon main raaton main.
[Am] [G] [F] [C] [E]
ab doori na sahni har lamha kehta hai
[Am] [G] [F] [C] [E]
na jaane haal mera aisa kyun rehta hai

[Am]
Main deewana tera ban gaya jaane jaana
[Am]
Main fasaana tera ban gaya jaane jaana

       [Am]              [C]         
hasina gori gori churaye chori chori 
        [E]
churaye dil chori chori chori chori

     
[Am] [Dm] [G]
Dil ko tumse pyaar hua
[C] [F] [G] [C] [E]
pehli baar hua tumse pyaar hua
[Am] [Dm] [G]
main bhi aashiq yaar hua
[C] [F] [G] [C] [E]
pehli baar hua tumse pyaar hua
[Dm] [Am]
chayi hai.....
[Dm] [Am]
beataabi......
[Bb] [F] [E]
meri jaan kaho main kya karoon`},{title:"Dheere Dheere Se",lyrics:`
[Am]             [G] 
Har pal meriyaan yadaan
[G]           [Am]
Yadaan vich ae tu
[Am]              [G]
Dil di gal main dassa
[G]          [Am]
Te dassa fir kinnu
     
[Am]                 [G]
Teri meri, meri teri ik jind'di
[G]             [Am]
Ik jind'di what to do
[Am]                   [G]
Jhoomu main naachu main gaaun ke likhun
[Gm]               [Am]
Tere liye main kya karun
     
       [Am]                        [G]     
Dheere dheere se meri zindagi mein aana
       [Am]
Dheere dheere se dil ko churana
      [Am]                 [G]
Tumse pyaar hume hai kitna jaane
      [G]                 [Am]    
Tumse mil kar tumko hai batana`},{title:"Tere Bin",lyrics:`
[Am]         [Em]      [F]  
Tere Bin mai yun Kaise jiya 
[Em]            [Am]
Kaise jiya tere bin

[Am]         [Em]      [F]  
Tere Bin mai yun Kaise jiya 
[Em]            [Am]
Kaise jiya tere bin


[Am]          [G]  [F]          [Am]
Lekar yaadein teri raatein meri katien
[Am]          [G]  [F]          [Am]
Lekar yaadein teri raatein meri katien

[Am]          [G]  [F]          [Am]
Mujhse baatein teri karti hai chandani

[Am]           [Dm]     [G]
Tanha haiiiiii tujh bin raatein meri
[Am]           [Dm]     [G]
Din mereeee din ke jaise nahin

[Am]         [F]      
Tanha badan tanha hai man 
[G]
nam meri aankhien rahen
[Am]         [F]                 
Aaja mere ab roobaro 
[G]
jeena nahin bin tere

[Am]         [Em]      [F]  
Tere Bin mai yun Kaise jiya 
[Em]            [Am]
Kaise jiya tere bin

[Am]         [Em]      [F]  
Tere Bin mai yun Kaise jiya 
[Em]            [Am]
Kaise jiya tere bin`},{title:"O O Jaane Jaana",lyrics:`
[Am]       [G]   [Em]      [Am]
Mere khaab mere khayaloon ki rani
[F]      [G]    [Em]   [Am]
Kisi din banegi humari kahani
 
[Am]       [G]   [Em]      [Am]
Mere khaab mere khayaloon ki rani
[F]      [G]    [Em]   [Am]
Kisi din banegi humari kahani
 
     [D]
Aye meri bekhudi
     [C]
Ye kasam maine li
     [G]
Pyar mein ek din
     [E]
Meri jaan tujhe hai paana
 
 
[Am]
O o jaane jaana
[G]
Dhoondhe tujhe deewana
[Em]
Sapnon mein roz aaye
[F]             [G]
Aa zindagi mein aa na

[Am]
O o jaane jaana
[G]
Dhoondhe tujhe deewana
[Em]
Sapnon mein roz aaye
[F]             [G]
Aa zindagi mein aa na

[Am]
Sanam`}]},vc={id:"retro-mashup",title:"Retro Mashup",bpm:88,chords:["F#","B","C#","D#m","G#","G#m","A#m","E","D"],songs:[{title:"Ek Ajnabee Haseena Se",lyrics:`
   [F#]          [B]        [C#]    [F#]
Ek Ajnabi Hasina Se Yun Mulaaqat Ho Gayi
   [F#]          [B]        [C#]    [F#]
Phir Kya Hua Yeh Na Poochho Kuch Aisi Baat Ho Gayi
[D#m]
Wo Achanak Aa Gayi
[C#]
Yun Nazar Ke Saamne
[G#]               [F#]
Jaise Nikal Aaya Ghata Se Chaand
[B]
Chehre Pe Zulfen
[F#]
Bikhri Hui Thi
[C#]             [F#]
Din Mein Raat Ho Gayi`},{title:"Chaudhavin Ka Chaand",lyrics:`
 [F#]                  [B]       [F#]
Chaudhvin ka chand ho, ya afatab ho
[C#]           [G#m]           [B]     [F#]
Jo bhi ho tum, khuda ki qasam, lajavab ho
 [F#]                  [B]       [F#]
Chaudhvin ka chand ho, ya afatab ho
[C#]           [G#m]           [B]     [F#]
Jo bhi ho tum, khuda ki qasam, lajavab ho
`},{title:"Kabhi Kabhi Mere Dil Mein",lyrics:`
[F#]                 [D#m]        [C#] [F#]
Kabhi kabhi mere dil mein khayaal aata hai
[F#]                 [D#m]        [C#] [F#]
Kabhi kabhi mere dil mein khayaal aata hai
         [F#]       [D#m]       [C#]  [B]
Ki jaise tujhko banaya gaya hai mere liye
        [F#]       [A#m]         [C#]     [F#]
Tu abse pehle sitaaron mein bas rahi thi kahin
        [F#]       [D#m]        [C#]  [B]
Tujhe zameen pe bulaya gaya hai mere liye
        [F#]       [D#m]        [C#]  [B]
Tujhe zameen pe bulaya gaya hai mere liye`},{title:"Pyaar Deewanaa Hota Hai",lyrics:`
[F#]        [Eadd9]            [B]
Shamma Kahe Par Wanay Say, Pare Chala Ja
[C#m]             [E]                   [F#]
Meree Tarhaan Jal Jaye Ga, Yahan Nahein Aaa
[F#]       [E]        [Eadd9]       [F#]
Woh Nahein Sunta usko, Jal Jana Hota Hai
[F#]       [E]        [Eadd9]       [F#]
Har Khushi Say Har Gham Say, Begana Hota Hai
[F#]         [E]       [E]          [F#]
Pyar Deewana Hota Hai, Mastana Hota Hai
[F#]         [E]       [E]          [F#]
Har Khushi Say Har Gham Say, [B] aigana Hota Hai`},{title:"Tujhse Naraz Nahi Zindagi",lyrics:`
[F#]          [A#m]
Jeene Ke Liye Sochaa Hi Nahi
[G#m]              [F#]
Dard Sambhaalane Honge
[F#]           [A#m]
Muskuraaye To, Muskuraane Ke
[G#m]        [F#]
Karz Utarne Honge
[G#m]
Muskuraauun Kabhii To Lagataa Hai
[C#]             [F#]
Jaise Honthon Pe Karz Rakhaa Hai
[F#]              [G#m]          [B] 
Ho Tujhse Naaraaz Nahiin Zindagi Hairaan Hoon Main
[F#]
O... Hairaan Huun Main
[F#]              [G#m]          [B] 
Tere Masum Sawaalon Se Pareshaan Hoon Main
[F#]
O... Pareshaan Hoon Main`},{title:"Kya Hua Tera Waada",lyrics:`
[F#]
Yaad hai mujhko toone kaha tha
      [G#]            [C#]
Tumse nahin roothenge kabhi
[F#]
Dil ki tarah se aaj mile hain
      [G#]            [C#]
Kaise bhala chhootenge kabhi
[C#]                      [G#]
Teri baahon mein beeti har shaam
[F#]   [C#]        [G#]  [C#]
Bewafa yeh bhi kya yaad nahin
[C#]         [F#]  
Kya hua tera vaada
[C#]         [F#]
woh kasam woh irada
[G#]            [C#]
[B] hoolega dil jis din tumhein
         [G#]                 [C#]
Woh din zindagi ka aakhiri din hoga
`},{title:"Ek Pyaar Ka Nagma Hai",lyrics:`
[F#]  [D#m]  [F#]  [F#]  [D#m]  [F#]
Ek pyar ka nagma hain, maujo ki ravani hain xB
[C#]  [B]
Zindagi aur kuch bhi nahin,
[C#]  [B]  [F#]
Teri meri kahani hain`},{title:"Raat Kali Ek Khwaab Me Aayi",lyrics:`
[F#]  [B]  [F#]  [E]
Raat kali ek khwaab mein ayeee
[F#]
aur gale kaa haar hui
[C#m]
subaho ko jaab hum neend se jaage
[F#]
aankh tumhi se chaar huii`},{title:"Khwab Ho Tum Ya Koi Haqeeqat",lyrics:`
[F#]               [B]           [C#]
Khwaab ho tum ya koi hakikat kaun ho tum batalaao
[F#]            [B]             [C#]
Der se kitani dur khadi ho, aur karib a jaao`},{title:"Samne Yeh Kaun Aaya",lyrics:`
[F#]  [B]  [F#]  [F#]
Samne yeh kaun aaya, dil mein hui hulchul?
[F#]  [B]  [F#]  [C#]  [F#]
Dekh ke bas ek hi jhalak, ho gaye hum paagal!
[F#]  [B]  [F#]  [F#]
Samne yeh kaun aaya, dil mein hui hulchul?
[F#]  [B]  [F#]  [C#]  [F#]
Dekh ke bas ek hi jhalak, ho gaye hum paagal!
[C#]  [C#]  [B]  [B]
Aray, baatein, mulakaatein, hum se bhi to hongi;
[C#]  [B]  [F#]  [F#]
Aray, hum se, ghulenge, woh aaj nahin to kal!
[F#]  [B]  [F#]  [F#]
Samne yeh kaun aaya, dil mein hui hulchul?
[F#]  [B]  [F#]  [C#]  [F#]
Dekh ke bas ek hi jhalak, ho gaye hum paagal!`},{title:"Pal Bhar Koi Hame Pyar Karle",lyrics:`
[A#m]  [C#]  [B]
Pal bhar ke liye koi humme pyaar kar le
[B]  [F#]
Jhoota hi sahi
[F#]  [C#]  [B]
Pal bhar ke liye koi humme pyaar kar le,
[C#]  [F#]
Jhoota hi sahi
[F#]  [C#]  [F#]
Do din ke liye koi ikraar kar le
[F#]  [C#]  [F#]
Do din ke liye koi ikraar kar le
[F#]
Jhoota hi sahi`},{title:"Chala Jaata Hu",lyrics:`
[F#]  [B]
Chala jaata hoo kisike dhun me
[C#]  [F#]
Dhadakate dil ke tarane liye

[F#]  [B]
Chala jaata hoo kisike dhun me
[C#]  [F#]
Dhadakate dil ke tarane liye

[D#m]  [B]
Milan ki masti bhari yaado me
[D#m]  [F#]
Hajaron sapne suhane liyeee
..............
ho hoooo
`},{title:"Haal Kaisa Hai Janaab Ka",lyrics:`
[F#]             [B]   [F#]
 Haal kaisa hai janaab kaa
[F#]             [B]   [F#]
 Kya khayaal hai aap kaa
[F#]                [B]  [C#7]
 Tum to machal gaye ho ho ho
[C#7]                      [F#]
 Yun hi fisal gaye haa haa haa`},{title:"Yeh Shaam Mastani",lyrics:`
[F#]       [D#m]        [F#]
Ye shaam mastaanee, madahosh kiye jaaye
[B]              [C#]       [F#]
mujhe dor koee khinche, teree orr liye jaaye
[F#]  [D#m]  [F#]
Ye shaam mastaanee, madahosh kiye jaaye
[B]              [C#]       [F#]
mujhe dor koee khinche, teree orr liye jaaye`},{title:"Musafir Hoon Yaaron",lyrics:`
[F#]           [B]         [F#]            [B]
Musafir hoon yaaron na ghar hai na tikhana
[B]                  [F#]  [B]   [F#]
Mujhe chalte jaana hai bas chalte jaana`},{title:"Chhod Do Aanchal",lyrics:`
[F#]       [G#m]       [F#]      [G#m]
chod do aanchal zamana kya kahega
[F#]       [G#m]       [F#]      [G#m]
chod do aanchal zamana kya kahega
[D#m]         [C#]        [F#]        [G#m]    [F#]    [G#m]
tum chali jao ki mar jayega deewana zamana kya kahega
[F#]       [G#m]       [F#]      [G#m]
chod do aanchal zamana kya kahega
[F#]       [G#m]       [F#]      [G#m]
chod do aanchal zamana kya kahega`}]},Ec={id:"Ijaazat",title:"Ijaazat",bpm:130,chords:[],songs:[{title:"Ijaazat",lyrics:`
(Prelude)
[Am7][Am6][F7]


(Intro)
[Am]                   [G]  
Bohot Kore Din Jiya Bin Tere
[F]             [G]              [Am]
Akele Ye Jeewan Bitaane Ki Aadat Na De
[C6]                  [G]
Meri Dhadkano Ka Tabeez Tu
[G]              [F]             [Am]  [E]
Baahon Se Apni Kabhi Bhi Zamaanat Na De

(Chorus)
[Am]           [G]
Tujhse Yu Door Jaana
[F]        [G]        [Am]
Mera Pyaar Ijaazat Na De 
[Dm]       [Em]       [Am]
Mera Pyaar Ijaazat Na De 

[Am]           [G]
Tujhse Yu Door Jaana
[F]        [G]        [Am]
Mera Pyaar Ijaazat Na De 
[Dm]       [Em]       [F]
Mera Pyaar Ijaazat Na De 

[C]          [G]
Aake Meri Baahon Mein
[F]              [G]  
Mujhko Tu Apna Banaa De
[E]       [G]       [Am]
Mujhko Tu Apna Banaa De

[Am]           [G]
Tujhse Yu Door Jaana
[F]        [G]        [Am]
Mera Pyaar Ijaazat Na De 
[Dm]       [Em]       [A]
Mera Pyaar Ijaazat Na De 


Interlude

(Verse)
[Am]            [F]
Meri Aarzu Mein Hai Tu Hi Tu
[E]                [F]  [G]  [Am]
Jo Samjhe Na Tu Samjhau Kaise?
[Am]              [Dm]
Tere Pyaar Mein Hua Sarphira
[Em]                [F]   [G] [Am]
Jo Hu Bas Tera Ye Bataaun Kaise?

[Am]            [F]
Meri Aarzu Mein Hai Tu Hi Tu
[E]                [F]  [G]  [Am]
Jo Samjhe Na Tu Samjhau Kaise?
[Am]              [Dm]
Tere Pyaar Mein Hua Sarphira
[Em]                [F]   [G] [C]
Jo Hu Bas Tera Ye Bataaun Kaise?

(Pre-Chorus)
[C]                       [Am]  [G]
Khwaabon Me Kehta Raha Tu Hi Hai Vo
[C]                        [G]              [E]
Saasein To Chalti Hain Par Dhadkane Tera Hi Naam Lein

[C]         [G]
Zindagi Meri Tujhse Hi
[F]                    [E]
Tu Bhi Dil Main Mujhko Panaah De
[F]             [G]          [Am]
Tu Bhi Dil Main Mujhko Panaah De

(Chorus)
[Am]           [G]
Tujhse Yu Door Jaana
[F]        [G]        [Am]
Mera Pyaar Ijaazat Na De 
[Dm]       [Em]       [F]
Mera Pyaar Ijaazat Na De 

[C]          [G]
Aake Meri Baahon Mein
[F]              [G]  
Mujhko Tu Apna Banaa De
[E]       [G]       [Am]
Mujhko Tu Apna Banaa De

[Am]           [G]
Tujhse Yu Door Jaana
[F]        [G]        [Am]
Mera Pyaar Ijaazat Na De 
[Dm]       [Em]       [A]
Mera Pyaar Ijaazat Na De `}]},Cc={id:"Mujhme-Tu",title:"Mujhme Tu",bpm:130,chords:[],songs:[{title:"Mujhme Tu",lyrics:`
(Intro)
[A][F#m7][D][Dm][A][E][E7][Asus2]

(Chorus)
[A]
Mujh mein tu shamil ho gayi
[F#m] 
Ye duniya mehfil ho gayi
[D]          [Dm]
Kaise yakeen dilao khud ko
[A] 
Ki tu mujhe haasil ho gayi

[A]
Mujh mein tu shamil ho gayi
[F#m] 
Ye duniya mehfil ho gayi
[D]          [Dm]
Kaise yakeen dilao khud ko
[A] 
Ki tu mujhe haasil ho gayi

(Verse 1)
[A]             [Dm]
Ye dua hai rab se meri
[A]               [Dm]
Rahe tu saath har ghadi
[A]                
Meri har khushi hai teri
[A] [F#m] [D][Dm] [F] [G] [A]
[A] [F#m] [D][Dm] [F] [G] [A]
Ho...

(Chorus)
[A]
Mujh mein tu shamil ho gayi
[F#m] 
Ye duniya mehfil ho gayi
[D]           [Dm]
Kaise yakeen dilao khud ko
[A] 
Ki tu mujhe haasil ho gayi

(Interlude)
[A][Gm][Dm][A]
[A][Gm][Dm][A]

(Verse 2)
[A]                    [Bm]
Tere siva kuch na maanga kabhi
[Dm]                      [A]
Tu na mili toh jeena gawara nahi
[A]                    [Bm]
Tere siva kuch na maanga kabhi
[Dm]                      [A]
Tu na mili toh jeena gawara nahi

(Pre-Chorus)
[A]                   [Dm]
Tujh mein meri duniya basi
[A]                   [Dm]
Main hoon tera tu hai meri
[A]                  
Tu ye maane ya maane nahi
[A] [F#m] [Dm] [A]
Ho...

(Chorus)
[A]
Mujh mein tu shamil ho gayi
[F#m] 
Ye duniya mehfil ho gayi
[D]          [Dm]
Kaise yakeen dilao khud ko
[A] 
Ki tu mujhe haasil ho gayi

[A]
Mujh mein tu shamil ho gayi
[F#m] 
Ye duniya mehfil ho gayi
[D]          [Dm]
Kaise yakeen dilao khud ko
[A] 
Ki tu mujhe haasil ho gayi

(Verse 1)
[A]             [Dm]
Ye dua hai rab se meri
[A]               [Dm]
Rahe tu saath har ghadi
[A]                
Meri har khushi hai teri
[A] [F#m] [D][Dm] [F] [G] [A]
[A] [F#m] [D][Dm] [F] [G] [A]
Ho...
`}]},ci=[vc,Ac,Ec,Cc],Sc={style:{padding:"2rem"}},Fc={__name:"Home",setup(e){return(t,n)=>{const i=ki("router-link");return We(),mt("div",Sc,[n[0]||(n[0]=se("h1",null,"Repertoire",-1)),se("ul",null,[(We(!0),mt(Se,null,fr(dt(ci),s=>(We(),mt("li",{key:s.id},[he(i,{to:`/song/${s.id}`},{default:Si(()=>[Dn(ft(s.title),1)]),_:2},1032,["to"])]))),128))])])}}},Ri=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},kc={class:"song-block"},xc={class:"song-title"},wc=["innerHTML"],Tc={__name:"SongBlock",props:{title:String,lyrics:String},setup(e){return(t,n)=>(We(),mt("div",kc,[se("h2",xc,ft(e.title),1),se("pre",{class:"lyrics",innerHTML:e.lyrics},null,8,wc)]))}},Pc=Ri(Tc,[["__scopeId","data-v-a625e8f5"]]),Dc={class:"controls-bar"},Rc={style:{"margin-left":"1rem"}},Mc={__name:"FooterControls",props:{originalLyrics:Array,transpositionOffset:Number},emits:["updateLyrics","updateOffset"],setup(e,{expose:t,emit:n}){const i=e,s=n,r=nt(1),a=nt(!1);let o=null,l=window.scrollY;function h(){a.value&&(l+=r.value*.05,window.scrollTo(0,l),o=requestAnimationFrame(h))}function f(){a.value?(cancelAnimationFrame(o),a.value=!1):(l=window.scrollY,a.value=!0,h())}const d=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function p(C,E){const j=C.match(/\[([A-G][#b]?)([^]]*)\]/);if(!j)return C;let R=j[1];const P=j[2];R={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"}[R]||R;const D=d.indexOf(R);if(D===-1)return C;const z=(D+E+d.length)%d.length,te=d[z];return console.log("Transpose chord ",C," with offset ",E," to get this: ",`[${te}${P}]`),`[${te}${P}]`}function g(C){const E=i.transpositionOffset+C;s("updateOffset",E);const j=i.originalLyrics.map(R=>R.replace(/\[[A-G][#b]*[^]]*\]/g,P=>p(P,E)));s("updateLyrics",j)}return wn(()=>{cancelAnimationFrame(o)}),t({toggleScroll:f}),(C,E)=>(We(),mt("div",Dc,[se("button",{onClick:E[0]||(E[0]=j=>g(1))},"TRANS +"),se("button",{onClick:E[1]||(E[1]=j=>g(-1))},"TRANS −"),se("button",{onClick:f},ft(a.value?"STOP SCROLL":"START SCROLL"),1),se("label",Rc,[E[3]||(E[3]=Dn(" Speed: ")),Ba(se("input",{type:"range",min:"1",max:"10","onUpdate:modelValue":E[2]||(E[2]=j=>r.value=j)},null,512),[[ul,r.value]])])]))}},jc=Ri(Mc,[["__scopeId","data-v-3a08db84"]]),Oc={style:{"padding-bottom":"6rem"}},Gc={class:"header-bar"},Hc={class:"content"},Bc={ref:"lyricsContainer"},Ic={__name:"Song",setup(e){const t=Yr(),n=ci.find(p=>p.id===t.params.id),i=tn({...n}),s=nt(i.songs.map(p=>p.lyrics)),r=nt([]),a=nt(0);function o(){r.value=i.songs.map(p=>{const C=p.lyrics.replace(/<span class="chord">(\[[^\]]+\])<\/span>/g,"$1").replace(/\[[^\]]+\]/g,E=>`<span class="chord">${E}</span>`);return{...p,lyrics:C}})}function l(p){i.songs.forEach((g,C)=>g.lyrics=p[C]),o()}const h=nt(!1);function f(){h.value=!h.value,document.documentElement.classList.toggle("dark",h.value)}const d=nt(null);return ur(()=>{o();const p=g=>{var C,E;g.target.tagName!=="INPUT"&&((E=(C=d.value)==null?void 0:C.toggleScroll)==null||E.call(C))};window.addEventListener("keydown",p),wn(()=>{})}),Tt(()=>t.params.id,p=>{const g=ci.find(C=>C.id===p);Object.assign(i,g),s.value=g.songs.map(C=>C.lyrics),a.value=0,o()}),(p,g)=>{const C=ki("router-link");return We(),mt("div",Oc,[se("div",Gc,[he(C,{to:"/",class:"back-btn"},{default:Si(()=>g[1]||(g[1]=[Dn("⬅ Back")])),_:1}),se("button",{class:"theme-toggle",onClick:f},ft(h.value?"🌞 Light Mode":"🌙 Dark Mode"),1)]),se("div",Hc,[se("h1",null,ft(i==null?void 0:i.title),1),se("p",null,"BPM: "+ft(i.bpm),1),se("div",Bc,[(We(!0),mt(Se,null,fr(r.value,(E,j)=>(We(),Dr(Pc,{key:j,title:E.title,lyrics:E.lyrics},null,8,["title","lyrics"]))),128))],512)]),he(jc,{ref_key:"footer",ref:d,originalLyrics:s.value,transpositionOffset:a.value,onUpdateLyrics:l,onUpdateOffset:g[0]||(g[0]=E=>a.value=E)},null,8,["originalLyrics","transpositionOffset"])])}}},Kc=Ri(Ic,[["__scopeId","data-v-9f736abb"]]),Nc=yc({history:zl("/setlist/"),routes:[{path:"/",name:"Home",component:Fc},{path:"/song/:id",name:"Song",component:Kc}]});dl(_c).use(Nc).mount("#app");
