
const ProfileLoader = () => {


    return (
        <div className=" grid grid-cols-6 w-full h-full justify-center items-center bg-adminBG p-16">
            
        {/* left side */}
        <div className=" col-span-4 w-full h-full pr-32 ">


            {/* left top */}
            <div className=" flex flex-row h-[200px] w-full justify-between items-center pl-10">

                {/* admin name, email, profile pic */}
                <div className=" flex flex-row items-center w-[440px] h-full ">


                    <div className="flex flex-col w-[400px] h-[90px] lg:h-[80px] bg-slate-400 rounded-xl p-4 pl-10 translate-x-[-30px] animate-pulse">

                    </div>
                </div>

                {/* admin password */}
                <div className=" flex flex-col w-[440px] h-[90px] lg:h-[80px] bg-slate-400 rounded-xl p-4 pl-8 animate-pulse">

                </div>
            </div>


            {/* General Information */}
            <div className=" flex flex-col w-full min-h-[500px] mt-10 pl-10 bg-slate-400 rounded-md animate-pulse">

                {/* container */}
                <div className=" flex flex-wrap justify-between w-full h-full  ">


                </div>

            </div>
            
        </div>




        {/* right side */}
        <div className=" col-span-2 flex flex-col justify-between w-full h-full px-2 bg-slate-400 rounded-xl animate-pulse">

            <div className=" flex flex-col w-full h-[90%] p-5 pb-12">

                <div className=" rounded-md w-[100px] h-[40px] mb-4 "></div>

            </div>
            
            <div className="flex items-center h-[60px] w-full ">  

            </div>

            
        </div>

    </div>
    )
  }
  
  export default ProfileLoader