
import { MenuIcon, XIcon } from "lucide-react";

import { Link} from "react-router-dom";
import Logo from './../../assets/images/DICT-Banner-Logo.webp'
import ProfileIcon from './../../assets/icons/profile.png'
import NotifIcon from './../../assets/icons/notif.png'
import OutIcon from './../../assets/icons/out.png'



const Header = ({ navActive, setActive }:any) => {
  
    
  return (
    <header className="  animate__animated animate__slideInDown  z-20 bg-blue fixed flex justify-between items-center w-full max-w-[1980px] py-5 border-b-[0px] border-accent  ">
        <Link className=" ml-10 sm:ml-3" to="/react-vite-supreme" >
          <img src={Logo} className=" h-15 sm:h-10 object-contain " alt="Vite logo" />
        </Link>
        <nav className=" lg:hidden mr-10 text-accent-foreground flex gap-20 uppercase items-center">



          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white" to="" >
            <img className=" h-4 object-contain" alt="ProfileIcon" src={ProfileIcon}/>
          Profile
          </Link>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white" to="" >
          <img className=" h-4 object-contain" alt="NotifIcon" src={NotifIcon}/>
          Notifications
          </Link>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white" to="" >
          <img className=" h-4 object-contain" alt="OutIcon" src={OutIcon}/>
            Log Out
          </Link>
        
        
        </nav>
        <div className=" right-0 top-0 absolute mr-10 sm:mr-4 lg:flex flex-col hidden items-end  justify-end mt-5 ">

      
            {
            !navActive?
            <MenuIcon onClick={()=>{
              setActive(!navActive)
            }} className=" mt-2  sm:h-5 sm:w-5  h-8 w-8 text-white hidden lg:flex cursor-pointer"/>
            :
            <XIcon onClick={()=>{
              setActive(!navActive)
            }} className="mt-2  sm:h-5 sm:w-5   h-8 w-8 text-white hidden lg:flex cursor-pointer"/>
          }
    
          
          
          <nav className={navActive?"  relative  z-10 lg:flex flex-col hidden text-accent-foreground   uppercase items-start self-end mt-12 bg-blue py-5 w-[300px]  backdrop-blur-md   rounded-md ":"hidden"}>



          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow" to="" >
            <img className=" h-4 object-contain" alt="ProfileIcon" src={ProfileIcon}/>
          Profile
          </Link>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow" to="" >
          <img className=" h-4 object-contain" alt="NotifIcon" src={NotifIcon}/>
          Notifications
          </Link>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow" to="" >
          <img className=" h-4 object-contain" alt="OutIcon" src={OutIcon}/>
            Log Out
          </Link>
        
        
        </nav>
        </div>
        
        
       
      </header>
  )
}

export default Header