import { Button, Layout, Tooltip } from "antd";
import { LogoutOutlined, ReloadOutlined } from "@ant-design/icons";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppSelector } from "../../redux/hook";
import { useRefreshObj } from "../../redux/features/commonRefresh/commonSlice";
import useHandleLogout from "../../utils/handleLogout";
const { Header, Content } = Layout;

const DashboardLayout = () => {
const refreshObj = useAppSelector(useRefreshObj)
const { handleLogout } = useHandleLogout();
  return (
   <>
   <ScrollRestoration />
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{ backgroundColor: "#000001" }}
          className="sticky top-0 flex  items-center justify-end z-10 gap-7"
        >
        <div className="space-x-3" >
        <Button
            href="/"
            className="!bg-transparent !text-gray-300 !rounded-md hover:!text-white"
          >
            Change Password
          </Button>
          <Button
            icon={<LogoutOutlined />}
            onClick={() => handleLogout()}
            className="!bg-transparent !rounded-md !text-gray-300 hover:!text-white"
          >
            Logout
          </Button>
        </div>
        <Tooltip title="Refresh">
          <Button
          onClick={() => refreshObj?.CB && refreshObj.CB()}
          type="text" style={{border:"1px solid white", borderRadius:"6px"}} >
         
            <ReloadOutlined  style={{color:"white", cursor:"pointer"}} />
          
          </Button>
          </Tooltip>
        </Header>
        <Content
          style={{
            padding: "10px 20px",
          }}
        >
          
          <div
            style={
              {
                // padding: 24,
                // minHeight: 360,
                // minHeight: "100vh",
              }
            }
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
   </>
  );
};

export default DashboardLayout;
