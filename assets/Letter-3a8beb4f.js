import{r as n,j as e,L as c,B as m}from"./index-bb08caf8.js";import{I as l,C as a,M as b}from"./Input-f1017a89.js";import"./x-ab6ba616.js";function x(){const[o,s]=n.useState(!1),r=t=>{t.preventDefault(),s(!0),setTimeout(()=>s(!1),3e3)};return e.jsx("div",{className:" rounded-[5px] min-h-screen w-full sm:pb-40 sm:pt-32  flex items-start justify-center gap-5 relative mt-28  ",children:e.jsxs("div",{className:" w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5",children:[e.jsxs("div",{className:" w-full flex items-center justify-between py-4 ",children:[e.jsxs("div",{className:" flex flex-col leading-2",children:[e.jsx("h1",{className:" font-semibold text-base sm:text-xs",children:"File Document Request"}),e.jsx("p",{className:" text-xs font-medium sm:text-[8px]",children:"Please make sure to check all items before submitting"})]}),e.jsx(c,{to:"/dts/home/document",className:" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ",children:"Cancel"})]}),e.jsxs("form",{className:" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    ",onSubmit:r,children:[e.jsx(l,{label:"Name of the Requestor",placeholder:"E.g Taylor Sheeesh",span:"col-span-2 sm:col-span-1"}),e.jsx(l,{label:"Designation / Position",placeholder:"E.g Officer1",span:"col-span-1 sm:col-span-1"}),e.jsx(l,{label:"Title of the Document",placeholder:"E.g Letter",span:"col-span-2 sm:col-span-1"}),e.jsx(a,{label:"Types of Document",span:" col-span-1 sm:col-span-1 ",placeholder:"Types of Documents",frameworks:[{label:"AIP"},{label:"Advisory"},{label:"Leave"},{label:"Promise"},{label:"Note"}],pl:!0}),e.jsx(l,{label:"Remarks",placeholder:"E.g Signed",span:"col-span-3 sm:col-span-1"}),e.jsx(a,{span:" col-span-3 sm:col-span-1 ",label:"Receiver",placeholder:"Select name...",frameworks:[{label:"Ian"},{label:"Mark"},{label:"Angel"},{label:"Rose Mar"},{label:"Arnold"},{label:"Mark"},{label:"Angel"},{label:"Rose Mar"},{label:"Arnold"},{label:"Mark"},{label:"Angel"},{label:"Rose Mar"},{label:"Arnold"},{label:"Mark"},{label:"Angel"},{label:"Rose Mar"},{label:"Arnold"},{label:"Mark"},{label:"Angel"},{label:"Rose Mar"},{label:"Arnold"},{label:"Mark"},{label:"Angel"},{label:"Rose Mar"},{label:"Arnold"}]}),e.jsx(m,{variant:"outline",className:" bg-[#038500] rounded-[5px] text-white col-span-3 sm:col-span-1",children:"Submit"})]}),e.jsx("div",{className:"absolute bottom-0 left-0 pointer-events-none",children:o&&e.jsx(b,{})})]})})}export{x as default};
