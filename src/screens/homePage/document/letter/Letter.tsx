import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


function Letter() {
  return (
    <div className=" rounded-[5px] min-h-screen w-full sm:pb-40 sm:pt-32  flex items-center justify-center gap-5">
        <div className=" w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">File Document Request</h1>
                    <p className=" text-xs font-medium sm:text-[8px]">Please make sure to check all items before submitting</p>
                </div>
                
                <Link to="/dts/home/document"  className=" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Cancel
                </Link>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    ">

                <div className=" w-full flex flex-col gap-1 col-span-2 sm:col-span-1">
                    <p className=" text-xs">Name of the Requestor</p>
                    <input type="text" className=" border border-blue/50 px-3 py-2 text-xs rounded-[5px]" placeholder="E.g Taylor, Shift" />
                </div>
                <div className=" w-full flex flex-col gap-1 col-span-1">
                    <p className=" text-xs">Designation / Positiont</p>
                    <input type="text" className=" border border-blue/50 px-3 py-2 text-xs rounded-[5px]" placeholder="" />
                </div>
                <div className=" w-full flex flex-col gap-1 col-span-2 sm:col-span-1">
                    <p className=" text-xs">Title of the Document</p>
                    <input type="text" className=" border border-blue/50 px-3 py-2 text-xs rounded-[5px]" placeholder="E.g Letter" />
                </div>
                <div className=" w-full flex flex-col gap-1 col-span-1">
                    <p className=" text-xs">Type of Document</p>
                    <input type="text" className=" border border-blue/50 px-3 py-2 text-xs rounded-[5px]" placeholder="" />
                </div>
                <div className=" w-full flex flex-col gap-1 col-span-3 sm:col-span-1">
                    <p className=" text-xs">Name of the Requestor</p>
                    <input type="text" className=" border border-blue/50 px-3 py-2 text-xs rounded-[5px]" placeholder="E.g Taylor, Shift" />
                </div>
                <div className=" w-full flex flex-col gap-1 col-span-3 sm:col-span-1">
                    <p className=" text-xs">Name of the Requestor</p>
                    <input type="text" className=" border border-blue/50 px-3 py-2 text-xs rounded-[5px]" placeholder="E.g Taylor, Shift" />
                </div>

                <Button variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-3 sm:col-span-1">
                    Submit
                </Button>

            </form>
        </div>
    </div>
  )
}

export default Letter