import Footer from "@/components/nav/Footer";
import RHeader from "@/components/nav/RHeader";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function ReceiverPage() {
  const [navActive, setActive] = useState(false);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
        <RHeader navActive={navActive} setActive={setActive} />
        

        <div
          className=" w-full h-full bg-[#ffffff]"
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

export default ReceiverPage;