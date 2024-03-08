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

    const tickets = [
        {"Ticket_Title" : "Hello", "Category": "Concern", "Email": "user1@gmail.com", "Date": "January 23, 2021", "Status": "Done"},
        {"Ticket_Title" : "Marketplace", "Category": "Concern", "Email": "user2@gmail.com", "Date": "February 24, 2021", "Status": "Pending"},
        {"Ticket_Title" : "Venus PRO", "Category": "Positive", "Email": "user3@gmail.com", "Date": "January 12, 1999", "Status": "Pending"},
        {"Ticket_Title" : "Uranus Kit", "Category": "Okay", "Email": "user4@gmail.com", "Date": "May 29, 2019", "Status": "Pending"},
        {"Ticket_Title" : "Mars Rover", "Category": "Urgent", "Email": "user5@gmail.com", "Date": "March 14, 2022", "Status": "Done"},
        {"Ticket_Title" : "Jupiter Flyby", "Category": "Inquiry", "Email": "user6@gmail.com", "Date": "April 18, 2023", "Status": "Pending"},
        {"Ticket_Title" : "Saturn Rings", "Category": "Positive", "Email": "user7@gmail.com", "Date": "June 21, 2021", "Status": "Done"},
        {"Ticket_Title" : "Neptune Deep Dive", "Category": "Okay", "Email": "user8@gmail.com", "Date": "July 30, 2020", "Status": "Pending"},
        {"Ticket_Title" : "Pluto Discovery", "Category": "Inquiry", "Email": "user9@gmail.com", "Date": "August 24, 2024", "Status": "Done"},
        {"Ticket_Title" : "Mercury Mission", "Category": "Urgent", "Email": "user10@gmail.com", "Date": "September 30, 2023", "Status": "Pending"},
        {"Ticket_Title" : "Earth Day", "Category": "Positive", "Email": "user11@gmail.com", "Date": "April 22, 2024", "Status": "Done"},
        {"Ticket_Title" : "Galaxy Exploration", "Category": "Inquiry", "Email": "user12@gmail.com", "Date": "October 1, 2024", "Status": "Pending"},
        {"Ticket_Title" : "Black Hole Study", "Category": "Urgent", "Email": "user13@gmail.com", "Date": "November 2, 2024", "Status": "Done"},
        {"Ticket_Title" : "Comet Chase", "Category": "Positive", "Email": "user14@gmail.com", "Date": "December 3, 2024", "Status": "Pending"},
        {"Ticket_Title" : "Asteroid Mining", "Category": "Inquiry", "Email": "user15@gmail.com", "Date": "January 4, 2025", "Status": "Done"},
        {"Ticket_Title" : "Solar Flare Forecast", "Category": "Urgent", "Email": "user16@gmail.com", "Date": "February 5, 2025", "Status": "Pending"},
        {"Ticket_Title" : "Moon Landing Anniversary", "Category": "Positive", "Email": "user17@gmail.com", "Date": "July 20, 2025", "Status": "Done"},
        {"Ticket_Title" : "Space Debris Tracking", "Category": "Inquiry", "Email": "user18@gmail.com", "Date": "March 6, 2025", "Status": "Pending"},
        {"Ticket_Title" : "Alien Life Search", "Category": "Urgent", "Email": "user19@gmail.com", "Date": "April 7, 2025", "Status": "Done"},
        {"Ticket_Title" : "Interstellar Travel", "Category": "Positive", "Email": "user20@gmail.com", "Date": "May 8, 2025", "Status": "Pending"},
    ]

    // pagination

    // creating a new array with values based on the length, index value plus 1
    // e.g (length is 5 so newArray = [1, 2, 3 , 4, 5]) 
    const data = Array.from({ length: tickets.length }, ( k:any) => k+1);

    // Change page
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (_event:any, value:any) => {

      setCurrentPage(value);
    };
  
    const nextPage = () => {
      if (currentPage < Math.ceil(data.length / 8) - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
    

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" flex flex-col w-full h-full bg-adminBG p-20 ">

            <p className=" text-textW text-[24px] font-normal mb-10  ">Others/Tickets</p>

            <div className=" flex flex-col bg-white w-full h-[600px] pb-4 rounded-xl ">

                
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


                <div className=" flex flex-col w-full h-full justify-between ">
                    
                    {/* table */}
                    <div className=" flex w-full px-8 ">

                        <table className="table-auto w-full ">

                            <thead className=" border-b-2 ">
                                <tr>
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

                            <tbody>

                                {tickets.slice(currentPage * 8, (currentPage + 1) * 8).map((e, index)=>(         
                                    <tr  key={index}>
                                        <td>
                                            <div className=" flex flex-row gap-2 mt-4">
                                                <input 
                                                    type="checkbox" checked={checkedItems[index] || false}
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


                {/* PAGINATION */}
                    <div className="  flex justify-center gap-4 mt-5 bg-blueTable-100 text-center ">

                        {/* prev button */}
                        <button
                            onClick={prevPage}
                            disabled = {currentPage === 0}
                            className= "flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-orange active:bg-orange disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                        </button>

                        {/* mapping the page numbers */}
                        <div className="flex items-center gap-2">
                        {Array.from({ length: Math.ceil(data.length / 8) }, (_v, k) => k).map((page) => (
                            <button
                                key={page}
                                onClick={(event) => handlePageClick(event, page)}
                                className={`h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg  text-center align-middle font-sans text-xs font-medium uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${currentPage === page ? 'active-page-class bg-orange text-white' : ''}`}
                                type="button">
                                <span>{page + 1}</span>
                            </button>
                        ))}
                        
                        </div>
                                
                        {/* next button */}
                        <button
                            onClick={nextPage}
                            disabled={currentPage === Math.ceil(data.length / 8) - 1}
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                            disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    </ThemeProvider>
  )
}



export default Feedback
