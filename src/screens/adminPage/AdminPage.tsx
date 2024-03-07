import AdminHeader from "@/components/nav/AdminHeader"
import { Outlet } from "react-router-dom"


function AdminPage() {
  return (
    <div className=" w-full grid grid-cols-10 overflow-hidden h-screen bg-[#1e4e93]  box-border ">
        <AdminHeader className=" col-span-2 lg:col-span-3" />
        <div className=" h-screen w-full col-span-8 lg:col-span-7 bg-[#1e4e93]">
            <Outlet/>
        </div>


        
    </div>
  )
}

export default AdminPage