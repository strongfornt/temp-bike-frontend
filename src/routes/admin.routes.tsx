import React from "react";
import ManageUser from "../pages/admin/ManageUser";
const AdminDashboard = React.lazy(
  () => import("../pages/admin/AdminDashboard")
);

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
    // children: [
    //   {
    //     name: "Add User",
    //     path: "add-user",
    //     element: <div>Add User</div>,
    //   }
    // ]
  },
];
