import Profile from "./../../../assets/icons/totalUsers.png";
import ActiveUsers from "./../../../assets/icons/activeUsers.png";
import Office from "./../../../assets/icons/officesPc.png";
import Check from "./../../../assets/icons/check2.png";
import Calendar from "./../../../assets/icons/calendar.png";

import ChartUI from "./components/ChartUI";
import NumberEffect from "@/components/animation/numbers";

function Dashboard() {

  const sampleData = {
    TotalUsers: 5423,
    ActiveUsers: 1893,
    Offices: 128,
    TotalTrans: 3000,
    chartData: [
      {
        name: "Number Documents",
        data: [1000, 1200, 1500, 1300, 300, 0, 600, 800, 1400, 1600, 800],
      },
      {
        name: "Avg Documents",
        data: [400, 200, 100, 300, 400, 600, 800, 300, 400, 600, 800],
      },
    ],
  };

  return (
    <div className="  w-full h-screen min-h-screen sm:min-h-screen overflow-x-hidden   md:overflow-y-scroll bg-[#1e4e93] flex  items-center justify-center flex-col">
      <div className=" w-[90%] h-[95%] sm:min-h-[95%]   rounded-md flex flex-col gap-8 sm:gap-3 ">
        <h1 className=" col-span-6 text-2xl row-span-1  text-white font-medium">
          Hello Admin 👋🏼,
        </h1>
        <div className=" min-h-[120px] sm:min-h-[150px] lg:min-h-[250px]  rounded-[30px] justify-center sm:rounded-[20px] w-[60%] md:w-full lg:w-[70%] sm:px-4  px-5  lg:gap-5 sm:gap-2 grid-cols-3 lg:grid-cols-2 grid items-center py-7 sm:py-3  bg-white drop-shadow-glow flex-wrap relative  box-border ">

          <div className="w-full min-h-full flex items-center justify-center lg:justify-start gap-3 sm:gap-1 ">
            <img
              src={Profile}
              className=" h-[50px] sm:h-[30px] object-contain"
              alt="profile-icon"
            />
            <div className=" flex flex-col text-text">
              <p className=" sm:text-[8px] text-xs font-normal">Total Users</p>
              <h1 className=" sm:text-base text-xl font-bold">
                <NumberEffect value={sampleData.TotalUsers} />
              </h1>
            </div>
          </div>

          <div className=" border-border border-x lg:border-0 w-full h-full flex items-center justify-center gap-3 sm:gap-1 lg:col-span-1 lg:justify-start">
            <img
              src={ActiveUsers}
              className=" h-[50px] sm:h-[30px] object-contain"
              alt="profile-icon"
            />
            <div className=" flex flex-col text-text ">
              <p className=" sm:text-[8px] text-xs font-normal">Active Users</p>
              <h1 className=" sm:text-base text-xl font-bold">
                {" "}
                <NumberEffect value={sampleData.TotalUsers} />
              </h1>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center lg:justify-start gap-3 sm:gap-1 lg:col-span-1">
            <img
              src={Office}
              className=" h-[50px] sm:h-[30px] object-contain"
              alt="profile-icon"
            />
            <div className=" flex flex-col text-text">
              <p className=" sm:text-[8px] text-xs font-normal">Offices</p>
              <h1 className=" sm:text-base text-xl font-bold">
                <NumberEffect value={sampleData.Offices} />
              </h1>
            </div>
          </div>
        </div>
        <div className="min-h-[380px]  sm:min-h-[530px] sm:mb-20 rounded-[30px] w-[90%] sm:rounded-lg md:w-full flex px-10 sm:px-3 py-5   bg-white drop-shadow-glow sm:gap-y-5 sm:flex sm:flex-col   ">
          <div className=" col-span-2 sm:col-span-10 w-[300px]  sm:w-full h-full sm:row-span-1 ">
            <div className=" flex flex-col gap-10 sm:gap-1 w-full relative  ">
              <div className=" cursor-pointer flex gap-2 items-center text-xs w-full min-w-[20px] bg-[#F4F7FE] text-[#A3AED0] px-5 py-2 rounded-md">
                <img
                  src={Calendar}
                  className=" h-5 w-5 object-contain"
                  alt=""
                />
                <p>This month</p>
              </div>
              <div className=" sm:text-center">
                <h1 className=" text-[#2B3674] font-semibold text-4xl  sm:text-lg">
                  <NumberEffect value={sampleData.TotalTrans} />
                </h1>
                <p className=" text-sm text-[#0F5FC2] font-medium">
                  Total Transaction
                </p>
              </div>

              <div className=" flex text-[#05CD99] items-center gap-1 sm:justify-center">
                <img src={Check} className=" h-5 w-5 object-contain" alt="" />
                <p className=" text-base font-semibold sm:text-xs">On track</p>
              </div>
            </div>
          </div>
          <ChartUI
            className="w-full col-span-8 h-[80%]  sm:col-span-10 sm:row-span-3"
            chartData={sampleData.chartData}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
