import Dropdown from "./dropdown/Dropdown"
import Logo from './../../assets/logo/DTS_logo.png'

const AdminHeader = () => {
  return (
    <div className=" w-[400px] px-10 py-6 h-screen bg-white">
        <img src={Logo} className=" h-16 object-contain" alt="dts_logo" />


        <Dropdown
         head="User Management"
         lists={[
           {
             li: 'Users',
             link: '/dts/admin/user',
           },
           {
             li: 'Deactivation',
             link: '/dts/admin/dashboard',
           },
         ]}
        
        />

    </div>
  )
}

export default AdminHeader