import { ThemeProvider } from "@/components/theme-provider";


import profile from '../../../assets/images/profile.png'
import {LucideArrowLeftCircle, LucideArrowRightCircle, PencilLine } from "lucide-react";

import arrowRight from '../../../assets/icons/arroyRightHalfCircle.png'
import { useEffect, useState } from "react";

function Profile() {


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
        { "via": "Login via Web Browser", "location": "Kauswagan highway, 9000 Cagayan de Oro Misamis Oriental", "time": "50s ago" },
        { "via": "Login via Mobile App", "location": "Divisoria Market, 9000 Cagayan de Oro", "time": "1hr ago" },
        { "via": "Login via Web Browser", "location": "Limketkai Center, 9000 Cagayan de Oro", "time": "2hrs ago" },
        { "via": "Login via Mobile App", "location": "Centrio Mall, 9000 Cagayan de Oro", "time": "1 day ago" },
        { "via": "Login via Web Browser", "location": "SM City, 9000 Cagayan de Oro", "time": "2 days ago" },
        { "via": "Login via Mobile App", "location": "Xavier Estates, 9000 Cagayan de Oro", "time": "3 days ago" },
        { "via": "Login via Web Browser", "location": "Pueblo de Oro, 9000 Cagayan de Oro", "time": "4 days ago" },
        { "via": "Login via Mobile App", "location": "Macasandig, 9000 Cagayan de Oro", "time": "5 days ago" },
        { "via": "Login via Web Browser", "location": "Ayala Alabang, 1780 Muntinlupa City", "time": "6 days ago" },
        { "via": "Login via Mobile App", "location": "Greenhills, 1502 San Juan City", "time": "1 week ago" },
        { "via": "Login via Web Browser", "location": "Eastwood City, 1110 Quezon City", "time": "8 days ago" },
        { "via": "Login via Mobile App", "location": "Bonifacio Global City, 1634 Taguig City", "time": "9 days ago" },
        { "via": "Login via Web Browser", "location": "Makati Avenue, 1224 Makati City", "time": "10 days ago" },
        { "via": "Login via Mobile App", "location": "Ortigas Center, 1605 Pasig City", "time": "11 days ago" },
        { "via": "Login via Web Browser", "location": "Newport City, 1309 Pasay City", "time": "12 days ago" },
        { "via": "Login via Mobile App", "location": "East Rembo, 1216 Makati City", "time": "13 days ago" },
        { "via": "Login via Web Browser", "location": "Cubao, 1109 Quezon City", "time": "14 days ago" },
        { "via": "Login via Mobile App", "location": "Intramuros, 1002 Manila City", "time": "15 days ago" },
        { "via": "Login via Web Browser", "location": "Binondo, 1006 Manila City", "time": "16 days ago" },
        { "via": "Login via Mobile App", "location": "Malate, 1004 Manila City", "time": "17 days ago" },
        { "via": "Login via Web Browser", "location": "Eastwood City, 1110 Quezon City", "time": "8 days ago" },
        { "via": "Login via Mobile App", "location": "Bonifacio Global City, 1634 Taguig City", "time": "9 days ago" },
        { "via": "Login via Web Browser", "location": "Makati Avenue, 1224 Makati City", "time": "10 days ago" },
        { "via": "Login via Mobile App", "location": "Ortigas Center, 1605 Pasig City", "time": "11 days ago" },
        { "via": "Login via Web Browser", "location": "Newport City, 1309 Pasay City", "time": "12 days ago" },
        { "via": "Login via Mobile App", "location": "East Rembo, 1216 Makati City", "time": "13 days ago" },
        { "via": "Login via Web Browser", "location": "Cubao, 1109 Quezon City", "time": "14 days ago" },
        { "via": "Login via Mobile App", "location": "Intramuros, 1002 Manila City", "time": "15 days ago" },
        { "via": "Login via Web Browser", "location": "Binondo, 1006 Manila City", "time": "16 days ago" },
        { "via": "Login via Mobile App", "location": "Malate, 1004 Manila City", "time": "17 days ago" },
    ];
    

    // pagination

    // creating a new array with values based on the length, index value plus 1
    // e.g (length is 5 so newArray = [1, 2, 3 , 4, 5]) 
    const data = Array.from({ length: activityLogs.length }, (v:any, k:any) => k+1);

    // Change page
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (event:any, value:any) => {
      setCurrentPage(value);
    };
  
    const nextPage = () => {
      if (currentPage < Math.ceil(data.length / 6) - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    useEffect(() => {
        console.log("Current page is: ", currentPage)
      }, [currentPage]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" grid grid-cols-6 w-full h-full justify-center items-center bg-adminBG p-16">
            
            {/* left side */}
            <div className=" col-span-4 w-full h-full pr-32 ">

                <p className=" text-textW text-[24px] font-normal mb-3  ">Others/Profile</p>

                {/* left top */}
                <div className=" flex flex-row h-[200px] w-full justify-between items-center pl-5">

                    {/* admin name, email, profile pic */}
                    <div className=" flex flex-row items-center w-[55%] h-full">

                        {/* profile */}
                        <div className=" z-20 flex justify-center items-center w-[170px] h-[170px] rounded-full">
                            <img className=" object-cover aspect-square w-full min-w-[120px] border-[10px] border-white rounded-full"
                                src={profile}
                                alt="profile"
                        />
                        </div>

                        <div className=" z-10 flex flex-col w-[400px] h-[90px] lg:h-[80px] bg-white rounded-xl p-4 pl-10 translate-x-[-30px]">
                            <p className=" text-[#2B3674] text-[20px] font-semibold">Administrator</p>
                            <p className=" text-[#A3AED0] text-[16px] ">admin.dts@dict.gov.ph</p>
                        </div>
                    </div>

                    {/* admin password */}
                    <div className=" flex flex-col w-[440px] h-[90px] lg:h-[80px] bg-white rounded-xl p-4 pl-8 ">
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
            <div className=" col-span-2 flex flex-col justify-between w-full h-full px-2 bg-white rounded-xl">

                <div className=" flex flex-col w-full h-[90%] p-5 pb-12">

                    <p className=" text-[#1B2559] text-[20px] font-semibold mb-4 ">Activity Logs</p>

                    {/* activity logs */}
                    {activityLogs.slice(currentPage * 6, (currentPage + 1) * 6).map((e, index)=> {
                        return(
                            <div key = {index} className=" w-full min-h-[80px] flex flex-row">

                                <div className=" flex justify-center items-center w-[10%]">
                                    <img  className=" h-8 w-8 object-contain" src={arrowRight} alt="ArrowRight"/>
                                </div>

                                <div className=" flex flex-col w-[70%] pl-3 pr-10">
                                    <p className=" text-[#1B2559] text-[18px] font-semibold ">{e.via}</p>
                                    <p className=" text-[#18348A] text-[14px]">{e.location}</p>
                                </div>

                                <div className=" flex justify-start items-center w-[20%]">
                                    <p className=" text-[#A3AED0]">{e.time}</p>
                                </div>

                            </div>                           
                        )
                    })}

                </div>
                
                <div className="flex items-center h-[60px] w-full border-t-2 ">  
                    <div className=" flex flex-row w-full h-[40px] justify-center items-center ">
                        <LucideArrowLeftCircle className=" mr-2 " onClick={prevPage} />
                        {Array.from({ length: Math.ceil(data.length / 6) }, (v, k) => k).map((page) => (
                        <span key={page} onClick={(event) => handlePageClick(event, page)}>
                            {currentPage === page ? '●' : '○'}
                        </span>
                        ))}
                        <LucideArrowRightCircle className=" ml-2 " onClick={nextPage}/>
                    </div>
                </div>

                
            </div>

        </div>
    </ThemeProvider>
  )
}



export default Profile
