import Document from './../../../assets/logo/document.png'
import Gpass from './../../../assets/logo/gpass.png'
import Inventory from './../../../assets/logo/inventory.png'
import Pmo from './../../../assets/logo/pmo.png'
import Elgu from './../../../assets/logo/elgu.png'
import EGov from './../../../assets/logo/egov.png'
import { Link } from 'react-router-dom'






const Dashboard = () => {
  return (
     <div className=" min-h-screen w-full flex items-center justify-center gap-4 flex-wrap">

       <div className=" animate__animated animate__fadeInUp w-[1200px] flex flex-wrap justify-center gap-8 ">
        <Link to="/dts/home/document/">
          <img alt="Document" src={Document}  className="  cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
        </Link>
        
      <img alt="Gpass" src={Gpass}  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="Inventory " src={Inventory }  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="Pmo" src={Pmo}  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="Elgu" src={Elgu}  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
      <img alt="eGov" src={EGov}  className=" cursor-pointer hover:scale-[1.05] transition-all duration-400 h-24 object-contain" />
       </div>

        
      
       
      
          
      </div> 
  )
}

export default Dashboard