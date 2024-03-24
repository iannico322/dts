import{k as $,h as D,i as U,r as o,_ as R,j as e,d as O}from"./index-d0552f1c.js";import{d as P,g as V,$ as le,a as k,b as T,h as J,e as de}from"./index-79509097.js";import{r as L}from"./index-3da13bf7.js";function ue(t){const r=t+"CollectionProvider",[n,a]=P(r),[x,g]=n(r,{collectionRef:{current:null},itemMap:new Map}),u=l=>{const{scope:i,children:d}=l,m=$.useRef(null),c=$.useRef(new Map).current;return $.createElement(x,{scope:i,itemMap:c,collectionRef:m},d)},v=t+"CollectionSlot",h=$.forwardRef((l,i)=>{const{scope:d,children:m}=l,c=g(v,d),s=D(i,c.collectionRef);return $.createElement(U,{ref:s},m)}),b=t+"CollectionItemSlot",p="data-radix-collection-item",f=$.forwardRef((l,i)=>{const{scope:d,children:m,...c}=l,s=$.useRef(null),E=D(i,s),y=g(b,d);return $.useEffect(()=>(y.itemMap.set(s,{ref:s,...c}),()=>void y.itemMap.delete(s))),$.createElement(U,{[p]:"",ref:E},m)});function A(l){const i=g(t+"CollectionConsumer",l);return $.useCallback(()=>{const m=i.collectionRef.current;if(!m)return[];const c=Array.from(m.querySelectorAll(`[${p}]`));return Array.from(i.itemMap.values()).sort((y,I)=>c.indexOf(y.ref.current)-c.indexOf(I.ref.current))},[i.collectionRef,i.itemMap])}return[{Provider:u,Slot:h,ItemSlot:f},A,a]}const be=o.createContext(void 0);function Y(t){const r=o.useContext(be);return t||r||"ltr"}const M="rovingFocusGroup.onEntryFocus",fe={bubbles:!1,cancelable:!0},G="RovingFocusGroup",[B,Q,pe]=ue(G),[me,W]=P(G,[pe]),[xe,ge]=me(G),he=o.forwardRef((t,r)=>o.createElement(B.Provider,{scope:t.__scopeRovingFocusGroup},o.createElement(B.Slot,{scope:t.__scopeRovingFocusGroup},o.createElement(ve,R({},t,{ref:r}))))),ve=o.forwardRef((t,r)=>{const{__scopeRovingFocusGroup:n,orientation:a,loop:x=!1,dir:g,currentTabStopId:u,defaultCurrentTabStopId:v,onCurrentTabStopIdChange:h,onEntryFocus:b,...p}=t,f=o.useRef(null),A=D(r,f),l=Y(g),[i=null,d]=V({prop:u,defaultProp:v,onChange:h}),[m,c]=o.useState(!1),s=le(b),E=Q(n),y=o.useRef(!1),[I,q]=o.useState(0);return o.useEffect(()=>{const w=f.current;if(w)return w.addEventListener(M,s),()=>w.removeEventListener(M,s)},[s]),o.createElement(xe,{scope:n,orientation:a,dir:l,loop:x,currentTabStopId:i,onItemFocus:o.useCallback(w=>d(w),[d]),onItemShiftTab:o.useCallback(()=>c(!0),[]),onFocusableItemAdd:o.useCallback(()=>q(w=>w+1),[]),onFocusableItemRemove:o.useCallback(()=>q(w=>w-1),[])},o.createElement(k.div,R({tabIndex:m||I===0?-1:0,"data-orientation":a},p,{ref:A,style:{outline:"none",...t.style},onMouseDown:T(t.onMouseDown,()=>{y.current=!0}),onFocus:T(t.onFocus,w=>{const ae=!y.current;if(w.target===w.currentTarget&&ae&&!m){const H=new CustomEvent(M,fe);if(w.currentTarget.dispatchEvent(H),!H.defaultPrevented){const F=E().filter(C=>C.focusable),se=F.find(C=>C.active),ce=F.find(C=>C.id===i),ie=[se,ce,...F].filter(Boolean).map(C=>C.ref.current);z(ie)}}y.current=!1}),onBlur:T(t.onBlur,()=>c(!1))})))}),Ae="RovingFocusGroupItem",we=o.forwardRef((t,r)=>{const{__scopeRovingFocusGroup:n,focusable:a=!0,active:x=!1,tabStopId:g,...u}=t,v=J(),h=g||v,b=ge(Ae,n),p=b.currentTabStopId===h,f=Q(n),{onFocusableItemAdd:A,onFocusableItemRemove:l}=b;return o.useEffect(()=>{if(a)return A(),()=>l()},[a,A,l]),o.createElement(B.ItemSlot,{scope:n,id:h,focusable:a,active:x},o.createElement(k.span,R({tabIndex:p?0:-1,"data-orientation":b.orientation},u,{ref:r,onMouseDown:T(t.onMouseDown,i=>{a?b.onItemFocus(h):i.preventDefault()}),onFocus:T(t.onFocus,()=>b.onItemFocus(h)),onKeyDown:T(t.onKeyDown,i=>{if(i.key==="Tab"&&i.shiftKey){b.onItemShiftTab();return}if(i.target!==i.currentTarget)return;const d=Re(i,b.orientation,b.dir);if(d!==void 0){i.preventDefault();let c=f().filter(s=>s.focusable).map(s=>s.ref.current);if(d==="last")c.reverse();else if(d==="prev"||d==="next"){d==="prev"&&c.reverse();const s=c.indexOf(i.currentTarget);c=b.loop?ye(c,s+1):c.slice(s+1)}setTimeout(()=>z(c))}})})))}),$e={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Te(t,r){return r!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function Re(t,r,n){const a=Te(t.key,n);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return $e[a]}function z(t){const r=document.activeElement;for(const n of t)if(n===r||(n.focus(),document.activeElement!==r))return}function ye(t,r){return t.map((n,a)=>t[(r+a)%t.length])}const Ce=he,Ne=we,K="Tabs",[je,We]=P(K,[W]),X=W(),[ke,_]=je(K),Se=o.forwardRef((t,r)=>{const{__scopeTabs:n,value:a,onValueChange:x,defaultValue:g,orientation:u="horizontal",dir:v,activationMode:h="automatic",...b}=t,p=Y(v),[f,A]=V({prop:a,onChange:x,defaultProp:g});return o.createElement(ke,{scope:n,baseId:J(),value:f,onValueChange:A,orientation:u,dir:p,activationMode:h},o.createElement(k.div,R({dir:p,"data-orientation":u},b,{ref:r})))}),Ee="TabsList",Le=o.forwardRef((t,r)=>{const{__scopeTabs:n,loop:a=!0,...x}=t,g=_(Ee,n),u=X(n);return o.createElement(Ce,R({asChild:!0},u,{orientation:g.orientation,dir:g.dir,loop:a}),o.createElement(k.div,R({role:"tablist","aria-orientation":g.orientation},x,{ref:r})))}),Ie="TabsTrigger",Fe=o.forwardRef((t,r)=>{const{__scopeTabs:n,value:a,disabled:x=!1,...g}=t,u=_(Ie,n),v=X(n),h=Z(u.baseId,a),b=ee(u.baseId,a),p=a===u.value;return o.createElement(Ne,R({asChild:!0},v,{focusable:!x,active:p}),o.createElement(k.button,R({type:"button",role:"tab","aria-selected":p,"aria-controls":b,"data-state":p?"active":"inactive","data-disabled":x?"":void 0,disabled:x,id:h},g,{ref:r,onMouseDown:T(t.onMouseDown,f=>{!x&&f.button===0&&f.ctrlKey===!1?u.onValueChange(a):f.preventDefault()}),onKeyDown:T(t.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&u.onValueChange(a)}),onFocus:T(t.onFocus,()=>{const f=u.activationMode!=="manual";!p&&!x&&f&&u.onValueChange(a)})})))}),Me="TabsContent",De=o.forwardRef((t,r)=>{const{__scopeTabs:n,value:a,forceMount:x,children:g,...u}=t,v=_(Me,n),h=Z(v.baseId,a),b=ee(v.baseId,a),p=a===v.value,f=o.useRef(p);return o.useEffect(()=>{const A=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(A)},[]),o.createElement(de,{present:x||p},({present:A})=>o.createElement(k.div,R({"data-state":p?"active":"inactive","data-orientation":v.orientation,role:"tabpanel","aria-labelledby":h,hidden:!A,id:b,tabIndex:0},u,{ref:r,style:{...t.style,animationDuration:f.current?"0s":void 0}}),A&&g))});function Z(t,r){return`${t}-trigger-${r}`}function ee(t,r){return`${t}-content-${r}`}const Be=Se,te=Le,oe=Fe,re=De,Oe=Be,ne=o.forwardRef(({className:t,...r},n)=>e.jsx(te,{ref:n,className:O("inline-flex bg-white h-10 items-center justify-center   p-1 text-muted-foreground",t),...r}));ne.displayName=te.displayName;const N=o.forwardRef(({className:t,...r},n)=>e.jsx(oe,{ref:n,className:O("  bg-white font-bold border-r-[1px] border-l-[1px] border-border   transition-all duration-150  inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:border-r-[2px] data-[state=active]:border-l-[2px] data-[state=active]:font-extrabold data-[state=active]:border-b-0 data-[state=active]:text-blue3 data-[state=active]:border-blue3  ",t),...r}));N.displayName=oe.displayName;const j=o.forwardRef(({className:t,...r},n)=>e.jsx(re,{ref:n,className:O("mt-2 bg-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",t),...r}));j.displayName=re.displayName;const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgBvVVLbhpBEK1qj3Cym4VBWZIThCyiQDbBJwicgB7nAA4nMD5BnAtA+wThBrAySFmEnCCzDUTK7GIwTLlqPngwDANG8pNGPVJX96vva4BnAGYZ5N/pEliqAUClNJs7IscbGjdtX8EWFCq6hhb+RCANmz20+avmEHt2WRfT7sHtJM5vWWfH9NbrG+/x/klZVxUT8K/seTOi000RpUYiF/BShAU1NxEkQURNWdMiSiWZK/AIoE8ELmQAffAUR5FGtJYuu6pt6z9oPFJv2MVVY0RvfNOuJ21zU/xHgFeTQbv5ii/3w/RBMnUrJPnK53MEvyXn+XM5EjfhjRAWCdFMbtrO8kzZMYjQYIMRR+3FdsH5OdUnP8wIH4y1Zk87nOHu7Bicx3UolLXhUBryv04kZ9UnArIjh2Qt+RzN36HpW4lUnAv7eGDqkA6XU3jNl1zkP5xBTDQZGsOLiY0SXRdAxbkVZp6Hb5CB8dC0mOgSiTQTdWAHBCTWLQTTvCAYpRkSBrNgi0P7EinYEVzUrpDkpqpz8l5/iZpiJESFytn3KBuHkUgBxXvRMKXwa9gkEOkZ1eJsHEQikDSNB53XPAPLj6fdyTpnwROQ1CfuJDc5bJI2NVXcqeTOX4Q1fhJJGvIVp4dTSRuxOj9oXkAiOpXjSiofbDgQPKhd8v3roIYRwkhy3ClTHsijQA72vJU953xJarx+53STSVB4CStQ3Eg29gF3mijFaNtzsKwJyXAB9qTnZ+Q3tz2nglCBlWhdMavDVlSYRbDFInYR7QSqmnKoCOHHqkuXfwbmCnYlEcibMCeoKaU+xqq6fgpdWvi/5i/BZL2az4Z7vH0yUWTYyNoAAAAASUVORK5CYII=",Pe=[{tracknumber:"LTR20242204",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 15, 2024",status:"waiting"},{tracknumber:"LTR20242205",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 22, 2024",status:"ongoing"},{tracknumber:"LTR20242206",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 05, 2024",status:"accepted"},{tracknumber:"LTR20242207",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 18, 2024",status:"waiting"},{tracknumber:"LTR20242208",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 10, 2024",status:"ongoing"},{tracknumber:"LTR20242209",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 20, 2024",status:"accepted"},{tracknumber:"LTR20242210",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 25, 2024",status:"waiting"},{tracknumber:"LTR20242211",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 08, 2024",status:"ongoing"},{tracknumber:"LTR20242212",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 12, 2024",status:"accepted"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"},{tracknumber:"LTR20242204",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 15, 2024",status:"waiting"},{tracknumber:"LTR20242205",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 22, 2024",status:"ongoing"},{tracknumber:"LTR20242206",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 05, 2024",status:"accepted"},{tracknumber:"LTR20242207",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 18, 2024",status:"waiting"},{tracknumber:"LTR20242208",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 10, 2024",status:"ongoing"},{tracknumber:"LTR20242209",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 20, 2024",status:"accepted"},{tracknumber:"LTR20242210",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 25, 2024",status:"waiting"},{tracknumber:"LTR20242211",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 08, 2024",status:"ongoing"},{tracknumber:"LTR20242212",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 12, 2024",status:"accepted"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"}],Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH+SURBVHgB3VVLUuMwEG3Jznp8hKi4gIt41nhOMNxgJicY3yDDCcicgOQGcAK8H75roBROQFjHknhtbDD+hJis4FW5LOvzXqv12iL67BC0BQb6e2jI7nkkQ2fto5N0adT5fCsBX0cxXnuO3G9BYsh9aC/wCvAd4J1m6uxHL4E2Uiay0h1ba+akrpbcIfVuIkkeOqJ9o85O1grw9kH48z3SlmAeMP94pf6P8++OaCcgjp8jEEw6XUdaBdYtRSXuNwL+fTQhS3+LSQcZZdNNSF+gw2G+W+uuGwLe7Wg/J3duboRJehGXHEbG5KEhRdoY9O9GU87fuyw6DHA+R3xGDQ4dnXp6pKt98rUlOOKAt7mO3Cf/lA8eT1Ab43WxsHTSKsD5Zj975HEUv7rI0QqR5zG8nlaH8/QAQspZtV/UowDJEUfCYhwNL1jRalElhwVndX1OD9YMUcmqW6CMRu/C+5J3Eb+d3E5eBKbhnn/ZznlSHZJtAkZdzLjckTblyI55N/y0klN3ejbGQEcJUuD8m7wIG2hzTwlJG2BF2ayYHTcGO9zTS6AouhSz/9SHyvRk0kw/LvCMAzzB4C56PURYlzwxycXV1WIrgcL3KS6VSVmMqJlD/vfADOOudT71ABNxIbIlnR4t8wvGYmc77dEz+l+Z7HnrJbDkN1h3Xq/or4cnm8P5eyNRRoIAAAAASUVORK5CYII=",_e=Pe,qe=[{Header:"Track Number",accessor:"tracknumber"},{Header:"Title",accessor:"title"},{Header:"Requestor",accessor:"requestor"},{Header:"Document Type",accessor:"doctype"},{Header:"Date Submitted",accessor:"datesubmitted"},{Header:"Status",accessor:"status"}];function He({search:t}){const{getTableProps:r,getTableBodyProps:n,headerGroups:a,prepareRow:x,page:g,state:u,setGlobalFilter:v,gotoPage:h,nextPage:b,previousPage:p,canPreviousPage:f,canNextPage:A,pageCount:l,setPageSize:i}=L.useTable({columns:qe,data:_e},L.useGlobalFilter,L.useSortBy,L.usePagination),{pageIndex:d}=u;return o.useEffect(()=>{i(10)},[]),o.useEffect(()=>{v(t)},[t]),e.jsxs("div",{className:" relative flex flex-col h-[80%] w-full overflow-hidden justify-between",children:[e.jsxs("div",{className:"overflow-hidden",children:[e.jsx("table",{...r(),className:"w-full text-xs font-light table-fixed",children:e.jsx("thead",{className:"text-[#0077FF] h-[20px]",children:a.map(m=>e.jsx("tr",{...m.getHeaderGroupProps(),className:"border-b border-[#00000013] text-sm",children:m.headers.map(c=>e.jsxs("th",{...c.getHeaderProps(c.getSortByToggleProps()),className:"pl-4 py-2 text-left truncate",children:[c.render("Header"),e.jsx("span",{children:c.isSorted?c.isSortedDesc?e.jsx("span",{children:"▼"}):e.jsx("span",{children:"▲"}):""})]}))}))})}),e.jsx("div",{className:"overflow-y-auto overflow-x-hidden  min-h-[100px] h-full ",children:e.jsx("table",{className:"w-full text-xs font-light table-fixed",children:e.jsx("tbody",{...n(),className:"overflow-hidden w-full",children:g.map((m,c)=>(x(m),e.jsx("tr",{...m.getRowProps(),className:c%2==0?" cursor-pointer hover:bg-[#ffe34638] h-10 border-b border-[#00000013] text-sm font-medium bg-[#e8ebef]":" cursor-pointer hover:bg-[#ffe34638] border-b border-[#00000013] text-sm font-medium bg-[#d0d7df]",children:m.cells.map(s=>s.column.Header=="Track Number"?e.jsxs("td",{className:" h-10 pl-4 py-4 text-left text-[#163961] font-semibold truncate",children:[" ",e.jsxs("div",{className:" flex items-center gap-2",children:[e.jsx("img",{src:Ge,className:" h-4 object-contain",alt:""}),s.render("Cell")]})]},s.column.id):e.jsxs("td",{className:"h-10 pl-4 py-4 font-semibold text-[#163961] text-left truncate",children:[" ",s.render("Cell")]},s.column.id))})))})})})]}),e.jsxs("div",{className:" hidden sm:flex  h-[10%] k w-full items-center bottom-0 self-center mb-2  justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center",children:[e.jsx("button",{onClick:()=>p(),disabled:!f,className:`className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e.jsxs("p",{className:" text-xs",children:[" ",e.jsxs("b",{children:[d+1," "]})," / ",l]}),e.jsx("button",{onClick:()=>b(),disabled:!A,className:`flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,type:"button",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]}),e.jsxs("div",{className:" sm:hidden  h-[100px] k w-full items-center bottom-0 self-center mb-2 flex justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center",children:[e.jsx("button",{onClick:()=>p(),disabled:!f,className:`className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),d>2&&l>5&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>h(0),className:" px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",children:"1"}),e.jsx("span",{className:"px-3 py-1",children:"..."})]}),Array.from({length:Math.min(5,l)},(m,c)=>{let s;return l<=5||d<3?s=c:d>l-4?s=l-5+c:s=d-2+c,e.jsx("button",{onClick:()=>h(s),className:`px-3 py-1 border  ${d===s?"h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg bg-orange text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none":"h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"}`,children:s+1},s)}),d<l-3&&l>5&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"px-3 py-1",children:"..."}),e.jsx("button",{onClick:()=>h(l-1),className:" px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",children:l})]}),e.jsx("button",{onClick:()=>b(),disabled:!A,className:`flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,type:"button",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]})]})}const Ue=()=>e.jsxs(Oe,{defaultValue:"Letter",className:"   relative flex w-[90%] h-full   flex-col items-start ",children:[e.jsxs(ne,{className:" h-10 ",children:[e.jsxs(N,{value:"Letter",className:" flex gap-2 px-5",children:[" ",e.jsx("img",{src:S,className:" h-4 w-4"})," Letter",e.jsx("div",{className:" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]",children:e.jsx("p",{className:" text-[10px]",children:" 1"})})]}),e.jsxs(N,{value:"AR",className:" flex gap-2 px-5",children:[e.jsx("img",{src:S,className:" h-4 w-4"}),"Accomplishment Reports ",e.jsx("div",{className:" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]",children:e.jsx("p",{className:" text-[10px]",children:" 1"})})]}),e.jsxs(N,{value:"DTR",className:" flex gap-2 px-5",children:[e.jsx("img",{src:S,className:" h-4 w-4"}),"Daily Time Record",e.jsx("div",{className:" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]",children:e.jsx("p",{className:" text-[10px]",children:" 1"})})]}),e.jsxs(N,{value:"LR",className:" flex gap-2 px-5",children:[e.jsx("img",{src:S,className:" h-4 w-4"}),"Liquidation Report",e.jsx("div",{className:" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]",children:e.jsx("p",{className:" text-[10px]",children:" 1"})})]}),e.jsxs(N,{value:"DV",className:" flex gap-2 px-5",children:[e.jsx("img",{src:S,className:" h-4 w-4"}),"Disbursement Voucher",e.jsx("div",{className:" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]",children:e.jsx("p",{className:" text-[10px]",children:" 1"})})]})]}),e.jsx(j,{value:"Letter",className:" h-full w-full  ",children:e.jsx(He,{})}),e.jsx(j,{value:"AR",className:" h-full w-full bg-red-300 ",children:"Change AR."}),e.jsx(j,{value:"DTR",className:" h-full w-full bg-purple-300 ",children:"Change DTR"}),e.jsx(j,{value:"LR",className:" h-full w-full bg-slate-300 ",children:"Change LR"}),e.jsx(j,{value:"DV",className:" h-full w-full bg-green-300 ",children:"Change DV"})]}),ze=()=>e.jsx("div",{className:" h-screen w-full flex justify-center gap-4 flex-wrap",children:e.jsx("div",{className:" w-full h-[90%]  mt-[200px] mb-[200px]  flex   justify-center",children:e.jsx(Ue,{})})});export{ze as default};
