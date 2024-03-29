import bg from "../../assets/images/DICT-bg.webp";
import logo from "../../assets/images/DICT-Banner-Logo.webp";
import google from "../../assets/images/google.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [User, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    console.table(User);
  }, [User]);

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
        <div className=" sm:justify-center px-10 lg:col-span-3  col-span-2 md:col-span-6 flex flex-col justify-center items-center h-full   animate__animated animate__slideInUp bg-blue2  ">
          
         
          <form className=" flex flex-col min-h-[200px]  w-full max-w-[450px]  "
            onSubmit={(e: any) => {
              e.preventDefault(navigate("/dts/home"));
            }}
          >
            <img
              className=" mb-10 w-[60%] object-contain self-center"
              src={logo}
              alt="DICT_bg"
            />

            <p className=" text-textW text-[25px] font-semibold mb-10">
              Log in to your account
            </p>

            <label className=" text-textW mb-1"> Email Address </label>
            <input
              className=" w-full h-[45px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
              type="email"
              name="email"
              onChange={(event) => {
                setUser({ ...User, email: event.target.value });
              }}
              required
            />

            <label className=" text-textW mt-5 mb-1"> Password </label>
            <input
              className="w-full h-[45px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
              type="password"
              name="password"
              onChange={(event) => {
                setUser({ ...User, password: event.target.value });
              }}
              required
            />

            <p
              className=" text-textW text-[12px] mt-[25px] cursor-pointer hover:underline "
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

            <div className=" w-full py-2 flex flex-row justify-around items-center ">
              <div className=" w-[25%] border-b border-textW "></div>
              <p className=" text-textW sm:mx-[-50px] lg:mx-[-100px] mx-[-100px]">
                or
              </p>
              <div className=" w-[25%] border-b border-textW"></div>
            </div>

            <div className=" flex w-full h-[70px] justify-center items-center">
              <div
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
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
