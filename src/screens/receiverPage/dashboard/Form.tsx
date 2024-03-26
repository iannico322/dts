import { Button } from "@/components/ui/button"
import Message from "@/components/msg/successMessage"
import { useEffect, useState } from "react";
import { ComboboxDemo } from "@/components/input/Dropdown";
import InputTemp from "@/components/input/Input";
import axios from "./../../../plugin/axios";


function Form({setShow}:any) {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [data,setData]= useState({
      "id":"",
      "title": "",
      "type":"letter",
      "requestor": "",
      "doctype": "",
      "message":"",
      "status":"",
      "position":"",
      "remarks": ""
  })

    useEffect(()=>{

      let dat = JSON.parse(localStorage.getItem("data") ||"")
      dat =  dat.filter((item:any) => item.tracknumber  === localStorage.getItem("selected"))

      setData(dat[0])
      console.log(dat)

      

    },[])

    useEffect(()=>{

      console.log(data)

      

    },[data])

    

   

  const onChangeInput = (e: any) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const docTypeCallback = (childData:any) => {
    setData({
      ...data,
      doctype: childData,
    });
  }


    const handleSubmit = (e:any) =>{
        e.preventDefault()
        axios.put(`document/${data.id}`,{...data,status:"Accepted"},{
          headers: {
            Authorization: `Token c14e451b025ca2d62626252f33d229d66babc0a6 `,
          }, 
        }).then((e:any)=>{
          console.log(e.data)
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 3000)
          setData({
            "id":"",
            "title": "",
            "type":"letter",
            "requestor": "",
            "doctype": "",
            "message":"",
            "status":"",
            "position":"",
            "remarks": ""
        })
        }).catch((e:any)=>{
          console.log(e.data)
        })
  

        
    }
  

  
  return (
    <>
    <div className="absolute z-50 flex items-center  justify-center w-full h-full pointer-events-none" > 
                {showSuccessMessage && <Message/>}
        </div>
    
    <div className=" relative  rounded-[5px] min-h-full w-full sm:pb-20 sm:pt-0  flex items-start justify-center gap-5  mt-5 overflow-y-scroll pb-24  ">
        <div className=" relative animate__animated animate__fadeInUp w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">Received File Details</h1>
                    <p className=" text-xs font-medium sm:text-[8px]">Don’t forget to leave remarks of the before clicking Received</p>
                </div>
                
                <div onClick={()=>{
                  setShow(false)
                }}  className=" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Back
                </div>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    " onSubmit={handleSubmit}>
                <InputTemp label = "Name of the Requestor" placeholder="E.g Taylor Sheeesh" span="col-span-2 sm:col-span-1"
                
                value={data.requestor}
                name="requestor"
                onChange={onChangeInput}
                
                />
                <InputTemp label = "Designation / Position" placeholder="E.g Officer1" span="col-span-1 sm:col-span-1"
                value={data.position}
                name="position"
                onChange={onChangeInput}
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
                docTypeCallback={docTypeCallback}
            
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
                <InputTemp label = "Message from Sender" placeholder="E.g Signed" span="col-span-3 sm:col-span-1"
                value={data.message}
                name="message"
                onChange={onChangeInput}
                />

<InputTemp label = "Remarks" placeholder="E.g Signed" span="col-span-3 sm:col-span-1"
                value={data.remarks}
                name="remarks"
                onChange={onChangeInput}
                />
                
               
                
                
                <Button  variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-3 sm:col-span-1">
                    Submit
                </Button>
                
            </form>
            
        </div>
    </div>
    </>
    
  )
}

export default Form