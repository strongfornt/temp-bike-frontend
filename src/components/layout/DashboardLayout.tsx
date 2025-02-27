import {
  CloseOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Grid, Layout, Tooltip } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useRefreshObj } from "../../redux/features/commonRefresh/commonSlice";
import { useAppSelector } from "../../redux/hook";
import useHandleLogout from "../../utils/handleLogout";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const refreshObj = useAppSelector(useRefreshObj);
  const { handleLogout } = useHandleLogout();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  // const handleCollaps = () => {
  //   setCollapsed(!collapsed);
  // }

  const buttonSize: 'large' | 'middle' | 'small' = screens.sm
    ? 'middle'
    : 'small';
  return (
    <>
      {/* <ScrollRestoration /> */}
      <Layout style={{ height: "100%" }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Header
            style={{
              backgroundColor: "#000001",
              padding: collapsed ? "0 20px" : "0 20px 0 0",
              transition: "padding 0.3s ease-in-out",
            }}
            className="sticky top-0 flex  items-center justify-between lg:justify-end z-10 "
          >
            <Button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                backgroundColor: "transparent",
                
              }}
              size={buttonSize}
              className={`${!collapsed && '!rounded-l-none' } lg:!hidden `}
            >
              {collapsed ? (
                <MenuFoldOutlined color="white" className="!text-white" />
              ) : (
                <CloseOutlined color="white" className="!text-white" />
              )}
            </Button>
            <div className=" flex items-center gap-2 md:gap-3">
              <Button
              size={buttonSize}
                icon={<LogoutOutlined />}
                onClick={() => handleLogout()}
                className="!bg-transparent !rounded-md !text-xs md:!text-base !text-gray-300 hover:!text-white"
              >
                Logout
              </Button>
              <Tooltip title="Refresh">
                <Button
                  onClick={() => refreshObj?.CB && refreshObj.CB()}
                  type="text"
                 size={buttonSize}
                  style={{ border: "1px solid white", borderRadius: "6px" }}
                >
                  <ReloadOutlined
                    style={{ color: "white", cursor: "pointer" }}
                  />
                </Button>
              </Tooltip>
            </div>
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
