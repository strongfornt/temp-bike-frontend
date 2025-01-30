import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { adminPaths } from "../../routes/admin.routes";
import { customerPaths } from "../../routes/customer.routes";
import { findRouteName } from "../../utils/findRouteNames";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { verifyToken } from "../../utils/verifyToken";
import './sidebar.css'
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
      breakpoint="lg"
      collapsedWidth="0"
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
        <h1
          // to="/"
          // style={{
          //   marginBottom: 0
          // }}
          className="text-xl text-center !py-[11.4px] md:text-3xl lg:text-4xl  !font-bold text-primary "
        >
          Bike<span className="text-secondary">Shop</span>
        </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        color="red"
        defaultSelectedKeys={[(routeName as string) || "Dashboard"]}
        items={sidebarItems as any}
      />
    </Sider>
  );
};

export default Sidebar;
