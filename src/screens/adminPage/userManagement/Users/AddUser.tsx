import InputTemp from "@/components/input/Input"

const AddUser = ({setShowCreate}:any) => {
  return (
    <div className=" w-full h-full flex flex-col gap-10">
        <div className=' sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between'>
                    <div className='div1'>
                        <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight"> Register User </h1>
                        <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight "> Create New User</p>
                    </div>

                    <div className='  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  '>
                        <button className='
                            rounded-[5px] truncate border-2 border-red-600 hover:bg-bgG/10 transition-all duration-200 bg-red-600/20  text-red-600 px-5 py-1 font-medium text-xs
                        ' onClick={()=>{
                            setShowCreate(false)
                        }} >Cancel
                        </button>                 
                    </div>
              


          
                </div>
   
                <form onSubmit={(e:any)=>{
                    e.preventDefault()
                    console.log(" Submitted")
                }} className=" grid grid-cols-3 gap-5 sm:gap-2 items-end">
                <InputTemp
                label="First Name"
                placeholder="e.g Antonio"
                span=" col-span-1 sm:col-span-3"
                
                />
                <InputTemp
                label="Last Name"
                placeholder="e.g Luna"
                span=" col-span-1 sm:col-span-3"
                />

                <InputTemp
                label="Middle Name"
                placeholder="e.g Narciso"
                span=" col-span-1 sm:col-span-3"
                />

                <InputTemp
                label="Name Extension (e.g III, Jr)"
                placeholder="III"
                span=" col-span-1 sm:col-span-3 md:col-span-3"
                />
                <InputTemp
                type="email"
                label="Email"
                placeholder="antonioluna@gmail.com"
                span=" col-span-1 sm:col-span-3 md:col-span-3"
                
                />
                <InputTemp
                type="number"
                label="Contact #"
                placeholder="09534442222"
                span=" col-span-1 sm:col-span-3 md:col-span-3"
                />

                <button type="submit" className=' mt-5 col-span-3 w-full
                            rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG  text-textG px-5 py-1 font-medium text-md
                        ' > Register User
                        </button> 

                </form>
                




       
    </div>
  )
}

export default AddUser