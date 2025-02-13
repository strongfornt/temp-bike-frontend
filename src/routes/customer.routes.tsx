import React from "react";
const CustomerDashboard = React.lazy (() => import ("../pages/customer/CustomerDashboard"))
const OrderHistory = React.lazy (() => import ("../pages/customer/OrderHistory"))

export const customerPaths = [
    {
      name: 'Profile',
      path: 'dashboard',
      element: <CustomerDashboard/>,
    },
    {
      name: 'Managing',
      children: [
        {
          name: "Order History",
          path: 'order-history',
          element: <OrderHistory />
        }
      ]
    },
   
  ];
  