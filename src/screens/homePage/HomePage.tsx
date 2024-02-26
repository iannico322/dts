import Footer from "@/components/nav/Footer"
import Header from "@/components/nav/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { useState } from "react"
import { Outlet } from "react-router-dom"

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";


function HomePage() {
  const [navActive,setActive] = useState(false)
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
     <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
      <Header navActive={navActive} setActive={setActive}/>
      <div className=" absolute mt-40 md:mt-28 sm:mt-20 sm:items-center top-0 flex text-sm  right-0  items-center sm:mr-0  mr-20 animate__animated  animate__fadeInLeft ">
          <p className=" sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">Track Document</p>
          |
          <p className="sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">In Process</p>|
          <p className="sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">Accomplished</p>
        </div>
 

      {/* <div onClick={()=>{
      setActive(false)
      }} className=" min-h-screen w-full flex items-center justify-center gap-4 flex-wrap">
     
        <div className=" absolute mt-40 md:mt-28 sm:mt-20 sm:items-center top-0 flex text-sm  right-0  items-center sm:mr-0  mr-20 animate__animated  animate__fadeInLeft ">
          <p className=" sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">Track Document</p>
          |
          <p className="sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">In Process</p>|
          <p className="sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">Accomplished</p>
        </div>

       <div className=" animate__animated animate__fadeInUp w-[1200px] flex flex-wrap justify-center gap-8 ">

        <img alt="eGov" src="./assets/logo/document.png"  className="  cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="eGov" src="./assets/logo/gpass.png"  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="eGov" src="./assets/logo/inventory.png"  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="eGov" src="./assets/logo/pmo.png"  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="eGov" src="./assets/logo/elgu.png"  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="eGov" src="./assets/logo/egov.png"  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
       </div>

        
      
       
      
          
      </div> */}

      <Outlet/>

    <Footer/>

      
     
    </div>
    </ThemeProvider>
  )
}



export default HomePage
