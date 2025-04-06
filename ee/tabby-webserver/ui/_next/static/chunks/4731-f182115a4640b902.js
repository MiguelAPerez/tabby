"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4731],{40030:function(e,t,r){r.d(t,{r:function(){return b}});var n=r(36164),a=r(3546),s=r(37671),l=r(2578),o=r(40055),d=r(43240),i=r(11634),c=r(70410),u=r(57288),f=r(31458),m=r(36065),p=r(81565),x=r(84942),h=r(3448),g=r(6230);let N=(0,d.BX)("\n  mutation grantSourceIdReadAccess($sourceId: String!, $userGroupId: ID!) {\n    grantSourceIdReadAccess(sourceId: $sourceId, userGroupId: $userGroupId)\n  }\n"),v=(0,d.BX)("\n  mutation revokeSourceIdReadAccess($sourceId: String!, $userGroupId: ID!) {\n    revokeSourceIdReadAccess(sourceId: $sourceId, userGroupId: $userGroupId)\n  }\n");function b(e){var t;let{sourceId:r,sourceName:d,className:b,editable:j,userGroups:y,fetchingUserGroups:w,...R}=e,[k,I]=(0,a.useState)(!1),[{data:Y,fetching:S}]=(0,o.aM)({query:c.hA,variables:{sourceId:r}}),_=(0,i.Db)(N),C=(0,i.Db)(v),z=null==Y?void 0:null===(t=Y.sourceIdAccessPolicies)||void 0===t?void 0:t.read,A=(null==z?void 0:z.length)||0,O=(0,a.useMemo)(()=>(null==z?void 0:z.length)?new Set(z.map(e=>e.id)):new Set,[z]),J=(e,t,r)=>{r?D(e,t):$(e,t)},D=(e,t)=>{let n="Failed to grant ".concat(t);return _({sourceId:r,userGroupId:e},{extraParams:{userGroupName:t}}).then(e=>{var t,r;if(!(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.grantSourceIdReadAccess)){let t=(null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.message)||n;l.A.error(t);return}}).catch(e=>{let t=(null==e?void 0:e.message)||n;l.A.error(t)})},$=(e,t)=>C({sourceId:r,userGroupId:e},{extraParams:{userGroupName:t}}).then(e=>{var r,n;if(!(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.revokeSourceIdReadAccess)){let r=(null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to revoke '".concat(t,"'");l.A.error(r);return}}).catch(e=>{let r=(null==e?void 0:e.message)||"Failed to revoke '".concat(t,"'");l.A.error(r)}),E=0===A?"Everyone":"".concat(A," ").concat(A<=1?"group":"groups");return(0,n.jsx)(g.Z,{loading:S,fallback:(0,n.jsx)(h.O,{className:(0,u.cn)(b)}),children:(0,n.jsxs)("div",{className:(0,u.cn)("flex items-center gap-0.5",b),children:[(0,n.jsx)("span",{className:"w-[68px]",children:E}),j&&(0,n.jsxs)(x.J2,{open:k,onOpenChange:I,children:[(0,n.jsx)(x.xo,{asChild:!0,children:(0,n.jsx)(f.z,{variant:"ghost",role:"combobox",size:"icon",children:(0,n.jsx)(p.IconEdit,{})})}),(0,n.jsx)(x.yk,{align:"end",side:"top",children:(0,n.jsxs)(m.mY,{children:[(0,n.jsx)(m.sZ,{placeholder:"Search groups..."}),(0,n.jsxs)(m.e8,{className:"max-h-[30vh]",children:[(0,n.jsx)(m.rb,{children:w?(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(p.IconSpinner,{className:"h-6 w-6"})}):(null==y?void 0:y.length)?"No matches results":"No groups found"}),(0,n.jsx)(m.fu,{children:null==y?void 0:y.map(e=>{let t=O.has(e.id),r=e.members.length;return(0,n.jsxs)(m.di,{value:e.name,onSelect:()=>J(e.id,e.name,!t),children:[(0,n.jsx)("div",{className:(0,u.cn)("mr-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border border-primary",t?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,n.jsx)(s.nQG,{className:(0,u.cn)("h-4 w-4")})}),(0,n.jsxs)("span",{children:[e.name,(0,n.jsx)("span",{className:"ml-1 text-muted-foreground",children:"(".concat(r," member").concat(r>1?"s":"",")")})]})]},e.id)})})]})]})})]})]})})}},55137:function(e,t,r){r.d(t,{_:function(){return h}});var n=r(36164),a=r(3546),s=r(70652),l=r.n(s),o=r(11978),d=r(99092),i=r.n(d),c=r(57288),u=r(31458),f=r(81565),m=r(29);function p(e){let{onTrigger:t,isPending:r,jobLink:s}=e,l=(0,o.useRouter)(),[d,i]=a.useState(!1);return(0,n.jsxs)(m.u,{children:[(0,n.jsx)(m.aJ,{asChild:!0,children:(0,n.jsx)(u.z,{size:"icon",variant:"ghost",onClick:()=>{if(r){s&&l.push(s);return}let e=t();return e&&e instanceof Promise&&(i(!0),e.finally(()=>i(!1))),e},disabled:d,children:d||r?(0,n.jsx)(f.IconSpinner,{}):(0,n.jsx)(f.IconCirclePlay,{strokeWidth:1,className:"h-5 w-5"})})}),(0,n.jsx)(m._v,{children:(0,n.jsx)("p",{children:"Run"})})]})}function x(e){let{jobInfo:t,className:r}=e;return(null==t?void 0:t.lastJobRun)?(0,n.jsx)(l(),{href:"/jobs/detail?id=".concat(t.lastJobRun.id),className:(0,c.cn)("flex items-center gap-1 underline hover:text-foreground/50",r),children:i()(t.lastJobRun.createdAt).format("YYYY-MM-DD HH:mm")}):null}function h(e){var t;let{jobInfo:r,onTrigger:a,className:s}=e,l=!!(null==r?void 0:r.lastJobRun)&&null===r.lastJobRun.exitCode,o=(null==r?void 0:null===(t=r.lastJobRun)||void 0===t?void 0:t.id)?"/jobs/detail?id=".concat(r.lastJobRun.id):void 0;return(0,n.jsxs)("div",{className:(0,c.cn)("flex items-center gap-1",s),children:[(0,n.jsx)(x,{jobInfo:r,className:"hidden lg:block lg:w-32"}),(0,n.jsx)(p,{onTrigger:a,isPending:l,jobLink:o})]})}},14522:function(e,t,r){r.d(t,{C:function(){return a}});var n=r(43240);let a=(0,n.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},6230:function(e,t,r){var n=r(36164),a=r(3546),s=r(24449),l=r(90379);t.Z=e=>{let{triggerOnce:t=!0,loading:r,fallback:o,delay:d,children:i}=e,[c,u]=a.useState(!r),[f]=(0,s.n)(c,null!=d?d:200);return(a.useEffect(()=>{t?r||c||u(!0):u(!r)},[r]),f)?i:o||(0,n.jsx)(l.cg,{})}},90379:function(e,t,r){r.d(t,{PF:function(){return d},cg:function(){return l},tB:function(){return o}});var n=r(36164),a=r(57288),s=r(3448);let l=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("space-y-3",t),...r,children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},o=e=>{let{className:t,...r}=e;return(0,n.jsx)(s.O,{className:(0,a.cn)("h-4 w-full",t),...r})},d=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",t),...r,children:[(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})}},36065:function(e,t,r){r.d(t,{di:function(){return p},e8:function(){return c},fu:function(){return f},mY:function(){return d},rb:function(){return u},sZ:function(){return i},zz:function(){return m}});var n=r(36164),a=r(3546),s=r(53241),l=r(93170),o=r(57288);r(30220);let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.mY,{ref:t,className:(0,o.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",r),...a})});d.displayName=s.mY.displayName;let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,n.jsx)(l.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,n.jsx)(s.mY.Input,{ref:t,className:(0,o.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",r),...a})]})});i.displayName=s.mY.Input.displayName;let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.mY.List,{ref:t,className:(0,o.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",r),...a})});c.displayName=s.mY.List.displayName;let u=a.forwardRef((e,t)=>(0,n.jsx)(s.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=s.mY.Empty.displayName;let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.mY.Group,{ref:t,className:(0,o.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",r),...a})});f.displayName=s.mY.Group.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.mY.Separator,{ref:t,className:(0,o.cn)("-mx-1 h-px bg-border",r),...a})});m.displayName=s.mY.Separator.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.mY.Item,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",r),...a})});p.displayName=s.mY.Item.displayName},30220:function(e,t,r){r.d(t,{$N:function(){return x},Be:function(){return h},Vq:function(){return d},cN:function(){return p},cZ:function(){return f},fK:function(){return m},hg:function(){return i}});var n=r(36164),a=r(3546),s=r(4318),l=r(1663),o=r(57288);let d=s.fC,i=s.xz,c=s.h_;s.x8;let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a})});u.displayName=s.aV.displayName;let f=a.forwardRef((e,t)=>{let{className:r,children:a,...d}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(s.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...d,children:[a,(0,n.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(l.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=s.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};m.displayName="DialogHeader";let p=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};p.displayName="DialogFooter";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});x.displayName=s.Dx.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});h.displayName=s.dk.displayName},84942:function(e,t,r){r.d(t,{J2:function(){return o},xo:function(){return d},yk:function(){return i}});var n=r(36164),a=r(3546),s=r(83299),l=r(57288);let o=s.fC,d=s.xz;s.x8,s.h_,s.ee;let i=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...o}=e;return(0,n.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})});i.displayName=s.VY.displayName},57830:function(e,t,r){r.r(t),r.d(t,{ScrollArea:function(){return o},ScrollBar:function(){return d}});var n=r(36164),a=r(3546),s=r(86102),l=r(57288);let o=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsxs)(s.fC,{className:(0,l.cn)("relative overflow-hidden",r),...o,children:[(0,n.jsx)(s.l_,{ref:t,className:"h-full w-full rounded-[inherit] [&>div]:!block",children:a}),(0,n.jsx)(d,{}),(0,n.jsx)(s.Ns,{})]})});o.displayName=s.fC.displayName;let d=a.forwardRef((e,t)=>{let{className:r,orientation:a="vertical",...o}=e;return(0,n.jsx)(s.gb,{ref:t,orientation:a,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...o,children:(0,n.jsx)(s.q4,{className:"relative flex-1 rounded-full bg-border"})})});d.displayName=s.gb.displayName},3448:function(e,t,r){r.d(t,{O:function(){return s}});var n=r(36164),a=r(57288);function s(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-border",t),...r})}},99047:function(e,t,r){r.d(t,{RM:function(){return d},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return u},xD:function(){return o}});var n=r(36164),a=r(3546),s=r(57288);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",r),...a})});l.displayName="Table";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",r),...a})});o.displayName="TableHeader";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",r),...a})});d.displayName="TableBody";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})});i.displayName="TableFooter";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});c.displayName="TableRow";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...a})});u.displayName="TableHead";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0",r),...a})});f.displayName="TableCell";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",r),...a})});m.displayName="TableCaption"},29:function(e,t,r){r.d(t,{_v:function(){return c},aJ:function(){return i},pn:function(){return o},u:function(){return d}});var n=r(36164),a=r(3546),s=r(44421),l=r(57288);let o=s.zt,d=s.fC,i=s.xz;s.h_;let c=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...o}=e;return(0,n.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",r),...o})});c.displayName=s.VY.displayName},24449:function(e,t,r){r.d(t,{S:function(){return o},n:function(){return d}});var n=r(3546),a=r(45391),s=r(16784);let l=e=>{let t=(0,s.d)(e);n.useEffect(()=>()=>{t.current()},[])};function o(e,t,r){let o=(0,s.d)(e),d=n.useMemo(()=>(0,a.Z)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.current(...t)},t,r),[]);return l(()=>{var e;null==r||null===(e=r.onUnmount)||void 0===e||e.call(r,d),d.cancel()}),{run:d,cancel:d.cancel,flush:d.flush}}function d(e,t,r){let[a,s]=n.useState(e),{run:l}=o(()=>{s(e)},t,r);return n.useEffect(()=>{l()},[e]),[a,s]}},16784:function(e,t,r){r.d(t,{d:function(){return a}});var n=r(3546);function a(e){let t=n.useRef(e);return t.current=e,t}}}]);