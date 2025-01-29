import React from "react";

const CustomerDashboard = React.lazy (() => import ("../pages/customer/CustomerDashboard"))

export const customerPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <CustomerDashboard/>,
    },
    {
      name: 'Managing',
      path: 'managing',
      element: <><div>
        hhhh</div></>,
    },
   
  ];
  