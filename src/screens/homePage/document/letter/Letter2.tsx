import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import Message from "@/components/msg/successMessage"
import { useState } from "react";
import { ComboboxDemo } from "@/components/input/Dropdown";
import InputTemp from "@/components/input/Input";
import { SendIcon, Trash2Icon } from "lucide-react";


function Letter2() {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000)
    }
  

  
  return (
    <div className=" rounded-[5px] min-h-screen w-full sm:pb-40 sm:pt-32  flex items-center justify-center gap-5 relative">
        <div className=" w-[80%] my-32 sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">File Document Requesss</h1>
                    <p className=" text-xs font-medium sm:text-[8px]">Please make sure to check all items before submitting</p>
                </div>
                
                <Link to="/dts/home/document"  className=" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Cancel
                </Link>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    " onSubmit={handleSubmit}>
                <InputTemp label = "Name of the Requestor" placeholder="E.g Taylor, Shift" span="col-span-2 sm:col-span-1"
                />
                <InputTemp label = "Designation / Position" placeholder="E.g Officer1" span="col-span-1 sm:col-span-1"
                />

                <InputTemp label = "Title of the Document" placeholder="E.g Letter" span="col-span-2 sm:col-span-1"
                />
                 <ComboboxDemo
                 label="Types of Document"
                span=" col-span-1 sm:col-span-1 "
                placeholder="Types of Documents"
                frameworks={[
                    {
                      label: "AIP",
                    },
                    {
                      label: "Advisory",
                    },
                    {
                      label: "Leave",
                    },
                    {
                      label: "Promise",
                    },
                    {
                      label: "Note",
                    },
                  ]}

                pl
                />
                <InputTemp label = "Remarks" placeholder="E.g Signed" span="col-span-3 sm:col-span-1"
                />

<div className=" flex items-center gap-4 flex-row col-span-3 sm:col-span-1">
                <ComboboxDemo
                span=" "
                label="Receiver"
                placeholder="Select name..."
                frameworks={[
                    {
                      label: "Ian",
                    },
                    {
                      label: "Mark",
                    },
                    {
                      label: "Angel",
                    },
                    {
                      label: "Rose Mar",
                    },
                    {
                      label: "Arnold",
                    },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },
                  ]}
                />

                <SendIcon className=" cursor-pointer text-blue mt-5 hover:scale-[1.1] transition-all"/>


                </div>
                 

                <div className=" flex items-center gap-4 flex-row col-span-3 sm:col-span-1">
                <ComboboxDemo
                span=" "
                label="Receiver"
                placeholder="Select name..."
                frameworks={[
                    {
                      label: "Ian",
                    },
                    {
                      label: "Mark",
                    },
                    {
                      label: "Angel",
                    },
                    {
                      label: "Rose Mar",
                    },
                    {
                      label: "Arnold",
                    },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },{
                        label: "Mark",
                      },
                      {
                        label: "Angel",
                      },
                      {
                        label: "Rose Mar",
                      },
                      {
                        label: "Arnold",
                      },
                  ]}
                />

                <Trash2Icon className=" cursor-pointer text-red-600 mt-5 hover:scale-[1.1] transition-all"/>


                </div>
                
               
                
                
                <Button  variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-3 sm:col-span-1">
                    Submit
                </Button>
                
            </form>
            <div className="absolute bottom-0 left-0 pointer-events-none" > 
                {showSuccessMessage && <Message/>}
            </div>
        </div>
    </div>
  )
}

export default Letter2