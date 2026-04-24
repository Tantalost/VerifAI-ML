(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sa={exports:{}},ci={},Ea={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),$c=Symbol.for("react.portal"),Vc=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Gc=Symbol.for("react.memo"),qc=Symbol.for("react.lazy"),Ys=Symbol.iterator;function Kc(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var _a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ca=Object.assign,Na={};function pn(e,t,n){this.props=e,this.context=t,this.refs=Na,this.updater=n||_a}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function za(){}za.prototype=pn.prototype;function Jl(e,t,n){this.props=e,this.context=t,this.refs=Na,this.updater=n||_a}var es=Jl.prototype=new za;es.constructor=Jl;Ca(es,pn.prototype);es.isPureReactComponent=!0;var Xs=Array.isArray,Ma=Object.prototype.hasOwnProperty,ts={current:null},ja={key:!0,ref:!0,__self:!0,__source:!0};function La(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Ma.call(t,r)&&!ja.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var a=Array(o),u=0;u<o;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:rr,type:e,key:l,ref:s,props:i,_owner:ts.current}}function Zc(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ns(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function Jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gs=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jc(""+e.key):t.toString(36)}function zr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case rr:case $c:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+zi(s,0):r,Xs(i)?(n="",e!=null&&(n=e.replace(Gs,"$&/")+"/"),zr(i,t,n,"",function(u){return u})):i!=null&&(ns(i)&&(i=Zc(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gs,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Xs(e))for(var o=0;o<e.length;o++){l=e[o];var a=r+zi(l,o);s+=zr(l,t,n,a,i)}else if(a=Kc(e),typeof a=="function")for(e=a.call(e),o=0;!(l=e.next()).done;)l=l.value,a=r+zi(l,o++),s+=zr(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function cr(e,t,n){if(e==null)return e;var r=[],i=0;return zr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function ed(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Mr={transition:null},td={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ts};function Pa(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!ns(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=pn;F.Fragment=Vc;F.Profiler=Wc;F.PureComponent=Jl;F.StrictMode=Bc;F.Suspense=Xc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=td;F.act=Pa;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ca({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in t)Ma.call(t,a)&&!ja.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&o!==void 0?o[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){o=Array(a);for(var u=0;u<a;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:rr,type:e.type,key:i,ref:l,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:Qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hc,_context:e},e.Consumer=e};F.createElement=La;F.createFactory=function(e){var t=La.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Yc,render:e}};F.isValidElement=ns;F.lazy=function(e){return{$$typeof:qc,_payload:{_status:-1,_result:e},_init:ed}};F.memo=function(e,t){return{$$typeof:Gc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};F.unstable_act=Pa;F.useCallback=function(e,t){return pe.current.useCallback(e,t)};F.useContext=function(e){return pe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};F.useEffect=function(e,t){return pe.current.useEffect(e,t)};F.useId=function(){return pe.current.useId()};F.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return pe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};F.useRef=function(e){return pe.current.useRef(e)};F.useState=function(e){return pe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return pe.current.useTransition()};F.version="18.3.1";Ea.exports=F;var V=Ea.exports;const nd=Uc(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=V,id=Symbol.for("react.element"),ld=Symbol.for("react.fragment"),sd=Object.prototype.hasOwnProperty,od=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ad={key:!0,ref:!0,__self:!0,__source:!0};function Aa(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)sd.call(t,r)&&!ad.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:id,type:e,key:l,ref:s,props:i,_owner:od.current}}ci.Fragment=ld;ci.jsx=Aa;ci.jsxs=Aa;Sa.exports=ci;var p=Sa.exports,Ta={exports:{}},Ne={},Ra={exports:{}},Ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,R){var I=j.length;j.push(R);e:for(;0<I;){var G=I-1>>>1,te=j[G];if(0<i(te,R))j[G]=R,j[I]=te,I=G;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var R=j[0],I=j.pop();if(I!==R){j[0]=I;e:for(var G=0,te=j.length,ar=te>>>1;G<ar;){var St=2*(G+1)-1,Ni=j[St],Et=St+1,ur=j[Et];if(0>i(Ni,I))Et<te&&0>i(ur,Ni)?(j[G]=ur,j[Et]=I,G=Et):(j[G]=Ni,j[St]=I,G=St);else if(Et<te&&0>i(ur,I))j[G]=ur,j[Et]=I,G=Et;else break e}}return R}function i(j,R){var I=j.sortIndex-R.sortIndex;return I!==0?I:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var a=[],u=[],c=1,g=null,d=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=j)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function w(j){if(x=!1,m(j),!y)if(n(a)!==null)y=!0,bt(k);else{var R=n(u);R!==null&&Ut(w,R.startTime-j)}}function k(j,R){y=!1,x&&(x=!1,f(N),N=-1),v=!0;var I=d;try{for(m(R),g=n(a);g!==null&&(!(g.expirationTime>R)||j&&!z());){var G=g.callback;if(typeof G=="function"){g.callback=null,d=g.priorityLevel;var te=G(g.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?g.callback=te:g===n(a)&&r(a),m(R)}else r(a);g=n(a)}if(g!==null)var ar=!0;else{var St=n(u);St!==null&&Ut(w,St.startTime-R),ar=!1}return ar}finally{g=null,d=I,v=!1}}var E=!1,_=null,N=-1,P=5,L=-1;function z(){return!(e.unstable_now()-L<P)}function T(){if(_!==null){var j=e.unstable_now();L=j;var R=!0;try{R=_(!0,j)}finally{R?O():(E=!1,_=null)}}else E=!1}var O;if(typeof h=="function")O=function(){h(T)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,me=A.port2;A.port1.onmessage=T,O=function(){me.postMessage(null)}}else O=function(){S(T,0)};function bt(j){_=j,E||(E=!0,O())}function Ut(j,R){N=S(function(){j(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,bt(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var I=d;d=R;try{return j()}finally{d=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=d;d=j;try{return R()}finally{d=I}},e.unstable_scheduleCallback=function(j,R,I){var G=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?G+I:G):I=G,j){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=I+te,j={id:c++,callback:R,priorityLevel:j,startTime:I,expirationTime:te,sortIndex:-1},I>G?(j.sortIndex=I,t(u,j),n(a)===null&&j===n(u)&&(x?(f(N),N=-1):x=!0,Ut(w,I-G))):(j.sortIndex=te,t(a,j),y||v||(y=!0,bt(k))),j},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(j){var R=d;return function(){var I=d;d=R;try{return j.apply(this,arguments)}finally{d=I}}}})(Ia);Ra.exports=Ia;var ud=Ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=V,Ce=ud;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fa=new Set,Un={};function Ot(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Un[e]=t,e=0;e<t.length;e++)Fa.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qs={},Ks={};function fd(e){return ll.call(Ks,e)?!0:ll.call(qs,e)?!1:dd.test(e)?Ks[e]=!0:(qs[e]=!0,!1)}function hd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pd(e,t,n,r){if(t===null||typeof t>"u"||hd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var rs=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rs,is);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rs,is);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rs,is);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pd(t,n,i,r)&&(n=null),r||i===null?fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Oa=Symbol.for("react.provider"),Da=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ba=Symbol.for("react.offscreen"),Zs=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Mi;function Nn(e){if(Mi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mi=t&&t[1]||""}return`
`+Mi+e}var ji=!1;function Li(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,o=l.length-1;1<=s&&0<=o&&i[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==l[o]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=o);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function gd(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Vt:return"Portal";case sl:return"Profiler";case ss:return"StrictMode";case ol:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Da:return(e.displayName||"Context")+".Consumer";case Oa:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function md(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vd(e){var t=Ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){e._valueTracker||(e._valueTracker=vd(e))}function $a(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Js(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Va(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function dl(e,t){Va(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function to(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(zn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Ba(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function no(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){yd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Qa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(xd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,tn=null,nn=null;function ro(e){if(e=sr(e)){if(typeof yl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=gi(t),yl(e.stateNode,e.type,t))}}function Xa(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Ga(){if(tn){var e=tn,t=nn;if(nn=tn=null,ro(e),t)for(e=0;e<t.length;e++)ro(t[e])}}function qa(e,t){return e(t)}function Ka(){}var Pi=!1;function Za(e,t,n){if(Pi)return e(t,n);Pi=!0;try{return qa(e,t,n)}finally{Pi=!1,(tn!==null||nn!==null)&&(Ka(),Ga())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var xl=!1;if(Ke)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{xl=!1}function wd(e,t,n,r,i,l,s,o,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Pn=!1,Ur=null,$r=!1,wl=null,kd={onError:function(e){Pn=!0,Ur=e}};function Sd(e,t,n,r,i,l,s,o,a){Pn=!1,Ur=null,wd.apply(kd,arguments)}function Ed(e,t,n,r,i,l,s,o,a){if(Sd.apply(this,arguments),Pn){if(Pn){var u=Ur;Pn=!1,Ur=null}else throw Error(C(198));$r||($r=!0,wl=u)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ja(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function io(e){if(Dt(e)!==e)throw Error(C(188))}function _d(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return io(i),e;if(l===r)return io(i),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=l;break}if(o===r){s=!0,r=i,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=i;break}if(o===r){s=!0,r=l,n=i;break}o=o.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function eu(e){return e=_d(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tu(e);if(t!==null)return t;e=e.sibling}return null}var nu=Ce.unstable_scheduleCallback,lo=Ce.unstable_cancelCallback,Cd=Ce.unstable_shouldYield,Nd=Ce.unstable_requestPaint,q=Ce.unstable_now,zd=Ce.unstable_getCurrentPriorityLevel,cs=Ce.unstable_ImmediatePriority,ru=Ce.unstable_UserBlockingPriority,Vr=Ce.unstable_NormalPriority,Md=Ce.unstable_LowPriority,iu=Ce.unstable_IdlePriority,di=null,We=null;function jd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(di,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Ad,Ld=Math.log,Pd=Math.LN2;function Ad(e){return e>>>=0,e===0?32:31-(Ld(e)/Pd|0)|0}var pr=64,gr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=Mn(o):(l&=s,l!==0&&(r=Mn(l)))}else s=n&~i,s!==0?r=Mn(s):l!==0&&(r=Mn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function Td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-De(l),o=1<<s,a=i[s];a===-1?(!(o&n)||o&r)&&(i[s]=Td(o,t)):a<=t&&(e.expiredLanes|=o),l&=~o}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=pr;return pr<<=1,!(pr&4194240)&&(pr=64),e}function Ai(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var b=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,fs,au,uu,cu,Sl=!1,mr=[],ut=null,ct=null,dt=null,Bn=new Map,Wn=new Map,lt=[],Fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function so(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function xn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Od(e,t,n,r,i){switch(t){case"focusin":return ut=xn(ut,e,t,n,r,i),!0;case"dragenter":return ct=xn(ct,e,t,n,r,i),!0;case"mouseover":return dt=xn(dt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Bn.set(l,xn(Bn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Wn.set(l,xn(Wn.get(l)||null,e,t,n,r,i)),!0}return!1}function du(e){var t=zt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ja(n),t!==null){e.blockedOn=t,cu(e.priority,function(){au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=sr(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function oo(e,t,n){jr(e)&&n.delete(t)}function Dd(){Sl=!1,ut!==null&&jr(ut)&&(ut=null),ct!==null&&jr(ct)&&(ct=null),dt!==null&&jr(dt)&&(dt=null),Bn.forEach(oo),Wn.forEach(oo)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Dd)))}function Hn(e){function t(i){return wn(i,e)}if(0<mr.length){wn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&wn(ut,e),ct!==null&&wn(ct,e),dt!==null&&wn(dt,e),Bn.forEach(t),Wn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)du(n),n.blockedOn===null&&lt.shift()}var rn=tt.ReactCurrentBatchConfig,Wr=!0;function bd(e,t,n,r){var i=b,l=rn.transition;rn.transition=null;try{b=1,hs(e,t,n,r)}finally{b=i,rn.transition=l}}function Ud(e,t,n,r){var i=b,l=rn.transition;rn.transition=null;try{b=4,hs(e,t,n,r)}finally{b=i,rn.transition=l}}function hs(e,t,n,r){if(Wr){var i=El(e,t,n,r);if(i===null)Vi(e,t,r,Hr,n),so(e,r);else if(Od(i,e,t,n,r))r.stopPropagation();else if(so(e,r),t&4&&-1<Fd.indexOf(e)){for(;i!==null;){var l=sr(i);if(l!==null&&ou(l),l=El(e,t,n,r),l===null&&Vi(e,t,r,Hr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Vi(e,t,r,null,n)}}var Hr=null;function El(e,t,n,r){if(Hr=null,e=us(r),e=zt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ja(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case cs:return 1;case ru:return 4;case Vr:case Md:return 16;case iu:return 536870912;default:return 16}default:return 16}}var ot=null,ps=null,Lr=null;function hu(){if(Lr)return Lr;var e,t=ps,n=t.length,r,i="value"in ot?ot.value:ot.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function ao(){return!1}function ze(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?vr:ao,this.isPropagationStopped=ao,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=ze(gn),lr=Y({},gn,{view:0,detail:0}),$d=ze(lr),Ti,Ri,kn,fi=Y({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Ti=e.screenX-kn.screenX,Ri=e.screenY-kn.screenY):Ri=Ti=0,kn=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),uo=ze(fi),Vd=Y({},fi,{dataTransfer:0}),Bd=ze(Vd),Wd=Y({},lr,{relatedTarget:0}),Ii=ze(Wd),Hd=Y({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qd=ze(Hd),Yd=Y({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=ze(Yd),Gd=Y({},gn,{data:0}),co=ze(Gd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zd[e])?!!t[e]:!1}function ms(){return Jd}var ef=Y({},lr,{key:function(e){if(e.key){var t=qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=ze(ef),nf=Y({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=ze(nf),rf=Y({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),lf=ze(rf),sf=Y({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),of=ze(sf),af=Y({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=ze(af),cf=[9,13,27,32],vs=Ke&&"CompositionEvent"in window,An=null;Ke&&"documentMode"in document&&(An=document.documentMode);var df=Ke&&"TextEvent"in window&&!An,pu=Ke&&(!vs||An&&8<An&&11>=An),ho=" ",po=!1;function gu(e,t){switch(e){case"keyup":return cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function ff(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(po=!0,ho);case"textInput":return e=t.data,e===ho&&po?null:e;default:return null}}function hf(e,t){if(Wt)return e==="compositionend"||!vs&&gu(e,t)?(e=hu(),Lr=ps=ot=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pu&&t.locale!=="ko"?null:t.data;default:return null}}var pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pf[e.type]:t==="textarea"}function vu(e,t,n,r){Xa(r),t=Qr(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,Qn=null;function gf(e){Mu(e,0)}function hi(e){var t=Yt(e);if($a(t))return e}function mf(e,t){if(e==="change")return t}var yu=!1;if(Ke){var Fi;if(Ke){var Oi="oninput"in document;if(!Oi){var mo=document.createElement("div");mo.setAttribute("oninput","return;"),Oi=typeof mo.oninput=="function"}Fi=Oi}else Fi=!1;yu=Fi&&(!document.documentMode||9<document.documentMode)}function vo(){Tn&&(Tn.detachEvent("onpropertychange",xu),Qn=Tn=null)}function xu(e){if(e.propertyName==="value"&&hi(Qn)){var t=[];vu(t,Qn,e,us(e)),Za(gf,t)}}function vf(e,t,n){e==="focusin"?(vo(),Tn=t,Qn=n,Tn.attachEvent("onpropertychange",xu)):e==="focusout"&&vo()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(Qn)}function xf(e,t){if(e==="click")return hi(t)}function wf(e,t){if(e==="input"||e==="change")return hi(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:kf;function Yn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ll.call(t,i)||!Ue(e[i],t[i]))return!1}return!0}function yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xo(e,t){var n=yo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yo(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=xo(n,l);var s=xo(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=Ke&&"documentMode"in document&&11>=document.documentMode,Ht=null,_l=null,Rn=null,Cl=!1;function wo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||Ht==null||Ht!==br(r)||(r=Ht,"selectionStart"in r&&ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=Qr(_l,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Di={},Su={};Ke&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function pi(e){if(Di[e])return Di[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Su)return Di[e]=t[n];return e}var Eu=pi("animationend"),_u=pi("animationiteration"),Cu=pi("animationstart"),Nu=pi("transitionend"),zu=new Map,ko="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){zu.set(e,t),Ot(t,[e])}for(var bi=0;bi<ko.length;bi++){var Ui=ko[bi],_f=Ui.toLowerCase(),Cf=Ui[0].toUpperCase()+Ui.slice(1);xt(_f,"on"+Cf)}xt(Eu,"onAnimationEnd");xt(_u,"onAnimationIteration");xt(Cu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Nu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function So(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ed(r,t,void 0,e),e.currentTarget=null}function Mu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],a=o.instance,u=o.currentTarget;if(o=o.listener,a!==l&&i.isPropagationStopped())break e;So(i,o,u),l=a}else for(s=0;s<r.length;s++){if(o=r[s],a=o.instance,u=o.currentTarget,o=o.listener,a!==l&&i.isPropagationStopped())break e;So(i,o,u),l=a}}}if($r)throw e=wl,$r=!1,wl=null,e}function $(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function $i(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[xr]){e[xr]=!0,Fa.forEach(function(n){n!=="selectionchange"&&(Nf.has(n)||$i(n,!1,e),$i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xr]||(t[xr]=!0,$i("selectionchange",!1,t))}}function ju(e,t,n,r){switch(fu(t)){case 1:var i=bd;break;case 4:i=Ud;break;default:i=hs}n=i.bind(null,t,n,e),i=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vi(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;o!==null;){if(s=zt(o),s===null)return;if(a=s.tag,a===5||a===6){r=l=s;continue e}o=o.parentNode}}r=r.return}Za(function(){var u=l,c=us(n),g=[];e:{var d=zu.get(e);if(d!==void 0){var v=gs,y=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":v=tf;break;case"focusin":y="focus",v=Ii;break;case"focusout":y="blur",v=Ii;break;case"beforeblur":case"afterblur":v=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=lf;break;case Eu:case _u:case Cu:v=Qd;break;case Nu:v=of;break;case"scroll":v=$d;break;case"wheel":v=uf;break;case"copy":case"cut":case"paste":v=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fo}var x=(t&4)!==0,S=!x&&e==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=Vn(h,f),w!=null&&x.push(Gn(h,w,m)))),S)break;h=h.return}0<x.length&&(d=new v(d,y,null,n,c),g.push({event:d,listeners:x}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==vl&&(y=n.relatedTarget||n.fromElement)&&(zt(y)||y[Ze]))break e;if((v||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?zt(y):null,y!==null&&(S=Dt(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=uo,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=fo,w="onPointerLeave",f="onPointerEnter",h="pointer"),S=v==null?d:Yt(v),m=y==null?d:Yt(y),d=new x(w,h+"leave",v,n,c),d.target=S,d.relatedTarget=m,w=null,zt(c)===u&&(x=new x(f,h+"enter",y,n,c),x.target=m,x.relatedTarget=S,w=x),S=w,v&&y)t:{for(x=v,f=y,h=0,m=x;m;m=$t(m))h++;for(m=0,w=f;w;w=$t(w))m++;for(;0<h-m;)x=$t(x),h--;for(;0<m-h;)f=$t(f),m--;for(;h--;){if(x===f||f!==null&&x===f.alternate)break t;x=$t(x),f=$t(f)}x=null}else x=null;v!==null&&Eo(g,d,v,x,!1),y!==null&&S!==null&&Eo(g,S,y,x,!0)}}e:{if(d=u?Yt(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var k=mf;else if(go(d))if(yu)k=wf;else{k=yf;var E=vf}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=xf);if(k&&(k=k(e,u))){vu(g,k,n,c);break e}E&&E(e,d,u),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&fl(d,"number",d.value)}switch(E=u?Yt(u):window,e){case"focusin":(go(E)||E.contentEditable==="true")&&(Ht=E,_l=u,Rn=null);break;case"focusout":Rn=_l=Ht=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,wo(g,n,c);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":wo(g,n,c)}var _;if(vs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Wt?gu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(pu&&n.locale!=="ko"&&(Wt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Wt&&(_=hu()):(ot=c,ps="value"in ot?ot.value:ot.textContent,Wt=!0)),E=Qr(u,N),0<E.length&&(N=new co(N,e,null,n,c),g.push({event:N,listeners:E}),_?N.data=_:(_=mu(n),_!==null&&(N.data=_)))),(_=df?ff(e,n):hf(e,n))&&(u=Qr(u,"onBeforeInput"),0<u.length&&(c=new co("onBeforeInput","beforeinput",null,n,c),g.push({event:c,listeners:u}),c.data=_))}Mu(g,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Vn(e,n),l!=null&&r.unshift(Gn(e,l,i)),l=Vn(e,t),l!=null&&r.push(Gn(e,l,i))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eo(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,a=o.alternate,u=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&u!==null&&(o=u,i?(a=Vn(n,l),a!=null&&s.unshift(Gn(n,a,o))):i||(a=Vn(n,l),a!=null&&s.push(Gn(n,a,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var zf=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function _o(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(Mf,"")}function wr(e,t,n){if(t=_o(t),_o(e)!==t&&n)throw Error(C(425))}function Yr(){}var Nl=null,zl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,jf=typeof clearTimeout=="function"?clearTimeout:void 0,Co=typeof Promise=="function"?Promise:void 0,Lf=typeof queueMicrotask=="function"?queueMicrotask:typeof Co<"u"?function(e){return Co.resolve(null).then(e).catch(Pf)}:jl;function Pf(e){setTimeout(function(){throw e})}function Bi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function No(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Be="__reactFiber$"+mn,qn="__reactProps$"+mn,Ze="__reactContainer$"+mn,Ll="__reactEvents$"+mn,Af="__reactListeners$"+mn,Tf="__reactHandles$"+mn;function zt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=No(e);e!==null;){if(n=e[Be])return n;e=No(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Be]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function gi(e){return e[qn]||null}var Pl=[],Xt=-1;function wt(e){return{current:e}}function B(e){0>Xt||(e.current=Pl[Xt],Pl[Xt]=null,Xt--)}function U(e,t){Xt++,Pl[Xt]=e.current,e.current=t}var yt={},de=wt(yt),xe=wt(!1),At=yt;function an(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function Xr(){B(xe),B(de)}function zo(e,t,n){if(de.current!==yt)throw Error(C(168));U(de,t),U(xe,n)}function Lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,md(e)||"Unknown",i));return Y({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,At=de.current,U(de,e),U(xe,xe.current),!0}function Mo(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Lu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,B(xe),B(de),U(de,e)):B(xe),U(xe,n)}var Ye=null,mi=!1,Wi=!1;function Pu(e){Ye===null?Ye=[e]:Ye.push(e)}function Rf(e){mi=!0,Pu(e)}function kt(){if(!Wi&&Ye!==null){Wi=!0;var e=0,t=b;try{var n=Ye;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,mi=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),nu(cs,kt),i}finally{b=t,Wi=!1}}return null}var Gt=[],qt=0,qr=null,Kr=0,Me=[],je=0,Tt=null,Xe=1,Ge="";function Ct(e,t){Gt[qt++]=Kr,Gt[qt++]=qr,qr=e,Kr=t}function Au(e,t,n){Me[je++]=Xe,Me[je++]=Ge,Me[je++]=Tt,Tt=e;var r=Xe;e=Ge;var i=32-De(r)-1;r&=~(1<<i),n+=1;var l=32-De(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xe=1<<32-De(t)+i|n<<i|r,Ge=l+e}else Xe=1<<l|n<<i|r,Ge=e}function xs(e){e.return!==null&&(Ct(e,1),Au(e,1,0))}function ws(e){for(;e===qr;)qr=Gt[--qt],Gt[qt]=null,Kr=Gt[--qt],Gt[qt]=null;for(;e===Tt;)Tt=Me[--je],Me[je]=null,Ge=Me[--je],Me[je]=null,Xe=Me[--je],Me[je]=null}var _e=null,Ee=null,W=!1,Oe=null;function Tu(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Ee=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Xe,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Ee=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(W){var t=Ee;if(t){var n=t;if(!jo(e,t)){if(Al(e))throw Error(C(418));t=ft(n.nextSibling);var r=_e;t&&jo(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,W=!1,_e=e)}}else{if(Al(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,_e=e}}}function Lo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function kr(e){if(e!==_e)return!1;if(!W)return Lo(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Ee)){if(Al(e))throw Ru(),Error(C(418));for(;t;)Tu(e,t),t=ft(t.nextSibling)}if(Lo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=_e?ft(e.stateNode.nextSibling):null;return!0}function Ru(){for(var e=Ee;e;)e=ft(e.nextSibling)}function un(){Ee=_e=null,W=!1}function ks(e){Oe===null?Oe=[e]:Oe.push(e)}var If=tt.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=i.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Po(e){var t=e._init;return t(e._payload)}function Iu(e){function t(f,h){if(e){var m=f.deletions;m===null?(f.deletions=[h],f.flags|=16):m.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=mt(f,h),f.index=0,f.sibling=null,f}function l(f,h,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<h?(f.flags|=2,h):m):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,h,m,w){return h===null||h.tag!==6?(h=Ki(m,f.mode,w),h.return=f,h):(h=i(h,m),h.return=f,h)}function a(f,h,m,w){var k=m.type;return k===Bt?c(f,h,m.props.children,w,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&Po(k)===h.type)?(w=i(h,m.props),w.ref=Sn(f,h,m),w.return=f,w):(w=Dr(m.type,m.key,m.props,null,f.mode,w),w.ref=Sn(f,h,m),w.return=f,w)}function u(f,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Zi(m,f.mode,w),h.return=f,h):(h=i(h,m.children||[]),h.return=f,h)}function c(f,h,m,w,k){return h===null||h.tag!==7?(h=Pt(m,f.mode,w,k),h.return=f,h):(h=i(h,m),h.return=f,h)}function g(f,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ki(""+h,f.mode,m),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case dr:return m=Dr(h.type,h.key,h.props,null,f.mode,m),m.ref=Sn(f,null,h),m.return=f,m;case Vt:return h=Zi(h,f.mode,m),h.return=f,h;case rt:var w=h._init;return g(f,w(h._payload),m)}if(zn(h)||vn(h))return h=Pt(h,f.mode,m,null),h.return=f,h;Sr(f,h)}return null}function d(f,h,m,w){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:o(f,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dr:return m.key===k?a(f,h,m,w):null;case Vt:return m.key===k?u(f,h,m,w):null;case rt:return k=m._init,d(f,h,k(m._payload),w)}if(zn(m)||vn(m))return k!==null?null:c(f,h,m,w,null);Sr(f,m)}return null}function v(f,h,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,o(h,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case dr:return f=f.get(w.key===null?m:w.key)||null,a(h,f,w,k);case Vt:return f=f.get(w.key===null?m:w.key)||null,u(h,f,w,k);case rt:var E=w._init;return v(f,h,m,E(w._payload),k)}if(zn(w)||vn(w))return f=f.get(m)||null,c(h,f,w,k,null);Sr(h,w)}return null}function y(f,h,m,w){for(var k=null,E=null,_=h,N=h=0,P=null;_!==null&&N<m.length;N++){_.index>N?(P=_,_=null):P=_.sibling;var L=d(f,_,m[N],w);if(L===null){_===null&&(_=P);break}e&&_&&L.alternate===null&&t(f,_),h=l(L,h,N),E===null?k=L:E.sibling=L,E=L,_=P}if(N===m.length)return n(f,_),W&&Ct(f,N),k;if(_===null){for(;N<m.length;N++)_=g(f,m[N],w),_!==null&&(h=l(_,h,N),E===null?k=_:E.sibling=_,E=_);return W&&Ct(f,N),k}for(_=r(f,_);N<m.length;N++)P=v(_,f,N,m[N],w),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?N:P.key),h=l(P,h,N),E===null?k=P:E.sibling=P,E=P);return e&&_.forEach(function(z){return t(f,z)}),W&&Ct(f,N),k}function x(f,h,m,w){var k=vn(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var E=k=null,_=h,N=h=0,P=null,L=m.next();_!==null&&!L.done;N++,L=m.next()){_.index>N?(P=_,_=null):P=_.sibling;var z=d(f,_,L.value,w);if(z===null){_===null&&(_=P);break}e&&_&&z.alternate===null&&t(f,_),h=l(z,h,N),E===null?k=z:E.sibling=z,E=z,_=P}if(L.done)return n(f,_),W&&Ct(f,N),k;if(_===null){for(;!L.done;N++,L=m.next())L=g(f,L.value,w),L!==null&&(h=l(L,h,N),E===null?k=L:E.sibling=L,E=L);return W&&Ct(f,N),k}for(_=r(f,_);!L.done;N++,L=m.next())L=v(_,f,N,L.value,w),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?N:L.key),h=l(L,h,N),E===null?k=L:E.sibling=L,E=L);return e&&_.forEach(function(T){return t(f,T)}),W&&Ct(f,N),k}function S(f,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Bt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case dr:e:{for(var k=m.key,E=h;E!==null;){if(E.key===k){if(k=m.type,k===Bt){if(E.tag===7){n(f,E.sibling),h=i(E,m.props.children),h.return=f,f=h;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&Po(k)===E.type){n(f,E.sibling),h=i(E,m.props),h.ref=Sn(f,E,m),h.return=f,f=h;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===Bt?(h=Pt(m.props.children,f.mode,w,m.key),h.return=f,f=h):(w=Dr(m.type,m.key,m.props,null,f.mode,w),w.ref=Sn(f,h,m),w.return=f,f=w)}return s(f);case Vt:e:{for(E=m.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(f,h.sibling),h=i(h,m.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Zi(m,f.mode,w),h.return=f,f=h}return s(f);case rt:return E=m._init,S(f,h,E(m._payload),w)}if(zn(m))return y(f,h,m,w);if(vn(m))return x(f,h,m,w);Sr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,m),h.return=f,f=h):(n(f,h),h=Ki(m,f.mode,w),h.return=f,f=h),s(f)):n(f,h)}return S}var cn=Iu(!0),Fu=Iu(!1),Zr=wt(null),Jr=null,Kt=null,Ss=null;function Es(){Ss=Kt=Jr=null}function _s(e){var t=Zr.current;B(Zr),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){Jr=e,Ss=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ss!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(Jr===null)throw Error(C(308));Kt=e,Jr.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Mt=null;function Cs(e){Mt===null?Mt=[e]:Mt.push(e)}function Ou(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,Cs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var i=e.updateQueue;it=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var a=o,u=a.next;a.next=null,s===null?l=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=a))}if(l!==null){var g=i.baseState;s=0,c=u=a=null,o=l;do{var d=o.lane,v=o.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,x=o;switch(d=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){g=y.call(v,g,d);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,d=typeof y=="function"?y.call(v,g,d):y,d==null)break e;g=Y({},g,d);break e;case 2:it=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[o]:d.push(o))}else v={eventTime:v,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=v,a=g):c=c.next=v,s|=d;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;d=o,o=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(a=g),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);It|=s,e.lanes=s,e.memoizedState=g}}function To(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var or={},He=wt(or),Kn=wt(or),Zn=wt(or);function jt(e){if(e===or)throw Error(C(174));return e}function zs(e,t){switch(U(Zn,t),U(Kn,e),U(He,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}B(He),U(He,t)}function dn(){B(He),B(Kn),B(Zn)}function bu(e){jt(Zn.current);var t=jt(He.current),n=pl(t,e.type);t!==n&&(U(Kn,e),U(He,n))}function Ms(e){Kn.current===e&&(B(He),B(Kn))}var H=wt(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function js(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var Tr=tt.ReactCurrentDispatcher,Qi=tt.ReactCurrentBatchConfig,Rt=0,Q=null,J=null,ne=null,ni=!1,In=!1,Jn=0,Ff=0;function oe(){throw Error(C(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,i,l){if(Rt=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?Uf:$f,e=n(r,i),In){l=0;do{if(In=!1,Jn=0,25<=l)throw Error(C(301));l+=1,ne=J=null,t.updateQueue=null,Tr.current=Vf,e=n(r,i)}while(In)}if(Tr.current=ri,t=J!==null&&J.next!==null,Rt=0,ne=J=Q=null,ni=!1,t)throw Error(C(300));return e}function As(){var e=Jn!==0;return Jn=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Te(){if(J===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,J=e;else{if(e===null)throw Error(C(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function er(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=Te(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=s=null,a=null,u=l;do{var c=u.lane;if((Rt&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(o=a=g,s=r):a=a.next=g,Q.lanes|=c,It|=c}u=u.next}while(u!==null&&u!==l);a===null?s=r:a.next=o,Ue(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Q.lanes|=l,It|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=Te(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Ue(l,t.memoizedState)||(ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Uu(){}function $u(e,t){var n=Q,r=Te(),i=t(),l=!Ue(r.memoizedState,i);if(l&&(r.memoizedState=i,ye=!0),r=r.queue,Ts(Wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,tr(9,Bu.bind(null,n,r,i,t),void 0,null),re===null)throw Error(C(349));Rt&30||Vu(n,t,i)}return i}function Vu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bu(e,t,n,r){t.value=n,t.getSnapshot=r,Hu(t)&&Qu(e)}function Wu(e,t,n){return n(function(){Hu(t)&&Qu(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Qu(e){var t=Je(e,1);t!==null&&be(t,e,1,-1)}function Ro(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,Q,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yu(){return Te().memoizedState}function Rr(e,t,n,r){var i=Ve();Q.flags|=e,i.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function vi(e,t,n,r){var i=Te();r=r===void 0?null:r;var l=void 0;if(J!==null){var s=J.memoizedState;if(l=s.destroy,r!==null&&Ls(r,s.deps)){i.memoizedState=tr(t,n,l,r);return}}Q.flags|=e,i.memoizedState=tr(1|t,n,l,r)}function Io(e,t){return Rr(8390656,8,e,t)}function Ts(e,t){return vi(2048,8,e,t)}function Xu(e,t){return vi(4,2,e,t)}function Gu(e,t){return vi(4,4,e,t)}function qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,n){return n=n!=null?n.concat([e]):null,vi(4,4,qu.bind(null,t,e),n)}function Rs(){}function Zu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ju(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ec(e,t,n){return Rt&21?(Ue(n,t)||(n=lu(),Q.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Of(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{b=n,Qi.transition=r}}function tc(){return Te().memoizedState}function Df(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nc(e))rc(t,n);else if(n=Ou(e,t,n,r),n!==null){var i=he();be(n,e,r,i),ic(n,t,r)}}function bf(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nc(e))rc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(i.hasEagerState=!0,i.eagerState=o,Ue(o,s)){var a=t.interleaved;a===null?(i.next=i,Cs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Ou(e,t,i,r),n!==null&&(i=he(),be(n,e,r,i),ic(n,t,r))}}function nc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function rc(e,t){In=ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var ri={readContext:Ae,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Uf={readContext:Ae,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Io,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rr(4194308,4,qu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Df.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ro,useDebugValue:Rs,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ro(!1),t=e[0];return e=Of.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ve();if(W){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),re===null)throw Error(C(349));Rt&30||Vu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Io(Wu.bind(null,r,l,e),[e]),r.flags|=2048,tr(9,Bu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ve(),t=re.identifierPrefix;if(W){var n=Ge,r=Xe;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ff++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$f={readContext:Ae,useCallback:Zu,useContext:Ae,useEffect:Ts,useImperativeHandle:Ku,useInsertionEffect:Xu,useLayoutEffect:Gu,useMemo:Ju,useReducer:Yi,useRef:Yu,useState:function(){return Yi(er)},useDebugValue:Rs,useDeferredValue:function(e){var t=Te();return ec(t,J.memoizedState,e)},useTransition:function(){var e=Yi(er)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:$u,useId:tc,unstable_isNewReconciler:!1},Vf={readContext:Ae,useCallback:Zu,useContext:Ae,useEffect:Ts,useImperativeHandle:Ku,useInsertionEffect:Xu,useLayoutEffect:Gu,useMemo:Ju,useReducer:Xi,useRef:Yu,useState:function(){return Xi(er)},useDebugValue:Rs,useDeferredValue:function(e){var t=Te();return J===null?t.memoizedState=e:ec(t,J.memoizedState,e)},useTransition:function(){var e=Xi(er)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:$u,useId:tc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yi={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=gt(e),l=qe(r,i);l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,i),t!==null&&(be(t,e,i,r),Ar(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=gt(e),l=qe(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,i),t!==null&&(be(t,e,i,r),Ar(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=gt(e),i=qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(be(t,e,r,n),Ar(t,e,r))}};function Fo(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,l):!0}function lc(e,t,n){var r=!1,i=yt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(i=we(t)?At:de.current,r=t.contextTypes,l=(r=r!=null)?an(e,i):yt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Oo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yi.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ns(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ae(l):(l=we(t)?At:de.current,i.context=an(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Il(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&yi.enqueueReplaceState(i,i.state,null),ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=gd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bf=typeof WeakMap=="function"?WeakMap:Map;function sc(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){li||(li=!0,Yl=r),Ol(e,t)},n}function oc(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Do(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rh.bind(null,e,t,n),t.then(e,e))}function bo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Wf=tt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?Fu(t,null,n,r):cn(t,e.child,n,r)}function $o(e,t,n,r,i){n=n.render;var l=t.ref;return ln(t,i),r=Ps(e,t,n,r,l,i),n=As(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(W&&n&&xs(t),t.flags|=1,fe(e,t,r,i),t.child)}function Vo(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Vs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ac(e,t,l,r,i)):(e=Dr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(s,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Yn(l,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,i)}return Dl(e,t,n,r,i)}function uc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Jt,Se),Se|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Jt,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(Jt,Se),Se|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(Jt,Se),Se|=r;return fe(e,t,i,n),t.child}function cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,i){var l=we(n)?At:de.current;return l=an(t,l),ln(t,i),n=Ps(e,t,n,r,l,i),r=As(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(W&&r&&xs(t),t.flags|=1,fe(e,t,n,i),t.child)}function Bo(e,t,n,r,i){if(we(n)){var l=!0;Gr(t)}else l=!1;if(ln(t,i),t.stateNode===null)Ir(e,t),lc(t,n,r),Fl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=we(n)?At:de.current,u=an(t,u));var c=n.getDerivedStateFromProps,g=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||a!==u)&&Oo(t,s,r,u),it=!1;var d=t.memoizedState;s.state=d,ei(t,r,s,i),a=t.memoizedState,o!==r||d!==a||xe.current||it?(typeof c=="function"&&(Il(t,n,c,r),a=t.memoizedState),(o=it||Fo(t,n,o,r,d,a,u))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Du(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Ie(t.type,o),s.props=u,g=t.pendingProps,d=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=we(n)?At:de.current,a=an(t,a));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==g||d!==a)&&Oo(t,s,r,a),it=!1,d=t.memoizedState,s.state=d,ei(t,r,s,i);var y=t.memoizedState;o!==g||d!==y||xe.current||it?(typeof v=="function"&&(Il(t,n,v,r),y=t.memoizedState),(u=it||Fo(t,n,u,r,d,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,l,i)}function bl(e,t,n,r,i,l){cc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Mo(t,n,!1),et(e,t,l);r=t.stateNode,Wf.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cn(t,e.child,null,l),t.child=cn(t,null,o,l)):fe(e,t,o,l),t.memoizedState=r.state,i&&Mo(t,n,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?zo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zo(e,t.context,!1),zs(e,t.containerInfo)}function Wo(e,t,n,r,i){return un(),ks(i),t.flags|=256,fe(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,t,n){var r=t.pendingProps,i=H.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(H,i&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ki(s,r,0,null),e=Pt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=$l(n),t.memoizedState=Ul,e):Is(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Hf(e,t,s,r,o,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,o=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=mt(o,l):(l=Pt(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?$l(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return l=e.child,e=l.sibling,r=mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Is(e,t){return t=ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&ks(r),cn(t,e.child,null,n),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Gi(Error(C(422))),Er(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=ki({mode:"visible",children:r.children},i,0,null),l=Pt(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&cn(t,e.child,null,s),t.child.memoizedState=$l(s),t.memoizedState=Ul,l);if(!(t.mode&1))return Er(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(C(419)),r=Gi(l,r,void 0),Er(e,t,s,r)}if(o=(s&e.childLanes)!==0,ye||o){if(r=re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),be(r,e,i,-1))}return $s(),r=Gi(Error(C(421))),Er(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ih.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ee=ft(i.nextSibling),_e=t,W=!0,Oe=null,e!==null&&(Me[je++]=Xe,Me[je++]=Ge,Me[je++]=Tt,Xe=e.id,Ge=e.overflow,Tt=t),t=Is(t,r.children),t.flags|=4096,t)}function Ho(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rl(e.return,t,n)}function qi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function hc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ho(e,n,t);else if(e.tag===19)Ho(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qi(t,!0,n,null,l);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ir(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qf(e,t,n){switch(t.tag){case 3:dc(t),un();break;case 5:bu(t);break;case 1:we(t.type)&&Gr(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Zr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?fc(e,t,n):(U(H,H.current&1),e=et(e,t,n),e!==null?e.sibling:null);U(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,uc(e,t,n)}return et(e,t,n)}var pc,Vl,gc,mc;pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};gc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jt(He.current);var l=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),l=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":i=hl(e,i),r=hl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}gl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Un.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==o&&(a!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&o[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(l||(l=[]),l.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Un.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&$("scroll",e),l||o===a||(l=[])):(l=l||[]).push(u,a))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yf(e,t,n){var r=t.pendingProps;switch(ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return we(t.type)&&Xr(),ae(t),null;case 3:return r=t.stateNode,dn(),B(xe),B(de),js(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(ql(Oe),Oe=null))),Vl(e,t),ae(t),null;case 5:Ms(t);var i=jt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)gc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ae(t),null}if(e=jt(He.current),kr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Be]=t,r[qn]=l,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<jn.length;i++)$(jn[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Js(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":to(r,l),$("invalid",r)}gl(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&wr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&wr(r.textContent,o,e),i=["children",""+o]):Un.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":fr(r),eo(r,l,!0);break;case"textarea":fr(r),no(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Yr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Be]=t,e[qn]=r,pc(e,t,!1,!1),t.stateNode=e;e:{switch(s=ml(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<jn.length;i++)$(jn[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Js(e,r),i=cl(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),$("invalid",e);break;case"textarea":to(e,r),i=hl(e,r),$("invalid",e);break;default:i=r}gl(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?Ya(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ha(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$n(e,a):typeof a=="number"&&$n(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Un.hasOwnProperty(l)?a!=null&&l==="onScroll"&&$("scroll",e):a!=null&&ls(e,l,a,s))}switch(n){case"input":fr(e),eo(e,r,!1);break;case"textarea":fr(e),no(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?en(e,!!r.multiple,l,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=jt(Zn.current),jt(He.current),kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(l=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ae(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ee!==null&&t.mode&1&&!(t.flags&128))Ru(),un(),t.flags|=98560,l=!1;else if(l=kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Be]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),l=!1}else Oe!==null&&(ql(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ee===0&&(ee=3):$s())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return dn(),Vl(e,t),e===null&&Xn(t.stateNode.containerInfo),ae(t),null;case 10:return _s(t.type._context),ae(t),null;case 17:return we(t.type)&&Xr(),ae(t),null;case 19:if(B(H),l=t.memoizedState,l===null)return ae(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)En(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ti(e),s!==null){for(t.flags|=128,En(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&q()>hn&&(t.flags|=128,r=!0,En(l,!1),t.lanes=4194304)}else{if(!r)if(e=ti(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!W)return ae(t),null}else 2*q()-l.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,En(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=q(),t.sibling=null,n=H.current,U(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Xf(e,t){switch(ws(t),t.tag){case 1:return we(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),B(xe),B(de),js(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return dn(),null;case 10:return _s(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var _r=!1,ue=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,M=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){X(e,t,r)}}var Qo=!1;function qf(e,t){if(Nl=Wr,e=ku(),ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,a=-1,u=0,c=0,g=e,d=null;t:for(;;){for(var v;g!==n||i!==0&&g.nodeType!==3||(o=s+i),g!==l||r!==0&&g.nodeType!==3||(a=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(v=g.firstChild)!==null;)d=g,g=v;for(;;){if(g===e)break t;if(d===n&&++u===i&&(o=s),d===l&&++c===r&&(a=s),(v=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=v}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Wr=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ie(t.type,x),S);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=Qo,Qo=!1,y}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Bl(t,n,l)}i=i.next}while(i!==r)}}function xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vc(e){var t=e.alternate;t!==null&&(e.alternate=null,vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[qn],delete t[Ll],delete t[Af],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function Yo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}var ie=null,Fe=!1;function nt(e,t,n){for(n=n.child;n!==null;)xc(e,t,n),n=n.sibling}function xc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(di,n)}catch{}switch(n.tag){case 5:ue||Zt(n,t);case 6:var r=ie,i=Fe;ie=null,nt(e,t,n),ie=r,Fe=i,ie!==null&&(Fe?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Fe?(e=ie,n=n.stateNode,e.nodeType===8?Bi(e.parentNode,n):e.nodeType===1&&Bi(e,n),Hn(e)):Bi(ie,n.stateNode));break;case 4:r=ie,i=Fe,ie=n.stateNode.containerInfo,Fe=!0,nt(e,t,n),ie=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Bl(n,t,s),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!ue&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){X(n,t,o)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,nt(e,t,n),ue=r):nt(e,t,n);break;default:nt(e,t,n)}}function Xo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gf),t.forEach(function(r){var i=lh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ie=o.stateNode,Fe=!1;break e;case 3:ie=o.stateNode.containerInfo,Fe=!0;break e;case 4:ie=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(ie===null)throw Error(C(160));xc(l,s,i),ie=null,Fe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),$e(e),r&4){try{Fn(3,e,e.return),xi(3,e)}catch(x){X(e,e.return,x)}try{Fn(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Re(t,e),$e(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Re(t,e),$e(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Va(i,l),ml(o,s);var u=ml(o,l);for(s=0;s<a.length;s+=2){var c=a[s],g=a[s+1];c==="style"?Ya(i,g):c==="dangerouslySetInnerHTML"?Ha(i,g):c==="children"?$n(i,g):ls(i,c,g,u)}switch(o){case"input":dl(i,l);break;case"textarea":Ba(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?en(i,!!l.multiple,v,!1):d!==!!l.multiple&&(l.defaultValue!=null?en(i,!!l.multiple,l.defaultValue,!0):en(i,!!l.multiple,l.multiple?[]:"",!1))}i[qn]=l}catch(x){X(e,e.return,x)}}break;case 6:if(Re(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){X(e,e.return,x)}}break;case 3:if(Re(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Re(t,e),$e(e);break;case 13:Re(t,e),$e(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ds=q())),r&4&&Xo(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(u=ue)||c,Re(t,e),ue=u):Re(t,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(g=M=c;M!==null;){switch(d=M,v=d.child,d.tag){case 0:case 11:case 14:case 15:Fn(4,d,d.return);break;case 1:Zt(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:Zt(d,d.return);break;case 22:if(d.memoizedState!==null){qo(g);continue}}v!==null?(v.return=d,M=v):qo(g)}c=c.sibling}e:for(c=null,g=e;;){if(g.tag===5){if(c===null){c=g;try{i=g.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=g.stateNode,a=g.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=Qa("display",s))}catch(x){X(e,e.return,x)}}}else if(g.tag===6){if(c===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(x){X(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;c===g&&(c=null),g=g.return}c===g&&(c=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),$e(e),r&4&&Xo(e);break;case 21:break;default:Re(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var l=Yo(e);Ql(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Yo(e);Hl(e,o,s);break;default:throw Error(C(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){M=e,kc(e)}function kc(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_r;if(!s){var o=i.alternate,a=o!==null&&o.memoizedState!==null||ue;o=_r;var u=ue;if(_r=s,(ue=a)&&!u)for(M=i;M!==null;)s=M,a=s.child,s.tag===22&&s.memoizedState!==null?Ko(i):a!==null?(a.return=s,M=a):Ko(i);for(;l!==null;)M=l,kc(l),l=l.sibling;M=i,_r=o,ue=u}Go(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,M=l):Go(e)}}function Go(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&To(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}To(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var g=c.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ue||t.flags&512&&Wl(t)}catch(d){X(t,t.return,d)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function qo(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ko(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xi(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var l=t.return;try{Wl(t)}catch(a){X(t,l,a)}break;case 5:var s=t.return;try{Wl(t)}catch(a){X(t,s,a)}}}catch(a){X(t,t.return,a)}if(t===e){M=null;break}var o=t.sibling;if(o!==null){o.return=t.return,M=o;break}M=t.return}}var Zf=Math.ceil,ii=tt.ReactCurrentDispatcher,Fs=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,D=0,re=null,K=null,le=0,Se=0,Jt=wt(0),ee=0,nr=null,It=0,wi=0,Os=0,On=null,ve=null,Ds=0,hn=1/0,Qe=null,li=!1,Yl=null,pt=null,Cr=!1,at=null,si=0,Dn=0,Xl=null,Fr=-1,Or=0;function he(){return D&6?q():Fr!==-1?Fr:Fr=q()}function gt(e){return e.mode&1?D&2&&le!==0?le&-le:If.transition!==null?(Or===0&&(Or=lu()),Or):(e=b,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function be(e,t,n,r){if(50<Dn)throw Dn=0,Xl=null,Error(C(185));ir(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(wi|=n),ee===4&&st(e,le)),ke(e,r),n===1&&D===0&&!(t.mode&1)&&(hn=q()+500,mi&&kt()))}function ke(e,t){var n=e.callbackNode;Rd(e,t);var r=Br(e,e===re?le:0);if(r===0)n!==null&&lo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lo(n),t===1)e.tag===0?Rf(Zo.bind(null,e)):Pu(Zo.bind(null,e)),Lf(function(){!(D&6)&&kt()}),n=null;else{switch(su(r)){case 1:n=cs;break;case 4:n=ru;break;case 16:n=Vr;break;case 536870912:n=iu;break;default:n=Vr}n=jc(n,Sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sc(e,t){if(Fr=-1,Or=0,D&6)throw Error(C(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Br(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oi(e,r);else{t=r;var i=D;D|=2;var l=_c();(re!==e||le!==t)&&(Qe=null,hn=q()+500,Lt(e,t));do try{th();break}catch(o){Ec(e,o)}while(!0);Es(),ii.current=l,D=i,K!==null?t=0:(re=null,le=0,t=ee)}if(t!==0){if(t===2&&(i=kl(e),i!==0&&(r=i,t=Gl(e,i))),t===1)throw n=nr,Lt(e,0),st(e,r),ke(e,q()),n;if(t===6)st(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jf(i)&&(t=oi(e,r),t===2&&(l=kl(e),l!==0&&(r=l,t=Gl(e,l))),t===1))throw n=nr,Lt(e,0),st(e,r),ke(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Nt(e,ve,Qe);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Ds+500-q(),10<t)){if(Br(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(Nt.bind(null,e,ve,Qe),t);break}Nt(e,ve,Qe);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-De(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zf(r/1960))-r,10<r){e.timeoutHandle=jl(Nt.bind(null,e,ve,Qe),r);break}Nt(e,ve,Qe);break;case 5:Nt(e,ve,Qe);break;default:throw Error(C(329))}}}return ke(e,q()),e.callbackNode===n?Sc.bind(null,e):null}function Gl(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=oi(e,t),e!==2&&(t=ve,ve=n,t!==null&&ql(t)),e}function ql(e){ve===null?ve=e:ve.push.apply(ve,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ue(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Os,t&=~wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Zo(e){if(D&6)throw Error(C(327));sn();var t=Br(e,0);if(!(t&1))return ke(e,q()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Gl(e,r))}if(n===1)throw n=nr,Lt(e,0),st(e,t),ke(e,q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,ve,Qe),ke(e,q()),null}function bs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=q()+500,mi&&kt())}}function Ft(e){at!==null&&at.tag===0&&!(D&6)&&sn();var t=D;D|=1;var n=Pe.transition,r=b;try{if(Pe.transition=null,b=1,e)return e()}finally{b=r,Pe.transition=n,D=t,!(D&6)&&kt()}}function Us(){Se=Jt.current,B(Jt)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:dn(),B(xe),B(de),js();break;case 5:Ms(r);break;case 4:dn();break;case 13:B(H);break;case 19:B(H);break;case 10:_s(r.type._context);break;case 22:case 23:Us()}n=n.return}if(re=e,K=e=mt(e.current,null),le=Se=t,ee=0,nr=null,Os=wi=It=0,ve=On=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}Mt=null}return e}function Ec(e,t){do{var n=K;try{if(Es(),Tr.current=ri,ni){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ni=!1}if(Rt=0,ne=J=Q=null,In=!1,Jn=0,Fs.current=null,n===null||n.return===null){ee=1,nr=t,K=null;break}e:{var l=e,s=n.return,o=n,a=t;if(t=le,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=o,g=c.tag;if(!(c.mode&1)&&(g===0||g===11||g===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=bo(s);if(v!==null){v.flags&=-257,Uo(v,s,o,l,t),v.mode&1&&Do(l,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){Do(l,u,t),$s();break e}a=Error(C(426))}}else if(W&&o.mode&1){var S=bo(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Uo(S,s,o,l,t),ks(fn(a,o));break e}}l=a=fn(a,o),ee!==4&&(ee=2),On===null?On=[l]:On.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=sc(l,a,t);Ao(l,f);break e;case 1:o=a;var h=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pt===null||!pt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=oc(l,o,t);Ao(l,w);break e}}l=l.return}while(l!==null)}Nc(n)}catch(k){t=k,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function _c(){var e=ii.current;return ii.current=ri,e===null?ri:e}function $s(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(It&268435455)&&!(wi&268435455)||st(re,le)}function oi(e,t){var n=D;D|=2;var r=_c();(re!==e||le!==t)&&(Qe=null,Lt(e,t));do try{eh();break}catch(i){Ec(e,i)}while(!0);if(Es(),D=n,ii.current=r,K!==null)throw Error(C(261));return re=null,le=0,ee}function eh(){for(;K!==null;)Cc(K)}function th(){for(;K!==null&&!Cd();)Cc(K)}function Cc(e){var t=Mc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Nc(e):K=t,Fs.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,K=null;return}}else if(n=Yf(n,t,Se),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ee===0&&(ee=5)}function Nt(e,t,n){var r=b,i=Pe.transition;try{Pe.transition=null,b=1,nh(e,t,n,r)}finally{Pe.transition=i,b=r}return null}function nh(e,t,n,r){do sn();while(at!==null);if(D&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Id(e,l),e===re&&(K=re=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cr||(Cr=!0,jc(Vr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var s=b;b=1;var o=D;D|=4,Fs.current=null,qf(e,n),wc(n,e),Sf(zl),Wr=!!Nl,zl=Nl=null,e.current=n,Kf(n),Nd(),D=o,b=s,Pe.transition=l}else e.current=n;if(Cr&&(Cr=!1,at=e,si=i),l=e.pendingLanes,l===0&&(pt=null),jd(n.stateNode),ke(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(li)throw li=!1,e=Yl,Yl=null,e;return si&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===Xl?Dn++:(Dn=0,Xl=e):Dn=0,kt(),null}function sn(){if(at!==null){var e=su(si),t=Pe.transition,n=b;try{if(Pe.transition=null,b=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,si=0,D&6)throw Error(C(331));var i=D;for(D|=4,M=e.current;M!==null;){var l=M,s=l.child;if(M.flags&16){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var u=o[a];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Fn(8,c,l)}var g=c.child;if(g!==null)g.return=c,M=g;else for(;M!==null;){c=M;var d=c.sibling,v=c.return;if(vc(c),c===u){M=null;break}if(d!==null){d.return=v,M=d;break}M=v}}}var y=l.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}M=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,M=s;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Fn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,M=f;break e}M=l.return}}var h=e.current;for(M=h;M!==null;){s=M;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,M=m;else e:for(s=h;M!==null;){if(o=M,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xi(9,o)}}catch(k){X(o,o.return,k)}if(o===s){M=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,M=w;break e}M=o.return}}if(D=i,kt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(di,e)}catch{}r=!0}return r}finally{b=n,Pe.transition=t}}return!1}function Jo(e,t,n){t=fn(n,t),t=sc(e,t,1),e=ht(e,t,1),t=he(),e!==null&&(ir(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)Jo(e,e,n);else for(;t!==null;){if(t.tag===3){Jo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=fn(n,e),e=oc(t,e,1),t=ht(t,e,1),e=he(),t!==null&&(ir(t,1,e),ke(t,e));break}}t=t.return}}function rh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>q()-Ds?Lt(e,0):Os|=n),ke(e,t)}function zc(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=he();e=Je(e,t),e!==null&&(ir(e,t,n),ke(e,n))}function ih(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zc(e,n)}function lh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),zc(e,n)}var Mc;Mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Qf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,W&&t.flags&1048576&&Au(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ir(e,t),e=t.pendingProps;var i=an(t,de.current);ln(t,n),i=Ps(null,t,r,e,i,n);var l=As();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(l=!0,Gr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ns(t),i.updater=yi,t.stateNode=i,i._reactInternals=t,Fl(t,r,e,n),t=bl(null,t,r,!0,l,n)):(t.tag=0,W&&l&&xs(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ir(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=oh(r),e=Ie(r,e),i){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=Bo(null,t,r,e,n);break e;case 11:t=$o(null,t,r,e,n);break e;case 14:t=Vo(null,t,r,Ie(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Bo(e,t,r,i,n);case 3:e:{if(dc(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Du(e,t),ei(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=fn(Error(C(423)),t),t=Wo(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(C(424)),t),t=Wo(e,t,r,n,i);break e}else for(Ee=ft(t.stateNode.containerInfo.firstChild),_e=t,W=!0,Oe=null,n=Fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=et(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return bu(t),e===null&&Tl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Ml(r,i)?s=null:l!==null&&Ml(r,l)&&(t.flags|=32),cc(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return fc(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),$o(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,U(Zr,r._currentValue),r._currentValue=s,l!==null)if(Ue(l.value,s)){if(l.children===i.children&&!xe.current){t=et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=qe(-1,n&-n),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Rl(l.return,n,t),o.lanes|=n;break}a=a.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(C(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Rl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=Ae(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=Ie(r,t.pendingProps),i=Ie(r.type,i),Vo(e,t,r,i,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Ir(e,t),t.tag=1,we(r)?(e=!0,Gr(t)):e=!1,ln(t,n),lc(t,r,i),Fl(t,r,i,n),bl(null,t,r,!0,e,n);case 19:return hc(e,t,n);case 22:return uc(e,t,n)}throw Error(C(156,t.tag))};function jc(e,t){return nu(e,t)}function sh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new sh(e,t,n,r)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oh(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===as)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")Vs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return Pt(n.children,i,l,t);case ss:s=8,i|=8;break;case sl:return e=Le(12,n,t,i|2),e.elementType=sl,e.lanes=l,e;case ol:return e=Le(13,n,t,i),e.elementType=ol,e.lanes=l,e;case al:return e=Le(19,n,t,i),e.elementType=al,e.lanes=l,e;case ba:return ki(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oa:s=10;break e;case Da:s=9;break e;case os:s=11;break e;case as:s=14;break e;case rt:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Le(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Pt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function ki(e,t,n,r){return e=Le(22,e,r,t),e.elementType=ba,e.lanes=n,e.stateNode={isHidden:!1},e}function Ki(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Zi(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ah(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bs(e,t,n,r,i,l,s,o,a){return e=new ah(e,t,n,o,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Le(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(l),e}function uh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lc(e){if(!e)return yt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(we(n))return Lu(e,n,t)}return t}function Pc(e,t,n,r,i,l,s,o,a){return e=Bs(n,r,!0,e,i,l,s,o,a),e.context=Lc(null),n=e.current,r=he(),i=gt(n),l=qe(r,i),l.callback=t??null,ht(n,l,i),e.current.lanes=i,ir(e,i,r),ke(e,r),e}function Si(e,t,n,r){var i=t.current,l=he(),s=gt(i);return n=Lc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,s),e!==null&&(be(e,i,s,l),Ar(e,i,s)),s}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ea(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){ea(e,t),(e=e.alternate)&&ea(e,t)}function ch(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}Ei.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Si(e,t,null,null)};Ei.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Si(null,e,null,null)}),t[Ze]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&du(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ta(){}function dh(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=ai(s);l.call(u)}}var s=Pc(t,r,e,0,null,!1,!1,"",ta);return e._reactRootContainer=s,e[Ze]=s.current,Xn(e.nodeType===8?e.parentNode:e),Ft(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=ai(a);o.call(u)}}var a=Bs(e,0,!1,null,null,!1,!1,"",ta);return e._reactRootContainer=a,e[Ze]=a.current,Xn(e.nodeType===8?e.parentNode:e),Ft(function(){Si(t,a,n,r)}),a}function Ci(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var o=i;i=function(){var a=ai(s);o.call(a)}}Si(t,s,e,i)}else s=dh(n,t,e,i,r);return ai(s)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(ds(t,n|1),ke(t,q()),!(D&6)&&(hn=q()+500,kt()))}break;case 13:Ft(function(){var r=Je(e,1);if(r!==null){var i=he();be(r,e,1,i)}}),Ws(e,1)}};fs=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=he();be(t,e,134217728,n)}Ws(e,134217728)}};au=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=he();be(n,e,t,r)}Ws(e,t)}};uu=function(){return b};cu=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};yl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=gi(r);if(!i)throw Error(C(90));$a(r),dl(r,i)}}}break;case"textarea":Ba(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};qa=bs;Ka=Ft;var fh={usingClientEntryPoint:!1,Events:[sr,Yt,gi,Xa,Ga,bs]},_n={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hh={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eu(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{di=Nr.inject(hh),We=Nr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(C(200));return uh(e,t,null,n)};Ne.createRoot=function(e,t){if(!Qs(e))throw Error(C(299));var n=!1,r="",i=Ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bs(e,1,!1,null,null,n,!1,r,i),e[Ze]=t.current,Xn(e.nodeType===8?e.parentNode:e),new Hs(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=eu(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Ft(e)};Ne.hydrate=function(e,t,n){if(!_i(t))throw Error(C(200));return Ci(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=Ac;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,i,!1,l,s),e[Ze]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ei(t)};Ne.render=function(e,t,n){if(!_i(t))throw Error(C(200));return Ci(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!_i(e))throw Error(C(40));return e._reactRootContainer?(Ft(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ne.unstable_batchedUpdates=bs;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ci(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc)}catch(e){console.error(e)}}Tc(),Ta.exports=Ne;var ph=Ta.exports,Rc,na=ph;Rc=na.createRoot,na.hydrateRoot;/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=e=>{const t=mh(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ji={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},yh=V.createContext({}),xh=()=>V.useContext(yh),wh=V.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:l,iconNode:s,...o},a)=>{const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:g=!1,color:d="currentColor",className:v=""}=xh()??{},y=r??g?Number(n??c)*24/Number(t??u):n??c;return V.createElement("svg",{ref:a,...Ji,width:t??u??Ji.width,height:t??u??Ji.height,stroke:e??d,strokeWidth:y,className:Ic("lucide",v,i),...!l&&!vh(o)&&{"aria-hidden":"true"},...o},[...s.map(([x,S])=>V.createElement(x,S)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,t)=>{const n=V.forwardRef(({className:r,...i},l)=>V.createElement(wh,{ref:l,iconNode:t,className:Ic(`lucide-${gh(ra(e))}`,`lucide-${e}`,r),...i}));return n.displayName=ra(e),n};/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Sh=Z("activity",kh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],_h=Z("brain-circuit",Eh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Nh=Z("chart-column",Ch);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],Mh=Z("chart-no-axes-column",zh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Lh=Z("chart-pie",jh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ah=Z("chevron-down",Ph);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],el=Z("circle-check-big",Th);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ih=Z("gauge",Rh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Oh=Z("history",Fh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],ia=Z("image-plus",Dh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",key:"9kzy35"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",key:"1t0f0t"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor",key:"1obus6"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2",key:"1gvhby"}]],la=Z("images",bh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],$h=Z("link-2",Uh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Bh=Z("lock",Vh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],Hh=Z("map-pinned",Wh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Yh=Z("plane",Qh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gh=Z("plus",Xh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]],Kh=Z("scan-search",qh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Cn=Z("shield",Zh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ep=Z("sparkles",Jh);/**
 * @license lucide-react v1.9.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],np=Z("zap",tp);function bn(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function Kl(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function rp(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function sa(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function oa(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function ip(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function lp(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function tl(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function sp(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function op(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}function aa(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function ap(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function up(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function Zl(e,t){let n=t[0],r=t[1],i=t[2],l=n*n+r*r+i*i;return l>0&&(l=1/Math.sqrt(l)),e[0]=t[0]*l,e[1]=t[1]*l,e[2]=t[2]*l,e}function Fc(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ua(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[0],o=n[1],a=n[2];return e[0]=i*a-l*o,e[1]=l*s-r*a,e[2]=r*o-i*s,e}function cp(e,t,n,r){let i=t[0],l=t[1],s=t[2];return e[0]=i+r*(n[0]-i),e[1]=l+r*(n[1]-l),e[2]=s+r*(n[2]-s),e}function dp(e,t,n,r,i){const l=Math.exp(-r*i);let s=t[0],o=t[1],a=t[2];return e[0]=n[0]+(s-n[0])*l,e[1]=n[1]+(o-n[1])*l,e[2]=n[2]+(a-n[2])*l,e}function fp(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[3]*r+n[7]*i+n[11]*l+n[15];return s=s||1,e[0]=(n[0]*r+n[4]*i+n[8]*l+n[12])/s,e[1]=(n[1]*r+n[5]*i+n[9]*l+n[13])/s,e[2]=(n[2]*r+n[6]*i+n[10]*l+n[14])/s,e}function hp(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[3]*r+n[7]*i+n[11]*l+n[15];return s=s||1,e[0]=(n[0]*r+n[4]*i+n[8]*l)/s,e[1]=(n[1]*r+n[5]*i+n[9]*l)/s,e[2]=(n[2]*r+n[6]*i+n[10]*l)/s,e}function pp(e,t,n){let r=t[0],i=t[1],l=t[2];return e[0]=r*n[0]+i*n[3]+l*n[6],e[1]=r*n[1]+i*n[4]+l*n[7],e[2]=r*n[2]+i*n[5]+l*n[8],e}function gp(e,t,n){let r=t[0],i=t[1],l=t[2],s=n[0],o=n[1],a=n[2],u=n[3],c=o*l-a*i,g=a*r-s*l,d=s*i-o*r,v=o*d-a*g,y=a*c-s*d,x=s*g-o*c,S=u*2;return c*=S,g*=S,d*=S,v*=2,y*=2,x*=2,e[0]=r+c+v,e[1]=i+g+y,e[2]=l+d+x,e}const mp=function(){const e=[0,0,0],t=[0,0,0];return function(n,r){Kl(e,n),Kl(t,r),Zl(e,e),Zl(t,t);let i=Fc(e,t);return i>1?0:i<-1?Math.PI:Math.acos(i)}}();function vp(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}class ce extends Array{constructor(t=0,n=t,r=t){return super(t,n,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,n=t,r=t){return t.length?this.copy(t):(rp(this,t,n,r),this)}copy(t){return Kl(this,t),this}add(t,n){return n?sa(this,t,n):sa(this,this,t),this}sub(t,n){return n?oa(this,t,n):oa(this,this,t),this}multiply(t){return t.length?ip(this,this,t):tl(this,this,t),this}divide(t){return t.length?lp(this,this,t):tl(this,this,1/t),this}inverse(t=this){return up(this,t),this}len(){return bn(this)}distance(t){return t?sp(this,t):bn(this)}squaredLen(){return aa(this)}squaredDistance(t){return t?op(this,t):aa(this)}negate(t=this){return ap(this,t),this}cross(t,n){return n?ua(this,t,n):ua(this,this,t),this}scale(t){return tl(this,this,t),this}normalize(){return Zl(this,this),this}dot(t){return Fc(this,t)}equals(t){return vp(this,t)}applyMatrix3(t){return pp(this,this,t),this}applyMatrix4(t){return fp(this,this,t),this}scaleRotateMatrix4(t){return hp(this,this,t),this}applyQuaternion(t){return gp(this,this,t),this}angle(t){return mp(this,t)}lerp(t,n){return cp(this,this,t,n),this}smoothLerp(t,n,r){return dp(this,this,t,n,r),this}clone(){return new ce(this[0],this[1],this[2])}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}transformDirection(t){const n=this[0],r=this[1],i=this[2];return this[0]=t[0]*n+t[4]*r+t[8]*i,this[1]=t[1]*n+t[5]*r+t[9]*i,this[2]=t[2]*n+t[6]*r+t[10]*i,this.normalize()}}const ca=new ce;let yp=1,xp=1,da=!1;class wp{constructor(t,n={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=n,this.id=yp++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in n)this.addAttribute(r,n[r])}addAttribute(t,n){if(this.attributes[t]=n,n.id=xp++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else t==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(t){const n=!t.buffer;n&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),n?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((n,{name:r,type:i})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const l=this.attributes[r];this.gl.bindBuffer(l.target,l.buffer),this.glState.boundBuffer=l.buffer;let s=1;i===35674&&(s=2),i===35675&&(s=3),i===35676&&(s=4);const o=l.size/s,a=s===1?0:s*s*4,u=s===1?0:s*4;for(let c=0;c<s;c++)this.gl.vertexAttribPointer(n+c,o,l.type,l.normalized,l.stride+a,l.offset+c*u),this.gl.enableVertexAttribArray(n+c),this.gl.renderer.vertexAttribDivisor(n+c,l.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:n=this.gl.TRIANGLES}){var i;this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((l,{name:s})=>{const o=this.attributes[s];o.needsUpdate&&this.updateAttribute(o)});let r=2;((i=this.attributes.index)==null?void 0:i.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!da)return console.warn("No position buffer data found to compute bounds"),da=!0}computeBoundingBox(t){t||(t=this.getPosition());const n=t.data,r=t.size;this.bounds||(this.bounds={min:new ce,max:new ce,center:new ce,scale:new ce,radius:1/0});const i=this.bounds.min,l=this.bounds.max,s=this.bounds.center,o=this.bounds.scale;i.set(1/0),l.set(-1/0);for(let a=0,u=n.length;a<u;a+=r){const c=n[a],g=n[a+1],d=n[a+2];i.x=Math.min(c,i.x),i.y=Math.min(g,i.y),i.z=Math.min(d,i.z),l.x=Math.max(c,l.x),l.y=Math.max(g,l.y),l.z=Math.max(d,l.z)}o.sub(l,i),s.add(i,l).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const n=t.data,r=t.size;this.bounds||this.computeBoundingBox(t);let i=0;for(let l=0,s=n.length;l<s;l+=r)ca.fromArray(n,l),i=Math.max(i,this.bounds.center.squaredDistance(ca));this.bounds.radius=Math.sqrt(i)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let kp=1;const fa={};class Sp{constructor(t,{vertex:n,fragment:r,uniforms:i={},transparent:l=!1,cullFace:s=t.BACK,frontFace:o=t.CCW,depthTest:a=!0,depthWrite:u=!0,depthFunc:c=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=i,this.id=kp++,n||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=s,this.frontFace=o,this.depthTest=a,this.depthWrite=u,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:r})}setShaders({vertex:t,fragment:n}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${ha(t)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${ha(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let s=0;s<r;s++){let o=this.gl.getActiveUniform(this.program,s);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const a=o.name.match(/(\w+)/g);o.uniformName=a[0],o.nameComponents=a.slice(1)}this.attributeLocations=new Map;const i=[],l=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let s=0;s<l;s++){const o=this.gl.getActiveAttrib(this.program,s),a=this.gl.getAttribLocation(this.program,o.name);a!==-1&&(i[a]=o.name,this.attributeLocations.set(o,a))}this.attributeOrder=i.join("")}setBlendFunc(t,n,r,i){this.blendFunc.src=t,this.blendFunc.dst=n,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=i,t&&(this.transparent=!0)}setBlendEquation(t,n){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=n}setStencilFunc(t,n,r){this.stencilRef=n,this.stencilFunc.func=t,this.stencilFunc.ref=n,this.stencilFunc.mask=r}setStencilOp(t,n,r){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=n,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((i,l)=>{let s=this.uniforms[l.uniformName];for(const o of l.nameComponents){if(!s)break;if(o in s)s=s[o];else{if(Array.isArray(s.value))break;s=void 0;break}}if(!s)return pa(`Active uniform ${l.name} has not been supplied`);if(s&&s.value===void 0)return pa(`${l.name} uniform is missing a value parameter`);if(s.value.texture)return n=n+1,s.value.update(n),nl(this.gl,l.type,i,n);if(s.value.length&&s.value[0].texture){const o=[];return s.value.forEach(a=>{n=n+1,a.update(n),o.push(n)}),nl(this.gl,l.type,i,o)}nl(this.gl,l.type,i,s.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function nl(e,t,n,r){r=r.length?Ep(r):r;const i=e.renderer.state.uniformLocations.get(n);if(r.length)if(i===void 0||i.length!==r.length)e.renderer.state.uniformLocations.set(n,r.slice(0));else{if(_p(i,r))return;i.set?i.set(r):Cp(i,r),e.renderer.state.uniformLocations.set(n,i)}else{if(i===r)return;e.renderer.state.uniformLocations.set(n,r)}switch(t){case 5126:return r.length?e.uniform1fv(n,r):e.uniform1f(n,r);case 35664:return e.uniform2fv(n,r);case 35665:return e.uniform3fv(n,r);case 35666:return e.uniform4fv(n,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?e.uniform1iv(n,r):e.uniform1i(n,r);case 35671:case 35667:return e.uniform2iv(n,r);case 35672:case 35668:return e.uniform3iv(n,r);case 35673:case 35669:return e.uniform4iv(n,r);case 35674:return e.uniformMatrix2fv(n,!1,r);case 35675:return e.uniformMatrix3fv(n,!1,r);case 35676:return e.uniformMatrix4fv(n,!1,r)}}function ha(e){let t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Ep(e){const t=e.length,n=e[0].length;if(n===void 0)return e;const r=t*n;let i=fa[r];i||(fa[r]=i=new Float32Array(r));for(let l=0;l<t;l++)i.set(e[l],l*n);return i}function _p(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cp(e,t){for(let n=0,r=e.length;n<r;n++)e[n]=t[n]}let rl=0;function pa(e){rl>100||(console.warn(e),rl++,rl>100&&console.warn("More than 100 program warnings - stopping logs."))}const il=new ce;let Np=1;class zp{constructor({canvas:t=document.createElement("canvas"),width:n=300,height:r=150,dpr:i=1,alpha:l=!1,depth:s=!0,stencil:o=!1,antialias:a=!1,premultipliedAlpha:u=!1,preserveDrawingBuffer:c=!1,powerPreference:g="default",autoClear:d=!0,webgl:v=2}={}){const y={alpha:l,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:g};this.dpr=i,this.alpha=l,this.color=!0,this.depth=s,this.stencil=o,this.premultipliedAlpha=u,this.autoClear=d,this.id=Np++,v===2&&(this.gl=t.getContext("webgl2",y)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",y)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,n){this.width=t,this.height=n,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:n+"px"})}setViewport(t,n,r=0,i=0){this.state.viewport.width===t&&this.state.viewport.height===n||(this.state.viewport.width=t,this.state.viewport.height=n,this.state.viewport.x=r,this.state.viewport.y=i,this.gl.viewport(r,i,t,n))}setScissor(t,n,r=0,i=0){this.gl.scissor(r,i,t,n)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,n,r,i){this.state.blendFunc.src===t&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===i||(this.state.blendFunc.src=t,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=i,r!==void 0?this.gl.blendFuncSeparate(t,n,r,i):this.gl.blendFunc(t,n))}setBlendEquation(t,n){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(t,n):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,n,r){this.state.stencilFunc===t&&this.state.stencilRef===n&&this.state.stencilFuncMask===r||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(t||this.gl.ALWAYS,n||0,r||0))}setStencilOp(t,n,r){this.state.stencilFail===t&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===r||(this.state.stencilFail=t,this.state.stencilDepthFail=n,this.state.stencilDepthPass=r,this.gl.stencilOp(t,n,r))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(t,n))}getExtension(t,n,r){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),n?this.extensions[t]?this.extensions[t][r].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:t.zDepth!==n.zDepth?t.zDepth-n.zDepth:n.id-t.id}sortTransparent(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.zDepth!==n.zDepth?n.zDepth-t.zDepth:n.id-t.id}sortUI(t,n){return t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.program.id!==n.program.id?t.program.id-n.program.id:n.id-t.id}getRenderList({scene:t,camera:n,frustumCull:r,sort:i}){let l=[];if(n&&r&&n.updateFrustum(),t.traverse(s=>{if(!s.visible)return!0;s.draw&&(r&&s.frustumCulled&&n&&!n.frustumIntersectsMesh(s)||l.push(s))}),i){const s=[],o=[],a=[];l.forEach(u=>{u.program.transparent?u.program.depthTest?o.push(u):a.push(u):s.push(u),u.zDepth=0,!(u.renderOrder!==0||!u.program.depthTest||!n)&&(u.worldMatrix.getTranslation(il),il.applyMatrix4(n.projectionViewMatrix),u.zDepth=il.z)}),s.sort(this.sortOpaque),o.sort(this.sortTransparent),a.sort(this.sortUI),l=s.concat(o,a)}return l}render({scene:t,camera:n,target:r=null,update:i=!0,sort:l=!0,frustumCull:s=!0,clear:o}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),i&&t.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:t,camera:n,frustumCull:s,sort:l}).forEach(u=>{u.draw({camera:n})})}}function Mp(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function jp(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function Lp(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n*n+r*r+i*i+l*l;return s>0&&(s=1/Math.sqrt(s)),e[0]=n*s,e[1]=r*s,e[2]=i*s,e[3]=l*s,e}function Pp(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Ap(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Tp(e,t,n){n=n*.5;let r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function ga(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=n[0],a=n[1],u=n[2],c=n[3];return e[0]=r*c+s*o+i*u-l*a,e[1]=i*c+s*a+l*o-r*u,e[2]=l*c+s*u+r*a-i*o,e[3]=s*c-r*o-i*a-l*u,e}function Rp(e,t,n){n*=.5;let r=t[0],i=t[1],l=t[2],s=t[3],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a+s*o,e[1]=i*a+l*o,e[2]=l*a-i*o,e[3]=s*a-r*o,e}function Ip(e,t,n){n*=.5;let r=t[0],i=t[1],l=t[2],s=t[3],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a-l*o,e[1]=i*a+s*o,e[2]=l*a+r*o,e[3]=s*a-i*o,e}function Fp(e,t,n){n*=.5;let r=t[0],i=t[1],l=t[2],s=t[3],o=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*o,e[1]=i*a-r*o,e[2]=l*a+s*o,e[3]=s*a-l*o,e}function Op(e,t,n,r){let i=t[0],l=t[1],s=t[2],o=t[3],a=n[0],u=n[1],c=n[2],g=n[3],d,v,y,x,S;return v=i*a+l*u+s*c+o*g,v<0&&(v=-v,a=-a,u=-u,c=-c,g=-g),1-v>1e-6?(d=Math.acos(v),y=Math.sin(d),x=Math.sin((1-r)*d)/y,S=Math.sin(r*d)/y):(x=1-r,S=r),e[0]=x*i+S*a,e[1]=x*l+S*u,e[2]=x*s+S*c,e[3]=x*o+S*g,e}function Dp(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n*n+r*r+i*i+l*l,o=s?1/s:0;return e[0]=-n*o,e[1]=-r*o,e[2]=-i*o,e[3]=l*o,e}function bp(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Up(e,t){let n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);let l=(i+1)%3,s=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[l*3+l]-t[s*3+s]+1),e[i]=.5*r,r=.5/r,e[3]=(t[l*3+s]-t[s*3+l])*r,e[l]=(t[l*3+i]+t[i*3+l])*r,e[s]=(t[s*3+i]+t[i*3+s])*r}return e}function $p(e,t,n="YXZ"){let r=Math.sin(t[0]*.5),i=Math.cos(t[0]*.5),l=Math.sin(t[1]*.5),s=Math.cos(t[1]*.5),o=Math.sin(t[2]*.5),a=Math.cos(t[2]*.5);return n==="XYZ"?(e[0]=r*s*a+i*l*o,e[1]=i*l*a-r*s*o,e[2]=i*s*o+r*l*a,e[3]=i*s*a-r*l*o):n==="YXZ"?(e[0]=r*s*a+i*l*o,e[1]=i*l*a-r*s*o,e[2]=i*s*o-r*l*a,e[3]=i*s*a+r*l*o):n==="ZXY"?(e[0]=r*s*a-i*l*o,e[1]=i*l*a+r*s*o,e[2]=i*s*o+r*l*a,e[3]=i*s*a-r*l*o):n==="ZYX"?(e[0]=r*s*a-i*l*o,e[1]=i*l*a+r*s*o,e[2]=i*s*o-r*l*a,e[3]=i*s*a+r*l*o):n==="YZX"?(e[0]=r*s*a+i*l*o,e[1]=i*l*a+r*s*o,e[2]=i*s*o-r*l*a,e[3]=i*s*a-r*l*o):n==="XZY"&&(e[0]=r*s*a-i*l*o,e[1]=i*l*a-r*s*o,e[2]=i*s*o+r*l*a,e[3]=i*s*a+r*l*o),e}const Vp=Mp,Bp=jp,Wp=Pp,Hp=Lp;class Qp extends Array{constructor(t=0,n=0,r=0,i=1){super(t,n,r,i),this.onChange=()=>{},this._target=this;const l=["0","1","2","3"];return new Proxy(this,{set(s,o){const a=Reflect.set(...arguments);return a&&l.includes(o)&&s.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return Ap(this._target),this.onChange(),this}set(t,n,r,i){return t.length?this.copy(t):(Bp(this._target,t,n,r,i),this.onChange(),this)}rotateX(t){return Rp(this._target,this._target,t),this.onChange(),this}rotateY(t){return Ip(this._target,this._target,t),this.onChange(),this}rotateZ(t){return Fp(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return Dp(this._target,t),this.onChange(),this}conjugate(t=this._target){return bp(this._target,t),this.onChange(),this}copy(t){return Vp(this._target,t),this.onChange(),this}normalize(t=this._target){return Hp(this._target,t),this.onChange(),this}multiply(t,n){return n?ga(this._target,t,n):ga(this._target,this._target,t),this.onChange(),this}dot(t){return Wp(this._target,t)}fromMatrix3(t){return Up(this._target,t),this.onChange(),this}fromEuler(t,n){return $p(this._target,t,t.order),n||this.onChange(),this}fromAxisAngle(t,n){return Tp(this._target,t,n),this.onChange(),this}slerp(t,n){return Op(this._target,this._target,t,n),this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this._target[3]=t[n+3],this.onChange(),this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t}}const Yp=1e-6;function Xp(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Gp(e,t,n,r,i,l,s,o,a,u,c,g,d,v,y,x,S){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=l,e[5]=s,e[6]=o,e[7]=a,e[8]=u,e[9]=c,e[10]=g,e[11]=d,e[12]=v,e[13]=y,e[14]=x,e[15]=S,e}function qp(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Kp(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=t[4],o=t[5],a=t[6],u=t[7],c=t[8],g=t[9],d=t[10],v=t[11],y=t[12],x=t[13],S=t[14],f=t[15],h=n*o-r*s,m=n*a-i*s,w=n*u-l*s,k=r*a-i*o,E=r*u-l*o,_=i*u-l*a,N=c*x-g*y,P=c*S-d*y,L=c*f-v*y,z=g*S-d*x,T=g*f-v*x,O=d*f-v*S,A=h*O-m*T+w*z+k*L-E*P+_*N;return A?(A=1/A,e[0]=(o*O-a*T+u*z)*A,e[1]=(i*T-r*O-l*z)*A,e[2]=(x*_-S*E+f*k)*A,e[3]=(d*E-g*_-v*k)*A,e[4]=(a*L-s*O-u*P)*A,e[5]=(n*O-i*L+l*P)*A,e[6]=(S*w-y*_-f*m)*A,e[7]=(c*_-d*w+v*m)*A,e[8]=(s*T-o*L+u*N)*A,e[9]=(r*L-n*T-l*N)*A,e[10]=(y*E-x*w+f*h)*A,e[11]=(g*w-c*E-v*h)*A,e[12]=(o*P-s*z-a*N)*A,e[13]=(n*z-r*P+i*N)*A,e[14]=(x*m-y*k-S*h)*A,e[15]=(c*k-g*m+d*h)*A,e):null}function Oc(e){let t=e[0],n=e[1],r=e[2],i=e[3],l=e[4],s=e[5],o=e[6],a=e[7],u=e[8],c=e[9],g=e[10],d=e[11],v=e[12],y=e[13],x=e[14],S=e[15],f=t*s-n*l,h=t*o-r*l,m=t*a-i*l,w=n*o-r*s,k=n*a-i*s,E=r*a-i*o,_=u*y-c*v,N=u*x-g*v,P=u*S-d*v,L=c*x-g*y,z=c*S-d*y,T=g*S-d*x;return f*T-h*z+m*L+w*P-k*N+E*_}function ma(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],g=t[8],d=t[9],v=t[10],y=t[11],x=t[12],S=t[13],f=t[14],h=t[15],m=n[0],w=n[1],k=n[2],E=n[3];return e[0]=m*r+w*o+k*g+E*x,e[1]=m*i+w*a+k*d+E*S,e[2]=m*l+w*u+k*v+E*f,e[3]=m*s+w*c+k*y+E*h,m=n[4],w=n[5],k=n[6],E=n[7],e[4]=m*r+w*o+k*g+E*x,e[5]=m*i+w*a+k*d+E*S,e[6]=m*l+w*u+k*v+E*f,e[7]=m*s+w*c+k*y+E*h,m=n[8],w=n[9],k=n[10],E=n[11],e[8]=m*r+w*o+k*g+E*x,e[9]=m*i+w*a+k*d+E*S,e[10]=m*l+w*u+k*v+E*f,e[11]=m*s+w*c+k*y+E*h,m=n[12],w=n[13],k=n[14],E=n[15],e[12]=m*r+w*o+k*g+E*x,e[13]=m*i+w*a+k*d+E*S,e[14]=m*l+w*u+k*v+E*f,e[15]=m*s+w*c+k*y+E*h,e}function Zp(e,t,n){let r=n[0],i=n[1],l=n[2],s,o,a,u,c,g,d,v,y,x,S,f;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*l+t[12],e[13]=t[1]*r+t[5]*i+t[9]*l+t[13],e[14]=t[2]*r+t[6]*i+t[10]*l+t[14],e[15]=t[3]*r+t[7]*i+t[11]*l+t[15]):(s=t[0],o=t[1],a=t[2],u=t[3],c=t[4],g=t[5],d=t[6],v=t[7],y=t[8],x=t[9],S=t[10],f=t[11],e[0]=s,e[1]=o,e[2]=a,e[3]=u,e[4]=c,e[5]=g,e[6]=d,e[7]=v,e[8]=y,e[9]=x,e[10]=S,e[11]=f,e[12]=s*r+c*i+y*l+t[12],e[13]=o*r+g*i+x*l+t[13],e[14]=a*r+d*i+S*l+t[14],e[15]=u*r+v*i+f*l+t[15]),e}function Jp(e,t,n){let r=n[0],i=n[1],l=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*l,e[9]=t[9]*l,e[10]=t[10]*l,e[11]=t[11]*l,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function e0(e,t,n,r){let i=r[0],l=r[1],s=r[2],o=Math.hypot(i,l,s),a,u,c,g,d,v,y,x,S,f,h,m,w,k,E,_,N,P,L,z,T,O,A,me;return Math.abs(o)<Yp?null:(o=1/o,i*=o,l*=o,s*=o,a=Math.sin(n),u=Math.cos(n),c=1-u,g=t[0],d=t[1],v=t[2],y=t[3],x=t[4],S=t[5],f=t[6],h=t[7],m=t[8],w=t[9],k=t[10],E=t[11],_=i*i*c+u,N=l*i*c+s*a,P=s*i*c-l*a,L=i*l*c-s*a,z=l*l*c+u,T=s*l*c+i*a,O=i*s*c+l*a,A=l*s*c-i*a,me=s*s*c+u,e[0]=g*_+x*N+m*P,e[1]=d*_+S*N+w*P,e[2]=v*_+f*N+k*P,e[3]=y*_+h*N+E*P,e[4]=g*L+x*z+m*T,e[5]=d*L+S*z+w*T,e[6]=v*L+f*z+k*T,e[7]=y*L+h*z+E*T,e[8]=g*O+x*A+m*me,e[9]=d*O+S*A+w*me,e[10]=v*O+f*A+k*me,e[11]=y*O+h*A+E*me,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function t0(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function Dc(e,t){let n=t[0],r=t[1],i=t[2],l=t[4],s=t[5],o=t[6],a=t[8],u=t[9],c=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(l,s,o),e[2]=Math.hypot(a,u,c),e}function n0(e){let t=e[0],n=e[1],r=e[2],i=e[4],l=e[5],s=e[6],o=e[8],a=e[9],u=e[10];const c=t*t+n*n+r*r,g=i*i+l*l+s*s,d=o*o+a*a+u*u;return Math.sqrt(Math.max(c,g,d))}const bc=function(){const e=[1,1,1];return function(t,n){let r=e;Dc(r,n);let i=1/r[0],l=1/r[1],s=1/r[2],o=n[0]*i,a=n[1]*l,u=n[2]*s,c=n[4]*i,g=n[5]*l,d=n[6]*s,v=n[8]*i,y=n[9]*l,x=n[10]*s,S=o+g+x,f=0;return S>0?(f=Math.sqrt(S+1)*2,t[3]=.25*f,t[0]=(d-y)/f,t[1]=(v-u)/f,t[2]=(a-c)/f):o>g&&o>x?(f=Math.sqrt(1+o-g-x)*2,t[3]=(d-y)/f,t[0]=.25*f,t[1]=(a+c)/f,t[2]=(v+u)/f):g>x?(f=Math.sqrt(1+g-o-x)*2,t[3]=(v-u)/f,t[0]=(a+c)/f,t[1]=.25*f,t[2]=(d+y)/f):(f=Math.sqrt(1+x-o-g)*2,t[3]=(a-c)/f,t[0]=(v+u)/f,t[1]=(d+y)/f,t[2]=.25*f),t}}();function r0(e,t,n,r){let i=bn([e[0],e[1],e[2]]);const l=bn([e[4],e[5],e[6]]),s=bn([e[8],e[9],e[10]]);Oc(e)<0&&(i=-i),n[0]=e[12],n[1]=e[13],n[2]=e[14];const a=e.slice(),u=1/i,c=1/l,g=1/s;a[0]*=u,a[1]*=u,a[2]*=u,a[4]*=c,a[5]*=c,a[6]*=c,a[8]*=g,a[9]*=g,a[10]*=g,bc(t,a),r[0]=i,r[1]=l,r[2]=s}function i0(e,t,n,r){const i=e,l=t[0],s=t[1],o=t[2],a=t[3],u=l+l,c=s+s,g=o+o,d=l*u,v=l*c,y=l*g,x=s*c,S=s*g,f=o*g,h=a*u,m=a*c,w=a*g,k=r[0],E=r[1],_=r[2];return i[0]=(1-(x+f))*k,i[1]=(v+w)*k,i[2]=(y-m)*k,i[3]=0,i[4]=(v-w)*E,i[5]=(1-(d+f))*E,i[6]=(S+h)*E,i[7]=0,i[8]=(y+m)*_,i[9]=(S-h)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function l0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n+n,o=r+r,a=i+i,u=n*s,c=r*s,g=r*o,d=i*s,v=i*o,y=i*a,x=l*s,S=l*o,f=l*a;return e[0]=1-g-y,e[1]=c+f,e[2]=d-S,e[3]=0,e[4]=c-f,e[5]=1-u-y,e[6]=v+x,e[7]=0,e[8]=d+S,e[9]=v-x,e[10]=1-u-g,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function s0(e,t,n,r,i){let l=1/Math.tan(t/2),s=1/(r-i);return e[0]=l/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*s,e[15]=0,e}function o0(e,t,n,r,i,l,s){let o=1/(t-n),a=1/(r-i),u=1/(l-s);return e[0]=-2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+n)*o,e[13]=(i+r)*a,e[14]=(s+l)*u,e[15]=1,e}function a0(e,t,n,r){let i=t[0],l=t[1],s=t[2],o=r[0],a=r[1],u=r[2],c=i-n[0],g=l-n[1],d=s-n[2],v=c*c+g*g+d*d;v===0?d=1:(v=1/Math.sqrt(v),c*=v,g*=v,d*=v);let y=a*d-u*g,x=u*c-o*d,S=o*g-a*c;return v=y*y+x*x+S*S,v===0&&(u?o+=1e-6:a?u+=1e-6:a+=1e-6,y=a*d-u*g,x=u*c-o*d,S=o*g-a*c,v=y*y+x*x+S*S),v=1/Math.sqrt(v),y*=v,x*=v,S*=v,e[0]=y,e[1]=x,e[2]=S,e[3]=0,e[4]=g*S-d*x,e[5]=d*y-c*S,e[6]=c*x-g*y,e[7]=0,e[8]=c,e[9]=g,e[10]=d,e[11]=0,e[12]=i,e[13]=l,e[14]=s,e[15]=1,e}function va(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function ya(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function u0(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}class ui extends Array{constructor(t=1,n=0,r=0,i=0,l=0,s=1,o=0,a=0,u=0,c=0,g=1,d=0,v=0,y=0,x=0,S=1){return super(t,n,r,i,l,s,o,a,u,c,g,d,v,y,x,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,n,r,i,l,s,o,a,u,c,g,d,v,y,x,S){return t.length?this.copy(t):(Gp(this,t,n,r,i,l,s,o,a,u,c,g,d,v,y,x,S),this)}translate(t,n=this){return Zp(this,n,t),this}rotate(t,n,r=this){return e0(this,r,t,n),this}scale(t,n=this){return Jp(this,n,typeof t=="number"?[t,t,t]:t),this}add(t,n){return n?va(this,t,n):va(this,this,t),this}sub(t,n){return n?ya(this,t,n):ya(this,this,t),this}multiply(t,n){return t.length?n?ma(this,t,n):ma(this,this,t):u0(this,this,t),this}identity(){return qp(this),this}copy(t){return Xp(this,t),this}fromPerspective({fov:t,aspect:n,near:r,far:i}={}){return s0(this,t,n,r,i),this}fromOrthogonal({left:t,right:n,bottom:r,top:i,near:l,far:s}){return o0(this,t,n,r,i,l,s),this}fromQuaternion(t){return l0(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Kp(this,t),this}compose(t,n,r){return i0(this,t,n,r),this}decompose(t,n,r){return r0(this,t,n,r),this}getRotation(t){return bc(t,this),this}getTranslation(t){return t0(t,this),this}getScaling(t){return Dc(t,this),this}getMaxScaleOnAxis(){return n0(this)}lookAt(t,n,r){return a0(this,t,n,r),this}determinant(){return Oc(this)}fromArray(t,n=0){return this[0]=t[n],this[1]=t[n+1],this[2]=t[n+2],this[3]=t[n+3],this[4]=t[n+4],this[5]=t[n+5],this[6]=t[n+6],this[7]=t[n+7],this[8]=t[n+8],this[9]=t[n+9],this[10]=t[n+10],this[11]=t[n+11],this[12]=t[n+12],this[13]=t[n+13],this[14]=t[n+14],this[15]=t[n+15],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t[n+3]=this[3],t[n+4]=this[4],t[n+5]=this[5],t[n+6]=this[6],t[n+7]=this[7],t[n+8]=this[8],t[n+9]=this[9],t[n+10]=this[10],t[n+11]=this[11],t[n+12]=this[12],t[n+13]=this[13],t[n+14]=this[14],t[n+15]=this[15],t}}function c0(e,t,n="YXZ"){return n==="XYZ"?(e[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(e[0]=Math.atan2(-t[9],t[10]),e[2]=Math.atan2(-t[4],t[0])):(e[0]=Math.atan2(t[6],t[5]),e[2]=0)):n==="YXZ"?(e[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(e[1]=Math.atan2(t[8],t[10]),e[2]=Math.atan2(t[1],t[5])):(e[1]=Math.atan2(-t[2],t[0]),e[2]=0)):n==="ZXY"?(e[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(e[1]=Math.atan2(-t[2],t[10]),e[2]=Math.atan2(-t[4],t[5])):(e[1]=0,e[2]=Math.atan2(t[1],t[0]))):n==="ZYX"?(e[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(e[0]=Math.atan2(t[6],t[10]),e[2]=Math.atan2(t[1],t[0])):(e[0]=0,e[2]=Math.atan2(-t[4],t[5]))):n==="YZX"?(e[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(e[0]=Math.atan2(-t[9],t[5]),e[1]=Math.atan2(-t[2],t[0])):(e[0]=0,e[1]=Math.atan2(t[8],t[10]))):n==="XZY"&&(e[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(e[0]=Math.atan2(t[6],t[5]),e[1]=Math.atan2(t[8],t[0])):(e[0]=Math.atan2(-t[9],t[10]),e[1]=0)),e}const xa=new ui;class d0 extends Array{constructor(t=0,n=t,r=t,i="YXZ"){super(t,n,r),this.order=i,this.onChange=()=>{},this._target=this;const l=["0","1","2"];return new Proxy(this,{set(s,o){const a=Reflect.set(...arguments);return a&&l.includes(o)&&s.onChange(),a}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,n=t,r=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=n,this._target[2]=r,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,n=this.order){return c0(this._target,t,n),this.onChange(),this}fromQuaternion(t,n=this.order,r){return xa.fromQuaternion(t),this._target.fromRotationMatrix(xa,n),r||this.onChange(),this}fromArray(t,n=0){return this._target[0]=t[n],this._target[1]=t[n+1],this._target[2]=t[n+2],this}toArray(t=[],n=0){return t[n]=this[0],t[n+1]=this[1],t[n+2]=this[2],t}}class f0{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new ui,this.worldMatrix=new ui,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new ce,this.quaternion=new Qp,this.scale=new ce(1),this.rotation=new d0,this.up=new ce(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,n=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,n&&t&&t.addChild(this,!1)}addChild(t,n=!0){~this.children.indexOf(t)||this.children.push(t),n&&t.setParent(this,!1)}removeChild(t,n=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),n&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let n=0,r=this.children.length;n<r;n++)this.children[n].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let n=0,r=this.children.length;n<r;n++)this.children[n].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,n=!1){n?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function h0(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function p0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=n+n,o=r+r,a=i+i,u=n*s,c=r*s,g=r*o,d=i*s,v=i*o,y=i*a,x=l*s,S=l*o,f=l*a;return e[0]=1-g-y,e[3]=c-f,e[6]=d+S,e[1]=c+f,e[4]=1-u-y,e[7]=v-x,e[2]=d-S,e[5]=v+x,e[8]=1-u-g,e}function g0(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function m0(e,t,n,r,i,l,s,o,a,u){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=l,e[5]=s,e[6]=o,e[7]=a,e[8]=u,e}function v0(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function y0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=t[4],o=t[5],a=t[6],u=t[7],c=t[8],g=c*s-o*u,d=-c*l+o*a,v=u*l-s*a,y=n*g+r*d+i*v;return y?(y=1/y,e[0]=g*y,e[1]=(-c*r+i*u)*y,e[2]=(o*r-i*s)*y,e[3]=d*y,e[4]=(c*n-i*a)*y,e[5]=(-o*n+i*l)*y,e[6]=v*y,e[7]=(-u*n+r*a)*y,e[8]=(s*n-r*l)*y,e):null}function wa(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],g=t[8],d=n[0],v=n[1],y=n[2],x=n[3],S=n[4],f=n[5],h=n[6],m=n[7],w=n[8];return e[0]=d*r+v*s+y*u,e[1]=d*i+v*o+y*c,e[2]=d*l+v*a+y*g,e[3]=x*r+S*s+f*u,e[4]=x*i+S*o+f*c,e[5]=x*l+S*a+f*g,e[6]=h*r+m*s+w*u,e[7]=h*i+m*o+w*c,e[8]=h*l+m*a+w*g,e}function x0(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],g=t[8],d=n[0],v=n[1];return e[0]=r,e[1]=i,e[2]=l,e[3]=s,e[4]=o,e[5]=a,e[6]=d*r+v*s+u,e[7]=d*i+v*o+c,e[8]=d*l+v*a+g,e}function w0(e,t,n){let r=t[0],i=t[1],l=t[2],s=t[3],o=t[4],a=t[5],u=t[6],c=t[7],g=t[8],d=Math.sin(n),v=Math.cos(n);return e[0]=v*r+d*s,e[1]=v*i+d*o,e[2]=v*l+d*a,e[3]=v*s-d*r,e[4]=v*o-d*i,e[5]=v*a-d*l,e[6]=u,e[7]=c,e[8]=g,e}function k0(e,t,n){let r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function S0(e,t){let n=t[0],r=t[1],i=t[2],l=t[3],s=t[4],o=t[5],a=t[6],u=t[7],c=t[8],g=t[9],d=t[10],v=t[11],y=t[12],x=t[13],S=t[14],f=t[15],h=n*o-r*s,m=n*a-i*s,w=n*u-l*s,k=r*a-i*o,E=r*u-l*o,_=i*u-l*a,N=c*x-g*y,P=c*S-d*y,L=c*f-v*y,z=g*S-d*x,T=g*f-v*x,O=d*f-v*S,A=h*O-m*T+w*z+k*L-E*P+_*N;return A?(A=1/A,e[0]=(o*O-a*T+u*z)*A,e[1]=(a*L-s*O-u*P)*A,e[2]=(s*T-o*L+u*N)*A,e[3]=(i*T-r*O-l*z)*A,e[4]=(n*O-i*L+l*P)*A,e[5]=(r*L-n*T-l*N)*A,e[6]=(x*_-S*E+f*k)*A,e[7]=(S*w-y*_-f*m)*A,e[8]=(y*E-x*w+f*h)*A,e):null}class E0 extends Array{constructor(t=1,n=0,r=0,i=0,l=1,s=0,o=0,a=0,u=1){return super(t,n,r,i,l,s,o,a,u),this}set(t,n,r,i,l,s,o,a,u){return t.length?this.copy(t):(m0(this,t,n,r,i,l,s,o,a,u),this)}translate(t,n=this){return x0(this,n,t),this}rotate(t,n=this){return w0(this,n,t),this}scale(t,n=this){return k0(this,n,t),this}multiply(t,n){return n?wa(this,t,n):wa(this,this,t),this}identity(){return v0(this),this}copy(t){return g0(this,t),this}fromMatrix4(t){return h0(this,t),this}fromQuaternion(t){return p0(this,t),this}fromBasis(t,n,r){return this.set(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2]),this}inverse(t=this){return y0(this,t),this}getNormalMatrix(t){return S0(this,t),this}}let _0=0;class C0 extends f0{constructor(t,{geometry:n,program:r,mode:i=t.TRIANGLES,frustumCulled:l=!0,renderOrder:s=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=_0++,this.geometry=n,this.program=r,this.mode=i,this.frustumCulled=l,this.renderOrder=s,this.modelViewMatrix=new ui,this.normalMatrix=new E0,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}))}}class N0 extends wp{constructor(t,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,n)}}function z0({hue:e=18,hoverIntensity:t=.2,rotateOnHover:n=!0,forceHoverState:r=!1,backgroundColor:i="#000000"}){const l=V.useRef(null),s=`
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `,o=`
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    uniform vec3 backgroundColor;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }

    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }

    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(1.000000, 0.435294, 0.047059);
    const vec3 baseColor2 = vec3(1.000000, 0.603922, 0.282353);
    const vec3 baseColor3 = vec3(0.176471, 0.078431, 0.015686);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);

      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;

      float bgLuminance = dot(backgroundColor, vec3(0.299, 0.587, 0.114));

      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);

      v0 *= smoothstep(r0 * 1.05, r0, len);
      float innerFade = smoothstep(r0 * 0.8, r0 * 0.95, len);
      v0 *= mix(innerFade, 1.0, bgLuminance * 0.7);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);

      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

      vec3 colBase = mix(color1, color2, cl);
      float fadeAmount = mix(1.0, 0.1, bgLuminance);

      vec3 darkCol = mix(color3, colBase, v0);
      darkCol = (darkCol + v1) * v2 * v3;
      darkCol = clamp(darkCol, 0.0, 1.0);

      vec3 lightCol = (colBase + v1) * mix(1.0, v2 * v3, fadeAmount);
      lightCol = mix(backgroundColor, lightCol, v0);
      lightCol = clamp(lightCol, 0.0, 1.0);

      vec3 finalCol = mix(darkCol, lightCol, bgLuminance);

      return extractAlpha(finalCol);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;

      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;return V.useEffect(()=>{const a=l.current;if(!a)return;const u=new zp({alpha:!0,premultipliedAlpha:!1}),c=u.gl;c.clearColor(0,0,0,0),a.appendChild(c.canvas);const g=new N0(c),d=new Sp(c,{vertex:s,fragment:o,uniforms:{iTime:{value:0},iResolution:{value:new ce(c.canvas.width,c.canvas.height,c.canvas.width/c.canvas.height)},hue:{value:e},hover:{value:0},rot:{value:0},hoverIntensity:{value:t},backgroundColor:{value:ka(i)}}}),v=new C0(c,{geometry:g,program:d});function y(){if(!a)return;const _=window.devicePixelRatio||1,N=a.clientWidth,P=a.clientHeight;u.setSize(N*_,P*_),c.canvas.style.width=N+"px",c.canvas.style.height=P+"px",d.uniforms.iResolution.value.set(c.canvas.width,c.canvas.height,c.canvas.width/c.canvas.height)}window.addEventListener("resize",y),y();let x=0,S=0,f=0;const h=.3,m=_=>{const N=a.getBoundingClientRect(),P=_.clientX-N.left,L=_.clientY-N.top,z=N.width,T=N.height,O=Math.min(z,T),A=z/2,me=T/2,bt=(P-A)/O*2,Ut=(L-me)/O*2;Math.sqrt(bt*bt+Ut*Ut)<.8?x=1:x=0},w=()=>{x=0};a.addEventListener("mousemove",m),a.addEventListener("mouseleave",w);let k;const E=_=>{k=requestAnimationFrame(E);const N=(_-S)*.001;S=_,d.uniforms.iTime.value=_*.001,d.uniforms.hue.value=e,d.uniforms.hoverIntensity.value=t,d.uniforms.backgroundColor.value=ka(i);const P=r?1:x;d.uniforms.hover.value+=(P-d.uniforms.hover.value)*.1,n&&P>.5&&(f+=N*h),d.uniforms.rot.value=f,u.render({scene:v})};return k=requestAnimationFrame(E),()=>{var _;cancelAnimationFrame(k),window.removeEventListener("resize",y),a.removeEventListener("mousemove",m),a.removeEventListener("mouseleave",w),a.removeChild(c.canvas),(_=c.getExtension("WEBGL_lose_context"))==null||_.loseContext()}},[e,t,n,r,i]),p.jsx("div",{ref:l,className:"orb-container"})}function M0(e,t,n){let r,i,l;if(t===0)r=i=l=n;else{const s=(u,c,g)=>{let d=g;return d<0&&(d+=1),d>1&&(d-=1),d<.16666666666666666?u+(c-u)*6*d:d<.5?c:d<.6666666666666666?u+(c-u)*(.6666666666666666-d)*6:u},o=n<.5?n*(1+t):n+t-n*t,a=2*n-o;r=s(a,o,e+1/3),i=s(a,o,e),l=s(a,o,e-1/3)}return new ce(r,i,l)}function ka(e){if(e.startsWith("#")){const r=parseInt(e.slice(1,3),16)/255,i=parseInt(e.slice(3,5),16)/255,l=parseInt(e.slice(5,7),16)/255;return new ce(r,i,l)}const t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t)return new ce(parseInt(t[1],10)/255,parseInt(t[2],10)/255,parseInt(t[3],10)/255);const n=e.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);if(n){const r=parseInt(n[1],10)/360,i=parseInt(n[2],10)/100,l=parseInt(n[3],10)/100;return M0(r,i,l)}return new ce(0,0,0)}const j0=[{id:"model-init",lines:["$ verifai init --model yolov8","[INFO] Loading YOLOv8 weights...","[SUCCESS] Model initialized","[INFO] GPU acceleration enabled","[READY] Waiting for input"]},{id:"image-analysis",lines:["$ verifai analyze input.jpg","[SCAN] Analyzing image features...","[DETECT] Neural artifacts found","[SCORE] Confidence: 94.7%","[RESULT] AI-generated: TRUE"]},{id:"batch-process",lines:["$ verifai batch --dir ./images","[INFO] Found 247 images","[PROGRESS] Processing... 45/247","[STATS] Real: 132 | AI: 115","[TIME] Avg: 0.32s per image"]},{id:"api-server",lines:["$ verifai serve --port 8080","[SERVER] Starting API server...","[LIVE] https://api.verifai.dev","[HEALTH] All systems operational","[REQUESTS] 1.2M/day processed"]},{id:"training-log",lines:["$ verifai train --epochs 100","[EPOCH 98/100] Loss: 0.0234","[VAL] Accuracy: 96.8%","[CHECKPOINT] Model saved","[DONE] Training complete"]},{id:"detection-real",lines:["$ verifai detect photo_2024.png","[ANALYZING] Compression artifacts","[CHECK] EXIF metadata intact","[SCAN] No AI signatures found","[RESULT] Real image: 98.2%"]},{id:"security-scan",lines:["$ verifai audit --deep-scan","[FORENSIC] Pixel-level analysis","[DETECT] Diffusion patterns found","[TRACE] Generated via Stable Diff.","[CONFIDENCE] 99.1% AI-made"]},{id:"performance",lines:["$ verifai benchmark --gpu","[TEST] Processing 1000 images...","[SPEED] 312 images/second","[MEMORY] 2.4GB VRAM used","[SCORE] Performance: Excellent"]}],_t=[.2,.4,.5,.6,.7,.8,.9],L0=[{id:"ai-tech",icon:_h,title:"Advanced AI Technology",subtitle:"Powered by MT-YOLOv6 for real-time detection",body:"VerifAI is a cutting-edge Machine Learning-based AI Image Detection System designed to combat the growing threat of AI-generated misinformation.",points:["Real-time inference pipeline","Architecture tuned for detection quality","Production-grade model serving"],cta:"Learn the Model"},{id:"credibility",icon:Nh,title:"Credibility Scoring",subtitle:"Quantitative reliability assessment",body:"The system integrates sophisticated credibility scoring mechanisms to provide users with comprehensive insights about image reliability.",points:["Confidence score breakdown","Risk-weighted interpretation","Actionable verification hints"],cta:"View Scoring"},{id:"realtime",icon:Ih,title:"Real-time Processing",subtitle:"Instant analysis and results",body:"Using the advanced MT-YOLOv6 architecture, our system analyzes visual content to determine authenticity with remarkable accuracy.",points:["Fast queue execution","Low-latency result delivery","Batch and single-image modes"],cta:"Try Processing"},{id:"privacy",icon:Bh,title:"Privacy Protection",subtitle:"Secure image processing",body:"VerifAI helps create a safer digital environment by processing visual evidence with strong privacy-first safeguards.",points:["Secure upload handling","Controlled access workflow","Safety-focused data flow"],cta:"Read Privacy"},{id:"visual-features",icon:Kh,title:"Visual Feature Extraction",subtitle:"AI artifact and pattern analysis",body:"Identifies unique patterns and anomalies associated with generated and manipulated visual media.",points:["Artifact localization","Signal consistency checks","Deep feature comparison"],cta:"Explore Detection"},{id:"annotations",icon:Hh,title:"Visual Annotations",subtitle:"Highlighted suspicious regions",body:"Detected anomalies and AI signatures are surfaced in clear overlays to support fast human review.",points:["Focused region highlights","Review-friendly overlays","Clear audit trail context"],cta:"See Annotations"}];function P0(e){return e.startsWith("$")?"prompt":e.includes("[SUCCESS]")||e.includes("[DONE]")||e.includes("[READY]")?"success":e.includes("[WARN]")||e.includes("[TIME]")||e.includes("[SCORE]")?"warn":e.includes("[ERROR]")?"error":"default"}function A0(){const[e,t]=V.useState(()=>typeof window>"u"?null:window.location.hash==="#app"?"app":window.location.hash==="#signup"?"signup":window.location.hash==="#login"?"login":null),[n,r]=V.useState("single"),[i,l]=V.useState([]),[s,o]=V.useState(!1),[a,u]=V.useState(!1),[c,g]=V.useState(!1),[d,v]=V.useState(!1),y=V.useRef(null),x=V.useRef(null);V.useEffect(()=>{const z=T=>{document.documentElement.style.setProperty("--mouse-x",`${T.clientX}px`),document.documentElement.style.setProperty("--mouse-y",`${T.clientY}px`)};return window.addEventListener("mousemove",z),()=>window.removeEventListener("mousemove",z)},[]),V.useEffect(()=>{const z=()=>{if(window.location.hash==="#app"){t("app");return}if(window.location.hash==="#signup"){t("signup");return}if(window.location.hash==="#login"){t("login");return}t(null)};return z(),window.addEventListener("hashchange",z),()=>window.removeEventListener("hashchange",z)},[]),V.useEffect(()=>{const z=T=>{y.current&&!y.current.contains(T.target)&&g(!1),x.current&&!x.current.contains(T.target)&&v(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]);const S=z=>{z.preventDefault(),window.location.hash="login"},f=z=>{z.preventDefault(),window.location.hash="signup"},h=()=>{u(!1),l([]),o(!1),g(!1),v(!1),window.location.hash="app"},m=()=>{window.location.hash="home"},w=()=>{g(z=>!z)},k=()=>{v(z=>!z)},E=z=>{r(z),l([]),o(!1),v(!1)},_=()=>{g(!1),window.location.hash="home"},N=z=>{const T=Array.from(z.target.files||[]).filter(me=>me.type.startsWith("image/"));if(T.length===0)return;const A=(n==="single"?[T[0]]:T.slice(0,8)).map(me=>({name:me.name,preview:URL.createObjectURL(me)}));l(A),o(!1)},P=()=>{i.length!==0&&o(!0)},L=V.useMemo(()=>`
      :root {
        --primary: #ff6b00;
        --bg: #000000;
        --text: #ffffff;
        --muted: rgba(255, 255, 255, 0.72);
        --muted-dim: rgba(255, 255, 255, 0.5);
        --success: #27c93f;
        --warn: #ffbd2e;
        --error: #ff5f56;
        --terminal-bg: #0a0a0a;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        margin: 0;
        min-height: 100%;
        background: var(--bg);
      }

      .page {
        position: relative;
        min-height: 100vh;
        overflow-x: hidden;
        font-family: Inter, 'Segoe UI', sans-serif;
        color: var(--text);
        background: var(--bg);
      }

      .orb {
        position: fixed;
        left: 0;
        top: 0;
        width: 600px;
        height: 600px;
        pointer-events: none;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 107, 0, 0.22) 0%, rgba(255, 107, 0, 0.12) 38%, rgba(255, 107, 0, 0) 72%);
        transform: translate(calc(var(--mouse-x, 50vw) - 300px), calc(var(--mouse-y, 50vh) - 300px));
        filter: blur(10px);
        z-index: 1;
      }

      .terminal-grid-wrap {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 0;
        padding: 92px 18px 22px;
      }

      .terminal-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(190px, 1fr));
        gap: 14px;
        width: 100%;
        height: calc(100vh - 114px);
      }

      .terminal-window {
        background: var(--terminal-bg);
        border: 1px solid rgba(255, 107, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;
        opacity: 0;
        transform: translateY(10px);
        animation: terminalEnter 0.65s ease forwards, windowDrift 7s ease-in-out infinite;
        animation-delay: var(--terminal-delay, 0s), calc(var(--terminal-delay, 0s) + 1s);
      }

      .terminal-header {
        height: 30px;
        border-bottom: 1px solid rgba(255, 107, 0, 0.12);
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 11px;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .dot.red { background: var(--error); }
      .dot.yellow { background: var(--warn); }
      .dot.green { background: var(--success); }

      .terminal-body {
        position: relative;
        padding: 12px 11px 14px;
        font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        font-size: 12px;
        line-height: 1.55;
        animation: streamShift 10s ease-in-out infinite;
      }

      .terminal-body::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(180deg, rgba(255, 107, 0, 0) 0%, rgba(255, 107, 0, 0.07) 50%, rgba(255, 107, 0, 0) 100%);
        transform: translateY(-110%);
        animation: scanSweep 3.2s linear infinite;
      }

      .line {
        opacity: 0;
        display: block;
        width: 0;
        max-width: 100%;
        color: var(--muted-dim);
        white-space: nowrap;
        overflow: hidden;
        animation: typeLineLoop var(--window-duration, 3.6s) steps(var(--chars, 20), end) infinite;
        animation-delay: var(--line-delay, 0s);
      }

      .line.prompt { color: var(--primary); }
      .line.success { color: var(--success); }
      .line.warn { color: var(--warn); }
      .line.error { color: var(--error); }

      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 30;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5rem;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 107, 0, 0.1);
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: var(--text);
        font-weight: 700;
      }

      .brand-icon {
        width: 28px;
        height: 28px;
        border-radius: 7px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 107, 0, 0.35);
        background: rgba(255, 107, 0, 0.1);
      }

      .ai-chip {
        font-family: 'Inter Tight', Inter, 'Segoe UI', sans-serif;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.02em;
        color: #000;
        background: var(--primary);
        border-radius: 5px;
        padding: 2px 8px;
      }

      .nav {
        display: inline-flex;
        align-items: center;
        gap: 26px;
      }

      .nav-link {
        position: relative;
        color: rgba(255, 255, 255, 0.78);
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: color 0.25s ease;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transform-origin: left;
        background: var(--primary);
        transition: transform 0.25s ease;
      }

      .nav-link:hover {
        color: var(--text);
      }

      .nav-link:hover::after {
        transform: scaleX(1);
      }

      .hero {
        position: relative;
        z-index: 10;
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding-left: 5rem;
        padding-right: 1.25rem;
      }

      .hero::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: min(62vw, 920px);
        pointer-events: none;
        z-index: 0;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94) 0%,
          rgba(0, 0, 0, 0.88) 38%,
          rgba(0, 0, 0, 0.72) 62%,
          rgba(0, 0, 0, 0.38) 82%,
          rgba(0, 0, 0, 0) 100%
        );
        filter: blur(2px);
      }

      .hero-content {
        max-width: 650px;
        position: relative;
        isolation: isolate;
        z-index: 1;
        padding: 1.2rem 1.25rem 1.2rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .hero-content::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: -18px;
        right: -18px;
        top: -16px;
        bottom: -14px;
        pointer-events: none;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.82) 52%, rgba(0, 0, 0, 0.62) 76%, rgba(0, 0, 0, 0) 100%);
        filter: blur(9px);
      }

      .hero-content::after {
        content: '';
        position: absolute;
        z-index: -1;
        pointer-events: none;
        left: -42px;
        top: 12%;
        width: 96px;
        height: 72%;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(255, 107, 0, 0.18) 0%, rgba(255, 107, 0, 0.08) 44%, rgba(255, 107, 0, 0) 76%);
        filter: blur(15px);
      }

      .reveal {
        opacity: 0;
        transform: translateY(10px);
        animation: heroEnter 0.8s ease forwards;
      }

      .hero-badge {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid rgba(255, 107, 0, 0.45);
        color: var(--primary);
        background: rgba(255, 107, 0, 0.08);
        border-radius: 999px;
        padding: 8px 14px;
        font-size: 14px;
        font-weight: 700;
      }

      .headline {
        font-family: 'Inter Tight', Inter, 'Segoe UI', sans-serif;
        margin: 0;
        font-size: clamp(3rem, 10vw, 7rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.03em;
      }

      .headline-line {
        display: block;
        background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .subtitle-row {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        color: var(--primary);
        font-weight: 800;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        font-size: 22px;
      }

      .subtitle-line {
        width: 68px;
        height: 1px;
        background: rgba(255, 107, 0, 0.58);
      }

      .description {
        margin: 0;
        color: var(--muted);
        line-height: 1.75;
        max-width: 620px;
      }

      .cta-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .btn {
        border: 1px solid transparent;
        border-radius: 11px;
        height: 46px;
        padding: 0 22px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      }

      .btn-primary {
        background: var(--primary);
        color: #0b0b0b;
        box-shadow: 0 0 18px rgba(255, 107, 0, 0.28);
      }

      .btn-secondary {
        color: #f7f7f7;
        border-color: rgba(255, 255, 255, 0.35);
        background: rgba(255, 255, 255, 0.04);
      }

      .btn:hover {
        transform: translateY(-2px);
      }

      .btn-primary:hover {
        box-shadow: 0 0 28px rgba(255, 107, 0, 0.45);
      }

      .btn-secondary:hover {
        box-shadow: 0 0 22px rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.08);
      }

      .pill-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .feature-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 36px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        padding: 0 14px;
        color: rgba(255, 255, 255, 0.84);
        font-size: 14px;
        background: rgba(255, 255, 255, 0.05);
        transition: background 0.2s ease, border-color 0.2s ease;
      }

      .feature-pill:hover {
        background: rgba(255, 255, 255, 0.13);
        border-color: rgba(255, 255, 255, 0.32);
      }

      .feature-pill svg {
        color: var(--success);
      }

      .about-shell {
        position: relative;
        z-index: 14;
        background:
          radial-gradient(circle at 35% 15%, rgba(255, 107, 0, 0.08) 0%, rgba(255, 107, 0, 0) 40%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, #000 100%);
        border-top: 1px solid rgba(255, 107, 0, 0.12);
      }

      .about-inner {
        padding: 4rem 2.9rem 5rem;
      }

      .about-heading {
        max-width: 900px;
        margin: 0 0 2.4rem;
      }

      .about-title {
        margin: 0;
        font-family: 'Inter Tight', Inter, sans-serif;
        font-size: clamp(2rem, 6vw, 4.5rem);
        line-height: 0.98;
        letter-spacing: -0.025em;
        color: rgba(255, 255, 255, 0.96);
      }

      .about-lead {
        margin: 1rem 0 0;
        color: rgba(255, 255, 255, 0.72);
        max-width: 760px;
        line-height: 1.65;
      }

      .about-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        border-left: 1px solid rgba(255, 255, 255, 0.12);
      }

      .about-card {
        min-height: 240px;
        padding: 1.2rem 1.15rem 1.15rem;
        border-right: 1px solid rgba(255, 255, 255, 0.12);
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.02) 100%),
          repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.012) 0, rgba(255, 255, 255, 0.012) 2px, transparent 2px, transparent 6px);
        transition: background 0.25s ease;
      }

      .about-card:hover {
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.015) 100%),
          repeating-linear-gradient(135deg, rgba(255, 107, 0, 0.04) 0, rgba(255, 107, 0, 0.04) 2px, transparent 2px, transparent 6px);
      }

      .about-card-head {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .about-icon {
        width: 30px;
        height: 30px;
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.88);
      }

      .about-card-title {
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.96);
      }

      .about-card-subtitle {
        margin: 0.16rem 0 0;
        font-size: 0.79rem;
        color: rgba(255, 255, 255, 0.6);
      }

      .about-card-body {
        margin: 0.75rem 0 0;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.55;
        font-size: 0.93rem;
      }

      .about-points {
        margin: 0.75rem 0 0;
        padding-left: 0;
        list-style: none;
        display: grid;
        gap: 0.34rem;
      }

      .about-points li {
        position: relative;
        padding-left: 0.9rem;
        color: rgba(255, 255, 255, 0.76);
        font-size: 0.82rem;
      }

      .about-points li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 50%;
        background: #ff6b00;
      }

      .about-cta {
        display: inline-block;
        margin-top: 0.85rem;
        color: rgba(255, 255, 255, 0.95);
        text-decoration: none;
        font-size: 0.84rem;
        font-weight: 700;
      }

      .site-footer {
        position: relative;
        z-index: 14;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: #030303;
      }

      .footer-cta {
        padding: 4.2rem 1.25rem 4rem;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background:
          radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 62%),
          repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.016) 0, rgba(255, 255, 255, 0.016) 2px, transparent 2px, transparent 6px);
      }

      .footer-cta-title {
        margin: 0;
        font-family: 'Inter Tight', Inter, sans-serif;
        font-size: clamp(2rem, 5vw, 4.4rem);
        line-height: 0.94;
        letter-spacing: -0.03em;
        color: rgba(255, 255, 255, 0.95);
      }

      .footer-cta-text {
        margin: 1rem auto 0;
        max-width: 700px;
        color: rgba(255, 255, 255, 0.62);
        line-height: 1.55;
      }

      .footer-cta-actions {
        margin-top: 1.6rem;
        display: inline-flex;
        align-items: center;
        gap: 0.72rem;
      }

      .footer-action {
        height: 46px;
        padding: 0 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 0;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.11em;
        font-size: 0.74rem;
        font-weight: 800;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, background 0.2s ease;
      }

      .footer-action.primary {
        background: #ffffff;
        color: #0a0a0a;
      }

      .footer-action.secondary {
        color: rgba(255, 255, 255, 0.88);
        background: rgba(255, 255, 255, 0.02);
      }

      .footer-action:hover {
        transform: translateY(-1px);
      }

      .footer-main {
        padding: 2.7rem 2.8rem 2.5rem;
      }

      .footer-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
      }

      .footer-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.62rem;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 700;
      }

      .footer-brand-mark {
        width: 19px;
        height: 19px;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.35);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .footer-cols {
        display: grid;
        grid-template-columns: repeat(2, minmax(130px, 1fr));
        gap: 2.2rem;
      }

      .footer-col h4 {
        margin: 0;
        font-size: 0.73rem;
        text-transform: uppercase;
        letter-spacing: 0.11em;
        color: rgba(255, 255, 255, 0.45);
      }

      .footer-col ul {
        list-style: none;
        margin: 0.9rem 0 0;
        padding: 0;
        display: grid;
        gap: 0.55rem;
      }

      .footer-col li,
      .footer-col a {
        color: rgba(255, 255, 255, 0.82);
        text-decoration: none;
        font-size: 0.92rem;
      }

      .footer-col a:hover {
        color: #ffffff;
      }

      .footer-bottom {
        margin-top: 2.2rem;
        padding-top: 1.05rem;
        border-top: 1px solid rgba(255, 255, 255, 0.09);
        color: rgba(255, 255, 255, 0.45);
        font-size: 0.77rem;
      }

      .login-page {
        min-height: 100vh;
        background:
          radial-gradient(circle at 22% 40%, rgba(255, 107, 0, 0.12) 0%, rgba(255, 107, 0, 0) 38%),
          #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        position: relative;
      }

      .login-close {
        position: fixed;
        right: 1.6rem;
        top: 1rem;
        border: none;
        background: transparent;
        color: rgba(255, 255, 255, 0.82);
        font-size: 1.4rem;
        cursor: pointer;
      }

      .login-card {
        width: min(100%, 400px);
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(8, 8, 8, 0.98) 0%, rgba(2, 2, 2, 0.98) 100%);
        border: 1px solid rgba(255, 107, 0, 0.28);
        box-shadow: 0 26px 58px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 107, 0, 0.08) inset;
        padding: 1.1rem 1.1rem 1.25rem;
      }

      .login-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.58rem;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 700;
      }

      .login-brand .footer-brand-mark {
        border-color: rgba(255, 107, 0, 0.44);
        color: #ff6b00;
      }

      .login-brand .footer-brand-mark {
        width: 18px;
        height: 18px;
      }

      .login-title {
        margin: 0.9rem 0 0;
        font-size: 2rem;
        font-family: 'Inter Tight', Inter, sans-serif;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.97);
      }

      .login-sub {
        margin: 0.38rem 0 0;
        color: rgba(255, 255, 255, 0.46);
        font-size: 0.9rem;
      }

      .login-google {
        margin-top: 1.15rem;
        width: 100%;
        height: 44px;
        border-radius: 7px;
        border: 1px solid rgba(255, 107, 0, 0.28);
        background: rgba(255, 107, 0, 0.06);
        color: rgba(255, 255, 255, 0.95);
        font-weight: 600;
        cursor: pointer;
      }

      .login-google:hover {
        background: rgba(255, 107, 0, 0.12);
      }

      .login-divider {
        margin: 0.95rem 0;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.82rem;
        font-weight: 700;
      }

      .login-divider::before,
      .login-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgba(255, 107, 0, 0.22);
      }

      .login-input {
        width: 100%;
        height: 42px;
        border-radius: 7px;
        border: 1px solid rgba(255, 107, 0, 0.2);
        background: rgba(255, 107, 0, 0.03);
        color: #fff;
        padding: 0 0.82rem;
        margin-bottom: 0.72rem;
      }

      .login-input:focus {
        outline: none;
        border-color: rgba(255, 107, 0, 0.58);
        box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.14);
      }

      .login-input::placeholder {
        color: rgba(255, 255, 255, 0.42);
      }

      .login-forgot {
        text-align: right;
        margin-bottom: 0.7rem;
      }

      .login-forgot a {
        color: rgba(255, 182, 132, 0.9);
        font-size: 0.79rem;
        text-decoration: none;
      }

      .login-submit {
        width: 100%;
        height: 42px;
        border: none;
        border-radius: 7px;
        font-weight: 700;
        background: #ff6b00;
        color: #110b07;
        cursor: pointer;
      }

      .login-submit:hover {
        background: #ff7e26;
      }

      .login-signup {
        text-align: center;
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.84rem;
      }

      .login-signup a {
        color: rgba(255, 184, 138, 0.95);
      }

      .app-shell {
        min-height: 100vh;
        background:
          radial-gradient(circle at 50% 36%, rgba(255, 107, 0, 0.09) 0%, rgba(255, 107, 0, 0) 32%),
          #000;
        position: relative;
      }

      .app-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 36px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding-top: 0.8rem;
        background: rgba(0, 0, 0, 0.5);
      }

      .app-side-dot {
        width: 18px;
        height: 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.74);
      }

      .app-top {
        height: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        margin-left: 36px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 14px;
        gap: 0.65rem;
      }

      .app-top a,
      .app-top span {
        color: rgba(255, 255, 255, 0.86);
        text-decoration: none;
        font-size: 0.77rem;
        font-weight: 600;
      }

      .app-user-pill {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid rgba(255, 107, 0, 0.38);
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 107, 0, 0.08);
        color: rgba(255, 255, 255, 0.92);
        cursor: pointer;
        transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        position: relative;
      }

      .app-user-pill:hover {
        transform: translateY(-1px) scale(1.03);
        background: rgba(255, 107, 0, 0.14);
        border-color: rgba(255, 107, 0, 0.58);
      }

      .account-dropdown-wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .account-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        min-width: 180px;
        border-radius: 14px;
        border: 1px solid rgba(255, 107, 0, 0.22);
        background: rgba(8, 8, 8, 0.96);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.45);
        padding: 0.45rem;
        z-index: 50;
      }

      .account-dropdown button,
      .account-dropdown a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.7rem 0.8rem;
        border: none;
        border-radius: 10px;
        background: transparent;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        font-size: 0.86rem;
        cursor: pointer;
        text-align: left;
      }

      .account-dropdown button:hover,
      .account-dropdown a:hover {
        background: rgba(255, 107, 0, 0.12);
      }

      .account-dropdown .danger {
        color: #ffb18a;
      }

      .app-main {
        margin-left: 36px;
        min-height: calc(100vh - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.8rem;
        position: relative;
      }

      .app-orb-wrap {
        position: absolute;
        width: min(58vw, 720px);
        height: min(58vw, 720px);
        max-height: 68vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        opacity: 0.52;
        filter: saturate(1.18) brightness(0.98);
        z-index: 0;
      }

      .detect-center {
        width: min(100%, 700px);
        text-align: center;
        position: relative;
        z-index: 1;
      }

      .detect-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.55rem;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 700;
      }

      .detect-logo .footer-brand-mark {
        width: 22px;
        height: 22px;
        border-color: rgba(255, 107, 0, 0.44);
        color: #ff6b00;
      }

      .detect-panel {
        margin-top: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        background: rgba(17, 17, 17, 0.9);
        padding: 0.6rem;
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 0.5rem;
        align-items: center;
        overflow: visible;
      }

      .detect-start-btn {
        margin-top: 1rem;
        height: 42px;
        border-radius: 999px;
        border: 1px solid rgba(255, 107, 0, 0.45);
        background: rgba(255, 107, 0, 0.12);
        color: rgba(255, 255, 255, 0.95);
        padding: 0 1.1rem;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
      }

      .detect-uploader {
        position: relative;
        height: 40px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.03);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        padding: 0 0.8rem;
        color: rgba(255, 255, 255, 0.64);
      }

      .detect-uploader input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }

      .detect-mode {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.03);
        height: 40px;
        padding: 0 0.85rem;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        position: relative;
      }

      .detect-mode-menu {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-width: 220px;
        border-radius: 14px;
        border: 1px solid rgba(255, 107, 0, 0.22);
        background: rgba(8, 8, 8, 0.98);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.45);
        padding: 0.35rem;
        z-index: 30;
      }

      .detect-mode-option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        padding: 0.78rem 0.8rem;
        border: none;
        border-radius: 10px;
        background: transparent;
        color: rgba(255, 255, 255, 0.92);
        cursor: pointer;
        text-align: left;
      }

      .detect-mode-option:hover {
        background: rgba(255, 107, 0, 0.12);
      }

      .detect-mode-option.active {
        background: rgba(255, 107, 0, 0.16);
      }

      .detect-mode-option-left {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }

      .detect-mode-option-icon {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        border: 1px solid rgba(255, 107, 0, 0.2);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 107, 0, 0.06);
        color: #ffb07a;
      }

      .detect-scan {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #0e0e0e;
      }

      .preview-strip {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.6rem;
      }

      .preview-item {
        height: 92px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        overflow: hidden;
        background: rgba(255, 255, 255, 0.03);
      }

      .preview-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .scan-results {
        margin-top: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 12px;
        background: rgba(10, 10, 10, 0.85);
        padding: 0.95rem;
        text-align: left;
      }

      .scan-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.7rem;
      }

      .scan-card {
        border: 1px solid rgba(255, 255, 255, 0.11);
        border-radius: 10px;
        padding: 0.72rem;
        background: rgba(255, 255, 255, 0.02);
      }

      .scan-card h4 {
        margin: 0;
        color: rgba(255, 255, 255, 0.95);
        font-size: 0.86rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }

      .scan-stat {
        margin-top: 0.56rem;
        font-size: 1.35rem;
        font-weight: 800;
      }

      .graph-bars {
        margin-top: 0.58rem;
        display: grid;
        gap: 0.34rem;
      }

      .graph-bar {
        height: 8px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        overflow: hidden;
      }

      .graph-bar span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #ff6b00, #ff9e61);
      }

      @keyframes heroEnter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes terminalEnter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes windowDrift {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
      }

      @keyframes typeLineLoop {
        0% {
          width: 0;
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        68%, 100% {
          width: calc(var(--chars, 20) * 1ch);
          opacity: 1;
        }
      }

      @keyframes streamShift {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      @keyframes scanSweep {
        0% { transform: translateY(-110%); }
        100% { transform: translateY(120%); }
      }

      @media (max-width: 1080px) {
        .header {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .hero {
          padding-left: 1.25rem;
          padding-top: 94px;
          align-items: flex-start;
        }

        .hero::before {
          width: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.76) 52%,
            rgba(0, 0, 0, 0.42) 78%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .hero-content {
          max-width: 100%;
          padding: 1rem 0.9rem 1.05rem;
        }

        .terminal-grid-wrap {
          padding-top: 86px;
        }

        .about-inner {
          padding: 3.4rem 1.25rem 4rem;
        }

        .about-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .footer-main {
          padding: 2.3rem 1.25rem 2rem;
        }

        .footer-top {
          flex-direction: column;
        }

        .scan-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 860px) {
        .nav {
          gap: 16px;
        }

        .terminal-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(4, minmax(130px, 1fr));
          height: calc(100vh - 100px);
        }

        .subtitle-row {
          font-size: 16px;
          letter-spacing: 0.09em;
        }

        .subtitle-line {
          width: 42px;
        }

        .cta-row {
          flex-direction: column;
          align-items: flex-start;
        }

        .btn {
          width: 100%;
          max-width: 290px;
        }

        .footer-cols {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
        }

        .preview-strip {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 620px) {
        .header {
          height: 64px;
        }

        .nav {
          display: none;
        }

        .hero {
          min-height: auto;
          padding-top: 92px;
          padding-bottom: 32px;
        }

        .terminal-grid-wrap {
          position: fixed;
          opacity: 0.42;
        }

        .terminal-body {
          font-size: 11px;
        }

        .about-grid {
          grid-template-columns: 1fr;
        }

        .about-card {
          min-height: 0;
        }

        .login-title {
          font-size: 1.75rem;
        }

        .footer-cta {
          padding: 3.1rem 0.9rem 2.8rem;
        }

        .footer-cta-actions {
          display: grid;
          width: 100%;
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-action {
          width: 100%;
        }

        .footer-cols {
          grid-template-columns: 1fr;
        }

        .detect-panel {
          grid-template-columns: 1fr;
          border-radius: 16px;
        }

        .detect-mode-menu {
          left: 0;
          right: 0;
          min-width: 0;
        }

        .app-top {
          justify-content: flex-start;
          overflow-x: auto;
          white-space: nowrap;
        }

        .account-dropdown {
          right: auto;
          left: 0;
        }

        .app-orb-wrap {
          width: min(90vw, 520px);
          height: min(90vw, 520px);
          opacity: 0.42;
        }
      }
    `,[]);return p.jsxs("div",{className:"page",children:[p.jsx("style",{children:L}),e==="app"?p.jsxs("section",{className:"app-shell",id:"app",children:[p.jsxs("aside",{className:"app-sidebar","aria-label":"App quick actions",children:[p.jsx("span",{className:"app-side-dot",children:p.jsx(Cn,{size:12})}),p.jsx("span",{className:"app-side-dot",children:p.jsx(Gh,{size:12})}),p.jsx("span",{className:"app-side-dot",children:p.jsx(Oh,{size:12})}),p.jsx("span",{className:"app-side-dot",children:p.jsx($h,{size:12})})]}),p.jsxs("header",{className:"app-top",children:[p.jsx("span",{style:{color:"rgba(255,255,255,0.72)",fontSize:"0.76rem",marginRight:"0.25rem"},children:"Hi,"}),p.jsxs("div",{className:"account-dropdown-wrap",ref:y,children:[p.jsx("button",{type:"button",className:"app-user-pill",onClick:w,"aria-label":"Account menu",children:"MO"}),c&&p.jsxs("div",{className:"account-dropdown",role:"menu","aria-label":"Account options",children:[p.jsxs("a",{href:"#app",role:"menuitem",onClick:()=>g(!1),children:[p.jsx("span",{children:"Profile"}),p.jsx("span",{children:"›"})]}),p.jsxs("a",{href:"#about",role:"menuitem",onClick:()=>g(!1),children:[p.jsx("span",{children:"Settings"}),p.jsx("span",{children:"›"})]}),p.jsxs("button",{type:"button",className:"danger",onClick:_,role:"menuitem",children:[p.jsx("span",{children:"Sign out"}),p.jsx("span",{children:"↗"})]})]})]})]}),p.jsxs("main",{className:"app-main",children:[p.jsx("div",{className:"app-orb-wrap","aria-hidden":"true",children:p.jsx(z0,{hue:24,hoverIntensity:.32,rotateOnHover:!1,forceHoverState:!0,backgroundColor:"#000000"})}),p.jsxs("section",{className:"detect-center",children:[p.jsxs("div",{className:"detect-logo",children:[p.jsx("span",{className:"footer-brand-mark","aria-hidden":"true",children:p.jsx(Cn,{size:12,strokeWidth:2.2})}),p.jsx("span",{children:"VERIFAI AI"})]}),a?p.jsx(p.Fragment,{children:p.jsxs("div",{className:"detect-panel",children:[p.jsxs("label",{className:"detect-uploader",children:[n==="single"?p.jsx(ia,{size:16}):p.jsx(la,{size:16}),p.jsx("span",{children:i.length>0?`${i.length} image(s) selected`:"Upload image(s) for detection"}),p.jsx("input",{type:"file",accept:"image/*",multiple:n==="batch",onChange:N})]}),p.jsxs("div",{className:"detect-mode",ref:x,children:[p.jsxs("button",{type:"button",onClick:k,style:{all:"unset",display:"inline-flex",alignItems:"center",gap:"0.35rem",width:"100%",cursor:"pointer"},children:[p.jsx("span",{children:n==="single"?"Single Image":"Batch Image"}),p.jsx(Ah,{size:14})]}),d&&p.jsxs("div",{className:"detect-mode-menu",role:"menu","aria-label":"Detection mode options",children:[p.jsxs("button",{type:"button",className:`detect-mode-option ${n==="single"?"active":""}`,onClick:()=>E("single"),children:[p.jsxs("span",{className:"detect-mode-option-left",children:[p.jsx("span",{className:"detect-mode-option-icon",children:p.jsx(ia,{size:14})}),p.jsx("span",{children:"Single Image"})]}),p.jsx("span",{children:"1"})]}),p.jsxs("button",{type:"button",className:`detect-mode-option ${n==="batch"?"active":""}`,onClick:()=>E("batch"),children:[p.jsxs("span",{className:"detect-mode-option-left",children:[p.jsx("span",{className:"detect-mode-option-icon",children:p.jsx(la,{size:14})}),p.jsx("span",{children:"Batch Image"})]}),p.jsx("span",{children:"8"})]})]})]}),p.jsx("button",{className:"detect-scan",type:"button",onClick:P,"aria-label":"Scan images",children:p.jsx(Yh,{size:16})})]})}):p.jsx("button",{type:"button",className:"detect-start-btn",onClick:()=>u(!0),children:"Open Detection"}),i.length>0&&p.jsx("div",{className:"preview-strip",children:i.map(z=>p.jsx("div",{className:"preview-item",children:p.jsx("img",{src:z.preview,alt:z.name})},z.preview))}),s&&p.jsxs("section",{className:"scan-results",children:[p.jsxs("div",{className:"scan-grid",children:[p.jsxs("article",{className:"scan-card",children:[p.jsxs("h4",{children:[p.jsx(Mh,{size:14})," Detection Confidence"]}),p.jsx("div",{className:"scan-stat",children:"94.7%"}),p.jsxs("div",{className:"graph-bars",children:[p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"95%"}})}),p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"78%"}})}),p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"66%"}})})]})]}),p.jsxs("article",{className:"scan-card",children:[p.jsxs("h4",{children:[p.jsx(Lh,{size:14})," Classification Split"]}),p.jsx("div",{className:"scan-stat",children:"AI: 62%"}),p.jsxs("div",{className:"graph-bars",children:[p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"62%"}})}),p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"38%"}})})]})]}),p.jsxs("article",{className:"scan-card",children:[p.jsxs("h4",{children:[p.jsx(Sh,{size:14})," Artifact Activity"]}),p.jsx("div",{className:"scan-stat",children:"High"}),p.jsxs("div",{className:"graph-bars",children:[p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"88%"}})}),p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"80%"}})}),p.jsx("div",{className:"graph-bar",children:p.jsx("span",{style:{width:"71%"}})})]})]})]}),p.jsxs("div",{style:{marginTop:"0.75rem",color:"rgba(255,255,255,0.78)",fontSize:"0.86rem"},children:[p.jsx(ep,{size:13,style:{verticalAlign:"middle",marginRight:"0.35rem"}}),"Scan complete: image artifacts and metadata patterns were analyzed successfully."]})]})]})]})]}):e==="login"||e==="signup"?p.jsxs("section",{className:"login-page",id:"login",children:[p.jsx("button",{className:"login-close",onClick:m,"aria-label":"Close login",children:"×"}),p.jsxs("div",{className:"login-card",children:[p.jsxs("div",{className:"login-brand",children:[p.jsx("span",{className:"footer-brand-mark","aria-hidden":"true",children:p.jsx(Cn,{size:11,strokeWidth:2.2})}),p.jsx("span",{children:"VERIFAI"})]}),p.jsx("h2",{className:"login-title",children:e==="signup"?"Create your account":"Log into your account"}),p.jsx("p",{className:"login-sub",children:"+30M users choose VerifAI"}),p.jsx("button",{className:"login-google",type:"button",children:"Continue with Google"}),p.jsx("div",{className:"login-divider",children:"OR"}),e==="signup"&&p.jsx("input",{className:"login-input",type:"text",placeholder:"Enter your full name"}),p.jsx("input",{className:"login-input",type:"email",placeholder:"Enter your email address"}),p.jsx("input",{className:"login-input",type:"password",placeholder:"Enter password"}),e==="signup"&&p.jsx("input",{className:"login-input",type:"password",placeholder:"Confirm password"}),e==="login"&&p.jsx("div",{className:"login-forgot",children:p.jsx("a",{href:"#home",children:"Forgot Password?"})}),p.jsx("button",{className:"login-submit",type:"button",onClick:h,children:e==="signup"?"Sign Up":"Sign In"}),p.jsx("div",{className:"login-signup",children:e==="signup"?p.jsxs(p.Fragment,{children:["Already have an account? ",p.jsx("a",{href:"#login",onClick:S,children:"Log in"})]}):p.jsxs(p.Fragment,{children:["Don't have an account? ",p.jsx("a",{href:"#signup",onClick:f,children:"Sign up"})]})})]})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"orb","aria-hidden":"true"}),p.jsxs("header",{className:"header",children:[p.jsxs("a",{href:"#home",className:"brand","aria-label":"VerifAI home",children:[p.jsx("span",{className:"brand-icon",children:p.jsx(Cn,{size:16,color:"#ff6b00",strokeWidth:2.2})}),p.jsx("span",{children:"VerifAI"}),p.jsx("span",{className:"ai-chip",children:"AI"})]}),p.jsxs("nav",{className:"nav","aria-label":"Primary",children:[p.jsx("a",{className:"nav-link",href:"#home",children:"Home"}),p.jsx("a",{className:"nav-link",href:"#about",children:"About"}),p.jsx("a",{className:"nav-link",href:"#features",children:"Feature"}),p.jsx("a",{className:"nav-link",href:"#login",onClick:S,children:"Login"})]})]}),p.jsx("div",{className:"terminal-grid-wrap","aria-hidden":"true",children:p.jsx("div",{className:"terminal-grid",children:j0.map((z,T)=>p.jsxs("section",{className:"terminal-window",style:{"--terminal-delay":`${T*.3}s`},children:[p.jsxs("div",{className:"terminal-header",children:[p.jsx("span",{className:"dot red"}),p.jsx("span",{className:"dot yellow"}),p.jsx("span",{className:"dot green"})]}),p.jsx("div",{className:"terminal-body",children:z.lines.map((O,A)=>p.jsx("div",{className:`line ${P0(O)}`,style:{"--line-delay":`${T*.24+A*.3+.18}s`,"--window-duration":`${3.2+T%4*.2}s`,"--chars":`${Math.max(O.length,12)}`},children:O},`${z.id}-${A}`))})]},z.id))})}),p.jsx("main",{className:"hero",id:"home",children:p.jsxs("section",{className:"hero-content",children:[p.jsxs("div",{className:"hero-badge reveal",style:{animationDelay:`${_t[0]}s`},children:[p.jsx(np,{size:16,strokeWidth:2.4}),p.jsx("span",{children:"AI Image Detection"})]}),p.jsxs("h1",{className:"headline reveal",style:{animationDelay:`${_t[1]}s`},children:[p.jsx("span",{className:"headline-line",children:"AI Image"}),p.jsx("span",{className:"headline-line",children:"Detection System"})]}),p.jsxs("div",{className:"subtitle-row reveal",style:{animationDelay:`${_t[2]}s`},children:[p.jsx("span",{className:"subtitle-line"}),p.jsx("span",{children:"Powered by YOLOv8"}),p.jsx("span",{className:"subtitle-line"})]}),p.jsx("p",{className:"description reveal",style:{animationDelay:`${_t[3]}s`},children:"Enterprise-grade AI agents with frontier and open-source model access. Detect AI-generated or manipulated images in seconds with confidence scoring."}),p.jsxs("div",{className:"cta-row reveal",style:{animationDelay:`${_t[4]}s`},children:[p.jsx("a",{className:"btn btn-primary",href:"#detect",children:"Get Started →"}),p.jsx("a",{className:"btn btn-secondary",href:"#about",children:"Learn More"})]}),p.jsxs("div",{className:"pill-row reveal",style:{animationDelay:`${_t[5]}s`},id:"features",children:[p.jsxs("span",{className:"feature-pill",children:[p.jsx(el,{size:15}),"Real-time Detection"]}),p.jsxs("span",{className:"feature-pill",children:[p.jsx(el,{size:15}),"95%+ Accuracy"]}),p.jsxs("span",{className:"feature-pill",children:[p.jsx(el,{size:15}),"API Access"]})]}),p.jsx("div",{className:"reveal",style:{animationDelay:`${_t[6]}s`,color:"rgba(255,255,255,0.58)",fontSize:"13px"},children:"Trusted by teams building safer media verification workflows."}),p.jsx("span",{id:"detect",style:{position:"absolute",top:"-96px"},"aria-hidden":"true"})]})}),p.jsx("section",{className:"about-shell",id:"about",children:p.jsxs("div",{className:"about-inner",children:[p.jsxs("div",{className:"about-heading",children:[p.jsx("h2",{className:"about-title",children:"About VerifAI, built for trusted image verification."}),p.jsx("p",{className:"about-lead",children:"VerifAI combines machine learning, credibility scoring, and clear visual inspection tools to help teams verify whether an image is authentic, manipulated, or AI-generated."})]}),p.jsx("div",{className:"about-grid",id:"features",children:L0.map(z=>{const T=z.icon;return p.jsxs("article",{className:"about-card",children:[p.jsxs("div",{className:"about-card-head",children:[p.jsx("span",{className:"about-icon","aria-hidden":"true",children:p.jsx(T,{size:16,strokeWidth:2})}),p.jsxs("div",{children:[p.jsx("h3",{className:"about-card-title",children:z.title}),p.jsx("p",{className:"about-card-subtitle",children:z.subtitle})]})]}),p.jsx("p",{className:"about-card-body",children:z.body}),p.jsx("ul",{className:"about-points",children:z.points.map(O=>p.jsx("li",{children:O},`${z.id}-${O}`))}),p.jsx("a",{href:"#home",className:"about-cta",children:z.cta})]},z.id)})})]})}),p.jsxs("footer",{className:"site-footer",id:"footer",children:[p.jsxs("section",{className:"footer-cta",children:[p.jsx("h2",{className:"footer-cta-title",children:"Start verifying with VerifAI."}),p.jsx("p",{className:"footer-cta-text",children:"Machine learning image verification with confidence scoring and visual evidence review, built for teams that need trusted decisions."}),p.jsxs("div",{className:"footer-cta-actions",children:[p.jsx("a",{className:"footer-action primary",href:"#home",children:"Start Detection"}),p.jsx("a",{className:"footer-action secondary",href:"#about",children:"Learn More"})]})]}),p.jsxs("section",{className:"footer-main",children:[p.jsxs("div",{className:"footer-top",children:[p.jsxs("div",{className:"footer-brand","aria-label":"VerifAI brand",children:[p.jsx("span",{className:"footer-brand-mark","aria-hidden":"true",children:p.jsx(Cn,{size:12,strokeWidth:2.2})}),p.jsx("span",{children:"VerifAI"})]}),p.jsxs("div",{className:"footer-cols",children:[p.jsxs("div",{className:"footer-col",children:[p.jsx("h4",{children:"Technology"}),p.jsxs("ul",{children:[p.jsx("li",{children:"MT-YOLOv6"}),p.jsx("li",{children:"Machine Learning"}),p.jsx("li",{children:"Computer Vision"}),p.jsx("li",{children:"Deep Learning"})]})]}),p.jsxs("div",{className:"footer-col",children:[p.jsx("h4",{children:"Team"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Alviar, Justin James E."}),p.jsx("li",{children:"Arobi, Rashdy"}),p.jsx("li",{children:"Climaco, John Lloyd L."}),p.jsx("li",{children:"Mamiala, Denabhar"}),p.jsx("li",{children:"Lagoyo, Shadia"})]})]})]})]}),p.jsx("div",{className:"footer-bottom",children:"© 2026 VerifAI. IT 322 - Machine Learning Project. WMSU College of Computing Studies"})]})]})]})]})}const T0=document.getElementById("root");Rc(T0).render(p.jsx(nd.StrictMode,{children:p.jsx(A0,{})}));
