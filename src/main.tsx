import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';

const LoginPage= lazy(() =>
  wait(1300).then(() => import("./screens/loginPage/LoginPage.tsx"))
);

const ForgotPasswordPage= lazy(() =>
  wait(1300).then(() => import("./screens/forgotPass/forgotPass.tsx"))
);

const Document= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/document/Document.tsx"))
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
    }


  ]
  ,
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