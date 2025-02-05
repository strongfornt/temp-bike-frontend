import { Button, Layout } from "antd";

import { logout } from "../../redux/features/auth/authSlice";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import Sidebar from "./Sidebar";
import { clearCart } from "../../redux/features/cart/cartSlice";
const { Header, Content } = Layout;

const DashboardLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart())
  };
  return (
    <Layout style={{ height: "100%",}}>
      <Sidebar />
      <Layout>
        <Header
          style={{ backgroundColor: "#000001" }}
          className="sticky top-0 flex  items-center justify-end z-10"
        >
          <Button onClick={handleLogout}>Logout</Button>{""}
        </Header>
        <Content
          style={{
            padding: "10px 20px",
          }}
        >
          <div
            style={{
              // padding: 24,
              // minHeight: 360,
              // minHeight: "100vh",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
