(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function us(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Y={},Ct=[],Be=()=>{},Yi=()=>!1,vn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fs=e=>e.startsWith("onUpdate:"),ce=Object.assign,hs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qi=Object.prototype.hasOwnProperty,V=(e,t)=>Qi.call(e,t),I=Array.isArray,xt=e=>An(e)==="[object Map]",Fr=e=>An(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",rt=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Rr=e=>(X(e)||L(e))&&L(e.then)&&L(e.catch),Pr=Object.prototype.toString,An=e=>Pr.call(e),Zi=e=>An(e).slice(8,-1),Tr=e=>An(e)==="[object Object]",ds=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),En=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xi=/-(\w)/g,Se=En(e=>e.replace(Xi,(t,n)=>n?n.toUpperCase():"")),eo=/\B([A-Z])/g,gt=En(e=>e.replace(eo,"-$1").toLowerCase()),Sn=En(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mn=En(e=>e?`on${Sn(e)}`:""),st=(e,t)=>!Object.is(e,t),cn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Or=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Jn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let js;const Cn=()=>js||(js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ps(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ne(s)?ro(s):ps(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(ne(e)||X(e))return e}const to=/;(?![^(]*\))/g,no=/:([^]+)/,so=/\/\*[^]*?\*\//g;function ro(e){const t={};return e.replace(so,"").split(to).forEach(n=>{if(n){const s=n.split(no);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ms(e){let t="";if(ne(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const s=ms(e[n]);s&&(t+=s+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const io="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oo=us(io);function Dr(e){return!!e||e===""}const Mr=e=>!!(e&&e.__v_isRef===!0),ft=e=>ne(e)?e:e==null?"":I(e)||X(e)&&(e.toString===Pr||!L(e.toString))?Mr(e)?ft(e.value):JSON.stringify(e,jr,2):String(e),jr=(e,t)=>Mr(t)?jr(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[jn(s,i)+" =>"]=r,n),{})}:Fr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jn(n))}:rt(t)?jn(t):X(t)&&!I(t)&&!Tr(t)?String(t):t,jn=(e,t="")=>{var n;return rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class ao{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function lo(){return be}let Z;const Hn=new WeakSet;class Hr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hn.has(this)&&(Hn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Br(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hs(this),Ir(this);const t=Z,n=we;Z=this,we=!0;try{return this.fn()}finally{Lr(this),Z=t,we=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bs(t);this.deps=this.depsTail=void 0,Hs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qn(this)&&this.run()}get dirty(){return qn(this)}}let Gr=0,Lt,Nt;function Br(e,t=!1){if(e.flags|=8,t){e.next=Nt,Nt=e;return}e.next=Lt,Lt=e}function gs(){Gr++}function ys(){if(--Gr>0)return;if(Nt){let t=Nt;for(Nt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Lt;){let t=Lt;for(Lt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ir(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Lr(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),bs(s),co(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function qn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Nr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Nr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zt))return;e.globalVersion=zt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!qn(e)){e.flags&=-3;return}const n=Z,s=we;Z=e,we=!0;try{Ir(e);const r=e.fn(e._value);(t.version===0||st(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Z=n,we=s,Lr(e),e.flags&=-3}}function bs(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)bs(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function co(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let we=!0;const Kr=[];function it(){Kr.push(we),we=!1}function ot(){const e=Kr.pop();we=e===void 0?!0:e}function Hs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Z;Z=void 0;try{t()}finally{Z=n}}}let zt=0;class uo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _s{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Z||!we||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new uo(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,$r(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=s)}return n}trigger(t){this.version++,zt++,this.notify(t)}notify(t){gs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ys()}}}function $r(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)$r(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yn=new WeakMap,ht=Symbol(""),Qn=Symbol(""),Jt=Symbol("");function ie(e,t,n){if(we&&Z){let s=Yn.get(e);s||Yn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new _s),r.map=s,r.key=n),r.track()}}function Ve(e,t,n,s,r,i){const o=Yn.get(e);if(!o){zt++;return}const a=l=>{l&&l.trigger()};if(gs(),t==="clear")o.forEach(a);else{const l=I(e),d=l&&ds(n);if(l&&n==="length"){const f=Number(s);o.forEach((h,m)=>{(m==="length"||m===Jt||!rt(m)&&m>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(Jt)),t){case"add":l?d&&a(o.get("length")):(a(o.get(ht)),xt(e)&&a(o.get(Qn)));break;case"delete":l||(a(o.get(ht)),xt(e)&&a(o.get(Qn)));break;case"set":xt(e)&&a(o.get(ht));break}}ys()}function vt(e){const t=U(e);return t===e?t:(ie(t,"iterate",Jt),Ee(e)?t:t.map(oe))}function xn(e){return ie(e=U(e),"iterate",Jt),e}const fo={__proto__:null,[Symbol.iterator](){return Gn(this,Symbol.iterator,oe)},concat(...e){return vt(this).concat(...e.map(t=>I(t)?vt(t):t))},entries(){return Gn(this,"entries",e=>(e[1]=oe(e[1]),e))},every(e,t){return Ke(this,"every",e,t,void 0,arguments)},filter(e,t){return Ke(this,"filter",e,t,n=>n.map(oe),arguments)},find(e,t){return Ke(this,"find",e,t,oe,arguments)},findIndex(e,t){return Ke(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ke(this,"findLast",e,t,oe,arguments)},findLastIndex(e,t){return Ke(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ke(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bn(this,"includes",e)},indexOf(...e){return Bn(this,"indexOf",e)},join(e){return vt(this).join(e)},lastIndexOf(...e){return Bn(this,"lastIndexOf",e)},map(e,t){return Ke(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return Ke(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return vt(this).toReversed()},toSorted(e){return vt(this).toSorted(e)},toSpliced(...e){return vt(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Gn(this,"values",oe)}};function Gn(e,t,n){const s=xn(e),r=s[t]();return s!==e&&!Ee(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ho=Array.prototype;function Ke(e,t,n,s,r,i){const o=xn(e),a=o!==e&&!Ee(e),l=o[t];if(l!==ho[t]){const h=l.apply(e,i);return a?oe(h):h}let d=n;o!==e&&(a?d=function(h,m){return n.call(this,oe(h),m,e)}:n.length>2&&(d=function(h,m){return n.call(this,h,m,e)}));const f=l.call(o,d,s);return a&&r?r(f):f}function Gs(e,t,n,s){const r=xn(e);let i=n;return r!==e&&(Ee(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,oe(a),l,e)}),r[t](i,...s)}function Bn(e,t,n){const s=U(e);ie(s,"iterate",Jt);const r=s[t](...n);return(r===-1||r===!1)&&Es(n[0])?(n[0]=U(n[0]),s[t](...n)):r}function jt(e,t,n=[]){it(),gs();const s=U(e)[t].apply(e,n);return ys(),ot(),s}const po=us("__proto__,__v_isRef,__isVue"),Ur=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rt));function mo(e){rt(e)||(e=String(e));const t=U(this);return ie(t,"has",e),t.hasOwnProperty(e)}class Vr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?xo:qr:i?Jr:zr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=I(t);if(!r){let l;if(o&&(l=fo[n]))return l;if(n==="hasOwnProperty")return mo}const a=Reflect.get(t,n,le(t)?t:s);return(rt(n)?Ur.has(n):po(n))||(r||ie(t,"get",n),i)?a:le(a)?o&&ds(n)?a:a.value:X(a)?r?Qr(a):tn(a):a}}class Wr extends Vr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const l=mt(i);if(!Ee(s)&&!mt(s)&&(i=U(i),s=U(s)),!I(t)&&le(i)&&!le(s))return l?!1:(i.value=s,!0)}const o=I(t)&&ds(n)?Number(n)<t.length:V(t,n),a=Reflect.set(t,n,s,le(t)?t:r);return t===U(r)&&(o?st(s,i)&&Ve(t,"set",n,s):Ve(t,"add",n,s)),a}deleteProperty(t,n){const s=V(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Ve(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!rt(n)||!Ur.has(n))&&ie(t,"has",n),s}ownKeys(t){return ie(t,"iterate",I(t)?"length":ht),Reflect.ownKeys(t)}}class go extends Vr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yo=new Wr,bo=new go,_o=new Wr(!0);const Zn=e=>e,on=e=>Reflect.getPrototypeOf(e);function vo(e,t,n){return function(...s){const r=this.__v_raw,i=U(r),o=xt(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,d=r[e](...s),f=n?Zn:t?Xn:oe;return!t&&ie(i,"iterate",l?Qn:ht),{next(){const{value:h,done:m}=d.next();return m?{value:h,done:m}:{value:a?[f(h[0]),f(h[1])]:f(h),done:m}},[Symbol.iterator](){return this}}}}function an(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ao(e,t){const n={get(r){const i=this.__v_raw,o=U(i),a=U(r);e||(st(r,a)&&ie(o,"get",r),ie(o,"get",a));const{has:l}=on(o),d=t?Zn:e?Xn:oe;if(l.call(o,r))return d(i.get(r));if(l.call(o,a))return d(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ie(U(r),"iterate",ht),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=U(i),a=U(r);return e||(st(r,a)&&ie(o,"has",r),ie(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=U(a),d=t?Zn:e?Xn:oe;return!e&&ie(l,"iterate",ht),a.forEach((f,h)=>r.call(i,d(f),d(h),o))}};return ce(n,e?{add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear")}:{add(r){!t&&!Ee(r)&&!mt(r)&&(r=U(r));const i=U(this);return on(i).has.call(i,r)||(i.add(r),Ve(i,"add",r,r)),this},set(r,i){!t&&!Ee(i)&&!mt(i)&&(i=U(i));const o=U(this),{has:a,get:l}=on(o);let d=a.call(o,r);d||(r=U(r),d=a.call(o,r));const f=l.call(o,r);return o.set(r,i),d?st(i,f)&&Ve(o,"set",r,i):Ve(o,"add",r,i),this},delete(r){const i=U(this),{has:o,get:a}=on(i);let l=o.call(i,r);l||(r=U(r),l=o.call(i,r)),a&&a.call(i,r);const d=i.delete(r);return l&&Ve(i,"delete",r,void 0),d},clear(){const r=U(this),i=r.size!==0,o=r.clear();return i&&Ve(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=vo(r,e,t)}),n}function vs(e,t){const n=Ao(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(V(n,r)&&r in s?n:s,r,i)}const Eo={get:vs(!1,!1)},So={get:vs(!1,!0)},Co={get:vs(!0,!1)};const zr=new WeakMap,Jr=new WeakMap,qr=new WeakMap,xo=new WeakMap;function wo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ko(e){return e.__v_skip||!Object.isExtensible(e)?0:wo(Zi(e))}function tn(e){return mt(e)?e:As(e,!1,yo,Eo,zr)}function Yr(e){return As(e,!1,_o,So,Jr)}function Qr(e){return As(e,!0,bo,Co,qr)}function As(e,t,n,s,r){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=ko(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function wt(e){return mt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function Es(e){return e?!!e.__v_raw:!1}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Fo(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&Or(e,"__v_skip",!0),e}const oe=e=>X(e)?tn(e):e,Xn=e=>X(e)?Qr(e):e;function le(e){return e?e.__v_isRef===!0:!1}function nt(e){return Zr(e,!1)}function Ro(e){return Zr(e,!0)}function Zr(e,t){return le(e)?e:new Po(e,t)}class Po{constructor(t,n){this.dep=new _s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:U(t),this._value=n?t:oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ee(t)||mt(t);t=s?t:U(t),st(t,n)&&(this._rawValue=t,this._value=s?t:oe(t),this.dep.trigger())}}function dt(e){return le(e)?e.value:e}const To={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return le(r)&&!le(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Xr(e){return wt(e)?e:new Proxy(e,To)}class Oo{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new _s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return Br(this,!0),!0}get value(){const t=this.dep.track();return Nr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Do(e,t,n=!1){let s,r;return L(e)?s=e:(s=e.get,r=e.set),new Oo(s,r,n)}const ln={},dn=new WeakMap;let ut;function Mo(e,t=!1,n=ut){if(n){let s=dn.get(n);s||dn.set(n,s=[]),s.push(e)}}function jo(e,t,n=Y){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,d=D=>r?D:Ee(D)||r===!1||r===0?We(D,1):We(D);let f,h,m,g,S=!1,E=!1;if(le(e)?(h=()=>e.value,S=Ee(e)):wt(e)?(h=()=>d(e),S=!0):I(e)?(E=!0,S=e.some(D=>wt(D)||Ee(D)),h=()=>e.map(D=>{if(le(D))return D.value;if(wt(D))return d(D);if(L(D))return l?l(D,2):D()})):L(e)?t?h=l?()=>l(e,2):e:h=()=>{if(m){it();try{m()}finally{ot()}}const D=ut;ut=f;try{return l?l(e,3,[g]):e(g)}finally{ut=D}}:h=Be,t&&r){const D=h,W=r===!0?1/0:r;h=()=>We(D(),W)}const O=lo(),k=()=>{f.stop(),O&&O.active&&hs(O.effects,f)};if(i&&t){const D=t;t=(...W)=>{D(...W),k()}}let R=E?new Array(e.length).fill(ln):ln;const H=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(t){const W=f.run();if(r||S||(E?W.some((te,ee)=>st(te,R[ee])):st(W,R))){m&&m();const te=ut;ut=f;try{const ee=[W,R===ln?void 0:E&&R[0]===ln?[]:R,g];l?l(t,3,ee):t(...ee),R=W}finally{ut=te}}}else f.run()};return a&&a(H),f=new Hr(h),f.scheduler=o?()=>o(H,!1):H,g=D=>Mo(D,!1,f),m=f.onStop=()=>{const D=dn.get(f);if(D){if(l)l(D,4);else for(const W of D)W();dn.delete(f)}},t?s?H(!0):R=f.run():o?o(H.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function We(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,le(e))We(e.value,t,n);else if(I(e))for(let s=0;s<e.length;s++)We(e[s],t,n);else if(Fr(e)||xt(e))e.forEach(s=>{We(s,t,n)});else if(Tr(e)){for(const s in e)We(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&We(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nn(e,t,n,s){try{return s?e(...s):e()}catch(r){wn(r,t,n)}}function Le(e,t,n,s){if(L(e)){const r=nn(e,t,n,s);return r&&Rr(r)&&r.catch(i=>{wn(i,t,n)}),r}if(I(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Le(e[i],t,n,s));return r}}function wn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Y;if(t){let a=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,l,d)===!1)return}a=a.parent}if(i){it(),nn(i,null,10,[e,l,d]),ot();return}}Ho(e,n,r,s,o)}function Ho(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const fe=[];let He=-1;const kt=[];let Xe=null,At=0;const ei=Promise.resolve();let pn=null;function ti(e){const t=pn||ei;return e?t.then(this?e.bind(this):e):t}function Go(e){let t=He+1,n=fe.length;for(;t<n;){const s=t+n>>>1,r=fe[s],i=qt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Ss(e){if(!(e.flags&1)){const t=qt(e),n=fe[fe.length-1];!n||!(e.flags&2)&&t>=qt(n)?fe.push(e):fe.splice(Go(t),0,e),e.flags|=1,ni()}}function ni(){pn||(pn=ei.then(ri))}function Bo(e){I(e)?kt.push(...e):Xe&&e.id===-1?Xe.splice(At+1,0,e):e.flags&1||(kt.push(e),e.flags|=1),ni()}function Bs(e,t,n=He+1){for(;n<fe.length;n++){const s=fe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;fe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function si(e){if(kt.length){const t=[...new Set(kt)].sort((n,s)=>qt(n)-qt(s));if(kt.length=0,Xe){Xe.push(...t);return}for(Xe=t,At=0;At<Xe.length;At++){const n=Xe[At];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xe=null,At=0}}const qt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ri(e){try{for(He=0;He<fe.length;He++){const t=fe[He];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),nn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;He<fe.length;He++){const t=fe[He];t&&(t.flags&=-2)}He=-1,fe.length=0,si(),pn=null,(fe.length||kt.length)&&ri()}}let _e=null,ii=null;function mn(e){const t=_e;return _e=e,ii=e&&e.type.__scopeId||null,t}function Cs(e,t=_e,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Js(-1);const i=mn(t);let o;try{o=e(...r)}finally{mn(i),s._d&&Js(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Io(e,t){if(_e===null)return e;const n=On(_e),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,l=Y]=t[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&We(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function lt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(it(),Le(l,n,8,[e.el,a,e,t]),ot())}}const Lo=Symbol("_vte"),No=e=>e.__isTeleport;function xs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function oi(e,t){return L(e)?ce({name:e.name},t,{setup:e}):e}function ai(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function gn(e,t,n,s,r=!1){if(I(e)){e.forEach((S,E)=>gn(S,t&&(I(t)?t[E]:t),n,s,r));return}if(Kt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&gn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?On(s.component):s.el,o=r?null:i,{i:a,r:l}=e,d=t&&t.r,f=a.refs===Y?a.refs={}:a.refs,h=a.setupState,m=U(h),g=h===Y?()=>!1:S=>V(m,S);if(d!=null&&d!==l&&(ne(d)?(f[d]=null,g(d)&&(h[d]=null)):le(d)&&(d.value=null)),L(l))nn(l,a,12,[o,f]);else{const S=ne(l),E=le(l);if(S||E){const O=()=>{if(e.f){const k=S?g(l)?h[l]:f[l]:l.value;r?I(k)&&hs(k,i):I(k)?k.includes(i)||k.push(i):S?(f[l]=[i],g(l)&&(h[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else S?(f[l]=o,g(l)&&(h[l]=o)):E&&(l.value=o,e.k&&(f[e.k]=o))};o?(O.id=-1,ye(O,n)):O()}}}Cn().requestIdleCallback;Cn().cancelIdleCallback;const Kt=e=>!!e.type.__asyncLoader,li=e=>e.type.__isKeepAlive;function Ko(e,t){ci(e,"a",t)}function $o(e,t){ci(e,"da",t)}function ci(e,t,n=ae){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(kn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)li(r.parent.vnode)&&Uo(s,t,n,r),r=r.parent}}function Uo(e,t,n,s){const r=kn(t,e,s,!0);Fn(()=>{hs(s[t],r)},n)}function kn(e,t,n=ae,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{it();const a=sn(n),l=Le(t,n,e,o);return a(),ot(),l});return s?r.unshift(i):r.push(i),i}}const Je=e=>(t,n=ae)=>{(!Zt||e==="sp")&&kn(e,(...s)=>t(...s),n)},Vo=Je("bm"),ui=Je("m"),Wo=Je("bu"),zo=Je("u"),Jo=Je("bum"),Fn=Je("um"),qo=Je("sp"),Yo=Je("rtg"),Qo=Je("rtc");function Zo(e,t=ae){kn("ec",e,t)}const Xo="components";function ws(e,t){return ta(Xo,e,!0,t)||e}const ea=Symbol.for("v-ndc");function ta(e,t,n=!0,s=!1){const r=_e||ae;if(r){const i=r.type;{const a=Na(i,!1);if(a&&(a===t||a===Se(t)||a===Sn(Se(t))))return i}const o=Is(r[e]||i[e],t)||Is(r.appContext[e],t);return!o&&s?i:o}}function Is(e,t){return e&&(e[t]||e[Se(t)]||e[Sn(Se(t))])}function fi(e,t,n,s){let r;const i=n,o=I(e);if(o||ne(e)){const a=o&&wt(e);let l=!1;a&&(l=!Ee(e),e=xn(e)),r=new Array(e.length);for(let d=0,f=e.length;d<f;d++)r[d]=t(l?oe(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(X(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const f=a[l];r[l]=t(e[f],f,l,i)}}else r=[];return r}const es=e=>e?Di(e)?On(e):es(e.parent):null,$t=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>di(e),$forceUpdate:e=>e.f||(e.f=()=>{Ss(e.update)}),$nextTick:e=>e.n||(e.n=ti.bind(e.proxy)),$watch:e=>Ea.bind(e)}),In=(e,t)=>e!==Y&&!e.__isScriptSetup&&V(e,t),na={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let d;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(In(s,t))return o[t]=1,s[t];if(r!==Y&&V(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&V(d,t))return o[t]=3,i[t];if(n!==Y&&V(n,t))return o[t]=4,n[t];ts&&(o[t]=0)}}const f=$t[t];let h,m;if(f)return t==="$attrs"&&ie(e.attrs,"get",""),f(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Y&&V(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,V(m,t))return m[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return In(r,t)?(r[t]=n,!0):s!==Y&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==Y&&V(e,o)||In(t,o)||(a=i[0])&&V(a,o)||V(s,o)||V($t,o)||V(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ls(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function sa(e){const t=di(e),n=e.proxy,s=e.ctx;ts=!1,t.beforeCreate&&Ns(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:d,created:f,beforeMount:h,mounted:m,beforeUpdate:g,updated:S,activated:E,deactivated:O,beforeDestroy:k,beforeUnmount:R,destroyed:H,unmounted:D,render:W,renderTracked:te,renderTriggered:ee,errorCaptured:Fe,serverPrefetch:qe,expose:Re,inheritAttrs:Ye,components:at,directives:Pe,filters:Dt}=t;if(d&&ra(d,s,null),o)for(const J in o){const K=o[J];L(K)&&(s[J]=K.bind(n))}if(r){const J=r.call(n,n);X(J)&&(e.data=tn(J))}if(ts=!0,i)for(const J in i){const K=i[J],Ne=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Be,Qe=!L(K)&&L(K.set)?K.set.bind(n):Be,Te=xe({get:Ne,set:Qe});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Te.value,set:de=>Te.value=de})}if(a)for(const J in a)hi(a[J],s,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(K=>{un(K,J[K])})}f&&Ns(f,e,"c");function se(J,K){I(K)?K.forEach(Ne=>J(Ne.bind(n))):K&&J(K.bind(n))}if(se(Vo,h),se(ui,m),se(Wo,g),se(zo,S),se(Ko,E),se($o,O),se(Zo,Fe),se(Qo,te),se(Yo,ee),se(Jo,R),se(Fn,D),se(qo,qe),I(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:Ne=>n[K]=Ne})})}else e.exposed||(e.exposed={});W&&e.render===Be&&(e.render=W),Ye!=null&&(e.inheritAttrs=Ye),at&&(e.components=at),Pe&&(e.directives=Pe),qe&&ai(e)}function ra(e,t,n=Be){I(e)&&(e=ns(e));for(const s in e){const r=e[s];let i;X(r)?"default"in r?i=Ie(r.from||s,r.default,!0):i=Ie(r.from||s):i=Ie(r),le(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Ns(e,t,n){Le(I(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function hi(e,t,n,s){let r=s.includes(".")?ki(n,s):()=>n[s];if(ne(e)){const i=t[e];L(i)&&Rt(r,i)}else if(L(e))Rt(r,e.bind(n));else if(X(e))if(I(e))e.forEach(i=>hi(i,t,n,s));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Rt(r,i,e)}}function di(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(d=>yn(l,d,o,!0)),yn(l,t,o)),X(t)&&i.set(t,l),l}function yn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&yn(e,i,n,!0),r&&r.forEach(o=>yn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=ia[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const ia={data:Ks,props:$s,emits:$s,methods:Bt,computed:Bt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Bt,directives:Bt,watch:aa,provide:Ks,inject:oa};function Ks(e,t){return t?e?function(){return ce(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function oa(e,t){return Bt(ns(e),ns(t))}function ns(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?ce(Object.create(null),e,t):t}function $s(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ce(Object.create(null),Ls(e),Ls(t??{})):t}function aa(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const s in t)n[s]=ue(e[s],t[s]);return n}function pi(){return{app:null,config:{isNativeTag:Yi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let la=0;function ca(e,t){return function(s,r=null){L(s)||(s=ce({},s)),r!=null&&!X(r)&&(r=null);const i=pi(),o=new WeakSet,a=[];let l=!1;const d=i.app={_uid:la++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$a,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&L(f.install)?(o.add(f),f.install(d,...h)):L(f)&&(o.add(f),f(d,...h))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,h){return h?(i.components[f]=h,d):i.components[f]},directive(f,h){return h?(i.directives[f]=h,d):i.directives[f]},mount(f,h,m){if(!l){const g=d._ceVNode||he(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(g,f,m),l=!0,d._container=f,f.__vue_app__=d,On(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Le(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return i.provides[f]=h,d},runWithContext(f){const h=Ft;Ft=d;try{return f()}finally{Ft=h}}};return d}}let Ft=null;function un(e,t){if(ae){let n=ae.provides;const s=ae.parent&&ae.parent.provides;s===n&&(n=ae.provides=Object.create(s)),n[e]=t}}function Ie(e,t,n=!1){const s=ae||_e;if(s||Ft){const r=Ft?Ft._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}const mi={},gi=()=>Object.create(mi),yi=e=>Object.getPrototypeOf(e)===mi;function ua(e,t,n,s=!1){const r={},i=gi();e.propsDefaults=Object.create(null),bi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Yr(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function fa(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=U(r),[l]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let m=f[h];if(Rn(e.emitsOptions,m))continue;const g=t[m];if(l)if(V(i,m))g!==i[m]&&(i[m]=g,d=!0);else{const S=Se(m);r[S]=ss(l,a,S,g,e,!1)}else g!==i[m]&&(i[m]=g,d=!0)}}}else{bi(e,t,r,i)&&(d=!0);let f;for(const h in a)(!t||!V(t,h)&&((f=gt(h))===h||!V(t,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=ss(l,a,h,void 0,e,!0)):delete r[h]);if(i!==a)for(const h in i)(!t||!V(t,h))&&(delete i[h],d=!0)}d&&Ve(e.attrs,"set","")}function bi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(It(l))continue;const d=t[l];let f;r&&V(r,f=Se(l))?!i||!i.includes(f)?n[f]=d:(a||(a={}))[f]=d:Rn(e.emitsOptions,l)||(!(l in s)||d!==s[l])&&(s[l]=d,o=!0)}if(i){const l=U(n),d=a||Y;for(let f=0;f<i.length;f++){const h=i[f];n[h]=ss(r,l,h,d[h],e,!V(d,h))}}return o}function ss(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=V(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const f=sn(r);s=d[n]=l.call(null,t),f()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===gt(n))&&(s=!0))}return s}const ha=new WeakMap;function _i(e,t,n=!1){const s=n?ha:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!L(e)){const f=h=>{l=!0;const[m,g]=_i(h,t,!0);ce(o,m),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return X(e)&&s.set(e,Ct),Ct;if(I(i))for(let f=0;f<i.length;f++){const h=Se(i[f]);Us(h)&&(o[h]=Y)}else if(i)for(const f in i){const h=Se(f);if(Us(h)){const m=i[f],g=o[h]=I(m)||L(m)?{type:m}:ce({},m),S=g.type;let E=!1,O=!0;if(I(S))for(let k=0;k<S.length;++k){const R=S[k],H=L(R)&&R.name;if(H==="Boolean"){E=!0;break}else H==="String"&&(O=!1)}else E=L(S)&&S.name==="Boolean";g[0]=E,g[1]=O,(E||V(g,"default"))&&a.push(h)}}const d=[o,a];return X(e)&&s.set(e,d),d}function Us(e){return e[0]!=="$"&&!It(e)}const vi=e=>e[0]==="_"||e==="$stable",ks=e=>I(e)?e.map(Ge):[Ge(e)],da=(e,t,n)=>{if(t._n)return t;const s=Cs((...r)=>ks(t(...r)),n);return s._c=!1,s},Ai=(e,t,n)=>{const s=e._ctx;for(const r in e){if(vi(r))continue;const i=e[r];if(L(i))t[r]=da(r,i,s);else if(i!=null){const o=ks(i);t[r]=()=>o}}},Ei=(e,t)=>{const n=ks(t);e.slots.default=()=>n},Si=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},pa=(e,t,n)=>{const s=e.slots=gi();if(e.vnode.shapeFlag&32){const r=t._;r?(Si(s,t,n),n&&Or(s,"_",r,!0)):Ai(t,s)}else t&&Ei(e,t)},ma=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=Y;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Si(r,t,n):(i=!t.$stable,Ai(t,r)),o=t}else t&&(Ei(e,t),o={default:1});if(i)for(const a in r)!vi(a)&&o[a]==null&&delete r[a]},ye=Ra;function ga(e){return ya(e)}function ya(e,t){const n=Cn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:m,setScopeId:g=Be,insertStaticContent:S}=e,E=(c,u,p,y=null,v=null,_=null,w=void 0,x=null,C=!!u.dynamicChildren)=>{if(c===u)return;c&&!Ht(c,u)&&(y=b(c),de(c,v,_,!0),c=null),u.patchFlag===-2&&(C=!1,u.dynamicChildren=null);const{type:A,ref:G,shapeFlag:P}=u;switch(A){case Pn:O(c,u,p,y);break;case Yt:k(c,u,p,y);break;case Nn:c==null&&R(u,p,y,w);break;case Ce:at(c,u,p,y,v,_,w,x,C);break;default:P&1?W(c,u,p,y,v,_,w,x,C):P&6?Pe(c,u,p,y,v,_,w,x,C):(P&64||P&128)&&A.process(c,u,p,y,v,_,w,x,C,M)}G!=null&&v&&gn(G,c&&c.ref,_,u||c,!u)},O=(c,u,p,y)=>{if(c==null)s(u.el=a(u.children),p,y);else{const v=u.el=c.el;u.children!==c.children&&d(v,u.children)}},k=(c,u,p,y)=>{c==null?s(u.el=l(u.children||""),p,y):u.el=c.el},R=(c,u,p,y)=>{[c.el,c.anchor]=S(c.children,u,p,y,c.el,c.anchor)},H=({el:c,anchor:u},p,y)=>{let v;for(;c&&c!==u;)v=m(c),s(c,p,y),c=v;s(u,p,y)},D=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=m(c),r(c),c=p;r(u)},W=(c,u,p,y,v,_,w,x,C)=>{u.type==="svg"?w="svg":u.type==="math"&&(w="mathml"),c==null?te(u,p,y,v,_,w,x,C):qe(c,u,v,_,w,x,C)},te=(c,u,p,y,v,_,w,x)=>{let C,A;const{props:G,shapeFlag:P,transition:j,dirs:B}=c;if(C=c.el=o(c.type,_,G&&G.is,G),P&8?f(C,c.children):P&16&&Fe(c.children,C,null,y,v,Ln(c,_),w,x),B&&lt(c,null,y,"created"),ee(C,c,c.scopeId,w,y),G){for(const Q in G)Q!=="value"&&!It(Q)&&i(C,Q,null,G[Q],_,y);"value"in G&&i(C,"value",null,G.value,_),(A=G.onVnodeBeforeMount)&&je(A,y,c)}B&&lt(c,null,y,"beforeMount");const N=ba(v,j);N&&j.beforeEnter(C),s(C,u,p),((A=G&&G.onVnodeMounted)||N||B)&&ye(()=>{A&&je(A,y,c),N&&j.enter(C),B&&lt(c,null,y,"mounted")},v)},ee=(c,u,p,y,v)=>{if(p&&g(c,p),y)for(let _=0;_<y.length;_++)g(c,y[_]);if(v){let _=v.subTree;if(u===_||Ri(_.type)&&(_.ssContent===u||_.ssFallback===u)){const w=v.vnode;ee(c,w,w.scopeId,w.slotScopeIds,v.parent)}}},Fe=(c,u,p,y,v,_,w,x,C=0)=>{for(let A=C;A<c.length;A++){const G=c[A]=x?et(c[A]):Ge(c[A]);E(null,G,u,p,y,v,_,w,x)}},qe=(c,u,p,y,v,_,w)=>{const x=u.el=c.el;let{patchFlag:C,dynamicChildren:A,dirs:G}=u;C|=c.patchFlag&16;const P=c.props||Y,j=u.props||Y;let B;if(p&&ct(p,!1),(B=j.onVnodeBeforeUpdate)&&je(B,p,u,c),G&&lt(u,c,p,"beforeUpdate"),p&&ct(p,!0),(P.innerHTML&&j.innerHTML==null||P.textContent&&j.textContent==null)&&f(x,""),A?Re(c.dynamicChildren,A,x,p,y,Ln(u,v),_):w||K(c,u,x,null,p,y,Ln(u,v),_,!1),C>0){if(C&16)Ye(x,P,j,p,v);else if(C&2&&P.class!==j.class&&i(x,"class",null,j.class,v),C&4&&i(x,"style",P.style,j.style,v),C&8){const N=u.dynamicProps;for(let Q=0;Q<N.length;Q++){const z=N[Q],me=P[z],pe=j[z];(pe!==me||z==="value")&&i(x,z,me,pe,v,p)}}C&1&&c.children!==u.children&&f(x,u.children)}else!w&&A==null&&Ye(x,P,j,p,v);((B=j.onVnodeUpdated)||G)&&ye(()=>{B&&je(B,p,u,c),G&&lt(u,c,p,"updated")},y)},Re=(c,u,p,y,v,_,w)=>{for(let x=0;x<u.length;x++){const C=c[x],A=u[x],G=C.el&&(C.type===Ce||!Ht(C,A)||C.shapeFlag&70)?h(C.el):p;E(C,A,G,null,y,v,_,w,!0)}},Ye=(c,u,p,y,v)=>{if(u!==p){if(u!==Y)for(const _ in u)!It(_)&&!(_ in p)&&i(c,_,u[_],null,v,y);for(const _ in p){if(It(_))continue;const w=p[_],x=u[_];w!==x&&_!=="value"&&i(c,_,x,w,v,y)}"value"in p&&i(c,"value",u.value,p.value,v)}},at=(c,u,p,y,v,_,w,x,C)=>{const A=u.el=c?c.el:a(""),G=u.anchor=c?c.anchor:a("");let{patchFlag:P,dynamicChildren:j,slotScopeIds:B}=u;B&&(x=x?x.concat(B):B),c==null?(s(A,p,y),s(G,p,y),Fe(u.children||[],p,G,v,_,w,x,C)):P>0&&P&64&&j&&c.dynamicChildren?(Re(c.dynamicChildren,j,p,v,_,w,x),(u.key!=null||v&&u===v.subTree)&&Ci(c,u,!0)):K(c,u,p,G,v,_,w,x,C)},Pe=(c,u,p,y,v,_,w,x,C)=>{u.slotScopeIds=x,c==null?u.shapeFlag&512?v.ctx.activate(u,p,y,w,C):Dt(u,p,y,v,_,w,C):yt(c,u,C)},Dt=(c,u,p,y,v,_,w)=>{const x=c.component=Ha(c,y,v);if(li(c)&&(x.ctx.renderer=M),Ga(x,!1,w),x.asyncDep){if(v&&v.registerDep(x,se,w),!c.el){const C=x.subTree=he(Yt);k(null,C,u,p)}}else se(x,c,u,p,v,_,w)},yt=(c,u,p)=>{const y=u.component=c.component;if(ka(c,u,p))if(y.asyncDep&&!y.asyncResolved){J(y,u,p);return}else y.next=u,y.update();else u.el=c.el,y.vnode=u},se=(c,u,p,y,v,_,w)=>{const x=()=>{if(c.isMounted){let{next:P,bu:j,u:B,parent:N,vnode:Q}=c;{const De=xi(c);if(De){P&&(P.el=Q.el,J(c,P,w)),De.asyncDep.then(()=>{c.isUnmounted||x()});return}}let z=P,me;ct(c,!1),P?(P.el=Q.el,J(c,P,w)):P=Q,j&&cn(j),(me=P.props&&P.props.onVnodeBeforeUpdate)&&je(me,N,P,Q),ct(c,!0);const pe=Ws(c),Oe=c.subTree;c.subTree=pe,E(Oe,pe,h(Oe.el),b(Oe),c,v,_),P.el=pe.el,z===null&&Fa(c,pe.el),B&&ye(B,v),(me=P.props&&P.props.onVnodeUpdated)&&ye(()=>je(me,N,P,Q),v)}else{let P;const{el:j,props:B}=u,{bm:N,m:Q,parent:z,root:me,type:pe}=c,Oe=Kt(u);ct(c,!1),N&&cn(N),!Oe&&(P=B&&B.onVnodeBeforeMount)&&je(P,z,u),ct(c,!0);{me.ce&&me.ce._injectChildStyle(pe);const De=c.subTree=Ws(c);E(null,De,p,y,c,v,_),u.el=De.el}if(Q&&ye(Q,v),!Oe&&(P=B&&B.onVnodeMounted)){const De=u;ye(()=>je(P,z,De),v)}(u.shapeFlag&256||z&&Kt(z.vnode)&&z.vnode.shapeFlag&256)&&c.a&&ye(c.a,v),c.isMounted=!0,u=p=y=null}};c.scope.on();const C=c.effect=new Hr(x);c.scope.off();const A=c.update=C.run.bind(C),G=c.job=C.runIfDirty.bind(C);G.i=c,G.id=c.uid,C.scheduler=()=>Ss(G),ct(c,!0),A()},J=(c,u,p)=>{u.component=c;const y=c.vnode.props;c.vnode=u,c.next=null,fa(c,u.props,y,p),ma(c,u.children,p),it(),Bs(c),ot()},K=(c,u,p,y,v,_,w,x,C=!1)=>{const A=c&&c.children,G=c?c.shapeFlag:0,P=u.children,{patchFlag:j,shapeFlag:B}=u;if(j>0){if(j&128){Qe(A,P,p,y,v,_,w,x,C);return}else if(j&256){Ne(A,P,p,y,v,_,w,x,C);return}}B&8?(G&16&&Ae(A,v,_),P!==A&&f(p,P)):G&16?B&16?Qe(A,P,p,y,v,_,w,x,C):Ae(A,v,_,!0):(G&8&&f(p,""),B&16&&Fe(P,p,y,v,_,w,x,C))},Ne=(c,u,p,y,v,_,w,x,C)=>{c=c||Ct,u=u||Ct;const A=c.length,G=u.length,P=Math.min(A,G);let j;for(j=0;j<P;j++){const B=u[j]=C?et(u[j]):Ge(u[j]);E(c[j],B,p,null,v,_,w,x,C)}A>G?Ae(c,v,_,!0,!1,P):Fe(u,p,y,v,_,w,x,C,P)},Qe=(c,u,p,y,v,_,w,x,C)=>{let A=0;const G=u.length;let P=c.length-1,j=G-1;for(;A<=P&&A<=j;){const B=c[A],N=u[A]=C?et(u[A]):Ge(u[A]);if(Ht(B,N))E(B,N,p,null,v,_,w,x,C);else break;A++}for(;A<=P&&A<=j;){const B=c[P],N=u[j]=C?et(u[j]):Ge(u[j]);if(Ht(B,N))E(B,N,p,null,v,_,w,x,C);else break;P--,j--}if(A>P){if(A<=j){const B=j+1,N=B<G?u[B].el:y;for(;A<=j;)E(null,u[A]=C?et(u[A]):Ge(u[A]),p,N,v,_,w,x,C),A++}}else if(A>j)for(;A<=P;)de(c[A],v,_,!0),A++;else{const B=A,N=A,Q=new Map;for(A=N;A<=j;A++){const ge=u[A]=C?et(u[A]):Ge(u[A]);ge.key!=null&&Q.set(ge.key,A)}let z,me=0;const pe=j-N+1;let Oe=!1,De=0;const Mt=new Array(pe);for(A=0;A<pe;A++)Mt[A]=0;for(A=B;A<=P;A++){const ge=c[A];if(me>=pe){de(ge,v,_,!0);continue}let Me;if(ge.key!=null)Me=Q.get(ge.key);else for(z=N;z<=j;z++)if(Mt[z-N]===0&&Ht(ge,u[z])){Me=z;break}Me===void 0?de(ge,v,_,!0):(Mt[Me-N]=A+1,Me>=De?De=Me:Oe=!0,E(ge,u[Me],p,null,v,_,w,x,C),me++)}const Ds=Oe?_a(Mt):Ct;for(z=Ds.length-1,A=pe-1;A>=0;A--){const ge=N+A,Me=u[ge],Ms=ge+1<G?u[ge+1].el:y;Mt[A]===0?E(null,Me,p,Ms,v,_,w,x,C):Oe&&(z<0||A!==Ds[z]?Te(Me,p,Ms,2):z--)}}},Te=(c,u,p,y,v=null)=>{const{el:_,type:w,transition:x,children:C,shapeFlag:A}=c;if(A&6){Te(c.component.subTree,u,p,y);return}if(A&128){c.suspense.move(u,p,y);return}if(A&64){w.move(c,u,p,M);return}if(w===Ce){s(_,u,p);for(let P=0;P<C.length;P++)Te(C[P],u,p,y);s(c.anchor,u,p);return}if(w===Nn){H(c,u,p);return}if(y!==2&&A&1&&x)if(y===0)x.beforeEnter(_),s(_,u,p),ye(()=>x.enter(_),v);else{const{leave:P,delayLeave:j,afterLeave:B}=x,N=()=>s(_,u,p),Q=()=>{P(_,()=>{N(),B&&B()})};j?j(_,N,Q):Q()}else s(_,u,p)},de=(c,u,p,y=!1,v=!1)=>{const{type:_,props:w,ref:x,children:C,dynamicChildren:A,shapeFlag:G,patchFlag:P,dirs:j,cacheIndex:B}=c;if(P===-2&&(v=!1),x!=null&&gn(x,null,p,c,!0),B!=null&&(u.renderCache[B]=void 0),G&256){u.ctx.deactivate(c);return}const N=G&1&&j,Q=!Kt(c);let z;if(Q&&(z=w&&w.onVnodeBeforeUnmount)&&je(z,u,c),G&6)rn(c.component,p,y);else{if(G&128){c.suspense.unmount(p,y);return}N&&lt(c,null,u,"beforeUnmount"),G&64?c.type.remove(c,u,p,M,y):A&&!A.hasOnce&&(_!==Ce||P>0&&P&64)?Ae(A,u,p,!1,!0):(_===Ce&&P&384||!v&&G&16)&&Ae(C,u,p),y&&bt(c)}(Q&&(z=w&&w.onVnodeUnmounted)||N)&&ye(()=>{z&&je(z,u,c),N&&lt(c,null,u,"unmounted")},p)},bt=c=>{const{type:u,el:p,anchor:y,transition:v}=c;if(u===Ce){_t(p,y);return}if(u===Nn){D(c);return}const _=()=>{r(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:w,delayLeave:x}=v,C=()=>w(p,_);x?x(c.el,_,C):C()}else _()},_t=(c,u)=>{let p;for(;c!==u;)p=m(c),r(c),c=p;r(u)},rn=(c,u,p)=>{const{bum:y,scope:v,job:_,subTree:w,um:x,m:C,a:A}=c;Vs(C),Vs(A),y&&cn(y),v.stop(),_&&(_.flags|=8,de(w,c,u,p)),x&&ye(x,u),ye(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ae=(c,u,p,y=!1,v=!1,_=0)=>{for(let w=_;w<c.length;w++)de(c[w],u,p,y,v)},b=c=>{if(c.shapeFlag&6)return b(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=m(c.anchor||c.el),p=u&&u[Lo];return p?m(p):u};let T=!1;const F=(c,u,p)=>{c==null?u._vnode&&de(u._vnode,null,null,!0):E(u._vnode||null,c,u,null,null,null,p),u._vnode=c,T||(T=!0,Bs(),si(),T=!1)},M={p:E,um:de,m:Te,r:bt,mt:Dt,mc:Fe,pc:K,pbc:Re,n:b,o:e};return{render:F,hydrate:void 0,createApp:ca(F)}}function Ln({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ct({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ba(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ci(e,t,n=!1){const s=e.children,r=t.children;if(I(s)&&I(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=et(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ci(o,a)),a.type===Pn&&(a.el=o.el)}}function _a(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<d?i=a+1:o=a;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function xi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xi(t)}function Vs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const va=Symbol.for("v-scx"),Aa=()=>Ie(va);function Rt(e,t,n){return wi(e,t,n)}function wi(e,t,n=Y){const{immediate:s,deep:r,flush:i,once:o}=n,a=ce({},n),l=t&&s||!t&&i!=="post";let d;if(Zt){if(i==="sync"){const g=Aa();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Be,g.resume=Be,g.pause=Be,g}}const f=ae;a.call=(g,S,E)=>Le(g,f,S,E);let h=!1;i==="post"?a.scheduler=g=>{ye(g,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(g,S)=>{S?g():Ss(g)}),a.augmentJob=g=>{t&&(g.flags|=4),h&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const m=jo(e,t,a);return Zt&&(d?d.push(m):l&&m()),m}function Ea(e,t,n){const s=this.proxy,r=ne(e)?e.includes(".")?ki(s,e):()=>s[e]:e.bind(s,s);let i;L(t)?i=t:(i=t.handler,n=t);const o=sn(this),a=wi(r,i.bind(s),n);return o(),a}function ki(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Sa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Se(t)}Modifiers`]||e[`${gt(t)}Modifiers`];function Ca(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Y;let r=n;const i=t.startsWith("update:"),o=i&&Sa(s,t.slice(7));o&&(o.trim&&(r=n.map(f=>ne(f)?f.trim():f)),o.number&&(r=n.map(Jn)));let a,l=s[a=Mn(t)]||s[a=Mn(Se(t))];!l&&i&&(l=s[a=Mn(gt(t))]),l&&Le(l,e,6,r);const d=s[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Le(d,e,6,r)}}function Fi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!L(e)){const l=d=>{const f=Fi(d,t,!0);f&&(a=!0,ce(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(X(e)&&s.set(e,null),null):(I(i)?i.forEach(l=>o[l]=null):ce(o,i),X(e)&&s.set(e,o),o)}function Rn(e,t){return!e||!vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,gt(t))||V(e,t))}function Ws(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:d,renderCache:f,props:h,data:m,setupState:g,ctx:S,inheritAttrs:E}=e,O=mn(e);let k,R;try{if(n.shapeFlag&4){const D=r||s,W=D;k=Ge(d.call(W,D,f,h,g,m,S)),R=a}else{const D=t;k=Ge(D.length>1?D(h,{attrs:a,slots:o,emit:l}):D(h,null)),R=t.props?a:xa(a)}}catch(D){Ut.length=0,wn(D,e,1),k=he(Yt)}let H=k;if(R&&E!==!1){const D=Object.keys(R),{shapeFlag:W}=H;D.length&&W&7&&(i&&D.some(fs)&&(R=wa(R,i)),H=Pt(H,R,!1,!0))}return n.dirs&&(H=Pt(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&xs(H,n.transition),k=H,mn(O),k}const xa=e=>{let t;for(const n in e)(n==="class"||n==="style"||vn(n))&&((t||(t={}))[n]=e[n]);return t},wa=(e,t)=>{const n={};for(const s in e)(!fs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ka(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?zs(s,o,d):!!o;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const m=f[h];if(o[m]!==s[m]&&!Rn(d,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zs(s,o,d):!0:!!o;return!1}function zs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Rn(n,i))return!0}return!1}function Fa({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ri=e=>e.__isSuspense;function Ra(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):Bo(e)}const Ce=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Nn=Symbol.for("v-stc"),Ut=[];let ve=null;function ze(e=!1){Ut.push(ve=e?null:[])}function Pa(){Ut.pop(),ve=Ut[Ut.length-1]||null}let Qt=1;function Js(e,t=!1){Qt+=e,e<0&&ve&&t&&(ve.hasOnce=!0)}function Pi(e){return e.dynamicChildren=Qt>0?ve||Ct:null,Pa(),Qt>0&&ve&&ve.push(e),e}function pt(e,t,n,s,r,i){return Pi(re(e,t,n,s,r,i,!0))}function Ti(e,t,n,s,r){return Pi(he(e,t,n,s,r,!0))}function bn(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Oi=({key:e})=>e??null,fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||le(e)||L(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function re(e,t=null,n=null,s=0,r=null,i=e===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oi(t),ref:t&&fn(t),scopeId:ii,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_e};return a?(Fs(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Qt>0&&!o&&ve&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ve.push(l),l}const he=Ta;function Ta(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===ea)&&(e=Yt),bn(e)){const a=Pt(e,t,!0);return n&&Fs(a,n),Qt>0&&!i&&ve&&(a.shapeFlag&6?ve[ve.indexOf(e)]=a:ve.push(a)),a.patchFlag=-2,a}if(Ka(e)&&(e=e.__vccOpts),t){t=Oa(t);let{class:a,style:l}=t;a&&!ne(a)&&(t.class=ms(a)),X(l)&&(Es(l)&&!I(l)&&(l=ce({},l)),t.style=ps(l))}const o=ne(e)?1:Ri(e)?128:No(e)?64:X(e)?4:L(e)?2:0;return re(e,t,n,s,r,o,i,!0)}function Oa(e){return e?Es(e)||yi(e)?ce({},e):e:null}function Pt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=e,d=t?Da(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Oi(d),ref:t&&t.ref?n&&i?I(i)?i.concat(fn(t)):[i,fn(t)]:fn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&xs(f,l.clone(f)),f}function Tn(e=" ",t=0){return he(Pn,null,e,t)}function Ge(e){return e==null||typeof e=="boolean"?he(Yt):I(e)?he(Ce,null,e.slice()):bn(e)?et(e):he(Pn,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function Fs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Fs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!yi(t)?t._ctx=_e:r===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),s&64?(n=16,t=[Tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Da(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ms([t.class,s.class]));else if(r==="style")t.style=ps([t.style,s.style]);else if(vn(r)){const i=t[r],o=s[r];o&&i!==o&&!(I(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function je(e,t,n,s=null){Le(e,t,7,[n,s])}const Ma=pi();let ja=0;function Ha(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ma,i={uid:ja++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ao(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_i(s,r),emitsOptions:Fi(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ca.bind(null,i),e.ce&&e.ce(i),i}let ae=null,_n,rs;{const e=Cn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};_n=t("__VUE_INSTANCE_SETTERS__",n=>ae=n),rs=t("__VUE_SSR_SETTERS__",n=>Zt=n)}const sn=e=>{const t=ae;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},qs=()=>{ae&&ae.scope.off(),_n(null)};function Di(e){return e.vnode.shapeFlag&4}let Zt=!1;function Ga(e,t=!1,n=!1){t&&rs(t);const{props:s,children:r}=e.vnode,i=Di(e);ua(e,s,i,t),pa(e,r,n);const o=i?Ba(e,t):void 0;return t&&rs(!1),o}function Ba(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,na);const{setup:s}=n;if(s){it();const r=e.setupContext=s.length>1?La(e):null,i=sn(e),o=nn(s,e,0,[e.props,r]),a=Rr(o);if(ot(),i(),(a||e.sp)&&!Kt(e)&&ai(e),a){if(o.then(qs,qs),t)return o.then(l=>{Ys(e,l)}).catch(l=>{wn(l,e,0)});e.asyncDep=o}else Ys(e,o)}else Mi(e)}function Ys(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Xr(t)),Mi(e)}function Mi(e,t,n){const s=e.type;e.render||(e.render=s.render||Be);{const r=sn(e);it();try{sa(e)}finally{ot(),r()}}}const Ia={get(e,t){return ie(e,"get",""),e[t]}};function La(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ia),slots:e.slots,emit:e.emit,expose:t}}function On(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xr(Fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}})):e.proxy}function Na(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Ka(e){return L(e)&&"__vccOpts"in e}const xe=(e,t)=>Do(e,t,Zt);function ji(e,t,n){const s=arguments.length;return s===2?X(t)&&!I(t)?bn(t)?he(e,null,[t]):he(e,t):he(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bn(n)&&(n=[n]),he(e,t,n))}const $a="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let is;const Qs=typeof window<"u"&&window.trustedTypes;if(Qs)try{is=Qs.createPolicy("vue",{createHTML:e=>e})}catch{}const Hi=is?e=>is.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",Va="http://www.w3.org/1998/Math/MathML",Ue=typeof document<"u"?document:null,Zs=Ue&&Ue.createElement("template"),Wa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Ue.createElementNS(Ua,e):t==="mathml"?Ue.createElementNS(Va,e):n?Ue.createElement(e,{is:n}):Ue.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ue.createTextNode(e),createComment:e=>Ue.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ue.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Zs.innerHTML=Hi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Zs.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},za=Symbol("_vtc");function Ja(e,t,n){const s=e[za];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xs=Symbol("_vod"),qa=Symbol("_vsh"),Ya=Symbol(""),Qa=/(^|;)\s*display\s*:/;function Za(e,t,n){const s=e.style,r=ne(n);let i=!1;if(n&&!r){if(t)if(ne(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hn(s,a,"")}else for(const o in t)n[o]==null&&hn(s,o,"");for(const o in n)o==="display"&&(i=!0),hn(s,o,n[o])}else if(r){if(t!==n){const o=s[Ya];o&&(n+=";"+o),s.cssText=n,i=Qa.test(n)}}else t&&e.removeAttribute("style");Xs in e&&(e[Xs]=i?s.display:"",e[qa]&&(s.display="none"))}const er=/\s*!important$/;function hn(e,t,n){if(I(n))n.forEach(s=>hn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Xa(e,t);er.test(n)?e.setProperty(gt(s),n.replace(er,""),"important"):e[s]=n}}const tr=["Webkit","Moz","ms"],Kn={};function Xa(e,t){const n=Kn[t];if(n)return n;let s=Se(t);if(s!=="filter"&&s in e)return Kn[t]=s;s=Sn(s);for(let r=0;r<tr.length;r++){const i=tr[r]+s;if(i in e)return Kn[t]=i}return t}const nr="http://www.w3.org/1999/xlink";function sr(e,t,n,s,r,i=oo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(nr,t.slice(6,t.length)):e.setAttributeNS(nr,t,n):n==null||i&&!Dr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":rt(n)?String(n):n)}function rr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Hi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Dr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Et(e,t,n,s){e.addEventListener(t,n,s)}function el(e,t,n,s){e.removeEventListener(t,n,s)}const ir=Symbol("_vei");function tl(e,t,n,s,r=null){const i=e[ir]||(e[ir]={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=nl(t);if(s){const d=i[t]=il(s,r);Et(e,a,d,l)}else o&&(el(e,a,o,l),i[t]=void 0)}}const or=/(?:Once|Passive|Capture)$/;function nl(e){let t;if(or.test(e)){t={};let s;for(;s=e.match(or);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let $n=0;const sl=Promise.resolve(),rl=()=>$n||(sl.then(()=>$n=0),$n=Date.now());function il(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Le(ol(s,n.value),t,5,[s])};return n.value=e,n.attached=rl(),n}function ol(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ar=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,al=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Ja(e,s,o):t==="style"?Za(e,n,s):vn(t)?fs(t)||tl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ll(e,t,s,o))?(rr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&sr(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ne(s))?rr(e,Se(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),sr(e,t,s,o))};function ll(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ar(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ar(t)&&ne(n)?!1:t in e}const lr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return I(t)?n=>cn(t,n):t};function cl(e){e.target.composing=!0}function cr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),ul={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Un]=lr(r);const i=s||r.props&&r.props.type==="number";Et(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Jn(a)),e[Un](a)}),n&&Et(e,"change",()=>{e.value=e.value.trim()}),t||(Et(e,"compositionstart",cl),Et(e,"compositionend",cr),Et(e,"change",cr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Un]=lr(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Jn(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},fl=ce({patchProp:al},Wa);let ur;function hl(){return ur||(ur=ga(fl))}const dl=(...e)=>{const t=hl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=ml(s);if(!r)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,pl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function pl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ml(e){return ne(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const St=typeof document<"u";function Gi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function gl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gi(e.default)}const $=Object.assign;function Vn(e,t){const n={};for(const s in t){const r=t[s];n[s]=ke(r)?r.map(e):e(r)}return n}const Vt=()=>{},ke=Array.isArray,Bi=/#/g,yl=/&/g,bl=/\//g,_l=/=/g,vl=/\?/g,Ii=/\+/g,Al=/%5B/g,El=/%5D/g,Li=/%5E/g,Sl=/%60/g,Ni=/%7B/g,Cl=/%7C/g,Ki=/%7D/g,xl=/%20/g;function Rs(e){return encodeURI(""+e).replace(Cl,"|").replace(Al,"[").replace(El,"]")}function wl(e){return Rs(e).replace(Ni,"{").replace(Ki,"}").replace(Li,"^")}function os(e){return Rs(e).replace(Ii,"%2B").replace(xl,"+").replace(Bi,"%23").replace(yl,"%26").replace(Sl,"`").replace(Ni,"{").replace(Ki,"}").replace(Li,"^")}function kl(e){return os(e).replace(_l,"%3D")}function Fl(e){return Rs(e).replace(Bi,"%23").replace(vl,"%3F")}function Rl(e){return e==null?"":Fl(e).replace(bl,"%2F")}function Xt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pl=/\/$/,Tl=e=>e.replace(Pl,"");function Wn(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=jl(s??t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Xt(o)}}function Ol(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function fr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dl(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Tt(t.matched[s],n.matched[r])&&$i(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Tt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $i(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ml(e[n],t[n]))return!1;return!0}function Ml(e,t){return ke(e)?hr(e,t):ke(t)?hr(t,e):e===t}function hr(e,t){return ke(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function jl(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var en;(function(e){e.pop="pop",e.push="push"})(en||(en={}));var Wt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Wt||(Wt={}));function Hl(e){if(!e)if(St){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tl(e)}const Gl=/^[^#]+#/;function Bl(e,t){return e.replace(Gl,"#")+t}function Il(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Dn=()=>({left:window.scrollX,top:window.scrollY});function Ll(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Il(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function dr(e,t){return(history.state?history.state.position-t:-1)+e}const as=new Map;function Nl(e,t){as.set(e,t)}function Kl(e){const t=as.get(e);return as.delete(e),t}let $l=()=>location.protocol+"//"+location.host;function Ui(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),fr(l,"")}return fr(n,e)+s+r}function Ul(e,t,n,s){let r=[],i=[],o=null;const a=({state:m})=>{const g=Ui(e,location),S=n.value,E=t.value;let O=0;if(m){if(n.value=g,t.value=m,o&&o===S){o=null;return}O=E?m.position-E.position:0}else s(g);r.forEach(k=>{k(n.value,S,{delta:O,type:en.pop,direction:O?O>0?Wt.forward:Wt.back:Wt.unknown})})};function l(){o=n.value}function d(m){r.push(m);const g=()=>{const S=r.indexOf(m);S>-1&&r.splice(S,1)};return i.push(g),g}function f(){const{history:m}=window;m.state&&m.replaceState($({},m.state,{scroll:Dn()}),"")}function h(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:d,destroy:h}}function pr(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Dn():null}}function Vl(e){const{history:t,location:n}=window,s={value:Ui(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,d,f){const h=e.indexOf("#"),m=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:$l()+e+l;try{t[f?"replaceState":"pushState"](d,"",m),r.value=d}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(l,d){const f=$({},t.state,pr(r.value.back,l,r.value.forward,!0),d,{position:r.value.position});i(l,f,!0),s.value=l}function a(l,d){const f=$({},r.value,t.state,{forward:l,scroll:Dn()});i(f.current,f,!0);const h=$({},pr(s.value,l,null),{position:f.position+1},d);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Wl(e){e=Hl(e);const t=Vl(e),n=Ul(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=$({location:"",base:e,go:s,createHref:Bl.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function zl(e){return typeof e=="string"||e&&typeof e=="object"}function Vi(e){return typeof e=="string"||typeof e=="symbol"}const Wi=Symbol("");var mr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mr||(mr={}));function Ot(e,t){return $(new Error,{type:e,[Wi]:!0},t)}function $e(e,t){return e instanceof Error&&Wi in e&&(t==null||!!(e.type&t))}const gr="[^/]+?",Jl={sensitive:!1,strict:!1,start:!0,end:!0},ql=/[.+*?^${}()[\]/\\]/g;function Yl(e,t){const n=$({},Jl,t),s=[];let r=n.start?"^":"";const i=[];for(const d of e){const f=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let h=0;h<d.length;h++){const m=d[h];let g=40+(n.sensitive?.25:0);if(m.type===0)h||(r+="/"),r+=m.value.replace(ql,"\\$&"),g+=40;else if(m.type===1){const{value:S,repeatable:E,optional:O,regexp:k}=m;i.push({name:S,repeatable:E,optional:O});const R=k||gr;if(R!==gr){g+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${S}" (${R}): `+D.message)}}let H=E?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(H=O&&d.length<2?`(?:/${H})`:"/"+H),O&&(H+="?"),r+=H,g+=20,O&&(g+=-8),E&&(g+=-20),R===".*"&&(g+=-50)}f.push(g)}s.push(f)}if(n.strict&&n.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(d){const f=d.match(o),h={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",S=i[m-1];h[S.name]=g&&S.repeatable?g.split("/"):g}return h}function l(d){let f="",h=!1;for(const m of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of m)if(g.type===0)f+=g.value;else if(g.type===1){const{value:S,repeatable:E,optional:O}=g,k=S in d?d[S]:"";if(ke(k)&&!E)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const R=ke(k)?k.join("/"):k;if(!R)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=R}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Ql(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function zi(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Ql(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(yr(s))return 1;if(yr(r))return-1}return r.length-s.length}function yr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Zl={type:0,value:""},Xl=/[a-zA-Z0-9_]/;function ec(e){if(!e)return[[]];if(e==="/")return[[Zl]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${d}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,d="",f="";function h(){d&&(n===0?i.push({type:0,value:d}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),d="")}function m(){d+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(d&&h(),o()):l===":"?(h(),n=1):m();break;case 4:m(),n=s;break;case 1:l==="("?n=2:Xl.test(l)?m():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),o(),r}function tc(e,t,n){const s=Yl(ec(e.path),n),r=$(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function nc(e,t){const n=[],s=new Map;t=Ar({strict:!1,end:!0,sensitive:!1},t);function r(h){return s.get(h)}function i(h,m,g){const S=!g,E=_r(h);E.aliasOf=g&&g.record;const O=Ar(t,h),k=[E];if("alias"in h){const D=typeof h.alias=="string"?[h.alias]:h.alias;for(const W of D)k.push(_r($({},E,{components:g?g.record.components:E.components,path:W,aliasOf:g?g.record:E})))}let R,H;for(const D of k){const{path:W}=D;if(m&&W[0]!=="/"){const te=m.record.path,ee=te[te.length-1]==="/"?"":"/";D.path=m.record.path+(W&&ee+W)}if(R=tc(D,m,O),g?g.alias.push(R):(H=H||R,H!==R&&H.alias.push(R),S&&h.name&&!vr(R)&&o(h.name)),Ji(R)&&l(R),E.children){const te=E.children;for(let ee=0;ee<te.length;ee++)i(te[ee],R,g&&g.children[ee])}g=g||R}return H?()=>{o(H)}:Vt}function o(h){if(Vi(h)){const m=s.get(h);m&&(s.delete(h),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(h);m>-1&&(n.splice(m,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const m=ic(h,n);n.splice(m,0,h),h.record.name&&!vr(h)&&s.set(h.record.name,h)}function d(h,m){let g,S={},E,O;if("name"in h&&h.name){if(g=s.get(h.name),!g)throw Ot(1,{location:h});O=g.record.name,S=$(br(m.params,g.keys.filter(H=>!H.optional).concat(g.parent?g.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),h.params&&br(h.params,g.keys.map(H=>H.name))),E=g.stringify(S)}else if(h.path!=null)E=h.path,g=n.find(H=>H.re.test(E)),g&&(S=g.parse(E),O=g.record.name);else{if(g=m.name?s.get(m.name):n.find(H=>H.re.test(m.path)),!g)throw Ot(1,{location:h,currentLocation:m});O=g.record.name,S=$({},m.params,h.params),E=g.stringify(S)}const k=[];let R=g;for(;R;)k.unshift(R.record),R=R.parent;return{name:O,path:E,params:S,matched:k,meta:rc(k)}}e.forEach(h=>i(h));function f(){n.length=0,s.clear()}return{addRoute:i,resolve:d,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:r}}function br(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function _r(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:sc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function sc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function vr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rc(e){return e.reduce((t,n)=>$(t,n.meta),{})}function Ar(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function ic(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;zi(e,t[i])<0?s=i:n=i+1}const r=oc(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function oc(e){let t=e;for(;t=t.parent;)if(Ji(t)&&zi(e,t)===0)return t}function Ji({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ac(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ii," "),o=i.indexOf("="),a=Xt(o<0?i:i.slice(0,o)),l=o<0?null:Xt(i.slice(o+1));if(a in t){let d=t[a];ke(d)||(d=t[a]=[d]),d.push(l)}else t[a]=l}return t}function Er(e){let t="";for(let n in e){const s=e[n];if(n=kl(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ke(s)?s.map(i=>i&&os(i)):[s&&os(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function lc(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ke(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const cc=Symbol(""),Sr=Symbol(""),Ps=Symbol(""),Ts=Symbol(""),ls=Symbol("");function Gt(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tt(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const d=m=>{m===!1?l(Ot(4,{from:n,to:t})):m instanceof Error?l(m):zl(m)?l(Ot(2,{from:t,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),a())},f=i(()=>e.call(s&&s.instances[r],t,n,d));let h=Promise.resolve(f);e.length<3&&(h=h.then(d)),h.catch(m=>l(m))})}function zn(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Gi(l)){const f=(l.__vccOpts||l)[t];f&&i.push(tt(f,n,s,o,a,r))}else{let d=l();i.push(()=>d.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=gl(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const g=(h.__vccOpts||h)[t];return g&&tt(g,n,s,o,a,r)()}))}}return i}function Cr(e){const t=Ie(Ps),n=Ie(Ts),s=xe(()=>{const l=dt(e.to);return t.resolve(l)}),r=xe(()=>{const{matched:l}=s.value,{length:d}=l,f=l[d-1],h=n.matched;if(!f||!h.length)return-1;const m=h.findIndex(Tt.bind(null,f));if(m>-1)return m;const g=xr(l[d-2]);return d>1&&xr(f)===g&&h[h.length-1].path!==g?h.findIndex(Tt.bind(null,l[d-2])):m}),i=xe(()=>r.value>-1&&pc(n.params,s.value.params)),o=xe(()=>r.value>-1&&r.value===n.matched.length-1&&$i(n.params,s.value.params));function a(l={}){if(dc(l)){const d=t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(Vt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:s,href:xe(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function uc(e){return e.length===1?e[0]:e}const fc=oi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cr,setup(e,{slots:t}){const n=tn(Cr(e)),{options:s}=Ie(Ps),r=xe(()=>({[wr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&uc(t.default(n));return e.custom?i:ji("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),hc=fc;function dc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pc(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ke(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function xr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wr=(e,t,n)=>e??t??n,mc=oi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ie(ls),r=xe(()=>e.route||s.value),i=Ie(Sr,0),o=xe(()=>{let d=dt(i);const{matched:f}=r.value;let h;for(;(h=f[d])&&!h.components;)d++;return d}),a=xe(()=>r.value.matched[o.value]);un(Sr,xe(()=>o.value+1)),un(cc,a),un(ls,r);const l=nt();return Rt(()=>[l.value,a.value,e.name],([d,f,h],[m,g,S])=>{f&&(f.instances[h]=d,g&&g!==f&&d&&d===m&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),d&&f&&(!g||!Tt(f,g)||!m)&&(f.enterCallbacks[h]||[]).forEach(E=>E(d))},{flush:"post"}),()=>{const d=r.value,f=e.name,h=a.value,m=h&&h.components[f];if(!m)return kr(n.default,{Component:m,route:d});const g=h.props[f],S=g?g===!0?d.params:typeof g=="function"?g(d):g:null,O=ji(m,$({},S,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return kr(n.default,{Component:O,route:d})||O}}});function kr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gc=mc;function yc(e){const t=nc(e.routes,e),n=e.parseQuery||ac,s=e.stringifyQuery||Er,r=e.history,i=Gt(),o=Gt(),a=Gt(),l=Ro(Ze);let d=Ze;St&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Vn.bind(null,b=>""+b),h=Vn.bind(null,Rl),m=Vn.bind(null,Xt);function g(b,T){let F,M;return Vi(b)?(F=t.getRecordMatcher(b),M=T):M=b,t.addRoute(M,F)}function S(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function E(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function k(b,T){if(T=$({},T||l.value),typeof b=="string"){const p=Wn(n,b,T.path),y=t.resolve({path:p.path},T),v=r.createHref(p.fullPath);return $(p,y,{params:m(y.params),hash:Xt(p.hash),redirectedFrom:void 0,href:v})}let F;if(b.path!=null)F=$({},b,{path:Wn(n,b.path,T.path).path});else{const p=$({},b.params);for(const y in p)p[y]==null&&delete p[y];F=$({},b,{params:h(p)}),T.params=h(T.params)}const M=t.resolve(F,T),q=b.hash||"";M.params=f(m(M.params));const c=Ol(s,$({},b,{hash:wl(q),path:M.path})),u=r.createHref(c);return $({fullPath:c,hash:q,query:s===Er?lc(b.query):b.query||{}},M,{redirectedFrom:void 0,href:u})}function R(b){return typeof b=="string"?Wn(n,b,l.value.path):$({},b)}function H(b,T){if(d!==b)return Ot(8,{from:T,to:b})}function D(b){return ee(b)}function W(b){return D($(R(b),{replace:!0}))}function te(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:F}=T;let M=typeof F=="function"?F(b):F;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=R(M):{path:M},M.params={}),$({query:b.query,hash:b.hash,params:M.path!=null?{}:b.params},M)}}function ee(b,T){const F=d=k(b),M=l.value,q=b.state,c=b.force,u=b.replace===!0,p=te(F);if(p)return ee($(R(p),{state:typeof p=="object"?$({},q,p.state):q,force:c,replace:u}),T||F);const y=F;y.redirectedFrom=T;let v;return!c&&Dl(s,M,F)&&(v=Ot(16,{to:y,from:M}),Te(M,M,!0,!1)),(v?Promise.resolve(v):Re(y,M)).catch(_=>$e(_)?$e(_,2)?_:Qe(_):K(_,y,M)).then(_=>{if(_){if($e(_,2))return ee($({replace:u},R(_.to),{state:typeof _.to=="object"?$({},q,_.to.state):q,force:c}),T||y)}else _=at(y,M,!0,u,q);return Ye(y,M,_),_})}function Fe(b,T){const F=H(b,T);return F?Promise.reject(F):Promise.resolve()}function qe(b){const T=_t.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Re(b,T){let F;const[M,q,c]=bc(b,T);F=zn(M.reverse(),"beforeRouteLeave",b,T);for(const p of M)p.leaveGuards.forEach(y=>{F.push(tt(y,b,T))});const u=Fe.bind(null,b,T);return F.push(u),Ae(F).then(()=>{F=[];for(const p of i.list())F.push(tt(p,b,T));return F.push(u),Ae(F)}).then(()=>{F=zn(q,"beforeRouteUpdate",b,T);for(const p of q)p.updateGuards.forEach(y=>{F.push(tt(y,b,T))});return F.push(u),Ae(F)}).then(()=>{F=[];for(const p of c)if(p.beforeEnter)if(ke(p.beforeEnter))for(const y of p.beforeEnter)F.push(tt(y,b,T));else F.push(tt(p.beforeEnter,b,T));return F.push(u),Ae(F)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),F=zn(c,"beforeRouteEnter",b,T,qe),F.push(u),Ae(F))).then(()=>{F=[];for(const p of o.list())F.push(tt(p,b,T));return F.push(u),Ae(F)}).catch(p=>$e(p,8)?p:Promise.reject(p))}function Ye(b,T,F){a.list().forEach(M=>qe(()=>M(b,T,F)))}function at(b,T,F,M,q){const c=H(b,T);if(c)return c;const u=T===Ze,p=St?history.state:{};F&&(M||u?r.replace(b.fullPath,$({scroll:u&&p&&p.scroll},q)):r.push(b.fullPath,q)),l.value=b,Te(b,T,F,u),Qe()}let Pe;function Dt(){Pe||(Pe=r.listen((b,T,F)=>{if(!rn.listening)return;const M=k(b),q=te(M);if(q){ee($(q,{replace:!0,force:!0}),M).catch(Vt);return}d=M;const c=l.value;St&&Nl(dr(c.fullPath,F.delta),Dn()),Re(M,c).catch(u=>$e(u,12)?u:$e(u,2)?(ee($(R(u.to),{force:!0}),M).then(p=>{$e(p,20)&&!F.delta&&F.type===en.pop&&r.go(-1,!1)}).catch(Vt),Promise.reject()):(F.delta&&r.go(-F.delta,!1),K(u,M,c))).then(u=>{u=u||at(M,c,!1),u&&(F.delta&&!$e(u,8)?r.go(-F.delta,!1):F.type===en.pop&&$e(u,20)&&r.go(-1,!1)),Ye(M,c,u)}).catch(Vt)}))}let yt=Gt(),se=Gt(),J;function K(b,T,F){Qe(b);const M=se.list();return M.length?M.forEach(q=>q(b,T,F)):console.error(b),Promise.reject(b)}function Ne(){return J&&l.value!==Ze?Promise.resolve():new Promise((b,T)=>{yt.add([b,T])})}function Qe(b){return J||(J=!b,Dt(),yt.list().forEach(([T,F])=>b?F(b):T()),yt.reset()),b}function Te(b,T,F,M){const{scrollBehavior:q}=e;if(!St||!q)return Promise.resolve();const c=!F&&Kl(dr(b.fullPath,0))||(M||!F)&&history.state&&history.state.scroll||null;return ti().then(()=>q(b,T,c)).then(u=>u&&Ll(u)).catch(u=>K(u,b,T))}const de=b=>r.go(b);let bt;const _t=new Set,rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:E,resolve:k,options:e,push:D,replace:W,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Ne,install(b){const T=this;b.component("RouterLink",hc),b.component("RouterView",gc),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),St&&!bt&&l.value===Ze&&(bt=!0,D(r.location).catch(q=>{}));const F={};for(const q in Ze)Object.defineProperty(F,q,{get:()=>l.value[q],enumerable:!0});b.provide(Ps,T),b.provide(Ts,Yr(F)),b.provide(ls,l);const M=b.unmount;_t.add(b),b.unmount=function(){_t.delete(b),_t.size<1&&(d=Ze,Pe&&Pe(),Pe=null,l.value=Ze,bt=!1,J=!1),M()}}};function Ae(b){return b.reduce((T,F)=>T.then(()=>qe(F)),Promise.resolve())}return rn}function bc(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(d=>Tt(d,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(d=>Tt(d,l))||r.push(l))}return[n,s,r]}function qi(e){return Ie(Ts)}const _c={__name:"App",setup(e){const t=qi();return Rt(()=>t.fullPath,n=>{console.log("Route changed to:",n)}),(n,s)=>{const r=ws("router-view");return ze(),Ti(r,{key:n.$route.fullPath})}}},vc={id:"90s-mashup",title:"90s Mashup",bpm:88,chords:["Am","G","Em","C","F"],songs:[{title:"Woh Pehli Baar",lyrics:`
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
Sanam`}]},Ac={id:"retro-mashup",title:"Retro Mashup",bpm:88,chords:["F#","B","C#","D#m","G#","G#m","A#m","E","D"],songs:[{title:"Ek Ajnabee Haseena Se",lyrics:`
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
chod do aanchal zamana kya kahega`}]},cs=[Ac,vc],Ec={style:{padding:"2rem"}},Sc={__name:"Home",setup(e){return(t,n)=>{const s=ws("router-link");return ze(),pt("div",Ec,[n[0]||(n[0]=re("h1",null,"Repertoire",-1)),re("ul",null,[(ze(!0),pt(Ce,null,fi(dt(cs),r=>(ze(),pt("li",{key:r.id},[he(s,{to:`/song/${r.id}`},{default:Cs(()=>[Tn(ft(r.title),1)]),_:2},1032,["to"])]))),128))])])}}},Os=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Cc={class:"song-block"},xc={class:"song-title"},wc=["innerHTML"],kc={__name:"SongBlock",props:{title:String,lyrics:String},setup(e){return(t,n)=>(ze(),pt("div",Cc,[re("h2",xc,ft(e.title),1),re("pre",{class:"lyrics",innerHTML:e.lyrics},null,8,wc)]))}},Fc=Os(kc,[["__scopeId","data-v-a625e8f5"]]),Rc={class:"controls-bar"},Pc={style:{"margin-left":"1rem"}},Tc={__name:"FooterControls",props:{originalLyrics:Array,transpositionOffset:Number},emits:["updateLyrics","updateOffset"],setup(e,{expose:t,emit:n}){const s=e,r=n,i=nt(1),o=nt(!1);let a=null,l=window.scrollY;function d(){o.value&&(l+=i.value*.2,window.scrollTo(0,l),a=requestAnimationFrame(d))}function f(){o.value?(cancelAnimationFrame(a),o.value=!1):(l=window.scrollY,o.value=!0,d())}const h=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function m(S,E){const O=S.match(/\[([A-G][#b]?)([^]]*)\]/);if(!O)return S;let k=O[1];const R=O[2];k={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"}[k]||k;const D=h.indexOf(k);if(D===-1)return S;const W=(D+E+h.length)%h.length,te=h[W];return console.log("Transpose chord ",S," with offset ",E," to get this: ",`[${te}${R}]`),`[${te}${R}]`}function g(S){const E=s.transpositionOffset+S;r("updateOffset",E);const O=s.originalLyrics.map(k=>k.replace(/\[[A-G][#b]*[^]]*\]/g,R=>m(R,E)));r("updateLyrics",O)}return Fn(()=>{cancelAnimationFrame(a)}),t({toggleScroll:f}),(S,E)=>(ze(),pt("div",Rc,[re("button",{onClick:E[0]||(E[0]=O=>g(1))},"TRANS +"),re("button",{onClick:E[1]||(E[1]=O=>g(-1))},"TRANS −"),re("button",{onClick:f},ft(o.value?"STOP SCROLL":"START SCROLL"),1),re("label",Pc,[E[3]||(E[3]=Tn(" Speed: ")),Io(re("input",{type:"range",min:"1",max:"10","onUpdate:modelValue":E[2]||(E[2]=O=>i.value=O)},null,512),[[ul,i.value]])])]))}},Oc=Os(Tc,[["__scopeId","data-v-980afa01"]]),Dc={style:{"padding-bottom":"6rem"}},Mc={class:"header-bar"},jc={class:"content"},Hc={ref:"lyricsContainer"},Gc={__name:"Song",setup(e){const t=qi(),n=cs.find(m=>m.id===t.params.id),s=tn({...n}),r=nt(s.songs.map(m=>m.lyrics)),i=nt([]),o=nt(0);function a(){i.value=s.songs.map(m=>{const S=m.lyrics.replace(/<span class="chord">(\[[^\]]+\])<\/span>/g,"$1").replace(/\[[^\]]+\]/g,E=>`<span class="chord">${E}</span>`);return{...m,lyrics:S}})}function l(m){s.songs.forEach((g,S)=>g.lyrics=m[S]),a()}const d=nt(!1);function f(){d.value=!d.value,document.documentElement.classList.toggle("dark",d.value)}const h=nt(null);return ui(()=>{a();const m=O=>{var k,R;O.target.tagName!=="INPUT"&&((R=(k=h.value)==null?void 0:k.toggleScroll)==null||R.call(k))};let g=!1;const S=O=>{var k,R;O.target.closest(".controls-bar")||O.target.closest(".header-bar")||(g=!0,(R=(k=h.value)==null?void 0:k.toggleScroll)==null||R.call(k))},E=O=>{var k,R;if(!(O.target.closest(".controls-bar")||O.target.closest(".header-bar"))){if(g){g=!1;return}(R=(k=h.value)==null?void 0:k.toggleScroll)==null||R.call(k)}};window.addEventListener("keydown",m),document.body.addEventListener("touchstart",S),document.body.addEventListener("click",E),Fn(()=>{window.removeEventListener("keydown",m),document.body.removeEventListener("touchstart",S),document.body.removeEventListener("click",E)})}),Rt(()=>t.params.id,m=>{const g=cs.find(S=>S.id===m);Object.assign(s,g),r.value=g.songs.map(S=>S.lyrics),o.value=0,a()}),(m,g)=>{const S=ws("router-link");return ze(),pt("div",Dc,[re("div",Mc,[he(S,{to:"/",class:"back-btn"},{default:Cs(()=>g[1]||(g[1]=[Tn("⬅ Back")])),_:1}),re("button",{class:"theme-toggle",onClick:f},ft(d.value?"🌞 Light Mode":"🌙 Dark Mode"),1)]),re("div",jc,[re("h1",null,ft(s==null?void 0:s.title),1),re("p",null,"BPM: "+ft(s.bpm),1),re("div",Hc,[(ze(!0),pt(Ce,null,fi(i.value,(E,O)=>(ze(),Ti(Fc,{key:O,title:E.title,lyrics:E.lyrics},null,8,["title","lyrics"]))),128))],512)]),he(Oc,{ref_key:"footer",ref:h,originalLyrics:r.value,transpositionOffset:o.value,onUpdateLyrics:l,onUpdateOffset:g[0]||(g[0]=E=>o.value=E)},null,8,["originalLyrics","transpositionOffset"])])}}},Bc=Os(Gc,[["__scopeId","data-v-7ad2bb50"]]),Ic=[{path:"/",name:"Home",component:Sc},{path:"/song/:id",name:"Song",component:Bc,props:!0}],Lc=yc({history:Wl(),routes:Ic});dl(_c).use(Lc).mount("#app");
