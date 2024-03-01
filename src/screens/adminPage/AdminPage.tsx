import AdminHeader from "@/components/nav/AdminHeader"
import { Outlet } from "react-router-dom"


function AdminPage() {
  return (
    <div className=" w-full flex h-screen bg-red-200">
        <AdminHeader/>
        <div className=" w-full h-screen">
            <Outlet/>
        </div>


        
    </div>
  )
}

export default AdminPage