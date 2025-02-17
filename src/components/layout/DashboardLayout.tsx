import { Button, Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const DashboardLayout = () => {

  return (
    <Layout style={{ height: "100%",}}>
      <Sidebar />
      <Layout>
        <Header
          style={{ backgroundColor: "#000001" }}
          className="sticky top-0 flex  items-center justify-end z-10 gap-3"
        >
         <Button href="/" className="!bg-transparent !text-gray-300 !rounded-md hover:!text-white">Change Password</Button>
         <Button icon={<LogoutOutlined />} className="!bg-transparent !rounded-md !text-gray-300 hover:!text-white">Logout</Button>
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
