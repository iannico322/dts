const Footer = () => {
  return (
    <footer className=" animate__animated animate__fadeIn fixed bottom-0 h-16 sm:h-14 flex flex-col items-start justify-center sm:items-center sm:pl-0 pl-10 bg-yellow w-full text-black ">
        <h1 className=" text-xs sm:text-[10px] text-center font-light">@2024 Department of Information and Techonology Communication</h1>
        <div className=" flex gap-5 font-semibold text-xs">
        <p className=" hover:underline hover:cursor-pointer">TERMS AND CONDITIONS</p>
        <p className=" hover:underline hover:cursor-pointer">PRIVAY AND POLICY</p>
        </div>
        

      </footer>
  )
}

export default Footer