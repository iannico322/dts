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
