import { ThemeProvider } from "@/components/theme-provider";
import { CheckCircle, ChevronDown, FileWarning, TrashIcon } from "lucide-react";
import { useState } from "react";


function Feedback() {

    const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

    const handleCheckboxChange = (index: number) => {
        // Create a copy of the checkedItems array
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index]; // Toggle the checked status

        setCheckedItems(updatedCheckedItems);
    };


    const data = [
        {"Ticket_Title" : "Hello", "Category": "Concern", "Email": "@gmail", "Date": "January 23, 2021", "Status": "Done"},
        {"Ticket_Title" : "Hello", "Category": "Positive", "Email": "@gmail", "Date": "January 12, 1999", "Status": "Pending"},
        {"Ticket_Title" : "Hello", "Category": "Okay", "Email": "@gmail", "Date": "May 29, 2019", "Status": "Done"},
    ]

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" flex flex-col w-full h-full bg-adminBG p-20 ">

            <p className=" text-textW text-[24px] font-normal mb-10  ">Others/Tickets</p>

            <div className=" flex flex-col bg-white w-full min-h-[600px] rounded-xl ">

                {/* Tickets, Done, and Delete Box */}
                <div className=" flex flex-row w-full h-[90px] p-8 ">

                    <p className=" text-[#2B3674] text-[28px] font-bold mr-40 ">Tickets</p>

                    <div className=" px-5 py-4 flex flex-row justify-center items-center gap-3 bg-[#A6E7D8] border-[2px] border-[#00B087] rounded-sm hover:opacity-75 cursor-pointer mr-5 ">
                        <CheckCircle className=" text-[#008767]"/>
                        <p className=" text-[#008767]">Done</p>
                    </div>

                    <div className=" px-5 py-4 flex flex-row justify-center items-center gap-3 bg-[#FFE4E4] border-[2px] border-[#C91B1B] rounded-sm hover:opacity-75 cursor-pointer">
                        <TrashIcon className=" text-[#C91B1B] "/>
                        <p className=" text-[#C91B1B] font-semibold ">Delete</p>
                    </div>

                </div>

                {/* table */}
                <div className=" flex w-full px-8  ">

                    <table className="table-auto w-full ">

                        <thead className=" border-b-2 ">
                            <tr className=" ">
                                <th>
                                    <div className=" flex flex-row items-center gap-2">
                                    <p className=" text-[#436BBE] text-[14px] font-semibold ">Ticket Title</p>
                                    <ChevronDown className=" text-[#A3AED0] " />
                                    </div>
                                </th>
                                <th>
                                    <div className=" flex flex-row items-center gap-2">
                                    <p className=" text-[#436BBE] text-[14px] font-semibold ">Category</p>
                                    <ChevronDown className=" text-[#A3AED0] " />
                                    </div>
                                </th>
                                <th>
                                    <div className=" flex flex-row items-center gap-2">
                                    <p className=" text-[#436BBE] text-[14px] font-semibold ">Email</p>
                                    <ChevronDown className=" text-[#A3AED0] " />
                                    </div>
                                </th>
                                <th>
                                    <div className=" flex flex-row items-center gap-2">
                                    <p className=" text-[#436BBE] text-[14px] font-semibold ">Date</p>
                                    <ChevronDown className=" text-[#A3AED0] " />
                                    </div>
                                </th>
                                <th>
                                    <div className=" flex flex-row items-center gap-2">
                                    <p className=" text-[#436BBE] text-[14px] font-semibold ">Status</p>
                                    <ChevronDown className=" text-[#A3AED0] " />
                                    </div>
                                </th>                                                                              
                            </tr>
                            
                        </thead>

                        <tbody >

                            {data.map((e, index)=>(         
                                <tr className=" " key={index}>
                                    <td>
                                        <div className=" flex flex-row gap-2 mt-4">
                                            <input type="checkbox" checked={checkedItems[index] || false}
              onChange={() => handleCheckboxChange(index)}/>
                                            <p className=" text-[#2B3674] font-semibold">{e.Ticket_Title}</p>
                                        </div>
                                    </td>
                                    <td className=" text-[#2B3674] font-semibold">{e.Category}</td>
                                    <td className=" text-[#2B3674] font-semibold">{e.Email}</td>
                                    <td className=" text-[#2B3674] font-semibold">{e.Date}</td>
                                    <td className=" text-[#2B3674] font-semibold w-[110px] h-[50px]">
                                        {e.Status === "Done" 
                                        ? 
                                        <div className=" bg-[#A6E7D8] py-1 flex flex-row justify-center items-center gap-3 border-[2px] border-[#008767] rounded-[3px] hover:opacity-95 cursor-not-allowed">
                                            <CheckCircle className=" text-[#008767] w-5 h-5" />
                                            <p className=" text-[#008767] text-[13px]">Done</p>
                                        </div> 
                                        : 
                                        <div className=" bg-[#FFFBF3] py-1 flex flex-row justify-center items-center gap-3 border-[2px] border-[#EBA715] rounded-[3px] hover:opacity-95 cursor-not-allowed">
                                        <FileWarning className=" text-[#EBA715] w-5 h-5" />
                                        <p className=" text-[#EBA715] text-[13px] ">Pending</p>
                                        </div>
                                        }
                                    </td>
                                </tr>    
                            ))}



                        </tbody>

                    </table>


                </div>

            </div>

        </div>
    </ThemeProvider>
  )
}



export default Feedback
