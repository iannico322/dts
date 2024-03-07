import Dropdown from "./dropdown/Dropdown"
import Logo from './../../assets/logo/DTS_logo.png'

import DashboardIcon from './../../assets/icons/home.png'

import UserManagementIcon from './../../assets/icons/userManagement.png'
import UsersIcon from './../../assets/icons/users.png'
import DeUsersIcon from './../../assets/icons/deactivate.png'

import OfficeManagementIcon from './../../assets/icons/officeManagement.png'
import OfficeIcon from './../../assets/icons/offices.png'
import OfficeGo from './../../assets/icons/officeGo.png'

import OthersIcon from './../../assets/icons/others.png'
import ProfileIcon from './../../assets/icons/profileIcon.png'
import FeedbackIcon from './../../assets/icons/feedback.png'
import LogoutIcon from './../../assets/icons/logout.png'










const AdminHeader = ({className}:any) => {
  return (
    <div className={" animate__animated animate__slideInLeft relative  w-full px-4 py-6 h-screen bg-white " + className}>
        <div className=" w-full flex  justify-center">
          <img src={Logo} className=" self-center  h-14 object-contain mb-5" alt="dts_logo" />
        </div>
        

        <div className=" flex-col gap-10 ">
        <Dropdown
          head="Dashboard"
          headLogo={DashboardIcon}
          direct="/dts/admin/dashboard"
          lists={[]}
          />

        
          <Dropdown
          head="User Management"
          headLogo={UserManagementIcon}
          lists={[
            {
              li: 'Users',
              icon:UsersIcon,
              link: '/dts/admin/user',
            },
            {
              li: 'Deactivation',
              icon:DeUsersIcon,
              link: '/dts/admin/deactivate',
            },
          ]}
          />
          <Dropdown
          head="Office Management"
          headLogo={OfficeManagementIcon}
          lists={[
            {
              li: 'Offices',
              icon:OfficeIcon,
              link: '/dts/admin/user',
            },
            {
              li: 'Office Designation',
              icon:OfficeGo,
              link: '/dts/admin/dashboard',
            },
          ]}
          />
          <Dropdown
          head="Others"
          headLogo={OthersIcon}
          lists={[
            {
              li: 'Profile',
              icon:ProfileIcon,
              link: '/dts/admin/profile',
            },
            {
              li: 'Feedbacks',
              icon:FeedbackIcon,
              link: '/dts/admin/dashboard',
            },
          ]}
          />
           <Dropdown
          head="Logout"
          headLogo={LogoutIcon}
          direct="/dts/"
          lists={[]}
          />


        </div>
    </div>
  )
}

export default AdminHeader