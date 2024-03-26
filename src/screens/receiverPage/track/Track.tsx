
import { useState } from 'react';


import FileIcon from './../../../assets/icons/document-copy.png'

import InputTemp from '@/components/input/Input';
import { Button } from '@/components/ui/button';
import axios from './../../../plugin/axios';





const Track = () => {

  const[data,setData]= useState<any>()




  const [inputData,setInputData] = useState("")
 

  const [activePage,setActivePage]=useState("Letter")
  const [navList ] = useState<any>(
   [
    {
    name:"Letter",notif:0
    },
    {
    name:"Accomplishment Reports",notif:0
    },
    {
      name:"Daily Time Record",notif:0,screen:<div className=' bg-purple-600 w-full h-full  overflow-hidden'></div>
    },
    {
      name:"Liquidation Report",notif:0
    },
    {
      name:"Disbursement Voucher",notif:0
    }
  ]
  );

  return (
    <div className=' relative flex-col h-full overflow-hidden'>
      <div className=' relative flex h-full w-full flex-col'>
        <nav className=' relative w-full h-[10%] min-h-[20px] max-h-[60px] flex justify-start px-20'>

     

          
          {navList.map((e:any,key:any)=>(
            <div className={activePage==e.name?"  mt-4  text-xs font-bold text-blue3 bg-white h-[40px] border-[0px] px-2 cursor-pointer flex border-border  items-center gap-2 col-span-1 border-r border-b border-t  ": " mt-4  text-xs font-bold text-slate-500 hover:text-blue3 bg-slate-100 h-[40px] border-[0px] px-2 cursor-pointer flex border-border  items-center gap-2 col-span-1 border-r border-b border-t "} key={key}
            onClick={()=>{
              setActivePage(e.name)
            }}
            >
              <img src={FileIcon} className=' h-4 object-contain' alt="" />
              <p>{e.name}</p>
              <div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
                    <p className=" text-[10px]">{e.notif}</p>
              </div>
            </div>
          ))}

             


       
    

        </nav>

        <main className=' relative  h-[90%] w-full px-20 flex flex-col justify-start items-center mt-4'>
          
          <div className=' flex  w-full '>
            <form onSubmit={(e:any)=>{
              e.preventDefault()
              axios.get(`document/tracknumber/${inputData}`,{
                headers: {
                  Authorization: `Token c14e451b025ca2d62626252f33d229d66babc0a6 `,
                }, 
              }).then((e:any)=>{
                setData(e.data);
              }).catch((e:any)=>{
                console.log(e.data)
              })
            }} className='  w-[60%] flex items-end gap-5'>
            <div className=' flex-col w-[60%]'>
              <p className=' text-lg font-semibold text-blue3'>Enter Tracking #</p>
            <InputTemp 
          placeholder="E.g LTR20242024"
          value={inputData} onChange={(e:any)=>{
            setInputData(e.target.value)
          }}/>
            </div>
                
          <Button className=' w-[20%]'>Search</Button>


            </form>
            
          </div>
          

          <div className=' w-full h-full flex justify-start'>

           {data?

<div className=' p-3 grid grid-cols-5 gap-4 w-[80%] my-5 rounded-lg h-[90%] border border-border'>
<p className=' col-span-5 text-3xl font-medium text-blue'>Tracking Number : <span className=' font-bold'> {data.tracknumber }</span> </p>

<p className=' col-span-5 text-lg font-medium text-blue'>Type: <span className=' font-bold'> {data.doctype}</span> </p>

<p className=' col-span-5 text-lg font-medium text-blue'>Title : <span className=' font-bold'> {data.title}</span> </p>

<p className=' col-span-5 text-lg font-medium text-blue'>From : <span className=' font-bold'> {data.requestor}</span> </p>

<p className=' col-span-5 text-lg font-medium text-blue'>Message: <span className=' font-bold'> {data.message}</span> </p>
<p className=' col-span-5 text-lg font-medium text-blue'>Remarks : <span className=' font-bold'> {data.remarks}</span> </p>
<p className=' col-span-5 text-lg font-medium text-blue'>Status: <span className=' font-bold'> {data.status}</span> </p>

</div>
: ""
           
          
          
          }




          </div>
            
        </main>

        

      </div>

      
  
    </div>
         
      
  )
}

export default Track