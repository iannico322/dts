import Profile from "./../../../assets/icons/totalUsers.png"
import ActiveUsers from "./../../../assets/icons/activeUsers.png"
import Office from "./../../../assets/icons/officesPc.png"
import Check from "./../../../assets/icons/check2.png"
import Calendar from "./../../../assets/icons/calendar.png"


import ChartUI from "./ChartUI";


function Dashboard() {
  const sampleData = {
    "TotalUsers":5423,
    "ActiveUsers":1893,
    "Offices":18,
    "TotalTrans":3000,
    "chartData":[
      {
        name: "Number Documents",
        data: [1000, 1200, 1500, 1300, 300, 0, 600, 800, 1400, 1600, 1800],
      },
      {
          name: "Avg Documents",
          data: [400, 200, 100, 300, 400, 600, 800, 300, 400, 600, 800],
        },
    ]

  }
 
  return (
    <div className="  w-full h-full bg-[#1e4e93] flex  items-center justify-center flex-col">
      <div className=" w-[90%] h-[80%]  rounded-md flex flex-col gap-10 ">
        <h1 className=" col-span-6 text-2xl row-span-1  text-white font-medium">
          Hello Admin 👋🏼,
        </h1>
        <div className=" h-[150px] rounded-[30px] w-[60%] grid-cols-3 grid items-center py-10  bg-white drop-shadow-glow ">
         
        <div className="w-full h-full flex items-center justify-center gap-3">
            <img src={Profile} className=" h-[70px] object-contain" alt="profile-icon" />
            <div className=" flex flex-col text-text">
              <p className=" text-sm font-normal">Total Users</p>
              <h1 className=" text-2xl font-bold">{sampleData.TotalUsers}</h1>
            </div>
          </div>

          <div className=" border-border border-x w-full h-full flex items-center justify-center gap-3">
            <img src={ActiveUsers} className=" h-[70px] object-contain" alt="profile-icon" />
            <div className=" flex flex-col text-text">
              <p className=" text-sm font-normal">Active Users</p>
              <h1 className=" text-2xl font-bold">{sampleData.TotalUsers}</h1>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center gap-3">
            <img src={Office} className=" h-[70px] object-contain" alt="profile-icon" />
            <div className=" flex flex-col text-text">
              <p className=" text-sm font-normal">Offices</p>
              <h1 className=" text-2xl font-bold">{sampleData.Offices}</h1>
            </div>
          </div>

        </div>
        <div className=" h-[400px] rounded-[30px] w-[90%] grid grid-cols-10 px-10 py-5 box-border  row-span-3 bg-white drop-shadow-glow ">
          <div className=" col-span-2  w-full h-full ">
            <div className=" flex flex-col gap-10  ">
              <div className=" cursor-pointer flex gap-2 items-center text-xs w-full min-w-[80px] bg-[#F4F7FE] text-[#A3AED0] px-5 py-3 rounded-md">
                <img src={Calendar} className=" h-5 w-5 object-contain" alt="" />
                <p>This month</p>
              </div>
              <div>
                <h1 className=" text-[#2B3674] font-semibold text-4xl">{sampleData.TotalTrans}</h1>
            <p className=" text-sm text-[#0F5FC2] font-medium">Total Transaction</p>
              </div>
              
            <div className=" flex text-[#05CD99] items-center gap-1">
              <img src={Check} className=" h-5 w-5 object-contain" alt="" />
              <p className=" text-base font-semibold">On track</p>
            </div>
            </div>
            
           

          </div>
        <ChartUI className=" col-span-8"
        chartData ={sampleData.chartData}
        />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
