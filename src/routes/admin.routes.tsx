import React from "react";
import SuspenseWrapper from "../utils/SuspenseWrapper";
const AdminDashboard = React.lazy(
  () => import("../pages/admin/AdminDashboard")
);

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: (
      <SuspenseWrapper>
        <AdminDashboard />
      </SuspenseWrapper>
    ),
  },
];
