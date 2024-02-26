import { ThemeProvider } from "@/components/theme-provider"


function LoginPage() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
     <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col justify-center  items-center">
        <h1>Login Page</h1>
     
    </div>
    </ThemeProvider>
  )
}



export default LoginPage
