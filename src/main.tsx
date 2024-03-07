import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';
import DashboardLoader from './screens/adminPage/dashboard/components/DashboardLoader.tsx';
import ProfileLoader from './screens/adminPage/others/Profile/ProfileLoader.tsx';

const AdminPage= lazy(() =>
  wait(1300).then(() => import("./screens/adminPage/AdminPage.tsx"))
);
const AdminDashboard= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/dashboard/Dashboard.tsx"))
);
const Users= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/userManagement/Users.tsx"))
);
const Deactivated= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/userManagement/Deactivated.tsx"))
);

const AdminProfile= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/others/Profile/Profile.tsx"))
)


const LoginPage= lazy(() =>
  wait(1300).then(() => import("./screens/loginPage/LoginPage.tsx"))
);

const Message= lazy(() =>
  wait(1300).then(() => import('./components/msg/successMessage.tsx'))
);

const ForgotPasswordPage= lazy(() =>
  wait(1300).then(() => import("./screens/forgotPass/forgotPass.tsx"))
);

const Letter= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/letter/Letter.tsx"))
);
const Letter2= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/letter/Letter2.tsx"))
);

const Document= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/Document.tsx"))
);

const Dashboard= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/dashboard/Dashboard.tsx"))
);

const HomePage= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/HomePage.tsx"))
);

const router = createBrowserRouter([
  {
    path: "/dts/",
    element: <Navigate to="/dts/login" />,
  },
  {
    path: "/dts/login",
    element:  <>
    <Suspense fallback={<Loader />}>
      <LoginPage />
    </Suspense>
  </>,
  },
  {
    path: "/dts/message/",
    element:  <>
    <Suspense fallback={<Loader />}>
      <Message />
    </Suspense>
  </>,
  },

  {
    path: "/dts/forgot_password",
    element:  <>
    <Suspense fallback={<Loader />}>
      <ForgotPasswordPage />
    </Suspense>
  </>,
  },

  {
    path: "/dts/home",
    element: <>
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  </>,
    children: [
    {
      path: "/dts/home/", 
      element: <Navigate to="/dts/home/dashboard/" />, 
    },
    {
      path: "/dts/home/dashboard/",
      element:  <>
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    </>,
    },
    {
      path: "/dts/home/document/",
      element:  <>
      <Suspense fallback={<Loader />}>
        <Document />
      </Suspense>
    </>,
     
    },
    {
      path: "/dts/home/letter",
  element:  <>
  <Suspense fallback={<Loader />}>
    <Letter />
  </Suspense>
</>,
    },
    {
      path: "/dts/home/letter2",
  element:  <>
  <Suspense fallback={<Loader />}>
    <Letter2 />
  </Suspense>
</>,
    }


  ]
  ,
  },
  {
    path: "/dts/admin/",
    element: <>
    <Suspense fallback={<Loader />}>
      <AdminPage />
    </Suspense>
  </>,
    children: [
    {
      path: "/dts/admin/", 
      element: <Navigate to="/dts/admin/dashboard/" />, 
    },
    {
      path: "/dts/admin/dashboard/", 
      element: <Suspense fallback={<DashboardLoader />}>
      <AdminDashboard />
    </Suspense>, 
    },
    {
      path: "/dts/admin/user", 
      element: <Suspense fallback={<Loader />}>
      <Users />
    </Suspense>, 
    },
    {
      path: "/dts/admin/deactivate", 
      element: <Suspense fallback={<Loader />}>
      <Deactivated />
    </Suspense>, 
    },
    {
      path: "/dts/admin/profile", 
      element: <Suspense fallback={<ProfileLoader />}>
      <AdminProfile />
    </Suspense>, 
    },
  
  
  ]
  },

  {
    path: "*",
    element:  <>
    <Suspense fallback={<Loader />}>
      <NotFound />
    </Suspense>
  </>,
  }
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
