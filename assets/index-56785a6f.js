(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var oi={},t_={get exports(){return oi},set exports(t){oi=t}},_o={},q={},n_={get exports(){return q},set exports(t){q=t}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),r_=Symbol.for("react.portal"),i_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),o_=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),c_=Symbol.for("react.suspense"),d_=Symbol.for("react.memo"),f_=Symbol.for("react.lazy"),Rc=Symbol.iterator;function h_(t){return t===null||typeof t!="object"?null:(t=Rc&&t[Rc]||t["@@iterator"],typeof t=="function"?t:null)}var zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Uf={};function Er(t,e,n){this.props=t,this.context=e,this.refs=Uf,this.updater=n||zf}Er.prototype.isReactComponent={};Er.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Er.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jf(){}jf.prototype=Er.prototype;function Ya(t,e,n){this.props=t,this.context=e,this.refs=Uf,this.updater=n||zf}var qa=Ya.prototype=new jf;qa.constructor=Ya;Bf(qa,Er.prototype);qa.isPureReactComponent=!0;var Pc=Array.isArray,$f=Object.prototype.hasOwnProperty,Xa={current:null},Wf={key:!0,ref:!0,__self:!0,__source:!0};function Vf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$f.call(e,r)&&!Wf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mi,type:t,key:s,ref:o,props:i,_owner:Xa.current}}function p_(t,e){return{$$typeof:Mi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ja(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mi}function m_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ac=/\/+/g;function qo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m_(""+t.key):e.toString(36)}function ms(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mi:case r_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qo(o,0):r,Pc(i)?(n="",t!=null&&(n=t.replace(Ac,"$&/")+"/"),ms(i,e,n,"",function(u){return u})):i!=null&&(Ja(i)&&(i=p_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ac,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pc(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+qo(s,l);o+=ms(s,e,n,a,i)}else if(a=h_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+qo(s,l++),o+=ms(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ki(t,e,n){if(t==null)return t;var r=[],i=0;return ms(t,r,"","",function(s){return e.call(n,s,i++)}),r}function g_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ne={current:null},gs={transition:null},__={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:gs,ReactCurrentOwner:Xa};F.Children={map:Ki,forEach:function(t,e,n){Ki(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ki(t,function(){e++}),e},toArray:function(t){return Ki(t,function(e){return e})||[]},only:function(t){if(!Ja(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Er;F.Fragment=i_;F.Profiler=o_;F.PureComponent=Ya;F.StrictMode=s_;F.Suspense=c_;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)$f.call(e,a)&&!Wf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Mi,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:a_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l_,_context:t},t.Consumer=t};F.createElement=Vf;F.createFactory=function(t){var e=Vf.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:u_,render:t}};F.isValidElement=Ja;F.lazy=function(t){return{$$typeof:f_,_payload:{_status:-1,_result:t},_init:g_}};F.memo=function(t,e){return{$$typeof:d_,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=gs.transition;gs.transition={};try{t()}finally{gs.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Ne.current.useCallback(t,e)};F.useContext=function(t){return Ne.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Ne.current.useDeferredValue(t)};F.useEffect=function(t,e){return Ne.current.useEffect(t,e)};F.useId=function(){return Ne.current.useId()};F.useImperativeHandle=function(t,e,n){return Ne.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Ne.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Ne.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Ne.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Ne.current.useReducer(t,e,n)};F.useRef=function(t){return Ne.current.useRef(t)};F.useState=function(t){return Ne.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Ne.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Ne.current.useTransition()};F.version="18.2.0";(function(t){t.exports=F})(n_);const y_=e_(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=q,w_=Symbol.for("react.element"),E_=Symbol.for("react.fragment"),C_=Object.prototype.hasOwnProperty,S_=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I_={key:!0,ref:!0,__self:!0,__source:!0};function Hf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)C_.call(e,r)&&!I_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:w_,type:t,key:s,ref:o,props:i,_owner:S_.current}}_o.Fragment=E_;_o.jsx=Hf;_o.jsxs=Hf;(function(t){t.exports=_o})(t_);const Ns=oi.Fragment,P=oi.jsx,ge=oi.jsxs;var Fl={},bl={},T_={get exports(){return bl},set exports(t){bl=t}},$e={},zl={},k_={get exports(){return zl},set exports(t){zl=t}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,A){var D=I.length;I.push(A);e:for(;0<D;){var ne=D-1>>>1,ue=I[ne];if(0<i(ue,A))I[ne]=A,I[D]=ue,D=ne;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],D=I.pop();if(D!==A){I[0]=D;e:for(var ne=0,ue=I.length,Gi=ue>>>1;ne<Gi;){var an=2*(ne+1)-1,Yo=I[an],un=an+1,Qi=I[un];if(0>i(Yo,D))un<ue&&0>i(Qi,Yo)?(I[ne]=Qi,I[un]=D,ne=un):(I[ne]=Yo,I[an]=D,ne=an);else if(un<ue&&0>i(Qi,D))I[ne]=Qi,I[un]=D,ne=un;else break e}}return A}function i(I,A){var D=I.sortIndex-A.sortIndex;return D!==0?D:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,g=!1,_=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=I)r(u),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(u)}}function y(I){if(v=!1,m(I),!_)if(n(a)!==null)_=!0,Qo(C);else{var A=n(u);A!==null&&Ko(y,A.startTime-I)}}function C(I,A){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var D=d;try{for(m(A),c=n(a);c!==null&&(!(c.expirationTime>A)||I&&!Xe());){var ne=c.callback;if(typeof ne=="function"){c.callback=null,d=c.priorityLevel;var ue=ne(c.expirationTime<=A);A=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),m(A)}else r(a);c=n(a)}if(c!==null)var Gi=!0;else{var an=n(u);an!==null&&Ko(y,an.startTime-A),Gi=!1}return Gi}finally{c=null,d=D,g=!1}}var T=!1,N=null,x=-1,te=5,b=-1;function Xe(){return!(t.unstable_now()-b<te)}function xr(){if(N!==null){var I=t.unstable_now();b=I;var A=!0;try{A=N(!0,I)}finally{A?Rr():(T=!1,N=null)}}else T=!1}var Rr;if(typeof h=="function")Rr=function(){h(xr)};else if(typeof MessageChannel<"u"){var xc=new MessageChannel,Zg=xc.port2;xc.port1.onmessage=xr,Rr=function(){Zg.postMessage(null)}}else Rr=function(){k(xr,0)};function Qo(I){N=I,T||(T=!0,Rr())}function Ko(I,A){x=k(function(){I(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Qo(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var A=3;break;default:A=d}var D=d;d=A;try{return I()}finally{d=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=d;d=I;try{return A()}finally{d=D}},t.unstable_scheduleCallback=function(I,A,D){var ne=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ne+D:ne):D=ne,I){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=D+ue,I={id:f++,callback:A,priorityLevel:I,startTime:D,expirationTime:ue,sortIndex:-1},D>ne?(I.sortIndex=D,e(u,I),n(a)===null&&I===n(u)&&(v?(p(x),x=-1):v=!0,Ko(y,D-ne))):(I.sortIndex=ue,e(a,I),_||g||(_=!0,Qo(C))),I},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(I){var A=d;return function(){var D=d;d=A;try{return I.apply(this,arguments)}finally{d=D}}}})(Gf);(function(t){t.exports=Gf})(k_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=q,je=zl;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,li={};function Ln(t,e){cr(t,e),cr(t+"Capture",e)}function cr(t,e){for(li[t]=e,t=0;t<e.length;t++)Kf.add(e[t])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},Oc={};function x_(t){return Bl.call(Oc,t)?!0:Bl.call(Dc,t)?!1:N_.test(t)?Oc[t]=!0:(Dc[t]=!0,!1)}function R_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P_(t,e,n,r){if(e===null||typeof e>"u"||R_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Za=/[\-:]([a-z])/g;function eu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Za,eu);ye[e]=new xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Za,eu);ye[e]=new xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Za,eu);ye[e]=new xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new xe(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function tu(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P_(e,n,i,r)&&(n=null),r||i===null?x_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rt=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),jn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),Yf=Symbol.for("react.provider"),qf=Symbol.for("react.context"),ru=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),$l=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Xf=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function Pr(t){return t===null||typeof t!="object"?null:(t=Mc&&t[Mc]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,Xo;function $r(t){if(Xo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xo=e&&e[1]||""}return`
`+Xo+t}var Jo=!1;function Zo(t,e){if(!t||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$r(t):""}function A_(t){switch(t.tag){case 5:return $r(t.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return t=Zo(t.type,!1),t;case 11:return t=Zo(t.type.render,!1),t;case 1:return t=Zo(t.type,!0),t;default:return""}}function Wl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $n:return"Fragment";case jn:return"Portal";case Ul:return"Profiler";case nu:return"StrictMode";case jl:return"Suspense";case $l:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qf:return(t.displayName||"Context")+".Consumer";case Yf:return(t._context.displayName||"Context")+".Provider";case ru:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case iu:return e=t.displayName||null,e!==null?e:Wl(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return Wl(t(e))}catch{}}return null}function D_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(e);case 8:return e===nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O_(t){var e=Jf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qi(t){t._valueTracker||(t._valueTracker=O_(t))}function Zf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vl(t,e){var n=e.checked;return J({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eh(t,e){e=e.checked,e!=null&&tu(t,"checked",e,!1)}function Hl(t,e){eh(t,e);var n=Jt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gl(t,e.type,Jt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gl(t,e,n){(e!=="number"||xs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wr=Array.isArray;function er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ql(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return J({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Wr(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jt(n)}}function th(t,e){var n=Jt(e.value),r=Jt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xi,rh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gr[e]=Gr[t]})});function ih(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gr.hasOwnProperty(t)&&Gr[t]?(""+e).trim():e+"px"}function sh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ih(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var L_=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(t,e){if(e){if(L_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function ql(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jl=null,tr=null,nr=null;function Bc(t){if(t=bi(t)){if(typeof Jl!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Co(e),Jl(t.stateNode,t.type,e))}}function oh(t){tr?nr?nr.push(t):nr=[t]:tr=t}function lh(){if(tr){var t=tr,e=nr;if(nr=tr=null,Bc(t),e)for(t=0;t<e.length;t++)Bc(e[t])}}function ah(t,e){return t(e)}function uh(){}var el=!1;function ch(t,e,n){if(el)return t(e,n);el=!0;try{return ah(t,e,n)}finally{el=!1,(tr!==null||nr!==null)&&(uh(),lh())}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Zl=!1;if(St)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Zl=!1}function F_(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Qr=!1,Rs=null,Ps=!1,ea=null,b_={onError:function(t){Qr=!0,Rs=t}};function z_(t,e,n,r,i,s,o,l,a){Qr=!1,Rs=null,F_.apply(b_,arguments)}function B_(t,e,n,r,i,s,o,l,a){if(z_.apply(this,arguments),Qr){if(Qr){var u=Rs;Qr=!1,Rs=null}else throw Error(w(198));Ps||(Ps=!0,ea=u)}}function Fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uc(t){if(Fn(t)!==t)throw Error(w(188))}function U_(t){var e=t.alternate;if(!e){if(e=Fn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Uc(i),t;if(s===r)return Uc(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function fh(t){return t=U_(t),t!==null?hh(t):null}function hh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hh(t);if(e!==null)return e;t=t.sibling}return null}var ph=je.unstable_scheduleCallback,jc=je.unstable_cancelCallback,j_=je.unstable_shouldYield,$_=je.unstable_requestPaint,re=je.unstable_now,W_=je.unstable_getCurrentPriorityLevel,ou=je.unstable_ImmediatePriority,mh=je.unstable_UserBlockingPriority,As=je.unstable_NormalPriority,V_=je.unstable_LowPriority,gh=je.unstable_IdlePriority,yo=null,ft=null;function H_(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(yo,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:K_,G_=Math.log,Q_=Math.LN2;function K_(t){return t>>>=0,t===0?32:31-(G_(t)/Q_|0)|0}var Ji=64,Zi=4194304;function Vr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ds(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vr(l):(s&=o,s!==0&&(r=Vr(s)))}else o=n&~i,o!==0?r=Vr(o):s!==0&&(r=Vr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Y_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ta(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _h(){var t=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),t}function tl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Li(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function X_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function yh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vh,au,wh,Eh,Ch,na=!1,es=[],Ut=null,jt=null,$t=null,ci=new Map,di=new Map,Ft=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $c(t,e){switch(t){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(e.pointerId)}}function Dr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bi(e),e!==null&&au(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z_(t,e,n,r,i){switch(e){case"focusin":return Ut=Dr(Ut,t,e,n,r,i),!0;case"dragenter":return jt=Dr(jt,t,e,n,r,i),!0;case"mouseover":return $t=Dr($t,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ci.set(s,Dr(ci.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,di.set(s,Dr(di.get(s)||null,t,e,n,r,i)),!0}return!1}function Sh(t){var e=pn(t.target);if(e!==null){var n=Fn(e);if(n!==null){if(e=n.tag,e===13){if(e=dh(n),e!==null){t.blockedOn=e,Ch(t.priority,function(){wh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _s(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ra(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else return e=bi(n),e!==null&&au(e),t.blockedOn=n,!1;e.shift()}return!0}function Wc(t,e,n){_s(t)&&n.delete(e)}function ey(){na=!1,Ut!==null&&_s(Ut)&&(Ut=null),jt!==null&&_s(jt)&&(jt=null),$t!==null&&_s($t)&&($t=null),ci.forEach(Wc),di.forEach(Wc)}function Or(t,e){t.blockedOn===e&&(t.blockedOn=null,na||(na=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,ey)))}function fi(t){function e(i){return Or(i,t)}if(0<es.length){Or(es[0],t);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ut!==null&&Or(Ut,t),jt!==null&&Or(jt,t),$t!==null&&Or($t,t),ci.forEach(e),di.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Sh(n),n.blockedOn===null&&Ft.shift()}var ir=Rt.ReactCurrentBatchConfig,Os=!0;function ty(t,e,n,r){var i=U,s=ir.transition;ir.transition=null;try{U=1,uu(t,e,n,r)}finally{U=i,ir.transition=s}}function ny(t,e,n,r){var i=U,s=ir.transition;ir.transition=null;try{U=4,uu(t,e,n,r)}finally{U=i,ir.transition=s}}function uu(t,e,n,r){if(Os){var i=ra(t,e,n,r);if(i===null)dl(t,e,r,Ms,n),$c(t,r);else if(Z_(i,t,e,n,r))r.stopPropagation();else if($c(t,r),e&4&&-1<J_.indexOf(t)){for(;i!==null;){var s=bi(i);if(s!==null&&vh(s),s=ra(t,e,n,r),s===null&&dl(t,e,r,Ms,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else dl(t,e,r,null,n)}}var Ms=null;function ra(t,e,n,r){if(Ms=null,t=su(r),t=pn(t),t!==null)if(e=Fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ms=t,null}function Ih(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W_()){case ou:return 1;case mh:return 4;case As:case V_:return 16;case gh:return 536870912;default:return 16}default:return 16}}var zt=null,cu=null,ys=null;function Th(){if(ys)return ys;var t,e=cu,n=e.length,r,i="value"in zt?zt.value:zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ys=i.slice(t,1<r?1-r:void 0)}function vs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ts(){return!0}function Vc(){return!1}function We(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ts:Vc,this.isPropagationStopped=Vc,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),e}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=We(Cr),Fi=J({},Cr,{view:0,detail:0}),ry=We(Fi),nl,rl,Mr,vo=J({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mr&&(Mr&&t.type==="mousemove"?(nl=t.screenX-Mr.screenX,rl=t.screenY-Mr.screenY):rl=nl=0,Mr=t),nl)},movementY:function(t){return"movementY"in t?t.movementY:rl}}),Hc=We(vo),iy=J({},vo,{dataTransfer:0}),sy=We(iy),oy=J({},Fi,{relatedTarget:0}),il=We(oy),ly=J({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=We(ly),uy=J({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=We(uy),dy=J({},Cr,{data:0}),Gc=We(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=py[t])?!!e[t]:!1}function fu(){return my}var gy=J({},Fi,{key:function(t){if(t.key){var e=fy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=We(gy),yy=J({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=We(yy),vy=J({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),wy=We(vy),Ey=J({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=We(Ey),Sy=J({},vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=We(Sy),Ty=[9,13,27,32],hu=St&&"CompositionEvent"in window,Kr=null;St&&"documentMode"in document&&(Kr=document.documentMode);var ky=St&&"TextEvent"in window&&!Kr,kh=St&&(!hu||Kr&&8<Kr&&11>=Kr),Kc=String.fromCharCode(32),Yc=!1;function Nh(t,e){switch(t){case"keyup":return Ty.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wn=!1;function Ny(t,e){switch(t){case"compositionend":return xh(e);case"keypress":return e.which!==32?null:(Yc=!0,Kc);case"textInput":return t=e.data,t===Kc&&Yc?null:t;default:return null}}function xy(t,e){if(Wn)return t==="compositionend"||!hu&&Nh(t,e)?(t=Th(),ys=cu=zt=null,Wn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kh&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ry[t.type]:e==="textarea"}function Rh(t,e,n,r){oh(r),e=Ls(e,"onChange"),0<e.length&&(n=new du("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yr=null,hi=null;function Py(t){Uh(t,0)}function wo(t){var e=Gn(t);if(Zf(e))return t}function Ay(t,e){if(t==="change")return e}var Ph=!1;if(St){var sl;if(St){var ol="oninput"in document;if(!ol){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),ol=typeof Xc.oninput=="function"}sl=ol}else sl=!1;Ph=sl&&(!document.documentMode||9<document.documentMode)}function Jc(){Yr&&(Yr.detachEvent("onpropertychange",Ah),hi=Yr=null)}function Ah(t){if(t.propertyName==="value"&&wo(hi)){var e=[];Rh(e,hi,t,su(t)),ch(Py,e)}}function Dy(t,e,n){t==="focusin"?(Jc(),Yr=e,hi=n,Yr.attachEvent("onpropertychange",Ah)):t==="focusout"&&Jc()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wo(hi)}function My(t,e){if(t==="click")return wo(e)}function Ly(t,e){if(t==="input"||t==="change")return wo(e)}function Fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:Fy;function pi(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bl.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Zc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ed(t,e){var n=Zc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function Dh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Oh(){for(var t=window,e=xs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xs(t.document)}return e}function pu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function by(t){var e=Oh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dh(n.ownerDocument.documentElement,n)){if(r!==null&&pu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ed(n,s);var o=ed(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zy=St&&"documentMode"in document&&11>=document.documentMode,Vn=null,ia=null,qr=null,sa=!1;function td(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sa||Vn==null||Vn!==xs(r)||(r=Vn,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&pi(qr,r)||(qr=r,r=Ls(ia,"onSelect"),0<r.length&&(e=new du("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vn)))}function ns(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hn={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},ll={},Mh={};St&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Eo(t){if(ll[t])return ll[t];if(!Hn[t])return t;var e=Hn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mh)return ll[t]=e[n];return t}var Lh=Eo("animationend"),Fh=Eo("animationiteration"),bh=Eo("animationstart"),zh=Eo("transitionend"),Bh=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(t,e){Bh.set(t,e),Ln(e,[t])}for(var al=0;al<nd.length;al++){var ul=nd[al],By=ul.toLowerCase(),Uy=ul[0].toUpperCase()+ul.slice(1);sn(By,"on"+Uy)}sn(Lh,"onAnimationEnd");sn(Fh,"onAnimationIteration");sn(bh,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(zh,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function rd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B_(r,e,void 0,t),t.currentTarget=null}function Uh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;rd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;rd(i,l,u),s=a}}}if(Ps)throw t=ea,Ps=!1,ea=null,t}function H(t,e){var n=e[ca];n===void 0&&(n=e[ca]=new Set);var r=t+"__bubble";n.has(r)||(jh(e,t,2,!1),n.add(r))}function cl(t,e,n){var r=0;e&&(r|=4),jh(n,t,r,e)}var rs="_reactListening"+Math.random().toString(36).slice(2);function mi(t){if(!t[rs]){t[rs]=!0,Kf.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||cl(n,!1,t),cl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rs]||(e[rs]=!0,cl("selectionchange",!1,e))}}function jh(t,e,n,r){switch(Ih(e)){case 1:var i=ty;break;case 4:i=ny;break;default:i=uu}n=i.bind(null,e,n,t),i=void 0,!Zl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function dl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=pn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ch(function(){var u=s,f=su(n),c=[];e:{var d=Bh.get(t);if(d!==void 0){var g=du,_=t;switch(t){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":g=_y;break;case"focusin":_="focus",g=il;break;case"focusout":_="blur",g=il;break;case"beforeblur":case"afterblur":g=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wy;break;case Lh:case Fh:case bh:g=ay;break;case zh:g=Cy;break;case"scroll":g=ry;break;case"wheel":g=Iy;break;case"copy":case"cut":case"paste":g=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qc}var v=(e&4)!==0,k=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ui(h,p),y!=null&&v.push(gi(h,y,m)))),k)break;h=h.return}0<v.length&&(d=new g(d,_,null,n,f),c.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Xl&&(_=n.relatedTarget||n.fromElement)&&(pn(_)||_[It]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?pn(_):null,_!==null&&(k=Fn(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Hc,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qc,y="onPointerLeave",p="onPointerEnter",h="pointer"),k=g==null?d:Gn(g),m=_==null?d:Gn(_),d=new v(y,h+"leave",g,n,f),d.target=k,d.relatedTarget=m,y=null,pn(f)===u&&(v=new v(p,h+"enter",_,n,f),v.target=m,v.relatedTarget=k,y=v),k=y,g&&_)t:{for(v=g,p=_,h=0,m=v;m;m=Bn(m))h++;for(m=0,y=p;y;y=Bn(y))m++;for(;0<h-m;)v=Bn(v),h--;for(;0<m-h;)p=Bn(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Bn(v),p=Bn(p)}v=null}else v=null;g!==null&&id(c,d,g,v,!1),_!==null&&k!==null&&id(c,k,_,v,!0)}}e:{if(d=u?Gn(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=Ay;else if(qc(d))if(Ph)C=Ly;else{C=Oy;var T=Dy}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=My);if(C&&(C=C(t,u))){Rh(c,C,n,f);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Gl(d,"number",d.value)}switch(T=u?Gn(u):window,t){case"focusin":(qc(T)||T.contentEditable==="true")&&(Vn=T,ia=u,qr=null);break;case"focusout":qr=ia=Vn=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,td(c,n,f);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":td(c,n,f)}var N;if(hu)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Wn?Nh(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(kh&&n.locale!=="ko"&&(Wn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Wn&&(N=Th()):(zt=f,cu="value"in zt?zt.value:zt.textContent,Wn=!0)),T=Ls(u,x),0<T.length&&(x=new Gc(x,t,null,n,f),c.push({event:x,listeners:T}),N?x.data=N:(N=xh(n),N!==null&&(x.data=N)))),(N=ky?Ny(t,n):xy(t,n))&&(u=Ls(u,"onBeforeInput"),0<u.length&&(f=new Gc("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=N))}Uh(c,e)})}function gi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ls(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ui(t,n),s!=null&&r.unshift(gi(t,s,i)),s=ui(t,e),s!=null&&r.push(gi(t,s,i))),t=t.return}return r}function Bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function id(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ui(n,s),a!=null&&o.unshift(gi(n,a,l))):i||(a=ui(n,s),a!=null&&o.push(gi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $y=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function sd(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(Wy,"")}function is(t,e,n){if(e=sd(e),sd(t)!==e&&n)throw Error(w(425))}function Fs(){}var oa=null,la=null;function aa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(t){return od.resolve(null).then(t).catch(Gy)}:ua;function Gy(t){setTimeout(function(){throw t})}function fl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(e)}function Wt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Sr,_i="__reactProps$"+Sr,It="__reactContainer$"+Sr,ca="__reactEvents$"+Sr,Qy="__reactListeners$"+Sr,Ky="__reactHandles$"+Sr;function pn(t){var e=t[dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[It]||n[dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ld(t);t!==null;){if(n=t[dt])return n;t=ld(t)}return e}t=n,n=t.parentNode}return null}function bi(t){return t=t[dt]||t[It],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Co(t){return t[_i]||null}var da=[],Qn=-1;function on(t){return{current:t}}function Q(t){0>Qn||(t.current=da[Qn],da[Qn]=null,Qn--)}function V(t,e){Qn++,da[Qn]=t.current,t.current=e}var Zt={},Se=on(Zt),De=on(!1),Sn=Zt;function dr(t,e){var n=t.type.contextTypes;if(!n)return Zt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(t){return t=t.childContextTypes,t!=null}function bs(){Q(De),Q(Se)}function ad(t,e,n){if(Se.current!==Zt)throw Error(w(168));V(Se,e),V(De,n)}function $h(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,D_(t)||"Unknown",i));return J({},n,r)}function zs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zt,Sn=Se.current,V(Se,t),V(De,De.current),!0}function ud(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=$h(t,e,Sn),r.__reactInternalMemoizedMergedChildContext=t,Q(De),Q(Se),V(Se,t)):Q(De),V(De,n)}var _t=null,So=!1,hl=!1;function Wh(t){_t===null?_t=[t]:_t.push(t)}function Yy(t){So=!0,Wh(t)}function ln(){if(!hl&&_t!==null){hl=!0;var t=0,e=U;try{var n=_t;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_t=null,So=!1}catch(i){throw _t!==null&&(_t=_t.slice(t+1)),ph(ou,ln),i}finally{U=e,hl=!1}}return null}var Kn=[],Yn=0,Bs=null,Us=0,Ve=[],He=0,In=null,yt=1,vt="";function cn(t,e){Kn[Yn++]=Us,Kn[Yn++]=Bs,Bs=t,Us=e}function Vh(t,e,n){Ve[He++]=yt,Ve[He++]=vt,Ve[He++]=In,In=t;var r=yt;t=vt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yt=1<<32-st(e)+i|n<<i|r,vt=s+t}else yt=1<<s|n<<i|r,vt=t}function mu(t){t.return!==null&&(cn(t,1),Vh(t,1,0))}function gu(t){for(;t===Bs;)Bs=Kn[--Yn],Kn[Yn]=null,Us=Kn[--Yn],Kn[Yn]=null;for(;t===In;)In=Ve[--He],Ve[He]=null,vt=Ve[--He],Ve[He]=null,yt=Ve[--He],Ve[He]=null}var Be=null,ze=null,K=!1,tt=null;function Hh(t,e){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,ze=Wt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=In!==null?{id:yt,overflow:vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,ze=null,!0):!1;default:return!1}}function fa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ha(t){if(K){var e=ze;if(e){var n=e;if(!cd(t,e)){if(fa(t))throw Error(w(418));e=Wt(n.nextSibling);var r=Be;e&&cd(t,e)?Hh(r,n):(t.flags=t.flags&-4097|2,K=!1,Be=t)}}else{if(fa(t))throw Error(w(418));t.flags=t.flags&-4097|2,K=!1,Be=t}}}function dd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function ss(t){if(t!==Be)return!1;if(!K)return dd(t),K=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!aa(t.type,t.memoizedProps)),e&&(e=ze)){if(fa(t))throw Gh(),Error(w(418));for(;e;)Hh(t,e),e=Wt(e.nextSibling)}if(dd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=Wt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=Be?Wt(t.stateNode.nextSibling):null;return!0}function Gh(){for(var t=ze;t;)t=Wt(t.nextSibling)}function fr(){ze=Be=null,K=!1}function _u(t){tt===null?tt=[t]:tt.push(t)}var qy=Rt.ReactCurrentBatchConfig;function Ze(t,e){if(t&&t.defaultProps){e=J({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var js=on(null),$s=null,qn=null,yu=null;function vu(){yu=qn=$s=null}function wu(t){var e=js.current;Q(js),t._currentValue=e}function pa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function sr(t,e){$s=t,yu=qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pe=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(yu!==t)if(t={context:t,memoizedValue:e,next:null},qn===null){if($s===null)throw Error(w(308));qn=t,$s.dependencies={lanes:0,firstContext:t}}else qn=qn.next=t;return e}var mn=null;function Eu(t){mn===null?mn=[t]:mn.push(t)}function Qh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Eu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tt(t,r)}function Tt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lt=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Et(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tt(t,n)}return i=r.interleaved,i===null?(e.next=e,Eu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tt(t,n)}function ws(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lu(t,n)}}function fd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ws(t,e,n,r){var i=t.updateQueue;Lt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(d=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,d);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(g,c,d):_,d==null)break e;c=J({},c,d);break e;case 2:Lt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,a=c):f=f.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kn|=o,t.lanes=o,t.memoizedState=c}}function hd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Yh=new Qf.Component().refs;function ma(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:J({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Io={isMounted:function(t){return(t=t._reactInternals)?Fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=Gt(t),s=Et(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vt(t,s,i),e!==null&&(ot(e,t,i,r),ws(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=Gt(t),s=Et(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vt(t,s,i),e!==null&&(ot(e,t,i,r),ws(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=Gt(t),i=Et(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vt(t,i,r),e!==null&&(ot(e,t,r,n),ws(e,t,r))}};function pd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!pi(n,r)||!pi(i,s):!0}function qh(t,e,n){var r=!1,i=Zt,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Oe(e)?Sn:Se.current,r=e.contextTypes,s=(r=r!=null)?dr(t,i):Zt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Io,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function md(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Io.enqueueReplaceState(e,e.state,null)}function ga(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yh,Cu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Oe(e)?Sn:Se.current,i.context=dr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ma(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Io.enqueueReplaceState(i,i.state,null),Ws(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Yh&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function os(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gd(t){var e=t._init;return e(t._payload)}function Xh(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Qt(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,y){return h===null||h.tag!==6?(h=wl(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,y){var C=m.type;return C===$n?f(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mt&&gd(C)===h.type)?(y=i(h,m.props),y.ref=Lr(p,h,m),y.return=p,y):(y=ks(m.type,m.key,m.props,null,p.mode,y),y.ref=Lr(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=El(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function f(p,h,m,y,C){return h===null||h.tag!==7?(h=En(m,p.mode,y,C),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yi:return m=ks(h.type,h.key,h.props,null,p.mode,m),m.ref=Lr(p,null,h),m.return=p,m;case jn:return h=El(h,p.mode,m),h.return=p,h;case Mt:var y=h._init;return c(p,y(h._payload),m)}if(Wr(h)||Pr(h))return h=En(h,p.mode,m,null),h.return=p,h;os(p,h)}return null}function d(p,h,m,y){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:return m.key===C?a(p,h,m,y):null;case jn:return m.key===C?u(p,h,m,y):null;case Mt:return C=m._init,d(p,h,C(m._payload),y)}if(Wr(m)||Pr(m))return C!==null?null:f(p,h,m,y,null);os(p,m)}return null}function g(p,h,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(h,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yi:return p=p.get(y.key===null?m:y.key)||null,a(h,p,y,C);case jn:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,C);case Mt:var T=y._init;return g(p,h,m,T(y._payload),C)}if(Wr(y)||Pr(y))return p=p.get(m)||null,f(h,p,y,C,null);os(h,y)}return null}function _(p,h,m,y){for(var C=null,T=null,N=h,x=h=0,te=null;N!==null&&x<m.length;x++){N.index>x?(te=N,N=null):te=N.sibling;var b=d(p,N,m[x],y);if(b===null){N===null&&(N=te);break}t&&N&&b.alternate===null&&e(p,N),h=s(b,h,x),T===null?C=b:T.sibling=b,T=b,N=te}if(x===m.length)return n(p,N),K&&cn(p,x),C;if(N===null){for(;x<m.length;x++)N=c(p,m[x],y),N!==null&&(h=s(N,h,x),T===null?C=N:T.sibling=N,T=N);return K&&cn(p,x),C}for(N=r(p,N);x<m.length;x++)te=g(N,p,x,m[x],y),te!==null&&(t&&te.alternate!==null&&N.delete(te.key===null?x:te.key),h=s(te,h,x),T===null?C=te:T.sibling=te,T=te);return t&&N.forEach(function(Xe){return e(p,Xe)}),K&&cn(p,x),C}function v(p,h,m,y){var C=Pr(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var T=C=null,N=h,x=h=0,te=null,b=m.next();N!==null&&!b.done;x++,b=m.next()){N.index>x?(te=N,N=null):te=N.sibling;var Xe=d(p,N,b.value,y);if(Xe===null){N===null&&(N=te);break}t&&N&&Xe.alternate===null&&e(p,N),h=s(Xe,h,x),T===null?C=Xe:T.sibling=Xe,T=Xe,N=te}if(b.done)return n(p,N),K&&cn(p,x),C;if(N===null){for(;!b.done;x++,b=m.next())b=c(p,b.value,y),b!==null&&(h=s(b,h,x),T===null?C=b:T.sibling=b,T=b);return K&&cn(p,x),C}for(N=r(p,N);!b.done;x++,b=m.next())b=g(N,p,x,b.value,y),b!==null&&(t&&b.alternate!==null&&N.delete(b.key===null?x:b.key),h=s(b,h,x),T===null?C=b:T.sibling=b,T=b);return t&&N.forEach(function(xr){return e(p,xr)}),K&&cn(p,x),C}function k(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===$n&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:e:{for(var C=m.key,T=h;T!==null;){if(T.key===C){if(C=m.type,C===$n){if(T.tag===7){n(p,T.sibling),h=i(T,m.props.children),h.return=p,p=h;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mt&&gd(C)===T.type){n(p,T.sibling),h=i(T,m.props),h.ref=Lr(p,T,m),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===$n?(h=En(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=ks(m.type,m.key,m.props,null,p.mode,y),y.ref=Lr(p,h,m),y.return=p,p=y)}return o(p);case jn:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=El(m,p.mode,y),h.return=p,p=h}return o(p);case Mt:return T=m._init,k(p,h,T(m._payload),y)}if(Wr(m))return _(p,h,m,y);if(Pr(m))return v(p,h,m,y);os(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=wl(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return k}var hr=Xh(!0),Jh=Xh(!1),zi={},ht=on(zi),yi=on(zi),vi=on(zi);function gn(t){if(t===zi)throw Error(w(174));return t}function Su(t,e){switch(V(vi,e),V(yi,t),V(ht,zi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kl(e,t)}Q(ht),V(ht,e)}function pr(){Q(ht),Q(yi),Q(vi)}function Zh(t){gn(vi.current);var e=gn(ht.current),n=Kl(e,t.type);e!==n&&(V(yi,t),V(ht,n))}function Iu(t){yi.current===t&&(Q(ht),Q(yi))}var Y=on(0);function Vs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pl=[];function Tu(){for(var t=0;t<pl.length;t++)pl[t]._workInProgressVersionPrimary=null;pl.length=0}var Es=Rt.ReactCurrentDispatcher,ml=Rt.ReactCurrentBatchConfig,Tn=0,X=null,se=null,de=null,Hs=!1,Xr=!1,wi=0,Xy=0;function ve(){throw Error(w(321))}function ku(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Nu(t,e,n,r,i,s){if(Tn=s,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Es.current=t===null||t.memoizedState===null?tv:nv,t=n(r,i),Xr){s=0;do{if(Xr=!1,wi=0,25<=s)throw Error(w(301));s+=1,de=se=null,e.updateQueue=null,Es.current=rv,t=n(r,i)}while(Xr)}if(Es.current=Gs,e=se!==null&&se.next!==null,Tn=0,de=se=X=null,Hs=!1,e)throw Error(w(300));return t}function xu(){var t=wi!==0;return wi=0,t}function ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?X.memoizedState=de=t:de=de.next=t,de}function qe(){if(se===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=de===null?X.memoizedState:de.next;if(e!==null)de=e,se=t;else{if(t===null)throw Error(w(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?X.memoizedState=de=t:de=de.next=t}return de}function Ei(t,e){return typeof e=="function"?e(t):e}function gl(t){var e=qe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((Tn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,X.lanes|=f,kn|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,at(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,X.lanes|=s,kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _l(t){var e=qe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Pe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ep(){}function tp(t,e){var n=X,r=qe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,Ru(ip.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Ci(9,rp.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(w(349));Tn&30||np(n,e,i)}return i}function np(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rp(t,e,n,r){e.value=n,e.getSnapshot=r,sp(e)&&op(t)}function ip(t,e,n){return n(function(){sp(e)&&op(t)})}function sp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function op(t){var e=Tt(t,1);e!==null&&ot(e,t,1,-1)}function _d(t){var e=ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:t},e.queue=t,t=t.dispatch=ev.bind(null,X,t),[e.memoizedState,t]}function Ci(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lp(){return qe().memoizedState}function Cs(t,e,n,r){var i=ct();X.flags|=t,i.memoizedState=Ci(1|e,n,void 0,r===void 0?null:r)}function To(t,e,n,r){var i=qe();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&ku(r,o.deps)){i.memoizedState=Ci(e,n,s,r);return}}X.flags|=t,i.memoizedState=Ci(1|e,n,s,r)}function yd(t,e){return Cs(8390656,8,t,e)}function Ru(t,e){return To(2048,8,t,e)}function ap(t,e){return To(4,2,t,e)}function up(t,e){return To(4,4,t,e)}function cp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dp(t,e,n){return n=n!=null?n.concat([t]):null,To(4,4,cp.bind(null,e,t),n)}function Pu(){}function fp(t,e){var n=qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ku(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hp(t,e){var n=qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ku(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pp(t,e,n){return Tn&21?(at(n,e)||(n=_h(),X.lanes|=n,kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pe=!0),t.memoizedState=n)}function Jy(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=ml.transition;ml.transition={};try{t(!1),e()}finally{U=n,ml.transition=r}}function mp(){return qe().memoizedState}function Zy(t,e,n){var r=Gt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gp(t))_p(e,n);else if(n=Qh(t,e,n,r),n!==null){var i=ke();ot(n,t,r,i),yp(n,e,r)}}function ev(t,e,n){var r=Gt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gp(t))_p(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,o)){var a=e.interleaved;a===null?(i.next=i,Eu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Qh(t,e,i,r),n!==null&&(i=ke(),ot(n,t,r,i),yp(n,e,r))}}function gp(t){var e=t.alternate;return t===X||e!==null&&e===X}function _p(t,e){Xr=Hs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lu(t,n)}}var Gs={readContext:Ye,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},tv={readContext:Ye,useCallback:function(t,e){return ct().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:yd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cs(4194308,4,cp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cs(4,2,t,e)},useMemo:function(t,e){var n=ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zy.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=ct();return t={current:t},e.memoizedState=t},useState:_d,useDebugValue:Pu,useDeferredValue:function(t){return ct().memoizedState=t},useTransition:function(){var t=_d(!1),e=t[0];return t=Jy.bind(null,t[1]),ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=X,i=ct();if(K){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),pe===null)throw Error(w(349));Tn&30||np(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yd(ip.bind(null,r,s,t),[t]),r.flags|=2048,Ci(9,rp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ct(),e=pe.identifierPrefix;if(K){var n=vt,r=yt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nv={readContext:Ye,useCallback:fp,useContext:Ye,useEffect:Ru,useImperativeHandle:dp,useInsertionEffect:ap,useLayoutEffect:up,useMemo:hp,useReducer:gl,useRef:lp,useState:function(){return gl(Ei)},useDebugValue:Pu,useDeferredValue:function(t){var e=qe();return pp(e,se.memoizedState,t)},useTransition:function(){var t=gl(Ei)[0],e=qe().memoizedState;return[t,e]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1},rv={readContext:Ye,useCallback:fp,useContext:Ye,useEffect:Ru,useImperativeHandle:dp,useInsertionEffect:ap,useLayoutEffect:up,useMemo:hp,useReducer:_l,useRef:lp,useState:function(){return _l(Ei)},useDebugValue:Pu,useDeferredValue:function(t){var e=qe();return se===null?e.memoizedState=t:pp(e,se.memoizedState,t)},useTransition:function(){var t=_l(Ei)[0],e=qe().memoizedState;return[t,e]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1};function mr(t,e){try{var n="",r=e;do n+=A_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _a(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function vp(t,e,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ks||(Ks=!0,Na=r),_a(t,e)},n}function wp(t,e,n){n=Et(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_a(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_a(t,e),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yv.bind(null,t,e,n),e.then(t,t))}function wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ed(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Et(-1,1),e.tag=2,Vt(n,e,1))),n.lanes|=1),t)}var sv=Rt.ReactCurrentOwner,Pe=!1;function Ie(t,e,n,r){e.child=t===null?Jh(e,null,n,r):hr(e,t.child,n,r)}function Cd(t,e,n,r,i){n=n.render;var s=e.ref;return sr(e,i),r=Nu(t,e,n,r,s,i),n=xu(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kt(t,e,i)):(K&&n&&mu(e),e.flags|=1,Ie(t,e,r,i),e.child)}function Sd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ep(t,e,s,r,i)):(t=ks(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(o,r)&&t.ref===e.ref)return kt(t,e,i)}return e.flags|=1,t=Qt(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ep(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(pi(s,r)&&t.ref===e.ref)if(Pe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pe=!0);else return e.lanes=t.lanes,kt(t,e,i)}return ya(t,e,n,r,i)}function Cp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Jn,be),be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(Jn,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(Jn,be),be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(Jn,be),be|=r;return Ie(t,e,i,n),e.child}function Sp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ya(t,e,n,r,i){var s=Oe(n)?Sn:Se.current;return s=dr(e,s),sr(e,i),n=Nu(t,e,n,r,s,i),r=xu(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kt(t,e,i)):(K&&r&&mu(e),e.flags|=1,Ie(t,e,n,i),e.child)}function Id(t,e,n,r,i){if(Oe(n)){var s=!0;zs(e)}else s=!1;if(sr(e,i),e.stateNode===null)Ss(t,e),qh(e,n,r),ga(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Oe(n)?Sn:Se.current,u=dr(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&md(e,o,r,u),Lt=!1;var d=e.memoizedState;o.state=d,Ws(e,r,o,i),a=e.memoizedState,l!==r||d!==a||De.current||Lt?(typeof f=="function"&&(ma(e,n,f,r),a=e.memoizedState),(l=Lt||pd(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kh(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Ze(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Oe(n)?Sn:Se.current,a=dr(e,a));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&md(e,o,r,a),Lt=!1,d=e.memoizedState,o.state=d,Ws(e,r,o,i);var _=e.memoizedState;l!==c||d!==_||De.current||Lt?(typeof g=="function"&&(ma(e,n,g,r),_=e.memoizedState),(u=Lt||pd(e,n,u,r,d,_,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return va(t,e,n,r,s,i)}function va(t,e,n,r,i,s){Sp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ud(e,n,!1),kt(t,e,s);r=e.stateNode,sv.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hr(e,t.child,null,s),e.child=hr(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&ud(e,n,!0),e.child}function Ip(t){var e=t.stateNode;e.pendingContext?ad(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ad(t,e.context,!1),Su(t,e.containerInfo)}function Td(t,e,n,r,i){return fr(),_u(i),e.flags|=256,Ie(t,e,n,r),e.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function Ea(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tp(t,e,n){var r=e.pendingProps,i=Y.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(Y,i&1),t===null)return ha(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xo(o,r,0,null),t=En(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ea(n),e.memoizedState=wa,t):Au(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ov(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Qt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qt(l,s):(s=En(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ea(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wa,r}return s=t.child,t=s.sibling,r=Qt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Au(t,e){return e=xo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ls(t,e,n,r){return r!==null&&_u(r),hr(e,t.child,null,n),t=Au(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ov(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yl(Error(w(422))),ls(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xo({mode:"visible",children:r.children},i,0,null),s=En(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hr(e,t.child,null,o),e.child.memoizedState=Ea(o),e.memoizedState=wa,s);if(!(e.mode&1))return ls(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=yl(s,r,void 0),ls(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pe||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tt(t,i),ot(r,t,i,-1))}return bu(),r=yl(Error(w(421))),ls(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ze=Wt(i.nextSibling),Be=e,K=!0,tt=null,t!==null&&(Ve[He++]=yt,Ve[He++]=vt,Ve[He++]=In,yt=t.id,vt=t.overflow,In=e),e=Au(e,r.children),e.flags|=4096,e)}function kd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pa(t.return,e,n)}function vl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=Y.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kd(t,n,e);else if(t.tag===19)kd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(Y,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vs(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vs(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vl(e,!0,n,null,s);break;case"together":vl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ss(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Qt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lv(t,e,n){switch(e.tag){case 3:Ip(e),fr();break;case 5:Zh(e);break;case 1:Oe(e.type)&&zs(e);break;case 4:Su(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(js,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),e.flags|=128,null):n&e.child.childLanes?Tp(t,e,n):(V(Y,Y.current&1),t=kt(t,e,n),t!==null?t.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,Cp(t,e,n)}return kt(t,e,n)}var Np,Ca,xp,Rp;Np=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ca=function(){};xp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gn(ht.current);var s=null;switch(n){case"input":i=Vl(t,i),r=Vl(t,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=Ql(t,i),r=Ql(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fs)}Yl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fr(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function av(t,e,n){var r=e.pendingProps;switch(gu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return Oe(e.type)&&bs(),we(e),null;case 3:return r=e.stateNode,pr(),Q(De),Q(Se),Tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ss(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tt!==null&&(Pa(tt),tt=null))),Ca(t,e),we(e),null;case 5:Iu(e);var i=gn(vi.current);if(n=e.type,t!==null&&e.stateNode!=null)xp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return we(e),null}if(t=gn(ht.current),ss(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dt]=e,r[_i]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)H(Hr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Lc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":bc(r,s),H("invalid",r)}Yl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&is(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&is(r.textContent,l,t),i=["children",""+l]):li.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":qi(r),Fc(r,s,!0);break;case"textarea":qi(r),zc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dt]=e,t[_i]=r,Np(t,e,!1,!1),e.stateNode=t;e:{switch(o=ql(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)H(Hr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Lc(t,r),i=Vl(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),H("invalid",t);break;case"textarea":bc(t,r),i=Ql(t,r),H("invalid",t);break;default:i=r}Yl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?sh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rh(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ai(t,a):typeof a=="number"&&ai(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(li.hasOwnProperty(s)?a!=null&&s==="onScroll"&&H("scroll",t):a!=null&&tu(t,s,a,o))}switch(n){case"input":qi(t),Fc(t,r,!1);break;case"textarea":qi(t),zc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?er(t,!!r.multiple,s,!1):r.defaultValue!=null&&er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)Rp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=gn(vi.current),gn(ht.current),ss(e)){if(r=e.stateNode,n=e.memoizedProps,r[dt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:is(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=e,e.stateNode=r}return we(e),null;case 13:if(Q(Y),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(K&&ze!==null&&e.mode&1&&!(e.flags&128))Gh(),fr(),e.flags|=98560,s=!1;else if(s=ss(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[dt]=e}else fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else tt!==null&&(Pa(tt),tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Y.current&1?ae===0&&(ae=3):bu())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return pr(),Ca(t,e),t===null&&mi(e.stateNode.containerInfo),we(e),null;case 10:return wu(e.type._context),we(e),null;case 17:return Oe(e.type)&&bs(),we(e),null;case 19:if(Q(Y),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fr(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vs(t),o!==null){for(e.flags|=128,Fr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>gr&&(e.flags|=128,r=!0,Fr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vs(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return we(e),null}else 2*re()-s.renderingStartTime>gr&&n!==1073741824&&(e.flags|=128,r=!0,Fr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return Fu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function uv(t,e){switch(gu(e),e.tag){case 1:return Oe(e.type)&&bs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pr(),Q(De),Q(Se),Tu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Iu(e),null;case 13:if(Q(Y),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Y),null;case 4:return pr(),null;case 10:return wu(e.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var as=!1,Ee=!1,cv=typeof WeakSet=="function"?WeakSet:Set,S=null;function Xn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function Sa(t,e,n){try{n()}catch(r){Z(t,e,r)}}var Nd=!1;function dv(t,e){if(oa=Os,t=Oh(),pu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:t,selectionRange:n},Os=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,k=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ze(e.type,v),k);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){Z(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return _=Nd,Nd=!1,_}function Jr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sa(e,n,s)}i=i.next}while(i!==r)}}function ko(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ia(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pp(t){var e=t.alternate;e!==null&&(t.alternate=null,Pp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dt],delete e[_i],delete e[ca],delete e[Qy],delete e[Ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ap(t){return t.tag===5||t.tag===3||t.tag===4}function xd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ta(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fs));else if(r!==4&&(t=t.child,t!==null))for(Ta(t,e,n),t=t.sibling;t!==null;)Ta(t,e,n),t=t.sibling}function ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ka(t,e,n),t=t.sibling;t!==null;)ka(t,e,n),t=t.sibling}var me=null,et=!1;function Ot(t,e,n){for(n=n.child;n!==null;)Dp(t,e,n),n=n.sibling}function Dp(t,e,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:Ee||Xn(n,e);case 6:var r=me,i=et;me=null,Ot(t,e,n),me=r,et=i,me!==null&&(et?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(et?(t=me,n=n.stateNode,t.nodeType===8?fl(t.parentNode,n):t.nodeType===1&&fl(t,n),fi(t)):fl(me,n.stateNode));break;case 4:r=me,i=et,me=n.stateNode.containerInfo,et=!0,Ot(t,e,n),me=r,et=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sa(n,e,o),i=i.next}while(i!==r)}Ot(t,e,n);break;case 1:if(!Ee&&(Xn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,e,l)}Ot(t,e,n);break;case 21:Ot(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ot(t,e,n),Ee=r):Ot(t,e,n);break;default:Ot(t,e,n)}}function Rd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cv),e.forEach(function(r){var i=wv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,et=!1;break e;case 3:me=l.stateNode.containerInfo,et=!0;break e;case 4:me=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(me===null)throw Error(w(160));Dp(s,o,i),me=null,et=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Z(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Op(e,t),e=e.sibling}function Op(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(e,t),ut(t),r&4){try{Jr(3,t,t.return),ko(3,t)}catch(v){Z(t,t.return,v)}try{Jr(5,t,t.return)}catch(v){Z(t,t.return,v)}}break;case 1:Je(e,t),ut(t),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Je(e,t),ut(t),r&512&&n!==null&&Xn(n,n.return),t.flags&32){var i=t.stateNode;try{ai(i,"")}catch(v){Z(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&eh(i,s),ql(l,o);var u=ql(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?sh(i,c):f==="dangerouslySetInnerHTML"?rh(i,c):f==="children"?ai(i,c):tu(i,f,c,u)}switch(l){case"input":Hl(i,s);break;case"textarea":th(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?er(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?er(i,!!s.multiple,s.defaultValue,!0):er(i,!!s.multiple,s.multiple?[]:"",!1))}i[_i]=s}catch(v){Z(t,t.return,v)}}break;case 6:if(Je(e,t),ut(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Z(t,t.return,v)}}break;case 3:if(Je(e,t),ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(e.containerInfo)}catch(v){Z(t,t.return,v)}break;case 4:Je(e,t),ut(t);break;case 13:Je(e,t),ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mu=re())),r&4&&Rd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||f,Je(e,t),Ee=u):Je(e,t),ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(S=t,f=t.child;f!==null;){for(c=S=f;S!==null;){switch(d=S,g=d.child,d.tag){case 0:case 11:case 14:case 15:Jr(4,d,d.return);break;case 1:Xn(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:Xn(d,d.return);break;case 22:if(d.memoizedState!==null){Ad(c);continue}}g!==null?(g.return=d,S=g):Ad(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ih("display",o))}catch(v){Z(t,t.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Z(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Je(e,t),ut(t),r&4&&Rd(t);break;case 21:break;default:Je(e,t),ut(t)}}function ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ap(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var s=xd(t);ka(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xd(t);Ta(t,l,o);break;default:throw Error(w(161))}}catch(a){Z(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fv(t,e,n){S=t,Mp(t)}function Mp(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||as;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=as;var u=Ee;if(as=o,(Ee=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Dd(i):a!==null?(a.return=o,S=a):Dd(i);for(;s!==null;)S=s,Mp(s),s=s.sibling;S=i,as=l,Ee=u}Pd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Pd(t)}}function Pd(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||ko(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ze(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&fi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||e.flags&512&&Ia(e)}catch(d){Z(e,e.return,d)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function Ad(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function Dd(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ko(4,e)}catch(a){Z(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Z(e,i,a)}}var s=e.return;try{Ia(e)}catch(a){Z(e,s,a)}break;case 5:var o=e.return;try{Ia(e)}catch(a){Z(e,o,a)}}}catch(a){Z(e,e.return,a)}if(e===t){S=null;break}var l=e.sibling;if(l!==null){l.return=e.return,S=l;break}S=e.return}}var hv=Math.ceil,Qs=Rt.ReactCurrentDispatcher,Du=Rt.ReactCurrentOwner,Qe=Rt.ReactCurrentBatchConfig,z=0,pe=null,ie=null,_e=0,be=0,Jn=on(0),ae=0,Si=null,kn=0,No=0,Ou=0,Zr=null,Re=null,Mu=0,gr=1/0,gt=null,Ks=!1,Na=null,Ht=null,us=!1,Bt=null,Ys=0,ei=0,xa=null,Is=-1,Ts=0;function ke(){return z&6?re():Is!==-1?Is:Is=re()}function Gt(t){return t.mode&1?z&2&&_e!==0?_e&-_e:qy.transition!==null?(Ts===0&&(Ts=_h()),Ts):(t=U,t!==0||(t=window.event,t=t===void 0?16:Ih(t.type)),t):1}function ot(t,e,n,r){if(50<ei)throw ei=0,xa=null,Error(w(185));Li(t,n,r),(!(z&2)||t!==pe)&&(t===pe&&(!(z&2)&&(No|=n),ae===4&&bt(t,_e)),Me(t,r),n===1&&z===0&&!(e.mode&1)&&(gr=re()+500,So&&ln()))}function Me(t,e){var n=t.callbackNode;q_(t,e);var r=Ds(t,t===pe?_e:0);if(r===0)n!==null&&jc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jc(n),e===1)t.tag===0?Yy(Od.bind(null,t)):Wh(Od.bind(null,t)),Hy(function(){!(z&6)&&ln()}),n=null;else{switch(yh(r)){case 1:n=ou;break;case 4:n=mh;break;case 16:n=As;break;case 536870912:n=gh;break;default:n=As}n=$p(n,Lp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lp(t,e){if(Is=-1,Ts=0,z&6)throw Error(w(327));var n=t.callbackNode;if(or()&&t.callbackNode!==n)return null;var r=Ds(t,t===pe?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qs(t,r);else{e=r;var i=z;z|=2;var s=bp();(pe!==t||_e!==e)&&(gt=null,gr=re()+500,wn(t,e));do try{gv();break}catch(l){Fp(t,l)}while(1);vu(),Qs.current=s,z=i,ie!==null?e=0:(pe=null,_e=0,e=ae)}if(e!==0){if(e===2&&(i=ta(t),i!==0&&(r=i,e=Ra(t,i))),e===1)throw n=Si,wn(t,0),bt(t,r),Me(t,re()),n;if(e===6)bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!pv(i)&&(e=qs(t,r),e===2&&(s=ta(t),s!==0&&(r=s,e=Ra(t,s))),e===1))throw n=Si,wn(t,0),bt(t,r),Me(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:dn(t,Re,gt);break;case 3:if(bt(t,r),(r&130023424)===r&&(e=Mu+500-re(),10<e)){if(Ds(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ua(dn.bind(null,t,Re,gt),e);break}dn(t,Re,gt);break;case 4:if(bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hv(r/1960))-r,10<r){t.timeoutHandle=ua(dn.bind(null,t,Re,gt),r);break}dn(t,Re,gt);break;case 5:dn(t,Re,gt);break;default:throw Error(w(329))}}}return Me(t,re()),t.callbackNode===n?Lp.bind(null,t):null}function Ra(t,e){var n=Zr;return t.current.memoizedState.isDehydrated&&(wn(t,e).flags|=256),t=qs(t,e),t!==2&&(e=Re,Re=n,e!==null&&Pa(e)),t}function Pa(t){Re===null?Re=t:Re.push.apply(Re,t)}function pv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bt(t,e){for(e&=~Ou,e&=~No,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function Od(t){if(z&6)throw Error(w(327));or();var e=Ds(t,0);if(!(e&1))return Me(t,re()),null;var n=qs(t,e);if(t.tag!==0&&n===2){var r=ta(t);r!==0&&(e=r,n=Ra(t,r))}if(n===1)throw n=Si,wn(t,0),bt(t,e),Me(t,re()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dn(t,Re,gt),Me(t,re()),null}function Lu(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(gr=re()+500,So&&ln())}}function Nn(t){Bt!==null&&Bt.tag===0&&!(z&6)&&or();var e=z;z|=1;var n=Qe.transition,r=U;try{if(Qe.transition=null,U=1,t)return t()}finally{U=r,Qe.transition=n,z=e,!(z&6)&&ln()}}function Fu(){be=Jn.current,Q(Jn)}function wn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vy(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bs();break;case 3:pr(),Q(De),Q(Se),Tu();break;case 5:Iu(r);break;case 4:pr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:wu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(pe=t,ie=t=Qt(t.current,null),_e=be=e,ae=0,Si=null,Ou=No=kn=0,Re=Zr=null,mn!==null){for(e=0;e<mn.length;e++)if(n=mn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mn=null}return t}function Fp(t,e){do{var n=ie;try{if(vu(),Es.current=Gs,Hs){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hs=!1}if(Tn=0,de=se=X=null,Xr=!1,wi=0,Du.current=null,n===null||n.return===null){ae=1,Si=e,ie=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=wd(o);if(g!==null){g.flags&=-257,Ed(g,o,l,s,e),g.mode&1&&vd(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){vd(s,u,e),bu();break e}a=Error(w(426))}}else if(K&&l.mode&1){var k=wd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ed(k,o,l,s,e),_u(mr(a,l));break e}}s=a=mr(a,l),ae!==4&&(ae=2),Zr===null?Zr=[s]:Zr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=vp(s,a,e);fd(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=wp(s,l,e);fd(s,y);break e}}s=s.return}while(s!==null)}Bp(n)}catch(C){e=C,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function bp(){var t=Qs.current;return Qs.current=Gs,t===null?Gs:t}function bu(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(kn&268435455)&&!(No&268435455)||bt(pe,_e)}function qs(t,e){var n=z;z|=2;var r=bp();(pe!==t||_e!==e)&&(gt=null,wn(t,e));do try{mv();break}catch(i){Fp(t,i)}while(1);if(vu(),z=n,Qs.current=r,ie!==null)throw Error(w(261));return pe=null,_e=0,ae}function mv(){for(;ie!==null;)zp(ie)}function gv(){for(;ie!==null&&!j_();)zp(ie)}function zp(t){var e=jp(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?Bp(t):ie=e,Du.current=null}function Bp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uv(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,ie=null;return}}else if(n=av(n,e,be),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);ae===0&&(ae=5)}function dn(t,e,n){var r=U,i=Qe.transition;try{Qe.transition=null,U=1,_v(t,e,n,r)}finally{Qe.transition=i,U=r}return null}function _v(t,e,n,r){do or();while(Bt!==null);if(z&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X_(t,s),t===pe&&(ie=pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||us||(us=!0,$p(As,function(){return or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var o=U;U=1;var l=z;z|=4,Du.current=null,dv(t,n),Op(n,t),by(la),Os=!!oa,la=oa=null,t.current=n,fv(n),$_(),z=l,U=o,Qe.transition=s}else t.current=n;if(us&&(us=!1,Bt=t,Ys=i),s=t.pendingLanes,s===0&&(Ht=null),H_(n.stateNode),Me(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ks)throw Ks=!1,t=Na,Na=null,t;return Ys&1&&t.tag!==0&&or(),s=t.pendingLanes,s&1?t===xa?ei++:(ei=0,xa=t):ei=0,ln(),null}function or(){if(Bt!==null){var t=yh(Ys),e=Qe.transition,n=U;try{if(Qe.transition=null,U=16>t?16:t,Bt===null)var r=!1;else{if(t=Bt,Bt=null,Ys=0,z&6)throw Error(w(331));var i=z;for(z|=4,S=t.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var f=S;switch(f.tag){case 0:case 11:case 15:Jr(8,f,s)}var c=f.child;if(c!==null)c.return=f,S=c;else for(;S!==null;){f=S;var d=f.sibling,g=f.return;if(Pp(f),f===u){S=null;break}if(d!==null){d.return=g,S=d;break}S=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,S=p;break e}S=s.return}}var h=t.current;for(S=h;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=h;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ko(9,l)}}catch(C){Z(l,l.return,C)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(z=i,ln(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(yo,t)}catch{}r=!0}return r}finally{U=n,Qe.transition=e}}return!1}function Md(t,e,n){e=mr(n,e),e=vp(t,e,1),t=Vt(t,e,1),e=ke(),t!==null&&(Li(t,1,e),Me(t,e))}function Z(t,e,n){if(t.tag===3)Md(t,t,n);else for(;e!==null;){if(e.tag===3){Md(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){t=mr(n,t),t=wp(e,t,1),e=Vt(e,t,1),t=ke(),e!==null&&(Li(e,1,t),Me(e,t));break}}e=e.return}}function yv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(_e&n)===n&&(ae===4||ae===3&&(_e&130023424)===_e&&500>re()-Mu?wn(t,0):Ou|=n),Me(t,e)}function Up(t,e){e===0&&(t.mode&1?(e=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):e=1);var n=ke();t=Tt(t,e),t!==null&&(Li(t,e,n),Me(t,n))}function vv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Up(t,n)}function wv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Up(t,n)}var jp;jp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||De.current)Pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pe=!1,lv(t,e,n);Pe=!!(t.flags&131072)}else Pe=!1,K&&e.flags&1048576&&Vh(e,Us,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ss(t,e),t=e.pendingProps;var i=dr(e,Se.current);sr(e,n),i=Nu(null,e,r,t,i,n);var s=xu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Oe(r)?(s=!0,zs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cu(e),i.updater=Io,e.stateNode=i,i._reactInternals=e,ga(e,r,t,n),e=va(null,e,r,!0,s,n)):(e.tag=0,K&&s&&mu(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ss(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Cv(r),t=Ze(r,t),i){case 0:e=ya(null,e,r,t,n);break e;case 1:e=Id(null,e,r,t,n);break e;case 11:e=Cd(null,e,r,t,n);break e;case 14:e=Sd(null,e,r,Ze(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),ya(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Id(t,e,r,i,n);case 3:e:{if(Ip(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kh(t,e),Ws(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mr(Error(w(423)),e),e=Td(t,e,r,n,i);break e}else if(r!==i){i=mr(Error(w(424)),e),e=Td(t,e,r,n,i);break e}else for(ze=Wt(e.stateNode.containerInfo.firstChild),Be=e,K=!0,tt=null,n=Jh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){e=kt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return Zh(e),t===null&&ha(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,aa(r,i)?o=null:s!==null&&aa(r,s)&&(e.flags|=32),Sp(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&ha(e),null;case 13:return Tp(t,e,n);case 4:return Su(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hr(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Cd(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(js,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!De.current){e=kt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Et(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pa(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,sr(e,n),i=Ye(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=Ze(r,e.pendingProps),i=Ze(r.type,i),Sd(t,e,r,i,n);case 15:return Ep(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Ss(t,e),e.tag=1,Oe(r)?(t=!0,zs(e)):t=!1,sr(e,n),qh(e,r,i),ga(e,r,i,n),va(null,e,r,!0,t,n);case 19:return kp(t,e,n);case 22:return Cp(t,e,n)}throw Error(w(156,e.tag))};function $p(t,e){return ph(t,e)}function Ev(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,n,r){return new Ev(t,e,n,r)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cv(t){if(typeof t=="function")return zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ru)return 11;if(t===iu)return 14}return 2}function Qt(t,e){var n=t.alternate;return n===null?(n=Ge(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ks(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $n:return En(n.children,i,s,e);case nu:o=8,i|=8;break;case Ul:return t=Ge(12,n,e,i|2),t.elementType=Ul,t.lanes=s,t;case jl:return t=Ge(13,n,e,i),t.elementType=jl,t.lanes=s,t;case $l:return t=Ge(19,n,e,i),t.elementType=$l,t.lanes=s,t;case Xf:return xo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yf:o=10;break e;case qf:o=9;break e;case ru:o=11;break e;case iu:o=14;break e;case Mt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Ge(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function En(t,e,n,r){return t=Ge(7,t,r,e),t.lanes=n,t}function xo(t,e,n,r){return t=Ge(22,t,r,e),t.elementType=Xf,t.lanes=n,t.stateNode={isHidden:!1},t}function wl(t,e,n){return t=Ge(6,t,null,e),t.lanes=n,t}function El(t,e,n){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bu(t,e,n,r,i,s,o,l,a){return t=new Sv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ge(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(s),t}function Iv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wp(t){if(!t)return Zt;t=t._reactInternals;e:{if(Fn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Oe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Oe(n))return $h(t,n,e)}return e}function Vp(t,e,n,r,i,s,o,l,a){return t=Bu(n,r,!0,t,i,s,o,l,a),t.context=Wp(null),n=t.current,r=ke(),i=Gt(n),s=Et(r,i),s.callback=e??null,Vt(n,s,i),t.current.lanes=i,Li(t,i,r),Me(t,r),t}function Ro(t,e,n,r){var i=e.current,s=ke(),o=Gt(i);return n=Wp(n),e.context===null?e.context=n:e.pendingContext=n,e=Et(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vt(i,e,o),t!==null&&(ot(t,i,o,s),ws(t,i,o)),o}function Xs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ld(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uu(t,e){Ld(t,e),(t=t.alternate)&&Ld(t,e)}function Tv(){return null}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ju(t){this._internalRoot=t}Po.prototype.render=ju.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Ro(t,e,null,null)};Po.prototype.unmount=ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nn(function(){Ro(null,t,null,null)}),e[It]=null}};function Po(t){this._internalRoot=t}Po.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&Sh(t)}};function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ao(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function kv(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xs(o);s.call(u)}}var o=Vp(e,r,t,0,null,!1,!1,"",Fd);return t._reactRootContainer=o,t[It]=o.current,mi(t.nodeType===8?t.parentNode:t),Nn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Xs(a);l.call(u)}}var a=Bu(t,0,!1,null,null,!1,!1,"",Fd);return t._reactRootContainer=a,t[It]=a.current,mi(t.nodeType===8?t.parentNode:t),Nn(function(){Ro(e,a,n,r)}),a}function Do(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Xs(o);l.call(a)}}Ro(e,o,t,i)}else o=kv(n,e,t,i,r);return Xs(o)}vh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vr(e.pendingLanes);n!==0&&(lu(e,n|1),Me(e,re()),!(z&6)&&(gr=re()+500,ln()))}break;case 13:Nn(function(){var r=Tt(t,1);if(r!==null){var i=ke();ot(r,t,1,i)}}),Uu(t,1)}};au=function(t){if(t.tag===13){var e=Tt(t,134217728);if(e!==null){var n=ke();ot(e,t,134217728,n)}Uu(t,134217728)}};wh=function(t){if(t.tag===13){var e=Gt(t),n=Tt(t,e);if(n!==null){var r=ke();ot(n,t,e,r)}Uu(t,e)}};Eh=function(){return U};Ch=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Jl=function(t,e,n){switch(e){case"input":if(Hl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Co(r);if(!i)throw Error(w(90));Zf(r),Hl(r,i)}}}break;case"textarea":th(t,n);break;case"select":e=n.value,e!=null&&er(t,!!n.multiple,e,!1)}};ah=Lu;uh=Nn;var Nv={usingClientEntryPoint:!1,Events:[bi,Gn,Co,oh,lh,Lu]},br={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xv={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fh(t),t===null?null:t.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{yo=cs.inject(xv),ft=cs}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(e))throw Error(w(200));return Iv(t,e,null,n)};$e.createRoot=function(t,e){if(!$u(t))throw Error(w(299));var n=!1,r="",i=Hp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bu(t,1,!1,null,null,n,!1,r,i),t[It]=e.current,mi(t.nodeType===8?t.parentNode:t),new ju(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=fh(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return Nn(t)};$e.hydrate=function(t,e,n){if(!Ao(e))throw Error(w(200));return Do(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!$u(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vp(e,null,t,1,n??null,i,!1,s,o),t[It]=e.current,mi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Po(e)};$e.render=function(t,e,n){if(!Ao(e))throw Error(w(200));return Do(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Ao(t))throw Error(w(40));return t._reactRootContainer?(Nn(function(){Do(null,null,t,!1,function(){t._reactRootContainer=null,t[It]=null})}),!0):!1};$e.unstable_batchedUpdates=Lu;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ao(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Do(t,e,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$e})(T_);var bd=bl;Fl.createRoot=bd.createRoot,Fl.hydrateRoot=bd.hydrateRoot;function Rv({title:t,titleId:e,...n},r){return q.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},n),t?q.createElement("title",{id:e},t):null,q.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",clipRule:"evenodd"}))}const Pv=q.forwardRef(Rv),Av=Pv;function Dv({title:t,titleId:e,...n},r){return q.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},n),t?q.createElement("title",{id:e},t):null,q.createElement("path",{d:"M19.5 6h-15v9h15V6z"}),q.createElement("path",{fillRule:"evenodd",d:"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z",clipRule:"evenodd"}))}const Ov=q.forwardRef(Dv),Mv=Ov;function Lv(t){let e="px-4 py-3 rounded font-bold bg-blue-900 text-white",n="px-4 py-3 rounded text-black",r=[];return t.menuItems[0]?r[0]=e:r[0]=n,t.menuItems[1]?r[1]=e:r[1]=n,ge(Ns,{children:[ge("div",{className:"flex flex-row text-2xl font-bold text-blue-900 border-b mb-4 p-4",children:["MyTVShows ",P(Mv,{className:"ml-2 h-8"})]}),ge("ul",{children:[P("li",{className:r[0],children:P("button",{onClick:()=>t.menu(0),children:"Series guardadas"})}),P("li",{className:r[1],children:P("button",{onClick:()=>t.menu(1),children:"Buscar series"})})]})]})}function Gp(){return P("div",{className:"spinner-container",children:P("div",{className:"loading-spinner"})})}function Fv(t){const[e,n]=q.useState(),[r,i]=q.useState(""),[s,o]=q.useState(!1),l=c=>{i(c.target.value)};async function a(){try{o(!0);const c=await(await fetch(`https://omdbapi.com/?apikey=1a55c3a8&s=${r}`)).json();c.Search&&n(c.Search.filter(d=>d.Type==="series")),o(!1)}catch(c){console.log(c.message)}}function u(c){return t.datosSeries.filter(g=>g.imdbID===c).length}function f(c){function d(_){return P("button",{className:"text-sm border-1 border border-slate-600 rounded px-1 py-0.5 hover:text-white hover:bg-slate-600",onClick:()=>_.handleAdd(_.serieID),children:"Guardar"})}const g=P("p",{className:"text-sm disabled border-1 border bg-gray-200 text-gray-800 rounded px-1 py-0.5 ",children:"Guardardo"});if(c.resu!==void 0)return ge("div",{className:"component--resultados px-4",children:[P("p",{className:"pb-1 pt-4",children:"Resultados:"}),c.resu.map(_=>P("div",{className:"py-2 ",children:ge("div",{className:"flex flex-row shadow-md rounded-md bg-neutral-100 h-20",children:[P("img",{className:"rounded-l-md  w-2/12 object-cover ",src:_.Poster,alt:_.Title}),P("div",{className:"flex flex-col  flex-grow px-3  pt-1  ",children:P("div",{className:"text-1xl font-bold p-0.5",children:P("a",{target:"_blank",href:"https://www.imdb.com/title/"+_.imdbID,children:`${_.Title} (${_.Year})`})})}),P("div",{className:"flex flex-col  self-end  p-2 rounded-br-md",children:u(_.imdbID)>0?g:P(d,{handleAdd:c.handleAdd,serieID:_.imdbID})})]})},_.imdbID))]})}return ge(Ns,{children:[P("div",{className:"py-6",children:ge("div",{className:"px-4  flex flex-row flex-wrap justify-center",children:[P("div",{className:"py-4",children:"Ingrese el nombre de la serie: "}),ge("div",{children:[P("input",{type:"text",className:"border-1 border border-slate-400 rounded-md mr-2 px-2 py-0.5 focus:outline-slate-600	",name:"busca",onChange:l}),P("button",{onClick:a,type:"button",className:"rounded bg-slate-600 mx-2 px-2 py-0.5 text-white",children:"Buscar"})]})]})}),s?P(Gp,{}):P(f,{resu:e,handleAdd:t.handleAdd})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Ir(e)},Ir=function(t){return new Error("Firebase Database ("+Qp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[f],n[c],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yp=function(t){const e=Kp(t);return Wu.encodeByteArray(e,!0)},Js=function(t){return Yp(t).replace(/\./g,"")},Aa=function(t){try{return Wu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){return qp(void 0,t)}function qp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bv(n)||(t[n]=qp(t[n],e[n]));return t}function Bv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=()=>Uv().__FIREBASE_DEFAULTS__,$v=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Aa(t[1]);return e&&JSON.parse(e)},Xp=()=>{try{return jv()||$v()||Wv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vv=t=>{var e,n;return(n=(e=Xp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hv=t=>{const e=Vv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gv=()=>{var t;return(t=Xp())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Js(JSON.stringify(n)),Js(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kv())}function Yv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zp(){return Qp.NODE_ADMIN===!0}function em(){try{return typeof indexedDB=="object"}catch{return!1}}function tm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Xv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jv,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Zv(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function Zv(t,e){return t.replace(e0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const e0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return JSON.parse(t)}function oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ii(Aa(s[0])||""),n=Ii(Aa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},t0=function(t){const e=nm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},n0=function(t){const e=nm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zs(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function eo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bd(s)&&Bd(o)){if(!eo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Vu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=1e3,l0=2,a0=4*60*60*1e3,u0=.5;function Ud(t,e=o0,n=l0){const r=e*Math.pow(n,t),i=Math.round(u0*r*(Math.random()-.5)*2);return Math.min(a0,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Oo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f0(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:d0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d0(t){return t===fn?void 0:t}function f0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new c0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const p0={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},m0=$.INFO,g0={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},_0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=g0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=m0,this._logHandler=_0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const y0=(t,e)=>e.some(n=>t instanceof n);let jd,$d;function v0(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w0(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rm=new WeakMap,Da=new WeakMap,im=new WeakMap,Cl=new WeakMap,Gu=new WeakMap;function E0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rm.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function C0(t){if(Da.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Da.set(t,e)}let Oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S0(t){Oa=t(Oa)}function I0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sl(this),e,...n);return im.set(r,e.sort?e.sort():[e]),Kt(r)}:w0().includes(t)?function(...e){return t.apply(Sl(this),e),Kt(rm.get(this))}:function(...e){return Kt(t.apply(Sl(this),e))}}function T0(t){return typeof t=="function"?I0(t):(t instanceof IDBTransaction&&C0(t),y0(t,v0())?new Proxy(t,Oa):t)}function Kt(t){if(t instanceof IDBRequest)return E0(t);if(Cl.has(t))return Cl.get(t);const e=T0(t);return e!==t&&(Cl.set(t,e),Gu.set(e,t)),e}const Sl=t=>Gu.get(t);function sm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Kt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Kt(o.result),a.oldVersion,a.newVersion,Kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const k0=["get","getKey","getAll","getAllKeys","count"],N0=["put","add","delete","clear"],Il=new Map;function Wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Il.get(e))return Il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=N0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||k0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Il.set(e,s),s}S0(t=>({...t,get:(e,n,r)=>Wd(e,n)||t.get(e,n,r),has:(e,n)=>!!Wd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function R0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ma="@firebase/app",Vd="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Hu("@firebase/app"),P0="@firebase/app-compat",A0="@firebase/analytics-compat",D0="@firebase/analytics",O0="@firebase/app-check-compat",M0="@firebase/app-check",L0="@firebase/auth",F0="@firebase/auth-compat",b0="@firebase/database",z0="@firebase/database-compat",B0="@firebase/functions",U0="@firebase/functions-compat",j0="@firebase/installations",$0="@firebase/installations-compat",W0="@firebase/messaging",V0="@firebase/messaging-compat",H0="@firebase/performance",G0="@firebase/performance-compat",Q0="@firebase/remote-config",K0="@firebase/remote-config-compat",Y0="@firebase/storage",q0="@firebase/storage-compat",X0="@firebase/firestore",J0="@firebase/firestore-compat",Z0="firebase",ew="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="[DEFAULT]",tw={[Ma]:"fire-core",[P0]:"fire-core-compat",[D0]:"fire-analytics",[A0]:"fire-analytics-compat",[M0]:"fire-app-check",[O0]:"fire-app-check-compat",[L0]:"fire-auth",[F0]:"fire-auth-compat",[b0]:"fire-rtdb",[z0]:"fire-rtdb-compat",[B0]:"fire-fn",[U0]:"fire-fn-compat",[j0]:"fire-iid",[$0]:"fire-iid-compat",[W0]:"fire-fcm",[V0]:"fire-fcm-compat",[H0]:"fire-perf",[G0]:"fire-perf-compat",[Q0]:"fire-rc",[K0]:"fire-rc-compat",[Y0]:"fire-gcs",[q0]:"fire-gcs-compat",[X0]:"fire-fst",[J0]:"fire-fst-compat","fire-js":"fire-js",[Z0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map,Fa=new Map;function nw(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(Fa.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,t);for(const n of to.values())nw(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new Mo("app","Firebase",rw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=ew;function om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(n||(n=Gv()),!n)throw Yt.create("no-options");const s=to.get(i);if(s){if(eo(n,s.options)&&eo(r,s.config))return s;throw Yt.create("duplicate-app",{appName:i})}const o=new h0(i);for(const a of Fa.values())o.addComponent(a);const l=new iw(n,r,o);return to.set(i,l),l}function lm(t=La){const e=to.get(t);if(!e&&t===La)return om();if(!e)throw Yt.create("no-app",{appName:t});return e}function pt(t,e,n){var r;let i=(r=tw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}en(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",lw=1,Ti="firebase-heartbeat-store";let Tl=null;function am(){return Tl||(Tl=sm(ow,lw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),Tl}async function aw(t){try{return(await am()).transaction(Ti).objectStore(Ti).get(um(t))}catch(e){if(e instanceof bn)xn.warn(e.message);else{const n=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Hd(t,e){try{const r=(await am()).transaction(Ti,"readwrite");return await r.objectStore(Ti).put(e,um(t)),r.done}catch(n){if(n instanceof bn)xn.warn(n.message);else{const r=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function um(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1024,cw=30*24*60*60*1e3;class dw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gd(),{heartbeatsToSend:n,unsentEntries:r}=fw(this._heartbeatsCache.heartbeats),i=Js(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gd(){return new Date().toISOString().substring(0,10)}function fw(t,e=uw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return em()?tm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return Js(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){en(new Nt("platform-logger",e=>new x0(e),"PRIVATE")),en(new Nt("heartbeat",e=>new dw(e),"PRIVATE")),pt(Ma,Vd,t),pt(Ma,Vd,"esm2017"),pt("fire-js","")}pw("");const Kd="@firebase/database",Yd="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm="";function mw(t){cm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ii(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gw(e)}}catch{}return new _w},_n=dm("localStorage"),ba=dm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Hu("@firebase/database"),yw=function(){let t=1;return function(){return t++}}(),fm=function(t){const e=s0(t),n=new i0;n.update(e);const r=n.digest();return Wu.encodeByteArray(r)},Ui=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ui.apply(null,r):typeof r=="object"?e+=oe(r):e+=r,e+=" "}return e};let Cn=null,qd=!0;const vw=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(lr.logLevel=$.VERBOSE,Cn=lr.log.bind(lr),e&&ba.set("logging_enabled",!0)):typeof t=="function"?Cn=t:(Cn=null,ba.remove("logging_enabled"))},Ce=function(...t){if(qd===!0&&(qd=!1,Cn===null&&ba.get("logging_enabled")===!0&&vw(!0)),Cn){const e=Ui.apply(null,t);Cn(e)}},ji=function(t){return function(...e){Ce(t,...e)}},za=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ui(...t);lr.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ui(...t)}`;throw lr.error(e),new Error(e)},Le=function(...t){const e="FIREBASE WARNING: "+Ui(...t);lr.warn(e)},ww=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ew=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yr="[MIN_NAME]",Rn="[MAX_NAME]",Tr=function(t,e){if(t===e)return 0;if(t===yr||e===Rn)return-1;if(e===yr||t===Rn)return 1;{const n=Xd(t),r=Xd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Cw=function(t,e){return t===e?0:t<e?-1:1},zr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+oe(e))},Qu=function(t){if(typeof t!="object"||t===null)return oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=oe(e[r]),n+=":",n+=Qu(t[e[r]]);return n+="}",n},pm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mm=function(t){E(!hm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Sw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Iw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kw=new RegExp("^-?(0*)\\d{1,10}$"),Nw=-2147483648,xw=2147483647,Xd=function(t){if(kw.test(t)){const e=Number(t);if(e>=Nw&&e<=xw)return e}return null},kr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Le("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="5",gm="v",_m="s",ym="r",vm="f",wm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Em="ls",Cm="p",Ba="ac",Sm="websocket",Im="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function km(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Sm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Im)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dw(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={},Nl={};function Yu(t){const e=t.toString();return kl[e]||(kl[e]=new Ow),kl[e]}function Mw(t,e){const n=t.toString();return Nl[n]||(Nl[n]=e()),Nl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&kr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="start",Fw="close",bw="pLPCommand",zw="pRTLPCB",Nm="id",xm="pw",Rm="ser",Bw="cb",Uw="seg",jw="ts",$w="d",Ww="dframe",Pm=1870,Am=30,Vw=Pm-Am,Hw=25e3,Gw=3e4;class Zn{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ji(e),this.stats_=Yu(n),this.urlFn=a=>(this.appCheckToken&&(a[Ba]=this.appCheckToken),km(n,Im,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gw)),Ew(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qu((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jd)this.id=l,this.password=a;else if(o===Fw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jd]="t",r[Rm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Bw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gm]=Ku,this.transportSessionId&&(r[_m]=this.transportSessionId),this.lastSessionId&&(r[Em]=this.lastSessionId),this.applicationId&&(r[Cm]=this.applicationId),this.appCheckToken&&(r[Ba]=this.appCheckToken),typeof location<"u"&&location.hostname&&wm.test(location.hostname)&&(r[ym]=vm);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zn.forceAllow_=!0}static forceDisallow(){Zn.forceDisallow_=!0}static isAvailable(){return Zn.forceAllow_?!0:!Zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sw()&&!Iw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yp(n),i=pm(r,Vw);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ww]="t",r[Nm]=e,r[xm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qu{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yw(),window[bw+this.uniqueCallbackIdentifier]=e,window[zw+this.uniqueCallbackIdentifier]=n,this.myIFrame=qu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nm]=this.myID,e[xm]=this.myPW,e[Rm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Am+r.length<=Pm;){const o=this.pendingSegs.shift();r=r+"&"+Uw+i+"="+o.seg+"&"+jw+i+"="+o.ts+"&"+$w+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Hw)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=16384,Kw=45e3;let no=null;typeof MozWebSocket<"u"?no=MozWebSocket:typeof WebSocket<"u"&&(no=WebSocket);class nt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ji(this.connId),this.stats_=Yu(n),this.connURL=nt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[gm]=Ku,typeof location<"u"&&location.hostname&&wm.test(location.hostname)&&(o[ym]=vm),n&&(o[_m]=n),r&&(o[Em]=r),i&&(o[Ba]=i),s&&(o[Cm]=s),km(e,Sm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_n.set("previous_websocket_failure",!0);try{let r;Zp(),this.mySock=new no(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&no!==null&&!nt.forceDisallow_}static previouslyFailed(){return _n.isInMemoryStorage||_n.get("previous_websocket_failure")===!0}markConnectionHealthy(){_n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ii(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pm(n,Qw);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let r=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nt];else{const i=this.transports_=[];for(const s of ki.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=6e4,qw=5e3,Xw=10*1024,Jw=100*1024,xl="t",Zd="d",Zw="s",ef="r",e1="e",tf="o",nf="a",rf="n",sf="p",t1="h";class n1{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ji("c:"+this.id+":"),this.transportManager_=new ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xl in e){const n=e[xl];n===nf?this.upgradeIfSecondaryHealthy_():n===ef?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zr("t",e),r=zr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zr("t",e),r=zr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zr(xl,e);if(Zd in e){const r=e[Zd];if(n===t1)this.onHandshake_(r);else if(n===rf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zw?this.onConnectionShutdown_(r):n===ef?this.onReset_(r):n===e1?za("Server Error: "+r):n===tf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):za("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ku!==r&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Yw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Om{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ro}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=32,lf=768;class j{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new j("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function tn(t){return t.pieces_.length-t.pieceNum_}function W(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new j(t.pieces_,e)}function Mm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function r1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Lm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new j(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof j)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new j(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return Te(W(t),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bm(t,e){if(tn(t)!==tn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(tn(t)>tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class i1{constructor(e,n){this.errorPrefix_=n,this.parts_=Lm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lo(this.parts_[r]);zm(this)}}function s1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lo(e),zm(t)}function o1(t){const e=t.parts_.pop();t.byteLength_-=Lo(e),t.parts_.length>0&&(t.byteLength_-=1)}function zm(t){if(t.byteLength_>lf)throw new Error(t.errorPrefix_+"has a key path longer than "+lf+" bytes ("+t.byteLength_+").");if(t.parts_.length>of)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+of+") or object contains a cycle "+hn(t))}function hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Om{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Xu}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=1e3,l1=60*5*1e3,af=30*1e3,a1=1.3,u1=3e4,c1="server_kill",uf=3;class Ct extends Dm{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ct.nextPersistentConnectionId_++,this.log_=ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Br,this.maxReconnectDelay_=l1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ro.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(oe(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Oo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ct.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const r=_r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||n0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=af)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=t0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):za("Unrecognized action received from server: "+oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>u1&&(this.reconnectDelay_=Br),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*a1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ct.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new n1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Le(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(c1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Le(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zd(this.interruptReasons_)&&(this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Qu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new j(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uf&&(this.reconnectDelay_=af,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cm.replace(/\./g,"-")]=1,Jp()?e["framework.cordova"]=1:qv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ro.getInstance().currentlyOnline();return zd(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new O(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new O(yr,e),i=new O(yr,n);return this.compare(r,i)!==0}minPost(){return O.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;class Bm extends Fo{static get __EMPTY_NODE(){return ds}static set __EMPTY_NODE(e){ds=e}compare(e,n){return Tr(e.name,n.name)}isDefinedOn(e){throw Ir("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return O.MIN}maxPost(){return new O(Rn,ds)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new O(e,ds)}toString(){return".key"}}const ur=new Bm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Ae.EMPTY_NODE,this.right=s??Ae.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ae.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class d1{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fs(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new d1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){return Tr(t.name,e.name)}function Ju(t,e){return Tr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;function h1(t){Ua=t}const Um=function(t){return typeof t=="number"?"number:"+mm(t):"string:"+t},jm=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else E(t===Ua||t.isEmpty(),"priority of unexpected type.");E(t===Ua||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jm(this.priorityNode_)}static set __childrenNodeConstructor(e){cf=e}static get __childrenNodeConstructor(){return cf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:L(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Um(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mm(this.value_):e+=this.value_,this.lazyHash_=fm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $m,Wm;function p1(t){$m=t}function m1(t){Wm=t}class g1 extends Fo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Tr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return O.MIN}maxPost(){return new O(Rn,new ce("[PRIORITY-POST]",Wm))}makePost(e,n){const r=$m(e);return new O(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const ee=new g1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=Math.log(2);class y1{constructor(e){const n=s=>parseInt(Math.log(s)/_1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const io=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=t[a],d=n?n(c):c,new fe(d,c.node,fe.BLACK,null,null);{const g=parseInt(f/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],d=n?n(c):c,new fe(d,c.node,fe.BLACK,_,v)}},s=function(a){let u=null,f=null,c=t.length;const d=function(_,v){const k=c-_,p=c;c-=_;const h=i(k+1,p),m=t[k],y=n?n(m):m;g(new fe(y,m.node,v,null,h))},g=function(_){u?(u.left=_,u=_):(f=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),k=Math.pow(2,a.count-(_+1));v?d(k,fe.BLACK):(d(k,fe.BLACK),d(k,fe.RED))}return f},o=new y1(t.length),l=s(o);return new Ae(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;const Un={};class wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Un&&ee,"ChildrenNode.ts has not been loaded"),Rl=Rl||new wt({".priority":Un},{".priority":ee}),Rl}get(e){const n=_r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(O.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=io(r,e.getCompare()):l=Un;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const f=Object.assign({},this.indexes_);return f[a]=l,new wt(f,u)}addToIndexes(e,n){const r=Zs(this.indexes_,(i,s)=>{const o=_r(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Un)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(O.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),io(l,o.getCompare())}else return Un;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new O(e.name,l))),a.insert(e,e.node)}});return new wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Zs(this.indexes_,i=>{if(i===Un)return i;{const s=n.get(e.name);return s?i.remove(new O(e.name,s)):i}});return new wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jm(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ur||(Ur=new R(new Ae(Ju),null,wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ur}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ur:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new O(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ur:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{E(L(e)!==".priority"||tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(W(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Um(this.getPriority().val())+":"),this.forEachChild(ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new O(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new O(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new O(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,O.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,O.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$i?-1:0}withIndex(e){if(e===ur||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ee),i=n.getIterator(ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ur?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class v1 extends R{constructor(){super(new Ae(Ju),R.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const $i=new v1;Object.defineProperties(O,{MIN:{value:new O(yr,R.EMPTY_NODE)},MAX:{value:new O(Rn,$i)}});Bm.__EMPTY_NODE=R.EMPTY_NODE;ce.__childrenNodeConstructor=R;h1($i);m1($i);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=!0;function he(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,he(e))}if(!(t instanceof Array)&&w1){const n=[];let r=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=he(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new O(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=io(n,f1,o=>o.name,Ju);if(r){const o=io(n,ee.getCompare());return new R(s,he(e),new wt({".priority":o},{".priority":ee}))}else return new R(s,he(e),wt.Default)}else{let n=R.EMPTY_NODE;return Fe(t,(r,i)=>{if(Pt(t,r)&&r.substring(0,1)!=="."){const s=he(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(he(e))}}p1(he);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1 extends Fo{constructor(e){super(),this.indexPath_=e,E(!M(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Tr(e.name,n.name):s}makePost(e,n){const r=he(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new O(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,$i);return new O(Rn,e)}toString(){return Lm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1 extends Fo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Tr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return O.MIN}maxPost(){return O.MAX}makePost(e,n){const r=he(e);return new O(n,r)}toString(){return".value"}}const S1=new C1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){return{type:"value",snapshotNode:t}}function vr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ni(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function I1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ni(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vr(n,r)):o.trackChildChange(xi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ni(i,s))}),n.isLeafNode()||n.forEachChild(ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(xi(i,s,o))}else r.trackChildChange(vr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.indexedFilter_=new Zu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ri.getStartPost_(e),this.endPost_=Ri.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new O(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(ee,(o,l)=>{s.matches(new O(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new O(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,g)=>c(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new O(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(f&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(xi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ni(n,c));const v=l.updateImmediateChild(n,R.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(vr(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ni(u.name,u.node)),s.trackChildChange(vr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,R.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new ec;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function k1(t){return t.loadsAllData()?new Zu(t.getIndex()):t.hasLimit()?new T1(t):new Ri(t)}function df(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===S1?n="$value":t.index_===ur?n="$key":(E(t.index_ instanceof E1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ff(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Dm{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ji("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=so.getListenId_(e,r),l={};this.listens_[o]=l;const a=df(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),_r(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=so.getListenId_(e,n);delete this.listens_[r]}get(e){const n=df(e._queryParams),r=e._path.toString(),i=new Oo;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+r0(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ii(l.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return{value:null,children:new Map}}function Hm(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,oo());const i=t.children.get(r);e=W(e),Hm(i,e,n)}}function ja(t,e,n){t.value!==null?n(e,t.value):x1(t,(r,i)=>{const s=new j(e.toString()+"/"+r);ja(i,s,n)})}function x1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=10*1e3,P1=30*1e3,A1=5*60*1e3;class D1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new R1(e);const r=hf+(P1-hf)*Math.random();ti(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Fe(e,(i,s)=>{s>0&&Pt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*A1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function Gm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=it.ACK_USER_WRITE,this.source=Gm()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new j(e));return new lo(B(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new lo(W(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Pi(this.source,B()):new Pi(this.source,W(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=it.OVERWRITE}operationForChild(e){return M(this.path)?new Pn(this.source,B(),this.snap.getImmediateChild(e)):new Pn(this.source,W(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=it.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new j(e));return n.isEmpty()?null:n.value?new Pn(this.source,B(),n.value):new Ai(this.source,B(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ai(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function M1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(I1(o.childName,o.snapshotNode))}),jr(t,i,"child_removed",e,r,n),jr(t,i,"child_added",e,r,n),jr(t,i,"child_moved",s,r,n),jr(t,i,"child_changed",e,r,n),jr(t,i,"value",e,r,n),i}function jr(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>F1(t,l,a)),o.forEach(l=>{const a=L1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function L1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function F1(t,e,n){if(e.childName==null||n.childName==null)throw Ir("Should only compare child_ events.");const r=new O(e.childName,e.snapshotNode),i=new O(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t,e){return{eventCache:t,serverCache:e}}function ni(t,e,n,r){return bo(new nn(e,n,r),t.serverCache)}function Qm(t,e,n,r){return bo(t.eventCache,new nn(e,n,r))}function ao(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function An(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;const b1=()=>(Pl||(Pl=new Ae(Cw)),Pl);class G{constructor(e,n=b1()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return Fe(e,(r,i)=>{n=n.set(new j(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(M(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(W(e),n);return s!=null?{path:le(new j(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(W(e)):new G(null)}}set(e,n){if(M(e))return new G(n,this.children);{const r=L(e),s=(this.children.get(r)||new G(null)).set(W(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(W(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(W(e)):null}}setTree(e,n){if(M(e))return n;{const r=L(e),s=(this.children.get(r)||new G(null)).setTree(W(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(W(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(W(e),le(n,i),r):new G(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new G(null))}}function ri(t,e,n){if(M(e))return new lt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Te(i,e);return s=s.updateChild(o,n),new lt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new lt(s)}}}function pf(t,e,n){let r=t;return Fe(n,(i,s)=>{r=ri(r,le(e,i),s)}),r}function mf(t,e){if(M(e))return lt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new lt(n)}}function $a(t,e){return zn(t,e)!=null}function zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function gf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(r,i)=>{e.push(new O(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new O(r,i.value))}),e}function qt(t,e){if(M(e))return t;{const n=zn(t,e);return n!=null?new lt(new G(n)):new lt(t.writeTree_.subtree(e))}}function Wa(t){return t.writeTree_.isEmpty()}function wr(t,e){return Km(B(),t.writeTree_,e)}function Km(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Km(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e){return Jm(e,t)}function z1(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ri(t.visibleWrites,e,n)),t.lastWriteId=r}function B1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function U1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&j1(l,r.path)?i=!1:rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return $1(t),!0;if(r.snap)t.visibleWrites=mf(t.visibleWrites,r.path);else{const l=r.children;Fe(l,a=>{t.visibleWrites=mf(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function j1(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(le(t.path,n),e))return!0;return!1}function $1(t){t.visibleWrites=Ym(t.allWrites,W1,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function W1(t){return t.visible}function Ym(t,e,n){let r=lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)rt(n,o)?(l=Te(n,o),r=ri(r,l,s.snap)):rt(o,n)&&(l=Te(o,n),r=ri(r,B(),s.snap.getChild(l)));else if(s.children){if(rt(n,o))l=Te(n,o),r=pf(r,l,s.children);else if(rt(o,n))if(l=Te(o,n),M(l))r=pf(r,B(),s.children);else{const a=_r(s.children,L(l));if(a){const u=a.getChild(W(l));r=ri(r,B(),u)}}}else throw Ir("WriteRecord should have .snap or .children")}}return r}function qm(t,e,n,r,i){if(!r&&!i){const s=zn(t.visibleWrites,e);if(s!=null)return s;{const o=qt(t.visibleWrites,e);if(Wa(o))return n;if(n==null&&!$a(o,B()))return null;{const l=n||R.EMPTY_NODE;return wr(o,l)}}}else{const s=qt(t.visibleWrites,e);if(!i&&Wa(s))return n;if(!i&&n==null&&!$a(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},l=Ym(t.allWrites,o,e),a=n||R.EMPTY_NODE;return wr(l,a)}}}function V1(t,e,n){let r=R.EMPTY_NODE;const i=zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=qt(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=wr(qt(s,new j(o)),l);r=r.updateImmediateChild(o,a)}),gf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=qt(t.visibleWrites,e);return gf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function H1(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if($a(t.visibleWrites,s))return null;{const o=qt(t.visibleWrites,s);return Wa(o)?i.getChild(n):wr(o,i.getChild(n))}}function G1(t,e,n,r){const i=le(e,n),s=zn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=qt(t.visibleWrites,i);return wr(o,r.getNode().getImmediateChild(n))}else return null}function Q1(t,e){return zn(t.visibleWrites,e)}function K1(t,e,n,r,i,s,o){let l;const a=qt(t.visibleWrites,e),u=zn(a,B());if(u!=null)l=u;else if(n!=null)l=wr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=d.getNext();for(;g&&f.length<i;)c(g,r)!==0&&f.push(g),g=d.getNext();return f}else return[]}function Y1(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function uo(t,e,n,r){return qm(t.writeTree,t.treePath,e,n,r)}function rc(t,e){return V1(t.writeTree,t.treePath,e)}function _f(t,e,n,r){return H1(t.writeTree,t.treePath,e,n,r)}function co(t,e){return Q1(t.writeTree,le(t.treePath,e))}function q1(t,e,n,r,i,s){return K1(t.writeTree,t.treePath,e,n,r,i,s)}function ic(t,e,n){return G1(t.writeTree,t.treePath,e,n)}function Xm(t,e){return Jm(le(t.treePath,e),t.writeTree)}function Jm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ni(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xi(r,e.snapshotNode,i.oldSnap));else throw Ir("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Zm=new J1;class sc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ic(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:An(this.viewCache_),s=q1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){return{filter:t}}function eE(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tE(t,e,n,r,i){const s=new X1;let o,l;if(n.type===it.OVERWRITE){const u=n;u.source.fromUser?o=Va(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=fo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===it.MERGE){const u=n;u.source.fromUser?o=rE(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ha(t,e,u.path,u.children,r,i,l,s))}else if(n.type===it.ACK_USER_WRITE){const u=n;u.revert?o=oE(t,e,u.path,r,i,s):o=iE(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===it.LISTEN_COMPLETE)o=sE(t,e,n.path,r,s);else throw Ir("Unknown operation type: "+n.type);const a=s.getChanges();return nE(e,o,a),{viewCache:o,changes:a}}function nE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ao(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Vm(ao(e)))}}function eg(t,e,n,r,i,s){const o=e.eventCache;if(co(r,n)!=null)return e;{let l,a;if(M(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=An(e),f=u instanceof R?u:R.EMPTY_NODE,c=rc(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=uo(r,An(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){E(tn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const c=_f(r,n,f,a);c!=null?l=t.filter.updatePriority(f,c):l=o.getNode()}else{const f=W(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=_f(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=ic(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return ni(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function fo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&tn(n)>1)return e;const _=W(n),k=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=f.updatePriority(a.getNode(),k):u=f.updateChild(a.getNode(),g,k,_,Zm,null)}const c=Qm(e,u,a.isFullyInitialized()||M(n),f.filtersNodes()),d=new sc(i,c,s);return eg(t,c,n,i,d,l)}function Va(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new sc(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ni(e,u,!0,t.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ni(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=W(n),g=l.getNode().getImmediateChild(c);let _;if(M(d))_=r;else{const v=f.getCompleteChild(c);v!=null?Mm(d)===".priority"&&v.getChild(Fm(d)).isEmpty()?_=v:_=v.updateChild(d,r):_=R.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,d,f,o);a=ni(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function yf(t,e){return t.eventCache.isCompleteForChild(e)}function rE(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=le(n,a);yf(e,L(f))&&(l=Va(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=le(n,a);yf(e,L(f))||(l=Va(t,l,f,u,i,s,o))}),l}function vf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ha(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new G(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=vf(t,g,d);a=fo(t,a,new j(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const g=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=vf(t,_,d);a=fo(t,a,new j(c),v,i,s,o,l)}}),a}function iE(t,e,n,r,i,s,o){if(co(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return fo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new G(null);return a.getNode().forEachChild(ur,(f,c)=>{u=u.set(new j(f),c)}),Ha(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((f,c)=>{const d=le(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),Ha(t,e,n,u,i,s,l,o)}}function sE(t,e,n,r,i){const s=e.serverCache,o=Qm(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return eg(t,o,n,r,Zm,i)}function oE(t,e,n,r,i,s){let o;if(co(r,n)!=null)return e;{const l=new sc(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||L(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=uo(r,An(e));else{const c=e.serverCache.getNode();E(c instanceof R,"serverChildren would be complete if leaf node"),f=rc(r,c)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=L(n);let c=ic(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=t.filter.updateChild(a,f,c,W(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,R.EMPTY_NODE,W(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=uo(r,An(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||co(r,B())!=null,ni(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zu(r.getIndex()),s=k1(r);this.processor_=Z1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),f=new nn(a,o.isFullyInitialized(),i.filtersNodes()),c=new nn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=bo(c,f),this.eventGenerator_=new O1(this.query_)}get query(){return this.query_}}function aE(t){return t.viewCache_.serverCache.getNode()}function uE(t){return ao(t.viewCache_)}function cE(t,e){const n=An(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function wf(t){return t.eventRegistrations_.length===0}function dE(t,e){t.eventRegistrations_.push(e)}function Ef(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Cf(t,e,n,r){e.type===it.MERGE&&e.source.queryId!==null&&(E(An(t.viewCache_),"We should always have a full cache before handling merges"),E(ao(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tE(t.processor_,i,e,n,r);return eE(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,tg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(s,o)=>{r.push(vr(s,o))}),n.isFullyInitialized()&&r.push(Vm(n.getNode())),tg(t,r,n.getNode(),e)}function tg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return M1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class ng{constructor(){this.views=new Map}}function hE(t){E(!ho,"__referenceConstructor has already been defined"),ho=t}function pE(){return E(ho,"Reference.ts has not been loaded"),ho}function mE(t){return t.views.size===0}function oc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),Cf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Cf(o,e,n,r));return s}}function rg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=uo(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=rc(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const u=bo(new nn(l,a,!1),new nn(r,i,!1));return new lE(e,u)}return o}function gE(t,e,n,r,i,s){const o=rg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dE(o,n),fE(o,n)}function _E(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=rn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Ef(u,n,r)),wf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Ef(a,n,r)),wf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!rn(t)&&s.push(new(pE())(e._repo,e._path)),{removed:s,events:o}}function ig(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xt(t,e){let n=null;for(const r of t.views.values())n=n||cE(r,e);return n}function sg(t,e){if(e._queryParams.loadsAllData())return Bo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function og(t,e){return sg(t,e)!=null}function rn(t){return Bo(t)!=null}function Bo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;function yE(t){E(!po,"__referenceConstructor has already been defined"),po=t}function vE(){return E(po,"Reference.ts has not been loaded"),po}let wE=1;class Sf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=Y1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lg(t,e,n,r,i){return z1(t.pendingWriteTree_,e,n,r,i),i?Vi(t,new Pn(Gm(),e,n)):[]}function yn(t,e,n=!1){const r=B1(t.pendingWriteTree_,e);if(U1(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(B(),!0):Fe(r.children,o=>{s=s.set(new j(o),!0)}),Vi(t,new lo(r.path,s,n))}else return[]}function Wi(t,e,n){return Vi(t,new Pn(tc(),e,n))}function EE(t,e,n){const r=G.fromObject(n);return Vi(t,new Ai(tc(),e,r))}function CE(t,e){return Vi(t,new Pi(tc(),e))}function SE(t,e,n){const r=ac(t,n);if(r){const i=uc(r),s=i.path,o=i.queryId,l=Te(s,e),a=new Pi(nc(o),l);return cc(t,s,a)}else return[]}function ag(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||og(o,e))){const a=_E(o,e,n,r);mE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,g)=>rn(g));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=NE(d);for(let _=0;_<g.length;++_){const v=g[_],k=v.query,p=fg(t,v);t.listenProvider_.startListening(ii(k),Di(t,k),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(ii(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(Uo(d));t.listenProvider_.stopListening(ii(d),g)}))}xE(t,u)}return l}function ug(t,e,n,r){const i=ac(t,r);if(i!=null){const s=uc(i),o=s.path,l=s.queryId,a=Te(o,e),u=new Pn(nc(l),a,n);return cc(t,o,u)}else return[]}function IE(t,e,n,r){const i=ac(t,r);if(i){const s=uc(i),o=s.path,l=s.queryId,a=Te(o,e),u=G.fromObject(n),f=new Ai(nc(l),a,u);return cc(t,o,f)}else return[]}function TE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const _=Te(d,i);s=s||Xt(g,_),o=o||rn(g)});let l=t.syncPointTree_.get(i);l?(o=o||rn(l),s=s||Xt(l,B())):(l=new ng,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Xt(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=og(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Uo(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=RE();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const f=zo(t.pendingWriteTree_,i);let c=gE(l,e,n,f,s,a);if(!u&&!o&&!r){const d=sg(l,e);c=c.concat(PE(t,e,d))}return c}function lc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Te(o,e),u=Xt(l,a);if(u)return u});return qm(i,e,s,n,!0)}function kE(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,f)=>{const c=Te(u,n);r=r||Xt(f,c)});let i=t.syncPointTree_.get(n);i?r=r||Xt(i,B()):(i=new ng,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new nn(r,!0,!1):null,l=zo(t.pendingWriteTree_,e._path),a=rg(i,e,l,s?o.getNode():R.EMPTY_NODE,s);return uE(a)}function Vi(t,e){return cg(e,t.syncPointTree_,null,zo(t.pendingWriteTree_,B()))}function cg(t,e,n,r){if(M(t.path))return dg(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Xt(i,B()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=Xm(r,o);s=s.concat(cg(l,a,u,f))}return i&&(s=s.concat(oc(i,t,r,n))),s}}function dg(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Xt(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Xm(r,o),f=t.operationForChild(o);f&&(s=s.concat(dg(f,l,a,u)))}),i&&(s=s.concat(oc(i,t,r,n))),s}function fg(t,e){const n=e.query,r=Di(t,n);return{hashFn:()=>(aE(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?SE(t,n._path,r):CE(t,n._path);{const s=Tw(i,n);return ag(t,n,null,s)}}}}function Di(t,e){const n=Uo(e);return t.queryToTagMap.get(n)}function Uo(t){return t._path.toString()+"$"+t._queryIdentifier}function ac(t,e){return t.tagToQueryMap.get(e)}function uc(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new j(t.substr(0,e))}}function cc(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=zo(t.pendingWriteTree_,e);return oc(r,n,i,null)}function NE(t){return t.fold((e,n,r)=>{if(n&&rn(n))return[Bo(n)];{let i=[];return n&&(i=ig(n)),Fe(r,(s,o)=>{i=i.concat(o)}),i}})}function ii(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vE())(t._repo,t._path):t}function xE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Uo(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function RE(){return wE++}function PE(t,e,n){const r=e._path,i=Di(t,e),s=fg(t,n),o=t.listenProvider_.startListening(ii(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!rn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!M(u)&&f&&rn(f))return[Bo(f).query];{let d=[];return f&&(d=d.concat(ig(f).map(g=>g.query))),Fe(c,(g,_)=>{d=d.concat(_)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(ii(f),Di(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dc(n)}node(){return this.node_}}class fc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new fc(this.syncTree_,n)}node(){return lc(this.syncTree_,this.path_)}}const AE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},If=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return DE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OE(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},DE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},OE=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ME=function(t,e,n,r){return hc(e,new fc(n,t),r)},hg=function(t,e,n){return hc(t,new dc(e),n)};function hc(t,e,n){const r=t.getPriority().val(),i=If(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=If(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,he(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(ee,(l,a)=>{const u=hc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function mc(t,e){let n=e instanceof j?e:new j(e),r=t,i=L(n);for(;i!==null;){const s=_r(r.node.children,i)||{children:{},childCount:0};r=new pc(i,r,s),n=W(n),i=L(n)}return r}function Nr(t){return t.node.value}function pg(t,e){t.node.value=e,Ga(t)}function mg(t){return t.node.childCount>0}function LE(t){return Nr(t)===void 0&&!mg(t)}function jo(t,e){Fe(t.node.children,(n,r)=>{e(new pc(n,t,r))})}function gg(t,e,n,r){n&&!r&&e(t),jo(t,i=>{gg(i,e,!0,r)}),n&&r&&e(t)}function FE(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Hi(t){return new j(t.parent===null?t.name:Hi(t.parent)+"/"+t.name)}function Ga(t){t.parent!==null&&bE(t.parent,t.name,t)}function bE(t,e,n){const r=LE(n),i=Pt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ga(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ga(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/[\[\].#$\/\u0000-\u001F\u007F]/,BE=/[\[\].#$\u0000-\u001F\u007F]/,Al=10*1024*1024,_g=function(t){return typeof t=="string"&&t.length!==0&&!zE.test(t)},yg=function(t){return typeof t=="string"&&t.length!==0&&!BE.test(t)},UE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yg(t)},vg=function(t,e,n,r){r&&e===void 0||gc(Vu(t,"value"),e,n)},gc=function(t,e,n){const r=n instanceof j?new i1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hn(r));if(typeof e=="function")throw new Error(t+"contains a function "+hn(r)+" with contents = "+e.toString());if(hm(e))throw new Error(t+"contains "+e.toString()+" "+hn(r));if(typeof e=="string"&&e.length>Al/3&&Lo(e)>Al)throw new Error(t+"contains a string greater than "+Al+" utf8 bytes "+hn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!_g(o)))throw new Error(t+" contains an invalid key ("+o+") "+hn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);s1(r,o),gc(t,l,r),o1(r)}),i&&s)throw new Error(t+' contains ".value" child '+hn(r)+" in addition to actual children.")}},wg=function(t,e,n,r){if(!(r&&n===void 0)&&!yg(n))throw new Error(Vu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wg(t,e,n,r)},_c=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$E=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_g(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UE(n))throw new Error(Vu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Eg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!bm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function mt(t,e,n){Eg(t,n),VE(t,r=>rt(r,e)||rt(e,r))}function VE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(HE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Cn&&Ce("event: "+n.toString()),kr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="repo_interrupt",QE=25;class KE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oo(),this.transactionQueueTree_=new pc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YE(t,e,n){if(t.stats_=Yu(t.repoInfo_),t.forceRestClient_||Rw())t.server_=new so(t.repoInfo_,(r,i,s,o)=>{Tf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ct(t.repoInfo_,e,(r,i,s,o)=>{Tf(t,r,i,s,o)},r=>{kf(t,r)},r=>{qE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Mw(t.repoInfo_,()=>new D1(t.stats_,t.server_)),t.infoData_=new N1,t.infoSyncTree_=new Sf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Wi(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),vc(t,"connected",!1),t.serverSyncTree_=new Sf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);mt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Cg(t){const n=t.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yc(t){return AE({timestamp:Cg(t)})}function Tf(t,e,n,r,i){t.dataUpdateCount++;const s=new j(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Zs(n,u=>he(u));o=IE(t.serverSyncTree_,s,a,i)}else{const a=he(n);o=ug(t.serverSyncTree_,s,a,i)}else if(r){const a=Zs(n,u=>he(u));o=EE(t.serverSyncTree_,s,a)}else{const a=he(n);o=Wi(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Wo(t,s)),mt(t.eventQueue_,l,o)}function kf(t,e){vc(t,"connected",e),e===!1&&ZE(t)}function qE(t,e){Fe(e,(n,r)=>{vc(t,n,r)})}function vc(t,e,n){const r=new j("/.info/"+e),i=he(n);t.infoData_.updateSnapshot(r,i);const s=Wi(t.infoSyncTree_,r,i);mt(t.eventQueue_,r,s)}function Sg(t){return t.nextWriteId_++}function XE(t,e,n){const r=kE(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=he(i).withIndex(e._queryParams.getIndex());TE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wi(t.serverSyncTree_,e._path,s);else{const l=Di(t.serverSyncTree_,e);o=ug(t.serverSyncTree_,e._path,s,l)}return mt(t.eventQueue_,e._path,o),ag(t.serverSyncTree_,e,n,null,!0),s},i=>($o(t,"get for query "+oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function JE(t,e,n,r,i){$o(t,"set",{path:e.toString(),value:n,priority:r});const s=yc(t),o=he(n,r),l=lc(t.serverSyncTree_,e),a=hg(o,l,s),u=Sg(t),f=lg(t.serverSyncTree_,e,a,u,!0);Eg(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const _=d==="ok";_||Le("set at "+e+" failed: "+d);const v=yn(t.serverSyncTree_,u,!_);mt(t.eventQueue_,e,v),tC(t,i,d,g)});const c=xg(t,e);Wo(t,c),mt(t.eventQueue_,c,[])}function ZE(t){$o(t,"onDisconnectEvents");const e=yc(t),n=oo();ja(t.onDisconnect_,B(),(i,s)=>{const o=ME(i,s,t.serverSyncTree_,e);Hm(n,i,o)});let r=[];ja(n,B(),(i,s)=>{r=r.concat(Wi(t.serverSyncTree_,i,s));const o=xg(t,i);Wo(t,o)}),t.onDisconnect_=oo(),mt(t.eventQueue_,B(),r)}function eC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GE)}function $o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function tC(t,e,n,r){e&&kr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ig(t,e,n){return lc(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function wc(t,e=t.transactionQueueTree_){if(e||Vo(t,e),Nr(e)){const n=kg(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nC(t,Hi(e),n)}else mg(e)&&jo(e,n=>{wc(t,n)})}function nC(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ig(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];E(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Te(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{$o(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(yn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Vo(t,mc(t.transactionQueueTree_,e)),wc(t,t.transactionQueueTree_),mt(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)kr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Le("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Wo(t,e)}},o)}function Wo(t,e){const n=Tg(t,e),r=Hi(n),i=kg(t,n);return rC(t,i,r),r}function rC(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Te(n,a.path);let f=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=QE)f=!0,c="maxretry",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ig(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){gc("transaction failed: Data returned ",g,a.path);let _=he(g);typeof g=="object"&&g!=null&&Pt(g,".priority")||(_=_.updatePriority(d.getPriority()));const k=a.currentWriteId,p=yc(t),h=hg(_,d,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=h,a.currentWriteId=Sg(t),o.splice(o.indexOf(k),1),i=i.concat(lg(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(yn(t.serverSyncTree_,k,!0))}else f=!0,c="nodata",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0))}mt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Vo(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)kr(r[l]);wc(t,t.transactionQueueTree_)}function Tg(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&Nr(r)===void 0;)r=mc(r,n),e=W(e),n=L(e);return r}function kg(t,e){const n=[];return Ng(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ng(t,e,n){const r=Nr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);jo(e,i=>{Ng(t,i,n)})}function Vo(t,e){const n=Nr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,pg(e,n.length>0?n:void 0)}jo(e,r=>{Vo(t,r)})}function xg(t,e){const n=Hi(Tg(t,e)),r=mc(t.transactionQueueTree_,e);return FE(r,i=>{Dl(t,i)}),Dl(t,r),gg(r,i=>{Dl(t,i)}),n}function Dl(t,e){const n=Nr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?pg(e,void 0):n.length=s+1,mt(t.eventQueue_,Hi(e),i);for(let o=0;o<r.length;o++)kr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Le(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nf=function(t,e){const n=oC(t),r=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ww();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tm(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new j(n.pathString)}},oC=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=iC(t.substring(f,c)));const d=sC(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",lC=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=xf.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=xf.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+oe(this.snapshot.exportVal())}}class uC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:Mm(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=ff(this._queryParams),n=Qu(e);return n==="{}"?"default":n}get _queryObject(){return ff(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof Ec))return!1;const n=this._repo===e._repo,r=bm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+r1(this._path)}}class Dt extends Ec{constructor(e,n){super(e,n,new ec,!1)}get parent(){const e=Fm(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new j(e),r=Dn(this.ref,e);return new Oi(this._node.getChild(n),r,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Oi(i,Dn(this.ref,r),ee)))}hasChild(e){const n=new j(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hs(t,e){return t=At(t),t._checkNotDeleted("ref"),e!==void 0?Dn(t._root,e):t._root}function Dn(t,e){return t=At(t),L(t._path)===null?jE("child","path",e,!1):wg("child","path",e,!1),new Dt(t._repo,le(t._path,e))}function dC(t,e){t=At(t),_c("push",t._path),vg("push",e,t._path,!0);const n=Cg(t._repo),r=lC(n),i=Dn(t,r),s=Dn(t,r);let o;return e!=null?o=Cc(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function fC(t){return _c("remove",t._path),Cc(t,null)}function Cc(t,e){t=At(t),_c("set",t._path),vg("set",e,t._path,!1);const n=new Oo;return JE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function hC(t){t=At(t);const e=new cC(()=>{}),n=new Sc(e);return XE(t._repo,t,n).then(r=>new Oi(r,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class Sc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new aC("value",this,new Oi(e.snapshotNode,new Dt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new uC(this,e,n):null}matches(e){return e instanceof Sc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}hE(Dt);yE(Dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="FIREBASE_DATABASE_EMULATOR_HOST",Qa={};let mC=!1;function gC(t,e,n,r){t.repoInfo_=new Tm(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function _C(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[pC]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Nf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const f=i&&a?new ar(ar.OWNER):new Aw(t.name,t.options,e);$E("Invalid Firebase Database URL",o),M(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=vC(l,t,f,new Pw(t.name,n));return new wC(c,t)}function yC(t,e){const n=Qa[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eC(t),delete n[t.key]}function vC(t,e,n,r){let i=Qa[e.name];i||(i={},Qa[e.name]=i);let s=i[t.toURLString()];return s&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new KE(t,mC,n,r),i[t.toURLString()]=s,s}class wC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function EC(t=lm(),e){const n=Bi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Hv("database");r&&CC(n,...r)}return n}function CC(t,e,n,r={}){t=At(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ar(ar.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Qv(r.mockUserToken,t.app.options.projectId);s=new ar(o)}gC(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){mw(sw),en(new Nt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _C(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),pt(Kd,Yd,t),pt(Kd,Yd,"esm2017")}Ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SC();var IC="firebase",TC="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt(IC,TC,"app");const Rg="@firebase/installations",Ic="0.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=1e4,Ag=`w:${Ic}`,Dg="FIS_v2",kC="https://firebaseinstallations.googleapis.com/v1",NC=60*60*1e3,xC="installations",RC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},On=new Mo(xC,RC,PC);function Og(t){return t instanceof bn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg({projectId:t}){return`${kC}/projects/${t}/installations`}function Lg(t){return{token:t.token,requestStatus:2,expiresIn:DC(t.expiresIn),creationTime:Date.now()}}async function Fg(t,e){const r=(await e.json()).error;return On.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AC(t,{refreshToken:e}){const n=bg(t);return n.append("Authorization",OC(e)),n}async function zg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DC(t){return Number(t.replace("s","000"))}function OC(t){return`${Dg} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Mg(t),i=bg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Dg,appId:t.appId,sdkVersion:Ag},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await zg(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Lg(u.authToken)}}else throw await Fg("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=/^[cdef][\w-]{21}$/,Ka="";function bC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zC(t);return FC.test(n)?n:Ka}catch{return Ka}}function zC(t){return LC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Map;function jg(t,e){const n=Ho(t);$g(n,e),BC(n,e)}function $g(t,e){const n=Ug.get(t);if(n)for(const r of n)r(e)}function BC(t,e){const n=UC();n&&n.postMessage({key:t,fid:e}),jC()}let vn=null;function UC(){return!vn&&"BroadcastChannel"in self&&(vn=new BroadcastChannel("[Firebase] FID Change"),vn.onmessage=t=>{$g(t.data.key,t.data.fid)}),vn}function jC(){Ug.size===0&&vn&&(vn.close(),vn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="firebase-installations-database",WC=1,Mn="firebase-installations-store";let Ol=null;function Tc(){return Ol||(Ol=sm($C,WC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mn)}}})),Ol}async function mo(t,e){const n=Ho(t),i=(await Tc()).transaction(Mn,"readwrite"),s=i.objectStore(Mn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jg(t,e.fid),e}async function Wg(t){const e=Ho(t),r=(await Tc()).transaction(Mn,"readwrite");await r.objectStore(Mn).delete(e),await r.done}async function Go(t,e){const n=Ho(t),i=(await Tc()).transaction(Mn,"readwrite"),s=i.objectStore(Mn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&jg(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(t){let e;const n=await Go(t.appConfig,r=>{const i=VC(r),s=HC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ka?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function VC(t){const e=t||{fid:bC(),registrationStatus:0};return Vg(e)}function HC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(On.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QC(t)}:{installationEntry:e}}async function GC(t,e){try{const n=await MC(t,e);return mo(t.appConfig,n)}catch(n){throw Og(n)&&n.customData.serverCode===409?await Wg(t.appConfig):await mo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QC(t){let e=await Rf(t.appConfig);for(;e.registrationStatus===1;)await Bg(100),e=await Rf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kc(t);return r||n}return e}function Rf(t){return Go(t,e=>{if(!e)throw On.create("installation-not-found");return Vg(e)})}function Vg(t){return KC(t)?{fid:t.fid,registrationStatus:0}:t}function KC(t){return t.registrationStatus===1&&t.registrationTime+Pg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC({appConfig:t,heartbeatServiceProvider:e},n){const r=qC(t,n),i=AC(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ag,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await zg(()=>fetch(r,l));if(a.ok){const u=await a.json();return Lg(u)}else throw await Fg("Generate Auth Token",a)}function qC(t,{fid:e}){return`${Mg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t,e=!1){let n;const r=await Go(t.appConfig,s=>{if(!Hg(s))throw On.create("not-registered");const o=s.authToken;if(!e&&ZC(o))return s;if(o.requestStatus===1)return n=XC(t,e),s;{if(!navigator.onLine)throw On.create("app-offline");const l=tS(s);return n=JC(t,l),l}});return n?await n:r.authToken}async function XC(t,e){let n=await Pf(t.appConfig);for(;n.authToken.requestStatus===1;)await Bg(100),n=await Pf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Nc(t,e):r}function Pf(t){return Go(t,e=>{if(!Hg(e))throw On.create("not-registered");const n=e.authToken;return nS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JC(t,e){try{const n=await YC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await mo(t.appConfig,r),n}catch(n){if(Og(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mo(t.appConfig,r)}throw n}}function Hg(t){return t!==void 0&&t.registrationStatus===2}function ZC(t){return t.requestStatus===2&&!eS(t)}function eS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+NC}function tS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nS(t){return t.requestStatus===1&&t.requestTime+Pg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t){const e=t,{installationEntry:n,registrationPromise:r}=await kc(e);return r?r.catch(console.error):Nc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t,e=!1){const n=t;return await sS(n),(await Nc(n,e)).token}async function sS(t){const{registrationPromise:e}=await kc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){if(!t||!t.options)throw Ml("App Configuration");if(!t.name)throw Ml("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ml(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ml(t){return On.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="installations",lS="installations-internal",aS=t=>{const e=t.getProvider("app").getImmediate(),n=oS(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uS=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,Gg).getImmediate();return{getId:()=>rS(n),getToken:i=>iS(n,i)}};function cS(){en(new Nt(Gg,aS,"PUBLIC")),en(new Nt(lS,uS,"PRIVATE"))}cS();pt(Rg,Ic);pt(Rg,Ic,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="analytics",dS="firebase_id",fS="origin",hS=60*1e3,pS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Hu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mS(t,e){const n=document.createElement("script");n.src=`${Qg}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function gS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _S(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await Kg(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){Ue.error(l)}t("config",i,s)}async function yS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Kg(n);for(const a of o){const u=l.find(c=>c.measurementId===a),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ue.error(s)}}function vS(t,e,n,r){async function i(s,o,l){try{s==="event"?await yS(t,e,n,o,l):s==="config"?await _S(t,e,n,r,o,l):s==="consent"?t("consent","update",l):t("set",o)}catch(a){Ue.error(a)}}return i}function wS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=vS(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ES(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ke=new Mo("analytics","Analytics",CS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=30,IS=1e3;class TS{constructor(e={},n=IS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yg=new TS;function kS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function NS(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:kS(r)},s=pS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function xS(t,e=Yg,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ke.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ke.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new AS;return setTimeout(async()=>{l.abort()},n!==void 0?n:hS),qg({appId:r,apiKey:i,measurementId:s},o,l,e)}async function qg(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Yg){var s;const{appId:o,measurementId:l}=t;try{await RS(r,e)}catch(a){if(l)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await NS(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!PS(u)){if(i.deleteThrottleMetadata(o),l)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ud(n,i.intervalMillis,SS):Ud(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,c),Ue.debug(`Calling attemptFetch again in ${f} millis`),qg(t,c,r,i)}}function RS(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function PS(t){if(!(t instanceof bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class AS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(){if(em())try{await tm()}catch(t){return Ue.warn(Ke.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ue.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MS(t,e,n,r,i,s,o){var l;const a=xS(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ue.error(g)),e.push(a);const u=OS().then(g=>{if(g)return r.getId()}),[f,c]=await Promise.all([a,u]);ES(s)||mS(s,f.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[fS]="firebase",d.update=!0,c!=null&&(d[dS]=c),i("config",f.measurementId,d),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.app=e}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},Af=[];const Df={};let Ll="dataLayer",FS="gtag",Of,Xg,Mf=!1;function bS(){const t=[];if(Yv()&&t.push("This is a browser extension environment."),Xv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ke.create("invalid-analytics-context",{errorInfo:e});Ue.warn(n.message)}}function zS(t,e,n){bS();const r=t.options.appId;if(!r)throw Ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(si[r]!=null)throw Ke.create("already-exists",{id:r});if(!Mf){gS(Ll);const{wrappedGtag:s,gtagCore:o}=wS(si,Af,Df,Ll,FS);Xg=s,Of=o,Mf=!0}return si[r]=MS(t,Af,Df,e,Of,Ll,n),new LS(t)}function BS(t=lm()){t=At(t);const e=Bi(t,go);return e.isInitialized()?e.getImmediate():US(t)}function US(t,e={}){const n=Bi(t,go);if(n.isInitialized()){const i=n.getImmediate();if(eo(e,n.getOptions()))return i;throw Ke.create("already-initialized")}return n.initialize({options:e})}function jS(t,e,n,r){t=At(t),DS(Xg,si[t.app.options.appId],e,n,r).catch(i=>Ue.error(i))}const Lf="@firebase/analytics",Ff="0.9.1";function $S(){en(new Nt(go,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return zS(r,i,n)},"PUBLIC")),en(new Nt("analytics-internal",t,"PRIVATE")),pt(Lf,Ff),pt(Lf,Ff,"esm2017");function t(e){try{const n=e.getProvider(go).getImmediate();return{logEvent:(r,i,s)=>jS(n,r,i,s)}}catch(n){throw Ke.create("interop-component-reg-failed",{reason:n})}}}$S();const WS={apiKey:"AIzaSyBuQQ3BRhj6PN7cJ9B7u1slEkDFjbXj85U",authDomain:"tvseries-e42fd.firebaseapp.com",projectId:"tvseries-e42fd",storageBucket:"tvseries-e42fd.appspot.com",messagingSenderId:"517002226236",appId:"1:517002226236:web:8c41a1f23d6a6dda523139",measurementId:"G-5DQ8V487RB",databaseURL:"https://tvseries-e42fd-default-rtdb.firebaseio.com/"},Jg=om(WS);BS(Jg);const ps=EC(Jg);function VS(t){let e="";parseInt(t.datoss.TotalSeasons)==1?e="1 temporada":parseInt(t.datoss.TotalSeasons)>1?e=parseInt(t.datoss.TotalSeasons)+" temporadas":e="";let n="";return t.datoss.TotalSeasons=="N/A"||t.datoss.LastEpisodeReleased=="N/A"?n="Sin información del último episodio.":n="Último Episodio: S"+t.datoss.TotalSeasons+"E"+t.datoss.LastEpisode+", emitido el "+t.datoss.LastEpisodeReleased,ge("div",{className:"flex flex-row shadow-md  rounded-md bg-neutral-100 h-28",children:[P("img",{className:"rounded-l-md  w-2/12 object-cover ",src:t.datoss.Poster,alt:t.datoss.Title}),ge("div",{className:"flex flex-col  flex-grow px-3  pt-1  ",children:[P("div",{className:"text-lg font-black p-0.5",children:ge("a",{target:"_blank",href:"https://www.imdb.com/title/"+t.datoss.imdbID,children:[t.datoss.Title," "]})}),ge("div",{className:"text-md text-gray-800 font-light p-0.5",children:[e," (",t.datoss.Year,")"]}),P("div",{className:"text-sm text-gray-800 font-light p-0.5",children:n})]}),P("div",{className:"flex flex-col  items-end  p-2 rounded-br-md",children:P("button",{className:" font text-xs border-gray-200  ",onClick:()=>t.handleBorrar(t.datoss.Key),children:P(Av,{className:"h-5 w-5 text-blue-800/20 hover:text-blue-800"})})})]},t.datoss.Key)}function HS(t){let e=t.datosSeries;if(e){let n=P("div",{className:"",children:e.map(r=>P("div",{className:"p-2 px-4",children:P(VS,{datoss:r,handleBorrar:t.handleBorrar})},r.Key))});return P(Ns,{children:n})}else return P(Ns,{})}async function bf(t){let e={},n=await fetch(`https://www.omdbapi.com/?apikey=1a55c3a8&i=${t}`).then(r=>r.json()).catch(r=>{console.error(r),setErrorMessage("Error: No se pudieron cargar los datos (1)")});if(n.totalSeasons!=="N/A"&&n.totalSeasons){let r=await(await fetch(`https://www.omdbapi.com/?apikey=1a55c3a8&i=${t}&season=${n.totalSeasons}`)).json();e={Title:n.Title,Poster:n.Poster,imdbID:t,Year:n.Year,TotalSeasons:n.totalSeasons,LastEpisode:r.Episodes[r.Episodes.length-1].Episode,LastEpisodeReleased:r.Episodes[r.Episodes.length-1].Released}}else e={Title:n.Title,Poster:n.Poster,imdbID:t,Year:n.Year,TotalSeasons:n.totalSeasons,LastEpisode:"N/A",LastEpisodeReleased:"N/A"};return e}function GS(){const[t,e]=q.useState([!0,!1]),[n,r]=q.useState(""),[i,s]=q.useState(),[o,l]=q.useState(!1),[a,u]=q.useState("");function f(k){e(p=>t.map((m,y)=>y===k))}async function c(k){await fC(hs(ps,"series/"+k)),s(p=>p.filter(h=>h.Key!==k))}async function d(k){const p=dC(Dn(hs(ps),"series")).key;Cc(hs(ps,"series/"+p),{imdbID:k});let h=await bf(k),m={Key:p,...h};s(y=>[...y,m])}async function g(){try{l(!0);let k=[];await hC(Dn(hs(ps),"series")).then(h=>{h.exists()?h.forEach(m=>{k.push({Key:m.key,imdbID:m.val().imdbID})}):console.log("No data available")}).catch(h=>{console.error(h),u("Error: No se pudieron cargar los datos (1)")});let p=[{}];for(let h=0;h<k.length;h++){let m=await bf(k[h].imdbID);p[h]={Key:k[h].Key,...m}}s(p),l(!1)}catch(k){console.log(k,rr.message),u("Error (global)"),l(!1)}}function _(){function k(){let h=[...i];n!=="TituloZA"?(r("TituloZA"),h.sort((m,y)=>m.Title<y.Title?-1:m.Title>y.Title?1:0)):(r("TituloAZ"),h.sort((m,y)=>m.Title<y.Title?1:m.Title>y.Title?-1:0)),s(h),console.log(h)}function p(){let h=[...i];h.sort((m,y)=>{if(n!=="EpisodioZA"){let C=m.LastEpisodeReleased=="N/A"?"0":m.LastEpisodeReleased,T=y.LastEpisodeReleased=="N/A"?"0":y.LastEpisodeReleased;return r("EpisodioZA"),C>T?-1:C<T?1:0}else{let C=m.LastEpisodeReleased=="N/A"?"3":m.LastEpisodeReleased,T=y.LastEpisodeReleased=="N/A"?"3":y.LastEpisodeReleased;return r("EpisodioAZ"),C>T?1:C<T?-1:0}}),s(h)}return ge("div",{className:"flex flex-row justify-end font-bold text-xs pr-4",children:[P("div",{className:"mr-1",children:"Ordenar por:"}),P("button",{className:"mr-1 font-normal text-xs hover:text-blue-900",onClick:k,children:"Título"}),P("div",{className:"font-normal text-xs",children:"|"}),P("button",{className:"ml-1 text-xs font-normal hover:text-blue-900",onClick:p,children:"Último episodio"})]})}function v(){return ge("div",{className:"py-5",children:[o?P(Gp,{}):ge("div",{children:[P(_,{}),P(HS,{datosSeries:i,handleBorrar:c})]}),P("p",{children:a})]})}return q.useEffect(()=>{g()},[]),ge("div",{className:"bg-white flex flex-row justify-center  ",children:[P("div",{className:"basis-[250px] bg-neutral-100 flex-shrink-0 px-4 border-x border-slate-400 sticky top-0 h-screen",children:P(Lv,{menu:f,menuItems:t})}),ge("div",{className:"border-r border-slate-400 basis-[600px]   min-h-screen pb-4 flex-shrink-0  px-4  ",children:[t[0]?P(v,{}):"",t[1]?P(Fv,{datosSeries:i,handleAdd:d}):""]})]})}Fl.createRoot(document.getElementById("root")).render(P(y_.StrictMode,{children:P(GS,{})}));
