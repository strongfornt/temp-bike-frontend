import React from "react";
import OrderManagement from "../pages/admin/OrderManagement";
const ManageUser = React.lazy(
  () => import("../pages/admin/ManageUser")
)
const AdminDashboard = React.lazy(
  () => import("../pages/admin/AdminDashboard")
);
const ProductManagement = React.lazy(
  () => import(("../pages/admin/productManagement"))
)
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    path: "user-management",
    element: <ManageUser />,
  },
  {
    name: "Product Management",
    path: 'product-management',
    element: <ProductManagement />
  },
  {
    name: "Order Management",
    path: 'order-management',
    element: <OrderManagement />
  }

];
