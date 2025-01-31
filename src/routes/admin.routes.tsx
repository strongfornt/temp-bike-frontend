import React from "react";
const ManageUser = React.lazy(
  () => import("../pages/admin/ManageUser")
)
const AdminDashboard = React.lazy(
  () => import("../pages/admin/AdminDashboard")
);
const AddProduct = React.lazy(
  () => import(("../pages/admin/AddProduct"))
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
    children: [
      {
        name: "Add Product",
        path: "add-product",
        element: <AddProduct />,
      }
    ]
  }

];
