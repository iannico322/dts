import bg from "../../assets/images/DICT-bg.webp";
import logo from "../../assets/images/DICT-Banner-Logo.webp";
import google from "../../assets/images/google.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alerts } from "./Alert";

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });
  const [alert,setAlert]= useState("")

  useEffect(() => {
    console.table(user);
  }, [user]);



  return (
   
      <div className=" grid grid-cols-6 bg-background h-screen w-screen  flex-row justify-center bg-blue2 overflow-hidden ">
        {/* image */}
        <div className=" flex md:hidden col-span-4 lg:col-span-3">
          <img
            className=" object-cover  w-full animate__animated animate__slideInDown"
            src={bg}
            alt="DICT_bg"
          />
        </div>

        {/* login form */}
        <div className=" relative sm:justify-center px-10 lg:col-span-3  col-span-2 md:col-span-6 flex flex-col justify-center items-center h-full w-full   animate__animated animate__slideInUp bg-blue2  ">
          
         
          <form className=" flex flex-col min-h-[200px]  w-full max-w-[450px] md:max-w-[550px]  mb-20 "
            onSubmit={(e: any) => {
              e.preventDefault();


              if (user.email =="iannicocaulin@gmail.com" && user.password =="nico322w") {
                setAlert("success")
                setTimeout(()=>{
                  navigate("/dts/home")
                  setAlert("")
                },1000)
              }else if(user.email =="admin@gmail.com" && user.password =="admin123"){
                setAlert("success")
                setTimeout(()=>{
                  navigate("/dts/admin")
                  setAlert("")
                },1000)
              }
              else{
                
                setAlert("error")
                setTimeout(()=>{
                  setAlert("")
                },3000)
              }
            }}
          >

            <div className=" flex flex-col gap-10 mb-10">

            
              <img
                className="  w-[60%] object-contain self-center"
                src={logo}
                alt="DICT_bg"
              />
             

              <p className=" text-textW text-[25px] font-semibold ">
                Log in to your account
              </p>
            </div>
            <label className=" text-textW mb-1"> Email Address </label>
            <input
              className=" w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
              type="email"
              name="email"
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
              required
            />
            <div className=" w-full flex flex-col">
            <label className=" text-textW mt-5 mb-1"> Password </label>
            <input
              className="w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
              type="password"
              name="password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              required
            />
            </div>
            

            <p
              className=" text-textW text-[13px] mt-[25px] cursor-pointer hover:underline "
              onClick={() => {
                navigate("/dts/forgot_password");
              }}
            >
              Forgot your password?
            </p>
          
            <input
              className=" text-textW bg-yellow hover:bg-yellow/80 transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full "
              type="submit"
              value="Login"
            />
            <div className=" mt-5">
            <Alerts
            variant={alert}
            
            />
            </div>
            

            <div className=" w-full py-5 flex flex-row justify-around items-center ">
              <div className=" w-[25%] border-b border-textW "></div>
              <p className=" text-textW sm:mx-[-50px] lg:mx-[-100px] mx-[-100px]">
                or
              </p>
              <div className=" w-[25%] border-b border-textW"></div>
            </div>

            <div className=" flex w-full min-h-[10px] justify-center items-center">
              <button
                onClick={() => {
                  console.log("Sign in with Google");
                }}
                className=" flex flex-row justify-center items-center gap-5 w-[225px] h-[40px] bg-white rounded-md hover:bg-[#ffffffdc]  cursor-pointer transition-all duration-150 "
              >
                <img
                  className=" object-contain  w-[24px] h-[24px] "
                  src={google}
                  alt="google_account"
                />
                <p className=" text-[#7f7f7f] font-semibold">
                  Sign in with Google
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
