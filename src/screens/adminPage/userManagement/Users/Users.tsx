
import searchIcon from '../../../../assets/icons/search.png'


import { useLocation} from 'react-router-dom';

import { useState } from 'react'
import MyTable from './Table';
import AddUser from './AddUser';
const Users = () => {
   
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const s = searchParams.get('search');

    const [search,setSearch] = useState<any>(s)


    

    


    const handleSearch = (e:any)=>{
         setSearch(e.target.value)

         window.history.pushState(null, "", `/dts/admin/user?search=${e.target.value}`)
         

    }

  
    

   const [showCreate,setShowCreate] = useState(false)


    
  return (
    <div className='  w-full h-[200vh] bg-blue3 flex flex-col  items-center '>
       
        <div className={showCreate?'hidden': ' h-[100vh] w-full flex  items-center justify-center'}>
            <div className=" w-[90%] h-[80%] sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5 ">
                <div className=' sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between'>
                    <div className='div1'>
                        <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight"> User Management </h1>
                        <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight "> Active Members</p>
                    </div>

                    <div className='  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  '>
                        <button className='
                            rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG  text-textG px-5 py-1 font-medium text-xs
                        ' onClick={()=>{
                            setShowCreate(!showCreate)
                        }} > + Add User
                        </button> 

                        <div className="relative px-3 py-1 border-border border  flex items-center w-[80%] sm:w-full bg-bgW rounded-md m-0  max-w-[200px] sm:max-w-full">
                        <input
                            value={search}
                            onChange={handleSearch}
                            placeholder="Search..."
                            className="outline-none w-full bg-bgW text-xs pl-7 text-gray-900 py-1 "
                            type="search"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-7px-4">
                            <img src={searchIcon} alt="Search" className="h-5 w-5" />
                        </div>
                        </div>

                                            
                </div>



                {/* TABLE */}
                </div>
                    <div className="flex-col max-h-full h-full overflow-hidden ">
                 
                    <MyTable search={search} handleSearch={handleSearch}/>

                    </div>
               


            </div>
        </div>

        <div className={!showCreate?'hidden': ' h-[100vh] w-full flex items-center overflow-x-hidden overflow-y-scroll  justify-center '}>
        <div className='  w-[90%] min-h-[20px] sm:min-h-[20px] sm:w-[90%]    overflow-hidden bg-white rounded-md drop-shadow-glow flex-col p-10 sm:p-5 gap-10 sm:gap-5'>
                        <AddUser setShowCreate={setShowCreate} />
        </div></div>
    </div>
  )
}

export default Users