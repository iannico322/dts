import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';
import DashboardLoader from './screens/adminPage/dashboard/components/DashboardLoader.tsx';
import ProfileLoader from './screens/adminPage/Profile/ProfileLoader.tsx';
import UsersLoader from './screens/adminPage/userManagement/UsersLoader.tsx'
import FeedbackLoader from './screens/adminPage/others/Feedbacks/FeedbackLoader.tsx';
import AuditLoader from './screens/adminPage/auditTrail/auditLoader.tsx';


const Developers= lazy(() =>
  wait(1300).then(() => import("./screens/developersPage/Developers.tsx"))
);


const AdminPage= lazy(() =>
  wait(1300).then(() => import("./screens/adminPage/AdminPage.tsx"))
);
const AdminDashboard= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/dashboard/Dashboard.tsx"))
);
const AdminUsers= lazy(() =>
  wait(1300).then(() => import("./screens/adminPage/userManagement/Users/Users.tsx"))
)
const Deactivated= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/userManagement/Deactivation/Deactivated.tsx"))
);

const Offices= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/officeManagement/Offices/Offices.tsx"))
);

const AdminProfile= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/Profile/Profile.tsx"))
)

const Feedback= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/others/Feedbacks/Feedback.tsx"))
)

const Audit= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/auditTrail/audit.tsx"))
)




const LoginPage= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/loginPage/LoginPage.tsx"))
);
const  Activation= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/loginPage/Activation.tsx"))
);


const ForgotPasswordPage= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/forgotPass/forgotPass.tsx"))
);
const ResetPassword= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/forgotPass/ResetPass.tsx"))
);

const HomePage= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/HomePage.tsx"))
);
const Dashboard= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/dashboard/Dashboard.tsx"))
);
const Document= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/Document.tsx"))
);
const Letter= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/letter/Letter.tsx"))
);
const Letter2= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/letter/Letter2.tsx"))
);



const ReceivePage= lazy(() =>
  wait(1300).then(() => import("./screens/receiverPage/ReceiverPage.tsx"))
);

const RDashboard= lazy(() =>
  wait(500).then(() => import("./screens/receiverPage/dashboard/Dashboard.tsx"))
);

const Completed= lazy(() =>
  wait(500).then(() => import("./screens/receiverPage/completed/Completed.tsx"))
);
const  Track= lazy(() =>
  wait(500).then(() => import("./screens/receiverPage/track/Track.tsx"))
);







const router = createBrowserRouter([
  {
    path: "/dts/",
    element: <Navigate to="/dts/login" />,
  },
  {
    path: "/dts/developers",
    element:  <>
    <Suspense fallback={<Loader />}>
      <Developers />
    </Suspense>
  </>,
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
    path: "/dts/activation/:uid/:token",
    element:  <>
    <Suspense fallback={<Loader />}>
      <Activation  />
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
    path: "/dts/reset-password/:uid/:token",
    element:  <>
    <Suspense fallback={<Loader />}>
      <ResetPassword  />
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
    path: "/dts/receive",
    element: <>
    <Suspense fallback={<Loader />}>
      <ReceivePage />
    </Suspense>
  </>,
    children: [
    {
      path: "/dts/receive/", 
      element: <Navigate to="/dts/receive/dashboard/" />, 
    },
    {
      path: "/dts/receive/dashboard/",
      element:  <>
      <Suspense fallback={<Loader />}>
        <RDashboard />
      </Suspense>
    </>,
    },
    {
      path: "/dts/receive/track",
      element:  <>
      <Suspense fallback={<Loader />}>
        <Track />
      </Suspense>
    </>,
    },
    {
      path: "/dts/receive/completed",
      element:  <>
      <Suspense fallback={<Loader />}>
        <Completed/>
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
      path: "/dts/admin/user/", 
      element: <Suspense fallback={<UsersLoader />}>
      <AdminUsers />
    </Suspense>, 
    },
    {
      path: "/dts/admin/deactivate", 
      element: <Suspense fallback={<UsersLoader />}>
      <Deactivated />
    </Suspense>, 
    },
    {
      path: "/dts/admin/offices", 
      element: <Suspense fallback={<UsersLoader />}>
      <Offices />
    </Suspense>, 
    },
    {
      path: "/dts/admin/profile", 
      element: <Suspense fallback={<ProfileLoader />}>
      <AdminProfile />
    </Suspense>, 
    },
    {
      path: "/dts/admin/feedbacks", 
      element: <Suspense fallback={<FeedbackLoader />}>
      <Feedback />
    </Suspense>, 
    },
    {
      path: "/dts/admin/audit_trail", 
      element: <Suspense fallback={<AuditLoader />}>
      <Audit />
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
