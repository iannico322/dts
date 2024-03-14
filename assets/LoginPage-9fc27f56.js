import{r as l,j as e,d as x,e as m,u}from"./index-78bfe3cf.js";import{b as p}from"./DICT-bg-3a7c86c6.js";import{L as f}from"./DICT-Banner-Logo-19625be2.js";const g="/dts/assets/google-d65d89c2.png",b=m("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),n=l.forwardRef(({className:t,variant:s,...a},d)=>e.jsx("div",{ref:d,role:"alert",className:x(b({variant:s}),t),...a}));n.displayName="Alert";const o=l.forwardRef(({className:t,...s},a)=>e.jsx("h5",{ref:a,className:x("mb-1 font-medium leading-none tracking-tight",t),...s}));o.displayName="AlertTitle";const c=l.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:x("text-sm [&_p]:leading-relaxed",t),...s}));c.displayName="AlertDescription";function h({variant:t}){switch(t){case"error":return e.jsxs(n,{variant:"destructive",className:" flex flex-row gap-2 items-start animate-pulse",children:[e.jsx("span",{className:"material-symbols-outlined",children:"error"}),e.jsxs("div",{children:[e.jsx(o,{children:"Invalid Credentials"}),e.jsx(c,{children:"Your credentials are incorrect, please try again."})]})]});case"success":return e.jsxs(n,{className:" flex flex-row gap-2 items-start animate-pulse bg-transparent border-green-600 border",children:[e.jsx("span",{className:"material-symbols-outlined text-green-600",children:"task_alt"}),e.jsxs("div",{className:" text-green-600",children:[e.jsx(o,{children:"Successfully Login"}),e.jsx(c,{children:"Your credentials are correct, please wait for awhile."})]})]});case"warning":return e.jsxs(n,{className:" flex flex-row gap-2 items-start animate-pulse bg-transparent border-yellow border",children:[e.jsx("span",{className:"material-symbols-outlined text-yellow",children:"warning"}),e.jsxs("div",{className:" text-yellow",children:[e.jsx(o,{children:"Warning"}),e.jsx(c,{children:"Your credentials are correct, but needs to be activated."})]})]})}}function N(){const t=u(),[s,a]=l.useState({email:"",password:""}),[d,r]=l.useState("");return l.useEffect(()=>{console.table(s)},[s]),e.jsxs("div",{className:" grid grid-cols-6 bg-background h-screen w-screen  flex-row justify-center bg-blue2 overflow-hidden ",children:[e.jsx("div",{className:" flex md:hidden col-span-4 lg:col-span-3",children:e.jsx("img",{className:" object-cover  w-full animate__animated animate__slideInDown",src:p,alt:"DICT_bg"})}),e.jsx("div",{className:" relative sm:justify-center px-10 lg:col-span-3  col-span-2 md:col-span-6 flex flex-col justify-center items-center h-full w-full   animate__animated animate__slideInUp bg-blue2  ",children:e.jsxs("form",{className:" flex flex-col min-h-[200px]  w-full max-w-[450px] md:max-w-[550px]  mb-20 ",onSubmit:i=>{i.preventDefault(),s.email=="iannicocaulin@gmail.com"&&s.password=="nico322w"?(r("success"),setTimeout(()=>{t("/dts/home"),r("")},1e3)):s.email=="admin@gmail.com"&&s.password=="admin123"?(r("success"),setTimeout(()=>{t("/dts/admin"),r("")},1e3)):(r("error"),setTimeout(()=>{r("")},3e3))},children:[e.jsxs("div",{className:" flex flex-col gap-10 mb-10",children:[e.jsx("img",{className:"  w-[60%] object-contain self-center",src:f,alt:"DICT_bg"}),e.jsx("p",{className:" text-textW text-[25px] font-semibold ",children:"Log in to your account"})]}),e.jsx("label",{className:" text-textW mb-1",children:" Email Address "}),e.jsx("input",{className:" w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 ",type:"email",name:"email",onChange:i=>{a({...s,email:i.target.value})},required:!0}),e.jsxs("div",{className:" w-full flex flex-col",children:[e.jsx("label",{className:" text-textW mt-5 mb-1",children:" Password "}),e.jsx("input",{className:"w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 ",type:"password",name:"password",onChange:i=>{a({...s,password:i.target.value})},required:!0})]}),e.jsx("p",{className:" text-textW text-[13px] mt-[25px] cursor-pointer hover:underline ",onClick:()=>{t("/dts/forgot_password")},children:"Forgot your password?"}),e.jsx("input",{className:" text-textW bg-yellow hover:bg-yellow/80 transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full ",type:"submit",value:"Login"}),e.jsx("div",{className:" mt-5",children:e.jsx(h,{variant:d})}),e.jsxs("div",{className:" w-full py-5 flex flex-row justify-around items-center ",children:[e.jsx("div",{className:" w-[25%] border-b border-textW "}),e.jsx("p",{className:" text-textW sm:mx-[-50px] lg:mx-[-100px] mx-[-100px]",children:"or"}),e.jsx("div",{className:" w-[25%] border-b border-textW"})]}),e.jsx("div",{className:" flex w-full min-h-[10px] justify-center items-center",children:e.jsxs("button",{onClick:()=>{console.log("Sign in with Google")},className:" flex flex-row justify-center items-center gap-5 w-[225px] h-[40px] bg-white rounded-md hover:bg-[#ffffffdc]  cursor-pointer transition-all duration-150 ",children:[e.jsx("img",{className:" object-contain  w-[24px] h-[24px] ",src:g,alt:"google_account"}),e.jsx("p",{className:" text-[#7f7f7f] font-semibold",children:"Sign in with Google"})]})})]})})]})}export{N as default};
