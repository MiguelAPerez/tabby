(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3721],{61200:function(e,t,r){"use strict";var n=r(90275),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,a,l,u,s,c,d,f=!1;t||(t={}),a=t.debug||!1;try{if(u=n(),s=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),c.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,i),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),d&&document.body.removeChild(d),u()}return f}},85933:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(68517),o=r(53388),i=o._(r(3546)),a=n._(r(30171)),l=n._(r(87241)),u=r(47296),s=r(37849),c=r(87775);r(11928);let d=r(60889),f=n._(r(66692)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:l,decoding:u,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:b,fill:h,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,onLoad:C,onError:S,...E}=e;return i.default.createElement("img",{...E,...g(d),loading:p,width:l,height:a,decoding:u,"data-nimg":h?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,f,v,y,w,b))},[r,f,v,y,w,S,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,v,y,w,b)},onError:e=>{_(!0),"empty"!==f&&w(!0),S&&S(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let[v,y]=(0,i.useState)(!1),[w,_]=(0,i.useState)(!1),{props:C,meta:S}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:v,showAltText:w});return i.default.createElement(i.default.Fragment,null,i.default.createElement(b,{...C,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:_,ref:t}),S.priority?i.default.createElement(h,{isAppRouter:!r,imgAttributes:C}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2425:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let n=r(68517),o=n._(r(3546)),i=o.default.createContext({})},78976:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},47296:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(11928);let n=r(2245),o=r(37849);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,u,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:b,width:h,height:v,fill:y=!1,style:w,onLoad:_,onLoadingComplete:C,placeholder:S="empty",blurDataURL:E,fetchPriority:x,layout:P,objectFit:I,objectPosition:R,lazyBoundary:j,lazyRoot:D,...M}=e,{imgConf:O,showAltText:A,blurComplete:k,defaultLoader:z}=t,F=O||o.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}let T=M.loader||z;delete M.loader,delete M.srcSet;let U="__next_img_default"in T;if(U){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!d&&(d=t)}let L="",G=a(h),N=a(v);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,E=E||e.blurDataURL,L=e.src,!y){if(G||N){if(G&&!N){let t=G/e.width;N=Math.round(e.height*t)}else if(!G&&N){let t=N/e.height;G=Math.round(e.width*t)}}else G=e.width,N=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:L)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,B=!1),l.unoptimized&&(f=!0),U&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(x="high");let W=a(b),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},A?{}:{color:"transparent"},w),H=k||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:N,blurWidth:u,blurHeight:s,blurDataURL:E||"",objectFit:V.objectFit})+'")':'url("'+S+'")',q=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:i,width:u[c]})}}({config:l,src:c,unoptimized:f,width:G,quality:W,sizes:d,loader:T}),Z={...M,loading:B?"lazy":m,fetchPriority:x,width:G,height:N,decoding:"async",className:g,style:{...V,...q},sizes:K.sizes,srcSet:K.srcSet,src:K.src},$={unoptimized:f,priority:p,placeholder:S,fill:y};return{props:Z,meta:$}}},87241:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(68517),o=r(53388),i=o._(r(3546)),a=n._(r(18017)),l=r(2425),u=r(35459),s=r(78976);function c(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(11928);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2245:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n?40*n:t,u=o?40*o:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87775:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(68517),o=n._(r(3546)),i=r(37849),a=o.default.createContext(i.imageConfigDefault)},37849:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},96076:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return u}});let n=r(68517),o=r(47296),i=r(11928),a=r(85933),l=n._(r(66692)),u=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},66692:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},18017:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(53388),o=n._(r(3546)),i=o.useLayoutEffect,a=o.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},11928:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},42891:function(e,t,r){e.exports=r(96076)},90275:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},89386:function(e,t,r){"use strict";r.d(t,{Pc:function(){return _},ck:function(){return D},fC:function(){return j}});var n=r(65122),o=r(3546),i=r(65727),a=r(6424),l=r(79869),u=r(47091),s=r(29434),c=r(72205),d=r(17957),f=r(27250),p=r(57541);let m="rovingFocusGroup.onEntryFocus",g={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[h,v,y]=(0,a.B)(b),[w,_]=(0,u.b)(b,[y]),[C,S]=w(b),E=(0,o.forwardRef)((e,t)=>(0,o.createElement)(h.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(h.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(x,(0,n.Z)({},e,{ref:t}))))),x=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:u=!1,dir:s,currentTabStopId:b,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:y,onEntryFocus:w,..._}=e,S=(0,o.useRef)(null),E=(0,l.e)(t,S),x=(0,p.gm)(s),[P=null,I]=(0,f.T)({prop:b,defaultProp:h,onChange:y}),[j,D]=(0,o.useState)(!1),M=(0,d.W)(w),O=v(r),A=(0,o.useRef)(!1),[k,z]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(m,M),()=>e.removeEventListener(m,M)},[M]),(0,o.createElement)(C,{scope:r,orientation:a,dir:x,loop:u,currentTabStopId:P,onItemFocus:(0,o.useCallback)(e=>I(e),[I]),onItemShiftTab:(0,o.useCallback)(()=>D(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>z(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>z(e=>e-1),[])},(0,o.createElement)(c.WV.div,(0,n.Z)({tabIndex:j||0===k?-1:0,"data-orientation":a},_,{ref:E,style:{outline:"none",...e.style},onMouseDown:(0,i.M)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,i.M)(e.onFocus,e=>{let t=!A.current;if(e.target===e.currentTarget&&t&&!j){let t=new CustomEvent(m,g);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable),t=e.find(e=>e.active),r=e.find(e=>e.id===P),n=[t,r,...e].filter(Boolean),o=n.map(e=>e.ref.current);R(o)}}A.current=!1}),onBlur:(0,i.M)(e.onBlur,()=>D(!1))})))}),P=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:l=!1,tabStopId:u,...d}=e,f=(0,s.M)(),p=u||f,m=S("RovingFocusGroupItem",r),g=m.currentTabStopId===p,b=v(r),{onFocusableItemAdd:y,onFocusableItemRemove:w}=m;return(0,o.useEffect)(()=>{if(a)return y(),()=>w()},[a,y,w]),(0,o.createElement)(h.ItemSlot,{scope:r,id:p,focusable:a,active:l},(0,o.createElement)(c.WV.span,(0,n.Z)({tabIndex:g?0:-1,"data-orientation":m.orientation},d,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{a?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,i.M)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,i.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return I[o]}(e,m.orientation,m.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),i=o.map(e=>e.ref.current);if("last"===t)i.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&i.reverse();let o=i.indexOf(e.currentTarget);i=m.loop?(r=i,n=o+1,r.map((e,t)=>r[(n+t)%r.length])):i.slice(o+1)}setTimeout(()=>R(i))}})})))}),I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function R(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}let j=E,D=P}}]);