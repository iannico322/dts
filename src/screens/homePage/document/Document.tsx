import { BookCopyIcon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"


const Document = () => {
  const [Options]:any = useState(
    ["Letter","Accomplishment Reports","Daily Time Record","Liquidation Reports","Disbursement Voucher"])
  return (
    <div className=" bg-[#ffffff] min-h-screen w-full sm:pb-40 sm:pt-32  flex items-center justify-center gap-5  ">
     <div className=" animate__animated animate__fadeInDown min-w-[60%] h-full grid grid-cols-5 sm:grid-cols-2 gap-10 justify-center  px-10 items-center lg:grid-cols-3 md:grid-cols-2 sm:gap-5">
      {Options.map((e:any,id:number)=>(
        e=="Letter" || e=="Accomplishment Reports"  || e=="Daily Time Record" ? 
        <Link to="/dts/home/letter/"  className=" flex flex-col gap-2 hover:scale-[1.01] items-center transition-all duration-150 cursor-pointer">
          <div className={id%2==0?" sm:h-[100px] sm:w-[100px]  bg-blue h-[150px] w-[150px] flex flex-col items-center px-5 justify-around rounded-full":" sm:h-[100px] sm:w-[100px]  bg-yellow h-[150px] w-[150px] flex flex-col items-center px-5 justify-around rounded-full"} >
         <BookCopyIcon className=" sm:h-16 sm:w-16 h-24 w-24 text-bg"/>
         
       </div>
       <p  className=" sm:text-xs capitalize text-center font-semibold text-blue">{e}</p>
        </Link>
        
        :<Link to="/dts/home/letter2/"  className=" flex flex-col gap-2 hover:scale-[1.01] items-center transition-all duration-150 cursor-pointer">
        <div className={id%2==0?" sm:h-[100px] sm:w-[100px]  bg-blue h-[150px] w-[150px] flex flex-col items-center px-5 justify-around rounded-full":" sm:h-[100px] sm:w-[100px]  bg-yellow h-[150px] w-[150px] flex flex-col items-center px-5 justify-around rounded-full"} >
       <BookCopyIcon className=" sm:h-16 sm:w-16 h-24 w-24 text-bg"/>
       
     </div>
     <p  className=" sm:text-xs capitalize text-center font-semibold text-blue">{e}</p>
      </Link>

    
         
      ))}
     </div>
      
      
    </div>
  )
}

export default Document