import { ThemeProvider } from "@/components/theme-provider";

// import { useNavigate } from "react-router-dom";

import profile from '../../../assets/images/profile.png'
import { Dot, PencilLine } from "lucide-react";

import arrowRight from '../../../assets/icons/arroyRightHalfCircle.png'

function Profile() {

//   const navigate = useNavigate();

    const genInfo = [
        { "entry" : "Surname", "applicable" : "Not applicable" },
        { "entry" : "First Name", "applicable" : "Not applicable" },
        { "entry" : "Middle Name", "applicable" : "Not applicable" },
        { "entry" : "Position", "applicable" : "Not applicable" },
        { "entry" : "Position SG", "applicable" : "Not applicable" },
        { "entry" : "Position Increment", "applicable" : "Not applicable" },
        { "entry" : "Office", "applicable" : "Not applicable" },
        { "entry" : "City", "applicable" : "Not applicable" },
        { "entry" : "Province", "applicable" : "Not applicable" },
        { "entry" : "Region", "applicable" : "Not applicable" },
        { "entry" : "Citizenship", "applicable" : "Not applicable" },
        { "entry" : "Ethnicity", "applicable" : "Not applicable" },
        { "entry" : "Sex", "applicable" : "Not applicable" },
        { "entry" : "Civil Status", "applicable" : "Not applicable" },
        { "entry" : "Birthdate", "applicable" : "Not applicable" },
        { "entry" : "Religion", "applicable" : "Not applicable" },
        { "entry" : "Blood Type", "applicable" : "Not applicable" },
        { "entry" : "Cellphone No.", "applicable" : "Not applicable" },
    ]

    const activityLogs = [
        { "via": "Login via Web Browser", "location": "Kauswagan highway 9000 Cagayan de Oro Misamis Oriental", "time": "50s ago" },
        { "via": "Login via Web Browser", "location": "Kauswagan highway 9000 Cagayan de Oro Misamis Oriental", "time": "1hr ago" },
        { "via": "Login via Web Browser", "location": "Kauswagan highway 9000 Cagayan de Oro Misamis Oriental", "time": "50 mins ago" },
        { "via": "Login via Web Browser", "location": "Kauswagan highway 9000 Cagayan de Oro Misamis Oriental", "time": "6 days ago" },
        { "via": "Login via Web Browser", "location": "Kauswagan highway 9000 Cagayan de Oro Misamis Oriental", "time": "1 week ago" },
        { "via": "Login via Web Browser", "location": "Kauswagan highway 9000 Cagayan de Oro Misamis Oriental", "time": "1 week ago" },
    ]

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" grid grid-cols-6 w-screen h-screen justify-center items-center bg-adminBG p-16">
            
            {/* left side */}
            <div className=" col-span-4 w-full h-full pr-32 ">

                <p className=" text-textW text-[24px] font-normal mb-3 ">Others/Profile</p>

                {/* left top */}
                <div className=" flex flex-row h-[200px] w-full justify-between items-center pl-5">

                    {/* admin name, email, profile pic */}
                    <div className=" flex flex-row items-center w-[55%] h-full">

                        {/* profile */}
                        <div className=" z-20 flex justify-center items-center w-[170px] h-[170px] rounded-full">
                            <img className=" object-cover aspect-square w-full min-w-[90px] border-[10px] border-white rounded-full "
                                src={profile}
                                alt="profile"
                        />
                        </div>

                        <div className=" z-10 flex flex-col w-[400px] h-[50%] bg-white rounded-xl p-4 pl-10 translate-x-[-30px]">
                            <p className=" text-[#2B3674] text-[20px] font-semibold">Administrator</p>
                            <p className=" text-[#A3AED0] text-[16px] ">admin.dts@dict.gov.ph</p>
                        </div>
                    </div>

                    {/* admin password */}
                    <div className=" flex flex-col w-[440px] h-[50%] bg-white rounded-xl p-4 pl-8 ">
                        <div className=" flex flex-row w-full items-center">
                            <p className=" text-[#2B3674] text-[20px] font-semibold mr-1">Password</p>
                            <PencilLine className=" text-adminBG h-[18px] w-[18px]" />
                        </div>
                        <p className=" text-[#A3AED0] text-[16px] ">**********************</p>
                    </div>
                </div>


                {/* General Information */}
                <div className=" flex flex-col w-full min-h-[500px] mt-10 pl-10">

                    <p className=" text-textW text-[24px] font-normal ">General Information</p>

                    {/* container */}
                    <div className=" flex flex-wrap justify-between w-full h-full ">

                    {genInfo.map((e) => {
                        return (
                            <div className="flex flex-col justify-center h-[70px] w-[33%] pl-4 mt-3 bg-white rounded-xl">
                                <p className=" text-[#A3AED0] text-[14px] ">{e.entry}</p>
                                <p className=" text-[#2B3674] text-[13px]">{e.applicable}</p>
                            </div>
                        );
                    })}

                    </div>

                </div>
                
            </div>




            {/* right side */}
            <div className=" col-span-2 w-full h-full px-2">

                <div className=" flex flex-col bg-white w-full h-full rounded-xl p-5">

                    <p className=" text-[#1B2559] text-[20px] font-semibold mb-4 ">Activity Logs</p>

                    {activityLogs.map((e)=> {
                        return(
                            <div className=" w-full min-h-[80px] flex flex-row">

                                <div className=" flex justify-center items-center w-[10%]">
                                    <img  className=" h-8 w-8 object-contain" src={arrowRight} alt="ArrowRight"/>
                                </div>

                                <div className=" flex flex-col w-[70%] pl-3 pr-10">
                                    <p className=" text-[#1B2559] text-[18px] font-semibold ">{e.via}</p>
                                    <p className=" text-[#18348A] text-[14px]">{e.location}</p>
                                </div>

                                <div className=" flex justify-center items-center w-[20%]">
                                    <p className=" text-[#A3AED0]">{e.time}</p>
                                </div>

                            </div>                           
                        )
                    })}

                    <div className=" flex flex-row w-full h-[40px] justify-center items-center ">
                        <Dot className=" w-14 h-14"/>
                        <Dot className=" w-14 h-14 mx-[-30px]"/>
                        <Dot className=" w-14 h-14"/>
                    </div>

                </div>
            </div>

        </div>
    </ThemeProvider>
  )
}



export default Profile
