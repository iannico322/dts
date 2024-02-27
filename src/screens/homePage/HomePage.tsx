import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
  const [navActive, setActive] = useState(false);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
        <Header navActive={navActive} setActive={setActive} />
        <div className=" absolute z-20 mt-[16vh] md:mt-28 sm:mt-20 sm:items-center top-0 flex text-sm  right-0  items-center sm:mr-0  mr-20 animate__animated  animate__fadeInLeft ">
          <p className=" sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">
            Track Document
          </p>
          |
          <p className="sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">
            In Process
          </p>
          |
          <p className="sm:text-xs text-center cursor-pointer px-4 py-2 hover:font-semibold  transition-all duration-150">
            Accomplished
          </p>
        </div>

        <div
          className=" w-full h-full"
          onClick={() => {
            console.log("hi");
            setActive(false);
          }}
        >
          <Outlet />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
