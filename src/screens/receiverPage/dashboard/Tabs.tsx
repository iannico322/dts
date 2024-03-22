import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Copy from './../../../assets/icons/document-copy.png'
import MyTable from "./Table"


const TableTabs = () => {
  return (
    <Tabs defaultValue="Letter" className="w-[90%] h-full   flex-col ">
  <TabsList className=" h-10" >
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
  <TabsContent value="Letter" className=" h-full w-full flex justify-center">
    <MyTable/>
  </TabsContent>
  <TabsContent value="AR">Change AR.</TabsContent>
  <TabsContent value="DTR">Change DTR</TabsContent>
  <TabsContent value="LR">Change LR</TabsContent>
  <TabsContent value="DV">Change DV</TabsContent>
</Tabs>

  )
}

export default TableTabs