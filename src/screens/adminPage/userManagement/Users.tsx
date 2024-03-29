
import searchIcon from '../../../assets/icons/search.png'
import userData from './userData.json'
import downIcon from '../../../assets/icons/down.png'

import { useLocation} from 'react-router-dom';

import { useState } from 'react'
const Users = () => {
   
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const s = searchParams.get('search');
  const type = searchParams.get('sortBy');

    const [search,setSearch] = useState<any>(s)
    const [sortBy, setSortBy] = useState<any>(type);

    

    


    const handleSearch = (e:any)=>{
         setSearch(e.target.value)

         window.history.pushState(null, "", `/dts/admin/user?search=${e.target.value}&sortBy=${sortBy}`)
         ;

    }

  
    const handleSortBy = (criteria: string) => {
        setSortBy(criteria);
        window.history.pushState(null, "",`/dts/admin/user?search=${search}&sortBy=${criteria}`)
        

       
    };

   


    
  return (
    <div className='  w-full h-full bg-blue3 flex items-center justify-center'>
        <div className=" w-[90%] h-[80%] bg-white rounded-md drop-shadow-glow flex flex-col p-10 ">
            <div className='flex flex-row items-start justify-between'>
                <div className='div1'>
                    <h1 className="text-black font-poppins text-l font-semibold leading-normal tracking-tight"> User Management </h1>
                    <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight mb-10"> Active Members</p>
                </div>

                <div className='div2 space-x-7 flex items-center'>
                    <button className='
                        rounded-[5px] border-2 border-textG bg-bgG  text-textG px-5 py-1 font-medium text-xs
                    '> + Add User
                    </button> 

                    <div className="relative px-3 py-1 pl-8 h-[18] w-[505] bg-bgW rounded-md ">
                      <input
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="outline-none bg-bgW text-xs ml-8"
                        type="search"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-7px-4">
                        <img src={searchIcon} alt="Search" className="h-5 w-5" />
                      </div>
                     </div>

                    <div className="relative px-7 py-1 bg-bgW rounded-md flex items-left text-sm">
                        <div className="flex items-center">
                            <span className="mr-2 text-sm text-textGray">Sort By:</span>
                              <div className="flex-grow ">
                                  <select
                                      value={sortBy}
                                      onChange={(e) => handleSortBy(e.target.value)}
                                      className='bg-bgW appearance-none border-none focus:outline-none w-full mr-10 font-bold'
                                  >
                                      <option value="newest">Newest</option>
                                      <option value="oldest">Oldest</option>
                                  </select>
                              </div>
                        </div>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <img src={downIcon} alt="Dropdown" className="h-5 w-5" />
                          </div>
                     </div>                     
            </div>



            {/* TABLE */}
            </div>
                <div className="flex-col max-h-full h-full overflow-hidden ">
                 <table  className=" w-full text-left text-xs font-light">
                    <thead className="text-violet1 ">
                    <tr className='  border-b  border-[#00000013] text-sm'>
                        <th scope="col" className=" pl-4 py-2">User Name</th>
                        <th scope="col" className=" py-2">Designation</th>
                        <th scope="col" className=" py-2">Phone Number</th>
                        <th scope="col" className=" py-2">Email</th>
                        <th scope="col" className=" py-2 text-center">Region</th>
                        <th scope="col" className=" text-center">Status</th>
                    </tr>
                    </thead>
                    <tbody className='overflow-scroll-y'>
                    {userData.filter((word)=> word.username.toLowerCase().startsWith(search) ||
        word.username.toLowerCase().includes(search)).slice(0, 10).map((user, index) => (
                        <tr key={index} className="  hover:bg-blue3/10  border-b  border-[#00000013] text-sm font-medium">
                        <td className=" pl-4 py-4">{user.username}</td>
                        <td className="  py-4">{user.designation}</td>
                        <td className="  py-4">{user['phone number']}</td>
                        <td className="  py-4">{user.Email}</td>
                        <td className="  py-4 text-center">{user.Region}</td>
                        <td className="  py-4 text-center flex gap-3 justify-center">
                            <button className='rounded-[4px]  border-[1px] text-xs border-textY bg-bgY text-textY font-md px-3 py-[4px] hover:bg-opacity-50'> 
                                UPDATE
                            </button>
                            <button className=' rounded-[4px] border-[1px] hover:bg-opacity-50 text-xs border-textR bg-bgR text-textR font-md px-3 py-[4px]'> 
                               DEACTIVATE
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            
            {/* PAGINATION */}
                    <div className="  flex justify-center gap-4 mt-10 bg-blueTable-100 text-center">
                                        
                        <button
                            disabled
                            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-orange active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                        </button>
                        <div className="flex items-center gap-2">
                            <button
                                className="h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg bg-orange text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span>1</span>
                            </button>
                            <button
                                className="h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span>2</span>
                            </button>
                            <button
                                className="h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span>3</span>
                            </button>
                        
                                </div>
                                <button
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    aria-hidden="true" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                    </svg>
                                </button>
                    </div>


        </div>
    </div>
  )
}

export default Users