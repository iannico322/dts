import Footer from "@/components/nav/RFooter";
import RHeader from "@/components/nav/RHeader";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function ReceiverPage() {
  const [navActive, setActive] = useState(false);
  useEffect(()=>{
    localStorage.setItem('data',"[]")
    localStorage.setItem('selected',"")
  },[])
  return (

      <div className=" relative w-full flex flex-col h-screen  overflow-hidden bg-[#ffffff]  box-border">
        <RHeader navActive={navActive} setActive={setActive} />
        

     
          <Outlet />
  

        <Footer />
      </div>
    
  );
}

export default ReceiverPage;
