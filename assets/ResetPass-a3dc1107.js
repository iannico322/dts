import{c as g,b,r as a,j as e,B as u,L as _}from"./index-98f0bb41.js";import{A as j,a as v}from"./axios-38ee32d4.js";import{L as N}from"./DICT-Banner-Logo-19625be2.js";const k=g("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]),L=()=>{const d=b(),[r,o]=a.useState({load:!1,type:"",title:"",message:""}),[s,i]=a.useState({...d,new_password:"",re_new_password:""}),[n,w]=a.useState(!1),[l,x]=a.useState(!1),m=t=>!(t.length<8||!/\d/.test(t));a.useEffect(()=>{w(m(s.new_password))},[s.new_password]),a.useEffect(()=>{s.new_password==s.re_new_password&&s.new_password!=""&&s.re_new_password!=""?x(!0):x(!1)},[s.new_password,s.re_new_password]);const[f,y]=a.useState(!1);async function h(){if(n&&l){o({load:!0,type:"",title:"",message:""});try{await v.post("users/reset_password_confirm/",s).then(t=>{console.log(t.status),o({load:!0,type:"success",title:"Congratulations, Password has updated!",message:"Hooray! Your account password has been successfully updated."}),setTimeout(()=>{o({load:!1,type:"",title:"",message:""}),i({...d,new_password:"",re_new_password:""}),y(!0)},3e3)})}catch{o({load:!0,type:"error",title:"Password Rest Unsuccessful",message:"Oops! There might be a problem."}),setTimeout(()=>{o({load:!1,type:"",title:"",message:""})},6e3)}}}const c=t=>{i({...s,[t.target.name]:t.target.value})},p=t=>{t.key==="Enter"&&console.log("Enter key pressed")};return e.jsxs("div",{className:" h-screen  w-full overflow-hidden flex items-center justify-center bg-blue3 flex-col gap-4 ",children:[e.jsxs("form",{onSubmit:t=>{t.preventDefault()},className:"  flex flex-col gap-4 mt-8 w-[80%] max-w-[500px] sm:w-[90%]",children:[e.jsx("img",{src:N,className:" h-10 object-contain mb-6",alt:""}),e.jsx("h1",{className:" text-xl font-semibold text-white   flex self-start text-accent-foreground",children:"Reset Password"}),e.jsxs("div",{className:" w-full",children:[e.jsx("input",{className:" w-full h-[45px] text-textW bg-transparent border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 ",type:"password",placeholder:"New password",value:s.new_password,name:"new_password",onChange:c,onKeyDown:p}),e.jsx("p",{className:n?" text-xs ml-2 mt-1 text-green-500":" text-xs ml-2 mt-1 text-red-500",children:n?"Valid password":"It must be at least 8 characters and include numbers."})]}),e.jsxs("div",{className:" w-full",children:[e.jsx("input",{className:" w-full h-[45px] text-textW bg-transparent border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 ",type:"password",placeholder:"Confirm New Password",value:s.re_new_password,name:"re_new_password",onChange:c,onKeyDown:p}),e.jsx("p",{className:l?" text-xs ml-2 mt-1 text-green-500":" text-xs ml-2 mt-1 text-red-500",children:l?"Password match":"Password not match"})]}),e.jsxs(u,{variant:"secondary",className:r.load?"text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] w-full h-[45px] mt-6  text-base pointer-events-none rounded-sm gap-5 ":" gap-5 text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] w-full h-[45px] mt-6 rounded-sm text-base",onClick:h,children:["Update Password",e.jsx(k,{className:r.load?" h-4 w-4 animate-spin":"hidden"})]}),e.jsx("div",{className:r.load?"flex":"hidden",children:e.jsx(j,{variant:r.type,title:r.title,description:r.message})})]}),e.jsx(u,{className:f?"flex":"hidden",children:e.jsx(_,{id:"step1",to:"/dts/login",children:"Sign In"})})]})};export{L as default};
