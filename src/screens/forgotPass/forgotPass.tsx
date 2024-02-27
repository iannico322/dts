import { ThemeProvider } from "@/components/theme-provider";

import bg from './../../../src/assets/images/DICT-bg.webp'
import banner from './../../../src/assets/images/DICT-Banner-Logo.webp'
import { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


function ForgotPasswordPage() {

  const navigate = useNavigate();

  const [User, setUser ] = useState(
    { email: ""}
  )

  useEffect(()=>{
    console.table(User)
  },[User])


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" flex w-screen h-screen ">

        {/* background image */}
        <img className= " absolute z-10 w-full h-full object-cover " src={bg} alt="DICT_bg" />

        <div className=" flex z-20 w-full h-full bg-[#163961] bg-opacity-80 justify-center items-center">

          {/* banner logo */}
          <div className=" fixed top-0 left-0 w-full h-[200px] p-10 animate__animated animate__slideInLeft">
            <img className= " " src={banner} alt="DICT_banner" />
          </div>

          {/* forgot password form */}
          <form className=" sm:w-[400px] w-[500px] min-h-[400px] flex flex-col animate__animated animate__slideInDown px-10">
            <p className=" text-textW text-[30px] font-semibold mb-10">Forgot Password</p>

            {/* email */}
            <label className=" text-textW mb-1"> Email Address  </label>
            <input className=" w-full h-[45px] text-textW bg-transparent border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 " type="email" name="email" onChange={(event)=>{setUser({ ...User, email: event.target.value })}} required/>

            {/* reset password button */}
            <input className=" text-textW bg-yellow hover:bg-[#de9708af] active:scale-95 text-[18px] w-full h-[45px] mt-6 rounded-full" type="submit" value="Reset my Password"  />

            <div className=" w-full h-[60px] flex flex-row justify-around items-center ">
              <div className=" w-[25%] border-b border-textW "></div>
              <div className=" w-[25%] border-b border-textW"></div>
            </div>

            <div onClick={()=>{navigate('/dts/login')}} className="  w-[160px] justify-between items-center flex flex-row">
              <ArrowLeft  className=" text-textW" />
              <p className=" text-textW text-[14px]">Go back to Sign In</p>
            </div>

          </form>
        </div>  

      </div>
    </ThemeProvider>
  )
}



export default ForgotPasswordPage
