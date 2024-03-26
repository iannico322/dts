import{a as S,r as d,j as e}from"./index-127e0374.js";import{r as i}from"./index-968db9df.js";import{S as T,F as P}from"./document-copy-01b9dd0d.js";import{S as A}from"./search-0d2c2ad0.js";const R=[{tracknumber:"LTR20242204",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 15, 2024",status:"waiting"},{tracknumber:"LTR20242205",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 22, 2024",status:"waiting"},{tracknumber:"LTR20242206",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 05, 2024",status:"accepted"},{tracknumber:"LTR20242207",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 18, 2024",status:"waiting"},{tracknumber:"LTR20242208",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 10, 2024",status:"waiting"},{tracknumber:"LTR20242209",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 20, 2024",status:"accepted"},{tracknumber:"LTR20242210",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 25, 2024",status:"waiting"},{tracknumber:"LTR20242211",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 08, 2024",status:"waiting"},{tracknumber:"LTR20242212",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 12, 2024",status:"accepted"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"},{tracknumber:"LTR20242204",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 15, 2024",status:"waiting"},{tracknumber:"LTR20242205",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 22, 2024",status:"waiting"},{tracknumber:"LTR20242206",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 05, 2024",status:"accepted"},{tracknumber:"LTR20242207",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 18, 2024",status:"waiting"},{tracknumber:"LTR20242208",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 10, 2024",status:"waiting"},{tracknumber:"LTR20242209",title:"Work From Home Request",requestor:"John Doe",doctype:"Work From Home",datesubmitted:"April 20, 2024",status:"accepted"},{tracknumber:"LTR20242210",title:"Travel Authorization",requestor:"Jane Smith",doctype:"Travel",datesubmitted:"April 25, 2024",status:"waiting"},{tracknumber:"LTR20242211",title:"Overtime Approval",requestor:"Emily Davis",doctype:"Overtime",datesubmitted:"April 08, 2024",status:"waiting"},{tracknumber:"LTR20242212",title:"Annual Leave Request",requestor:"Michael Johnson",doctype:"Annual Leave",datesubmitted:"April 12, 2024",status:"accepted"},{tracknumber:"LTR20242213",title:"Letter for Sick Leave",requestor:"Gia C. Sumagang",doctype:"Sick Leave",datesubmitted:"April 17, 2024",status:"waiting"}],q=R.filter(l=>l.status==="accepted"),H=[{Header:"Track Number",accessor:"tracknumber"},{Header:"Title",accessor:"title"},{Header:"Requestor",accessor:"requestor"},{Header:"Document Type",accessor:"doctype"},{Header:"Date Submitted",accessor:"datesubmitted"},{Header:"Status",accessor:"status"}];function F(){const{getTableProps:l,getTableBodyProps:u,headerGroups:x,prepareRow:o,page:c,state:v,setGlobalFilter:w,gotoPage:m,nextPage:h,previousPage:b,canPreviousPage:g,canNextPage:f,pageCount:a,setPageSize:y}=i.useTable({columns:H,data:q},i.useGlobalFilter,i.useSortBy,i.usePagination),{pageIndex:n}=v,j=S(),k=new URLSearchParams(j.search).get("search"),[p,N]=d.useState(k),L=r=>{N(r.target.value),window.history.pushState(null,"",`/dts/receive/dashboard?search=${r.target.value}`)};return d.useEffect(()=>{y(10)},[]),d.useEffect(()=>{w(p)},[p]),e.jsxs("div",{className:" bg-white relative flex flex-col h-full w-full overflow-hidden justify-between  mt-4",children:[e.jsxs("div",{className:" self-start relative  flex  px-3 py-1 border-border border  items-center w-[80%] sm:w-full bg-bgW rounded-md m-0  max-w-[400px] sm:max-w-full",children:[e.jsx("input",{value:p,onChange:L,placeholder:"Search...",className:"outline-none w-full bg-bgW text-xs pl-7 text-gray-900 py-1 ",type:"search"}),e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-7px-4",children:e.jsx("img",{src:A,alt:"Search",className:"h-5 w-5"})})]}),e.jsxs("div",{className:"overflow-hidden",children:[e.jsx("table",{...l(),className:"w-full text-xs font-light table-fixed",children:e.jsx("thead",{className:"text-[#0077FF] h-[20px]",children:x.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),className:"border-b border-[#00000013] text-sm",children:r.headers.map(s=>e.jsxs("th",{...s.getHeaderProps(s.getSortByToggleProps()),className:"pl-4 py-2 text-left truncate",children:[s.render("Header"),e.jsx("span",{children:s.isSorted?s.isSortedDesc?e.jsx("span",{children:"▼"}):e.jsx("span",{children:"▲"}):""})]}))}))})}),e.jsx("div",{className:"overflow-y-auto overflow-x-hidden  min-h-[300px] h-full pb-10 ",children:e.jsx("table",{className:"w-full text-xs font-light table-fixed",children:e.jsx("tbody",{...u(),className:"overflow-hidden w-full",children:c.map((r,s)=>(o(r),e.jsx("tr",{...r.getRowProps(),className:s%2==0?" cursor-pointer hover:bg-[#ffe34638] h-10 border-b border-[#00000013] text-sm font-medium bg-[#e8ebef]":" cursor-pointer hover:bg-[#ffe34638] border-b border-[#00000013] text-sm font-medium bg-[#d0d7df]",children:r.cells.map(t=>t.column.Header=="Track Number"?e.jsxs("td",{className:" h-10 pl-4 py-4 text-left text-[#163961] font-semibold truncate",children:[" ",e.jsxs("div",{className:" flex items-center gap-2",children:[e.jsx("img",{src:T,className:" h-4 object-contain",alt:""}),t.render("Cell")]})]},t.column.id):e.jsxs("td",{className:"h-10 pl-4 py-4 font-semibold text-[#163961] text-left truncate",children:[" ",t.render("Cell")]},t.column.id))})))})})})]}),e.jsxs("div",{className:" hidden sm:flex  h-[10%] k w-full items-center bottom-0 self-center mb-2  justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center",children:[e.jsx("button",{onClick:()=>b(),disabled:!g,className:`className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e.jsxs("p",{className:" text-xs",children:[" ",e.jsxs("b",{children:[n+1," "]})," / ",a]}),e.jsx("button",{onClick:()=>h(),disabled:!f,className:`flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,type:"button",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]}),e.jsxs("div",{className:" sm:hidden  min-h-[60px] items-center   w-full  bottom-0 self-center mb-2 flex justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center",children:[e.jsx("button",{onClick:()=>b(),disabled:!g,className:`className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),n>2&&a>5&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>m(0),className:" px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",children:"1"}),e.jsx("span",{className:"px-3 py-1",children:"..."})]}),Array.from({length:Math.min(5,a)},(r,s)=>{let t;return a<=5||n<3?t=s:n>a-4?t=a-5+s:t=n-2+s,e.jsx("button",{onClick:()=>m(t),className:`px-3 py-1 border  ${n===t?"h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg bg-orange text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none":"h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"}`,children:t+1},t)}),n<a-3&&a>5&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"px-3 py-1",children:"..."}),e.jsx("button",{onClick:()=>m(a-1),className:" px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",children:a})]}),e.jsx("button",{onClick:()=>h(),disabled:!f,className:`flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,type:"button",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]})]})}const M=R,W=[{Header:"Track Number",accessor:"tracknumber"},{Header:"Title",accessor:"title"},{Header:"Requestor",accessor:"requestor"},{Header:"Document Type",accessor:"doctype"},{Header:"Date Submitted",accessor:"datesubmitted"}];function D(){const{getTableProps:l,getTableBodyProps:u,headerGroups:x,prepareRow:o,page:c,state:v,setGlobalFilter:w,gotoPage:m,nextPage:h,previousPage:b,canPreviousPage:g,canNextPage:f,pageCount:a,setPageSize:y}=i.useTable({columns:W,data:M},i.useGlobalFilter,i.useSortBy,i.usePagination),{pageIndex:n}=v,j=S(),k=new URLSearchParams(j.search).get("search"),[p,N]=d.useState(k),L=r=>{N(r.target.value),window.history.pushState(null,"",`/dts/receive/dashboard?search=${r.target.value}`)};return d.useEffect(()=>{y(10)},[]),d.useEffect(()=>{w(p)},[p]),e.jsxs("div",{className:" bg-white relative flex flex-col h-full w-full overflow-hidden justify-between  mt-4",children:[e.jsxs("div",{className:" self-start relative flex  px-3 py-1 border-border border  items-center w-[80%] sm:w-full bg-bgW rounded-md m-0  max-w-[400px] sm:max-w-full",children:[e.jsx("input",{value:p,onChange:L,placeholder:"Search...",className:"outline-none w-full bg-bgW text-xs pl-7 text-gray-900 py-1 ",type:"search"}),e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-7px-4",children:e.jsx("img",{src:A,alt:"Search",className:"h-5 w-5"})})]}),e.jsxs("div",{className:"overflow-hidden",children:[e.jsx("table",{...l(),className:"w-full text-xs font-light table-fixed",children:e.jsx("thead",{className:"text-[#0077FF] h-[20px]",children:x.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),className:"border-b border-[#00000013] text-sm",children:r.headers.map(s=>e.jsxs("th",{...s.getHeaderProps(s.getSortByToggleProps()),className:"pl-4 py-2 text-left truncate",children:[s.render("Header"),e.jsx("span",{children:s.isSorted?s.isSortedDesc?e.jsx("span",{children:"▼"}):e.jsx("span",{children:"▲"}):""})]}))}))})}),e.jsx("div",{className:"overflow-y-auto overflow-x-hidden  min-h-[300px] h-full pb-10 ",children:e.jsx("table",{className:"w-full text-xs font-light table-fixed",children:e.jsx("tbody",{...u(),className:"overflow-hidden w-full",children:c.map((r,s)=>(o(r),e.jsx("tr",{...r.getRowProps(),className:s%2==0?" cursor-pointer hover:bg-[#ffe34638] h-10 border-b border-[#00000013] text-sm font-medium bg-[#e8ebef]":" cursor-pointer hover:bg-[#ffe34638] border-b border-[#00000013] text-sm font-medium bg-[#d0d7df]",children:r.cells.map(t=>t.column.Header=="Track Number"?e.jsxs("td",{className:" h-10 pl-4 py-4 text-left text-[#163961] font-semibold truncate",children:[" ",e.jsxs("div",{className:" flex items-center gap-2",children:[e.jsx("img",{src:T,className:" h-4 object-contain",alt:""}),t.render("Cell")]})]},t.column.id):e.jsxs("td",{className:"h-10 pl-4 py-4 font-semibold text-[#163961] text-left truncate",children:[" ",t.render("Cell")]},t.column.id))})))})})})]}),e.jsxs("div",{className:" hidden sm:flex  h-[10%] k w-full items-center bottom-0 self-center mb-2  justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center",children:[e.jsx("button",{onClick:()=>b(),disabled:!g,className:`className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e.jsxs("p",{className:" text-xs",children:[" ",e.jsxs("b",{children:[n+1," "]})," / ",a]}),e.jsx("button",{onClick:()=>h(),disabled:!f,className:`flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,type:"button",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]}),e.jsxs("div",{className:" sm:hidden  min-h-[60px] items-center   w-full  bottom-0 self-center mb-2 flex justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center",children:[e.jsx("button",{onClick:()=>b(),disabled:!g,className:`className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),n>2&&a>5&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>m(0),className:" px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",children:"1"}),e.jsx("span",{className:"px-3 py-1",children:"..."})]}),Array.from({length:Math.min(5,a)},(r,s)=>{let t;return a<=5||n<3?t=s:n>a-4?t=a-5+s:t=n-2+s,e.jsx("button",{onClick:()=>m(t),className:`px-3 py-1 border  ${n===t?"h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg bg-orange text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none":"h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"}`,children:t+1},t)}),n<a-3&&a>5&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"px-3 py-1",children:"..."}),e.jsx("button",{onClick:()=>m(a-1),className:" px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",children:a})]}),e.jsx("button",{onClick:()=>h(),disabled:!f,className:`flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange\r
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,type:"button",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]})]})}const O=()=>{const[l,u]=d.useState("Letter"),[x]=d.useState([{name:"Letter",notif:0,screen:e.jsx(F,{})},{name:"Accomplishment Reports",notif:0,screen:e.jsx(D,{})},{name:"Daily Time Record",notif:0,screen:e.jsx("div",{className:" bg-purple-600 w-full h-full  overflow-hidden"})},{name:"Liquidation Report",notif:0},{name:"Disbursement Voucher",notif:0}]);return e.jsx("div",{className:" relative flex-col h-full overflow-hidden",children:e.jsxs("div",{className:" relative flex h-full w-full flex-col",children:[e.jsx("nav",{className:" relative w-full h-[10%] min-h-[20px] max-h-[60px] flex justify-start px-20",children:x.map((o,c)=>e.jsxs("div",{className:l==o.name?"  mt-4  text-xs font-bold text-blue3 bg-white h-[40px] border-[0px] px-2 cursor-pointer flex border-border  items-center gap-2 col-span-1 border-r border-b border-t  ":" mt-4  text-xs font-bold text-slate-500 hover:text-blue3 bg-slate-100 h-[40px] border-[0px] px-2 cursor-pointer flex border-border  items-center gap-2 col-span-1 border-r border-b border-t ",onClick:()=>{u(o.name)},children:[e.jsx("img",{src:P,className:" h-4 object-contain",alt:""}),e.jsx("p",{children:o.name}),e.jsx("div",{className:" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]",children:e.jsx("p",{className:" text-[10px]",children:o.notif})})]},c))}),e.jsx("main",{className:" relative h-[90%] w-full px-20 flex justify-center items-center",children:x.map((o,c)=>e.jsx("div",{className:l==o.name?" flex h-full w-full":"hidden",children:o.screen},c))})]})})};export{O as default};
