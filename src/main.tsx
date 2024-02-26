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



const HomePage= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/HomePage.tsx"))
);

const router = createBrowserRouter([
  {
    path: "/react-vite-supreme/",
    element: <Navigate to="/react-vite-supreme/login" />,
  },
  {
    path: "/react-vite-supreme/login",
    element:  <>
    <Suspense fallback={<Loader />}>
      <LoginPage />
    </Suspense>
  </>,
  },
  {
    path: "/react-vite-supreme/home",
    element:  <>
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  </>,
  children: [
  ],
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
