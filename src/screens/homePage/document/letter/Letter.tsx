import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import Message from "@/components/msg/successMessage"
import { useState } from "react";
import { ComboboxDemo } from "@/components/input/Dropdown";
import InputTemp from "@/components/input/Input";
import axios from "./../../../../plugin/axios";


function Letter() {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [data,setData]= useState({
      "title": "",
      "type":"letter",
      "requestor": "",
      "doctype": "Absent",
      "message":"",
  })

  const onChangeInput = (e: any) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        axios.post('document/all/',data,{
          headers: {
            Authorization: `Token 8eb01bb88da50b2e599b76c7397f3c57980dddeb `,
          }, 
        }).then((e:any)=>{
          console.log(e.data)
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 3000)
          setData({
            "title": "",
            "type":"",
            "requestor": "",
            "doctype": "",
            "message":"",
        })
        }).catch((e:any)=>{
          console.log(e.data)
        })
  

        
    }
  

  
  return (
    <div className="  rounded-[5px] min-h-screen w-full sm:pb-20 sm:pt-0  flex items-start justify-center gap-5 relative mt-28  ">
        <div className=" animate__animated animate__fadeInUp w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">File Document Request</h1>
                    <p className=" text-xs font-medium sm:text-[8px]">Please make sure to check all items before submitting</p>
                </div>
                
                <Link to="/dts/home/document"  className=" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Cancel
                </Link>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    " onSubmit={handleSubmit}>
                <InputTemp label = "Name of the Requestor" placeholder="E.g Taylor Sheeesh" span="col-span-2 sm:col-span-1"
                
                value={data.requestor}
                name="requestor"
                onChange={onChangeInput}
                
                />
                <InputTemp label = "Designation / Position" placeholder="E.g Officer1" span="col-span-1 sm:col-span-1"
                
                />

                <InputTemp label = "Title of the Document" placeholder="E.g Letter" span="col-span-2 sm:col-span-1"
                
                value={data.title}
                name="title"
                onChange={onChangeInput}
                
                />
                 <ComboboxDemo
                 label="Types of Document"
                span=" col-span-1 sm:col-span-1 "
                placeholder="Types of Documents"
                
                name="doctype"
                setData={()=>{
                  setData({...data,doctype:"ssdsd"})
                }}
            
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
                value={data.message}
                name="message"
                onChange={onChangeInput}
                />
                <ComboboxDemo
                span=" col-span-3 sm:col-span-1 "
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

export default Letter