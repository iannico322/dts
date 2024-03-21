import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" animate__animated animate__fadeIn fixed bottom-0 h-12 sm:h-14 flex flex-row items-center justify-between sm:items-center md:flex-col md:items-center md:justify-center px-10 sm:px-0 sm:pl-0  bg-blue w-full text-white ">
        
        <div>
        <h1 className=" text-xs sm:text-[10px] text-center font-light">@2024 Department of Information and Techonology Communication | Misamis Oriental</h1>
        {/* <div className=" flex gap-5 font-semibold text-xs">
        <p className=" hover:underline hover:cursor-pointer">TERMS AND CONDITIONS</p>
        <p className=" hover:underline hover:cursor-pointer">PRIVACY AND POLICY</p>
        </div> */}

        </div>
        

        <Link to="/dts/developers">
          <p className="  text-xs">Developed by: <span className=" font-semibold hover:underline">Team Waya-waya</span> </p>
        </Link>
        

      </footer>
  )
}

export default Footer