import bg from "../../../assets/images/DICT-bg.webp";
import logo from "../../../assets/images/DICT-Banner-Logo.webp";
import google from "../../../assets/images/google.png";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertBox } from "../../../components/alert/Alert";

import axios from "../../../plugin/axios";

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });
  const [alert,setAlert]= useState("")


  return (
   
      <div className=" grid grid-cols-6 bg-background h-screen w-screen  flex-row justify-center bg-blue2 overflow-hidden ">
        <Link to="/dts/developers" className="  z-50 absolute text-white bottom-0  p-10 bg-blue2 px-3 py-2 ">
          <p className="  text-xs">Developed by: <span className=" font-semibold hover:underline">DTS Team</span> </p>
        </Link>
       
       
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
            onSubmit={ async (e: any) => {
              e.preventDefault();

              setAlert("s")

              try {

                await axios.post("token/login/",user).then((response:any)=>{
                  console.log(response.data)

                   axios.get("users/me/",{
                    headers: {
                      Authorization: `Token ${response.data.auth_token}`,
                    }, 
                  }).then((response:any)=>{
                    console.log(response.data)

                    setAlert("success")
                    setTimeout(()=>{
                          navigate("/dts/home")
                          setAlert("")
                    },1000)
                  })

                }).catch(()=>{
                  setAlert("error")
                  setTimeout(()=>{
                    setAlert("")
                  },3000)
                })
                
              } catch (error) {
                setAlert("error")
                setTimeout(()=>{
                  setAlert("")
                },3000)
              }


              // if (user.email =="iannicocaulin@gmail.com" && user.password =="nico322w") {
              //   setAlert("success")
              //   setTimeout(()=>{
              //     navigate("/dts/home")
              //     setAlert("")
              //   },1000)
              // }else if(user.email =="admin@gmail.com" && user.password =="admin123"){
              //   setAlert("success")
              //   setTimeout(()=>{
              //     navigate("/dts/admin")
              //     setAlert("")
              //   },1000)
              // }
              // else{
                
              //   setAlert("error")
              //   setTimeout(()=>{
              //     setAlert("")
              //   },3000)
              // }
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
          
            {
              !alert?<button
              className=" text-textW bg-yellow hover:bg-yellow/80 transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 "
              type="submit"
              
            > Login </button>:
            <button
            className=" pointer-events-none text-textW bg-yellow hover:bg-yellow/80 transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 "
            type="submit"
            
          > Loading <span className="material-symbols-outlined animate-spin font-thin">
          autorenew
          </span> </button>
            }
            <div className=" mt-5">
            <AlertBox
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
                className=" flex flex-row justify-center items-center gap-5 w-[225px] h-[40px] bg-blue rounded-full hover:bg-blue/40  cursor-pointer transition-all duration-150 "
              >
                
                <p className=" text-white font-semibold">
                  Register
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
