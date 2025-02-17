import React from "react";
const CustomerDashboard = React.lazy (() => import ("../pages/customer/CustomerDashboard"))
const OrderHistory = React.lazy (() => import ("../pages/customer/OrderHistory"))
const TrackMyOrder = React.lazy (() => import ("../pages/customer/TrackOrder/TrackMyOrder"))

export const customerPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <CustomerDashboard/>,
    },
    {
      name: "Order History",
      path: 'order-history',
      element: <OrderHistory />
    },
    {
      name: 'Track My Order',
      path: 'track-my-order',
      element: <TrackMyOrder/>,
    },
   
  ];
  