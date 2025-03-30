(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function us(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Y={},Ct=[],Be=()=>{},Yr=()=>!1,vn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fs=e=>e.startsWith("onUpdate:"),ce=Object.assign,hs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qr=Object.prototype.hasOwnProperty,V=(e,t)=>Qr.call(e,t),I=Array.isArray,xt=e=>An(e)==="[object Map]",Fi=e=>An(e)==="[object Set]",N=e=>typeof e=="function",ne=e=>typeof e=="string",it=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Ri=e=>(X(e)||N(e))&&N(e.then)&&N(e.catch),Pi=Object.prototype.toString,An=e=>Pi.call(e),Zr=e=>An(e).slice(8,-1),Ti=e=>An(e)==="[object Object]",ds=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xr=/-(\w)/g,Ee=Sn(e=>e.replace(Xr,(t,n)=>n?n.toUpperCase():"")),eo=/\B([A-Z])/g,gt=Sn(e=>e.replace(eo,"-$1").toLowerCase()),En=Sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mn=Sn(e=>e?`on${En(e)}`:""),st=(e,t)=>!Object.is(e,t),cn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Oi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Jn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let js;const Cn=()=>js||(js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ps(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=ne(s)?io(s):ps(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(ne(e)||X(e))return e}const to=/;(?![^(]*\))/g,no=/:([^]+)/,so=/\/\*[^]*?\*\//g;function io(e){const t={};return e.replace(so,"").split(to).forEach(n=>{if(n){const s=n.split(no);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ms(e){let t="";if(ne(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const s=ms(e[n]);s&&(t+=s+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ro="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oo=us(ro);function Di(e){return!!e||e===""}const Mi=e=>!!(e&&e.__v_isRef===!0),ft=e=>ne(e)?e:e==null?"":I(e)||X(e)&&(e.toString===Pi||!N(e.toString))?Mi(e)?ft(e.value):JSON.stringify(e,ji,2):String(e),ji=(e,t)=>Mi(t)?ji(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[jn(s,r)+" =>"]=i,n),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jn(n))}:it(t)?jn(t):X(t)&&!I(t)&&!Ti(t)?String(t):t,jn=(e,t="")=>{var n;return it(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class ao{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function lo(){return be}let Z;const Hn=new WeakSet;class Hi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hn.has(this)&&(Hn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hs(this),Ii(this);const t=Z,n=we;Z=this,we=!0;try{return this.fn()}finally{Ni(this),Z=t,we=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bs(t);this.deps=this.depsTail=void 0,Hs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qn(this)&&this.run()}get dirty(){return qn(this)}}let Gi=0,Nt,Lt;function Bi(e,t=!1){if(e.flags|=8,t){e.next=Lt,Lt=e;return}e.next=Nt,Nt=e}function gs(){Gi++}function ys(){if(--Gi>0)return;if(Lt){let t=Lt;for(Lt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Nt;){let t=Nt;for(Nt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ii(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ni(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),bs(s),co(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function qn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Li(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Li(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zt))return;e.globalVersion=zt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!qn(e)){e.flags&=-3;return}const n=Z,s=we;Z=e,we=!0;try{Ii(e);const i=e.fn(e._value);(t.version===0||st(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Z=n,we=s,Ni(e),e.flags&=-3}}function bs(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)bs(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function co(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let we=!0;const Ki=[];function rt(){Ki.push(we),we=!1}function ot(){const e=Ki.pop();we=e===void 0?!0:e}function Hs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Z;Z=void 0;try{t()}finally{Z=n}}}let zt=0;class uo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _s{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Z||!we||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new uo(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,$i(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=s)}return n}trigger(t){this.version++,zt++,this.notify(t)}notify(t){gs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ys()}}}function $i(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)$i(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yn=new WeakMap,ht=Symbol(""),Qn=Symbol(""),Jt=Symbol("");function re(e,t,n){if(we&&Z){let s=Yn.get(e);s||Yn.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new _s),i.map=s,i.key=n),i.track()}}function Ve(e,t,n,s,i,r){const o=Yn.get(e);if(!o){zt++;return}const a=l=>{l&&l.trigger()};if(gs(),t==="clear")o.forEach(a);else{const l=I(e),h=l&&ds(n);if(l&&n==="length"){const f=Number(s);o.forEach((d,m)=>{(m==="length"||m===Jt||!it(m)&&m>=f)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(Jt)),t){case"add":l?h&&a(o.get("length")):(a(o.get(ht)),xt(e)&&a(o.get(Qn)));break;case"delete":l||(a(o.get(ht)),xt(e)&&a(o.get(Qn)));break;case"set":xt(e)&&a(o.get(ht));break}}ys()}function vt(e){const t=U(e);return t===e?t:(re(t,"iterate",Jt),Se(e)?t:t.map(oe))}function xn(e){return re(e=U(e),"iterate",Jt),e}const fo={__proto__:null,[Symbol.iterator](){return Gn(this,Symbol.iterator,oe)},concat(...e){return vt(this).concat(...e.map(t=>I(t)?vt(t):t))},entries(){return Gn(this,"entries",e=>(e[1]=oe(e[1]),e))},every(e,t){return Ke(this,"every",e,t,void 0,arguments)},filter(e,t){return Ke(this,"filter",e,t,n=>n.map(oe),arguments)},find(e,t){return Ke(this,"find",e,t,oe,arguments)},findIndex(e,t){return Ke(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ke(this,"findLast",e,t,oe,arguments)},findLastIndex(e,t){return Ke(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ke(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bn(this,"includes",e)},indexOf(...e){return Bn(this,"indexOf",e)},join(e){return vt(this).join(e)},lastIndexOf(...e){return Bn(this,"lastIndexOf",e)},map(e,t){return Ke(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return Ke(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return vt(this).toReversed()},toSorted(e){return vt(this).toSorted(e)},toSpliced(...e){return vt(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Gn(this,"values",oe)}};function Gn(e,t,n){const s=xn(e),i=s[t]();return s!==e&&!Se(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const ho=Array.prototype;function Ke(e,t,n,s,i,r){const o=xn(e),a=o!==e&&!Se(e),l=o[t];if(l!==ho[t]){const d=l.apply(e,r);return a?oe(d):d}let h=n;o!==e&&(a?h=function(d,m){return n.call(this,oe(d),m,e)}:n.length>2&&(h=function(d,m){return n.call(this,d,m,e)}));const f=l.call(o,h,s);return a&&i?i(f):f}function Gs(e,t,n,s){const i=xn(e);let r=n;return i!==e&&(Se(e)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,e)}):r=function(o,a,l){return n.call(this,o,oe(a),l,e)}),i[t](r,...s)}function Bn(e,t,n){const s=U(e);re(s,"iterate",Jt);const i=s[t](...n);return(i===-1||i===!1)&&Ss(n[0])?(n[0]=U(n[0]),s[t](...n)):i}function jt(e,t,n=[]){rt(),gs();const s=U(e)[t].apply(e,n);return ys(),ot(),s}const po=us("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(it));function mo(e){it(e)||(e=String(e));const t=U(this);return re(t,"has",e),t.hasOwnProperty(e)}class Vi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?xo:qi:r?Ji:zi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=I(t);if(!i){let l;if(o&&(l=fo[n]))return l;if(n==="hasOwnProperty")return mo}const a=Reflect.get(t,n,le(t)?t:s);return(it(n)?Ui.has(n):po(n))||(i||re(t,"get",n),r)?a:le(a)?o&&ds(n)?a:a.value:X(a)?i?Qi(a):tn(a):a}}class Wi extends Vi{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const l=mt(r);if(!Se(s)&&!mt(s)&&(r=U(r),s=U(s)),!I(t)&&le(r)&&!le(s))return l?!1:(r.value=s,!0)}const o=I(t)&&ds(n)?Number(n)<t.length:V(t,n),a=Reflect.set(t,n,s,le(t)?t:i);return t===U(i)&&(o?st(s,r)&&Ve(t,"set",n,s):Ve(t,"add",n,s)),a}deleteProperty(t,n){const s=V(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Ve(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!it(n)||!Ui.has(n))&&re(t,"has",n),s}ownKeys(t){return re(t,"iterate",I(t)?"length":ht),Reflect.ownKeys(t)}}class go extends Vi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yo=new Wi,bo=new go,_o=new Wi(!0);const Zn=e=>e,on=e=>Reflect.getPrototypeOf(e);function vo(e,t,n){return function(...s){const i=this.__v_raw,r=U(i),o=xt(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,h=i[e](...s),f=n?Zn:t?Xn:oe;return!t&&re(r,"iterate",l?Qn:ht),{next(){const{value:d,done:m}=h.next();return m?{value:d,done:m}:{value:a?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function an(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ao(e,t){const n={get(i){const r=this.__v_raw,o=U(r),a=U(i);e||(st(i,a)&&re(o,"get",i),re(o,"get",a));const{has:l}=on(o),h=t?Zn:e?Xn:oe;if(l.call(o,i))return h(r.get(i));if(l.call(o,a))return h(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&re(U(i),"iterate",ht),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=U(r),a=U(i);return e||(st(i,a)&&re(o,"has",i),re(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=U(a),h=t?Zn:e?Xn:oe;return!e&&re(l,"iterate",ht),a.forEach((f,d)=>i.call(r,h(f),h(d),o))}};return ce(n,e?{add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear")}:{add(i){!t&&!Se(i)&&!mt(i)&&(i=U(i));const r=U(this);return on(r).has.call(r,i)||(r.add(i),Ve(r,"add",i,i)),this},set(i,r){!t&&!Se(r)&&!mt(r)&&(r=U(r));const o=U(this),{has:a,get:l}=on(o);let h=a.call(o,i);h||(i=U(i),h=a.call(o,i));const f=l.call(o,i);return o.set(i,r),h?st(r,f)&&Ve(o,"set",i,r):Ve(o,"add",i,r),this},delete(i){const r=U(this),{has:o,get:a}=on(r);let l=o.call(r,i);l||(i=U(i),l=o.call(r,i)),a&&a.call(r,i);const h=r.delete(i);return l&&Ve(r,"delete",i,void 0),h},clear(){const i=U(this),r=i.size!==0,o=i.clear();return r&&Ve(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=vo(i,e,t)}),n}function vs(e,t){const n=Ao(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const So={get:vs(!1,!1)},Eo={get:vs(!1,!0)},Co={get:vs(!0,!1)};const zi=new WeakMap,Ji=new WeakMap,qi=new WeakMap,xo=new WeakMap;function wo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ko(e){return e.__v_skip||!Object.isExtensible(e)?0:wo(Zr(e))}function tn(e){return mt(e)?e:As(e,!1,yo,So,zi)}function Yi(e){return As(e,!1,_o,Eo,Ji)}function Qi(e){return As(e,!0,bo,Co,qi)}function As(e,t,n,s,i){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=ko(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function wt(e){return mt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function Se(e){return!!(e&&e.__v_isShallow)}function Ss(e){return e?!!e.__v_raw:!1}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Fo(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&Oi(e,"__v_skip",!0),e}const oe=e=>X(e)?tn(e):e,Xn=e=>X(e)?Qi(e):e;function le(e){return e?e.__v_isRef===!0:!1}function nt(e){return Zi(e,!1)}function Ro(e){return Zi(e,!0)}function Zi(e,t){return le(e)?e:new Po(e,t)}class Po{constructor(t,n){this.dep=new _s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:U(t),this._value=n?t:oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Se(t)||mt(t);t=s?t:U(t),st(t,n)&&(this._rawValue=t,this._value=s?t:oe(t),this.dep.trigger())}}function dt(e){return le(e)?e.value:e}const To={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return le(i)&&!le(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Xi(e){return wt(e)?e:new Proxy(e,To)}class Oo{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new _s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return Bi(this,!0),!0}get value(){const t=this.dep.track();return Li(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Do(e,t,n=!1){let s,i;return N(e)?s=e:(s=e.get,i=e.set),new Oo(s,i,n)}const ln={},dn=new WeakMap;let ut;function Mo(e,t=!1,n=ut){if(n){let s=dn.get(n);s||dn.set(n,s=[]),s.push(e)}}function jo(e,t,n=Y){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,h=T=>i?T:Se(T)||i===!1||i===0?We(T,1):We(T);let f,d,m,g,E=!1,S=!1;if(le(e)?(d=()=>e.value,E=Se(e)):wt(e)?(d=()=>h(e),E=!0):I(e)?(S=!0,E=e.some(T=>wt(T)||Se(T)),d=()=>e.map(T=>{if(le(T))return T.value;if(wt(T))return h(T);if(N(T))return l?l(T,2):T()})):N(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){rt();try{m()}finally{ot()}}const T=ut;ut=f;try{return l?l(e,3,[g]):e(g)}finally{ut=T}}:d=Be,t&&i){const T=d,W=i===!0?1/0:i;d=()=>We(T(),W)}const M=lo(),O=()=>{f.stop(),M&&M.active&&hs(M.effects,f)};if(r&&t){const T=t;t=(...W)=>{T(...W),O()}}let P=S?new Array(e.length).fill(ln):ln;const H=T=>{if(!(!(f.flags&1)||!f.dirty&&!T))if(t){const W=f.run();if(i||E||(S?W.some((te,ee)=>st(te,P[ee])):st(W,P))){m&&m();const te=ut;ut=f;try{const ee=[W,P===ln?void 0:S&&P[0]===ln?[]:P,g];l?l(t,3,ee):t(...ee),P=W}finally{ut=te}}}else f.run()};return a&&a(H),f=new Hi(d),f.scheduler=o?()=>o(H,!1):H,g=T=>Mo(T,!1,f),m=f.onStop=()=>{const T=dn.get(f);if(T){if(l)l(T,4);else for(const W of T)W();dn.delete(f)}},t?s?H(!0):P=f.run():o?o(H.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function We(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,le(e))We(e.value,t,n);else if(I(e))for(let s=0;s<e.length;s++)We(e[s],t,n);else if(Fi(e)||xt(e))e.forEach(s=>{We(s,t,n)});else if(Ti(e)){for(const s in e)We(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&We(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nn(e,t,n,s){try{return s?e(...s):e()}catch(i){wn(i,t,n)}}function Ne(e,t,n,s){if(N(e)){const i=nn(e,t,n,s);return i&&Ri(i)&&i.catch(r=>{wn(r,t,n)}),i}if(I(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Ne(e[r],t,n,s));return i}}function wn(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Y;if(t){let a=t.parent;const l=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,l,h)===!1)return}a=a.parent}if(r){rt(),nn(r,null,10,[e,l,h]),ot();return}}Ho(e,n,i,s,o)}function Ho(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const fe=[];let He=-1;const kt=[];let Xe=null,At=0;const er=Promise.resolve();let pn=null;function tr(e){const t=pn||er;return e?t.then(this?e.bind(this):e):t}function Go(e){let t=He+1,n=fe.length;for(;t<n;){const s=t+n>>>1,i=fe[s],r=qt(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Es(e){if(!(e.flags&1)){const t=qt(e),n=fe[fe.length-1];!n||!(e.flags&2)&&t>=qt(n)?fe.push(e):fe.splice(Go(t),0,e),e.flags|=1,nr()}}function nr(){pn||(pn=er.then(ir))}function Bo(e){I(e)?kt.push(...e):Xe&&e.id===-1?Xe.splice(At+1,0,e):e.flags&1||(kt.push(e),e.flags|=1),nr()}function Bs(e,t,n=He+1){for(;n<fe.length;n++){const s=fe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;fe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function sr(e){if(kt.length){const t=[...new Set(kt)].sort((n,s)=>qt(n)-qt(s));if(kt.length=0,Xe){Xe.push(...t);return}for(Xe=t,At=0;At<Xe.length;At++){const n=Xe[At];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xe=null,At=0}}const qt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ir(e){try{for(He=0;He<fe.length;He++){const t=fe[He];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),nn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;He<fe.length;He++){const t=fe[He];t&&(t.flags&=-2)}He=-1,fe.length=0,sr(),pn=null,(fe.length||kt.length)&&ir()}}let _e=null,rr=null;function mn(e){const t=_e;return _e=e,rr=e&&e.type.__scopeId||null,t}function Cs(e,t=_e,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Js(-1);const r=mn(t);let o;try{o=e(...i)}finally{mn(r),s._d&&Js(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Io(e,t){if(_e===null)return e;const n=On(_e),s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[r,o,a,l=Y]=t[i];r&&(N(r)&&(r={mounted:r,updated:r}),r.deep&&We(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function lt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(rt(),Ne(l,n,8,[e.el,a,e,t]),ot())}}const No=Symbol("_vte"),Lo=e=>e.__isTeleport;function xs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function or(e,t){return N(e)?ce({name:e.name},t,{setup:e}):e}function ar(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function gn(e,t,n,s,i=!1){if(I(e)){e.forEach((E,S)=>gn(E,t&&(I(t)?t[S]:t),n,s,i));return}if(Kt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&gn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?On(s.component):s.el,o=i?null:r,{i:a,r:l}=e,h=t&&t.r,f=a.refs===Y?a.refs={}:a.refs,d=a.setupState,m=U(d),g=d===Y?()=>!1:E=>V(m,E);if(h!=null&&h!==l&&(ne(h)?(f[h]=null,g(h)&&(d[h]=null)):le(h)&&(h.value=null)),N(l))nn(l,a,12,[o,f]);else{const E=ne(l),S=le(l);if(E||S){const M=()=>{if(e.f){const O=E?g(l)?d[l]:f[l]:l.value;i?I(O)&&hs(O,r):I(O)?O.includes(r)||O.push(r):E?(f[l]=[r],g(l)&&(d[l]=f[l])):(l.value=[r],e.k&&(f[e.k]=l.value))}else E?(f[l]=o,g(l)&&(d[l]=o)):S&&(l.value=o,e.k&&(f[e.k]=o))};o?(M.id=-1,ye(M,n)):M()}}}Cn().requestIdleCallback;Cn().cancelIdleCallback;const Kt=e=>!!e.type.__asyncLoader,lr=e=>e.type.__isKeepAlive;function Ko(e,t){cr(e,"a",t)}function $o(e,t){cr(e,"da",t)}function cr(e,t,n=ae){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(kn(t,s,n),n){let i=n.parent;for(;i&&i.parent;)lr(i.parent.vnode)&&Uo(s,t,n,i),i=i.parent}}function Uo(e,t,n,s){const i=kn(t,e,s,!0);Fn(()=>{hs(s[t],i)},n)}function kn(e,t,n=ae,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{rt();const a=sn(n),l=Ne(t,n,e,o);return a(),ot(),l});return s?i.unshift(r):i.push(r),r}}const Je=e=>(t,n=ae)=>{(!Zt||e==="sp")&&kn(e,(...s)=>t(...s),n)},Vo=Je("bm"),ur=Je("m"),Wo=Je("bu"),zo=Je("u"),Jo=Je("bum"),Fn=Je("um"),qo=Je("sp"),Yo=Je("rtg"),Qo=Je("rtc");function Zo(e,t=ae){kn("ec",e,t)}const Xo="components";function ws(e,t){return ta(Xo,e,!0,t)||e}const ea=Symbol.for("v-ndc");function ta(e,t,n=!0,s=!1){const i=_e||ae;if(i){const r=i.type;{const a=La(r,!1);if(a&&(a===t||a===Ee(t)||a===En(Ee(t))))return r}const o=Is(i[e]||r[e],t)||Is(i.appContext[e],t);return!o&&s?r:o}}function Is(e,t){return e&&(e[t]||e[Ee(t)]||e[En(Ee(t))])}function fr(e,t,n,s){let i;const r=n,o=I(e);if(o||ne(e)){const a=o&&wt(e);let l=!1;a&&(l=!Se(e),e=xn(e)),i=new Array(e.length);for(let h=0,f=e.length;h<f;h++)i[h]=t(l?oe(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,r)}else if(X(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const f=a[l];i[l]=t(e[f],f,l,r)}}else i=[];return i}const es=e=>e?Dr(e)?On(e):es(e.parent):null,$t=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>dr(e),$forceUpdate:e=>e.f||(e.f=()=>{Es(e.update)}),$nextTick:e=>e.n||(e.n=tr.bind(e.proxy)),$watch:e=>Sa.bind(e)}),In=(e,t)=>e!==Y&&!e.__isScriptSetup&&V(e,t),na={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;let h;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(In(s,t))return o[t]=1,s[t];if(i!==Y&&V(i,t))return o[t]=2,i[t];if((h=e.propsOptions[0])&&V(h,t))return o[t]=3,r[t];if(n!==Y&&V(n,t))return o[t]=4,n[t];ts&&(o[t]=0)}}const f=$t[t];let d,m;if(f)return t==="$attrs"&&re(e.attrs,"get",""),f(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Y&&V(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,V(m,t))return m[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return In(i,t)?(i[t]=n,!0):s!==Y&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==Y&&V(e,o)||In(t,o)||(a=r[0])&&V(a,o)||V(s,o)||V($t,o)||V(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ns(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function sa(e){const t=dr(e),n=e.proxy,s=e.ctx;ts=!1,t.beforeCreate&&Ls(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:h,created:f,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:S,deactivated:M,beforeDestroy:O,beforeUnmount:P,destroyed:H,unmounted:T,render:W,renderTracked:te,renderTriggered:ee,errorCaptured:Fe,serverPrefetch:qe,expose:Re,inheritAttrs:Ye,components:at,directives:Pe,filters:Dt}=t;if(h&&ia(h,s,null),o)for(const J in o){const K=o[J];N(K)&&(s[J]=K.bind(n))}if(i){const J=i.call(n,n);X(J)&&(e.data=tn(J))}if(ts=!0,r)for(const J in r){const K=r[J],Le=N(K)?K.bind(n,n):N(K.get)?K.get.bind(n,n):Be,Qe=!N(K)&&N(K.set)?K.set.bind(n):Be,Te=xe({get:Le,set:Qe});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Te.value,set:de=>Te.value=de})}if(a)for(const J in a)hr(a[J],s,n,J);if(l){const J=N(l)?l.call(n):l;Reflect.ownKeys(J).forEach(K=>{un(K,J[K])})}f&&Ls(f,e,"c");function se(J,K){I(K)?K.forEach(Le=>J(Le.bind(n))):K&&J(K.bind(n))}if(se(Vo,d),se(ur,m),se(Wo,g),se(zo,E),se(Ko,S),se($o,M),se(Zo,Fe),se(Qo,te),se(Yo,ee),se(Jo,P),se(Fn,T),se(qo,qe),I(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:Le=>n[K]=Le})})}else e.exposed||(e.exposed={});W&&e.render===Be&&(e.render=W),Ye!=null&&(e.inheritAttrs=Ye),at&&(e.components=at),Pe&&(e.directives=Pe),qe&&ar(e)}function ia(e,t,n=Be){I(e)&&(e=ns(e));for(const s in e){const i=e[s];let r;X(i)?"default"in i?r=Ie(i.from||s,i.default,!0):r=Ie(i.from||s):r=Ie(i),le(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function Ls(e,t,n){Ne(I(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function hr(e,t,n,s){let i=s.includes(".")?kr(n,s):()=>n[s];if(ne(e)){const r=t[e];N(r)&&Rt(i,r)}else if(N(e))Rt(i,e.bind(n));else if(X(e))if(I(e))e.forEach(r=>hr(r,t,n,s));else{const r=N(e.handler)?e.handler.bind(n):t[e.handler];N(r)&&Rt(i,r,e)}}function dr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(h=>yn(l,h,o,!0)),yn(l,t,o)),X(t)&&r.set(t,l),l}function yn(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&yn(e,r,n,!0),i&&i.forEach(o=>yn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=ra[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const ra={data:Ks,props:$s,emits:$s,methods:Bt,computed:Bt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Bt,directives:Bt,watch:aa,provide:Ks,inject:oa};function Ks(e,t){return t?e?function(){return ce(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function oa(e,t){return Bt(ns(e),ns(t))}function ns(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?ce(Object.create(null),e,t):t}function $s(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ce(Object.create(null),Ns(e),Ns(t??{})):t}function aa(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const s in t)n[s]=ue(e[s],t[s]);return n}function pr(){return{app:null,config:{isNativeTag:Yr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let la=0;function ca(e,t){return function(s,i=null){N(s)||(s=ce({},s)),i!=null&&!X(i)&&(i=null);const r=pr(),o=new WeakSet,a=[];let l=!1;const h=r.app={_uid:la++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$a,get config(){return r.config},set config(f){},use(f,...d){return o.has(f)||(f&&N(f.install)?(o.add(f),f.install(h,...d)):N(f)&&(o.add(f),f(h,...d))),h},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),h},component(f,d){return d?(r.components[f]=d,h):r.components[f]},directive(f,d){return d?(r.directives[f]=d,h):r.directives[f]},mount(f,d,m){if(!l){const g=h._ceVNode||he(s,i);return g.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(g,f,m),l=!0,h._container=f,f.__vue_app__=h,On(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Ne(a,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,d){return r.provides[f]=d,h},runWithContext(f){const d=Ft;Ft=h;try{return f()}finally{Ft=d}}};return h}}let Ft=null;function un(e,t){if(ae){let n=ae.provides;const s=ae.parent&&ae.parent.provides;s===n&&(n=ae.provides=Object.create(s)),n[e]=t}}function Ie(e,t,n=!1){const s=ae||_e;if(s||Ft){const i=Ft?Ft._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&N(t)?t.call(s&&s.proxy):t}}const mr={},gr=()=>Object.create(mr),yr=e=>Object.getPrototypeOf(e)===mr;function ua(e,t,n,s=!1){const i={},r=gr();e.propsDefaults=Object.create(null),br(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Yi(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function fa(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=U(i),[l]=e.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Rn(e.emitsOptions,m))continue;const g=t[m];if(l)if(V(r,m))g!==r[m]&&(r[m]=g,h=!0);else{const E=Ee(m);i[E]=ss(l,a,E,g,e,!1)}else g!==r[m]&&(r[m]=g,h=!0)}}}else{br(e,t,i,r)&&(h=!0);let f;for(const d in a)(!t||!V(t,d)&&((f=gt(d))===d||!V(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(i[d]=ss(l,a,d,void 0,e,!0)):delete i[d]);if(r!==a)for(const d in r)(!t||!V(t,d))&&(delete r[d],h=!0)}h&&Ve(e.attrs,"set","")}function br(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(It(l))continue;const h=t[l];let f;i&&V(i,f=Ee(l))?!r||!r.includes(f)?n[f]=h:(a||(a={}))[f]=h:Rn(e.emitsOptions,l)||(!(l in s)||h!==s[l])&&(s[l]=h,o=!0)}if(r){const l=U(n),h=a||Y;for(let f=0;f<r.length;f++){const d=r[f];n[d]=ss(i,l,d,h[d],e,!V(h,d))}}return o}function ss(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=V(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&N(l)){const{propsDefaults:h}=i;if(n in h)s=h[n];else{const f=sn(i);s=h[n]=l.call(null,t),f()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===gt(n))&&(s=!0))}return s}const ha=new WeakMap;function _r(e,t,n=!1){const s=n?ha:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!N(e)){const f=d=>{l=!0;const[m,g]=_r(d,t,!0);ce(o,m),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!l)return X(e)&&s.set(e,Ct),Ct;if(I(r))for(let f=0;f<r.length;f++){const d=Ee(r[f]);Us(d)&&(o[d]=Y)}else if(r)for(const f in r){const d=Ee(f);if(Us(d)){const m=r[f],g=o[d]=I(m)||N(m)?{type:m}:ce({},m),E=g.type;let S=!1,M=!0;if(I(E))for(let O=0;O<E.length;++O){const P=E[O],H=N(P)&&P.name;if(H==="Boolean"){S=!0;break}else H==="String"&&(M=!1)}else S=N(E)&&E.name==="Boolean";g[0]=S,g[1]=M,(S||V(g,"default"))&&a.push(d)}}const h=[o,a];return X(e)&&s.set(e,h),h}function Us(e){return e[0]!=="$"&&!It(e)}const vr=e=>e[0]==="_"||e==="$stable",ks=e=>I(e)?e.map(Ge):[Ge(e)],da=(e,t,n)=>{if(t._n)return t;const s=Cs((...i)=>ks(t(...i)),n);return s._c=!1,s},Ar=(e,t,n)=>{const s=e._ctx;for(const i in e){if(vr(i))continue;const r=e[i];if(N(r))t[i]=da(i,r,s);else if(r!=null){const o=ks(r);t[i]=()=>o}}},Sr=(e,t)=>{const n=ks(t);e.slots.default=()=>n},Er=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},pa=(e,t,n)=>{const s=e.slots=gr();if(e.vnode.shapeFlag&32){const i=t._;i?(Er(s,t,n),n&&Oi(s,"_",i,!0)):Ar(t,s)}else t&&Sr(e,t)},ma=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=Y;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Er(i,t,n):(r=!t.$stable,Ar(t,i)),o=t}else t&&(Sr(e,t),o={default:1});if(r)for(const a in i)!vr(a)&&o[a]==null&&delete i[a]},ye=Ra;function ga(e){return ya(e)}function ya(e,t){const n=Cn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:m,setScopeId:g=Be,insertStaticContent:E}=e,S=(c,u,p,y=null,v=null,_=null,w=void 0,x=null,C=!!u.dynamicChildren)=>{if(c===u)return;c&&!Ht(c,u)&&(y=b(c),de(c,v,_,!0),c=null),u.patchFlag===-2&&(C=!1,u.dynamicChildren=null);const{type:A,ref:G,shapeFlag:F}=u;switch(A){case Pn:M(c,u,p,y);break;case Yt:O(c,u,p,y);break;case Ln:c==null&&P(u,p,y,w);break;case Ce:at(c,u,p,y,v,_,w,x,C);break;default:F&1?W(c,u,p,y,v,_,w,x,C):F&6?Pe(c,u,p,y,v,_,w,x,C):(F&64||F&128)&&A.process(c,u,p,y,v,_,w,x,C,D)}G!=null&&v&&gn(G,c&&c.ref,_,u||c,!u)},M=(c,u,p,y)=>{if(c==null)s(u.el=a(u.children),p,y);else{const v=u.el=c.el;u.children!==c.children&&h(v,u.children)}},O=(c,u,p,y)=>{c==null?s(u.el=l(u.children||""),p,y):u.el=c.el},P=(c,u,p,y)=>{[c.el,c.anchor]=E(c.children,u,p,y,c.el,c.anchor)},H=({el:c,anchor:u},p,y)=>{let v;for(;c&&c!==u;)v=m(c),s(c,p,y),c=v;s(u,p,y)},T=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=m(c),i(c),c=p;i(u)},W=(c,u,p,y,v,_,w,x,C)=>{u.type==="svg"?w="svg":u.type==="math"&&(w="mathml"),c==null?te(u,p,y,v,_,w,x,C):qe(c,u,v,_,w,x,C)},te=(c,u,p,y,v,_,w,x)=>{let C,A;const{props:G,shapeFlag:F,transition:j,dirs:B}=c;if(C=c.el=o(c.type,_,G&&G.is,G),F&8?f(C,c.children):F&16&&Fe(c.children,C,null,y,v,Nn(c,_),w,x),B&&lt(c,null,y,"created"),ee(C,c,c.scopeId,w,y),G){for(const Q in G)Q!=="value"&&!It(Q)&&r(C,Q,null,G[Q],_,y);"value"in G&&r(C,"value",null,G.value,_),(A=G.onVnodeBeforeMount)&&je(A,y,c)}B&&lt(c,null,y,"beforeMount");const L=ba(v,j);L&&j.beforeEnter(C),s(C,u,p),((A=G&&G.onVnodeMounted)||L||B)&&ye(()=>{A&&je(A,y,c),L&&j.enter(C),B&&lt(c,null,y,"mounted")},v)},ee=(c,u,p,y,v)=>{if(p&&g(c,p),y)for(let _=0;_<y.length;_++)g(c,y[_]);if(v){let _=v.subTree;if(u===_||Rr(_.type)&&(_.ssContent===u||_.ssFallback===u)){const w=v.vnode;ee(c,w,w.scopeId,w.slotScopeIds,v.parent)}}},Fe=(c,u,p,y,v,_,w,x,C=0)=>{for(let A=C;A<c.length;A++){const G=c[A]=x?et(c[A]):Ge(c[A]);S(null,G,u,p,y,v,_,w,x)}},qe=(c,u,p,y,v,_,w)=>{const x=u.el=c.el;let{patchFlag:C,dynamicChildren:A,dirs:G}=u;C|=c.patchFlag&16;const F=c.props||Y,j=u.props||Y;let B;if(p&&ct(p,!1),(B=j.onVnodeBeforeUpdate)&&je(B,p,u,c),G&&lt(u,c,p,"beforeUpdate"),p&&ct(p,!0),(F.innerHTML&&j.innerHTML==null||F.textContent&&j.textContent==null)&&f(x,""),A?Re(c.dynamicChildren,A,x,p,y,Nn(u,v),_):w||K(c,u,x,null,p,y,Nn(u,v),_,!1),C>0){if(C&16)Ye(x,F,j,p,v);else if(C&2&&F.class!==j.class&&r(x,"class",null,j.class,v),C&4&&r(x,"style",F.style,j.style,v),C&8){const L=u.dynamicProps;for(let Q=0;Q<L.length;Q++){const z=L[Q],me=F[z],pe=j[z];(pe!==me||z==="value")&&r(x,z,me,pe,v,p)}}C&1&&c.children!==u.children&&f(x,u.children)}else!w&&A==null&&Ye(x,F,j,p,v);((B=j.onVnodeUpdated)||G)&&ye(()=>{B&&je(B,p,u,c),G&&lt(u,c,p,"updated")},y)},Re=(c,u,p,y,v,_,w)=>{for(let x=0;x<u.length;x++){const C=c[x],A=u[x],G=C.el&&(C.type===Ce||!Ht(C,A)||C.shapeFlag&70)?d(C.el):p;S(C,A,G,null,y,v,_,w,!0)}},Ye=(c,u,p,y,v)=>{if(u!==p){if(u!==Y)for(const _ in u)!It(_)&&!(_ in p)&&r(c,_,u[_],null,v,y);for(const _ in p){if(It(_))continue;const w=p[_],x=u[_];w!==x&&_!=="value"&&r(c,_,x,w,v,y)}"value"in p&&r(c,"value",u.value,p.value,v)}},at=(c,u,p,y,v,_,w,x,C)=>{const A=u.el=c?c.el:a(""),G=u.anchor=c?c.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:B}=u;B&&(x=x?x.concat(B):B),c==null?(s(A,p,y),s(G,p,y),Fe(u.children||[],p,G,v,_,w,x,C)):F>0&&F&64&&j&&c.dynamicChildren?(Re(c.dynamicChildren,j,p,v,_,w,x),(u.key!=null||v&&u===v.subTree)&&Cr(c,u,!0)):K(c,u,p,G,v,_,w,x,C)},Pe=(c,u,p,y,v,_,w,x,C)=>{u.slotScopeIds=x,c==null?u.shapeFlag&512?v.ctx.activate(u,p,y,w,C):Dt(u,p,y,v,_,w,C):yt(c,u,C)},Dt=(c,u,p,y,v,_,w)=>{const x=c.component=Ha(c,y,v);if(lr(c)&&(x.ctx.renderer=D),Ga(x,!1,w),x.asyncDep){if(v&&v.registerDep(x,se,w),!c.el){const C=x.subTree=he(Yt);O(null,C,u,p)}}else se(x,c,u,p,v,_,w)},yt=(c,u,p)=>{const y=u.component=c.component;if(ka(c,u,p))if(y.asyncDep&&!y.asyncResolved){J(y,u,p);return}else y.next=u,y.update();else u.el=c.el,y.vnode=u},se=(c,u,p,y,v,_,w)=>{const x=()=>{if(c.isMounted){let{next:F,bu:j,u:B,parent:L,vnode:Q}=c;{const De=xr(c);if(De){F&&(F.el=Q.el,J(c,F,w)),De.asyncDep.then(()=>{c.isUnmounted||x()});return}}let z=F,me;ct(c,!1),F?(F.el=Q.el,J(c,F,w)):F=Q,j&&cn(j),(me=F.props&&F.props.onVnodeBeforeUpdate)&&je(me,L,F,Q),ct(c,!0);const pe=Ws(c),Oe=c.subTree;c.subTree=pe,S(Oe,pe,d(Oe.el),b(Oe),c,v,_),F.el=pe.el,z===null&&Fa(c,pe.el),B&&ye(B,v),(me=F.props&&F.props.onVnodeUpdated)&&ye(()=>je(me,L,F,Q),v)}else{let F;const{el:j,props:B}=u,{bm:L,m:Q,parent:z,root:me,type:pe}=c,Oe=Kt(u);ct(c,!1),L&&cn(L),!Oe&&(F=B&&B.onVnodeBeforeMount)&&je(F,z,u),ct(c,!0);{me.ce&&me.ce._injectChildStyle(pe);const De=c.subTree=Ws(c);S(null,De,p,y,c,v,_),u.el=De.el}if(Q&&ye(Q,v),!Oe&&(F=B&&B.onVnodeMounted)){const De=u;ye(()=>je(F,z,De),v)}(u.shapeFlag&256||z&&Kt(z.vnode)&&z.vnode.shapeFlag&256)&&c.a&&ye(c.a,v),c.isMounted=!0,u=p=y=null}};c.scope.on();const C=c.effect=new Hi(x);c.scope.off();const A=c.update=C.run.bind(C),G=c.job=C.runIfDirty.bind(C);G.i=c,G.id=c.uid,C.scheduler=()=>Es(G),ct(c,!0),A()},J=(c,u,p)=>{u.component=c;const y=c.vnode.props;c.vnode=u,c.next=null,fa(c,u.props,y,p),ma(c,u.children,p),rt(),Bs(c),ot()},K=(c,u,p,y,v,_,w,x,C=!1)=>{const A=c&&c.children,G=c?c.shapeFlag:0,F=u.children,{patchFlag:j,shapeFlag:B}=u;if(j>0){if(j&128){Qe(A,F,p,y,v,_,w,x,C);return}else if(j&256){Le(A,F,p,y,v,_,w,x,C);return}}B&8?(G&16&&Ae(A,v,_),F!==A&&f(p,F)):G&16?B&16?Qe(A,F,p,y,v,_,w,x,C):Ae(A,v,_,!0):(G&8&&f(p,""),B&16&&Fe(F,p,y,v,_,w,x,C))},Le=(c,u,p,y,v,_,w,x,C)=>{c=c||Ct,u=u||Ct;const A=c.length,G=u.length,F=Math.min(A,G);let j;for(j=0;j<F;j++){const B=u[j]=C?et(u[j]):Ge(u[j]);S(c[j],B,p,null,v,_,w,x,C)}A>G?Ae(c,v,_,!0,!1,F):Fe(u,p,y,v,_,w,x,C,F)},Qe=(c,u,p,y,v,_,w,x,C)=>{let A=0;const G=u.length;let F=c.length-1,j=G-1;for(;A<=F&&A<=j;){const B=c[A],L=u[A]=C?et(u[A]):Ge(u[A]);if(Ht(B,L))S(B,L,p,null,v,_,w,x,C);else break;A++}for(;A<=F&&A<=j;){const B=c[F],L=u[j]=C?et(u[j]):Ge(u[j]);if(Ht(B,L))S(B,L,p,null,v,_,w,x,C);else break;F--,j--}if(A>F){if(A<=j){const B=j+1,L=B<G?u[B].el:y;for(;A<=j;)S(null,u[A]=C?et(u[A]):Ge(u[A]),p,L,v,_,w,x,C),A++}}else if(A>j)for(;A<=F;)de(c[A],v,_,!0),A++;else{const B=A,L=A,Q=new Map;for(A=L;A<=j;A++){const ge=u[A]=C?et(u[A]):Ge(u[A]);ge.key!=null&&Q.set(ge.key,A)}let z,me=0;const pe=j-L+1;let Oe=!1,De=0;const Mt=new Array(pe);for(A=0;A<pe;A++)Mt[A]=0;for(A=B;A<=F;A++){const ge=c[A];if(me>=pe){de(ge,v,_,!0);continue}let Me;if(ge.key!=null)Me=Q.get(ge.key);else for(z=L;z<=j;z++)if(Mt[z-L]===0&&Ht(ge,u[z])){Me=z;break}Me===void 0?de(ge,v,_,!0):(Mt[Me-L]=A+1,Me>=De?De=Me:Oe=!0,S(ge,u[Me],p,null,v,_,w,x,C),me++)}const Ds=Oe?_a(Mt):Ct;for(z=Ds.length-1,A=pe-1;A>=0;A--){const ge=L+A,Me=u[ge],Ms=ge+1<G?u[ge+1].el:y;Mt[A]===0?S(null,Me,p,Ms,v,_,w,x,C):Oe&&(z<0||A!==Ds[z]?Te(Me,p,Ms,2):z--)}}},Te=(c,u,p,y,v=null)=>{const{el:_,type:w,transition:x,children:C,shapeFlag:A}=c;if(A&6){Te(c.component.subTree,u,p,y);return}if(A&128){c.suspense.move(u,p,y);return}if(A&64){w.move(c,u,p,D);return}if(w===Ce){s(_,u,p);for(let F=0;F<C.length;F++)Te(C[F],u,p,y);s(c.anchor,u,p);return}if(w===Ln){H(c,u,p);return}if(y!==2&&A&1&&x)if(y===0)x.beforeEnter(_),s(_,u,p),ye(()=>x.enter(_),v);else{const{leave:F,delayLeave:j,afterLeave:B}=x,L=()=>s(_,u,p),Q=()=>{F(_,()=>{L(),B&&B()})};j?j(_,L,Q):Q()}else s(_,u,p)},de=(c,u,p,y=!1,v=!1)=>{const{type:_,props:w,ref:x,children:C,dynamicChildren:A,shapeFlag:G,patchFlag:F,dirs:j,cacheIndex:B}=c;if(F===-2&&(v=!1),x!=null&&gn(x,null,p,c,!0),B!=null&&(u.renderCache[B]=void 0),G&256){u.ctx.deactivate(c);return}const L=G&1&&j,Q=!Kt(c);let z;if(Q&&(z=w&&w.onVnodeBeforeUnmount)&&je(z,u,c),G&6)rn(c.component,p,y);else{if(G&128){c.suspense.unmount(p,y);return}L&&lt(c,null,u,"beforeUnmount"),G&64?c.type.remove(c,u,p,D,y):A&&!A.hasOnce&&(_!==Ce||F>0&&F&64)?Ae(A,u,p,!1,!0):(_===Ce&&F&384||!v&&G&16)&&Ae(C,u,p),y&&bt(c)}(Q&&(z=w&&w.onVnodeUnmounted)||L)&&ye(()=>{z&&je(z,u,c),L&&lt(c,null,u,"unmounted")},p)},bt=c=>{const{type:u,el:p,anchor:y,transition:v}=c;if(u===Ce){_t(p,y);return}if(u===Ln){T(c);return}const _=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:w,delayLeave:x}=v,C=()=>w(p,_);x?x(c.el,_,C):C()}else _()},_t=(c,u)=>{let p;for(;c!==u;)p=m(c),i(c),c=p;i(u)},rn=(c,u,p)=>{const{bum:y,scope:v,job:_,subTree:w,um:x,m:C,a:A}=c;Vs(C),Vs(A),y&&cn(y),v.stop(),_&&(_.flags|=8,de(w,c,u,p)),x&&ye(x,u),ye(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ae=(c,u,p,y=!1,v=!1,_=0)=>{for(let w=_;w<c.length;w++)de(c[w],u,p,y,v)},b=c=>{if(c.shapeFlag&6)return b(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=m(c.anchor||c.el),p=u&&u[No];return p?m(p):u};let R=!1;const k=(c,u,p)=>{c==null?u._vnode&&de(u._vnode,null,null,!0):S(u._vnode||null,c,u,null,null,null,p),u._vnode=c,R||(R=!0,Bs(),sr(),R=!1)},D={p:S,um:de,m:Te,r:bt,mt:Dt,mc:Fe,pc:K,pbc:Re,n:b,o:e};return{render:k,hydrate:void 0,createApp:ca(k)}}function Nn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ct({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ba(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Cr(e,t,n=!1){const s=e.children,i=t.children;if(I(s)&&I(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=et(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Cr(o,a)),a.type===Pn&&(a.el=o.el)}}function _a(e){const t=e.slice(),n=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const h=e[s];if(h!==0){if(i=n[n.length-1],e[i]<h){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<h?r=a+1:o=a;h<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function xr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xr(t)}function Vs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const va=Symbol.for("v-scx"),Aa=()=>Ie(va);function Rt(e,t,n){return wr(e,t,n)}function wr(e,t,n=Y){const{immediate:s,deep:i,flush:r,once:o}=n,a=ce({},n),l=t&&s||!t&&r!=="post";let h;if(Zt){if(r==="sync"){const g=Aa();h=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Be,g.resume=Be,g.pause=Be,g}}const f=ae;a.call=(g,E,S)=>Ne(g,f,E,S);let d=!1;r==="post"?a.scheduler=g=>{ye(g,f&&f.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(g,E)=>{E?g():Es(g)}),a.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const m=jo(e,t,a);return Zt&&(h?h.push(m):l&&m()),m}function Sa(e,t,n){const s=this.proxy,i=ne(e)?e.includes(".")?kr(s,e):()=>s[e]:e.bind(s,s);let r;N(t)?r=t:(r=t.handler,n=t);const o=sn(this),a=wr(i,r.bind(s),n);return o(),a}function kr(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ea=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ee(t)}Modifiers`]||e[`${gt(t)}Modifiers`];function Ca(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Y;let i=n;const r=t.startsWith("update:"),o=r&&Ea(s,t.slice(7));o&&(o.trim&&(i=n.map(f=>ne(f)?f.trim():f)),o.number&&(i=n.map(Jn)));let a,l=s[a=Mn(t)]||s[a=Mn(Ee(t))];!l&&r&&(l=s[a=Mn(gt(t))]),l&&Ne(l,e,6,i);const h=s[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ne(h,e,6,i)}}function Fr(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!N(e)){const l=h=>{const f=Fr(h,t,!0);f&&(a=!0,ce(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(X(e)&&s.set(e,null),null):(I(r)?r.forEach(l=>o[l]=null):ce(o,r),X(e)&&s.set(e,o),o)}function Rn(e,t){return!e||!vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,gt(t))||V(e,t))}function Ws(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:h,renderCache:f,props:d,data:m,setupState:g,ctx:E,inheritAttrs:S}=e,M=mn(e);let O,P;try{if(n.shapeFlag&4){const T=i||s,W=T;O=Ge(h.call(W,T,f,d,g,m,E)),P=a}else{const T=t;O=Ge(T.length>1?T(d,{attrs:a,slots:o,emit:l}):T(d,null)),P=t.props?a:xa(a)}}catch(T){Ut.length=0,wn(T,e,1),O=he(Yt)}let H=O;if(P&&S!==!1){const T=Object.keys(P),{shapeFlag:W}=H;T.length&&W&7&&(r&&T.some(fs)&&(P=wa(P,r)),H=Pt(H,P,!1,!0))}return n.dirs&&(H=Pt(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&xs(H,n.transition),O=H,mn(M),O}const xa=e=>{let t;for(const n in e)(n==="class"||n==="style"||vn(n))&&((t||(t={}))[n]=e[n]);return t},wa=(e,t)=>{const n={};for(const s in e)(!fs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ka(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?zs(s,o,h):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==s[m]&&!Rn(h,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zs(s,o,h):!0:!!o;return!1}function zs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Rn(n,r))return!0}return!1}function Fa({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Rr=e=>e.__isSuspense;function Ra(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):Bo(e)}const Ce=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Ln=Symbol.for("v-stc"),Ut=[];let ve=null;function ze(e=!1){Ut.push(ve=e?null:[])}function Pa(){Ut.pop(),ve=Ut[Ut.length-1]||null}let Qt=1;function Js(e,t=!1){Qt+=e,e<0&&ve&&t&&(ve.hasOnce=!0)}function Pr(e){return e.dynamicChildren=Qt>0?ve||Ct:null,Pa(),Qt>0&&ve&&ve.push(e),e}function pt(e,t,n,s,i,r){return Pr(ie(e,t,n,s,i,r,!0))}function Tr(e,t,n,s,i){return Pr(he(e,t,n,s,i,!0))}function bn(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Or=({key:e})=>e??null,fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||le(e)||N(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function ie(e,t=null,n=null,s=0,i=null,r=e===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Or(t),ref:t&&fn(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:_e};return a?(Fs(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Qt>0&&!o&&ve&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ve.push(l),l}const he=Ta;function Ta(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===ea)&&(e=Yt),bn(e)){const a=Pt(e,t,!0);return n&&Fs(a,n),Qt>0&&!r&&ve&&(a.shapeFlag&6?ve[ve.indexOf(e)]=a:ve.push(a)),a.patchFlag=-2,a}if(Ka(e)&&(e=e.__vccOpts),t){t=Oa(t);let{class:a,style:l}=t;a&&!ne(a)&&(t.class=ms(a)),X(l)&&(Ss(l)&&!I(l)&&(l=ce({},l)),t.style=ps(l))}const o=ne(e)?1:Rr(e)?128:Lo(e)?64:X(e)?4:N(e)?2:0;return ie(e,t,n,s,i,o,r,!0)}function Oa(e){return e?Ss(e)||yr(e)?ce({},e):e:null}function Pt(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=e,h=t?Da(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Or(h),ref:t&&t.ref?n&&r?I(r)?r.concat(fn(t)):[r,fn(t)]:fn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&xs(f,l.clone(f)),f}function Tn(e=" ",t=0){return he(Pn,null,e,t)}function Ge(e){return e==null||typeof e=="boolean"?he(Yt):I(e)?he(Ce,null,e.slice()):bn(e)?et(e):he(Pn,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function Fs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Fs(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!yr(t)?t._ctx=_e:i===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),s&64?(n=16,t=[Tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Da(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=ms([t.class,s.class]));else if(i==="style")t.style=ps([t.style,s.style]);else if(vn(i)){const r=t[i],o=s[i];o&&r!==o&&!(I(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function je(e,t,n,s=null){Ne(e,t,7,[n,s])}const Ma=pr();let ja=0;function Ha(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Ma,r={uid:ja++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ao(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_r(s,i),emitsOptions:Fr(s,i),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ca.bind(null,r),e.ce&&e.ce(r),r}let ae=null,_n,is;{const e=Cn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};_n=t("__VUE_INSTANCE_SETTERS__",n=>ae=n),is=t("__VUE_SSR_SETTERS__",n=>Zt=n)}const sn=e=>{const t=ae;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},qs=()=>{ae&&ae.scope.off(),_n(null)};function Dr(e){return e.vnode.shapeFlag&4}let Zt=!1;function Ga(e,t=!1,n=!1){t&&is(t);const{props:s,children:i}=e.vnode,r=Dr(e);ua(e,s,r,t),pa(e,i,n);const o=r?Ba(e,t):void 0;return t&&is(!1),o}function Ba(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,na);const{setup:s}=n;if(s){rt();const i=e.setupContext=s.length>1?Na(e):null,r=sn(e),o=nn(s,e,0,[e.props,i]),a=Ri(o);if(ot(),r(),(a||e.sp)&&!Kt(e)&&ar(e),a){if(o.then(qs,qs),t)return o.then(l=>{Ys(e,l)}).catch(l=>{wn(l,e,0)});e.asyncDep=o}else Ys(e,o)}else Mr(e)}function Ys(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Xi(t)),Mr(e)}function Mr(e,t,n){const s=e.type;e.render||(e.render=s.render||Be);{const i=sn(e);rt();try{sa(e)}finally{ot(),i()}}}const Ia={get(e,t){return re(e,"get",""),e[t]}};function Na(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ia),slots:e.slots,emit:e.emit,expose:t}}function On(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xi(Fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}})):e.proxy}function La(e,t=!0){return N(e)?e.displayName||e.name:e.name||t&&e.__name}function Ka(e){return N(e)&&"__vccOpts"in e}const xe=(e,t)=>Do(e,t,Zt);function jr(e,t,n){const s=arguments.length;return s===2?X(t)&&!I(t)?bn(t)?he(e,null,[t]):he(e,t):he(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bn(n)&&(n=[n]),he(e,t,n))}const $a="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const Qs=typeof window<"u"&&window.trustedTypes;if(Qs)try{rs=Qs.createPolicy("vue",{createHTML:e=>e})}catch{}const Hr=rs?e=>rs.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",Va="http://www.w3.org/1998/Math/MathML",Ue=typeof document<"u"?document:null,Zs=Ue&&Ue.createElement("template"),Wa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?Ue.createElementNS(Ua,e):t==="mathml"?Ue.createElementNS(Va,e):n?Ue.createElement(e,{is:n}):Ue.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Ue.createTextNode(e),createComment:e=>Ue.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ue.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zs.innerHTML=Hr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Zs.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},za=Symbol("_vtc");function Ja(e,t,n){const s=e[za];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xs=Symbol("_vod"),qa=Symbol("_vsh"),Ya=Symbol(""),Qa=/(^|;)\s*display\s*:/;function Za(e,t,n){const s=e.style,i=ne(n);let r=!1;if(n&&!i){if(t)if(ne(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hn(s,a,"")}else for(const o in t)n[o]==null&&hn(s,o,"");for(const o in n)o==="display"&&(r=!0),hn(s,o,n[o])}else if(i){if(t!==n){const o=s[Ya];o&&(n+=";"+o),s.cssText=n,r=Qa.test(n)}}else t&&e.removeAttribute("style");Xs in e&&(e[Xs]=r?s.display:"",e[qa]&&(s.display="none"))}const ei=/\s*!important$/;function hn(e,t,n){if(I(n))n.forEach(s=>hn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Xa(e,t);ei.test(n)?e.setProperty(gt(s),n.replace(ei,""),"important"):e[s]=n}}const ti=["Webkit","Moz","ms"],Kn={};function Xa(e,t){const n=Kn[t];if(n)return n;let s=Ee(t);if(s!=="filter"&&s in e)return Kn[t]=s;s=En(s);for(let i=0;i<ti.length;i++){const r=ti[i]+s;if(r in e)return Kn[t]=r}return t}const ni="http://www.w3.org/1999/xlink";function si(e,t,n,s,i,r=oo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n):n==null||r&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,r?"":it(n)?String(n):n)}function ii(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Hr(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Di(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function St(e,t,n,s){e.addEventListener(t,n,s)}function el(e,t,n,s){e.removeEventListener(t,n,s)}const ri=Symbol("_vei");function tl(e,t,n,s,i=null){const r=e[ri]||(e[ri]={}),o=r[t];if(s&&o)o.value=s;else{const[a,l]=nl(t);if(s){const h=r[t]=rl(s,i);St(e,a,h,l)}else o&&(el(e,a,o,l),r[t]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function nl(e){let t;if(oi.test(e)){t={};let s;for(;s=e.match(oi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let $n=0;const sl=Promise.resolve(),il=()=>$n||(sl.then(()=>$n=0),$n=Date.now());function rl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ne(ol(s,n.value),t,5,[s])};return n.value=e,n.attached=il(),n}function ol(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const ai=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,al=(e,t,n,s,i,r)=>{const o=i==="svg";t==="class"?Ja(e,s,o):t==="style"?Za(e,n,s):vn(t)?fs(t)||tl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ll(e,t,s,o))?(ii(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&si(e,t,s,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ne(s))?ii(e,Ee(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),si(e,t,s,o))};function ll(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ai(t)&&N(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ai(t)&&ne(n)?!1:t in e}const li=e=>{const t=e.props["onUpdate:modelValue"]||!1;return I(t)?n=>cn(t,n):t};function cl(e){e.target.composing=!0}function ci(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),ul={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e[Un]=li(i);const r=s||i.props&&i.props.type==="number";St(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Jn(a)),e[Un](a)}),n&&St(e,"change",()=>{e.value=e.value.trim()}),t||(St(e,"compositionstart",cl),St(e,"compositionend",ci),St(e,"change",ci))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(e[Un]=li(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Jn(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||i&&e.value.trim()===l)||(e.value=l))}},fl=ce({patchProp:al},Wa);let ui;function hl(){return ui||(ui=ga(fl))}const dl=(...e)=>{const t=hl().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=ml(s);if(!i)return;const r=t._component;!N(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,pl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function pl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ml(e){return ne(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Et=typeof document<"u";function Gr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function gl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gr(e.default)}const $=Object.assign;function Vn(e,t){const n={};for(const s in t){const i=t[s];n[s]=ke(i)?i.map(e):e(i)}return n}const Vt=()=>{},ke=Array.isArray,Br=/#/g,yl=/&/g,bl=/\//g,_l=/=/g,vl=/\?/g,Ir=/\+/g,Al=/%5B/g,Sl=/%5D/g,Nr=/%5E/g,El=/%60/g,Lr=/%7B/g,Cl=/%7C/g,Kr=/%7D/g,xl=/%20/g;function Rs(e){return encodeURI(""+e).replace(Cl,"|").replace(Al,"[").replace(Sl,"]")}function wl(e){return Rs(e).replace(Lr,"{").replace(Kr,"}").replace(Nr,"^")}function os(e){return Rs(e).replace(Ir,"%2B").replace(xl,"+").replace(Br,"%23").replace(yl,"%26").replace(El,"`").replace(Lr,"{").replace(Kr,"}").replace(Nr,"^")}function kl(e){return os(e).replace(_l,"%3D")}function Fl(e){return Rs(e).replace(Br,"%23").replace(vl,"%3F")}function Rl(e){return e==null?"":Fl(e).replace(bl,"%2F")}function Xt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pl=/\/$/,Tl=e=>e.replace(Pl,"");function Wn(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=jl(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Xt(o)}}function Ol(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function fi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dl(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Tt(t.matched[s],n.matched[i])&&$r(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Tt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $r(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ml(e[n],t[n]))return!1;return!0}function Ml(e,t){return ke(e)?hi(e,t):ke(t)?hi(t,e):e===t}function hi(e,t){return ke(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function jl(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var en;(function(e){e.pop="pop",e.push="push"})(en||(en={}));var Wt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Wt||(Wt={}));function Hl(e){if(!e)if(Et){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tl(e)}const Gl=/^[^#]+#/;function Bl(e,t){return e.replace(Gl,"#")+t}function Il(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Dn=()=>({left:window.scrollX,top:window.scrollY});function Nl(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Il(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function di(e,t){return(history.state?history.state.position-t:-1)+e}const as=new Map;function Ll(e,t){as.set(e,t)}function Kl(e){const t=as.get(e);return as.delete(e),t}let $l=()=>location.protocol+"//"+location.host;function Ur(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),fi(l,"")}return fi(n,e)+s+i}function Ul(e,t,n,s){let i=[],r=[],o=null;const a=({state:m})=>{const g=Ur(e,location),E=n.value,S=t.value;let M=0;if(m){if(n.value=g,t.value=m,o&&o===E){o=null;return}M=S?m.position-S.position:0}else s(g);i.forEach(O=>{O(n.value,E,{delta:M,type:en.pop,direction:M?M>0?Wt.forward:Wt.back:Wt.unknown})})};function l(){o=n.value}function h(m){i.push(m);const g=()=>{const E=i.indexOf(m);E>-1&&i.splice(E,1)};return r.push(g),g}function f(){const{history:m}=window;m.state&&m.replaceState($({},m.state,{scroll:Dn()}),"")}function d(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:d}}function pi(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Dn():null}}function Vl(e){const{history:t,location:n}=window,s={value:Ur(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,h,f){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:$l()+e+l;try{t[f?"replaceState":"pushState"](h,"",m),i.value=h}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(l,h){const f=$({},t.state,pi(i.value.back,l,i.value.forward,!0),h,{position:i.value.position});r(l,f,!0),s.value=l}function a(l,h){const f=$({},i.value,t.state,{forward:l,scroll:Dn()});r(f.current,f,!0);const d=$({},pi(s.value,l,null),{position:f.position+1},h);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Wl(e){e=Hl(e);const t=Vl(e),n=Ul(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=$({location:"",base:e,go:s,createHref:Bl.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function zl(e){return typeof e=="string"||e&&typeof e=="object"}function Vr(e){return typeof e=="string"||typeof e=="symbol"}const Wr=Symbol("");var mi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mi||(mi={}));function Ot(e,t){return $(new Error,{type:e,[Wr]:!0},t)}function $e(e,t){return e instanceof Error&&Wr in e&&(t==null||!!(e.type&t))}const gi="[^/]+?",Jl={sensitive:!1,strict:!1,start:!0,end:!0},ql=/[.+*?^${}()[\]/\\]/g;function Yl(e,t){const n=$({},Jl,t),s=[];let i=n.start?"^":"";const r=[];for(const h of e){const f=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let d=0;d<h.length;d++){const m=h[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(i+="/"),i+=m.value.replace(ql,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:S,optional:M,regexp:O}=m;r.push({name:E,repeatable:S,optional:M});const P=O||gi;if(P!==gi){g+=10;try{new RegExp(`(${P})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${E}" (${P}): `+T.message)}}let H=S?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(H=M&&h.length<2?`(?:/${H})`:"/"+H),M&&(H+="?"),i+=H,g+=20,M&&(g+=-8),S&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}s.push(f)}if(n.strict&&n.end){const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(h){const f=h.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",E=r[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(h){let f="",d=!1;for(const m of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of m)if(g.type===0)f+=g.value;else if(g.type===1){const{value:E,repeatable:S,optional:M}=g,O=E in h?h[E]:"";if(ke(O)&&!S)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const P=ke(O)?O.join("/"):O;if(!P)if(M)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=P}}return f||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Ql(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function zr(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=Ql(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(yi(s))return 1;if(yi(i))return-1}return i.length-s.length}function yi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Zl={type:0,value:""},Xl=/[a-zA-Z0-9_]/;function ec(e){if(!e)return[[]];if(e==="/")return[[Zl]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${h}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,h="",f="";function d(){h&&(n===0?r.push({type:0,value:h}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(h&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=s;break;case 1:l==="("?n=2:Xl.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),d(),o(),i}function tc(e,t,n){const s=Yl(ec(e.path),n),i=$(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function nc(e,t){const n=[],s=new Map;t=Ai({strict:!1,end:!0,sensitive:!1},t);function i(d){return s.get(d)}function r(d,m,g){const E=!g,S=_i(d);S.aliasOf=g&&g.record;const M=Ai(t,d),O=[S];if("alias"in d){const T=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of T)O.push(_i($({},S,{components:g?g.record.components:S.components,path:W,aliasOf:g?g.record:S})))}let P,H;for(const T of O){const{path:W}=T;if(m&&W[0]!=="/"){const te=m.record.path,ee=te[te.length-1]==="/"?"":"/";T.path=m.record.path+(W&&ee+W)}if(P=tc(T,m,M),g?g.alias.push(P):(H=H||P,H!==P&&H.alias.push(P),E&&d.name&&!vi(P)&&o(d.name)),Jr(P)&&l(P),S.children){const te=S.children;for(let ee=0;ee<te.length;ee++)r(te[ee],P,g&&g.children[ee])}g=g||P}return H?()=>{o(H)}:Vt}function o(d){if(Vr(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const m=rc(d,n);n.splice(m,0,d),d.record.name&&!vi(d)&&s.set(d.record.name,d)}function h(d,m){let g,E={},S,M;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Ot(1,{location:d});M=g.record.name,E=$(bi(m.params,g.keys.filter(H=>!H.optional).concat(g.parent?g.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),d.params&&bi(d.params,g.keys.map(H=>H.name))),S=g.stringify(E)}else if(d.path!=null)S=d.path,g=n.find(H=>H.re.test(S)),g&&(E=g.parse(S),M=g.record.name);else{if(g=m.name?s.get(m.name):n.find(H=>H.re.test(m.path)),!g)throw Ot(1,{location:d,currentLocation:m});M=g.record.name,E=$({},m.params,d.params),S=g.stringify(E)}const O=[];let P=g;for(;P;)O.unshift(P.record),P=P.parent;return{name:M,path:S,params:E,matched:O,meta:ic(O)}}e.forEach(d=>r(d));function f(){n.length=0,s.clear()}return{addRoute:r,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function bi(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function _i(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:sc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function sc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function vi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ic(e){return e.reduce((t,n)=>$(t,n.meta),{})}function Ai(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function rc(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;zr(e,t[r])<0?s=r:n=r+1}const i=oc(e);return i&&(s=t.lastIndexOf(i,s-1)),s}function oc(e){let t=e;for(;t=t.parent;)if(Jr(t)&&zr(e,t)===0)return t}function Jr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ac(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ir," "),o=r.indexOf("="),a=Xt(o<0?r:r.slice(0,o)),l=o<0?null:Xt(r.slice(o+1));if(a in t){let h=t[a];ke(h)||(h=t[a]=[h]),h.push(l)}else t[a]=l}return t}function Si(e){let t="";for(let n in e){const s=e[n];if(n=kl(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ke(s)?s.map(r=>r&&os(r)):[s&&os(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function lc(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ke(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const cc=Symbol(""),Ei=Symbol(""),Ps=Symbol(""),Ts=Symbol(""),ls=Symbol("");function Gt(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tt(e,t,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const h=m=>{m===!1?l(Ot(4,{from:n,to:t})):m instanceof Error?l(m):zl(m)?l(Ot(2,{from:t,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),a())},f=r(()=>e.call(s&&s.instances[i],t,n,h));let d=Promise.resolve(f);e.length<3&&(d=d.then(h)),d.catch(m=>l(m))})}function zn(e,t,n,s,i=r=>r()){const r=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Gr(l)){const f=(l.__vccOpts||l)[t];f&&r.push(tt(f,n,s,o,a,i))}else{let h=l();r.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=gl(f)?f.default:f;o.mods[a]=f,o.components[a]=d;const g=(d.__vccOpts||d)[t];return g&&tt(g,n,s,o,a,i)()}))}}return r}function Ci(e){const t=Ie(Ps),n=Ie(Ts),s=xe(()=>{const l=dt(e.to);return t.resolve(l)}),i=xe(()=>{const{matched:l}=s.value,{length:h}=l,f=l[h-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Tt.bind(null,f));if(m>-1)return m;const g=xi(l[h-2]);return h>1&&xi(f)===g&&d[d.length-1].path!==g?d.findIndex(Tt.bind(null,l[h-2])):m}),r=xe(()=>i.value>-1&&pc(n.params,s.value.params)),o=xe(()=>i.value>-1&&i.value===n.matched.length-1&&$r(n.params,s.value.params));function a(l={}){if(dc(l)){const h=t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(Vt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:s,href:xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function uc(e){return e.length===1?e[0]:e}const fc=or({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ci,setup(e,{slots:t}){const n=tn(Ci(e)),{options:s}=Ie(Ps),i=xe(()=>({[wi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&uc(t.default(n));return e.custom?r:jr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),hc=fc;function dc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pc(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ke(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wi=(e,t,n)=>e??t??n,mc=or({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ie(ls),i=xe(()=>e.route||s.value),r=Ie(Ei,0),o=xe(()=>{let h=dt(r);const{matched:f}=i.value;let d;for(;(d=f[h])&&!d.components;)h++;return h}),a=xe(()=>i.value.matched[o.value]);un(Ei,xe(()=>o.value+1)),un(cc,a),un(ls,i);const l=nt();return Rt(()=>[l.value,a.value,e.name],([h,f,d],[m,g,E])=>{f&&(f.instances[d]=h,g&&g!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),h&&f&&(!g||!Tt(f,g)||!m)&&(f.enterCallbacks[d]||[]).forEach(S=>S(h))},{flush:"post"}),()=>{const h=i.value,f=e.name,d=a.value,m=d&&d.components[f];if(!m)return ki(n.default,{Component:m,route:h});const g=d.props[f],E=g?g===!0?h.params:typeof g=="function"?g(h):g:null,M=jr(m,$({},E,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return ki(n.default,{Component:M,route:h})||M}}});function ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gc=mc;function yc(e){const t=nc(e.routes,e),n=e.parseQuery||ac,s=e.stringifyQuery||Si,i=e.history,r=Gt(),o=Gt(),a=Gt(),l=Ro(Ze);let h=Ze;Et&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Vn.bind(null,b=>""+b),d=Vn.bind(null,Rl),m=Vn.bind(null,Xt);function g(b,R){let k,D;return Vr(b)?(k=t.getRecordMatcher(b),D=R):D=b,t.addRoute(D,k)}function E(b){const R=t.getRecordMatcher(b);R&&t.removeRoute(R)}function S(){return t.getRoutes().map(b=>b.record)}function M(b){return!!t.getRecordMatcher(b)}function O(b,R){if(R=$({},R||l.value),typeof b=="string"){const p=Wn(n,b,R.path),y=t.resolve({path:p.path},R),v=i.createHref(p.fullPath);return $(p,y,{params:m(y.params),hash:Xt(p.hash),redirectedFrom:void 0,href:v})}let k;if(b.path!=null)k=$({},b,{path:Wn(n,b.path,R.path).path});else{const p=$({},b.params);for(const y in p)p[y]==null&&delete p[y];k=$({},b,{params:d(p)}),R.params=d(R.params)}const D=t.resolve(k,R),q=b.hash||"";D.params=f(m(D.params));const c=Ol(s,$({},b,{hash:wl(q),path:D.path})),u=i.createHref(c);return $({fullPath:c,hash:q,query:s===Si?lc(b.query):b.query||{}},D,{redirectedFrom:void 0,href:u})}function P(b){return typeof b=="string"?Wn(n,b,l.value.path):$({},b)}function H(b,R){if(h!==b)return Ot(8,{from:R,to:b})}function T(b){return ee(b)}function W(b){return T($(P(b),{replace:!0}))}function te(b){const R=b.matched[b.matched.length-1];if(R&&R.redirect){const{redirect:k}=R;let D=typeof k=="function"?k(b):k;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=P(D):{path:D},D.params={}),$({query:b.query,hash:b.hash,params:D.path!=null?{}:b.params},D)}}function ee(b,R){const k=h=O(b),D=l.value,q=b.state,c=b.force,u=b.replace===!0,p=te(k);if(p)return ee($(P(p),{state:typeof p=="object"?$({},q,p.state):q,force:c,replace:u}),R||k);const y=k;y.redirectedFrom=R;let v;return!c&&Dl(s,D,k)&&(v=Ot(16,{to:y,from:D}),Te(D,D,!0,!1)),(v?Promise.resolve(v):Re(y,D)).catch(_=>$e(_)?$e(_,2)?_:Qe(_):K(_,y,D)).then(_=>{if(_){if($e(_,2))return ee($({replace:u},P(_.to),{state:typeof _.to=="object"?$({},q,_.to.state):q,force:c}),R||y)}else _=at(y,D,!0,u,q);return Ye(y,D,_),_})}function Fe(b,R){const k=H(b,R);return k?Promise.reject(k):Promise.resolve()}function qe(b){const R=_t.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(b):b()}function Re(b,R){let k;const[D,q,c]=bc(b,R);k=zn(D.reverse(),"beforeRouteLeave",b,R);for(const p of D)p.leaveGuards.forEach(y=>{k.push(tt(y,b,R))});const u=Fe.bind(null,b,R);return k.push(u),Ae(k).then(()=>{k=[];for(const p of r.list())k.push(tt(p,b,R));return k.push(u),Ae(k)}).then(()=>{k=zn(q,"beforeRouteUpdate",b,R);for(const p of q)p.updateGuards.forEach(y=>{k.push(tt(y,b,R))});return k.push(u),Ae(k)}).then(()=>{k=[];for(const p of c)if(p.beforeEnter)if(ke(p.beforeEnter))for(const y of p.beforeEnter)k.push(tt(y,b,R));else k.push(tt(p.beforeEnter,b,R));return k.push(u),Ae(k)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),k=zn(c,"beforeRouteEnter",b,R,qe),k.push(u),Ae(k))).then(()=>{k=[];for(const p of o.list())k.push(tt(p,b,R));return k.push(u),Ae(k)}).catch(p=>$e(p,8)?p:Promise.reject(p))}function Ye(b,R,k){a.list().forEach(D=>qe(()=>D(b,R,k)))}function at(b,R,k,D,q){const c=H(b,R);if(c)return c;const u=R===Ze,p=Et?history.state:{};k&&(D||u?i.replace(b.fullPath,$({scroll:u&&p&&p.scroll},q)):i.push(b.fullPath,q)),l.value=b,Te(b,R,k,u),Qe()}let Pe;function Dt(){Pe||(Pe=i.listen((b,R,k)=>{if(!rn.listening)return;const D=O(b),q=te(D);if(q){ee($(q,{replace:!0,force:!0}),D).catch(Vt);return}h=D;const c=l.value;Et&&Ll(di(c.fullPath,k.delta),Dn()),Re(D,c).catch(u=>$e(u,12)?u:$e(u,2)?(ee($(P(u.to),{force:!0}),D).then(p=>{$e(p,20)&&!k.delta&&k.type===en.pop&&i.go(-1,!1)}).catch(Vt),Promise.reject()):(k.delta&&i.go(-k.delta,!1),K(u,D,c))).then(u=>{u=u||at(D,c,!1),u&&(k.delta&&!$e(u,8)?i.go(-k.delta,!1):k.type===en.pop&&$e(u,20)&&i.go(-1,!1)),Ye(D,c,u)}).catch(Vt)}))}let yt=Gt(),se=Gt(),J;function K(b,R,k){Qe(b);const D=se.list();return D.length?D.forEach(q=>q(b,R,k)):console.error(b),Promise.reject(b)}function Le(){return J&&l.value!==Ze?Promise.resolve():new Promise((b,R)=>{yt.add([b,R])})}function Qe(b){return J||(J=!b,Dt(),yt.list().forEach(([R,k])=>b?k(b):R()),yt.reset()),b}function Te(b,R,k,D){const{scrollBehavior:q}=e;if(!Et||!q)return Promise.resolve();const c=!k&&Kl(di(b.fullPath,0))||(D||!k)&&history.state&&history.state.scroll||null;return tr().then(()=>q(b,R,c)).then(u=>u&&Nl(u)).catch(u=>K(u,b,R))}const de=b=>i.go(b);let bt;const _t=new Set,rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:E,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:S,resolve:O,options:e,push:T,replace:W,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Le,install(b){const R=this;b.component("RouterLink",hc),b.component("RouterView",gc),b.config.globalProperties.$router=R,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),Et&&!bt&&l.value===Ze&&(bt=!0,T(i.location).catch(q=>{}));const k={};for(const q in Ze)Object.defineProperty(k,q,{get:()=>l.value[q],enumerable:!0});b.provide(Ps,R),b.provide(Ts,Yi(k)),b.provide(ls,l);const D=b.unmount;_t.add(b),b.unmount=function(){_t.delete(b),_t.size<1&&(h=Ze,Pe&&Pe(),Pe=null,l.value=Ze,bt=!1,J=!1),D()}}};function Ae(b){return b.reduce((R,k)=>R.then(()=>qe(k)),Promise.resolve())}return rn}function bc(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(h=>Tt(h,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(h=>Tt(h,l))||i.push(l))}return[n,s,i]}function qr(e){return Ie(Ts)}const _c={__name:"App",setup(e){const t=qr();return Rt(()=>t.fullPath,n=>{console.log("Route changed to:",n)}),(n,s)=>{const i=ws("router-view");return ze(),Tr(i,{key:n.$route.fullPath})}}},vc={id:"90s-mashup",title:"90s Mashup",bpm:88,chords:["Am","G","Em","C","F"],songs:[{title:"Woh Pehli Baar",lyrics:`
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
chod do aanchal zamana kya kahega`}]},cs=[Ac,vc],Sc={style:{padding:"2rem"}},Ec={__name:"Home",setup(e){return(t,n)=>{const s=ws("router-link");return ze(),pt("div",Sc,[n[0]||(n[0]=ie("h1",null,"Repertoire",-1)),ie("ul",null,[(ze(!0),pt(Ce,null,fr(dt(cs),i=>(ze(),pt("li",{key:i.id},[he(s,{to:`/song/${i.id}`},{default:Cs(()=>[Tn(ft(i.title),1)]),_:2},1032,["to"])]))),128))])])}}},Os=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Cc={class:"song-block"},xc={class:"song-title"},wc=["innerHTML"],kc={__name:"SongBlock",props:{title:String,lyrics:String},setup(e){return(t,n)=>(ze(),pt("div",Cc,[ie("h2",xc,ft(e.title),1),ie("pre",{class:"lyrics",innerHTML:e.lyrics},null,8,wc)]))}},Fc=Os(kc,[["__scopeId","data-v-a625e8f5"]]),Rc={class:"controls-bar"},Pc={style:{"margin-left":"1rem"}},Tc={__name:"FooterControls",props:{originalLyrics:Array,transpositionOffset:Number},emits:["updateLyrics","updateOffset"],setup(e,{expose:t,emit:n}){const s=e,i=n,r=nt(1),o=nt(!1);let a=null,l=window.scrollY;function h(){o.value&&(l+=r.value*.05,window.scrollTo(0,l),a=requestAnimationFrame(h))}function f(){o.value?(cancelAnimationFrame(a),o.value=!1):(l=window.scrollY,o.value=!0,h())}const d=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function m(E,S){const M=E.match(/\[([A-G][#b]?)([^]]*)\]/);if(!M)return E;let O=M[1];const P=M[2];O={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"}[O]||O;const T=d.indexOf(O);if(T===-1)return E;const W=(T+S+d.length)%d.length,te=d[W];return console.log("Transpose chord ",E," with offset ",S," to get this: ",`[${te}${P}]`),`[${te}${P}]`}function g(E){const S=s.transpositionOffset+E;i("updateOffset",S);const M=s.originalLyrics.map(O=>O.replace(/\[[A-G][#b]*[^]]*\]/g,P=>m(P,S)));i("updateLyrics",M)}return Fn(()=>{cancelAnimationFrame(a)}),t({toggleScroll:f}),(E,S)=>(ze(),pt("div",Rc,[ie("button",{onClick:S[0]||(S[0]=M=>g(1))},"TRANS +"),ie("button",{onClick:S[1]||(S[1]=M=>g(-1))},"TRANS −"),ie("button",{onClick:f},ft(o.value?"STOP SCROLL":"START SCROLL"),1),ie("label",Pc,[S[3]||(S[3]=Tn(" Speed: ")),Io(ie("input",{type:"range",min:"1",max:"10","onUpdate:modelValue":S[2]||(S[2]=M=>r.value=M)},null,512),[[ul,r.value]])])]))}},Oc=Os(Tc,[["__scopeId","data-v-3a08db84"]]),Dc={style:{"padding-bottom":"6rem"}},Mc={class:"header-bar"},jc={class:"content"},Hc={ref:"lyricsContainer"},Gc={__name:"Song",setup(e){const t=qr(),n=cs.find(m=>m.id===t.params.id),s=tn({...n}),i=nt(s.songs.map(m=>m.lyrics)),r=nt([]),o=nt(0);function a(){r.value=s.songs.map(m=>{const E=m.lyrics.replace(/<span class="chord">(\[[^\]]+\])<\/span>/g,"$1").replace(/\[[^\]]+\]/g,S=>`<span class="chord">${S}</span>`);return{...m,lyrics:E}})}function l(m){s.songs.forEach((g,E)=>g.lyrics=m[E]),a()}const h=nt(!1);function f(){h.value=!h.value,document.documentElement.classList.toggle("dark",h.value)}const d=nt(null);return ur(()=>{a();const m=g=>{var E,S;g.target.tagName!=="INPUT"&&((S=(E=d.value)==null?void 0:E.toggleScroll)==null||S.call(E))};window.addEventListener("keydown",m),Fn(()=>{})}),Rt(()=>t.params.id,m=>{const g=cs.find(E=>E.id===m);Object.assign(s,g),i.value=g.songs.map(E=>E.lyrics),o.value=0,a()}),(m,g)=>{const E=ws("router-link");return ze(),pt("div",Dc,[ie("div",Mc,[he(E,{to:"/",class:"back-btn"},{default:Cs(()=>g[1]||(g[1]=[Tn("⬅ Back")])),_:1}),ie("button",{class:"theme-toggle",onClick:f},ft(h.value?"🌞 Light Mode":"🌙 Dark Mode"),1)]),ie("div",jc,[ie("h1",null,ft(s==null?void 0:s.title),1),ie("p",null,"BPM: "+ft(s.bpm),1),ie("div",Hc,[(ze(!0),pt(Ce,null,fr(r.value,(S,M)=>(ze(),Tr(Fc,{key:M,title:S.title,lyrics:S.lyrics},null,8,["title","lyrics"]))),128))],512)]),he(Oc,{ref_key:"footer",ref:d,originalLyrics:i.value,transpositionOffset:o.value,onUpdateLyrics:l,onUpdateOffset:g[0]||(g[0]=S=>o.value=S)},null,8,["originalLyrics","transpositionOffset"])])}}},Bc=Os(Gc,[["__scopeId","data-v-9f736abb"]]),Ic=yc({history:Wl("/setlist/"),routes:[{path:"/",name:"Home",component:Ec},{path:"/song/:id",name:"Song",component:Bc}]});dl(_c).use(Ic).mount("#app");
