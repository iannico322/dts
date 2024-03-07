
import userData from './userData.json'
const Users = () => {
  return (
    <div className='  w-full h-full bg-blue2 flex items-center justify-center'>
        <div className=" w-[90%] h-[90%] bg-white rounded-md drop-shadow-glow flex flex-col p-10 ">
        <div className='flex flex-row items-start justify-between'>
                <div className='div1'>
                    <h1 className="text-black font-poppins text-l font-semibold leading-normal tracking-tight"> User Management </h1>
                    <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight mb-10"> Active Members</p>
                  </div>
                  <div className='div2 space-x-7 flex items-center'>
                    <button className='
                        rounded-s border-2 border-textG bg-bgG  text-textG px-5 py-1 text-xs
                    '> + Add User
                    </button> 
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 w-18 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative">
                        <select
                            className="px-3 py-1 w-18 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected hidden>Sort...</option>
                            <option value="name">Name</option>
                            <option value="designation">Designation</option>
                            <option value="phoneNumber">Phone Number</option>
                            <option value="email">Email</option>
                            <option value="region">Region</option>
                            <option value="status">Status</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                                className="w-4 h-4 fill-current text-gray-500"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.806 6.485a.75.75 0 0 1 1.06 1.06l-3.536 3.536a.75.75 0 0 1-1.06 0L6.134 7.545a.75.75 0 0 1 1.06-1.06L10 9.88l2.806-2.806z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
                <div className="flex-col overflow-x-auto inline-block overflow-hidden">
                 <table className="min-w-full text-left text-xs font-light">
                    <thead className="text-violet1">
                    <tr>
                        <th scope="col" className="px-6 py-4">User Name</th>
                        <th scope="col" className="px-6 py-4">Designation</th>
                        <th scope="col" className="px-6 py-4">Phone Number</th>
                        <th scope="col" className="px-20 py-4">Email</th>
                        <th scope="col" className="px-20 py-4 text-center">Region</th>
                        <th scope="col" className="px-6 text-center">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userData.map((user, index) => (
                        <tr key={index} className="border-b bg-white-100">
                        <td className="whitespace-nowrap px-6 py-7">{user.username}</td>
                        <td className="whitespace-nowrap px-6 py-7">{user.designation}</td>
                        <td className="whitespace-nowrap px-6 py-7">{user['phone number']}</td>
                        <td className="whitespace-nowrap px-6 py-7">{user.Email}</td>
                        <td className="whitespace-nowrap px-6 py-7 text-center">{user.Region}</td>
                        <td className="whitespace-nowrap px-6 py-7 text-center">
                            <button className='rounded-md border-2 border-textY bg-bgY text-textY font-bold px-5 py-2 mr-2'> 
                                UPDATE
                            </button>
                            <button className='rounded-md border-2 border-textR bg-bgR text-textR font-bold px-5 py-2'> 
                               DEACTIVATE
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            
            {/* PAGINATION */}
                    <div className="flex justify-center gap-4 mt-10 bg-blueTable-100 text-center">
                                        
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