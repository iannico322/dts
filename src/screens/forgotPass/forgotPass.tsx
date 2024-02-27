import { ThemeProvider } from "@/components/theme-provider";

import bg2 from './../../../src/assets/images/DICT-bg2.webp'



function ForgotPasswordPage() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" flex w-screen h-screen">
        <img className= " w-full h-full object-cover " src={bg2} alt="DICT_bg2" />
      </div>
    </ThemeProvider>
  )
}



export default ForgotPasswordPage
