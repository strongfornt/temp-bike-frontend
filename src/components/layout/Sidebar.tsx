import { HolderOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { adminPaths } from "../../routes/admin.routes";
import { customerPaths } from "../../routes/customer.routes";
import { findRouteName } from "../../utils/findRouteNames";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { verifyToken } from "../../utils/verifyToken";
import './sidebar.css';
import logo from "./../../assets/logo/logo.png"
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.CUSTOMER:
      sidebarItems = sidebarItemsGenerator(customerPaths, userRole.CUSTOMER);
      break;
    default:
      break;
  }
  const location = useLocation();
  const routeName = findRouteName(sidebarItems, location.pathname);
  return (
    <Sider
    className="z-30"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        backgroundColor: "#000001",
      }}
    >
      <div
        style={{
          // color: 'white',
          // height: '4rem',
          // backgroundColor: 'red',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          textAlign: "center",
        }}
      >
        {/* <h1>PH Uni</h1> */}
        <Link to={'/'}>
          <h1
            // to="/"
            style={{
              marginBottom: 0,
              padding: '11px 0px'
            }}
            className="text-xl flex items-center text-center  md:text-3xl lg:text-3xl  !font-bold text-primary "
          >
             <span className="">
              <img className="h-7" src={logo} alt="" />
            </span>
            Steel<span className="text-secondary">Rev</span>
          </h1>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        color="red"
        defaultSelectedKeys={[(routeName as string) || "Dashboard"]}
        items={sidebarItems as any}
      />
      <div className="absolute bottom-10 w-full px-4">
        <Button href="/" block icon={<HolderOutlined />} className="!bg-transparent !rounded-md !text-gray-400 hover:!text-white ">Home</Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
