"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7630],{35646:function(e,t,r){r.d(t,{q:function(){return d}});let n=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,o=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(n);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},a=e=>"*"===e||"x"===e||"X"===e,i=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},l=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],u=(e,t)=>{if(a(e)||a(t))return 0;let[r,n]=l(i(e),i(t));return r>n?1:r<n?-1:0},s=(e,t)=>{for(let r=0;r<Math.max(e.length,t.length);r++){let n=u(e[r]||"0",t[r]||"0");if(0!==n)return n}return 0},c=(e,t)=>{let r=o(e),n=o(t),a=r.pop(),i=n.pop(),l=s(r,n);return 0!==l?l:a&&i?s(a.split("."),i.split(".")):a||i?a?-1:1:0},d=(e,t,r)=>{p(r);let n=c(e,t);return f[r].includes(n)},f={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},m=Object.keys(f),p=e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===m.indexOf(e))throw Error(`Invalid operator, expected one of ${m.join("|")}`)}},28242:function(e,t,r){r.d(t,{F:function(){return s},f:function(){return c}});var n=r(3546);let o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,n.createContext)(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,n.useContext)(l))&&void 0!==e?e:u},c=e=>(0,n.useContext)(l)?n.createElement(n.Fragment,null,e.children):n.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:i=!0,storageKey:u="theme",themes:s=d,defaultTheme:c=r?"system":"light",attribute:f="data-theme",value:y,children:g,nonce:b})=>{let[S,E]=(0,n.useState)(()=>p(u,c)),[w,C]=(0,n.useState)(()=>p(u)),$=y?Object.values(y):s,x=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=h());let a=y?y[n]:n,l=t?v():null,u=document.documentElement;if("class"===f?(u.classList.remove(...$),a&&u.classList.add(a)):a?u.setAttribute(f,a):u.removeAttribute(f),i){let e=o.includes(c)?c:null,t=o.includes(n)?n:e;u.style.colorScheme=t}null==l||l()},[]),R=(0,n.useCallback)(e=>{E(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),O=(0,n.useCallback)(t=>{let n=h(t);C(n),"system"===S&&r&&!e&&x("system")},[S,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,n.useEffect)(()=>{let e=e=>{e.key===u&&R(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),(0,n.useEffect)(()=>{x(null!=e?e:S)},[e,S]);let T=(0,n.useMemo)(()=>({theme:S,setTheme:R,forcedTheme:e,resolvedTheme:"system"===S?w:S,themes:r?[...s,"system"]:s,systemTheme:r?w:void 0}),[S,R,e,w,r,s]);return n.createElement(l.Provider,{value:T},n.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:i,storageKey:u,themes:s,defaultTheme:c,attribute:f,value:y,children:g,attrs:$,nonce:b}),g)},m=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:i,enableColorScheme:l,defaultTheme:u,value:s,attrs:c,nonce:d})=>{let f="system"===u,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=l?o.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,n=!0)=>{let a=s?s[e]:e,i=t?e+"|| ''":`'${a}'`,u="";return l&&n&&!t&&o.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===r?u+=t||a?`c.add(${i})`:"null":a&&(u+=`d[s](n,${i})`),u},h=e?`!function(){${m}${v(e)}}()`:i?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${v(s?"x[e]":"e",!0)}}${f?"":"else{"+v(u,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${v(s?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${p}}catch(t){}}();`;return n.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},75403:function(e,t){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case l:case i:case f:case m:return e;default:switch(e=e&&e.$$typeof){case c:case s:case d:case v:case p:case u:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference"),t.ContextConsumer=s,t.ContextProvider=u,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=p,t.Portal=o,t.Profiler=l,t.StrictMode=i,t.Suspense=f,t.SuspenseList=m,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return y(e)===s},t.isContextProvider=function(e){return y(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return y(e)===d},t.isFragment=function(e){return y(e)===a},t.isLazy=function(e){return y(e)===v},t.isMemo=function(e){return y(e)===p},t.isPortal=function(e){return y(e)===o},t.isProfiler=function(e){return y(e)===l},t.isStrictMode=function(e){return y(e)===i},t.isSuspense=function(e){return y(e)===f},t.isSuspenseList=function(e){return y(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===i||e===f||e===m||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===p||e.$$typeof===u||e.$$typeof===s||e.$$typeof===d||e.$$typeof===r||void 0!==e.getModuleId)},t.typeOf=y},19379:function(e,t,r){e.exports=r(75403)},67635:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3546),o=r(94348),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,l=n.useRef,u=n.useEffect,s=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var d=l(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var m=i(e,(d=s(function(){function e(e){if(!u){if(u=!0,i=e,e=n(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return l=t}return l=e}if(t=l,a(i,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(i=e,l=r)}var i,l,u=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,r,n,o]))[0],d[1]);return u(function(){f.hasValue=!0,f.value=m},[m]),c(m),m}},52635:function(e,t,r){e.exports=r(67635)},54491:function(e,t,r){r.d(t,{u:function(){return n}});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},17989:function(e,t,r){r.d(t,{Fw:function(){return E},VY:function(){return R},fC:function(){return $},p_:function(){return v},wy:function(){return b},xz:function(){return x}});var n=r(65122),o=r(3546),a=r(65727),i=r(47091),l=r(27250),u=r(65292),s=r(79869),c=r(72205),d=r(96497),f=r(29434);let m="Collapsible",[p,v]=(0,i.b)(m),[h,y]=p(m),g=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:i,disabled:u,onOpenChange:s,...d}=e,[m=!1,p]=(0,l.T)({prop:a,defaultProp:i,onChange:s});return(0,o.createElement)(h,{scope:r,disabled:u,contentId:(0,f.M)(),open:m,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p])},(0,o.createElement)(c.WV.div,(0,n.Z)({"data-state":C(m),"data-disabled":u?"":void 0},d,{ref:t})))}),b=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...i}=e,l=y("CollapsibleTrigger",r);return(0,o.createElement)(c.WV.button,(0,n.Z)({type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":C(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled},i,{ref:t,onClick:(0,a.M)(e.onClick,l.onOpenToggle)}))}),S="CollapsibleContent",E=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,i=y(S,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:r||i.open},({present:e})=>(0,o.createElement)(w,(0,n.Z)({},a,{ref:t,present:e})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:a,children:i,...l}=e,d=y(S,r),[f,m]=(0,o.useState)(a),p=(0,o.useRef)(null),v=(0,s.e)(t,p),h=(0,o.useRef)(0),g=h.current,b=(0,o.useRef)(0),E=b.current,w=d.open||f,$=(0,o.useRef)(w),x=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>$.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=p.current;if(e){x.current=x.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,b.current=t.width,$.current||(e.style.transitionDuration=x.current.transitionDuration,e.style.animationName=x.current.animationName),m(a)}},[d.open,a]),(0,o.createElement)(c.WV.div,(0,n.Z)({"data-state":C(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!w},l,{ref:v,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":E?`${E}px`:void 0,...e.style}}),w&&i)});function C(e){return e?"open":"closed"}let $=g,x=b,R=E},85656:function(e,t,r){r.d(t,{B:function(){return l}});var n=r(3546),o=r(47091),a=r(79869),i=r(74047);function l(e){let t=e+"CollectionProvider",[r,l]=(0,o.b)(t),[u,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,l=s(c,r),u=(0,a.e)(t,l.collectionRef);return n.createElement(i.g7,{ref:u},o)}),f=e+"CollectionItemSlot",m="data-radix-collection-item",p=n.forwardRef((e,t)=>{let{scope:r,children:o,...l}=e,u=n.useRef(null),c=(0,a.e)(t,u),d=s(f,r);return n.useEffect(()=>(d.itemMap.set(u,{ref:u,...l}),()=>void d.itemMap.delete(u))),n.createElement(i.g7,{[m]:"",ref:c},o)});return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return n.createElement(u,{scope:t,itemMap:a,collectionRef:o},r)},Slot:d,ItemSlot:p},function(t){let r=s(e+"CollectionConsumer",t),o=n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),n=Array.from(r.itemMap.values()),o=n.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return o},l]}},38421:function(e,t,r){let n;r.d(t,{E:function(){return x},VY:function(){return _},fC:function(){return P},h_:function(){return I},xz:function(){return D}});var o=r(65122),a=r(3546),i=r(65727),l=r(47091),u=r(27250),s=r(79869),c=r(39810),d=r(48907),f=r(96497),m=r(72205),p=r(71404);let v="HoverCard",[h,y]=(0,l.b)(v,[c.D7]),g=(0,c.D7)(),[b,S]=h(v),E=(0,a.forwardRef)((e,t)=>{let{__scopeHoverCard:r,...n}=e,l=S("HoverCardTrigger",r),u=g(r);return(0,a.createElement)(c.ee,(0,o.Z)({asChild:!0},u),(0,a.createElement)(m.WV.a,(0,o.Z)({"data-state":l.open?"open":"closed"},n,{ref:t,onPointerEnter:(0,i.M)(e.onPointerEnter,M(l.onOpen)),onPointerLeave:(0,i.M)(e.onPointerLeave,M(l.onClose)),onFocus:(0,i.M)(e.onFocus,l.onOpen),onBlur:(0,i.M)(e.onBlur,l.onClose),onTouchStart:(0,i.M)(e.onTouchStart,e=>e.preventDefault())})))}),w="HoverCardPortal",[C,$]=h(w,{forceMount:void 0}),x=e=>{let{__scopeHoverCard:t,forceMount:r,children:n,container:o}=e,i=S(w,t);return(0,a.createElement)(C,{scope:t,forceMount:r},(0,a.createElement)(f.z,{present:r||i.open},(0,a.createElement)(d.h,{asChild:!0,container:o},n)))},R="HoverCardContent",O=(0,a.forwardRef)((e,t)=>{let r=$(R,e.__scopeHoverCard),{forceMount:n=r.forceMount,...l}=e,u=S(R,e.__scopeHoverCard);return(0,a.createElement)(f.z,{present:n||u.open},(0,a.createElement)(T,(0,o.Z)({"data-state":u.open?"open":"closed"},l,{onPointerEnter:(0,i.M)(e.onPointerEnter,M(u.onOpen)),onPointerLeave:(0,i.M)(e.onPointerLeave,M(u.onClose)),ref:t})))}),T=(0,a.forwardRef)((e,t)=>{let{__scopeHoverCard:r,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:f,...m}=e,v=S(R,r),h=g(r),y=(0,a.useRef)(null),b=(0,s.e)(t,y),[E,w]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(E){let e=document.body;return n=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=n,e.style.webkitUserSelect=n}}},[E]),(0,a.useEffect)(()=>{if(y.current){let e=()=>{w(!1),v.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var e;let t=(null===(e=document.getSelection())||void 0===e?void 0:e.toString())!=="";t&&(v.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),v.hasSelectionRef.current=!1,v.isPointerDownOnContentRef.current=!1}}},[v.isPointerDownOnContentRef,v.hasSelectionRef]),(0,a.useEffect)(()=>{if(y.current){let e=function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;r.nextNode();)t.push(r.currentNode);return t}(y.current);e.forEach(e=>e.setAttribute("tabindex","-1"))}}),(0,a.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:f,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:(0,i.M)(d,e=>{e.preventDefault()}),onDismiss:v.onDismiss},(0,a.createElement)(c.VY,(0,o.Z)({},h,m,{onPointerDown:(0,i.M)(m.onPointerDown,e=>{e.currentTarget.contains(e.target)&&w(!0),v.hasSelectionRef.current=!1,v.isPointerDownOnContentRef.current=!0}),ref:b,style:{...m.style,userSelect:E?"text":void 0,WebkitUserSelect:E?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})))});function M(e){return t=>"touch"===t.pointerType?void 0:e()}let P=e=>{let{__scopeHoverCard:t,children:r,open:n,defaultOpen:o,onOpenChange:i,openDelay:l=700,closeDelay:s=300}=e,d=g(t),f=(0,a.useRef)(0),m=(0,a.useRef)(0),p=(0,a.useRef)(!1),v=(0,a.useRef)(!1),[h=!1,y]=(0,u.T)({prop:n,defaultProp:o,onChange:i}),S=(0,a.useCallback)(()=>{clearTimeout(m.current),f.current=window.setTimeout(()=>y(!0),l)},[l,y]),E=(0,a.useCallback)(()=>{clearTimeout(f.current),p.current||v.current||(m.current=window.setTimeout(()=>y(!1),s))},[s,y]),w=(0,a.useCallback)(()=>y(!1),[y]);return(0,a.useEffect)(()=>()=>{clearTimeout(f.current),clearTimeout(m.current)},[]),(0,a.createElement)(b,{scope:t,open:h,onOpenChange:y,onOpen:S,onClose:E,onDismiss:w,hasSelectionRef:p,isPointerDownOnContentRef:v},(0,a.createElement)(c.fC,d,r))},D=E,I=x,_=O},90893:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(65122),o=r(3546),a=r(72205);let i=(0,o.forwardRef)((e,t)=>(0,o.createElement)(a.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),l=i},74225:function(e,t,r){r.d(t,{f:function(){return c}});var n=r(65122),o=r(3546),a=r(72205);let i="horizontal",l=["horizontal","vertical"],u=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:l=i,...u}=e,c=s(l)?l:i;return(0,o.createElement)(a.WV.div,(0,n.Z)({"data-orientation":c},r?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},u,{ref:t}))});function s(e){return l.includes(e)}u.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!s(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let c=u},18216:function(e,t,r){var n=r(6670),o=/^\s+/;t.Z=function(e){return e?e.slice(0,(0,n.Z)(e)+1).replace(o,""):e}},6670:function(e,t){var r=/\s/;t.Z=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},96786:function(e,t){t.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,t,r){var n=r(17996),o=r(96786);t.Z=function(e){return"symbol"==typeof e||(0,o.Z)(e)&&"[object Symbol]"==(0,n.Z)(e)}},26165:function(e,t,r){var n=r(18216),o=r(84639),a=r(55357),i=0/0,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.Z=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return i;if((0,o.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,o.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(0,n.Z)(e);var r=u.test(e);return r||s.test(e)?c(e.slice(2),r?2:8):l.test(e)?i:+e}},27257:function(e,t,r){r.d(t,{Ue:function(){return f},oR:function(){return c}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,a={setState:n,getState:o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,a),a},o=e=>e?n(e):n;var a=r(3546),i=r(52635);let{useDebugValue:l}=a,{useSyncExternalStoreWithSelector:u}=i,s=!1;function c(e,t=e.getState,r){r&&!s&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),s=!0);let n=u(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return l(n),n}let d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>c(t,e,r);return Object.assign(r,t),r},f=e=>e?d(e):d},85654:function(e,t,r){r.d(t,{tJ:function(){return i}});let n=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>n(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>n(t)(e)}}},o=(e,t)=>(r,o,a)=>{let i,l,u={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,c=new Set,d=new Set;try{i=u.getStorage()}catch(e){}if(!i)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),r(...e)},o,a);let f=n(u.serialize),m=()=>{let e;let t=u.partialize({...o()}),r=f({state:t,version:u.version}).then(e=>i.setItem(u.name,e)).catch(t=>{e=t});if(e)throw e;return r},p=a.setState;a.setState=(e,t)=>{p(e,t),m()};let v=e((...e)=>{r(...e),m()},o,a),h=()=>{var e;if(!i)return;s=!1,c.forEach(e=>e(o()));let t=(null==(e=u.onRehydrateStorage)?void 0:e.call(u,o()))||void 0;return n(i.getItem.bind(i))(u.name).then(e=>{if(e)return u.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===u.version)return e.state;if(u.migrate)return u.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(l=u.merge(e,null!=(t=o())?t:v),!0),m()}).then(()=>{null==t||t(l,void 0),s=!0,d.forEach(e=>e(l))}).catch(e=>{null==t||t(void 0,e)})};return a.persist={setOptions:e=>{u={...u,...e},e.getStorage&&(i=e.getStorage())},clearStorage:()=>{null==i||i.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>h(),hasHydrated:()=>s,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},h(),l||v},a=(e,t)=>(r,o,a)=>{let i,l={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let o=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(n=r.getItem(e))?n:null;return a instanceof Promise?a.then(o):o(a)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},u=!1,s=new Set,c=new Set,d=l.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),r(...e)},o,a);let f=()=>{let e=l.partialize({...o()});return d.setItem(l.name,{state:e,version:l.version})},m=a.setState;a.setState=(e,t)=>{m(e,t),f()};let p=e((...e)=>{r(...e),f()},o,a),v=()=>{var e,t;if(!d)return;u=!1,s.forEach(e=>{var t;return e(null!=(t=o())?t:p)});let a=(null==(t=l.onRehydrateStorage)?void 0:t.call(l,null!=(e=o())?e:p))||void 0;return n(d.getItem.bind(d))(l.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===l.version)return e.state;if(l.migrate)return l.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(i=l.merge(e,null!=(t=o())?t:p),!0),f()}).then(()=>{null==a||a(i,void 0),i=o(),u=!0,c.forEach(e=>e(i))}).catch(e=>{null==a||a(void 0,e)})};return a.persist={setOptions:e=>{l={...l,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>v(),hasHydrated:()=>u,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},l.skipHydration||v(),i||p},i=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),o(e,t)):a(e,t)}}]);