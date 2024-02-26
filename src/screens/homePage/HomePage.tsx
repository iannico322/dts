import { ThemeProvider } from "@/components/theme-provider"
import { MenuIcon } from "lucide-react";

import { Link} from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";


function HomePage() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
     <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
      
      <nav className="  animate__animated animate__slideInDown  z-20 bg-blue fixed flex justify-between items-center w-full max-w-[1980px] py-5 border-b-[0px] border-accent  ">
        <Link className=" ml-10 sm:ml-3" to="/react-vite-supreme" >
          <img src="./assets/images/DICT-Banner-Logo.webp" className=" h-15 sm:h-10 object-contain " alt="Vite logo" />
        </Link>
        <nav className=" lg:hidden mr-10 text-accent-foreground flex gap-20 uppercase items-center">



          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white" to="" >
            <img className=" h-4 object-contain" src="./assets/icons/profile.png"/>
          Profile
          </Link>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white" to="" >
          <img className=" h-4 object-contain" src="./assets/icons/notif.png"/>
          Notifications
          </Link>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white" to="" >
          <img className=" h-4 object-contain" src="./assets/icons/out.png"/>
            Log Out
          </Link>
        
        
        </nav>
        <MenuIcon className=" sm:mr-4 sm:h-5 sm:w-5 mr-10 h-8 w-8 text-white hidden lg:flex"/>
       
      </nav>
 

      <div className=" min-h-screen w-full flex items-center justify-center gap-4 flex-wrap">
     
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

        
      
       
      
          
      </div>

      <footer className=" animate__animated animate__fadeIn fixed bottom-0 h-20 sm:h-16 flex flex-col items-start justify-center sm:items-center sm:pl-0 pl-10 bg-yellow w-full text-black ">
        <h1 className=" text-xs sm:text-[10px] text-center font-light">@2024 Department of Information and Techonology Communication</h1>
        <div className=" flex gap-5 font-semibold text-xs">
        <p className=" hover:underline hover:cursor-pointer">TERMS AND CONDITIONS</p>
        <p className=" hover:underline hover:cursor-pointer">PRIVAY AND POLICY</p>
        </div>
        

      </footer>

      
     
    </div>
    </ThemeProvider>
  )
}



export default HomePage
