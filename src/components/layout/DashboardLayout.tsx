import { Layout } from "antd";

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
          className="sticky top-0 flex  items-center justify-end z-10"
        >
         
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
