(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function RS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t0={exports:{}},vu={},n0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),bS=Symbol.for("react.portal"),PS=Symbol.for("react.fragment"),LS=Symbol.for("react.strict_mode"),DS=Symbol.for("react.profiler"),NS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),US=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),OS=Symbol.for("react.memo"),kS=Symbol.for("react.lazy"),dp=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r0=Object.assign,s0={};function eo(t,e,n){this.props=t,this.context=e,this.refs=s0,this.updater=n||i0}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o0(){}o0.prototype=eo.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=s0,this.updater=n||i0}var Pd=bd.prototype=new o0;Pd.constructor=bd;r0(Pd,eo.prototype);Pd.isPureReactComponent=!0;var hp=Array.isArray,a0=Object.prototype.hasOwnProperty,Ld={current:null},l0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a0.call(e,i)&&!l0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:s,ref:o,props:r,_owner:Ld.current}}function VS(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function zS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pp=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zS(""+t.key):e.toString(36)}function _l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case bS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+qu(o,0):i,hp(r)?(n="",t!=null&&(n=t.replace(pp,"$&/")+"/"),_l(r,e,n,"",function(u){return u})):r!=null&&(Dd(r)&&(r=VS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+qu(s,a);o+=_l(s,e,n,l,r)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+qu(s,a++),o+=_l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var i=[],r=0;return _l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},xl={transition:null},GS={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Ld};function c0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=eo;We.Fragment=PS;We.Profiler=DS;We.PureComponent=bd;We.StrictMode=LS;We.Suspense=FS;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;We.act=c0;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=r0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a0.call(e,l)&&!l0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NS,_context:t},t.Consumer=t};We.createElement=u0;We.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:US,render:t}};We.isValidElement=Dd;We.lazy=function(t){return{$$typeof:kS,_payload:{_status:-1,_result:t},_init:HS}};We.memo=function(t,e){return{$$typeof:OS,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};We.unstable_act=c0;We.useCallback=function(t,e){return tn.current.useCallback(t,e)};We.useContext=function(t){return tn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};We.useEffect=function(t,e){return tn.current.useEffect(t,e)};We.useId=function(){return tn.current.useId()};We.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return tn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};We.useRef=function(t){return tn.current.useRef(t)};We.useState=function(t){return tn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return tn.current.useTransition()};We.version="18.3.1";n0.exports=We;var pe=n0.exports;const WS=RS(pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=pe,XS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),qS=Object.prototype.hasOwnProperty,$S=jS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KS={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)qS.call(e,i)&&!KS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:XS,type:t,key:s,ref:o,props:r,_owner:$S.current}}vu.Fragment=YS;vu.jsx=f0;vu.jsxs=f0;t0.exports=vu;var b=t0.exports,d0={exports:{}},En={},h0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var P=N.length;N.push(O);e:for(;0<P;){var k=P-1>>>1,Y=N[k];if(0<r(Y,O))N[k]=O,N[P]=Y,P=k;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],P=N.pop();if(P!==O){N[0]=P;e:for(var k=0,Y=N.length,F=Y>>>1;k<F;){var B=2*(k+1)-1,Q=N[B],J=B+1,fe=N[J];if(0>r(Q,P))J<Y&&0>r(fe,Q)?(N[k]=fe,N[J]=P,k=J):(N[k]=Q,N[B]=P,k=B);else if(J<Y&&0>r(fe,P))N[k]=fe,N[J]=P,k=J;else break e}}return O}function r(N,O){var P=N.sortIndex-O.sortIndex;return P!==0?P:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=N)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function y(N){if(_=!1,g(N),!x)if(n(l)!==null)x=!0,$(w);else{var O=n(u);O!==null&&K(y,O.startTime-N)}}function w(N,O){x=!1,_&&(_=!1,f(D),D=-1),p=!0;var P=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||N&&!W());){var k=d.callback;if(typeof k=="function"){d.callback=null,h=d.priorityLevel;var Y=k(d.expirationTime<=O);O=t.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var F=!0;else{var B=n(u);B!==null&&K(y,B.startTime-O),F=!1}return F}finally{d=null,h=P,p=!1}}var A=!1,C=null,D=-1,S=5,E=-1;function W(){return!(t.unstable_now()-E<S)}function Z(){if(C!==null){var N=t.unstable_now();E=N;var O=!0;try{O=C(!0,N)}finally{O?ie():(A=!1,C=null)}}else A=!1}var ie;if(typeof v=="function")ie=function(){v(Z)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,V=I.port2;I.port1.onmessage=Z,ie=function(){V.postMessage(null)}}else ie=function(){m(Z,0)};function $(N){C=N,A||(A=!0,ie())}function K(N,O){D=m(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,$(w))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var P=h;h=O;try{return N()}finally{h=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=h;h=N;try{return O()}finally{h=P}},t.unstable_scheduleCallback=function(N,O,P){var k=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?k+P:k):P=k,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,N={id:c++,callback:O,priorityLevel:N,startTime:P,expirationTime:Y,sortIndex:-1},P>k?(N.sortIndex=P,e(u,N),n(l)===null&&N===n(u)&&(_?(f(D),D=-1):_=!0,K(y,P-k))):(N.sortIndex=Y,e(l,N),x||p||(x=!0,$(w))),N},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(N){var O=h;return function(){var P=h;h=O;try{return N.apply(this,arguments)}finally{h=P}}}})(p0);h0.exports=p0;var ZS=h0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=pe,Sn=ZS;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m0=new Set,Wo={};function Xr(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Wo[t]=e,t=0;t<e.length;t++)m0.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mp={},gp={};function eM(t){return ff.call(gp,t)?!0:ff.call(mp,t)?!1:JS.test(t)?gp[t]=!0:(mp[t]=!0,!1)}function tM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nM(t,e,n,i){if(e===null||typeof e>"u"||tM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nd,Id);kt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nd,Id);kt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nd,Id);kt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ud(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nM(e,n,r,i)&&(n=null),i||r===null?eM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),vp=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,$u;function Eo(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Ku=!1;function Zu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function iM(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Zu(t.type,!1),t;case 11:return t=Zu(t.type.render,!1),t;case 1:return t=Zu(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case df:return"Profiler";case Fd:return"StrictMode";case hf:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case g0:return(t._context.displayName||"Context")+".Provider";case Od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kd:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function rM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===Fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sM(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=sM(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&Ud(t,"checked",e,!1)}function vf(t,e){S0(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(To(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function M0(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oM=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){oM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function w0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=w0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var aM=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(aM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function Bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tf=null,Ns=null,Is=null;function Mp(t){if(t=va(t)){if(typeof Tf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Mu(e),Tf(t.stateNode,t.type,e))}}function C0(t){Ns?Is?Is.push(t):Is=[t]:Ns=t}function R0(){if(Ns){var t=Ns,e=Is;if(Is=Ns=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function b0(t,e){return t(e)}function P0(){}var Qu=!1;function L0(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return b0(t,e,n)}finally{Qu=!1,(Ns!==null||Is!==null)&&(P0(),R0())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=Mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var wf=!1;if(wi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){wf=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{wf=!1}function lM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Lo=!1,Ul=null,Fl=!1,Af=null,uM={onError:function(t){Lo=!0,Ul=t}};function cM(t,e,n,i,r,s,o,a,l){Lo=!1,Ul=null,lM.apply(uM,arguments)}function fM(t,e,n,i,r,s,o,a,l){if(cM.apply(this,arguments),Lo){if(Lo){var u=Ul;Lo=!1,Ul=null}else throw Error(ne(198));Fl||(Fl=!0,Af=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ep(t){if(Yr(t)!==t)throw Error(ne(188))}function dM(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ep(r),t;if(s===i)return Ep(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function N0(t){return t=dM(t),t!==null?I0(t):null}function I0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I0(t);if(e!==null)return e;t=t.sibling}return null}var U0=Sn.unstable_scheduleCallback,Tp=Sn.unstable_cancelCallback,hM=Sn.unstable_shouldYield,pM=Sn.unstable_requestPaint,yt=Sn.unstable_now,mM=Sn.unstable_getCurrentPriorityLevel,Vd=Sn.unstable_ImmediatePriority,F0=Sn.unstable_UserBlockingPriority,Ol=Sn.unstable_NormalPriority,gM=Sn.unstable_LowPriority,O0=Sn.unstable_IdlePriority,_u=null,ii=null;function vM(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:yM,_M=Math.log,xM=Math.LN2;function yM(t){return t>>>=0,t===0?32:31-(_M(t)/xM|0)|0}var Na=64,Ia=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wo(a):(s&=o,s!==0&&(i=wo(s)))}else o=n&~r,o!==0?i=wo(o):s!==0&&(i=wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function SM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=SM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k0(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function EM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V0,Hd,z0,H0,G0,Rf=!1,Ua=[],Yi=null,qi=null,$i=null,Yo=new Map,qo=new Map,zi=[],TM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function wM(t,e,n,i,r){switch(e){case"focusin":return Yi=co(Yi,t,e,n,i,r),!0;case"dragenter":return qi=co(qi,t,e,n,i,r),!0;case"mouseover":return $i=co($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Yo.set(s,co(Yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,co(qo.get(s)||null,t,e,n,i,r)),!0}return!1}function W0(t){var e=br(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,G0(t.priority,function(){z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ef=i,n.target.dispatchEvent(i),Ef=null}else return e=va(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){yl(t)&&n.delete(e)}function AM(){Rf=!1,Yi!==null&&yl(Yi)&&(Yi=null),qi!==null&&yl(qi)&&(qi=null),$i!==null&&yl($i)&&($i=null),Yo.forEach(Ap),qo.forEach(Ap)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,AM)))}function $o(t){function e(r){return fo(r,t)}if(0<Ua.length){fo(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&fo(Yi,t),qi!==null&&fo(qi,t),$i!==null&&fo($i,t),Yo.forEach(e),qo.forEach(e),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&zi.shift()}var Us=Li.ReactCurrentBatchConfig,Bl=!0;function CM(t,e,n,i){var r=Ke,s=Us.transition;Us.transition=null;try{Ke=1,Gd(t,e,n,i)}finally{Ke=r,Us.transition=s}}function RM(t,e,n,i){var r=Ke,s=Us.transition;Us.transition=null;try{Ke=4,Gd(t,e,n,i)}finally{Ke=r,Us.transition=s}}function Gd(t,e,n,i){if(Bl){var r=bf(t,e,n,i);if(r===null)uc(t,e,i,Vl,n),wp(t,i);else if(wM(r,t,e,n,i))i.stopPropagation();else if(wp(t,i),e&4&&-1<TM.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&V0(s),s=bf(t,e,n,i),s===null&&uc(t,e,i,Vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uc(t,e,i,null,n)}}var Vl=null;function bf(t,e,n,i){if(Vl=null,t=Bd(i),t=br(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vl=t,null}function j0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mM()){case Vd:return 1;case F0:return 4;case Ol:case gM:return 16;case O0:return 536870912;default:return 16}default:return 16}}var Gi=null,Wd=null,Sl=null;function X0(){if(Sl)return Sl;var t,e=Wd,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sl=r.slice(t,1<i?1-i:void 0)}function Ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function Cp(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:Cp,this.isPropagationStopped=Cp,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jd=Tn(to),ga=ht({},to,{view:0,detail:0}),bM=Tn(ga),ec,tc,ho,xu=ht({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(ec=t.screenX-ho.screenX,tc=t.screenY-ho.screenY):tc=ec=0,ho=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Rp=Tn(xu),PM=ht({},xu,{dataTransfer:0}),LM=Tn(PM),DM=ht({},ga,{relatedTarget:0}),nc=Tn(DM),NM=ht({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),IM=Tn(NM),UM=ht({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FM=Tn(UM),OM=ht({},to,{data:0}),bp=Tn(OM),kM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VM[t])?!!e[t]:!1}function Xd(){return zM}var HM=ht({},ga,{key:function(t){if(t.key){var e=kM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GM=Tn(HM),WM=ht({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Tn(WM),jM=ht({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),XM=Tn(jM),YM=ht({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),qM=Tn(YM),$M=ht({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KM=Tn($M),ZM=[9,13,27,32],Yd=wi&&"CompositionEvent"in window,Do=null;wi&&"documentMode"in document&&(Do=document.documentMode);var QM=wi&&"TextEvent"in window&&!Do,Y0=wi&&(!Yd||Do&&8<Do&&11>=Do),Lp=" ",Dp=!1;function q0(t,e){switch(t){case"keyup":return ZM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function JM(t,e){switch(t){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Dp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Dp?null:t;default:return null}}function eE(t,e){if(ms)return t==="compositionend"||!Yd&&q0(t,e)?(t=X0(),Sl=Wd=Gi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var tE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tE[t.type]:e==="textarea"}function K0(t,e,n,i){C0(i),e=zl(e,"onChange"),0<e.length&&(n=new jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,Ko=null;function nE(t){a_(t,0)}function yu(t){var e=_s(t);if(y0(e))return t}function iE(t,e){if(t==="change")return e}var Z0=!1;if(wi){var ic;if(wi){var rc="oninput"in document;if(!rc){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),rc=typeof Ip.oninput=="function"}ic=rc}else ic=!1;Z0=ic&&(!document.documentMode||9<document.documentMode)}function Up(){No&&(No.detachEvent("onpropertychange",Q0),Ko=No=null)}function Q0(t){if(t.propertyName==="value"&&yu(Ko)){var e=[];K0(e,Ko,t,Bd(t)),L0(nE,e)}}function rE(t,e,n){t==="focusin"?(Up(),No=e,Ko=n,No.attachEvent("onpropertychange",Q0)):t==="focusout"&&Up()}function sE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(Ko)}function oE(t,e){if(t==="click")return yu(e)}function aE(t,e){if(t==="input"||t==="change")return yu(e)}function lE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:lE;function Zo(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ff.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=Fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function J0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uE(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J0(n.ownerDocument.documentElement,n)){if(i!==null&&qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Op(n,s);var o=Op(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cE=wi&&"documentMode"in document&&11>=document.documentMode,gs=null,Pf=null,Io=null,Lf=!1;function kp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||gs==null||gs!==Il(i)||(i=gs,"selectionStart"in i&&qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&Zo(Io,i)||(Io=i,i=zl(Pf,"onSelect"),0<i.length&&(e=new jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},sc={},t_={};wi&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Su(t){if(sc[t])return sc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return sc[t]=e[n];return t}var n_=Su("animationend"),i_=Su("animationiteration"),r_=Su("animationstart"),s_=Su("transitionend"),o_=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){o_.set(t,e),Xr(e,[t])}for(var oc=0;oc<Bp.length;oc++){var ac=Bp[oc],fE=ac.toLowerCase(),dE=ac[0].toUpperCase()+ac.slice(1);cr(fE,"on"+dE)}cr(n_,"onAnimationEnd");cr(i_,"onAnimationIteration");cr(r_,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(s_,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fM(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vp(r,a,u),s=l}}}if(Fl)throw t=Af,Fl=!1,Af=null,t}function it(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[ka]){t[ka]=!0,m0.forEach(function(n){n!=="selectionchange"&&(hE.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,lc("selectionchange",!1,e))}}function l_(t,e,n,i){switch(j0(e)){case 1:var r=CM;break;case 4:r=RM;break;default:r=Gd}n=r.bind(null,e,n,t),r=void 0,!wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}L0(function(){var u=s,c=Bd(n),d=[];e:{var h=o_.get(t);if(h!==void 0){var p=jd,x=t;switch(t){case"keypress":if(Ml(n)===0)break e;case"keydown":case"keyup":p=GM;break;case"focusin":x="focus",p=nc;break;case"focusout":x="blur",p=nc;break;case"beforeblur":case"afterblur":p=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XM;break;case n_:case i_:case r_:p=IM;break;case s_:p=qM;break;case"scroll":p=bM;break;case"wheel":p=KM;break;case"copy":case"cut":case"paste":p=FM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pp}var _=(e&4)!==0,m=!_&&t==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=Xo(v,f),y!=null&&_.push(Jo(v,y,g)))),m)break;v=v.return}0<_.length&&(h=new p(h,x,null,n,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ef&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[Ai]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?br(x):null,x!==null&&(m=Yr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(_=Rp,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Pp,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:_s(p),g=x==null?h:_s(x),h=new _(y,v+"leave",p,n,c),h.target=m,h.relatedTarget=g,y=null,br(c)===u&&(_=new _(f,v+"enter",x,n,c),_.target=g,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=p,f=x,v=0,g=_;g;g=Kr(g))v++;for(g=0,y=f;y;y=Kr(y))g++;for(;0<v-g;)_=Kr(_),v--;for(;0<g-v;)f=Kr(f),g--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=Kr(_),f=Kr(f)}_=null}else _=null;p!==null&&zp(d,h,p,_,!1),x!==null&&m!==null&&zp(d,m,x,_,!0)}}e:{if(h=u?_s(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=iE;else if(Np(h))if(Z0)w=aE;else{w=sE;var A=rE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=oE);if(w&&(w=w(t,u))){K0(d,w,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&_f(h,"number",h.value)}switch(A=u?_s(u):window,t){case"focusin":(Np(A)||A.contentEditable==="true")&&(gs=A,Pf=u,Io=null);break;case"focusout":Io=Pf=gs=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,kp(d,n,c);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":kp(d,n,c)}var C;if(Yd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ms?q0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Y0&&n.locale!=="ko"&&(ms||D!=="onCompositionStart"?D==="onCompositionEnd"&&ms&&(C=X0()):(Gi=c,Wd="value"in Gi?Gi.value:Gi.textContent,ms=!0)),A=zl(u,D),0<A.length&&(D=new bp(D,t,null,n,c),d.push({event:D,listeners:A}),C?D.data=C:(C=$0(n),C!==null&&(D.data=C)))),(C=QM?JM(t,n):eE(t,n))&&(u=zl(u,"onBeforeInput"),0<u.length&&(c=new bp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}a_(d,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Jo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Jo(t,s,r))),t=t.return}return i}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Xo(n,s),l!=null&&o.unshift(Jo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(pE,`
`).replace(mE,"")}function Ba(t,e,n){if(e=Hp(e),Hp(t)!==e&&n)throw Error(ne(425))}function Hl(){}var Df=null,Nf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,gE=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,vE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(_E)}:Uf;function _E(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$o(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),ni="__reactFiber$"+no,ea="__reactProps$"+no,Ai="__reactContainer$"+no,Ff="__reactEvents$"+no,xE="__reactListeners$"+no,yE="__reactHandles$"+no;function br(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[ni])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[ni]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Mu(t){return t[ea]||null}var Of=[],xs=-1;function fr(t){return{current:t}}function st(t){0>xs||(t.current=Of[xs],Of[xs]=null,xs--)}function nt(t,e){xs++,Of[xs]=t.current,t.current=e}var sr={},Yt=fr(sr),ln=fr(!1),Vr=sr;function zs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Gl(){st(ln),st(Yt)}function jp(t,e,n){if(Yt.current!==sr)throw Error(ne(168));nt(Yt,e),nt(ln,n)}function u_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,rM(t)||"Unknown",r));return ht({},n,i)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Vr=Yt.current,nt(Yt,t),nt(ln,ln.current),!0}function Xp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=u_(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,st(ln),st(Yt),nt(Yt,t)):st(ln),nt(ln,n)}var gi=null,Eu=!1,fc=!1;function c_(t){gi===null?gi=[t]:gi.push(t)}function SE(t){Eu=!0,c_(t)}function dr(){if(!fc&&gi!==null){fc=!0;var t=0,e=Ke;try{var n=gi;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Eu=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),U0(Vd,dr),r}finally{Ke=e,fc=!1}}return null}var ys=[],Ss=0,jl=null,Xl=0,bn=[],Pn=0,zr=null,_i=1,xi="";function Sr(t,e){ys[Ss++]=Xl,ys[Ss++]=jl,jl=t,Xl=e}function f_(t,e,n){bn[Pn++]=_i,bn[Pn++]=xi,bn[Pn++]=zr,zr=t;var i=_i;t=xi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-$n(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function $d(t){t.return!==null&&(Sr(t,1),f_(t,1,0))}function Kd(t){for(;t===jl;)jl=ys[--Ss],ys[Ss]=null,Xl=ys[--Ss],ys[Ss]=null;for(;t===zr;)zr=bn[--Pn],bn[Pn]=null,xi=bn[--Pn],bn[Pn]=null,_i=bn[--Pn],bn[Pn]=null}var vn=null,gn=null,at=!1,Wn=null;function d_(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(at){var e=gn;if(e){var n=e;if(!Yp(t,e)){if(kf(t))throw Error(ne(418));e=Ki(n.nextSibling);var i=vn;e&&Yp(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,at=!1,vn=t)}}else{if(kf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,at=!1,vn=t}}}function qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Va(t){if(t!==vn)return!1;if(!at)return qp(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=gn)){if(kf(t))throw h_(),Error(ne(418));for(;e;)d_(t,e),e=Ki(e.nextSibling)}if(qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Ki(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=gn;t;)t=Ki(t.nextSibling)}function Hs(){gn=vn=null,at=!1}function Zd(t){Wn===null?Wn=[t]:Wn.push(t)}var ME=Li.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function p_(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=er(f,v),f.index=0,f.sibling=null,f}function s(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,g,y){return v===null||v.tag!==6?(v=_c(g,f.mode,y),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,y){var w=g.type;return w===ps?c(f,v,g.props.children,y,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bi&&$p(w)===v.type)?(y=r(v,g.props),y.ref=po(f,v,g),y.return=f,y):(y=bl(g.type,g.key,g.props,null,f.mode,y),y.ref=po(f,v,g),y.return=f,y)}function u(f,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=xc(g,f.mode,y),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function c(f,v,g,y,w){return v===null||v.tag!==7?(v=Ir(g,f.mode,y,w),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_c(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return g=bl(v.type,v.key,v.props,null,f.mode,g),g.ref=po(f,null,v),g.return=f,g;case hs:return v=xc(v,f.mode,g),v.return=f,v;case Bi:var y=v._init;return d(f,y(v._payload),g)}if(To(v)||lo(v))return v=Ir(v,f.mode,g,null),v.return=f,v;za(f,v)}return null}function h(f,v,g,y){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(f,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pa:return g.key===w?l(f,v,g,y):null;case hs:return g.key===w?u(f,v,g,y):null;case Bi:return w=g._init,h(f,v,w(g._payload),y)}if(To(g)||lo(g))return w!==null?null:c(f,v,g,y,null);za(f,g)}return null}function p(f,v,g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(v,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:return f=f.get(y.key===null?g:y.key)||null,l(v,f,y,w);case hs:return f=f.get(y.key===null?g:y.key)||null,u(v,f,y,w);case Bi:var A=y._init;return p(f,v,g,A(y._payload),w)}if(To(y)||lo(y))return f=f.get(g)||null,c(v,f,y,w,null);za(v,y)}return null}function x(f,v,g,y){for(var w=null,A=null,C=v,D=v=0,S=null;C!==null&&D<g.length;D++){C.index>D?(S=C,C=null):S=C.sibling;var E=h(f,C,g[D],y);if(E===null){C===null&&(C=S);break}t&&C&&E.alternate===null&&e(f,C),v=s(E,v,D),A===null?w=E:A.sibling=E,A=E,C=S}if(D===g.length)return n(f,C),at&&Sr(f,D),w;if(C===null){for(;D<g.length;D++)C=d(f,g[D],y),C!==null&&(v=s(C,v,D),A===null?w=C:A.sibling=C,A=C);return at&&Sr(f,D),w}for(C=i(f,C);D<g.length;D++)S=p(C,f,D,g[D],y),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?D:S.key),v=s(S,v,D),A===null?w=S:A.sibling=S,A=S);return t&&C.forEach(function(W){return e(f,W)}),at&&Sr(f,D),w}function _(f,v,g,y){var w=lo(g);if(typeof w!="function")throw Error(ne(150));if(g=w.call(g),g==null)throw Error(ne(151));for(var A=w=null,C=v,D=v=0,S=null,E=g.next();C!==null&&!E.done;D++,E=g.next()){C.index>D?(S=C,C=null):S=C.sibling;var W=h(f,C,E.value,y);if(W===null){C===null&&(C=S);break}t&&C&&W.alternate===null&&e(f,C),v=s(W,v,D),A===null?w=W:A.sibling=W,A=W,C=S}if(E.done)return n(f,C),at&&Sr(f,D),w;if(C===null){for(;!E.done;D++,E=g.next())E=d(f,E.value,y),E!==null&&(v=s(E,v,D),A===null?w=E:A.sibling=E,A=E);return at&&Sr(f,D),w}for(C=i(f,C);!E.done;D++,E=g.next())E=p(C,f,D,E.value,y),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?D:E.key),v=s(E,v,D),A===null?w=E:A.sibling=E,A=E);return t&&C.forEach(function(Z){return e(f,Z)}),at&&Sr(f,D),w}function m(f,v,g,y){if(typeof g=="object"&&g!==null&&g.type===ps&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Pa:e:{for(var w=g.key,A=v;A!==null;){if(A.key===w){if(w=g.type,w===ps){if(A.tag===7){n(f,A.sibling),v=r(A,g.props.children),v.return=f,f=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bi&&$p(w)===A.type){n(f,A.sibling),v=r(A,g.props),v.ref=po(f,A,g),v.return=f,f=v;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===ps?(v=Ir(g.props.children,f.mode,y,g.key),v.return=f,f=v):(y=bl(g.type,g.key,g.props,null,f.mode,y),y.ref=po(f,v,g),y.return=f,f=y)}return o(f);case hs:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=xc(g,f.mode,y),v.return=f,f=v}return o(f);case Bi:return A=g._init,m(f,v,A(g._payload),y)}if(To(g))return x(f,v,g,y);if(lo(g))return _(f,v,g,y);za(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=_c(g,f.mode,y),v.return=f,f=v),o(f)):n(f,v)}return m}var Gs=p_(!0),m_=p_(!1),Yl=fr(null),ql=null,Ms=null,Qd=null;function Jd(){Qd=Ms=ql=null}function eh(t){var e=Yl.current;st(Yl),t._currentValue=e}function Vf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){ql=t,Qd=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(ql===null)throw Error(ne(308));Ms=t,ql.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Pr=null;function th(t){Pr===null?Pr=[t]:Pr.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,th(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,th(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}function Kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(h=e,p=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ht({},d,h);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=d}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var _a={},ri=fr(_a),ta=fr(_a),na=fr(_a);function Lr(t){if(t===_a)throw Error(ne(174));return t}function ih(t,e){switch(nt(na,e),nt(ta,t),nt(ri,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yf(e,t)}st(ri),nt(ri,e)}function Ws(){st(ri),st(ta),st(na)}function __(t){Lr(na.current);var e=Lr(ri.current),n=yf(e,t.type);e!==n&&(nt(ta,t),nt(ri,n))}function rh(t){ta.current===t&&(st(ri),st(ta))}var ct=fr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function sh(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Tl=Li.ReactCurrentDispatcher,hc=Li.ReactCurrentBatchConfig,Hr=0,dt=null,Et=null,Pt=null,Zl=!1,Uo=!1,ia=0,EE=0;function Vt(){throw Error(ne(321))}function oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function ah(t,e,n,i,r,s){if(Hr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?CE:RE,t=n(i,r),Uo){s=0;do{if(Uo=!1,ia=0,25<=s)throw Error(ne(301));s+=1,Pt=Et=null,e.updateQueue=null,Tl.current=bE,t=n(i,r)}while(Uo)}if(Tl.current=Ql,e=Et!==null&&Et.next!==null,Hr=0,Pt=Et=dt=null,Zl=!1,e)throw Error(ne(300));return t}function lh(){var t=ia!==0;return ia=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Fn(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?dt.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(ne(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function ra(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,dt.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=dt,i=Fn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,uh(E_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,sa(9,M_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ne(349));Hr&30||S_(n,e,r)}return r}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M_(t,e,n,i){e.value=n,e.getSnapshot=i,T_(e)&&w_(t)}function E_(t,e,n){return n(function(){T_(e)&&w_(t)})}function T_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function w_(t){var e=Ci(t,1);e!==null&&Kn(e,t,1,-1)}function Qp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=AE.bind(null,dt,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return Fn().memoizedState}function wl(t,e,n,i){var r=ei();dt.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function Tu(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&oh(i,o.deps)){r.memoizedState=sa(e,n,s,i);return}}dt.flags|=t,r.memoizedState=sa(1|e,n,s,i)}function Jp(t,e){return wl(8390656,8,t,e)}function uh(t,e){return Tu(2048,8,t,e)}function C_(t,e){return Tu(4,2,t,e)}function R_(t,e){return Tu(4,4,t,e)}function b_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,4,b_.bind(null,e,t),n)}function ch(){}function L_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return Hr&21?(Zn(n,e)||(n=k0(),dt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function TE(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{Ke=n,hc.transition=i}}function I_(){return Fn().memoizedState}function wE(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),O_(n,e,i)}}function AE(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),O_(n,e,i))}}function U_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function F_(t,e){Uo=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}var Ql={readContext:Un,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},CE={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,b_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wE.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:Qp,useDebugValue:ch,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=Qp(!1),e=t[0];return t=TE.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=ei();if(at){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Lt===null)throw Error(ne(349));Hr&30||S_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jp(E_.bind(null,i,s,t),[t]),i.flags|=2048,sa(9,M_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Lt.identifierPrefix;if(at){var n=xi,i=_i;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RE={readContext:Un,useCallback:L_,useContext:Un,useEffect:uh,useImperativeHandle:P_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:D_,useReducer:pc,useRef:A_,useState:function(){return pc(ra)},useDebugValue:ch,useDeferredValue:function(t){var e=Fn();return N_(e,Et.memoizedState,t)},useTransition:function(){var t=pc(ra)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1},bE={readContext:Un,useCallback:L_,useContext:Un,useEffect:uh,useImperativeHandle:P_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:D_,useReducer:mc,useRef:A_,useState:function(){return mc(ra)},useDebugValue:ch,useDeferredValue:function(t){var e=Fn();return Et===null?e.memoizedState=t:N_(e,Et.memoizedState,t)},useTransition:function(){var t=mc(ra)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Ji(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Kn(e,t,r,i),El(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Ji(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Kn(e,t,r,i),El(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Ji(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Kn(e,t,i,n),El(e,t,i))}};function em(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,i)||!Zo(r,s):!0}function k_(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=un(e)?Vr:Yt.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=un(e)?Vr:Yt.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=iM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PE=typeof WeakMap=="function"?WeakMap:Map;function B_(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){eu||(eu=!0,Jf=i),Gf(t,e)},n}function V_(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new PE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=WE.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var LE=Li.ReactCurrentOwner,an=!1;function Qt(t,e,n,i){e.child=t===null?m_(e,null,n,i):Gs(e,t.child,n,i)}function sm(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=ah(t,e,n,i,s,r),n=lh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(at&&n&&$d(e),e.flags|=1,Qt(t,e,i,r),e.child)}function om(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_h(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z_(t,e,s,i,r)):(t=bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function z_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Zo(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Wf(t,e,n,i,r)}function H_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ts,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Ts,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Ts,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Ts,mn),mn|=i;return Qt(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,i,r){var s=un(n)?Vr:Yt.current;return s=zs(e,s),Fs(e,r),n=ah(t,e,n,i,s,r),i=lh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(at&&i&&$d(e),e.flags|=1,Qt(t,e,n,r),e.child)}function am(t,e,n,i,r){if(un(n)){var s=!0;Wl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Al(t,e),k_(e,n,i),Hf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=un(n)?Vr:Yt.current,u=zs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&tm(e,o,i,u),Vi=!1;var h=e.memoizedState;o.state=h,$l(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||Vi?(typeof c=="function"&&(zf(e,n,c,i),l=e.memoizedState),(a=Vi||em(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=un(n)?Vr:Yt.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&tm(e,o,i,l),Vi=!1,h=e.memoizedState,o.state=h,$l(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||ln.current||Vi?(typeof p=="function"&&(zf(e,n,p,i),x=e.memoizedState),(u=Vi||em(e,n,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return jf(t,e,n,i,s,r)}function jf(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xp(e,n,!1),Ri(t,e,s);i=e.stateNode,LE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&Xp(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jp(t,e.context,!1),ih(t,e.containerInfo)}function lm(t,e,n,i,r){return Hs(),Zd(r),e.flags|=256,Qt(t,e,n,i),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ct,r&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,i,0,null),t=Ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Xf,t):fh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return DE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fh(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,i){return i!==null&&Zd(i),Gs(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(ne(422))),Ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ru({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return Ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=gc(s,i,void 0),Ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Kn(i,t,r,-1))}return vh(),i=gc(Error(ne(421))),Ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=jE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Ki(r.nextSibling),vn=e,at=!0,Wn=null,t!==null&&(bn[Pn++]=_i,bn[Pn++]=xi,bn[Pn++]=zr,_i=t.id,xi=t.overflow,zr=e),e=fh(e,i.children),e.flags|=4096,e)}function um(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vf(t.return,e,n)}function vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function X_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,n,e);else if(t.tag===19)um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NE(t,e,n){switch(e.tag){case 3:W_(e),Hs();break;case 5:__(e);break;case 1:un(e.type)&&Wl(e);break;case 4:ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(nt(ct,ct.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);nt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return X_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return Ri(t,e,n)}var Y_,qf,q_,$_;Y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qf=function(){};q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ri.current);var s=null;switch(n){case"input":r=gf(t,r),i=gf(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=xf(t,r),i=xf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}Sf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function mo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function IE(t,e,n){var i=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return un(e.type)&&Gl(),zt(e),null;case 3:return i=e.stateNode,Ws(),st(ln),st(Yt),sh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(nd(Wn),Wn=null))),qf(t,e),zt(e),null;case 5:rh(e);var r=Lr(na.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=Lr(ri.current),Va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[ea]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)it(Ao[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":_p(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":yp(i,s),it("invalid",i)}Sf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":La(i),xp(i,s,!0);break;case"textarea":La(i),Sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[ea]=i,Y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)it(Ao[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":_p(t,i),r=gf(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),it("invalid",t);break;case"textarea":yp(t,i),r=xf(t,i),it("invalid",t);break;default:r=i}Sf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?A0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(t,l):typeof l=="number"&&jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Ud(t,s,l,o))}switch(n){case"input":La(t),xp(t,i,!1);break;case"textarea":La(t),Sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Lr(na.current),Lr(ri.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return zt(e),null;case 13:if(st(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&gn!==null&&e.mode&1&&!(e.flags&128))h_(),Hs(),e.flags|=98560,s=!1;else if(s=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ni]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Wn!==null&&(nd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Tt===0&&(Tt=3):vh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ws(),qf(t,e),t===null&&Qo(e.stateNode.containerInfo),zt(e),null;case 10:return eh(e.type._context),zt(e),null;case 17:return un(e.type)&&Gl(),zt(e),null;case 19:if(st(ct),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Xs&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return zt(e),null}else 2*yt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ct.current,nt(ct,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function UE(t,e){switch(Kd(e),e.tag){case 1:return un(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),st(ln),st(Yt),sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rh(e),null;case 13:if(st(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ct),null;case 4:return Ws(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var Ga=!1,jt=!1,FE=typeof WeakSet=="function"?WeakSet:Set,he=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function $f(t,e,n){try{n()}catch(i){vt(t,e,i)}}var cm=!1;function OE(t,e){if(Df=Bl,t=e_(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Bl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Hn(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return x=cm,cm=!1,x}function Fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$f(e,n,s)}r=r.next}while(r!==i)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[ea],delete e[Ff],delete e[xE],delete e[yE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}var Dt=null,Gn=!1;function Di(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:jt||Es(n,e);case 6:var i=Dt,r=Gn;Dt=null,Di(t,e,n),Dt=i,Gn=r,Dt!==null&&(Gn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Gn?(t=Dt,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),$o(t)):cc(Dt,n.stateNode));break;case 4:i=Dt,r=Gn,Dt=n.stateNode.containerInfo,Gn=!0,Di(t,e,n),Dt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!jt&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Di(t,e,n),jt=i):Di(t,e,n);break;default:Di(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FE),e.forEach(function(i){var r=XE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Gn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Dt===null)throw Error(ne(160));Q_(s,o,r),Dt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{Fo(3,t,t.return),Au(3,t)}catch(_){vt(t,t.return,_)}try{Fo(5,t,t.return)}catch(_){vt(t,t.return,_)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{jo(r,"")}catch(_){vt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(r,s),Mf(a,o);var u=Mf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?A0(r,d):c==="dangerouslySetInnerHTML"?T0(r,d):c==="children"?jo(r,d):Ud(r,c,d,u)}switch(a){case"input":vf(r,s);break;case"textarea":M0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(_){vt(t,t.return,_)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){vt(t,t.return,_)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(_){vt(t,t.return,_)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ph=yt())),i&4&&dm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,On(e,t),jt=u):On(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(he=t,c=t.child;c!==null;){for(d=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:Fo(4,h,h.return);break;case 1:Es(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){vt(i,n,_)}}break;case 5:Es(h,h.return);break;case 22:if(h.memoizedState!==null){pm(d);continue}}p!==null?(p.return=h,he=p):pm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=w0("display",o))}catch(_){vt(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){vt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Jn(t),i&4&&dm(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var s=fm(t);Qf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=fm(t);Zf(t,a,o);break;default:throw Error(ne(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kE(t,e,n){he=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=Ga;var u=jt;if(Ga=o,(jt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?mm(r):l!==null?(l.return=o,he=l):mm(r);for(;s!==null;)he=s,ex(s),s=s.sibling;he=r,Ga=a,jt=u}hm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):hm(t)}}function hm(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}jt||e.flags&512&&Kf(e)}catch(h){vt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function pm(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function mm(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Kf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var BE=Math.ceil,Jl=Li.ReactCurrentDispatcher,dh=Li.ReactCurrentOwner,In=Li.ReactCurrentBatchConfig,Xe=0,Lt=null,Mt=null,Ft=0,mn=0,Ts=fr(0),Tt=0,oa=null,Gr=0,Cu=0,hh=0,Oo=null,sn=null,ph=0,Xs=1/0,mi=null,eu=!1,Jf=null,Qi=null,Wa=!1,Wi=null,tu=0,ko=0,ed=null,Cl=-1,Rl=0;function en(){return Xe&6?yt():Cl!==-1?Cl:Cl=yt()}function Ji(t){return t.mode&1?Xe&2&&Ft!==0?Ft&-Ft:ME.transition!==null?(Rl===0&&(Rl=k0()),Rl):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:j0(t.type)),t):1}function Kn(t,e,n,i){if(50<ko)throw ko=0,ed=null,Error(ne(185));ma(t,n,i),(!(Xe&2)||t!==Lt)&&(t===Lt&&(!(Xe&2)&&(Cu|=n),Tt===4&&Hi(t,Ft)),cn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Xs=yt()+500,Eu&&dr()))}function cn(t,e){var n=t.callbackNode;MM(t,e);var i=kl(t,t===Lt?Ft:0);if(i===0)n!==null&&Tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tp(n),e===1)t.tag===0?SE(gm.bind(null,t)):c_(gm.bind(null,t)),vE(function(){!(Xe&6)&&dr()}),n=null;else{switch(B0(i)){case 1:n=Vd;break;case 4:n=F0;break;case 16:n=Ol;break;case 536870912:n=O0;break;default:n=Ol}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Cl=-1,Rl=0,Xe&6)throw Error(ne(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=kl(t,t===Lt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nu(t,i);else{e=i;var r=Xe;Xe|=2;var s=ix();(Lt!==t||Ft!==e)&&(mi=null,Xs=yt()+500,Nr(t,e));do try{HE();break}catch(a){nx(t,a)}while(!0);Jd(),Jl.current=s,Xe=r,Mt!==null?e=0:(Lt=null,Ft=0,e=Tt)}if(e!==0){if(e===2&&(r=Cf(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=oa,Nr(t,0),Hi(t,i),cn(t,yt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!VE(r)&&(e=nu(t,i),e===2&&(s=Cf(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=oa,Nr(t,0),Hi(t,i),cn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Mr(t,sn,mi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=ph+500-yt(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uf(Mr.bind(null,t,sn,mi),e);break}Mr(t,sn,mi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*BE(i/1960))-i,10<i){t.timeoutHandle=Uf(Mr.bind(null,t,sn,mi),i);break}Mr(t,sn,mi);break;case 5:Mr(t,sn,mi);break;default:throw Error(ne(329))}}}return cn(t,yt()),t.callbackNode===n?tx.bind(null,t):null}function td(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=nu(t,e),t!==2&&(e=sn,sn=n,e!==null&&nd(e)),t}function nd(t){sn===null?sn=t:sn.push.apply(sn,t)}function VE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~hh,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function gm(t){if(Xe&6)throw Error(ne(327));Os();var e=kl(t,0);if(!(e&1))return cn(t,yt()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var i=Cf(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=oa,Nr(t,0),Hi(t,e),cn(t,yt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,sn,mi),cn(t,yt()),null}function mh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Xs=yt()+500,Eu&&dr())}}function Wr(t){Wi!==null&&Wi.tag===0&&!(Xe&6)&&Os();var e=Xe;Xe|=1;var n=In.transition,i=Ke;try{if(In.transition=null,Ke=1,t)return t()}finally{Ke=i,In.transition=n,Xe=e,!(Xe&6)&&dr()}}function gh(){mn=Ts.current,st(Ts)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gE(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:Ws(),st(ln),st(Yt),sh();break;case 5:rh(i);break;case 4:Ws();break;case 13:st(ct);break;case 19:st(ct);break;case 10:eh(i.type._context);break;case 22:case 23:gh()}n=n.return}if(Lt=t,Mt=t=er(t.current,null),Ft=mn=e,Tt=0,oa=null,hh=Cu=Gr=0,sn=Oo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function nx(t,e){do{var n=Mt;try{if(Jd(),Tl.current=Ql,Zl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if(Hr=0,Pt=Et=dt=null,Uo=!1,ia=0,dh.current=null,n===null||n.return===null){Tt=1,oa=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=im(o);if(p!==null){p.flags&=-257,rm(p,o,a,s,e),p.mode&1&&nm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){nm(s,u,e),vh();break e}l=Error(ne(426))}}else if(at&&a.mode&1){var m=im(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),rm(m,o,a,s,e),Zd(js(l,a));break e}}s=l=js(l,a),Tt!==4&&(Tt=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=B_(s,l,e);Kp(s,f);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qi===null||!Qi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=V_(s,a,e);Kp(s,y);break e}}s=s.return}while(s!==null)}sx(n)}catch(w){e=w,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function ix(){var t=Jl.current;return Jl.current=Ql,t===null?Ql:t}function vh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!(Gr&268435455)&&!(Cu&268435455)||Hi(Lt,Ft)}function nu(t,e){var n=Xe;Xe|=2;var i=ix();(Lt!==t||Ft!==e)&&(mi=null,Nr(t,e));do try{zE();break}catch(r){nx(t,r)}while(!0);if(Jd(),Xe=n,Jl.current=i,Mt!==null)throw Error(ne(261));return Lt=null,Ft=0,Tt}function zE(){for(;Mt!==null;)rx(Mt)}function HE(){for(;Mt!==null&&!hM();)rx(Mt)}function rx(t){var e=ax(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?sx(t):Mt=e,dh.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UE(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Mt=null;return}}else if(n=IE(n,e,mn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function Mr(t,e,n){var i=Ke,r=In.transition;try{In.transition=null,Ke=1,GE(t,e,n,i)}finally{In.transition=r,Ke=i}return null}function GE(t,e,n,i){do Os();while(Wi!==null);if(Xe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(EM(t,s),t===Lt&&(Mt=Lt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,lx(Ol,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=Ke;Ke=1;var a=Xe;Xe|=4,dh.current=null,OE(t,n),J_(n,t),uE(Nf),Bl=!!Df,Nf=Df=null,t.current=n,kE(n),pM(),Xe=a,Ke=o,In.transition=s}else t.current=n;if(Wa&&(Wa=!1,Wi=t,tu=r),s=t.pendingLanes,s===0&&(Qi=null),vM(n.stateNode),cn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(eu)throw eu=!1,t=Jf,Jf=null,t;return tu&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===ed?ko++:(ko=0,ed=t):ko=0,dr(),null}function Os(){if(Wi!==null){var t=B0(tu),e=In.transition,n=Ke;try{if(In.transition=null,Ke=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,tu=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Fo(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(K_(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Au(9,a)}}catch(w){vt(a,a.return,w)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(Xe=r,dr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{Ke=n,In.transition=e}}return!1}function vm(t,e,n){e=js(n,e),e=B_(t,e,1),t=Zi(t,e,1),e=en(),t!==null&&(ma(t,1,e),cn(t,e))}function vt(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=js(n,t),t=V_(e,t,1),e=Zi(e,t,1),t=en(),e!==null&&(ma(e,1,t),cn(e,t));break}}e=e.return}}function WE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ft&n)===n&&(Tt===4||Tt===3&&(Ft&130023424)===Ft&&500>yt()-ph?Nr(t,0):hh|=n),cn(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=en();t=Ci(t,e),t!==null&&(ma(t,e,n),cn(t,n))}function jE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function XE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),ox(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,NE(t,e,n);an=!!(t.flags&131072)}else an=!1,at&&e.flags&1048576&&f_(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Al(t,e),t=e.pendingProps;var r=zs(e,Yt.current);Fs(e,n),r=ah(null,e,i,t,r,n);var s=lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nh(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Hf(e,i,t,n),e=jf(null,e,i,!0,s,n)):(e.tag=0,at&&s&&$d(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qE(i),t=Hn(i,t),r){case 0:e=Wf(null,e,i,t,n);break e;case 1:e=am(null,e,i,t,n);break e;case 11:e=sm(null,e,i,t,n);break e;case 14:e=om(null,e,i,Hn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Wf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),am(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ne(423)),e),e=lm(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ne(424)),e),e=lm(t,e,i,n,r);break e}else for(gn=Ki(e.stateNode.containerInfo.firstChild),vn=e,at=!0,Wn=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Ri(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&Bf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,If(i,r)?o=null:s!==null&&If(i,s)&&(e.flags|=32),G_(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return j_(t,e,n);case 4:return ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),sm(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Yl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!ln.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=Un(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),om(t,e,i,r,n);case 15:return z_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Al(t,e),e.tag=1,un(i)?(t=!0,Wl(e)):t=!1,Fs(e,n),k_(e,i,r),Hf(e,i,r,n),jf(null,e,i,!0,t,n);case 19:return X_(t,e,n);case 22:return H_(t,e,n)}throw Error(ne(156,e.tag))};function lx(t,e){return U0(t,e)}function YE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new YE(t,e,n,i)}function _h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qE(t){if(typeof t=="function")return _h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Od)return 11;if(t===kd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_h(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Ir(n.children,r,s,e);case Fd:o=8,r|=8;break;case df:return t=Nn(12,n,e,r|2),t.elementType=df,t.lanes=s,t;case hf:return t=Nn(13,n,e,r),t.elementType=hf,t.lanes=s,t;case pf:return t=Nn(19,n,e,r),t.elementType=pf,t.lanes=s,t;case _0:return Ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g0:o=10;break e;case v0:o=9;break e;case Od:o=11;break e;case kd:o=14;break e;case Bi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ir(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Ru(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,i,r,s,o,a,l){return t=new $E(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(s),t}function KE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ux(t){if(!t)return sr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(un(n))return u_(t,n,e)}return e}function cx(t,e,n,i,r,s,o,a,l){return t=xh(n,i,!0,t,r,s,o,a,l),t.context=ux(null),n=t.current,i=en(),r=Ji(n),s=Mi(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,ma(t,r,i),cn(t,i),t}function bu(t,e,n,i){var r=e.current,s=en(),o=Ji(r);return n=ux(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(Kn(t,r,o,s),El(t,r,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yh(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function ZE(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sh(t){this._internalRoot=t}Pu.prototype.render=Sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));bu(t,e,null,null)};Pu.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){bu(null,t,null,null)}),e[Ai]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=H0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&W0(t)}};function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function QE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=iu(o);s.call(u)}}var o=cx(e,i,t,0,null,!1,!1,"",xm);return t._reactRootContainer=o,t[Ai]=o.current,Qo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=iu(l);a.call(u)}}var l=xh(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=l,t[Ai]=l.current,Qo(t.nodeType===8?t.parentNode:t),Wr(function(){bu(e,l,n,i)}),l}function Du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=iu(o);a.call(l)}}bu(e,o,t,r)}else o=QE(n,e,t,r,i);return iu(o)}V0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(zd(e,n|1),cn(e,yt()),!(Xe&6)&&(Xs=yt()+500,dr()))}break;case 13:Wr(function(){var i=Ci(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),yh(t,1)}};Hd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}yh(t,134217728)}};z0=function(t){if(t.tag===13){var e=Ji(t),n=Ci(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}yh(t,e)}};H0=function(){return Ke};G0=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Tf=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Mu(i);if(!r)throw Error(ne(90));y0(i),vf(i,r)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};b0=mh;P0=Wr;var JE={usingClientEntryPoint:!1,Events:[va,_s,Mu,C0,R0,mh]},go={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eT={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N0(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||ZE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{_u=ja.inject(eT),ii=ja}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(ne(200));return KE(t,e,null,n)};En.createRoot=function(t,e){if(!Mh(t))throw Error(ne(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Sh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=N0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Wr(t)};En.hydrate=function(t,e,n){if(!Lu(e))throw Error(ne(200));return Du(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Mh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cx(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,Qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pu(e)};En.render=function(t,e,n){if(!Lu(e))throw Error(ne(200));return Du(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(ne(40));return t._reactRootContainer?(Wr(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};En.unstable_batchedUpdates=mh;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Lu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Du(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dx)}catch(t){console.error(t)}}dx(),d0.exports=En;var tT=d0.exports,hx,ym=tT;hx=ym.createRoot,ym.hydrateRoot;const px=pe.createContext({});function nT(t){const e=pe.useRef(null);return e.current===null&&(e.current=t()),e.current}const Eh=pe.createContext(null),mx=pe.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function iT(t=!0){const e=pe.useContext(Eh);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=pe.useId();pe.useEffect(()=>{t&&r(s)},[t]);const o=pe.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Th=typeof window<"u",rT=Th?pe.useLayoutEffect:pe.useEffect,_n=t=>t;let gx=_n;function wh(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ys=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ei=t=>t*1e3,Ti=t=>t/1e3,sT={useManualTiming:!1};function oT(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const p=d&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const Xa=["read","resolveKeyframes","update","preRender","render","postRender"],aT=40;function vx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Xa.reduce((f,v)=>(f[v]=oT(s),f),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:h}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,aT),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},x=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Xa.reduce((f,v)=>{const g=o[v];return f[v]=(y,w=!1,A=!1)=>(n||x(),g.schedule(y,w,A)),f},{}),cancel:f=>{for(let v=0;v<Xa.length;v++)o[Xa[v]].cancel(f)},state:r,steps:o}}const{schedule:ot,cancel:or,state:Nt,steps:yc}=vx(typeof requestAnimationFrame<"u"?requestAnimationFrame:_n,!0),_x=pe.createContext({strict:!1}),Sm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qs={};for(const t in Sm)qs[t]={isEnabled:e=>Sm[t].some(n=>!!e[n])};function lT(t){for(const e in t)qs[e]={...qs[e],...t[e]}}const uT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ru(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||uT.has(t)}let xx=t=>!ru(t);function cT(t){t&&(xx=e=>e.startsWith("on")?!ru(e):t(e))}try{cT(require("@emotion/is-prop-valid").default)}catch{}function fT(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(xx(r)||n===!0&&ru(r)||!e&&!ru(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function dT(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Nu=pe.createContext({});function aa(t){return typeof t=="string"||Array.isArray(t)}function Iu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ah=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ch=["initial",...Ah];function Uu(t){return Iu(t.animate)||Ch.some(e=>aa(t[e]))}function yx(t){return!!(Uu(t)||t.variants)}function hT(t,e){if(Uu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||aa(n)?n:void 0,animate:aa(i)?i:void 0}}return t.inherit!==!1?e:{}}function pT(t){const{initial:e,animate:n}=hT(t,pe.useContext(Nu));return pe.useMemo(()=>({initial:e,animate:n}),[Mm(e),Mm(n)])}function Mm(t){return Array.isArray(t)?t.join(" "):t}const mT=Symbol.for("motionComponentSymbol");function ws(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function gT(t,e,n){return pe.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):ws(n)&&(n.current=i))},[e])}const Rh=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vT="framerAppearId",Sx="data-"+Rh(vT),{schedule:bh}=vx(queueMicrotask,!1),Mx=pe.createContext({});function _T(t,e,n,i,r){var s,o;const{visualElement:a}=pe.useContext(Nu),l=pe.useContext(_x),u=pe.useContext(Eh),c=pe.useContext(mx).reducedMotion,d=pe.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const h=d.current,p=pe.useContext(Mx);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&xT(d.current,n,r,p);const x=pe.useRef(!1);pe.useInsertionEffect(()=>{h&&x.current&&h.update(n,u)});const _=n[Sx],m=pe.useRef(!!_&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return rT(()=>{h&&(x.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),bh.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),pe.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,_)}),m.current=!1))}),h}function xT(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Ex(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&ws(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function Ex(t){if(t)return t.options.allowProjection!==!1?t.projection:Ex(t.parent)}function yT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&lT(t);function a(u,c){let d;const h={...pe.useContext(mx),...u,layoutId:ST(u)},{isStatic:p}=h,x=pT(u),_=i(u,p);if(!p&&Th){MT();const m=ET(h);d=m.MeasureLayout,x.visualElement=_T(r,_,h,e,m.ProjectionNode)}return b.jsxs(Nu.Provider,{value:x,children:[d&&x.visualElement?b.jsx(d,{visualElement:x.visualElement,...h}):null,n(r,u,gT(_,x.visualElement,c),_,p,x.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=pe.forwardRef(a);return l[mT]=r,l}function ST({layoutId:t}){const e=pe.useContext(px).id;return e&&t!==void 0?e+"-"+t:t}function MT(t,e){pe.useContext(_x).strict}function ET(t){const{drag:e,layout:n}=qs;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const TT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ph(t){return typeof t!="string"||t.includes("-")?!1:!!(TT.indexOf(t)>-1||/[A-Z]/u.test(t))}function Em(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Lh(t,e,n,i){if(typeof e=="function"){const[r,s]=Em(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Em(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const id=t=>Array.isArray(t),wT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),AT=t=>id(t)?t[t.length-1]||0:t,Xt=t=>!!(t&&t.getVelocity);function Pl(t){const e=Xt(t)?t.get():t;return wT(e)?e.toValue():e}function CT({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:RT(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Tx=t=>(e,n)=>{const i=pe.useContext(Nu),r=pe.useContext(Eh),s=()=>CT(t,e,i,r);return n?s():nT(s)};function RT(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=Pl(s[h]);let{initial:o,animate:a}=t;const l=Uu(t),u=yx(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Iu(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const x=Lh(t,h[p]);if(x){const{transitionEnd:_,transition:m,...f}=x;for(const v in f){let g=f[v];if(Array.isArray(g)){const y=c?g.length-1:0;g=g[y]}g!==null&&(r[v]=g)}for(const v in _)r[v]=_[v]}}}return r}const io=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qr=new Set(io),wx=t=>e=>typeof e=="string"&&e.startsWith(t),Ax=wx("--"),bT=wx("var(--"),Dh=t=>bT(t)?PT.test(t.split("/*")[0].trim()):!1,PT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Cx=(t,e)=>e&&typeof t=="number"?e.transform(t):t,bi=(t,e,n)=>n>e?e:n<t?t:n,ro={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},la={...ro,transform:t=>bi(0,1,t)},Ya={...ro,default:1},xa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ki=xa("deg"),si=xa("%"),Te=xa("px"),LT=xa("vh"),DT=xa("vw"),Tm={...si,parse:t=>si.parse(t)/100,transform:t=>si.transform(t*100)},NT={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,radius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,backgroundPositionX:Te,backgroundPositionY:Te},IT={rotate:ki,rotateX:ki,rotateY:ki,rotateZ:ki,scale:Ya,scaleX:Ya,scaleY:Ya,scaleZ:Ya,skew:ki,skewX:ki,skewY:ki,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:la,originX:Tm,originY:Tm,originZ:Te},wm={...ro,transform:Math.round},Nh={...NT,...IT,zIndex:wm,size:Te,fillOpacity:la,strokeOpacity:la,numOctaves:wm},UT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FT=io.length;function OT(t,e,n){let i="",r=!0;for(let s=0;s<FT;s++){const o=io[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=Cx(a,Nh[o]);if(!l){r=!1;const c=UT[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Ih(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(qr.has(l)){o=!0;continue}else if(Ax(l)){r[l]=u;continue}else{const c=Cx(u,Nh[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=OT(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const kT={offset:"stroke-dashoffset",array:"stroke-dasharray"},BT={offset:"strokeDashoffset",array:"strokeDasharray"};function VT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?kT:BT;t[s.offset]=Te.transform(-i);const o=Te.transform(e),a=Te.transform(n);t[s.array]=`${o} ${a}`}function Am(t,e,n){return typeof t=="string"?t:Te.transform(e+n*t)}function zT(t,e,n){const i=Am(e,t.x,t.width),r=Am(n,t.y,t.height);return`${i} ${r}`}function Uh(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(Ih(t,u,d),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:x}=t;h.transform&&(x&&(p.transform=h.transform),delete h.transform),x&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=zT(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&VT(h,o,a,l,!1)}const Fh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Rx=()=>({...Fh(),attrs:{}}),Oh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function bx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Px=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Lx(t,e,n,i){bx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Px.has(r)?r:Rh(r),e.attrs[r])}const su={};function HT(t){Object.assign(su,t)}function Dx(t,{layout:e,layoutId:n}){return qr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!su[t]||t==="opacity")}function kh(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Xt(r[o])||e.style&&Xt(e.style[o])||Dx(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Nx(t,e,n){const i=kh(t,e,n);for(const r in t)if(Xt(t[r])||Xt(e[r])){const s=io.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function GT(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Cm=["x","y","width","height","cx","cy","r"],WT={useVisualState:Tx({scrapeMotionValuesFromProps:Nx,createRenderState:Rx,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(qr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Cm.length;a++){const l=Cm[a];t[l]!==e[l]&&(o=!0)}o&&ot.read(()=>{GT(n,i),ot.render(()=>{Uh(i,r,Oh(n.tagName),t.transformTemplate),Lx(n,i)})})}})},jT={useVisualState:Tx({scrapeMotionValuesFromProps:kh,createRenderState:Fh})};function Ix(t,e,n){for(const i in e)!Xt(e[i])&&!Dx(i,n)&&(t[i]=e[i])}function XT({transformTemplate:t},e){return pe.useMemo(()=>{const n=Fh();return Ih(n,e,t),Object.assign({},n.vars,n.style)},[e])}function YT(t,e){const n=t.style||{},i={};return Ix(i,n,t),Object.assign(i,XT(t,e)),i}function qT(t,e){const n={},i=YT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function $T(t,e,n,i){const r=pe.useMemo(()=>{const s=Rx();return Uh(s,e,Oh(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Ix(s,t.style,t),r.style={...s,...r.style}}return r}function KT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Ph(n)?$T:qT)(i,s,o,n),u=fT(i,typeof n=="string",t),c=n!==pe.Fragment?{...u,...l,ref:r}:{},{children:d}=i,h=pe.useMemo(()=>Xt(d)?d.get():d,[d]);return pe.createElement(n,{...c,children:h})}}function ZT(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Ph(i)?WT:jT,preloadedFeatures:t,useRender:KT(r),createVisualElement:e,Component:i};return yT(o)}}function Ux(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Fu(t,e,n){const i=t.getProps();return Lh(i,e,n!==void 0?n:i.custom,t)}const QT=wh(()=>window.ScrollTimeline!==void 0);class JT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(QT()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ew extends JT{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Bh(t,e){return t?t[e]||t.default||t:void 0}const rd=2e4;function Fx(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<rd;)e+=n,i=t.next(e);return e>=rd?1/0:e}function Vh(t){return typeof t=="function"}function Rm(t,e){t.timeline=e,t.onfinish=null}const zh=t=>Array.isArray(t)&&typeof t[0]=="number",tw={linearEasing:void 0};function nw(t,e){const n=wh(t);return()=>{var i;return(i=tw[e])!==null&&i!==void 0?i:n()}}const ou=nw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ox=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Ys(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function kx(t){return!!(typeof t=="function"&&ou()||!t||typeof t=="string"&&(t in sd||ou())||zh(t)||Array.isArray(t)&&t.every(kx))}const Co=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,sd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Co([0,.65,.55,1]),circOut:Co([.55,0,1,.45]),backIn:Co([.31,.01,.66,-.59]),backOut:Co([.33,1.53,.69,.99])};function Bx(t,e){if(t)return typeof t=="function"&&ou()?Ox(t,e):zh(t)?Co(t):Array.isArray(t)?t.map(n=>Bx(n,e)||sd.easeOut):sd[t]}const zn={x:!1,y:!1};function Vx(){return zn.x||zn.y}function iw(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function zx(t,e){const n=iw(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function bm(t){return e=>{e.pointerType==="touch"||Vx()||t(e)}}function rw(t,e,n={}){const[i,r,s]=zx(t,n),o=bm(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=bm(d=>{u(d),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Hx=(t,e)=>e?t===e?!0:Hx(t,e.parentElement):!1,Hh=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,sw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ow(t){return sw.has(t.tagName)||t.tabIndex!==-1}const Ro=new WeakSet;function Pm(t){return e=>{e.key==="Enter"&&t(e)}}function Sc(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const aw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Pm(()=>{if(Ro.has(n))return;Sc(n,"down");const r=Pm(()=>{Sc(n,"up")}),s=()=>Sc(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Lm(t){return Hh(t)&&!Vx()}function lw(t,e,n={}){const[i,r,s]=zx(t,n),o=a=>{const l=a.currentTarget;if(!Lm(a)||Ro.has(l))return;Ro.add(l);const u=e(a),c=(p,x)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),!(!Lm(p)||!Ro.has(l))&&(Ro.delete(l),typeof u=="function"&&u(p,{success:x}))},d=p=>{c(p,n.useGlobalTarget||Hx(l,p.target))},h=p=>{c(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!ow(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>aw(u,r),r)}),s}function uw(t){return t==="x"||t==="y"?zn[t]?null:(zn[t]=!0,()=>{zn[t]=!1}):zn.x||zn.y?null:(zn.x=zn.y=!0,()=>{zn.x=zn.y=!1})}const Gx=new Set(["width","height","top","left","right","bottom",...io]);let Ll;function cw(){Ll=void 0}const oi={now:()=>(Ll===void 0&&oi.set(Nt.isProcessing||sT.useManualTiming?Nt.timestamp:performance.now()),Ll),set:t=>{Ll=t,queueMicrotask(cw)}};function Gh(t,e){t.indexOf(e)===-1&&t.push(e)}function Wh(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class jh{constructor(){this.subscriptions=[]}add(e){return Gh(this.subscriptions,e),()=>Wh(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Wx(t,e){return e?t*(1e3/e):0}const Dm=30,fw=t=>!isNaN(parseFloat(t));class dw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=oi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=oi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new jh);const i=this.events[e].add(n);return e==="change"?()=>{i(),ot.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=oi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Dm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Dm);return Wx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ua(t,e){return new dw(t,e)}function hw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ua(n))}function pw(t,e){const n=Fu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=AT(s[o]);hw(t,o,a)}}function mw(t){return!!(Xt(t)&&t.add)}function od(t,e){const n=t.getValue("willChange");if(mw(n))return n.add(e)}function jx(t){return t.props[Sx]}const Xx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,gw=1e-7,vw=12;function _w(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Xx(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>gw&&++a<vw);return o}function ya(t,e,n,i){if(t===e&&n===i)return _n;const r=s=>_w(s,0,1,t,n);return s=>s===0||s===1?s:Xx(r(s),e,i)}const Yx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,qx=t=>e=>1-t(1-e),$x=ya(.33,1.53,.69,.99),Xh=qx($x),Kx=Yx(Xh),Zx=t=>(t*=2)<1?.5*Xh(t):.5*(2-Math.pow(2,-10*(t-1))),Yh=t=>1-Math.sin(Math.acos(t)),Qx=qx(Yh),Jx=Yx(Yh),ey=t=>/^0[^.\s]+$/u.test(t);function xw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ey(t):!0}const Bo=t=>Math.round(t*1e5)/1e5,qh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yw(t){return t==null}const Sw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$h=(t,e)=>n=>!!(typeof n=="string"&&Sw.test(n)&&n.startsWith(t)||e&&!yw(n)&&Object.prototype.hasOwnProperty.call(n,e)),ty=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(qh);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Mw=t=>bi(0,255,t),Mc={...ro,transform:t=>Math.round(Mw(t))},Dr={test:$h("rgb","red"),parse:ty("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Mc.transform(t)+", "+Mc.transform(e)+", "+Mc.transform(n)+", "+Bo(la.transform(i))+")"};function Ew(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ad={test:$h("#"),parse:Ew,transform:Dr.transform},As={test:$h("hsl","hue"),parse:ty("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+si.transform(Bo(e))+", "+si.transform(Bo(n))+", "+Bo(la.transform(i))+")"},Wt={test:t=>Dr.test(t)||ad.test(t)||As.test(t),parse:t=>Dr.test(t)?Dr.parse(t):As.test(t)?As.parse(t):ad.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Dr.transform(t):As.transform(t)},Tw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ww(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(qh))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Tw))===null||n===void 0?void 0:n.length)||0)>0}const ny="number",iy="color",Aw="var",Cw="var(",Nm="${}",Rw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ca(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Rw,l=>(Wt.test(l)?(i.color.push(s),r.push(iy),n.push(Wt.parse(l))):l.startsWith(Cw)?(i.var.push(s),r.push(Aw),n.push(l)):(i.number.push(s),r.push(ny),n.push(parseFloat(l))),++s,Nm)).split(Nm);return{values:n,split:a,indexes:i,types:r}}function ry(t){return ca(t).values}function sy(t){const{split:e,types:n}=ca(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===ny?s+=Bo(r[o]):a===iy?s+=Wt.transform(r[o]):s+=r[o]}return s}}const bw=t=>typeof t=="number"?0:t;function Pw(t){const e=ry(t);return sy(t)(e.map(bw))}const ar={test:ww,parse:ry,createTransformer:sy,getAnimatableNone:Pw},Lw=new Set(["brightness","contrast","saturate","opacity"]);function Dw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(qh)||[];if(!i)return t;const r=n.replace(i,"");let s=Lw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Nw=/\b([a-z-]*)\(.*?\)/gu,ld={...ar,getAnimatableNone:t=>{const e=t.match(Nw);return e?e.map(Dw).join(" "):t}},Iw={...Nh,color:Wt,backgroundColor:Wt,outlineColor:Wt,fill:Wt,stroke:Wt,borderColor:Wt,borderTopColor:Wt,borderRightColor:Wt,borderBottomColor:Wt,borderLeftColor:Wt,filter:ld,WebkitFilter:ld},Kh=t=>Iw[t];function oy(t,e){let n=Kh(t);return n!==ld&&(n=ar),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Uw=new Set(["auto","none","0"]);function Fw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Uw.has(s)&&ca(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=oy(n,r)}const Im=t=>t===ro||t===Te,Um=(t,e)=>parseFloat(t.split(", ")[e]),Fm=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Um(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Um(s[1],t):0}},Ow=new Set(["x","y","z"]),kw=io.filter(t=>!Ow.has(t));function Bw(t){const e=[];return kw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const $s={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Fm(4,13),y:Fm(5,14)};$s.translateX=$s.x;$s.translateY=$s.y;const Ur=new Set;let ud=!1,cd=!1;function ay(){if(cd){const t=Array.from(Ur).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Bw(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}cd=!1,ud=!1,Ur.forEach(t=>t.complete()),Ur.clear()}function ly(){Ur.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(cd=!0)})}function Vw(){ly(),ay()}class Zh{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ur.add(this),ud||(ud=!0,ot.read(ly),ot.resolveKeyframes(ay))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ur.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ur.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const uy=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),zw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hw(t){const e=zw.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function cy(t,e,n=1){const[i,r]=Hw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return uy(o)?parseFloat(o):o}return Dh(r)?cy(r,e,n+1):r}const fy=t=>e=>e.test(t),Gw={test:t=>t==="auto",parse:t=>t},dy=[ro,Te,si,ki,DT,LT,Gw],Om=t=>dy.find(fy(t));class hy extends Zh{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Dh(u))){const c=cy(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Gx.has(i)||e.length!==2)return;const[r,s]=e,o=Om(r),a=Om(s);if(o!==a)if(Im(o)&&Im(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)xw(e[r])&&i.push(r);i.length&&Fw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$s[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=$s[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const km=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ar.test(t)||t==="0")&&!t.startsWith("url("));function Ww(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function jw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=km(r,e),a=km(s,e);return!o||!a?!1:Ww(t)||(n==="spring"||Vh(n))&&i}const Xw=t=>t!==null;function Ou(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Xw),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Yw=40;class py{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=oi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Yw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Vw(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=oi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!jw(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Ou(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ft=(t,e,n)=>t+(e-t)*n;function Ec(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function qw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Ec(l,a,t+1/3),s=Ec(l,a,t),o=Ec(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function au(t,e){return n=>n>0?e:t}const Tc=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},$w=[ad,Dr,As],Kw=t=>$w.find(e=>e.test(t));function Bm(t){const e=Kw(t);if(!e)return!1;let n=e.parse(t);return e===As&&(n=qw(n)),n}const Vm=(t,e)=>{const n=Bm(t),i=Bm(e);if(!n||!i)return au(t,e);const r={...n};return s=>(r.red=Tc(n.red,i.red,s),r.green=Tc(n.green,i.green,s),r.blue=Tc(n.blue,i.blue,s),r.alpha=ft(n.alpha,i.alpha,s),Dr.transform(r))},Zw=(t,e)=>n=>e(t(n)),Sa=(...t)=>t.reduce(Zw),fd=new Set(["none","hidden"]);function Qw(t,e){return fd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Jw(t,e){return n=>ft(t,e,n)}function Qh(t){return typeof t=="number"?Jw:typeof t=="string"?Dh(t)?au:Wt.test(t)?Vm:nA:Array.isArray(t)?my:typeof t=="object"?Wt.test(t)?Vm:eA:au}function my(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Qh(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function eA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Qh(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function tA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const nA=(t,e)=>{const n=ar.createTransformer(e),i=ca(t),r=ca(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?fd.has(t)&&!r.values.length||fd.has(e)&&!i.values.length?Qw(t,e):Sa(my(tA(i,r),r.values),n):au(t,e)};function gy(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ft(t,e,n):Qh(t)(t,e)}const iA=5;function vy(t,e,n){const i=Math.max(e-iA,0);return Wx(n-t(i),e-i)}const gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wc=.001;function rA({duration:t=gt.duration,bounce:e=gt.bounce,velocity:n=gt.velocity,mass:i=gt.mass}){let r,s,o=1-e;o=bi(gt.minDamping,gt.maxDamping,o),t=bi(gt.minDuration,gt.maxDuration,Ti(t)),o<1?(r=u=>{const c=u*o,d=c*t,h=c-n,p=dd(u,o),x=Math.exp(-d);return wc-h/p*x},s=u=>{const d=u*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,x=Math.exp(-d),_=dd(Math.pow(u,2),o);return(-r(u)+wc>0?-1:1)*((h-p)*x)/_}):(r=u=>{const c=Math.exp(-u*t),d=(u-n)*t+1;return-wc+c*d},s=u=>{const c=Math.exp(-u*t),d=(n-u)*(t*t);return c*d});const a=5/t,l=oA(r,s,a);if(t=Ei(t),isNaN(l))return{stiffness:gt.stiffness,damping:gt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const sA=12;function oA(t,e,n){let i=n;for(let r=1;r<sA;r++)i=i-t(i)/e(i);return i}function dd(t,e){return t*Math.sqrt(1-e*e)}const aA=["duration","bounce"],lA=["stiffness","damping","mass"];function zm(t,e){return e.some(n=>t[n]!==void 0)}function uA(t){let e={velocity:gt.velocity,stiffness:gt.stiffness,damping:gt.damping,mass:gt.mass,isResolvedFromDuration:!1,...t};if(!zm(t,lA)&&zm(t,aA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*bi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:gt.mass,stiffness:r,damping:s}}else{const n=rA(t);e={...e,...n,mass:gt.mass},e.isResolvedFromDuration=!0}return e}function _y(t=gt.visualDuration,e=gt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:p}=uA({...n,velocity:-Ti(n.velocity||0)}),x=h||0,_=u/(2*Math.sqrt(l*c)),m=o-s,f=Ti(Math.sqrt(l/c)),v=Math.abs(m)<5;i||(i=v?gt.restSpeed.granular:gt.restSpeed.default),r||(r=v?gt.restDelta.granular:gt.restDelta.default);let g;if(_<1){const w=dd(f,_);g=A=>{const C=Math.exp(-_*f*A);return o-C*((x+_*f*m)/w*Math.sin(w*A)+m*Math.cos(w*A))}}else if(_===1)g=w=>o-Math.exp(-f*w)*(m+(x+f*m)*w);else{const w=f*Math.sqrt(_*_-1);g=A=>{const C=Math.exp(-_*f*A),D=Math.min(w*A,300);return o-C*((x+_*f*m)*Math.sinh(D)+w*m*Math.cosh(D))/w}}const y={calculatedDuration:p&&d||null,next:w=>{const A=g(w);if(p)a.done=w>=d;else{let C=0;_<1&&(C=w===0?Ei(x):vy(g,w,A));const D=Math.abs(C)<=i,S=Math.abs(o-A)<=r;a.done=D&&S}return a.value=a.done?o:A,a},toString:()=>{const w=Math.min(Fx(y),rd),A=Ox(C=>y.next(w*C).value,w,30);return w+"ms "+A}};return y}function Hm({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],h={done:!1,value:d},p=D=>a!==void 0&&D<a||l!==void 0&&D>l,x=D=>a===void 0?l:l===void 0||Math.abs(a-D)<Math.abs(l-D)?a:l;let _=n*e;const m=d+_,f=o===void 0?m:o(m);f!==m&&(_=f-d);const v=D=>-_*Math.exp(-D/i),g=D=>f+v(D),y=D=>{const S=v(D),E=g(D);h.done=Math.abs(S)<=u,h.value=h.done?f:E};let w,A;const C=D=>{p(h.value)&&(w=D,A=_y({keyframes:[h.value,x(h.value)],velocity:vy(g,D,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:D=>{let S=!1;return!A&&w===void 0&&(S=!0,y(D),C(D)),w!==void 0&&D>=w?A.next(D-w):(!S&&y(D),h)}}}const cA=ya(.42,0,1,1),fA=ya(0,0,.58,1),xy=ya(.42,0,.58,1),dA=t=>Array.isArray(t)&&typeof t[0]!="number",hA={linear:_n,easeIn:cA,easeInOut:xy,easeOut:fA,circIn:Yh,circInOut:Jx,circOut:Qx,backIn:Xh,backInOut:Kx,backOut:$x,anticipate:Zx},Gm=t=>{if(zh(t)){gx(t.length===4);const[e,n,i,r]=t;return ya(e,n,i,r)}else if(typeof t=="string")return hA[t];return t};function pA(t,e,n){const i=[],r=n||gy,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||_n:e;a=Sa(l,a)}i.push(a)}return i}function mA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(gx(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=pA(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const h=Ys(t[d],t[d+1],c);return a[d](h)};return n?c=>u(bi(t[0],t[s-1],c)):u}function gA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ys(0,e,i);t.push(ft(n,1,r))}}function vA(t){const e=[0];return gA(e,t.length-1),e}function _A(t,e){return t.map(n=>n*e)}function xA(t,e){return t.map(()=>e||xy).splice(0,t.length-1)}function lu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=dA(i)?i.map(Gm):Gm(i),s={done:!1,value:e[0]},o=_A(n&&n.length===e.length?n:vA(e),t),a=mA(o,e,{ease:Array.isArray(r)?r:xA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const yA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ot.update(e,!0),stop:()=>or(e),now:()=>Nt.isProcessing?Nt.timestamp:oi.now()}},SA={decay:Hm,inertia:Hm,tween:lu,keyframes:lu,spring:_y},MA=t=>t/100;class Jh extends py{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Zh,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Vh(n)?n:SA[n]||lu;let l,u;a!==lu&&typeof e[0]!="number"&&(l=Sa(MA,gy(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Fx(c));const{calculatedDuration:d}=c,h=d+r,p=h*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:D}=this.options;return{done:!0,value:D[D.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:x,repeatDelay:_,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-h*(this.speed>=0?1:-1),v=this.speed>=0?f<0:f>c;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,y=s;if(p){const D=Math.min(this.currentTime,c)/d;let S=Math.floor(D),E=D%1;!E&&D>=1&&(E=1),E===1&&S--,S=Math.min(S,p+1),!!(S%2)&&(x==="reverse"?(E=1-E,_&&(E-=_/d)):x==="mirror"&&(y=o)),g=bi(0,1,E)*d}const w=v?{done:!1,value:l[0]}:y.next(g);a&&(w.value=a(w.value));let{done:A}=w;!v&&u!==null&&(A=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&r!==void 0&&(w.value=Ou(l,this.options,r)),m&&m(w.value),C&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Ti(e.calculatedDuration):0}get time(){return Ti(this.currentTime)}set time(e){e=Ei(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ti(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=yA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const EA=new Set(["opacity","clipPath","filter","transform"]);function TA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Bx(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const wA=wh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),uu=10,AA=2e4;function CA(t){return Vh(t.type)||t.type==="spring"||!kx(t.ease)}function RA(t,e){const n=new Jh({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<AA;)i=n.sample(s),r.push(i.value),s+=uu;return{times:void 0,keyframes:r,duration:s-uu,ease:"linear"}}const yy={anticipate:Zx,backInOut:Kx,circInOut:Jx};function bA(t){return t in yy}class Wm extends py{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new hy(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&ou()&&bA(s)&&(s=yy[s]),CA(this.options)){const{onComplete:d,onUpdate:h,motionValue:p,element:x,..._}=this.options,m=RA(e,_);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const c=TA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(Rm(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;a.set(Ou(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ti(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ti(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ei(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return _n;const{animation:i}=n;Rm(i,e)}return _n}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:h,...p}=this.options,x=new Jh({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),_=Ei(this.time);u.setWithVelocity(x.sample(_-uu).value,x.sample(_).value,uu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return wA()&&i&&EA.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const PA={type:"spring",stiffness:500,damping:25,restSpeed:10},LA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),DA={type:"keyframes",duration:.8},NA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IA=(t,{keyframes:e})=>e.length>2?DA:qr.has(t)?t.startsWith("scale")?LA(e[1]):PA:NA;function UA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const ep=(t,e,n,i={},r,s)=>o=>{const a=Bh(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Ei(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};UA(a)||(c={...c,...IA(t,c)}),c.duration&&(c.duration=Ei(c.duration)),c.repeatDelay&&(c.repeatDelay=Ei(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const h=Ou(c.keyframes,a);if(h!==void 0)return ot.update(()=>{c.onUpdate(h),c.onComplete()}),new ew([])}return!s&&Wm.supports(c)?new Wm(c):new Jh(c)};function FA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Sy(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const h=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||c&&FA(c,d))continue;const x={delay:n,...Bh(o||{},d)};let _=!1;if(window.MotionHandoffAnimation){const f=jx(t);if(f){const v=window.MotionHandoffAnimation(f,d,ot);v!==null&&(x.startTime=v,_=!0)}}od(t,d),h.start(ep(d,h,p,t.shouldReduceMotion&&Gx.has(d)?{type:!1}:x,t,_));const m=h.animation;m&&u.push(m)}return a&&Promise.all(u).then(()=>{ot.update(()=>{a&&pw(t,a)})}),u}function hd(t,e,n={}){var i;const r=Fu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(Sy(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:h}=s;return OA(t,e,c+u,d,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function OA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(kA).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(hd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function kA(t,e){return t.sortNodePosition(e)}function BA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>hd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=hd(t,e,n);else{const r=typeof e=="function"?Fu(t,e,n.custom):e;i=Promise.all(Sy(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const VA=Ch.length;function My(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?My(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<VA;n++){const i=Ch[n],r=t.props[i];(aa(r)||r===!1)&&(e[i]=r)}return e}const zA=[...Ah].reverse(),HA=Ah.length;function GA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>BA(t,n,i)))}function WA(t){let e=GA(t),n=jm(),i=!0;const r=l=>(u,c)=>{var d;const h=Fu(t,c,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(h){const{transition:p,transitionEnd:x,..._}=h;u={...u,..._,...x}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=My(t.parent)||{},d=[],h=new Set;let p={},x=1/0;for(let m=0;m<HA;m++){const f=zA[m],v=n[f],g=u[f]!==void 0?u[f]:c[f],y=aa(g),w=f===l?v.isActive:null;w===!1&&(x=m);let A=g===c[f]&&g!==u[f]&&y;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),v.protectedKeys={...p},!v.isActive&&w===null||!g&&!v.prevProp||Iu(g)||typeof g=="boolean")continue;const C=jA(v.prevProp,g);let D=C||f===l&&v.isActive&&!A&&y||m>x&&y,S=!1;const E=Array.isArray(g)?g:[g];let W=E.reduce(r(f),{});w===!1&&(W={});const{prevResolvedValues:Z={}}=v,ie={...Z,...W},I=K=>{D=!0,h.has(K)&&(S=!0,h.delete(K)),v.needsAnimating[K]=!0;const N=t.getValue(K);N&&(N.liveStyle=!1)};for(const K in ie){const N=W[K],O=Z[K];if(p.hasOwnProperty(K))continue;let P=!1;id(N)&&id(O)?P=!Ux(N,O):P=N!==O,P?N!=null?I(K):h.add(K):N!==void 0&&h.has(K)?I(K):v.protectedKeys[K]=!0}v.prevProp=g,v.prevResolvedValues=W,v.isActive&&(p={...p,...W}),i&&t.blockInitialAnimation&&(D=!1),D&&(!(A&&C)||S)&&d.push(...E.map(K=>({animation:K,options:{type:f}})))}if(h.size){const m={};h.forEach(f=>{const v=t.getBaseTarget(f),g=t.getValue(f);g&&(g.liveStyle=!0),m[f]=v??null}),d.push({animation:m})}let _=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=jm(),i=!0}}}function jA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Ux(e,t):!1}function gr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function jm(){return{animate:gr(!0),whileInView:gr(),whileHover:gr(),whileTap:gr(),whileDrag:gr(),whileFocus:gr(),exit:gr()}}class hr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class XA extends hr{constructor(e){super(e),e.animationState||(e.animationState=WA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Iu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let YA=0;class qA extends hr{constructor(){super(...arguments),this.id=YA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const $A={animation:{Feature:XA},exit:{Feature:qA}};function fa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ma(t){return{point:{x:t.pageX,y:t.pageY}}}const KA=t=>e=>Hh(e)&&t(e,Ma(e));function Vo(t,e,n,i){return fa(t,e,KA(n),i)}const Xm=(t,e)=>Math.abs(t-e);function ZA(t,e){const n=Xm(t.x,e.x),i=Xm(t.y,e.y);return Math.sqrt(n**2+i**2)}class Ey{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Cc(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=ZA(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:x}=d,{timestamp:_}=Nt;this.history.push({...x,timestamp:_});const{onStart:m,onMove:f}=this.handlers;h||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ac(h,this.transformPagePoint),ot.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:x,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Cc(d.type==="pointercancel"?this.lastMoveEventInfo:Ac(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),x&&x(d,m)},!Hh(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ma(e),a=Ac(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Nt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Cc(a,this.history)),this.removeListeners=Sa(Vo(this.contextWindow,"pointermove",this.handlePointerMove),Vo(this.contextWindow,"pointerup",this.handlePointerUp),Vo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),or(this.updatePoint)}}function Ac(t,e){return e?{point:e(t.point)}:t}function Ym(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Cc({point:t},e){return{point:t,delta:Ym(t,Ty(e)),offset:Ym(t,QA(e)),velocity:JA(e,.1)}}function QA(t){return t[0]}function Ty(t){return t[t.length-1]}function JA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Ty(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ei(e)));)n--;if(!i)return{x:0,y:0};const s=Ti(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const wy=1e-4,e1=1-wy,t1=1+wy,Ay=.01,n1=0-Ay,i1=0+Ay;function Mn(t){return t.max-t.min}function r1(t,e,n){return Math.abs(t-e)<=n}function qm(t,e,n,i=.5){t.origin=i,t.originPoint=ft(e.min,e.max,t.origin),t.scale=Mn(n)/Mn(e),t.translate=ft(n.min,n.max,t.origin)-t.originPoint,(t.scale>=e1&&t.scale<=t1||isNaN(t.scale))&&(t.scale=1),(t.translate>=n1&&t.translate<=i1||isNaN(t.translate))&&(t.translate=0)}function zo(t,e,n,i){qm(t.x,e.x,n.x,i?i.originX:void 0),qm(t.y,e.y,n.y,i?i.originY:void 0)}function $m(t,e,n){t.min=n.min+e.min,t.max=t.min+Mn(e)}function s1(t,e,n){$m(t.x,e.x,n.x),$m(t.y,e.y,n.y)}function Km(t,e,n){t.min=e.min-n.min,t.max=t.min+Mn(e)}function Ho(t,e,n){Km(t.x,e.x,n.x),Km(t.y,e.y,n.y)}function o1(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ft(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ft(n,t,i.max):Math.min(t,n)),t}function Zm(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function a1(t,{top:e,left:n,bottom:i,right:r}){return{x:Zm(t.x,n,r),y:Zm(t.y,e,i)}}function Qm(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function l1(t,e){return{x:Qm(t.x,e.x),y:Qm(t.y,e.y)}}function u1(t,e){let n=.5;const i=Mn(t),r=Mn(e);return r>i?n=Ys(e.min,e.max-i,t.min):i>r&&(n=Ys(t.min,t.max-r,e.min)),bi(0,1,n)}function c1(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const pd=.35;function f1(t=pd){return t===!1?t=0:t===!0&&(t=pd),{x:Jm(t,"left","right"),y:Jm(t,"top","bottom")}}function Jm(t,e,n){return{min:eg(t,e),max:eg(t,n)}}function eg(t,e){return typeof t=="number"?t:t[e]||0}const tg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Cs=()=>({x:tg(),y:tg()}),ng=()=>({min:0,max:0}),xt=()=>({x:ng(),y:ng()});function Rn(t){return[t("x"),t("y")]}function Cy({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function d1({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function h1(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Rc(t){return t===void 0||t===1}function md({scale:t,scaleX:e,scaleY:n}){return!Rc(t)||!Rc(e)||!Rc(n)}function Er(t){return md(t)||Ry(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Ry(t){return ig(t.x)||ig(t.y)}function ig(t){return t&&t!=="0%"}function cu(t,e,n){const i=t-n,r=e*i;return n+r}function rg(t,e,n,i,r){return r!==void 0&&(t=cu(t,r,i)),cu(t,n,i)+e}function gd(t,e=0,n=1,i,r){t.min=rg(t.min,e,n,i,r),t.max=rg(t.max,e,n,i,r)}function by(t,{x:e,y:n}){gd(t.x,e.translate,e.scale,e.originPoint),gd(t.y,n.translate,n.scale,n.originPoint)}const sg=.999999999999,og=1.0000000000001;function p1(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&bs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,by(t,o)),i&&Er(s.latestValues)&&bs(t,s.latestValues))}e.x<og&&e.x>sg&&(e.x=1),e.y<og&&e.y>sg&&(e.y=1)}function Rs(t,e){t.min=t.min+e,t.max=t.max+e}function ag(t,e,n,i,r=.5){const s=ft(t.min,t.max,r);gd(t,e,n,s,i)}function bs(t,e){ag(t.x,e.x,e.scaleX,e.scale,e.originX),ag(t.y,e.y,e.scaleY,e.scale,e.originY)}function Py(t,e){return Cy(h1(t.getBoundingClientRect(),e))}function m1(t,e,n){const i=Py(t,n),{scroll:r}=e;return r&&(Rs(i.x,r.offset.x),Rs(i.y,r.offset.y)),i}const Ly=({current:t})=>t?t.ownerDocument.defaultView:null,g1=new WeakMap;class v1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ma(c).point)},s=(c,d)=>{const{drag:h,dragPropagation:p,onDragStart:x}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uw(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rn(m=>{let f=this.getAxisMotionValue(m).get()||0;if(si.test(f)){const{projection:v}=this.visualElement;if(v&&v.layout){const g=v.layout.layoutBox[m];g&&(f=Mn(g)*(parseFloat(f)/100))}}this.originPoint[m]=f}),x&&ot.postRender(()=>x(c,d)),od(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(c,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:x,onDrag:_}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=_1(m),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),_&&_(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Rn(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Ey(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ly(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ot.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!qa(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=o1(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&ws(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=a1(r.layoutBox,n):this.constraints=!1,this.elastic=f1(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Rn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=c1(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ws(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=m1(i,r.root,this.visualElement.getTransformPagePoint());let o=l1(r.layout.layoutBox,s);if(n){const a=n(d1(o));this.hasMutatedConstraints=!!a,a&&(o=Cy(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Rn(c=>{if(!qa(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,x)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return od(this.visualElement,e),i.start(ep(e,i,0,n,this.visualElement,!1))}stopAnimation(){Rn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Rn(n=>{const{drag:i}=this.getProps();if(!qa(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ft(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ws(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Rn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=u1({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Rn(o=>{if(!qa(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(ft(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;g1.set(this.visualElement,this);const e=this.visualElement.current,n=Vo(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();ws(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ot.read(i);const o=fa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Rn(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=pd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function qa(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function _1(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class x1 extends hr{constructor(e){super(e),this.removeGroupControls=_n,this.removeListeners=_n,this.controls=new v1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_n}unmount(){this.removeGroupControls(),this.removeListeners()}}const lg=t=>(e,n)=>{t&&ot.postRender(()=>t(e,n))};class y1 extends hr{constructor(){super(...arguments),this.removePointerDownListener=_n}onPointerDown(e){this.session=new Ey(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ly(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:lg(e),onStart:lg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ot.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Vo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Dl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ug(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const vo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=ug(t,e.target.x),i=ug(t,e.target.y);return`${n}% ${i}%`}},S1={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ar.parse(t);if(r.length>5)return i;const s=ar.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=ft(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class M1 extends pe.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;HT(E1),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Dl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ot.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),bh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Dy(t){const[e,n]=iT(),i=pe.useContext(px);return b.jsx(M1,{...t,layoutGroup:i,switchLayoutGroup:pe.useContext(Mx),isPresent:e,safeToRemove:n})}const E1={borderRadius:{...vo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vo,borderTopRightRadius:vo,borderBottomLeftRadius:vo,borderBottomRightRadius:vo,boxShadow:S1};function T1(t,e,n){const i=Xt(t)?t:ua(t);return i.start(ep("",i,e,n)),i.animation}function w1(t){return t instanceof SVGElement&&t.tagName!=="svg"}const A1=(t,e)=>t.depth-e.depth;class C1{constructor(){this.children=[],this.isDirty=!1}add(e){Gh(this.children,e),this.isDirty=!0}remove(e){Wh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(A1),this.isDirty=!1,this.children.forEach(e)}}function R1(t,e){const n=oi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(or(i),t(s-e))};return ot.read(i,!0),()=>or(i)}const Ny=["TopLeft","TopRight","BottomLeft","BottomRight"],b1=Ny.length,cg=t=>typeof t=="string"?parseFloat(t):t,fg=t=>typeof t=="number"||Te.test(t);function P1(t,e,n,i,r,s){r?(t.opacity=ft(0,n.opacity!==void 0?n.opacity:1,L1(i)),t.opacityExit=ft(e.opacity!==void 0?e.opacity:1,0,D1(i))):s&&(t.opacity=ft(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<b1;o++){const a=`border${Ny[o]}Radius`;let l=dg(e,a),u=dg(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||fg(l)===fg(u)?(t[a]=Math.max(ft(cg(l),cg(u),i),0),(si.test(u)||si.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=ft(e.rotate||0,n.rotate||0,i))}function dg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const L1=Iy(0,.5,Qx),D1=Iy(.5,.95,_n);function Iy(t,e,n){return i=>i<t?0:i>e?1:n(Ys(t,e,i))}function hg(t,e){t.min=e.min,t.max=e.max}function An(t,e){hg(t.x,e.x),hg(t.y,e.y)}function pg(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function mg(t,e,n,i,r){return t-=e,t=cu(t,1/n,i),r!==void 0&&(t=cu(t,1/r,i)),t}function N1(t,e=0,n=1,i=.5,r,s=t,o=t){if(si.test(e)&&(e=parseFloat(e),e=ft(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ft(s.min,s.max,i);t===s&&(a-=e),t.min=mg(t.min,e,n,a,r),t.max=mg(t.max,e,n,a,r)}function gg(t,e,[n,i,r],s,o){N1(t,e[n],e[i],e[r],e.scale,s,o)}const I1=["x","scaleX","originX"],U1=["y","scaleY","originY"];function vg(t,e,n,i){gg(t.x,e,I1,n?n.x:void 0,i?i.x:void 0),gg(t.y,e,U1,n?n.y:void 0,i?i.y:void 0)}function _g(t){return t.translate===0&&t.scale===1}function Uy(t){return _g(t.x)&&_g(t.y)}function xg(t,e){return t.min===e.min&&t.max===e.max}function F1(t,e){return xg(t.x,e.x)&&xg(t.y,e.y)}function yg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Fy(t,e){return yg(t.x,e.x)&&yg(t.y,e.y)}function Sg(t){return Mn(t.x)/Mn(t.y)}function Mg(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class O1{constructor(){this.members=[]}add(e){Gh(this.members,e),e.scheduleRender()}remove(e){if(Wh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function k1(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:h,skewX:p,skewY:x}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Tr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},bo=typeof window<"u"&&window.MotionDebug!==void 0,bc=["","X","Y","Z"],B1={visibility:"hidden"},Eg=1e3;let V1=0;function Pc(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Oy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=jx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ot,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Oy(i)}function ky({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=V1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bo&&(Tr.totalNodes=Tr.resolvedTargetDeltas=Tr.recalculatedProjection=0),this.nodes.forEach(G1),this.nodes.forEach(q1),this.nodes.forEach($1),this.nodes.forEach(W1),bo&&window.MotionDebug.record(Tr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new C1)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new jh),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=w1(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=R1(h,250),Dl.hasAnimatedSinceResize&&(Dl.hasAnimatedSinceResize=!1,this.nodes.forEach(wg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||c.getDefaultTransition()||eC,{onLayoutAnimationStart:m,onLayoutAnimationComplete:f}=c.getProps(),v=!this.targetLayout||!Fy(this.targetLayout,x)||p,g=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const y={...Bh(_,"layout"),onPlay:m,onComplete:f};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else h||wg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,or(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(K1),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Oy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Tg);return}this.isUpdating||this.nodes.forEach(X1),this.isUpdating=!1,this.nodes.forEach(Y1),this.nodes.forEach(z1),this.nodes.forEach(H1),this.clearAllSnapshots();const a=oi.now();Nt.delta=bi(0,1e3/60,a-Nt.timestamp),Nt.timestamp=a,Nt.isProcessing=!0,yc.update.process(Nt),yc.preRender.process(Nt),yc.render.process(Nt),Nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(j1),this.sharedNodes.forEach(Z1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=xt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Uy(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Er(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),tC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return xt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(nC))){const{scroll:c}=this.root;c&&(Rs(l.x,c.offset.x),Rs(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=xt();if(An(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:h}=c;c!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&An(l,o),Rs(l.x,d.offset.x),Rs(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=xt();An(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&bs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Er(c.latestValues)&&bs(l,c.latestValues)}return Er(this.latestValues)&&bs(l,this.latestValues),l}removeTransform(o){const a=xt();An(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Er(u.latestValues))continue;md(u.latestValues)&&u.updateSnapshot();const c=xt(),d=u.measurePageBox();An(c,d),vg(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Er(this.latestValues)&&vg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=Nt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xt(),this.relativeTargetOrigin=xt(),Ho(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=xt(),this.targetWithTransforms=xt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),s1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):An(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):An(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xt(),this.relativeTargetOrigin=xt(),Ho(this.relativeTargetOrigin,this.target,p.target),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}bo&&Tr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||md(this.parent.latestValues)||Ry(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Nt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;An(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;p1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=xt());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pg(this.prevProjectionDelta.x,this.projectionDelta.x),pg(this.prevProjectionDelta.y,this.projectionDelta.y)),zo(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!Mg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Mg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),bo&&Tr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Cs(),this.projectionDelta=Cs(),this.projectionDeltaWithTransform=Cs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Cs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=xt(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,_=p!==x,m=this.getStack(),f=!m||m.members.length<=1,v=!!(_&&!f&&this.options.crossfade===!0&&!this.path.some(J1));this.animationProgress=0;let g;this.mixTargetDelta=y=>{const w=y/1e3;Ag(d.x,o.x,w),Ag(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ho(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Q1(this.relativeTarget,this.relativeTargetOrigin,h,w),g&&F1(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=xt()),An(g,this.relativeTarget)),_&&(this.animationValues=c,P1(c,u,this.latestValues,w,v,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(or(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ot.update(()=>{Dl.hasAnimatedSinceResize=!0,this.currentAnimation=T1(0,Eg,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Eg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&By(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||xt();const d=Mn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=Mn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}An(a,l),bs(a,c),zo(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new O1),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Pc("z",o,u,this.animationValues);for(let c=0;c<bc.length;c++)Pc(`rotate${bc[c]}`,o,u,this.animationValues),Pc(`skew${bc[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return B1;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Pl(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Pl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Er(this.latestValues)&&(_.transform=c?c({},""):"none",this.hasProjected=!1),_}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=k1(this.projectionDeltaWithTransform,this.treeScale,h),c&&(u.transform=c(h,u.transform));const{x:p,y:x}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${x.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const _ in su){if(h[_]===void 0)continue;const{correct:m,applyTo:f}=su[_],v=u.transform==="none"?h[_]:m(h[_],d);if(f){const g=f.length;for(let y=0;y<g;y++)u[f[y]]=v}else u[_]=v}return this.options.layoutId&&(u.pointerEvents=d===this?Pl(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Tg),this.root.sharedNodes.clear()}}}function z1(t){t.updateLayout()}function H1(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Rn(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=Mn(h);h.min=i[d].min,h.max=h.min+p}):By(s,n.layoutBox,i)&&Rn(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=Mn(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Cs();zo(a,i,n.layoutBox);const l=Cs();o?zo(l,t.applyTransform(r,!0),n.measuredBox):zo(l,i,n.layoutBox);const u=!Uy(a);let c=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const x=xt();Ho(x,n.layoutBox,h.layoutBox);const _=xt();Ho(_,i,p.layoutBox),Fy(x,_)||(c=!0),d.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function G1(t){bo&&Tr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function W1(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function j1(t){t.clearSnapshot()}function Tg(t){t.clearMeasurements()}function X1(t){t.isLayoutDirty=!1}function Y1(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function wg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function q1(t){t.resolveTargetDelta()}function $1(t){t.calcProjection()}function K1(t){t.resetSkewAndRotation()}function Z1(t){t.removeLeadSnapshot()}function Ag(t,e,n){t.translate=ft(e.translate,0,n),t.scale=ft(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Cg(t,e,n,i){t.min=ft(e.min,n.min,i),t.max=ft(e.max,n.max,i)}function Q1(t,e,n,i){Cg(t.x,e.x,n.x,i),Cg(t.y,e.y,n.y,i)}function J1(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const eC={duration:.45,ease:[.4,0,.1,1]},Rg=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),bg=Rg("applewebkit/")&&!Rg("chrome/")?Math.round:_n;function Pg(t){t.min=bg(t.min),t.max=bg(t.max)}function tC(t){Pg(t.x),Pg(t.y)}function By(t,e,n){return t==="position"||t==="preserve-aspect"&&!r1(Sg(e),Sg(n),.2)}function nC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const iC=ky({attachResizeListener:(t,e)=>fa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lc={current:void 0},Vy=ky({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Lc.current){const t=new iC({});t.mount(window),t.setOptions({layoutScroll:!0}),Lc.current=t}return Lc.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),rC={pan:{Feature:y1},drag:{Feature:x1,ProjectionNode:Vy,MeasureLayout:Dy}};function Lg(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ot.postRender(()=>s(e,Ma(e)))}class sC extends hr{mount(){const{current:e}=this.node;e&&(this.unmount=rw(e,n=>(Lg(this.node,n,"Start"),i=>Lg(this.node,i,"End"))))}unmount(){}}class oC extends hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Sa(fa(this.node.current,"focus",()=>this.onFocus()),fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Dg(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ot.postRender(()=>s(e,Ma(e)))}class aC extends hr{mount(){const{current:e}=this.node;e&&(this.unmount=lw(e,n=>(Dg(this.node,n,"Start"),(i,{success:r})=>Dg(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vd=new WeakMap,Dc=new WeakMap,lC=t=>{const e=vd.get(t.target);e&&e(t)},uC=t=>{t.forEach(lC)};function cC({root:t,...e}){const n=t||document;Dc.has(n)||Dc.set(n,{});const i=Dc.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(uC,{root:t,...e})),i[r]}function fC(t,e,n){const i=cC(e);return vd.set(t,n),i.observe(t),()=>{vd.delete(t),i.unobserve(t)}}const dC={some:0,all:1};class hC extends hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:dC[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),h=u?c:d;h&&h(l)};return fC(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(pC(e,n))&&this.startObserver()}unmount(){}}function pC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const mC={inView:{Feature:hC},tap:{Feature:aC},focus:{Feature:oC},hover:{Feature:sC}},gC={layout:{ProjectionNode:Vy,MeasureLayout:Dy}},_d={current:null},zy={current:!1};function vC(){if(zy.current=!0,!!Th)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>_d.current=t.matches;t.addListener(e),e()}else _d.current=!1}const _C=[...dy,Wt,ar],xC=t=>_C.find(fy(t)),Ng=new WeakMap;function yC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Xt(r))t.addValue(i,r);else if(Xt(s))t.addValue(i,ua(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ua(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Ig=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class SC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=oi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ot.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Uu(n),this.isVariantNode=yx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const x=h[p];l[p]!==void 0&&Xt(x)&&x.set(l[p],!1)}}mount(e){this.current=e,Ng.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),zy.current||vC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:_d.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ng.delete(this.current),this.projection&&this.projection.unmount(),or(this.notifyUpdate),or(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=qr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ot.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in qs){const n=qs[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Ig.length;i++){const r=Ig[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=yC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ua(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(uy(r)||ey(r))?r=parseFloat(r):!xC(r)&&ar.test(n)&&(r=oy(e,n)),this.setBaseTarget(e,Xt(r)?r.get():r)),Xt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Lh(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Xt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new jh),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Hy extends SC{constructor(){super(...arguments),this.KeyframeResolver=hy}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function MC(t){return window.getComputedStyle(t)}class EC extends Hy{constructor(){super(...arguments),this.type="html",this.renderInstance=bx}readValueFromInstance(e,n){if(qr.has(n)){const i=Kh(n);return i&&i.default||0}else{const i=MC(e),r=(Ax(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Py(e,n)}build(e,n,i){Ih(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return kh(e,n,i)}}class TC extends Hy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=xt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(qr.has(n)){const i=Kh(n);return i&&i.default||0}return n=Px.has(n)?n:Rh(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Nx(e,n,i)}build(e,n,i){Uh(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Lx(e,n,i,r)}mount(e){this.isSVGTag=Oh(e.tagName),super.mount(e)}}const wC=(t,e)=>Ph(t)?new TC(e):new EC(e,{allowProjection:t!==pe.Fragment}),AC=ZT({...$A,...mC,...rC,...gC},wC),CC=dT(AC),RC=({sentence:t="True Focus",separator:e=" ",manualMode:n=!1,blurAmount:i=5,borderColor:r="green",glowColor:s="rgba(0, 255, 0, 0.6)",animationDuration:o=.5,pauseBetweenAnimations:a=1,vertical:l=!1})=>{const u=t.split(e),[c,d]=pe.useState(0),[h,p]=pe.useState(null),x=pe.useRef(null),_=pe.useRef([]),[m,f]=pe.useState({x:0,y:0,width:0,height:0});pe.useEffect(()=>{if(!n){const y=setInterval(()=>{d(w=>(w+1)%u.length)},(o+a)*1e3);return()=>clearInterval(y)}},[n,o,a,u.length]),pe.useEffect(()=>{if(c===null||c===-1||!_.current[c]||!x.current)return;const y=x.current.getBoundingClientRect(),w=_.current[c].getBoundingClientRect();f({x:w.left-y.left,y:w.top-y.top,width:w.width,height:w.height})},[c,u.length]);const v=y=>{n&&(p(y),d(y))},g=()=>{n&&d(h)};return b.jsxs("div",{className:`focus-container ${l?"flex-col":""}`,ref:x,children:[u.map((y,w)=>{const A=w===c;return b.jsx("span",{ref:C=>_.current[w]=C,className:`focus-word ${l?"block text-4xl md:text-6xl":""} ${n?"manual":""} ${A&&!n?"active":""}`,style:{filter:A?"blur(0px)":`blur(${i}px)`,"--border-color":r,"--glow-color":s,transition:`filter ${o}s ease`},onMouseEnter:()=>v(w),onMouseLeave:g,children:y},w)}),b.jsxs(CC.div,{className:"focus-frame",animate:{x:m.x,y:m.y,width:m.width,height:m.height,opacity:c>=0?1:0},transition:{duration:o},style:{"--border-color":r,"--glow-color":s},children:[b.jsx("span",{className:"corner top-left"}),b.jsx("span",{className:"corner top-right"}),b.jsx("span",{className:"corner bottom-left"}),b.jsx("span",{className:"corner bottom-right"})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="160",bC=0,Ug=1,PC=2,Gy=1,LC=2,pi=3,lr=0,fn=1,vi=2,tr=0,ks=1,Fg=2,Og=3,kg=4,DC=5,Cr=100,NC=101,IC=102,Bg=103,Vg=104,UC=200,FC=201,OC=202,kC=203,xd=204,yd=205,BC=206,VC=207,zC=208,HC=209,GC=210,WC=211,jC=212,XC=213,YC=214,qC=0,$C=1,KC=2,fu=3,ZC=4,QC=5,JC=6,eR=7,Wy=0,tR=1,nR=2,nr=0,iR=1,rR=2,sR=3,oR=4,aR=5,lR=6,jy=300,Ks=301,Zs=302,Sd=303,Md=304,ku=306,Ed=1e3,Yn=1001,Td=1002,Jt=1003,zg=1004,Nc=1005,Ln=1006,uR=1007,da=1008,ir=1009,cR=1010,fR=1011,np=1012,Xy=1013,ji=1014,Xi=1015,ha=1016,Yy=1017,qy=1018,Fr=1020,dR=1021,qn=1023,hR=1024,pR=1025,Or=1026,Qs=1027,mR=1028,$y=1029,gR=1030,Ky=1031,Zy=1033,Ic=33776,Uc=33777,Fc=33778,Oc=33779,Hg=35840,Gg=35841,Wg=35842,jg=35843,Qy=36196,Xg=37492,Yg=37496,qg=37808,$g=37809,Kg=37810,Zg=37811,Qg=37812,Jg=37813,ev=37814,tv=37815,nv=37816,iv=37817,rv=37818,sv=37819,ov=37820,av=37821,kc=36492,lv=36494,uv=36495,vR=36283,cv=36284,fv=36285,dv=36286,Jy=3e3,kr=3001,_R=3200,xR=3201,yR=0,SR=1,Dn="",It="srgb",Pi="srgb-linear",ip="display-p3",Bu="display-p3-linear",du="linear",rt="srgb",hu="rec709",pu="p3",Zr=7680,hv=519,MR=512,ER=513,TR=514,eS=515,wR=516,AR=517,CR=518,RR=519,pv=35044,mv="300 es",wd=1035,yi=2e3,mu=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Ad=180/Math.PI;function Ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function bR(t,e){return(t%e+e)%e}function Vc(t,e,n){return(1-n)*t+n*e}function gv(t){return(t&t-1)===0&&t!==0}function Cd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _o(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],_=r[0],m=r[3],f=r[6],v=r[1],g=r[4],y=r[7],w=r[2],A=r[5],C=r[8];return s[0]=o*_+a*v+l*w,s[3]=o*m+a*g+l*A,s[6]=o*f+a*y+l*C,s[1]=u*_+c*v+d*w,s[4]=u*m+c*g+d*A,s[7]=u*f+c*y+d*C,s[2]=h*_+p*v+x*w,s[5]=h*m+p*g+x*A,s[8]=h*f+p*y+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new He;function tS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PR(){const t=gu("canvas");return t.style.display="block",t}const vv={};function Go(t){t in vv||(vv[t]=!0,console.warn(t))}const _v=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xv=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[Pi]:{transfer:du,primaries:hu,toReference:t=>t,fromReference:t=>t},[It]:{transfer:rt,primaries:hu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Bu]:{transfer:du,primaries:pu,toReference:t=>t.applyMatrix3(xv),fromReference:t=>t.applyMatrix3(_v)},[ip]:{transfer:rt,primaries:pu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(xv),fromReference:t=>t.applyMatrix3(_v).convertLinearToSRGB()}},LR=new Set([Pi,Bu]),Qe={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!LR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$a[e].toReference,r=$a[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $a[t].primaries},getTransfer:function(t){return t===Dn?du:$a[t].transfer}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class nS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=gu("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DR=0;class iS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DR++}),this.uuid=Ea(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gc(r[o].image)):s.push(Gc(r[o]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NR=0;class xn extends so{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Yn,r=Yn,s=Ln,o=da,a=qn,l=ir,u=xn.DEFAULT_ANISOTROPY,c=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NR++}),this.uuid=Ea(),this.name="",this.source=new iS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===kr?It:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?kr:Jy}set encoding(e){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?It:Dn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=jy;xn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(p+1)/2,w=(f+1)/2,A=(c+h)/4,C=(d+_)/4,D=(x+m)/4;return g>y&&g>w?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=C/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=D/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IR extends so{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?It:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new iS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends IR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rS extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class UR extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(d!==_||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*_,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,f*v);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=w,u*=w,c*=w,d*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*p-u*h,e[n+1]=l*x+c*h+u*d-a*p,e[n+2]=u*x+c*p+a*h-l*d,e[n+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new X,yv=new Ta;class wa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Za.subVectors(this.max,xo),Jr.subVectors(e.a,xo),es.subVectors(e.b,xo),ts.subVectors(e.c,xo),Ni.subVectors(es,Jr),Ii.subVectors(ts,es),vr.subVectors(Jr,ts);let n=[0,-Ni.z,Ni.y,0,-Ii.z,Ii.y,0,-vr.z,vr.y,Ni.z,0,-Ni.x,Ii.z,0,-Ii.x,vr.z,0,-vr.x,-Ni.y,Ni.x,0,-Ii.y,Ii.x,0,-vr.y,vr.x,0];return!jc(n,Jr,es,ts,Za)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,Jr,es,ts,Za))?!1:(Qa.crossVectors(Ni,Ii),n=[Qa.x,Qa.y,Qa.z],jc(n,Jr,es,ts,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new X,new X,new X,new X,new X,new X,new X,new X],kn=new X,Ka=new wa,Jr=new X,es=new X,ts=new X,Ni=new X,Ii=new X,vr=new X,xo=new X,Za=new X,Qa=new X,_r=new X;function jc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_r.fromArray(t,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),u=n.dot(_r),c=i.dot(_r);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const FR=new wa,yo=new X,Xc=new X;class rp{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):FR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Xc)),this.expandByPoint(yo.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new X,Yc=new X,Ja=new X,Ui=new X,qc=new X,el=new X,$c=new X;class OR{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yc.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(Yc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ja),a=Ui.dot(this.direction),l=-Ui.dot(Ja),u=Ui.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const _=1/c;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yc).addScaledVector(Ja,h),p}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),el.subVectors(i,e),$c.crossVectors(qc,el);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(el.crossVectors(Ui,el));if(l<0)return null;const u=a*this.direction.dot(qc.cross(Ui));if(u<0||l+u>o)return null;const c=-a*Ui.dot($c);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,s,o,a,l,u,c,d,h,p,x,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,h,p,x,_,m)}set(e,n,i,r,s,o,a,l,u,c,d,h,p,x,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,_=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+x*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=x+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,_=u*d;n[0]=h+_*a,n[4]=x*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-x,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,_=u*d;n[0]=h-_*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*c,n[9]=_-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,_=a*d;n[0]=l*c,n[4]=x*u-p,n[8]=h*u+_,n[1]=l*d,n[5]=_*u+h,n[9]=p*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,_=a*u;n[0]=l*c,n[4]=_-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+x,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,_=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+_,n[5]=o*c,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*c,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kR,e,BR)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Fi.crossVectors(i,hn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Fi.crossVectors(i,hn)),Fi.normalize(),tl.crossVectors(hn,Fi),r[0]=Fi.x,r[4]=tl.x,r[8]=hn.x,r[1]=Fi.y,r[5]=tl.y,r[9]=hn.y,r[2]=Fi.z,r[6]=tl.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],f=i[14],v=i[3],g=i[7],y=i[11],w=i[15],A=r[0],C=r[4],D=r[8],S=r[12],E=r[1],W=r[5],Z=r[9],ie=r[13],I=r[2],V=r[6],$=r[10],K=r[14],N=r[3],O=r[7],P=r[11],k=r[15];return s[0]=o*A+a*E+l*I+u*N,s[4]=o*C+a*W+l*V+u*O,s[8]=o*D+a*Z+l*$+u*P,s[12]=o*S+a*ie+l*K+u*k,s[1]=c*A+d*E+h*I+p*N,s[5]=c*C+d*W+h*V+p*O,s[9]=c*D+d*Z+h*$+p*P,s[13]=c*S+d*ie+h*K+p*k,s[2]=x*A+_*E+m*I+f*N,s[6]=x*C+_*W+m*V+f*O,s[10]=x*D+_*Z+m*$+f*P,s[14]=x*S+_*ie+m*K+f*k,s[3]=v*A+g*E+y*I+w*N,s[7]=v*C+g*W+y*V+w*O,s[11]=v*D+g*Z+y*$+w*P,s[15]=v*S+g*ie+y*K+w*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],f=e[15],v=d*m*u-_*h*u+_*l*p-a*m*p-d*l*f+a*h*f,g=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*_*u-x*d*u+x*a*p-o*_*p-c*a*f+o*d*f,w=x*d*l-c*_*l-x*a*h+o*_*h+c*a*m-o*d*m,A=n*v+i*g+r*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*C,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*C,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=g*C,e[5]=(c*m*s-x*h*s+x*r*p-n*m*p-c*r*f+n*h*f)*C,e[6]=(x*l*s-o*m*s-x*r*u+n*m*u+o*r*f-n*l*f)*C,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*C,e[8]=y*C,e[9]=(x*d*s-c*_*s-x*i*p+n*_*p+c*i*f-n*d*f)*C,e[10]=(o*_*s-x*a*s+x*i*u-n*_*u-o*i*f+n*a*f)*C,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*C,e[12]=w*C,e[13]=(c*_*r-x*d*r+x*i*h-n*_*h-c*i*m+n*d*m)*C,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,_=o*c,m=o*d,f=a*d,v=l*u,g=l*c,y=l*d,w=i.x,A=i.y,C=i.z;return r[0]=(1-(_+f))*w,r[1]=(p+y)*w,r[2]=(x-g)*w,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+g)*C,r[9]=(m-v)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ns.set(r[0],r[1],r[2]).length();const o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/s,c=1/o,d=1/a;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===yi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===mu)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*c;let x,_;if(a===yi)x=(o+s)*d,_=-2*d;else if(a===mu)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ns=new X,Bn=new Ot,kR=new X(0,0,0),BR=new X(1,1,1),Fi=new X,tl=new X,hn=new X,Sv=new Ot,Mv=new Ta;class Vu{constructor(e=0,n=0,i=0,r=Vu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-on(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mv.setFromEuler(this),this.setFromQuaternion(Mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vu.DEFAULT_ORDER="XYZ";class sS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VR=0;const Ev=new X,is=new Ta,fi=new Ot,nl=new X,So=new X,zR=new X,HR=new Ta,Tv=new X(1,0,0),wv=new X(0,1,0),Av=new X(0,0,1),GR={type:"added"},WR={type:"removed"};class yn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new X,n=new Vu,i=new Ta,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new He}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Tv,e)}rotateY(e){return this.rotateOnAxis(wv,e)}rotateZ(e){return this.rotateOnAxis(Av,e)}translateOnAxis(e,n){return Ev.copy(e).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tv,e)}translateY(e){return this.translateOnAxis(wv,e)}translateZ(e){return this.translateOnAxis(Av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nl.copy(e):nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(So,nl,this.up):fi.lookAt(nl,So,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),is.setFromRotationMatrix(fi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,zR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,HR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new X(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new X,di=new X,Kc=new X,hi=new X,rs=new X,ss=new X,Cv=new X,Zc=new X,Qc=new X,Jc=new X;let il=!1;class jn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),di.subVectors(i,n),Kc.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(Kc),u=di.dot(di),c=di.dot(Kc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,n,i,r,s,o,a,l){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),di.subVectors(e,n),Vn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;rs.subVectors(r,i),ss.subVectors(s,i),Zc.subVectors(e,i);const l=rs.dot(Zc),u=ss.dot(Zc);if(l<=0&&u<=0)return n.copy(i);Qc.subVectors(e,r);const c=rs.dot(Qc),d=ss.dot(Qc);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(rs,o);Jc.subVectors(e,s);const p=rs.dot(Jc),x=ss.dot(Jc);if(x>=0&&p<=x)return n.copy(s);const _=p*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(ss,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return Cv.subVectors(s,r),a=(d-c)/(d-c+(p-x)),n.copy(r).addScaledVector(Cv,a);const f=1/(m+_+h);return o=_*f,a=h*f,n.copy(i).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},rl={h:0,s:0,l:0};function ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=bR(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ef(o,s,e+1/3),this.g=ef(o,s,e),this.b=ef(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=It){const i=oS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(on(Gt.r*255,0,255))*65536+Math.round(on(Gt.g*255,0,255))*256+Math.round(on(Gt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=It){Qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==It?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(rl);const i=Vc(Oi.h,rl.h,n),r=Vc(Oi.s,rl.s,n),s=Vc(Oi.l,rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new qe;qe.NAMES=oS;let jR=0;class zu extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=ks,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=fu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xd&&(i.blendSrc=this.blendSrc),this.blendDst!==yd&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class aS extends zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new X,sl=new Ye;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_o(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_o(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_o(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_o(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pv&&(e.usage=this.usage),e}}class lS extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uS extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Br extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let XR=0;const Cn=new Ot,tf=new yn,os=new X,pn=new wa,Mo=new wa,bt=new X;class $r extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tS(e)?uS:lS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Br(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(pn.min,Mo.min),pn.expandByPoint(bt),bt.addVectors(pn.max,Mo.max),pn.expandByPoint(bt)):(pn.expandByPoint(Mo.min),pn.expandByPoint(Mo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(os.fromBufferAttribute(e,u),bt.add(os)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new X,c[E]=new X;const d=new X,h=new X,p=new X,x=new Ye,_=new Ye,m=new Ye,f=new X,v=new X;function g(E,W,Z){d.fromArray(r,E*3),h.fromArray(r,W*3),p.fromArray(r,Z*3),x.fromArray(o,E*2),_.fromArray(o,W*2),m.fromArray(o,Z*2),h.sub(d),p.sub(d),_.sub(x),m.sub(x);const ie=1/(_.x*m.y-m.x*_.y);isFinite(ie)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(ie),v.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(ie),u[E].add(f),u[W].add(f),u[Z].add(f),c[E].add(v),c[W].add(v),c[Z].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,W=y.length;E<W;++E){const Z=y[E],ie=Z.start,I=Z.count;for(let V=ie,$=ie+I;V<$;V+=3)g(i[V+0],i[V+1],i[V+2])}const w=new X,A=new X,C=new X,D=new X;function S(E){C.fromArray(s,E*3),D.copy(C);const W=u[E];w.copy(W),w.sub(C.multiplyScalar(C.dot(W))).normalize(),A.crossVectors(D,W);const ie=A.dot(c[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=ie}for(let E=0,W=y.length;E<W;++E){const Z=y[E],ie=Z.start,I=Z.count;for(let V=ie,$=ie+I;V<$;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new ai(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $r,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rv=new Ot,xr=new OR,ol=new rp,bv=new X,as=new X,ls=new X,us=new X,nf=new X,al=new X,ll=new Ye,ul=new Ye,cl=new Ye,Pv=new X,Lv=new X,Dv=new X,fl=new X,dl=new X;class Si extends yn{constructor(e=new $r,n=new aS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(nf.fromBufferAttribute(d,e),o?al.addScaledVector(nf,c):al.addScaledVector(nf.sub(n),c))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(ol.containsPoint(xr.origin)===!1&&(xr.intersectSphere(ol,bv)===null||xr.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(Rv.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Rv),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=g;y<w;y+=3){const A=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);r=hl(this,f,e,i,u,c,d,A,C,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const v=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=hl(this,o,e,i,u,c,d,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=g;y<w;y+=3){const A=y,C=y+1,D=y+2;r=hl(this,f,e,i,u,c,d,A,C,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const v=m,g=m+1,y=m+2;r=hl(this,o,e,i,u,c,d,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function YR(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;dl.copy(a),dl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(dl);return u<n.near||u>n.far?null:{distance:u,point:dl.clone(),object:t}}function hl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,as),t.getVertexPosition(l,ls),t.getVertexPosition(u,us);const c=YR(t,e,n,i,as,ls,us,fl);if(c){r&&(ll.fromBufferAttribute(r,a),ul.fromBufferAttribute(r,l),cl.fromBufferAttribute(r,u),c.uv=jn.getInterpolation(fl,as,ls,us,ll,ul,cl,new Ye)),s&&(ll.fromBufferAttribute(s,a),ul.fromBufferAttribute(s,l),cl.fromBufferAttribute(s,u),c.uv1=jn.getInterpolation(fl,as,ls,us,ll,ul,cl,new Ye),c.uv2=c.uv1),o&&(Pv.fromBufferAttribute(o,a),Lv.fromBufferAttribute(o,l),Dv.fromBufferAttribute(o,u),c.normal=jn.getInterpolation(fl,as,ls,us,Pv,Lv,Dv,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new X,materialIndex:0};jn.getNormal(as,ls,us,d.normal),c.face=d}return c}class Aa extends $r{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Br(u,3)),this.setAttribute("normal",new Br(c,3)),this.setAttribute("uv",new Br(d,2));function x(_,m,f,v,g,y,w,A,C,D,S){const E=y/C,W=w/D,Z=y/2,ie=w/2,I=A/2,V=C+1,$=D+1;let K=0,N=0;const O=new X;for(let P=0;P<$;P++){const k=P*W-ie;for(let Y=0;Y<V;Y++){const F=Y*E-Z;O[_]=F*v,O[m]=k*g,O[f]=I,u.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[f]=A>0?1:-1,c.push(O.x,O.y,O.z),d.push(Y/C),d.push(1-P/D),K+=1}}for(let P=0;P<D;P++)for(let k=0;k<C;k++){const Y=h+k+V*P,F=h+k+V*(P+1),B=h+(k+1)+V*(P+1),Q=h+(k+1)+V*P;l.push(Y,F,Q),l.push(F,B,Q),N+=6}a.addGroup(p,N,S),p+=N,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function qR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cS(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const $R={clone:Js,merge:Zt};var KR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KR,this.fragmentShader=ZR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=qR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fS extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xn extends fS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,fs=1;class QR extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(cs,fs,e,n);r.layers=this.layers,this.add(r);const s=new Xn(cs,fs,e,n);s.layers=this.layers,this.add(s);const o=new Xn(cs,fs,e,n);o.layers=this.layers,this.add(o);const a=new Xn(cs,fs,e,n);a.layers=this.layers,this.add(a);const l=new Xn(cs,fs,e,n);l.layers=this.layers,this.add(l);const u=new Xn(cs,fs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class dS extends xn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JR extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?It:Dn),this.texture=new dS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:tr});s.uniforms.tEquirect.value=n;const o=new Si(r,s),a=n.minFilter;return n.minFilter===da&&(n.minFilter=Ln),new QR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const rf=new X,eb=new X,tb=new He;class wr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rf.subVectors(i,n).cross(eb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tb.getNormalMatrix(e),r=this.coplanarPoint(rf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new rp,pl=new X;class hS{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],f=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+v).normalize(),i[3].setComponents(l-o,h-c,m-x,y-v).normalize(),i[4].setComponents(l-a,h-d,m-_,y-g).normalize(),n===yi)i[5].setComponents(l+a,h+d,m+_,y+g).normalize();else if(n===mu)i[5].setComponents(a,d,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,x=t.createBuffer();t.bindBuffer(c,x),t.bufferData(c,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,x=c.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let _=0,m=x.length;_<m;_++){const f=x[_];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class Hu extends $r{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],x=[],_=[],m=[];for(let f=0;f<c;f++){const v=f*h-o;for(let g=0;g<u;g++){const y=g*d-s;x.push(y,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const g=v+u*f,y=v+u*(f+1),w=v+1+u*(f+1),A=v+1+u*f;p.push(g,y,A),p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new Br(x,3)),this.setAttribute("normal",new Br(_,3)),this.setAttribute("uv",new Br(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ub=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ab=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_P=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,BP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$P=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_L=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ML=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:ib,alphahash_pars_fragment:rb,alphamap_fragment:sb,alphamap_pars_fragment:ob,alphatest_fragment:ab,alphatest_pars_fragment:lb,aomap_fragment:ub,aomap_pars_fragment:cb,batching_pars_vertex:fb,batching_vertex:db,begin_vertex:hb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:vb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Sb,color_fragment:Mb,color_pars_fragment:Eb,color_pars_vertex:Tb,color_vertex:wb,common:Ab,cube_uv_reflection_fragment:Cb,defaultnormal_vertex:Rb,displacementmap_pars_vertex:bb,displacementmap_vertex:Pb,emissivemap_fragment:Lb,emissivemap_pars_fragment:Db,colorspace_fragment:Nb,colorspace_pars_fragment:Ib,envmap_fragment:Ub,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Ob,envmap_pars_vertex:kb,envmap_physical_pars_fragment:Kb,envmap_vertex:Bb,fog_vertex:Vb,fog_pars_vertex:zb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Wb,lightmap_fragment:jb,lightmap_pars_fragment:Xb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:qb,lights_pars_begin:$b,lights_toon_fragment:Zb,lights_toon_pars_fragment:Qb,lights_phong_fragment:Jb,lights_phong_pars_fragment:eP,lights_physical_fragment:tP,lights_physical_pars_fragment:nP,lights_fragment_begin:iP,lights_fragment_maps:rP,lights_fragment_end:sP,logdepthbuf_fragment:oP,logdepthbuf_pars_fragment:aP,logdepthbuf_pars_vertex:lP,logdepthbuf_vertex:uP,map_fragment:cP,map_pars_fragment:fP,map_particle_fragment:dP,map_particle_pars_fragment:hP,metalnessmap_fragment:pP,metalnessmap_pars_fragment:mP,morphcolor_vertex:gP,morphnormal_vertex:vP,morphtarget_pars_vertex:_P,morphtarget_vertex:xP,normal_fragment_begin:yP,normal_fragment_maps:SP,normal_pars_fragment:MP,normal_pars_vertex:EP,normal_vertex:TP,normalmap_pars_fragment:wP,clearcoat_normal_fragment_begin:AP,clearcoat_normal_fragment_maps:CP,clearcoat_pars_fragment:RP,iridescence_pars_fragment:bP,opaque_fragment:PP,packing:LP,premultiplied_alpha_fragment:DP,project_vertex:NP,dithering_fragment:IP,dithering_pars_fragment:UP,roughnessmap_fragment:FP,roughnessmap_pars_fragment:OP,shadowmap_pars_fragment:kP,shadowmap_pars_vertex:BP,shadowmap_vertex:VP,shadowmask_pars_fragment:zP,skinbase_vertex:HP,skinning_pars_vertex:GP,skinning_vertex:WP,skinnormal_vertex:jP,specularmap_fragment:XP,specularmap_pars_fragment:YP,tonemapping_fragment:qP,tonemapping_pars_fragment:$P,transmission_fragment:KP,transmission_pars_fragment:ZP,uv_pars_fragment:QP,uv_pars_vertex:JP,uv_vertex:eL,worldpos_vertex:tL,background_vert:nL,background_frag:iL,backgroundCube_vert:rL,backgroundCube_frag:sL,cube_vert:oL,cube_frag:aL,depth_vert:lL,depth_frag:uL,distanceRGBA_vert:cL,distanceRGBA_frag:fL,equirect_vert:dL,equirect_frag:hL,linedashed_vert:pL,linedashed_frag:mL,meshbasic_vert:gL,meshbasic_frag:vL,meshlambert_vert:_L,meshlambert_frag:xL,meshmatcap_vert:yL,meshmatcap_frag:SL,meshnormal_vert:ML,meshnormal_frag:EL,meshphong_vert:TL,meshphong_frag:wL,meshphysical_vert:AL,meshphysical_frag:CL,meshtoon_vert:RL,meshtoon_frag:bL,points_vert:PL,points_frag:LL,shadow_vert:DL,shadow_frag:NL,sprite_vert:IL,sprite_frag:UL},ae={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ti={basic:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Zt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Zt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Zt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Zt([ae.common,ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Zt([ae.lights,ae.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ti.physical={uniforms:Zt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ml={r:0,b:0,g:0};function FL(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ku)?(c===void 0&&(c=new Si(new Aa(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Js(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Si(new Hu(2,2),new ur({name:"BackgroundMaterial",uniforms:Js(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(ml,cS(t)),i.buffers.color.setClear(ml.r,ml.g,ml.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function OL(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(I,V,$,K,N){let O=!1;if(o){const P=_(K,$,V);u!==P&&(u=P,p(u.object)),O=f(I,K,$,N),O&&v(I,K,$,N)}else{const P=V.wireframe===!0;(u.geometry!==K.id||u.program!==$.id||u.wireframe!==P)&&(u.geometry=K.id,u.program=$.id,u.wireframe=P,O=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,D(I,V,$,K),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,V,$){const K=$.wireframe===!0;let N=a[I.id];N===void 0&&(N={},a[I.id]=N);let O=N[V.id];O===void 0&&(O={},N[V.id]=O);let P=O[K];return P===void 0&&(P=m(h()),O[K]=P),P}function m(I){const V=[],$=[],K=[];for(let N=0;N<r;N++)V[N]=0,$[N]=0,K[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:K,object:I,attributes:{},index:null}}function f(I,V,$,K){const N=u.attributes,O=V.attributes;let P=0;const k=$.getAttributes();for(const Y in k)if(k[Y].location>=0){const B=N[Y];let Q=O[Y];if(Q===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;P++}return u.attributesNum!==P||u.index!==K}function v(I,V,$,K){const N={},O=V.attributes;let P=0;const k=$.getAttributes();for(const Y in k)if(k[Y].location>=0){let B=O[Y];B===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),N[Y]=Q,P++}u.attributes=N,u.attributesNum=P,u.index=K}function g(){const I=u.newAttributes;for(let V=0,$=I.length;V<$;V++)I[V]=0}function y(I){w(I,0)}function w(I,V){const $=u.newAttributes,K=u.enabledAttributes,N=u.attributeDivisors;$[I]=1,K[I]===0&&(t.enableVertexAttribArray(I),K[I]=1),N[I]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),N[I]=V)}function A(){const I=u.newAttributes,V=u.enabledAttributes;for(let $=0,K=V.length;$<K;$++)V[$]!==I[$]&&(t.disableVertexAttribArray($),V[$]=0)}function C(I,V,$,K,N,O,P){P===!0?t.vertexAttribIPointer(I,V,$,N,O):t.vertexAttribPointer(I,V,$,K,N,O)}function D(I,V,$,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=K.attributes,O=$.getAttributes(),P=V.defaultAttributeValues;for(const k in O){const Y=O[k];if(Y.location>=0){let F=N[k];if(F===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){const B=F.normalized,Q=F.itemSize,J=n.get(F);if(J===void 0)continue;const fe=J.buffer,Se=J.type,ve=J.bytesPerElement,Me=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||F.gpuType===Xy);if(F.isInterleavedBufferAttribute){const je=F.data,z=je.stride,qt=F.offset;if(je.isInstancedInterleavedBuffer){for(let we=0;we<Y.locationSize;we++)w(Y.location+we,je.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let we=0;we<Y.locationSize;we++)y(Y.location+we);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let we=0;we<Y.locationSize;we++)C(Y.location+we,Q/Y.locationSize,Se,B,z*ve,(qt+Q/Y.locationSize*we)*ve,Me)}else{if(F.isInstancedBufferAttribute){for(let je=0;je<Y.locationSize;je++)w(Y.location+je,F.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let je=0;je<Y.locationSize;je++)y(Y.location+je);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let je=0;je<Y.locationSize;je++)C(Y.location+je,Q/Y.locationSize,Se,B,Q*ve,Q/Y.locationSize*je*ve,Me)}}else if(P!==void 0){const B=P[k];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(Y.location,B);break;case 3:t.vertexAttrib3fv(Y.location,B);break;case 4:t.vertexAttrib4fv(Y.location,B);break;default:t.vertexAttrib1fv(Y.location,B)}}}}A()}function S(){Z();for(const I in a){const V=a[I];for(const $ in V){const K=V[$];for(const N in K)x(K[N].object),delete K[N];delete V[$]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const $ in V){const K=V[$];for(const N in K)x(K[N].object),delete K[N];delete V[$]}delete a[I.id]}function W(I){for(const V in a){const $=a[V];if($[I.id]===void 0)continue;const K=$[I.id];for(const N in K)x(K[N].object),delete K[N];delete $[I.id]}}function Z(){ie(),c=!0,u!==l&&(u=l,p(u.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:y,disableUnusedAttributes:A}}function kL(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){t.drawArrays(s,c,d),n.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,x;if(r)p=t,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,d,h),n.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],d[x]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let x=0;for(let _=0;_<h;_++)x+=d[_];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function BL(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=o||e.has("OES_texture_float"),w=g&&y,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function VL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let y=f.clippingState||null;l.value=y,y=c(x,h,g,p);for(let w=0;w!==g;++w)y[w]=n[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const f=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==_;++g,y+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zL(t){let e=new WeakMap;function n(o,a){return a===Sd?o.mapping=Ks:a===Md&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sd||a===Md)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new JR(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mS extends fS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,Nv=[.125,.215,.35,.446,.526,.582],Rr=20,sf=new mS,Iv=new qe;let of=null,af=0,lf=0;const Ar=(1+Math.sqrt(5))/2,ds=1/Ar,Uv=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Ar,ds),new X(0,Ar,-ds),new X(ds,0,Ar),new X(-ds,0,Ar),new X(Ar,ds,0),new X(-Ar,ds,0)];class Fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ha,format:qn,colorSpace:Pi,depthBuffer:!1},r=Ov(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ov(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HL(s)),this._blurMaterial=GL(s,e,n)}return r}_compileMaterial(e){const n=new Si(this._lodPlanes[0],e);this._renderer.compile(n,sf)}_sceneToCubeUV(e,n,i,r){const a=new Xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Iv),c.toneMapping=nr,c.autoClear=!1;const p=new aS({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new Si(new Aa,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Iv),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;gl(r,v*g,f>2?g:0,g,g),c.setRenderTarget(r),_&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uv[(r-1)%Uv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Si(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),_=s/x,m=isFinite(s)?1+Math.floor(c*_):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const f=[];let v=0;for(let C=0;C<Rr;++C){const D=C/_,S=Math.exp(-D*D/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const y=this._sizeLods[r],w=3*y*(r>g-Ps?r-g+Ps:0),A=4*(this._cubeSize-y);gl(n,w,A,3*y,2*y),l.setRenderTarget(n),l.render(d,sf)}}function HL(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+Nv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ps?l=Nv[o-t+Ps-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,_=3,m=2,f=1,v=new Float32Array(_*x*p),g=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];v.set(S,_*x*A),g.set(h,m*x*A);const E=[A,A,A,A,A,A];y.set(E,f*x*A)}const w=new $r;w.setAttribute("position",new ai(v,_)),w.setAttribute("uv",new ai(g,m)),w.setAttribute("faceIndex",new ai(y,f)),e.push(w),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ov(t,e,n){const i=new jr(t,e,n);return i.texture.mapping=ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GL(t,e,n){const i=new Float32Array(Rr),r=new X(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function kv(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Bv(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Sd||l===Md,c=l===Ks||l===Zs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Fv(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Fv(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function jL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XL(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const _=p[x];for(let m=0,f=_.length;m<f;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,y=v.length;g<y;g+=3){const w=v[g+0],A=v[g+1],C=v[g+2];h.push(w,A,A,C,C,w)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const w=g+0,A=g+1,C=g+2;h.push(w,A,A,C,C,w)}}else return;const m=new(tS(h)?uS:lS)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function YL(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){t.drawElements(s,x,a,p*l),n.update(x,s,1)}function d(p,x,_){if(_===0)return;let m,f;if(r)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,_),n.update(x,s,_)}function h(p,x,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,_);let f=0;for(let v=0;v<_;v++)f+=x[v];n.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function qL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $L(t,e){return t[0]-e[0]}function KL(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ZL(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let V=function(){ie.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var p=V;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let E=c.attributes.position.count*S,W=1;E>e.maxTextureSize&&(W=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Z=new Float32Array(E*W*4*_),ie=new rS(Z,E,W,_);ie.type=Xi,ie.needsUpdate=!0;const I=S*4;for(let $=0;$<_;$++){const K=A[$],N=C[$],O=D[$],P=E*W*4*$;for(let k=0;k<K.count;k++){const Y=k*I;g===!0&&(o.fromBufferAttribute(K,k),Z[P+Y+0]=o.x,Z[P+Y+1]=o.y,Z[P+Y+2]=o.z,Z[P+Y+3]=0),y===!0&&(o.fromBufferAttribute(N,k),Z[P+Y+4]=o.x,Z[P+Y+5]=o.y,Z[P+Y+6]=o.z,Z[P+Y+7]=0),w===!0&&(o.fromBufferAttribute(O,k),Z[P+Y+8]=o.x,Z[P+Y+9]=o.y,Z[P+Y+10]=o.z,Z[P+Y+11]=O.itemSize===4?o.w:1)}}m={count:_,texture:ie,size:new Ye(E,W)},s.set(c,m),c.addEventListener("dispose",V)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<x;y++){const w=_[y];w[0]=y,w[1]=h[y]}_.sort(KL);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort($L);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=a[y],A=w[0],C=w[1];A!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+y)!==m[A]&&c.setAttribute("morphTarget"+y,m[A]),f&&c.getAttribute("morphNormal"+y)!==f[A]&&c.setAttribute("morphNormal"+y,f[A]),r[y]=C,v+=C):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const g=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function QL(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class gS extends xn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Or,c!==Or&&c!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Or&&(i=ji),i===void 0&&c===Qs&&(i=Fr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vS=new xn,_S=new gS(1,1);_S.compareFunction=eS;const xS=new rS,yS=new UR,SS=new dS,Vv=[],zv=[],Hv=new Float32Array(16),Gv=new Float32Array(9),Wv=new Float32Array(4);function oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vv[r];if(s===void 0&&(s=new Float32Array(r),Vv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gu(t,e){let n=zv[e];n===void 0&&(n=new Int32Array(e),zv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Wv.set(i),t.uniformMatrix2fv(this.addr,!1,Wv),At(n,i)}}function r2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Gv.set(i),t.uniformMatrix3fv(this.addr,!1,Gv),At(n,i)}}function s2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Hv.set(i),t.uniformMatrix4fv(this.addr,!1,Hv),At(n,i)}}function o2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?_S:vS;n.setTexture2D(e||s,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yS,r)}function g2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||SS,r)}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xS,r)}function _2(t){switch(t){case 5126:return JL;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return o2;case 35667:case 35671:return a2;case 35668:case 35672:return l2;case 35669:case 35673:return u2;case 5125:return c2;case 36294:return f2;case 36295:return d2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return v2}}function x2(t,e){t.uniform1fv(this.addr,e)}function y2(t,e){const n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function S2(t,e){const n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function M2(t,e){const n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function E2(t,e){const n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function T2(t,e){const n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function w2(t,e){const n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function A2(t,e){t.uniform1iv(this.addr,e)}function C2(t,e){t.uniform2iv(this.addr,e)}function R2(t,e){t.uniform3iv(this.addr,e)}function b2(t,e){t.uniform4iv(this.addr,e)}function P2(t,e){t.uniform1uiv(this.addr,e)}function L2(t,e){t.uniform2uiv(this.addr,e)}function D2(t,e){t.uniform3uiv(this.addr,e)}function N2(t,e){t.uniform4uiv(this.addr,e)}function I2(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||vS,s[o])}function U2(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||yS,s[o])}function F2(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||SS,s[o])}function O2(t,e,n){const i=this.cache,r=e.length,s=Gu(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||xS,s[o])}function k2(t){switch(t){case 5126:return x2;case 35664:return y2;case 35665:return S2;case 35666:return M2;case 35674:return E2;case 35675:return T2;case 35676:return w2;case 5124:case 35670:return A2;case 35667:case 35671:return C2;case 35668:case 35672:return R2;case 35669:case 35673:return b2;case 5125:return P2;case 36294:return L2;case 36295:return D2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return O2}}class B2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_2(n.type)}}class V2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function jv(t,e){t.seq.push(e),t.map[e.id]=e}function H2(t,e,n){const i=t.name,r=i.length;for(uf.lastIndex=0;;){const s=uf.exec(i),o=uf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){jv(n,u===void 0?new B2(a,t,e):new V2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new z2(a),jv(n,d)),n=d}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);H2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const G2=37297;let W2=0;function j2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function X2(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===pu&&n===hu?i="LinearDisplayP3ToLinearSRGB":e===hu&&n===pu&&(i="LinearSRGBToLinearDisplayP3"),t){case Pi:case Bu:return[i,"LinearTransferOETF"];case It:case ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+j2(t.getShaderSource(e),o)}else return r}function Y2(t,e){const n=X2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function q2(t,e){let n;switch(e){case iR:n="Linear";break;case rR:n="Reinhard";break;case sR:n="OptimizedCineon";break;case oR:n="ACESFilmic";break;case lR:n="AgX";break;case aR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function K2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function Z2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ls(t){return t!==""}function qv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(t){return t.replace(J2,tD)}const eD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tD(t,e){let n=Fe[e];if(n===void 0){const i=eD.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const nD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(t){return t.replace(nD,iD)}function iD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===LC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function sD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function aD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wy:e="ENVMAP_BLENDING_MULTIPLY";break;case tR:e="ENVMAP_BLENDING_MIX";break;case nR:e="ENVMAP_BLENDING_ADD";break}return e}function lD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rD(n),u=sD(n),c=oD(n),d=aD(n),h=lD(n),p=n.isWebGL2?"":$2(n),x=K2(n),_=Z2(s),m=r.createProgram();let f,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ls).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ls).join(`
`),v.length>0&&(v+=`
`)):(f=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),v=[p,Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==nr?q2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Y2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Rd(o),o=qv(o,n),o=$v(o,n),a=Rd(a),a=qv(a,n),a=$v(a,n),o=Kv(o),a=Kv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=g+f+o,w=g+v+a,A=Xv(r,r.VERTEX_SHADER,y),C=Xv(r,r.FRAGMENT_SHADER,w);r.attachShader(m,A),r.attachShader(m,C),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(Z){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(A).trim(),V=r.getShaderInfoLog(C).trim();let $=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,C);else{const N=Yv(r,A,"vertex"),O=Yv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+N+`
`+O)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(I===""||V==="")&&(K=!1);K&&(Z.diagnostics={runnable:$,programLog:ie,vertexShader:{log:I,prefix:f},fragmentShader:{log:V,prefix:v}})}r.deleteShader(A),r.deleteShader(C),S=new Nl(r,m),E=Q2(r,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,G2)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=C,this}let cD=0;class fD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dD(e),n.set(e,i)),i}}class dD{constructor(e){this.id=cD++,this.code=e,this.usedTimes=0}}function hD(t,e,n,i,r,s,o){const a=new sS,l=new fD,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,E,W,Z,ie){const I=Z.fog,V=ie.geometry,$=S.isMeshStandardMaterial?Z.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),N=K&&K.mapping===ku?K.image.height:null,O=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const P=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,k=P!==void 0?P.length:0;let Y=0;V.morphAttributes.position!==void 0&&(Y=1),V.morphAttributes.normal!==void 0&&(Y=2),V.morphAttributes.color!==void 0&&(Y=3);let F,B,Q,J;if(O){const $t=ti[O];F=$t.vertexShader,B=$t.fragmentShader}else F=S.vertexShader,B=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),J=l.getFragmentShaderID(S);const fe=t.getRenderTarget(),Se=ie.isInstancedMesh===!0,ve=ie.isBatchedMesh===!0,Me=!!S.map,je=!!S.matcap,z=!!K,qt=!!S.aoMap,we=!!S.lightMap,De=!!S.bumpMap,_e=!!S.normalMap,lt=!!S.displacementMap,Oe=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,G=S.anisotropy>0,re=S.clearcoat>0,te=S.iridescence>0,se=S.sheen>0,xe=S.transmission>0,ce=G&&!!S.anisotropyMap,me=re&&!!S.clearcoatMap,Re=re&&!!S.clearcoatNormalMap,ke=re&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,Ze=te&&!!S.iridescenceThicknessMap,Ge=se&&!!S.sheenColorMap,Le=se&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,ge=!!S.specularColorMap,Ue=!!S.specularIntensityMap,$e=xe&&!!S.transmissionMap,pt=xe&&!!S.thicknessMap,Ve=!!S.gradientMap,oe=!!S.alphaMap,L=S.alphaTest>0,le=!!S.alphaHash,ue=!!S.extensions,be=!!V.attributes.uv1,Ae=!!V.attributes.uv2,Je=!!V.attributes.uv3;let et=nr;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:c,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:F,fragmentShader:B,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ve,instancing:Se,instancingColor:Se&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Pi,map:Me,matcap:je,envMap:z,envMapMode:z&&K.mapping,envMapCubeUVHeight:N,aoMap:qt,lightMap:we,bumpMap:De,normalMap:_e,displacementMap:h&&lt,emissiveMap:Oe,normalMapObjectSpace:_e&&S.normalMapType===SR,normalMapTangentSpace:_e&&S.normalMapType===yR,metalnessMap:R,roughnessMap:M,anisotropy:G,anisotropyMap:ce,clearcoat:re,clearcoatMap:me,clearcoatNormalMap:Re,clearcoatRoughnessMap:ke,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Ze,sheen:se,sheenColorMap:Ge,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:ge,specularIntensityMap:Ue,transmission:xe,transmissionMap:$e,thicknessMap:pt,gradientMap:Ve,opaque:S.transparent===!1&&S.blending===ks,alphaMap:oe,alphaTest:L,alphaHash:le,combine:S.combine,mapUv:Me&&_(S.map.channel),aoMapUv:qt&&_(S.aoMap.channel),lightMapUv:we&&_(S.lightMap.channel),bumpMapUv:De&&_(S.bumpMap.channel),normalMapUv:_e&&_(S.normalMap.channel),displacementMapUv:lt&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(S.sheenRoughnessMap.channel),specularMapUv:Ee&&_(S.specularMap.channel),specularColorMapUv:ge&&_(S.specularColorMap.channel),specularIntensityMapUv:Ue&&_(S.specularIntensityMap.channel),transmissionMapUv:$e&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:oe&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Ae,vertexUv3s:Je,pointsUvs:ie.isPoints===!0&&!!V.attributes.uv&&(Me||oe),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Y,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vi,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)E.push(W),E.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(v(E,S),g(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function g(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=x[S.type];let W;if(E){const Z=ti[E];W=$R.clone(Z.uniforms)}else W=S.uniforms;return W}function w(S,E){let W;for(let Z=0,ie=u.length;Z<ie;Z++){const I=u[Z];if(I.cacheKey===E){W=I,++W.usedTimes;break}}return W===void 0&&(W=new uD(t,E,S,s),u.push(W)),W}function A(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:D}}function pD(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function mD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,_,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||mD),i.length>1&&i.sort(h||Qv),r.length>1&&r.sort(h||Qv)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function gD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jv,t.set(i,[o])):r>=s.length?(o=new Jv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new qe};break;case"SpotLight":n={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function _D(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xD=0;function yD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SD(t,e){const n=new vD,i=_D(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,o=new Ot,a=new Ot;function l(c,d){let h=0,p=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,m=0,f=0,v=0,g=0,y=0,w=0,A=0,C=0,D=0,S=0;c.sort(yD);const E=d===!0?Math.PI:1;for(let Z=0,ie=c.length;Z<ie;Z++){const I=c[Z],V=I.color,$=I.intensity,K=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*$*E,p+=V.g*$*E,x+=V.b*$*E;else if(I.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],$);S++}else if(I.isDirectionalLight){const O=n.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const P=I.shadow,k=i.get(I);k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,r.directionalShadow[_]=k,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=I.shadow.matrix,y++}r.directional[_]=O,_++}else if(I.isSpotLight){const O=n.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(V).multiplyScalar($*E),O.distance=K,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[f]=O;const P=I.shadow;if(I.map&&(r.spotLightMap[C]=I.map,C++,P.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[f]=P.matrix,I.castShadow){const k=i.get(I);k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,r.spotShadow[f]=k,r.spotShadowMap[f]=N,A++}f++}else if(I.isRectAreaLight){const O=n.get(I);O.color.copy(V).multiplyScalar($),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=O,v++}else if(I.isPointLight){const O=n.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),O.distance=I.distance,O.decay=I.decay,I.castShadow){const P=I.shadow,k=i.get(I);k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,k.shadowCameraNear=P.camera.near,k.shadowCameraFar=P.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=I.shadow.matrix,w++}r.point[m]=O,m++}else if(I.isHemisphereLight){const O=n.get(I);O.skyColor.copy(I.color).multiplyScalar($*E),O.groundColor.copy(I.groundColor).multiplyScalar($*E),r.hemi[g]=O,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==_||W.pointLength!==m||W.spotLength!==f||W.rectAreaLength!==v||W.hemiLength!==g||W.numDirectionalShadows!==y||W.numPointShadows!==w||W.numSpotShadows!==A||W.numSpotMaps!==C||W.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+C-D,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,W.directionalLength=_,W.pointLength=m,W.spotLength=f,W.rectAreaLength=v,W.hemiLength=g,W.numDirectionalShadows=y,W.numPointShadows=w,W.numSpotShadows=A,W.numSpotMaps=C,W.numLightProbes=S,r.version=xD++)}function u(c,d){let h=0,p=0,x=0,_=0,m=0;const f=d.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const y=c[v];if(y.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function e0(t,e){const n=new SD(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function MD(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new e0(t,e),n.set(s,[l])):o>=a.length?(l=new e0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class ED extends zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_R,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TD extends zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CD(t,e,n){let i=new hS;const r=new Ye,s=new Ye,o=new Ut,a=new ED({depthPacking:xR}),l=new TD,u={},c=n.maxTextureSize,d={[lr]:fn,[fn]:lr,[vi]:vi},h=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:wD,fragmentShader:AD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new $r;x.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gy;let f=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(tr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=f!==pi&&this.type===pi,I=f===pi&&this.type!==pi;for(let V=0,$=A.length;V<$;V++){const K=A[V],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||ie===!0||I===!0){const k=this.type!==pi?{minFilter:Jt,magFilter:Jt}:{};N.map!==null&&N.map.dispose(),N.map=new jr(r.x,r.y,k),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const P=N.getViewportCount();for(let k=0;k<P;k++){const Y=N.getViewport(k);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),Z.viewport(o),N.updateMatrices(K,k),i=N.getFrustum(),y(C,D,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===pi&&v(N,D),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,E,W)};function v(A,C){const D=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,D,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,D,p,_,null)}function g(A,C,D,S){let E=null;const W=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(W!==void 0)E=W;else if(E=D.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=E.uuid,ie=C.uuid;let I=u[Z];I===void 0&&(I={},u[Z]=I);let V=I[ie];V===void 0&&(V=E.clone(),I[ie]=V,C.addEventListener("dispose",w)),E=V}if(E.visible=C.visible,E.wireframe=C.wireframe,S===pi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=t.properties.get(E);Z.light=D}return E}function y(A,C,D,S,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),I=A.material;if(Array.isArray(I)){const V=ie.groups;for(let $=0,K=V.length;$<K;$++){const N=V[$],O=I[N.materialIndex];if(O&&O.visible){const P=g(A,O,S,E);A.onBeforeShadow(t,A,C,D,ie,P,N),t.renderBufferDirect(D,null,ie,P,A,N),A.onAfterShadow(t,A,C,D,ie,P,N)}}}else if(I.visible){const V=g(A,I,S,E);A.onBeforeShadow(t,A,C,D,ie,V,null),t.renderBufferDirect(D,null,ie,V,A,null),A.onAfterShadow(t,A,C,D,ie,V,null)}}const Z=A.children;for(let ie=0,I=Z.length;ie<I;ie++)y(Z[ie],C,D,S,E)}function w(A){A.target.removeEventListener("dispose",w);for(const D in u){const S=u[D],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function RD(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const le=new Ut;let ue=null;const be=new Ut(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!L&&(t.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,Je,et,Ct,$t){$t===!0&&(Ae*=Ct,Je*=Ct,et*=Ct),le.set(Ae,Je,et,Ct),be.equals(le)===!1&&(t.clearColor(Ae,Je,et,Ct),be.copy(le))},reset:function(){L=!1,ue=null,be.set(-1,0,0,0)}}}function s(){let L=!1,le=null,ue=null,be=null;return{setTest:function(Ae){Ae?ve(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(Ae){le!==Ae&&!L&&(t.depthMask(Ae),le=Ae)},setFunc:function(Ae){if(ue!==Ae){switch(Ae){case qC:t.depthFunc(t.NEVER);break;case $C:t.depthFunc(t.ALWAYS);break;case KC:t.depthFunc(t.LESS);break;case fu:t.depthFunc(t.LEQUAL);break;case ZC:t.depthFunc(t.EQUAL);break;case QC:t.depthFunc(t.GEQUAL);break;case JC:t.depthFunc(t.GREATER);break;case eR:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){be!==Ae&&(t.clearDepth(Ae),be=Ae)},reset:function(){L=!1,le=null,ue=null,be=null}}}function o(){let L=!1,le=null,ue=null,be=null,Ae=null,Je=null,et=null,Ct=null,$t=null;return{setTest:function(tt){L||(tt?ve(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(tt){le!==tt&&!L&&(t.stencilMask(tt),le=tt)},setFunc:function(tt,Kt,Qn){(ue!==tt||be!==Kt||Ae!==Qn)&&(t.stencilFunc(tt,Kt,Qn),ue=tt,be=Kt,Ae=Qn)},setOp:function(tt,Kt,Qn){(Je!==tt||et!==Kt||Ct!==Qn)&&(t.stencilOp(tt,Kt,Qn),Je=tt,et=Kt,Ct=Qn)},setLocked:function(tt){L=tt},setClear:function(tt){$t!==tt&&(t.clearStencil(tt),$t=tt)},reset:function(){L=!1,le=null,ue=null,be=null,Ae=null,Je=null,et=null,Ct=null,$t=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,_=[],m=null,f=!1,v=null,g=null,y=null,w=null,A=null,C=null,D=null,S=new qe(0,0,0),E=0,W=!1,Z=null,ie=null,I=null,V=null,$=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=O>=1):P.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=O>=2);let k=null,Y={};const F=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),Q=new Ut().fromArray(F),J=new Ut().fromArray(B);function fe(L,le,ue,be){const Ae=new Uint8Array(4),Je=t.createTexture();t.bindTexture(L,Je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ue;et++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(le+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return Je}const Se={};Se[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(t.DEPTH_TEST),l.setFunc(fu),Oe(!1),R(Ug),ve(t.CULL_FACE),_e(tr);function ve(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Me(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function je(L,le){return p[L]!==le?(t.bindFramebuffer(L,le),p[L]=le,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function z(L,le){let ue=_,be=!1;if(L)if(ue=x.get(le),ue===void 0&&(ue=[],x.set(le,ue)),L.isWebGLMultipleRenderTargets){const Ae=L.texture;if(ue.length!==Ae.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=Ae.length;Je<et;Je++)ue[Je]=t.COLOR_ATTACHMENT0+Je;ue.length=Ae.length,be=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,be=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function qt(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const we={[Cr]:t.FUNC_ADD,[NC]:t.FUNC_SUBTRACT,[IC]:t.FUNC_REVERSE_SUBTRACT};if(i)we[Bg]=t.MIN,we[Vg]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Bg]=L.MIN_EXT,we[Vg]=L.MAX_EXT)}const De={[UC]:t.ZERO,[FC]:t.ONE,[OC]:t.SRC_COLOR,[xd]:t.SRC_ALPHA,[GC]:t.SRC_ALPHA_SATURATE,[zC]:t.DST_COLOR,[BC]:t.DST_ALPHA,[kC]:t.ONE_MINUS_SRC_COLOR,[yd]:t.ONE_MINUS_SRC_ALPHA,[HC]:t.ONE_MINUS_DST_COLOR,[VC]:t.ONE_MINUS_DST_ALPHA,[WC]:t.CONSTANT_COLOR,[jC]:t.ONE_MINUS_CONSTANT_COLOR,[XC]:t.CONSTANT_ALPHA,[YC]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(L,le,ue,be,Ae,Je,et,Ct,$t,tt){if(L===tr){f===!0&&(Me(t.BLEND),f=!1);return}if(f===!1&&(ve(t.BLEND),f=!0),L!==DC){if(L!==v||tt!==W){if((g!==Cr||A!==Cr)&&(t.blendEquation(t.FUNC_ADD),g=Cr,A=Cr),tt)switch(L){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fg:t.blendFunc(t.ONE,t.ONE);break;case Og:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Og:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,w=null,C=null,D=null,S.set(0,0,0),E=0,v=L,W=tt}return}Ae=Ae||le,Je=Je||ue,et=et||be,(le!==g||Ae!==A)&&(t.blendEquationSeparate(we[le],we[Ae]),g=le,A=Ae),(ue!==y||be!==w||Je!==C||et!==D)&&(t.blendFuncSeparate(De[ue],De[be],De[Je],De[et]),y=ue,w=be,C=Je,D=et),(Ct.equals(S)===!1||$t!==E)&&(t.blendColor(Ct.r,Ct.g,Ct.b,$t),S.copy(Ct),E=$t),v=L,W=!1}function lt(L,le){L.side===vi?Me(t.CULL_FACE):ve(t.CULL_FACE);let ue=L.side===fn;le&&(ue=!ue),Oe(ue),L.blending===ks&&L.transparent===!1?_e(tr):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const be=L.stencilWrite;u.setTest(be),be&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){Z!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Z=L)}function R(L){L!==bC?(ve(t.CULL_FACE),L!==ie&&(L===Ug?t.cullFace(t.BACK):L===PC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),ie=L}function M(L){L!==I&&(N&&t.lineWidth(L),I=L)}function G(L,le,ue){L?(ve(t.POLYGON_OFFSET_FILL),(V!==le||$!==ue)&&(t.polygonOffset(le,ue),V=le,$=ue)):Me(t.POLYGON_OFFSET_FILL)}function re(L){L?ve(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+K-1),k!==L&&(t.activeTexture(L),k=L)}function se(L,le,ue){ue===void 0&&(k===null?ue=t.TEXTURE0+K-1:ue=k);let be=Y[ue];be===void 0&&(be={type:void 0,texture:void 0},Y[ue]=be),(be.type!==L||be.texture!==le)&&(k!==ue&&(t.activeTexture(ue),k=ue),t.bindTexture(L,le||Se[L]),be.type=L,be.texture=le)}function xe(){const L=Y[k];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){Q.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function $e(L){J.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function pt(L,le){let ue=d.get(le);ue===void 0&&(ue=new WeakMap,d.set(le,ue));let be=ue.get(L);be===void 0&&(be=t.getUniformBlockIndex(le,L.name),ue.set(L,be))}function Ve(L,le){const be=d.get(le).get(L);c.get(le)!==be&&(t.uniformBlockBinding(le,be,L.__bindingPointIndex),c.set(le,be))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},k=null,Y={},p={},x=new WeakMap,_=[],m=null,f=!1,v=null,g=null,y=null,w=null,A=null,C=null,D=null,S=new qe(0,0,0),E=0,W=!1,Z=null,ie=null,I=null,V=null,$=null,Q.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:Me,bindFramebuffer:je,drawBuffers:z,useProgram:qt,setBlending:_e,setMaterial:lt,setFlipSided:Oe,setCullFace:R,setLineWidth:M,setPolygonOffset:G,setScissorTest:re,activeTexture:te,bindTexture:se,unbindTexture:xe,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:Ee,texImage3D:ge,updateUBOMapping:pt,uniformBlockBinding:Ve,texStorage2D:Ge,texStorage3D:Le,texSubImage2D:Re,texSubImage3D:ke,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ze,scissor:Ue,viewport:$e,reset:oe}}function bD(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return p?new OffscreenCanvas(R,M):gu("canvas")}function _(R,M,G,re){let te=1;if((R.width>re||R.height>re)&&(te=re/Math.max(R.width,R.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const se=M?Cd:Math.floor,xe=se(te*R.width),ce=se(te*R.height);d===void 0&&(d=x(xe,ce));const me=G?x(xe,ce):d;return me.width=xe,me.height=ce,me.getContext("2d").drawImage(R,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+ce+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return gv(R.width)&&gv(R.height)}function f(R){return a?!1:R.wrapS!==Yn||R.wrapT!==Yn||R.minFilter!==Jt&&R.minFilter!==Ln}function v(R,M){return R.generateMipmaps&&M&&R.minFilter!==Jt&&R.minFilter!==Ln}function g(R){t.generateMipmap(R)}function y(R,M,G,re,te=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=M;if(M===t.RED&&(G===t.FLOAT&&(se=t.R32F),G===t.HALF_FLOAT&&(se=t.R16F),G===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.R8UI),G===t.UNSIGNED_SHORT&&(se=t.R16UI),G===t.UNSIGNED_INT&&(se=t.R32UI),G===t.BYTE&&(se=t.R8I),G===t.SHORT&&(se=t.R16I),G===t.INT&&(se=t.R32I)),M===t.RG&&(G===t.FLOAT&&(se=t.RG32F),G===t.HALF_FLOAT&&(se=t.RG16F),G===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA){const xe=te?du:Qe.getTransfer(re);G===t.FLOAT&&(se=t.RGBA32F),G===t.HALF_FLOAT&&(se=t.RGBA16F),G===t.UNSIGNED_BYTE&&(se=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(R,M,G){return v(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===Jt||R===zg||R===Nc?t.NEAREST:t.LINEAR}function C(R){const M=R.target;M.removeEventListener("dispose",C),S(M),M.isVideoTexture&&c.delete(M)}function D(R){const M=R.target;M.removeEventListener("dispose",D),W(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const G=R.source,re=h.get(G);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(R),Object.keys(re).length===0&&h.delete(G)}i.remove(R)}function E(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const G=R.source,re=h.get(G);delete re[M.__cacheKey],o.memory.textures--}function W(R){const M=R.texture,G=i.get(R),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(G.__webglFramebuffer[te]))for(let se=0;se<G.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(G.__webglFramebuffer[te][se]);else t.deleteFramebuffer(G.__webglFramebuffer[te]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[te])}else{if(Array.isArray(G.__webglFramebuffer))for(let te=0;te<G.__webglFramebuffer.length;te++)t.deleteFramebuffer(G.__webglFramebuffer[te]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const xe=i.get(M[te]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(R)}let Z=0;function ie(){Z=0}function I(){const R=Z;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Z+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const G=i.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,R,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function K(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function N(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function O(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const P={[Ed]:t.REPEAT,[Yn]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},k={[Jt]:t.NEAREST,[zg]:t.NEAREST_MIPMAP_NEAREST,[Nc]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[uR]:t.LINEAR_MIPMAP_NEAREST,[da]:t.LINEAR_MIPMAP_LINEAR},Y={[MR]:t.NEVER,[RR]:t.ALWAYS,[ER]:t.LESS,[eS]:t.LEQUAL,[TR]:t.EQUAL,[CR]:t.GEQUAL,[wR]:t.GREATER,[AR]:t.NOTEQUAL};function F(R,M,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,P[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,P[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,P[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,k[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,k[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Yn||M.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Jt&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Jt||M.minFilter!==Nc&&M.minFilter!==da||M.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ha&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function B(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const re=M.source;let te=h.get(re);te===void 0&&(te={},h.set(re,te));const se=V(M);if(se!==R.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[se].usedTimes++;const xe=te[R.__cacheKey];xe!==void 0&&(te[R.__cacheKey].usedTimes--,xe.usedTimes===0&&E(M)),R.__cacheKey=se,R.__webglTexture=te[se].texture}return G}function Q(R,M,G){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=B(R,M),se=M.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+G);const xe=i.get(se);if(se.version!==xe.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const ce=Qe.getPrimaries(Qe.workingColorSpace),me=M.colorSpace===Dn?null:Qe.getPrimaries(M.colorSpace),Re=M.colorSpace===Dn||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ke=f(M)&&m(M.image)===!1;let ee=_(M.image,ke,!1,r.maxTextureSize);ee=Oe(M,ee);const Ze=m(ee)||a,Ge=s.convert(M.format,M.colorSpace);let Le=s.convert(M.type),Ee=y(M.internalFormat,Ge,Le,M.colorSpace,M.isVideoTexture);F(re,M,Ze);let ge;const Ue=M.mipmaps,$e=a&&M.isVideoTexture!==!0&&Ee!==Qy,pt=xe.__version===void 0||te===!0,Ve=w(M,ee,Ze);if(M.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?M.type===Xi?Ee=t.DEPTH_COMPONENT32F:M.type===ji?Ee=t.DEPTH_COMPONENT24:M.type===Fr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:M.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Or&&Ee===t.DEPTH_COMPONENT&&M.type!==np&&M.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ji,Le=s.convert(M.type)),M.format===Qs&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,M.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Fr,Le=s.convert(M.type))),pt&&($e?n.texStorage2D(t.TEXTURE_2D,1,Ee,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ge,Le,null));else if(M.isDataTexture)if(Ue.length>0&&Ze){$e&&pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ee,Ue[0].width,Ue[0].height);for(let oe=0,L=Ue.length;oe<L;oe++)ge=Ue[oe],$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,Ge,Le,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,Ge,Le,ge.data);M.generateMipmaps=!1}else $e?(pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ee,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ge,Le,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ge,Le,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ee,Ue[0].width,Ue[0].height,ee.depth);for(let oe=0,L=Ue.length;oe<L;oe++)ge=Ue[oe],M.format!==qn?Ge!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ee.depth,Ge,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ee.depth,Ge,Le,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,ee.depth,0,Ge,Le,ge.data)}else{$e&&pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ee,Ue[0].width,Ue[0].height);for(let oe=0,L=Ue.length;oe<L;oe++)ge=Ue[oe],M.format!==qn?Ge!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,Ge,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ge.width,ge.height,Ge,Le,ge.data):n.texImage2D(t.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,Ge,Le,ge.data)}else if(M.isDataArrayTexture)$e?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ee,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Le,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,Ge,Le,ee.data);else if(M.isData3DTexture)$e?(pt&&n.texStorage3D(t.TEXTURE_3D,Ve,Ee,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Le,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,Ge,Le,ee.data);else if(M.isFramebufferTexture){if(pt)if($e)n.texStorage2D(t.TEXTURE_2D,Ve,Ee,ee.width,ee.height);else{let oe=ee.width,L=ee.height;for(let le=0;le<Ve;le++)n.texImage2D(t.TEXTURE_2D,le,Ee,oe,L,0,Ge,Le,null),oe>>=1,L>>=1}}else if(Ue.length>0&&Ze){$e&&pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ee,Ue[0].width,Ue[0].height);for(let oe=0,L=Ue.length;oe<L;oe++)ge=Ue[oe],$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ge,Le,ge):n.texImage2D(t.TEXTURE_2D,oe,Ee,Ge,Le,ge);M.generateMipmaps=!1}else $e?(pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ee,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,Le,ee)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ge,Le,ee);v(M,Ze)&&g(re),xe.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,G){if(M.image.length!==6)return;const re=B(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+G);const xe=Qe.getPrimaries(Qe.workingColorSpace),ce=M.colorSpace===Dn?null:Qe.getPrimaries(M.colorSpace),me=M.colorSpace===Dn||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!Re&&!ke?ee[oe]=_(M.image[oe],!1,!0,r.maxCubemapSize):ee[oe]=ke?M.image[oe].image:M.image[oe],ee[oe]=Oe(M,ee[oe]);const Ze=ee[0],Ge=m(Ze)||a,Le=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),ge=y(M.internalFormat,Le,Ee,M.colorSpace),Ue=a&&M.isVideoTexture!==!0,$e=se.__version===void 0||re===!0;let pt=w(M,Ze,Ge);F(t.TEXTURE_CUBE_MAP,M,Ge);let Ve;if(Re){Ue&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ge,Ze.width,Ze.height);for(let oe=0;oe<6;oe++){Ve=ee[oe].mipmaps;for(let L=0;L<Ve.length;L++){const le=Ve[L];M.format!==qn?Le!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,le.width,le.height,Le,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,le.width,le.height,Le,Ee,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,ge,le.width,le.height,0,Le,Ee,le.data)}}}else{Ve=M.mipmaps,Ue&&$e&&(Ve.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ge,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(ke){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Le,Ee,ee[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ge,ee[oe].width,ee[oe].height,0,Le,Ee,ee[oe].data);for(let L=0;L<Ve.length;L++){const ue=Ve[L].image[oe].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,ue.width,ue.height,Le,Ee,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,ge,ue.width,ue.height,0,Le,Ee,ue.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,Ee,ee[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ge,Le,Ee,ee[oe]);for(let L=0;L<Ve.length;L++){const le=Ve[L];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,Le,Ee,le.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,ge,Le,Ee,le.image[oe])}}}v(M,Ge)&&g(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function fe(R,M,G,re,te,se){const xe=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),me=y(G.internalFormat,xe,ce,G.colorSpace);if(!i.get(M).__hasExternalTextures){const ke=Math.max(1,M.width>>se),ee=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,me,ke,ee,M.depth,0,xe,ce,null):n.texImage2D(te,se,me,ke,ee,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(G).__webglTexture,0,De(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(G).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(R,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||_e(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Xi?re=t.DEPTH_COMPONENT32F:te.type===ji&&(re=t.DEPTH_COMPONENT24));const se=De(M);_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const re=De(M);G&&_e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],xe=s.convert(se.format,se.colorSpace),ce=s.convert(se.type),me=y(se.internalFormat,xe,ce,se.colorSpace),Re=De(M);G&&_e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,me,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=De(M);if(M.depthTexture.format===Or)_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Qs)_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Me(R){const M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),Se(M.__webglDepthbuffer[re],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Se(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,M,G){const re=i.get(R);M!==void 0&&fe(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Me(R)}function z(R){const M=R.texture,G=i.get(R),re=i.get(M);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,xe=m(R)||a;if(te){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)G.__webglFramebuffer[ce][me]=t.createFramebuffer()}else G.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)G.__webglFramebuffer[ce]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const ce=R.texture;for(let me=0,Re=ce.length;me<Re;me++){const ke=i.get(ce[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&_e(R)===!1){const ce=se?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const Re=ce[me];G.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const ke=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),Ze=y(Re.internalFormat,ke,ee,Re.colorSpace,R.isXRRenderTarget===!0),Ge=De(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,G.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),F(t.TEXTURE_CUBE_MAP,M,xe);for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)fe(G.__webglFramebuffer[ce][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else fe(G.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(M,xe)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const ce=R.texture;for(let me=0,Re=ce.length;me<Re;me++){const ke=ce[me],ee=i.get(ke);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),F(t.TEXTURE_2D,ke,xe),fe(G.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),v(ke,xe)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,re.__webglTexture),F(ce,M,xe),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)fe(G.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,ce,me);else fe(G.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);v(M,xe)&&g(ce),n.unbindTexture()}R.depthBuffer&&Me(R)}function qt(R){const M=m(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,te=G.length;re<te;re++){const se=G[re];if(v(se,M)){const xe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(se).__webglTexture;n.bindTexture(xe,ce),g(xe),n.unbindTexture()}}}function we(R){if(a&&R.samples>0&&_e(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,re=R.height;let te=t.COLOR_BUFFER_BIT;const se=[],xe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let Re=0;Re<M.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){se.push(t.COLOR_ATTACHMENT0+Re),R.depthBuffer&&se.push(xe);const ke=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Re]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),me){const ee=i.get(M[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,re,0,0,G,re,te,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Re=0;Re<M.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Re]);const ke=i.get(M[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function De(R){return Math.min(r.maxSamples,R.samples)}function _e(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function Oe(R,M){const G=R.colorSpace,re=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===wd||G!==Pi&&G!==Dn&&(Qe.getTransfer(G)===rt?a===!1?e.has("EXT_sRGB")===!0&&re===qn?(R.format=wd,R.minFilter=Ln,R.generateMipmaps=!1):M=nS.sRGBToLinear(M):(re!==qn||te!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=je,this.setupRenderTarget=z,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function PD(t,e,n){const i=n.isWebGL2;function r(s,o=Dn){let a;const l=Qe.getTransfer(o);if(s===ir)return t.UNSIGNED_BYTE;if(s===Yy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===qy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===cR)return t.BYTE;if(s===fR)return t.SHORT;if(s===np)return t.UNSIGNED_SHORT;if(s===Xy)return t.INT;if(s===ji)return t.UNSIGNED_INT;if(s===Xi)return t.FLOAT;if(s===ha)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dR)return t.ALPHA;if(s===qn)return t.RGBA;if(s===hR)return t.LUMINANCE;if(s===pR)return t.LUMINANCE_ALPHA;if(s===Or)return t.DEPTH_COMPONENT;if(s===Qs)return t.DEPTH_STENCIL;if(s===wd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mR)return t.RED;if(s===$y)return t.RED_INTEGER;if(s===gR)return t.RG;if(s===Ky)return t.RG_INTEGER;if(s===Zy)return t.RGBA_INTEGER;if(s===Ic||s===Uc||s===Fc||s===Oc)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hg||s===Gg||s===Wg||s===jg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xg||s===Yg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xg)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qg||s===$g||s===Kg||s===Zg||s===Qg||s===Jg||s===ev||s===tv||s===nv||s===iv||s===rv||s===sv||s===ov||s===av)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$g)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ev)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===iv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ov)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===av)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kc||s===lv||s===uv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kc)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===uv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vR||s===cv||s===fv||s===dv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===kc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class LD extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DD={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ND extends so{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const _=n.getContextAttributes();let m=null,f=null;const v=[],g=[],y=new Ye;let w=null;const A=new Xn;A.layers.enable(1),A.viewport=new Ut;const C=new Xn;C.layers.enable(2),C.viewport=new Ut;const D=[A,C],S=new LD;S.layers.enable(1),S.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=v[F];return B===void 0&&(B=new cf,v[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=v[F];return B===void 0&&(B=new cf,v[F]=B),B.getGripSpace()},this.getHand=function(F){let B=v[F];return B===void 0&&(B=new cf,v[F]=B),B.getHandSpace()};function Z(F){const B=g.indexOf(F.inputSource);if(B===-1)return;const Q=v[B];Q!==void 0&&(Q.update(F.inputSource,F.frame,u||o),Q.dispatchEvent({type:F.type,data:F.inputSource}))}function ie(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",I);for(let F=0;F<v.length;F++){const B=g[F];B!==null&&(g[F]=null,v[F].disconnect(B))}E=null,W=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new jr(p.framebufferWidth,p.framebufferHeight,{format:qn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let B=null,Q=null,J=null;_.depth&&(J=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=_.stencil?Qs:Or,Q=_.stencil?Fr:ji);const fe={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new jr(h.textureWidth,h.textureHeight,{format:qn,type:ir,depthTexture:new gS(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(F){for(let B=0;B<F.removed.length;B++){const Q=F.removed[B],J=g.indexOf(Q);J>=0&&(g[J]=null,v[J].disconnect(Q))}for(let B=0;B<F.added.length;B++){const Q=F.added[B];let J=g.indexOf(Q);if(J===-1){for(let Se=0;Se<v.length;Se++)if(Se>=g.length){g.push(Q),J=Se;break}else if(g[Se]===null){g[Se]=Q,J=Se;break}if(J===-1)break}const fe=v[J];fe&&fe.connect(Q)}}const V=new X,$=new X;function K(F,B,Q){V.setFromMatrixPosition(B.matrixWorld),$.setFromMatrixPosition(Q.matrixWorld);const J=V.distanceTo($),fe=B.projectionMatrix.elements,Se=Q.projectionMatrix.elements,ve=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),je=(fe[9]+1)/fe[5],z=(fe[9]-1)/fe[5],qt=(fe[8]-1)/fe[0],we=(Se[8]+1)/Se[0],De=ve*qt,_e=ve*we,lt=J/(-qt+we),Oe=lt*-qt;B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Oe),F.translateZ(lt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const R=ve+lt,M=Me+lt,G=De-Oe,re=_e+(J-Oe),te=je*Me/M*R,se=z*Me/M*R;F.projectionMatrix.makePerspective(G,re,te,se,R,M),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function N(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;S.near=C.near=A.near=F.near,S.far=C.far=A.far=F.far,(E!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,W=S.far);const B=F.parent,Q=S.cameras;N(S,B);for(let J=0;J<Q.length;J++)N(Q[J],B);Q.length===2?K(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),O(F,S,B)};function O(F,B,Q){Q===null?F.matrix.copy(B.matrixWorld):(F.matrix.copy(Q.matrixWorld),F.matrix.invert(),F.matrix.multiply(B.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(B.projectionMatrix),F.projectionMatrixInverse.copy(B.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ad*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let P=null;function k(F,B){if(c=B.getViewerPose(u||o),x=B,c!==null){const Q=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let J=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let fe=0;fe<Q.length;fe++){const Se=Q[fe];let ve=null;if(p!==null)ve=p.getViewport(Se);else{const je=d.getViewSubImage(h,Se);ve=je.viewport,fe===0&&(e.setRenderTargetTextures(f,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let Me=D[fe];Me===void 0&&(Me=new Xn,Me.layers.enable(fe),Me.viewport=new Ut,D[fe]=Me),Me.matrix.fromArray(Se.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Se.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(ve.x,ve.y,ve.width,ve.height),fe===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(Me)}}for(let Q=0;Q<v.length;Q++){const J=g[Q],fe=v[Q];J!==null&&fe!==void 0&&fe.update(J,B,u||o)}P&&P(F,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),x=null}const Y=new pS;Y.setAnimationLoop(k),this.setAnimationLoop=function(F){P=F},this.dispose=function(){}}}function ID(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UD(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function u(v,g){let y=r[v.id];y===void 0&&(x(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function c(v){const g=d();v.__bindingPointIndex=g;const y=t.createBuffer(),w=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],y=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,C=y.length;A<C;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,E=D.length;S<E;S++){const W=D[S];if(p(W,A,S,w)===!0){const Z=W.__offset,ie=Array.isArray(W.value)?W.value:[W.value];let I=0;for(let V=0;V<ie.length;V++){const $=ie[V],K=_($);typeof $=="number"||typeof $=="boolean"?(W.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,Z+I,W.__data)):$.isMatrix3?(W.__data[0]=$.elements[0],W.__data[1]=$.elements[1],W.__data[2]=$.elements[2],W.__data[3]=0,W.__data[4]=$.elements[3],W.__data[5]=$.elements[4],W.__data[6]=$.elements[5],W.__data[7]=0,W.__data[8]=$.elements[6],W.__data[9]=$.elements[7],W.__data[10]=$.elements[8],W.__data[11]=0):($.toArray(W.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,y,w){const A=v.value,C=g+"_"+y;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const D=w[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function x(v){const g=v.uniforms;let y=0;const w=16;for(let C=0,D=g.length;C<D;C++){const S=Array.isArray(g[C])?g[C]:[g[C]];for(let E=0,W=S.length;E<W;E++){const Z=S[E],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let I=0,V=ie.length;I<V;I++){const $=ie[I],K=_($),N=y%w;N!==0&&w-N<K.boundary&&(y+=w-N),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=K.storage}}}const A=y%w;return A>0&&(y+=w-A),v.__size=y,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class MS{constructor(e={}){const{canvas:n=PR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const g=this;let y=!1,w=0,A=0,C=null,D=-1,S=null;const E=new Ut,W=new Ut;let Z=null;const ie=new qe(0);let I=0,V=n.width,$=n.height,K=1,N=null,O=null;const P=new Ut(0,0,V,$),k=new Ut(0,0,V,$);let Y=!1;const F=new hS;let B=!1,Q=!1,J=null;const fe=new Ot,Se=new Ye,ve=new X,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return C===null?K:1}let z=i;function qt(T,U){for(let j=0;j<T.length;j++){const q=T[j],H=n.getContext(q,U);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",le,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),z=qt(U,T),z===null)throw qt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let we,De,_e,lt,Oe,R,M,G,re,te,se,xe,ce,me,Re,ke,ee,Ze,Ge,Le,Ee,ge,Ue,$e;function pt(){we=new jL(z),De=new BL(z,we,e),we.init(De),ge=new PD(z,we,De),_e=new RD(z,we,De),lt=new qL(z),Oe=new pD,R=new bD(z,we,_e,Oe,De,ge,lt),M=new zL(g),G=new WL(g),re=new nb(z,De),Ue=new OL(z,we,re,De),te=new XL(z,re,lt,Ue),se=new QL(z,te,re,lt),Ge=new ZL(z,De,R),ke=new VL(Oe),xe=new hD(g,M,G,we,De,Ue,ke),ce=new ID(g,Oe),me=new gD,Re=new MD(we,De),Ze=new FL(g,M,G,_e,se,h,l),ee=new CD(g,se,De),$e=new UD(z,lt,De,_e),Le=new kL(z,we,lt,De),Ee=new YL(z,we,lt,De),lt.programs=xe.programs,g.capabilities=De,g.extensions=we,g.properties=Oe,g.renderLists=me,g.shadowMap=ee,g.state=_e,g.info=lt}pt();const Ve=new ND(g,z);this.xr=Ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=we.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=we.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(V,$,!1))},this.getSize=function(T){return T.set(V,$)},this.setSize=function(T,U,j=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,$=U,n.width=Math.floor(T*K),n.height=Math.floor(U*K),j===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(V*K,$*K).floor()},this.setDrawingBufferSize=function(T,U,j){V=T,$=U,K=j,n.width=Math.floor(T*j),n.height=Math.floor(U*j),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(P)},this.setViewport=function(T,U,j,q){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,U,j,q),_e.viewport(E.copy(P).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,U,j,q){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,U,j,q),_e.scissor(W.copy(k).multiplyScalar(K).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(T){_e.setScissorTest(Y=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(T=!0,U=!0,j=!0){let q=0;if(T){let H=!1;if(C!==null){const de=C.texture.format;H=de===Zy||de===Ky||de===$y}if(H){const de=C.texture.type,ye=de===ir||de===ji||de===np||de===Fr||de===Yy||de===qy,Ce=Ze.getClearColor(),Pe=Ze.getClearAlpha(),Be=Ce.r,Ne=Ce.g,Ie=Ce.b;ye?(p[0]=Be,p[1]=Ne,p[2]=Ie,p[3]=Pe,z.clearBufferuiv(z.COLOR,0,p)):(x[0]=Be,x[1]=Ne,x[2]=Ie,x[3]=Pe,z.clearBufferiv(z.COLOR,0,x))}else q|=z.COLOR_BUFFER_BIT}U&&(q|=z.DEPTH_BUFFER_BIT),j&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",le,!1),me.dispose(),Re.dispose(),Oe.dispose(),M.dispose(),G.dispose(),se.dispose(),Ue.dispose(),$e.dispose(),xe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",$t),Ve.removeEventListener("sessionend",tt),J&&(J.dispose(),J=null),Kt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=lt.autoReset,U=ee.enabled,j=ee.autoUpdate,q=ee.needsUpdate,H=ee.type;pt(),lt.autoReset=T,ee.enabled=U,ee.autoUpdate=j,ee.needsUpdate=q,ee.type=H}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const U=T.target;U.removeEventListener("dispose",ue),be(U)}function be(T){Ae(T),Oe.remove(T)}function Ae(T){const U=Oe.get(T).programs;U!==void 0&&(U.forEach(function(j){xe.releaseProgram(j)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,j,q,H,de){U===null&&(U=Me);const ye=H.isMesh&&H.matrixWorld.determinant()<0,Ce=TS(T,U,j,q,H);_e.setMaterial(q,ye);let Pe=j.index,Be=1;if(q.wireframe===!0){if(Pe=te.getWireframeAttribute(j),Pe===void 0)return;Be=2}const Ne=j.drawRange,Ie=j.attributes.position;let _t=Ne.start*Be,dn=(Ne.start+Ne.count)*Be;de!==null&&(_t=Math.max(_t,de.start*Be),dn=Math.min(dn,(de.start+de.count)*Be)),Pe!==null?(_t=Math.max(_t,0),dn=Math.min(dn,Pe.count)):Ie!=null&&(_t=Math.max(_t,0),dn=Math.min(dn,Ie.count));const Rt=dn-_t;if(Rt<0||Rt===1/0)return;Ue.setup(H,q,Ce,j,Pe);let li,ut=Le;if(Pe!==null&&(li=re.get(Pe),ut=Ee,ut.setIndex(li)),H.isMesh)q.wireframe===!0?(_e.setLineWidth(q.wireframeLinewidth*je()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(H.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*je()),H.isLineSegments?ut.setMode(z.LINES):H.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else H.isPoints?ut.setMode(z.POINTS):H.isSprite&&ut.setMode(z.TRIANGLES);if(H.isBatchedMesh)ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ut.renderInstances(_t,Rt,H.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wu=Math.min(j.instanceCount,ze);ut.renderInstances(_t,Rt,Wu)}else ut.render(_t,Rt)};function Je(T,U,j){T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Ra(T,U,j),T.side=lr,T.needsUpdate=!0,Ra(T,U,j),T.side=vi):Ra(T,U,j)}this.compile=function(T,U,j=null){j===null&&(j=T),m=Re.get(j),m.init(),v.push(m),j.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(g._useLegacyLights);const q=new Set;return T.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Ce=de[ye];Je(Ce,j,H),q.add(Ce)}else Je(de,j,H),q.add(de)}),v.pop(),m=null,q},this.compileAsync=function(T,U,j=null){const q=this.compile(T,U,j);return new Promise(H=>{function de(){if(q.forEach(function(ye){Oe.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){H(T);return}setTimeout(de,10)}we.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let et=null;function Ct(T){et&&et(T)}function $t(){Kt.stop()}function tt(){Kt.start()}const Kt=new pS;Kt.setAnimationLoop(Ct),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(T){et=T,Ve.setAnimationLoop(T),T===null?Kt.stop():Kt.start()},Ve.addEventListener("sessionstart",$t),Ve.addEventListener("sessionend",tt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(U),U=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,U,C),m=Re.get(T,v.length),m.init(),v.push(m),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),F.setFromProjectionMatrix(fe),Q=this.localClippingEnabled,B=ke.init(this.clippingPlanes,Q),_=me.get(T,f.length),_.init(),f.push(_),Qn(T,U,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(N,O),this.info.render.frame++,B===!0&&ke.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,T,U),B===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,T),m.setupLights(g._useLegacyLights),U.isArrayCamera){const q=U.cameras;for(let H=0,de=q.length;H<de;H++){const ye=q[H];op(_,T,ye,ye.viewport)}}else op(_,T,U);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(g,T,U),Ue.resetDefaultState(),D=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Qn(T,U,j,q){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||F.intersectsSprite(T)){q&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const ye=se.update(T),Ce=T.material;Ce.visible&&_.push(T,ye,Ce,j,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||F.intersectsObject(T))){const ye=se.update(T),Ce=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ve.copy(ye.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(Ce)){const Pe=ye.groups;for(let Be=0,Ne=Pe.length;Be<Ne;Be++){const Ie=Pe[Be],_t=Ce[Ie.materialIndex];_t&&_t.visible&&_.push(T,ye,_t,j,ve.z,Ie)}}else Ce.visible&&_.push(T,ye,Ce,j,ve.z,null)}}const de=T.children;for(let ye=0,Ce=de.length;ye<Ce;ye++)Qn(de[ye],U,j,q)}function op(T,U,j,q){const H=T.opaque,de=T.transmissive,ye=T.transparent;m.setupLightsView(j),B===!0&&ke.setGlobalState(g.clippingPlanes,j),de.length>0&&ES(H,de,U,j),q&&_e.viewport(E.copy(q)),H.length>0&&Ca(H,U,j),de.length>0&&Ca(de,U,j),ye.length>0&&Ca(ye,U,j),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ES(T,U,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const de=De.isWebGL2;J===null&&(J=new jr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?ha:ir,minFilter:da,samples:de?4:0})),g.getDrawingBufferSize(Se),de?J.setSize(Se.x,Se.y):J.setSize(Cd(Se.x),Cd(Se.y));const ye=g.getRenderTarget();g.setRenderTarget(J),g.getClearColor(ie),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Ce=g.toneMapping;g.toneMapping=nr,Ca(T,j,q),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J);let Pe=!1;for(let Be=0,Ne=U.length;Be<Ne;Be++){const Ie=U[Be],_t=Ie.object,dn=Ie.geometry,Rt=Ie.material,li=Ie.group;if(Rt.side===vi&&_t.layers.test(q.layers)){const ut=Rt.side;Rt.side=fn,Rt.needsUpdate=!0,ap(_t,j,q,dn,Rt,li),Rt.side=ut,Rt.needsUpdate=!0,Pe=!0}}Pe===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J)),g.setRenderTarget(ye),g.setClearColor(ie,I),g.toneMapping=Ce}function Ca(T,U,j){const q=U.isScene===!0?U.overrideMaterial:null;for(let H=0,de=T.length;H<de;H++){const ye=T[H],Ce=ye.object,Pe=ye.geometry,Be=q===null?ye.material:q,Ne=ye.group;Ce.layers.test(j.layers)&&ap(Ce,U,j,Pe,Be,Ne)}}function ap(T,U,j,q,H,de){T.onBeforeRender(g,U,j,q,H,de),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(g,U,j,q,T,de),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=fn,H.needsUpdate=!0,g.renderBufferDirect(j,U,q,H,T,de),H.side=lr,H.needsUpdate=!0,g.renderBufferDirect(j,U,q,H,T,de),H.side=vi):g.renderBufferDirect(j,U,q,H,T,de),T.onAfterRender(g,U,j,q,H,de)}function Ra(T,U,j){U.isScene!==!0&&(U=Me);const q=Oe.get(T),H=m.state.lights,de=m.state.shadowsArray,ye=H.state.version,Ce=xe.getParameters(T,H.state,de,U,j),Pe=xe.getProgramCacheKey(Ce);let Be=q.programs;q.environment=T.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||q.environment),Be===void 0&&(T.addEventListener("dispose",ue),Be=new Map,q.programs=Be);let Ne=Be.get(Pe);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===ye)return up(T,Ce),Ne}else Ce.uniforms=xe.getUniforms(T),T.onBuild(j,Ce,g),T.onBeforeCompile(Ce,g),Ne=xe.acquireProgram(Ce,Pe),Be.set(Pe,Ne),q.uniforms=Ce.uniforms;const Ie=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ke.uniform),up(T,Ce),q.needsLights=AS(T),q.lightsStateVersion=ye,q.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function lp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Nl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function up(T,U){const j=Oe.get(T);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function TS(T,U,j,q,H){U.isScene!==!0&&(U=Me),R.resetTextureUnits();const de=U.fog,ye=q.isMeshStandardMaterial?U.environment:null,Ce=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pi,Pe=(q.isMeshStandardMaterial?G:M).get(q.envMap||ye),Be=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!j.morphAttributes.position,_t=!!j.morphAttributes.normal,dn=!!j.morphAttributes.color;let Rt=nr;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Rt=g.toneMapping);const li=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ut=li!==void 0?li.length:0,ze=Oe.get(q),Wu=m.state.lights;if(B===!0&&(Q===!0||T!==S)){const wn=T===S&&q.id===D;ke.setState(q,T,wn)}let mt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Wu.state.version||ze.outputColorSpace!==Ce||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||ze.envMap!==Pe||q.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ke.numPlanes||ze.numIntersection!==ke.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Ne||ze.morphTargets!==Ie||ze.morphNormals!==_t||ze.morphColors!==dn||ze.toneMapping!==Rt||De.isWebGL2===!0&&ze.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,ze.__version=q.version);let pr=ze.currentProgram;mt===!0&&(pr=Ra(q,U,H));let cp=!1,ao=!1,ju=!1;const Bt=pr.getUniforms(),mr=ze.uniforms;if(_e.useProgram(pr.program)&&(cp=!0,ao=!0,ju=!0),q.id!==D&&(D=q.id,ao=!0),cp||S!==T){Bt.setValue(z,"projectionMatrix",T.projectionMatrix),Bt.setValue(z,"viewMatrix",T.matrixWorldInverse);const wn=Bt.map.cameraPosition;wn!==void 0&&wn.setValue(z,ve.setFromMatrixPosition(T.matrixWorld)),De.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,ao=!0,ju=!0)}if(H.isSkinnedMesh){Bt.setOptional(z,H,"bindMatrix"),Bt.setOptional(z,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(De.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Bt.setValue(z,"boneTexture",wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Bt.setOptional(z,H,"batchingTexture"),Bt.setValue(z,"batchingTexture",H._matricesTexture,R));const Xu=j.morphAttributes;if((Xu.position!==void 0||Xu.normal!==void 0||Xu.color!==void 0&&De.isWebGL2===!0)&&Ge.update(H,j,pr),(ao||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,Bt.setValue(z,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mr.envMap.value=Pe,mr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ao&&(Bt.setValue(z,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&wS(mr,ju),de&&q.fog===!0&&ce.refreshFogUniforms(mr,de),ce.refreshMaterialUniforms(mr,q,K,$,J),Nl.upload(z,lp(ze),mr,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nl.upload(z,lp(ze),mr,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Bt.setValue(z,"center",H.center),Bt.setValue(z,"modelViewMatrix",H.modelViewMatrix),Bt.setValue(z,"normalMatrix",H.normalMatrix),Bt.setValue(z,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const wn=q.uniformsGroups;for(let Yu=0,CS=wn.length;Yu<CS;Yu++)if(De.isWebGL2){const fp=wn[Yu];$e.update(fp,pr),$e.bind(fp,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function wS(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function AS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,j){Oe.get(T.texture).__webglTexture=U,Oe.get(T.depthTexture).__webglTexture=j;const q=Oe.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const j=Oe.get(T);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,j=0){C=T,w=U,A=j;let q=!0,H=null,de=!1,ye=!1;if(T){const Pe=Oe.get(T);Pe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Pe.__webglFramebuffer===void 0?R.setupRenderTarget(T):Pe.__hasExternalTextures&&R.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const Ne=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?H=Ne[U][j]:H=Ne[U],de=!0):De.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?H=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[j]:H=Ne,E.copy(T.viewport),W.copy(T.scissor),Z=T.scissorTest}else E.copy(P).multiplyScalar(K).floor(),W.copy(k).multiplyScalar(K).floor(),Z=Y;if(_e.bindFramebuffer(z.FRAMEBUFFER,H)&&De.drawBuffers&&q&&_e.drawBuffers(T,H),_e.viewport(E),_e.scissor(W),_e.setScissorTest(Z),de){const Pe=Oe.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,j)}else if(ye){const Pe=Oe.get(T.texture),Be=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,j||0,Be)}D=-1},this.readRenderTargetPixels=function(T,U,j,q,H,de,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){_e.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const Pe=T.texture,Be=Pe.format,Ne=Pe.type;if(Be!==qn&&ge.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ne===ha&&(we.has("EXT_color_buffer_half_float")||De.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ne!==ir&&ge.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Xi&&(De.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-q&&j>=0&&j<=T.height-H&&z.readPixels(U,j,q,H,ge.convert(Be),ge.convert(Ne),de)}finally{const Pe=C!==null?Oe.get(C).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,U,j=0){const q=Math.pow(2,-j),H=Math.floor(U.image.width*q),de=Math.floor(U.image.height*q);R.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,T.x,T.y,H,de),_e.unbindTexture()},this.copyTextureToTexture=function(T,U,j,q=0){const H=U.image.width,de=U.image.height,ye=ge.convert(j.format),Ce=ge.convert(j.type);R.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,T.x,T.y,H,de,ye,Ce,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,T.x,T.y,ye,Ce,U.image),q===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,U,j,q,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Pe=ge.convert(q.format),Be=ge.convert(q.type);let Ne;if(q.isData3DTexture)R.setTexture3D(q,0),Ne=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),Ne=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Ie=z.getParameter(z.UNPACK_ROW_LENGTH),_t=z.getParameter(z.UNPACK_IMAGE_HEIGHT),dn=z.getParameter(z.UNPACK_SKIP_PIXELS),Rt=z.getParameter(z.UNPACK_SKIP_ROWS),li=z.getParameter(z.UNPACK_SKIP_IMAGES),ut=j.isCompressedTexture?j.mipmaps[H]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(Ne,H,U.x,U.y,U.z,de,ye,Ce,Pe,Be,ut.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ne,H,U.x,U.y,U.z,de,ye,Ce,Pe,ut.data)):z.texSubImage3D(Ne,H,U.x,U.y,U.z,de,ye,Ce,Pe,Be,ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ie),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t),z.pixelStorei(z.UNPACK_SKIP_PIXELS,dn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,li),H===0&&q.generateMipmaps&&z.generateMipmap(Ne),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,_e.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ip?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Bu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?kr:Jy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?It:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FD extends MS{}FD.prototype.isWebGL1Renderer=!0;class OD extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);const kD=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,BD=`
  precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uTopColor;
  uniform vec3 uBottomColor;
  uniform float uIntensity;
  uniform bool uInteractive;
  uniform float uGlowAmount;
  uniform float uPillarWidth;
  uniform float uPillarHeight;
  uniform float uNoiseIntensity;
  uniform float uPillarRotation;
  uniform float uViewScale;
  uniform float uDiagonalTilt;
  varying vec2 vUv;

  const float PI = 3.141592653589793;
  const float EPSILON = 0.001;
  const float E = 2.71828182845904523536;
  const float HALF = 0.5;

  mat2 rot(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  float noise(vec2 coord) {
    float G = E;
    vec2 r = (G * sin(G * coord));
    return fract(r.x * r.y * (1.0 + coord.x));
  }

  vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
    float frequency = 1.0;
    float amplitude = 1.28;
    vec3 deformed = pos;

    for(float i = 0.0; i < 4.0; i++) {
      deformed.xz *= rot(0.4);
      float phase = timeOffset * i * 2.0;
      vec3 oscillation = cos(deformed.zxy * frequency - phase);
      deformed += oscillation * amplitude;
      frequency *= 2.0;
      amplitude *= HALF;
    }
    return deformed;
  }

  void diagonalTilt(inout vec3 pos) {
    pos.x -= pos.y * uDiagonalTilt;
  }

  void auroraWisp(inout vec3 pos, float t) {
    float py = pos.y;
    pos.x += sin(py * 0.22 + t * 0.4) * 0.13;
    pos.x += sin(py * 0.12 + t * 0.52 + 2.0) * 0.09;
    pos.z += sin(py * 0.18 + t * 0.43) * 0.07;
  }

  float blendMin(float a, float b, float k) {
    float scaledK = k * 4.0;
    float h = max(scaledK - abs(a - b), 0.0);
    return min(a, b) - h * h * 0.25 / scaledK;
  }

  float blendMax(float a, float b, float k) {
    return -blendMin(-a, -b, k);
  }

  void main() {
    vec2 fragCoord = vUv * uResolution;
    vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;

    float rotAngle = uPillarRotation * PI / 180.0;
    uv *= rot(rotAngle);
    uv *= uViewScale;

    vec3 origin = vec3(0.0, 0.0, -10.0);
    vec3 direction = normalize(vec3(uv, 1.0));

    float maxDepth = 50.0;
    float depth = 0.1;

    mat2 rotX = rot(uTime * 0.2);
    if(uInteractive && length(uMouse) > 0.0) {
      rotX = rot(uMouse.x * PI * 2.0);
    }

    vec3 color = vec3(0.0);

    for(float i = 0.0; i < 100.0; i++) {
      vec3 pos = origin + direction * depth;
      pos.xz *= rotX;
      diagonalTilt(pos);
      auroraWisp(pos, uTime);

      vec3 deformed = pos;
      deformed.y *= uPillarHeight;
      deformed = applyWaveDeformation(deformed + vec3(0.0, uTime, 0.0), uTime);

      vec2 cosinePair = cos(deformed.xz);
      float fieldDistance = length(cosinePair) - 0.2;

      float radialBound = length(pos.xz) - uPillarWidth;
      fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
      fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

      vec3 gradient = mix(uBottomColor, uTopColor, 0.5);
      color += gradient * pow(1.0 / fieldDistance, 1.0);

      if(fieldDistance < EPSILON || depth > maxDepth) break;
      depth += fieldDistance;
    }

    float widthNormalization = uPillarWidth / 3.0;
    color = tanh(color * uGlowAmount / widthNormalization);

    vec2 fc = gl_FragCoord.xy;
    float g1 = noise(fc * 1.45);
    float g2 = noise(fc * 2.95 + vec2(17.3, 9.1));
    float g3 = noise(fc * 4.35 + vec2(31.0, 7.0));
    float grain = g1 * 0.46 + g2 * 0.34 + g3 * 0.2;
    color -= grain / 21.0 * uNoiseIntensity;
    float gc = grain - 0.5;
    color += vec3(0.06, 0.16, 0.09) * gc * uNoiseIntensity * 0.07;
    color = max(color, vec3(0.0));

    gl_FragColor = vec4(color * uIntensity, 1.0);
  }
`;function VD({topColor:t="#48FF28",bottomColor:e="#9EF19E",intensity:n=1,rotationSpeed:i=.3,interactive:r=!1,className:s="",glowAmount:o=.005,pillarWidth:a=3,pillarHeight:l=.4,noiseIntensity:u=.5,mixBlendMode:c="screen",pillarRotation:d=0,viewScale:h=1,diagonalTilt:p=.07}){const x=pe.useRef(null),_=pe.useRef({topColor:t,bottomColor:e,intensity:n,rotationSpeed:i,interactive:r,glowAmount:o,pillarWidth:a,pillarHeight:l,noiseIntensity:u,pillarRotation:d,viewScale:h,diagonalTilt:p});return _.current={topColor:t,bottomColor:e,intensity:n,rotationSpeed:i,interactive:r,glowAmount:o,pillarWidth:a,pillarHeight:l,noiseIntensity:u,pillarRotation:d,viewScale:h,diagonalTilt:p},pe.useEffect(()=>{const m=x.current;if(!m)return;const f=document.createElement("canvas"),v=f.getContext("webgl2")||f.getContext("webgl")||f.getContext("experimental-webgl");if(f.remove(),!v)return;let g;try{g=new MS({antialias:!1,alpha:!0,powerPreference:"high-performance",precision:"lowp",stencil:!1,depth:!1})}catch{return}const y=m.clientWidth,w=m.clientHeight;g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(y||1,w||1),m.appendChild(g.domElement);const A=new OD,C=new mS(-1,1,1,-1,0,1),D=new qe,S=new qe,E=new ur({vertexShader:kD,fragmentShader:BD,uniforms:{uTime:{value:0},uResolution:{value:new Ye(y,w)},uMouse:{value:new Ye(0,0)},uTopColor:{value:new X},uBottomColor:{value:new X},uIntensity:{value:_.current.intensity},uInteractive:{value:_.current.interactive},uGlowAmount:{value:_.current.glowAmount},uPillarWidth:{value:_.current.pillarWidth},uPillarHeight:{value:_.current.pillarHeight},uNoiseIntensity:{value:_.current.noiseIntensity},uPillarRotation:{value:_.current.pillarRotation},uViewScale:{value:_.current.viewScale},uDiagonalTilt:{value:_.current.diagonalTilt}},transparent:!0,depthWrite:!1,depthTest:!1}),W=new Hu(2,2),Z=new Si(W,E);A.add(Z);const ie=()=>{const Q=m.clientWidth,J=m.clientHeight;Q<1||J<1||(g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(Q,J),E.uniforms.uResolution.value.set(Q,J))};ie(),D.set(_.current.topColor),S.set(_.current.bottomColor),E.uniforms.uTopColor.value.set(D.r,D.g,D.b),E.uniforms.uBottomColor.value.set(S.r,S.g,S.b);const I=new Ye(0,0),V=_.current.interactive;let $=null;const K=Q=>{if(!_.current.interactive||$)return;$=window.setTimeout(()=>{$=null},16);const J=m.getBoundingClientRect(),fe=(Q.clientX-J.left)/J.width*2-1,Se=-((Q.clientY-J.top)/J.height)*2+1;I.set(fe,Se)};V&&m.addEventListener("mousemove",K,{passive:!0});let N=0,O=null,P=performance.now();const k=Q=>{O=requestAnimationFrame(k);const J=_.current,fe=(Q-P)/1e3;P=Q,N+=fe*J.rotationSpeed,E.uniforms.uTime.value=N,E.uniforms.uMouse.value.copy(I),D.set(J.topColor),S.set(J.bottomColor),E.uniforms.uTopColor.value.set(D.r,D.g,D.b),E.uniforms.uBottomColor.value.set(S.r,S.g,S.b),E.uniforms.uIntensity.value=J.intensity,E.uniforms.uInteractive.value=J.interactive,E.uniforms.uGlowAmount.value=J.glowAmount,E.uniforms.uPillarWidth.value=J.pillarWidth,E.uniforms.uPillarHeight.value=J.pillarHeight,E.uniforms.uNoiseIntensity.value=J.noiseIntensity,E.uniforms.uPillarRotation.value=J.pillarRotation,E.uniforms.uViewScale.value=J.viewScale,E.uniforms.uDiagonalTilt.value=J.diagonalTilt,g.render(A,C)};O=requestAnimationFrame(k);let Y=null;const F=()=>{Y&&clearTimeout(Y),Y=window.setTimeout(()=>{ie()},150)};window.addEventListener("resize",F,{passive:!0});const B=new ResizeObserver(()=>F());return B.observe(m),()=>{Y&&clearTimeout(Y),window.removeEventListener("resize",F),B.disconnect(),V&&m.removeEventListener("mousemove",K),O&&cancelAnimationFrame(O),g.dispose(),g.forceContextLoss(),m.contains(g.domElement)&&m.removeChild(g.domElement),E.dispose(),W.dispose()}},[]),b.jsx("div",{ref:x,className:`light-pillar-container ${s}`.trim(),style:{mixBlendMode:c}})}const zD="http://127.0.0.1:8000";function HD({message:t,type:e}){const n=pe.useMemo(()=>{switch(e){case"success":return"check-circle";case"error":return"exclamation-circle";case"warning":return"exclamation-triangle";case"info":default:return"info-circle"}},[e]);return b.jsx("div",{className:`notification ${e}`,children:b.jsxs("div",{className:"flex items-center",children:[b.jsx("i",{className:`fas fa-${n} mr-3`}),b.jsx("span",{children:t})]})})}function GD(){const t=pe.useRef(null),e=pe.useRef(null),n=pe.useRef(null),[i,r]=pe.useState(!1),[s,o]=pe.useState([]),[a,l]=pe.useState([]),[u,c]=pe.useState(0),[d,h]=pe.useState(!1),[p,x]=pe.useState(null),[_,m]=pe.useState([]);function f(P,k="info"){const Y=Date.now()+Math.random();m(F=>[...F,{id:Y,message:P,type:k}]),setTimeout(()=>{m(F=>F.filter(B=>B.id!==Y))},5e3)}function v(){var P;(P=t.current)==null||P.click()}function g(P){const k=Array.from(P.target.files||[]);k.length>0&&w(k)}function y(P){return new Promise((k,Y)=>{const F=new FileReader;F.onload=B=>k(B.target.result),F.onerror=()=>Y(new Error(`Failed to read ${P.name}`)),F.readAsDataURL(P)})}async function w(P){const k=[];let Y=0,F=0;if(P.forEach(B=>{if(!B.type.startsWith("image/")){Y+=1;return}if(B.size>10*1024*1024){F+=1;return}k.push(B)}),Y>0&&f(`${Y} file(s) skipped: not an image`,"warning"),F>0&&f(`${F} file(s) skipped: larger than 10MB`,"warning"),k.length===0){f("Please upload at least one valid image file","error");return}try{const B=await Promise.all(k.map(Q=>y(Q)));o(B),l(k),c(0),x(null),n.current&&(n.current.innerHTML=""),f(`${k.length} image(s) uploaded successfully. Click "Analyze Images" to start detection.`,"success")}catch(B){f(B.message||"Failed to prepare image previews","error")}}function A(P,k){if(!n.current||(n.current.innerHTML="",!Array.isArray(P)||P.length===0))return;const[Y,F]=Array.isArray(k)?k:[1,1];!Y||!F||P.forEach((B,Q)=>{const J=B==null?void 0:B.box;if(!J)return;const fe=Math.max(0,J.xmax-J.xmin),Se=Math.max(0,J.ymax-J.ymin),ve=document.createElement("div");ve.className="detection-box",ve.style.left=`${J.xmin/Y*100}%`,ve.style.top=`${J.ymin/F*100}%`,ve.style.width=`${fe/Y*100}%`,ve.style.height=`${Se/F*100}%`,ve.style.opacity="0";const Me=document.createElement("div");Me.className="detection-label",Me.textContent=`${B.class_name||"object"} ${(B.confidence*100).toFixed(1)}%`,ve.appendChild(Me),n.current.appendChild(ve),setTimeout(()=>{ve.style.opacity="1",ve.style.animation="fadeIn 0.4s ease-out"},Q*120)})}function C(P){P.preventDefault();const k=e.current;k&&k.classList.add("dragover")}function D(){const P=e.current;P&&P.classList.remove("dragover")}function S(P){P.preventDefault();const k=e.current;k&&k.classList.remove("dragover");const Y=P.dataTransfer.files;Y&&Y.length>0&&w(Array.from(Y))}pe.useEffect(()=>{var k;if(!p||p.loading){n.current&&(n.current.innerHTML="");return}const P=(k=p.items)==null?void 0:k[u];if(!P){n.current&&(n.current.innerHTML="");return}A(P.detections,P.dimensions)},[p,u]);async function E(){if(a.length===0||s.length===0){f("Please upload image(s) first","warning");return}if(d){f("Analysis already in progress...","info");return}h(!0),x({loading:!0,progress:0}),n.current&&(n.current.innerHTML="");let P=0;const k=setInterval(()=>{P=Math.min(92,P+Math.random()*14),x(Y=>Y&&Y.loading?{...Y,progress:P}:Y)},500);try{const Y=new FormData;a.forEach(Se=>{Y.append("files",Se)});const F=await fetch(`${zD}/api/v1/analyze`,{method:"POST",body:Y}),B=await F.json();if(!F.ok)throw new Error((B==null?void 0:B.detail)||"Failed to analyze image.");clearInterval(k);const J=(Array.isArray(B.results)?B.results:[B]).map(Se=>{const ve=Array.isArray(Se.detections)?Se.detections:[],Me=ve.length>0?Math.max(...ve.map(je=>(je.confidence||0)*100)):0;return{...Se,detections:ve,confidence:Me}});x({loading:!1,items:J});const fe=J.findIndex(Se=>{var ve;return((ve=Se.analysis)==null?void 0:ve.status)!=="Likely Real"});c(fe>=0?fe:0),h(!1),f("Analysis complete! Check the results below.","success")}catch(Y){clearInterval(k),x(null),h(!1),f(Y.message||"Analysis failed.","error")}}function W(){o([]),l([]),c(0),h(!1),x(null),t.current&&(t.current.value=""),n.current&&(n.current.innerHTML=""),f("Ready for new image upload","info")}function Z(P){return P>=80?"confidence-high":P>=60?"confidence-medium":"confidence-low"}function ie(P){return P>=70?"green":P>=40?"yellow":"red"}function I(P){const k=ie(P);return k==="green"?{icon:"text-green-400",bar:"from-green-500 to-green-400"}:k==="yellow"?{icon:"text-yellow-400",bar:"from-yellow-500 to-yellow-400"}:{icon:"text-red-400",bar:"from-red-500 to-red-400"}}function V(P){return P==="Likely Real"?"bg-green-500/20 text-green-400 border border-green-500/30":P==="Suspicious"?"bg-yellow-500/20 text-yellow-400 border border-yellow-500/30":"bg-red-500/20 text-red-400 border border-red-500/30"}function $(P){return P==="Likely Real"?"This image appears authentic based on the current model output.":P==="Suspicious"?"This image contains suspicious regions and may include manipulations.":"This image is highly likely AI-generated or manipulated based on detected artifacts."}function K(P,k){return k==="Likely Real"?"text-green-400":k==="Suspicious"&&P==="Patterns"?"text-yellow-400":k==="Suspicious"?"text-orange-400":"text-yellow-400"}function N(P){return P>=70?"High Credibility":P>=40?"Medium Credibility":"Low Credibility"}function O(P){return P>=80?"High confidence in this detection result":P>=60?"Moderate confidence - result may be reliable":"Low confidence - consider additional verification"}return b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"bg-anim"}),b.jsx(VD,{topColor:"#48FF28",bottomColor:"#9EF19E",intensity:1,rotationSpeed:.1,glowAmount:.002,pillarWidth:2,pillarHeight:.3,noiseIntensity:.5,pillarRotation:25,viewScale:1,diagonalTilt:0,interactive:!1,mixBlendMode:"normal"}),b.jsxs("div",{className:"relative z-10",children:[b.jsx("div",{className:"container mx-auto px-6 pt-8 md:pt-10",children:b.jsx("nav",{className:"hero-nav-pill",children:b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("a",{href:"#home",className:"flex items-center space-x-3 text-white/90 hover:text-white transition-colors",children:[b.jsx("div",{className:"w-9 h-9 hero-logo-badge rounded-full flex items-center justify-center",children:b.jsx("i",{className:"fas fa-shield-alt text-white text-sm"})}),b.jsx("h1",{className:"text-lg md:text-xl font-semibold tracking-wide",children:"VerifAI"})]}),b.jsxs("div",{className:"hidden md:flex items-center gap-8 pr-2",children:[b.jsx("a",{href:"#home",className:"hero-nav-link",children:"Home"}),b.jsx("a",{href:"#about",className:"hero-nav-link",children:"About"}),b.jsx("a",{href:"#detect",className:"hero-nav-link",children:"Detect"}),b.jsx("a",{href:"#features",className:"hero-nav-link",children:"Features"})]}),b.jsx("button",{onClick:()=>r(!0),className:"md:hidden text-white/90",children:b.jsx("i",{className:"fas fa-bars text-xl"})})]})})}),i&&b.jsx("div",{className:"fixed inset-0 bg-black/95 z-50 md:hidden",children:b.jsxs("div",{className:"flex flex-col items-center justify-center h-full space-y-8",children:[b.jsx("a",{href:"#home",onClick:()=>r(!1),className:"text-2xl text-gray-300 hover:text-white transition-colors",children:"Home"}),b.jsx("a",{href:"#about",onClick:()=>r(!1),className:"text-2xl text-gray-300 hover:text-white transition-colors",children:"About"}),b.jsx("a",{href:"#detect",onClick:()=>r(!1),className:"text-2xl text-gray-300 hover:text-white transition-colors",children:"Detect"}),b.jsx("a",{href:"#features",onClick:()=>r(!1),className:"text-2xl text-gray-300 hover:text-white transition-colors",children:"Features"}),b.jsx("button",{onClick:()=>r(!1),className:"text-white",children:b.jsx("i",{className:"fas fa-times text-2xl"})})]})}),b.jsx("section",{id:"home",className:"container mx-auto px-6 pt-16 md:pt-20 pb-20 min-h-[78vh] md:min-h-[82vh] flex items-center justify-center",children:b.jsxs("div",{className:"text-center max-w-4xl w-full",children:[b.jsxs("div",{className:"hero-top-badge mb-8",children:[b.jsx("i",{className:"fas fa-sparkles mr-2 text-[0.68rem]"}),"AI Image Detection"]}),b.jsx("div",{className:"mb-6 hero-focus-wrap",children:b.jsx(RC,{sentence:"AI Image Detection System|Powered by YOLOv5",separator:"|",vertical:!0,manualMode:!1,blurAmount:5,borderColor:"#48FF28",glowColor:"rgba(72, 255, 40, 0.55)",animationDuration:.5,pauseBetweenAnimations:1})}),b.jsx("p",{className:"text-base md:text-lg text-gray-300/95 max-w-2xl mx-auto mb-9 leading-relaxed",children:"Detect AI-generated or manipulated images in seconds with confidence scoring and clear visual results."}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[b.jsx("a",{href:"#detect",className:"hero-cta-primary",children:"Detection"}),b.jsx("a",{href:"#about",className:"hero-cta-secondary",children:"Learn More"})]})]})}),b.jsx("section",{id:"about",className:"container mx-auto px-6 py-20",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("h3",{className:"text-4xl font-bold text-white text-center mb-12",children:"About VerifAI"}),b.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10",children:[b.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:"VerifAI is a cutting-edge Machine Learning-based AI Image Detection System designed to combat the growing threat of AI-generated misinformation. Using the advanced MT-YOLOv6 architecture, our system analyzes visual content to determine authenticity with remarkable accuracy."}),b.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:"The system integrates sophisticated credibility scoring mechanisms to provide users with comprehensive insights about image reliability, helping to create a safer digital environment for everyone."}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[b.jsxs("div",{className:"flex items-start space-x-3",children:[b.jsx("i",{className:"fas fa-brain text-blue-400 text-xl mt-1"}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-semibold mb-1",children:"Advanced AI Technology"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Powered by MT-YOLOv6 for real-time detection"})]})]}),b.jsxs("div",{className:"flex items-start space-x-3",children:[b.jsx("i",{className:"fas fa-chart-line text-purple-400 text-xl mt-1"}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-semibold mb-1",children:"Credibility Scoring"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Quantitative reliability assessment"})]})]}),b.jsxs("div",{className:"flex items-start space-x-3",children:[b.jsx("i",{className:"fas fa-bolt text-yellow-400 text-xl mt-1"}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-semibold mb-1",children:"Real-time Processing"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Instant analysis and results"})]})]}),b.jsxs("div",{className:"flex items-start space-x-3",children:[b.jsx("i",{className:"fas fa-shield-alt text-green-400 text-xl mt-1"}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-semibold mb-1",children:"Privacy Protection"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Secure image processing"})]})]})]})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:[b.jsxs("div",{className:"rounded-2xl border border-green-300/20 bg-gradient-to-r from-green-900/35 to-black/45 backdrop-blur-sm p-6 shadow-[0_0_18px_rgba(72,255,40,0.12)]",children:[b.jsx("div",{className:"text-4xl font-bold text-blue-400 mb-2",children:"95%+"}),b.jsx("div",{className:"text-gray-200 text-2xl/6 md:text-xl",children:"Detection Accuracy"})]}),b.jsxs("div",{className:"rounded-2xl border border-green-300/20 bg-gradient-to-r from-green-900/35 to-black/45 backdrop-blur-sm p-6 shadow-[0_0_18px_rgba(72,255,40,0.12)]",children:[b.jsx("div",{className:"text-4xl font-bold text-fuchsia-400 mb-2",children:"<2s"}),b.jsx("div",{className:"text-gray-200 text-2xl/6 md:text-xl",children:"Processing Time"})]}),b.jsxs("div",{className:"rounded-2xl border border-green-300/20 bg-gradient-to-r from-green-900/35 to-black/45 backdrop-blur-sm p-6 shadow-[0_0_18px_rgba(72,255,40,0.12)]",children:[b.jsx("div",{className:"text-4xl font-bold text-green-400 mb-2",children:"24/7"}),b.jsx("div",{className:"text-gray-200 text-2xl/6 md:text-xl",children:"Available"})]})]})]})}),b.jsx("section",{id:"detect",className:"container mx-auto px-6 py-20",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("h3",{className:"text-4xl font-bold text-white text-center mb-12",children:"Image Detection"}),s.length===0&&b.jsx("div",{id:"uploadArea",ref:e,onDragOver:C,onDragLeave:D,onDrop:S,onClick:P=>{(P.target===e.current||P.target.parentElement===e.current)&&v()},className:"group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 border-dashed border-2 hover:border-emerald-400 hover:shadow-[0_0_28px_rgba(72,255,40,0.2)] transition-all duration-300 upload-area",children:b.jsxs("div",{className:"text-center",children:[b.jsx("i",{className:"fas fa-cloud-upload-alt text-6xl text-emerald-400 mb-4 transition-colors group-hover:text-[#48FF28]"}),b.jsx("h4",{className:"text-2xl font-semibold text-white mb-2",children:"Upload Images for Analysis"}),b.jsx("p",{className:"text-gray-400 mb-6",children:"Drag and drop image(s) here or click to browse"}),b.jsx("input",{ref:t,onChange:g,type:"file",accept:"image/*",multiple:!0,className:"hidden"}),b.jsxs("button",{onClick:v,className:"px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 hover:shadow-[0_0_20px_rgba(72,255,40,0.4)] transition-all",children:[b.jsx("i",{className:"fas fa-folder-open mr-2"}),"Choose Images"]}),b.jsx("p",{className:"text-gray-500 text-sm mt-4",children:"Supported formats: JPG, PNG (Max 10MB)"})]})}),s.length>0&&b.jsxs("div",{id:"previewArea",className:"bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-fade-in",children:[b.jsxs("div",{className:"mb-6",children:[b.jsxs("h4",{className:"text-xl font-semibold text-white mb-4",children:["Selected Image (",u+1,"/",s.length,")"]}),b.jsxs("div",{className:"relative max-w-2xl mx-auto",children:[b.jsx("img",{src:s[u],alt:"Selected",className:"w-full rounded-lg max-h-96 object-contain"}),b.jsx("div",{ref:n,className:"absolute inset-0 pointer-events-none"})]}),s.length>1&&b.jsx("div",{className:"mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2",children:s.map((P,k)=>b.jsx("button",{onClick:()=>c(k),className:`rounded-md overflow-hidden border-2 transition-all ${u===k?"border-emerald-400":"border-white/20 hover:border-white/50"}`,"aria-label":`View image ${k+1}`,children:b.jsx("img",{src:P,alt:`Preview ${k+1}`,className:"w-full h-16 object-cover"})},`preview-${k}`))})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-xl font-semibold text-white mb-4",children:"Analysis Results"}),b.jsxs("div",{id:"results",className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[!p&&null,(p==null?void 0:p.loading)&&b.jsxs("div",{className:"flex flex-col items-center justify-center py-12 md:col-span-2",children:[b.jsx("div",{className:"loading-spinner mb-4"}),b.jsx("p",{className:"text-gray-400",children:"Analyzing image with MT-YOLOv6..."}),b.jsx("div",{className:"progress-bar w-full max-w-md mt-4",children:b.jsx("div",{className:"progress-fill",style:{width:`${p.progress}%`}})})]}),!(p!=null&&p.loading)&&p&&(()=>{var k,Y,F;const P=(k=p.items)==null?void 0:k[u];return P?b.jsxs(b.Fragment,{children:[p.items.length>1&&b.jsxs("div",{className:"result-card md:col-span-2",children:[b.jsx("h5",{className:"text-base font-semibold text-white mb-3",children:"Batch Summary (Analyzed Individually)"}),b.jsx("div",{className:"space-y-2 max-h-56 overflow-y-auto pr-1",children:p.items.map((B,Q)=>b.jsxs("button",{onClick:()=>c(Q),className:`w-full text-left rounded-lg border px-3 py-2 transition-all ${u===Q?"border-emerald-400 bg-emerald-500/10":"border-white/15 bg-white/5 hover:border-white/40"}`,children:[b.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[b.jsx("span",{className:"text-sm text-white font-medium truncate max-w-[55%]",children:B.filename}),b.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-semibold ${V(B.analysis.status)}`,children:B.analysis.status})]}),b.jsxs("div",{className:"mt-1 text-xs text-gray-300 flex flex-wrap gap-3",children:[b.jsxs("span",{children:["Credibility: ",B.analysis.score,"/100"]}),b.jsxs("span",{children:["Detections: ",B.detections.length]}),b.jsxs("span",{children:["Image ",Q+1," of ",p.items.length]})]})]},`${B.filename}-${Q}`))})]}),b.jsxs("div",{className:"result-card md:col-span-2",children:[b.jsxs("div",{className:"flex items-center justify-between mb-3",children:[b.jsx("h5",{className:"text-lg font-semibold text-white",children:"Detection Result"}),b.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold ${V(P.analysis.status)}`,children:P.analysis.status})]}),b.jsx("p",{className:"text-gray-300 text-sm",children:$(P.analysis.status)}),b.jsxs("p",{className:"text-gray-500 text-xs mt-3",children:["File: ",P.filename," (",u+1,"/",p.items.length,") | Model: ",P.model_path]})]}),b.jsxs("div",{className:"result-card",children:[b.jsx("h5",{className:"text-base font-semibold text-white mb-2",children:"Confidence"}),b.jsxs("div",{className:"text-2xl font-bold text-white mb-2",children:[P.confidence.toFixed(1),"%"]}),b.jsx("div",{className:"confidence-bar",children:b.jsx("div",{className:`confidence-fill ${Z(P.confidence)}`,style:{width:`${P.confidence}%`}})}),b.jsx("p",{className:"text-gray-400 text-xs mt-2",children:O(P.confidence)})]}),b.jsxs("div",{className:"result-card",children:[b.jsx("h5",{className:"text-base font-semibold text-white mb-2",children:"Credibility"}),(()=>{const B=I(P.analysis.score);return b.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[b.jsx("i",{className:`fas fa-shield-alt ${B.icon}`}),b.jsxs("span",{className:"text-2xl font-bold text-white",children:[P.analysis.score.toFixed(0),"/100"]})]})})(),b.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:(()=>{const B=I(P.analysis.score);return b.jsx("div",{className:`bg-gradient-to-r ${B.bar} h-2 rounded-full`,style:{width:`${P.analysis.score}%`}})})()}),b.jsx("p",{className:"text-gray-400 text-xs mt-2",children:N(P.analysis.score)})]}),b.jsxs("div",{className:"result-card",children:[b.jsx("h5",{className:"text-base font-semibold text-white mb-3",children:"Analysis Details"}),b.jsxs("div",{className:"space-y-2 text-sm",children:[b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-gray-400",children:"Detections"}),b.jsx("span",{className:P.detections.length>0?"text-red-400":"text-green-400",children:P.detections.length})]}),b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-gray-400",children:"Anomalies"}),b.jsx("span",{className:P.analysis.anomalies_found>0?"text-orange-400":"text-green-400",children:P.analysis.anomalies_found})]}),b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-gray-400",children:"Patterns"}),b.jsx("span",{className:K("Patterns",P.analysis.status),children:P.analysis.status==="Likely Real"?"Normal":"Irregular"})]}),b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-gray-400",children:"Resolution"}),b.jsxs("span",{className:"text-blue-300",children:[(Y=P.dimensions)==null?void 0:Y[0]," x ",(F=P.dimensions)==null?void 0:F[1]]})]})]})]}),P.detections.length>0&&b.jsxs("div",{className:"result-card md:col-span-2",children:[b.jsx("h5",{className:"text-base font-semibold text-white mb-3",children:"Detected Regions"}),b.jsx("div",{className:"space-y-2 text-sm max-h-48 overflow-y-auto pr-2",children:P.detections.map((B,Q)=>b.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-1",children:[b.jsx("span",{className:"text-gray-300",children:B.class_name}),b.jsxs("span",{className:"text-red-300",children:[(B.confidence*100).toFixed(1),"%"]})]},`${B.class_name}-${Q}`))})]}),b.jsxs("div",{className:"result-card bg-blue-500/10 border-blue-500/30",children:[b.jsxs("h5",{className:"text-base font-semibold text-white mb-2",children:[b.jsx("i",{className:"fas fa-info-circle text-blue-400 mr-2"}),"Recommendations"]}),b.jsx("ul",{className:"space-y-1 text-gray-300 text-sm",children:P.analysis.status==="Likely Real"?b.jsxs(b.Fragment,{children:[b.jsx("li",{children:"• Image appears authentic"}),b.jsx("li",{children:"• Still verify source when possible"}),b.jsx("li",{children:"• Can be shared with confidence"})]}):P.analysis.status==="Suspicious"?b.jsxs(b.Fragment,{children:[b.jsx("li",{children:"• Review highlighted regions carefully"}),b.jsx("li",{children:"• Compare with original source if available"}),b.jsx("li",{children:"• Request additional verification before sharing"})]}):b.jsxs(b.Fragment,{children:[b.jsx("li",{children:"• Exercise caution when sharing"}),b.jsx("li",{children:"• Verify source independently"}),b.jsx("li",{children:"• Consider potential impact"})]})})]})]}):null})()]})]}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mt-8 justify-center",children:[b.jsxs("button",{onClick:E,className:"px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 hover:shadow-[0_0_20px_rgba(72,255,40,0.4)] transition-all",children:[b.jsx("i",{className:"fas fa-search mr-2"}),"Analyze Images"]}),b.jsxs("button",{onClick:W,className:"px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20",children:[b.jsx("i",{className:"fas fa-redo mr-2"}),"Upload New Images"]})]})]})]})}),b.jsxs("section",{id:"features",className:"container mx-auto px-6 py-20",children:[b.jsx("h3",{className:"text-4xl font-bold text-white text-center mb-12",children:"Key Features"}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",children:[b.jsxs("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card",children:[b.jsx("i",{className:"fas fa-eye text-3xl text-blue-400 mb-4 transition-colors group-hover:text-[#48FF28]"}),b.jsx("h4",{className:"text-xl font-semibold text-white mb-2",children:"Visual Feature Extraction"}),b.jsx("p",{className:"text-gray-400",children:"Identifies unique patterns and artifacts associated with AI-generated images"})]}),b.jsxs("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card",children:[b.jsx("i",{className:"fas fa-tachometer-alt text-3xl text-purple-400 mb-4 transition-colors group-hover:text-[#48FF28]"}),b.jsx("h4",{className:"text-xl font-semibold text-white mb-2",children:"Real-time Processing"}),b.jsx("p",{className:"text-gray-400",children:"Get instant results with our optimized MT-YOLOv6 architecture"})]}),b.jsxs("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card",children:[b.jsx("i",{className:"fas fa-percentage text-3xl text-green-400 mb-4 transition-colors group-hover:text-[#48FF28]"}),b.jsx("h4",{className:"text-xl font-semibold text-white mb-2",children:"Confidence Scoring"}),b.jsx("p",{className:"text-gray-400",children:"Detailed confidence levels and credibility metrics for each analysis"})]}),b.jsxs("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card",children:[b.jsx("i",{className:"fas fa-map-marked-alt text-3xl text-yellow-400 mb-4 transition-colors group-hover:text-[#48FF28]"}),b.jsx("h4",{className:"text-xl font-semibold text-white mb-2",children:"Visual Annotations"}),b.jsx("p",{className:"text-gray-400",children:"Highlighted regions showing detected anomalies and AI patterns"})]}),b.jsxs("div",{className:"group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 feature-card",children:[b.jsx("i",{className:"fas fa-lock text-3xl text-indigo-400 mb-4 transition-colors group-hover:text-[#48FF28]"}),b.jsx("h4",{className:"text-xl font-semibold text-white mb-2",children:"Privacy First"}),b.jsx("p",{className:"text-gray-400",children:"Local processing ensures your images remain private and secure"})]})]})]}),b.jsx("footer",{className:"bg-black/50 backdrop-blur-sm border-t border-white/10 mt-12",children:b.jsxs("div",{className:"container mx-auto px-6 py-6",children:[b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[b.jsx("div",{className:"w-9 h-9 hero-logo-badge rounded-full flex items-center justify-center",children:b.jsx("i",{className:"fas fa-shield-alt text-white text-sm"})}),b.jsx("h4",{className:"text-xl font-semibold tracking-wide text-white",children:"VerifAI"})]}),b.jsx("p",{className:"text-gray-400",children:"AI Image Detection System powered by MT-YOLOv6"})]}),b.jsxs("div",{children:[b.jsx("h5",{className:"text-white font-semibold mb-4",children:"Quick Links"}),b.jsxs("ul",{className:"space-y-2",children:[b.jsx("li",{children:b.jsx("a",{href:"#home",className:"text-gray-400 hover:text-white transition-colors",children:"Home"})}),b.jsx("li",{children:b.jsx("a",{href:"#about",className:"text-gray-400 hover:text-white transition-colors",children:"About"})}),b.jsx("li",{children:b.jsx("a",{href:"#detect",className:"text-gray-400 hover:text-white transition-colors",children:"Detect"})}),b.jsx("li",{children:b.jsx("a",{href:"#features",className:"text-gray-400 hover:text-white transition-colors",children:"Features"})})]})]}),b.jsxs("div",{children:[b.jsx("h5",{className:"text-white font-semibold mb-4",children:"Technology"}),b.jsxs("ul",{className:"space-y-2",children:[b.jsx("li",{children:b.jsx("span",{className:"text-gray-400",children:"MT-YOLOv6"})}),b.jsx("li",{children:b.jsx("span",{className:"text-gray-400",children:"Machine Learning"})}),b.jsx("li",{children:b.jsx("span",{className:"text-gray-400",children:"Computer Vision"})}),b.jsx("li",{children:b.jsx("span",{className:"text-gray-400",children:"Deep Learning"})})]})]}),b.jsxs("div",{children:[b.jsx("h5",{className:"text-white font-semibold mb-4",children:"Team"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Alviar, Justin James E."}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Arobie, Mohammad Rashdy L."}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Climaco, John Lloyd L."}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Mamiala, Denabhar"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Lagoyo, Shadia"})]})]}),b.jsx("div",{className:"border-t border-white/10 mt-6 pt-6 text-center",children:b.jsx("p",{className:"text-gray-400",children:"© 2026 VerifAI. IT 322 - Machine Learning Project. WMSU College of Computing Studies"})})]})}),b.jsx("div",{className:"fixed top-5 right-5 space-y-3 z-50",children:_.map(P=>b.jsx(HD,{message:P.message,type:P.type},P.id))})]})]})}const WD=document.getElementById("root");hx(WD).render(b.jsx(WS.StrictMode,{children:b.jsx(GD,{})}));
