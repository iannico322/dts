import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Copy from './../../../assets/icons/document-copy.png'
import MyTable from "./Table"


const TableTabs = () => {
  return ( 
 

   
    <Tabs defaultValue="Letter" className="   relative flex w-[90%] h-full   flex-col items-start ">
  <TabsList className=" h-10 "  >
    <TabsTrigger value="Letter" className=" flex gap-2 px-5"> <img src={Copy} className=" h-4 w-4" /> Letter
    
    <div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
        <p className=" text-[10px]"> 1</p>
    </div>
    </TabsTrigger>
    <TabsTrigger value="AR" className=" flex gap-2 px-5"><img src={Copy} className=" h-4 w-4" />Accomplishment Reports <div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
        <p className=" text-[10px]"> 1</p>
    </div></TabsTrigger>
    <TabsTrigger value="DTR" className=" flex gap-2 px-5"><img src={Copy} className=" h-4 w-4" />Daily Time Record<div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
        <p className=" text-[10px]"> 1</p>
    </div></TabsTrigger>
    <TabsTrigger value="LR" className=" flex gap-2 px-5"><img src={Copy} className=" h-4 w-4" />Liquidation Report<div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
        <p className=" text-[10px]"> 1</p>
    </div></TabsTrigger>
    <TabsTrigger value="DV" className=" flex gap-2 px-5"><img src={Copy} className=" h-4 w-4" />Disbursement Voucher<div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
        <p className=" text-[10px]"> 1</p>
    </div></TabsTrigger>
  </TabsList>
  <TabsContent value="Letter" className=" h-full w-full  ">
    <MyTable/>
  </TabsContent>
  <TabsContent value="AR" className=" h-full w-full bg-red-300 ">Change AR.</TabsContent>
  <TabsContent value="DTR" className=" h-full w-full bg-purple-300 ">Change DTR</TabsContent>
  <TabsContent value="LR" className=" h-full w-full bg-slate-300 ">Change LR</TabsContent>
  <TabsContent value="DV" className=" h-full w-full bg-green-300 ">Change DV</TabsContent>
  </Tabs>

  )
}

export default TableTabs