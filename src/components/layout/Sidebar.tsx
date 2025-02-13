import { Button, Layout, Menu, Modal, Popconfirm } from "antd";
import { Link, useLocation } from "react-router-dom";
import { logout, TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { adminPaths } from "../../routes/admin.routes";
import { customerPaths } from "../../routes/customer.routes";
import { findRouteName } from "../../utils/findRouteNames";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { verifyToken } from "../../utils/verifyToken";
import './sidebar.css'
import { clearCart } from "../../redux/features/cart/cartSlice";
const { Sider } = Layout;
import { LogoutOutlined } from "@ant-design/icons";
import { toast } from "sonner";
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
  const dispatch = useAppDispatch();
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
        <Link to={'/'}>
          <h1
            // to="/"
            style={{
              marginBottom: 0,
              padding: '11px 0px'
            }}
            className="text-xl text-center  md:text-3xl lg:text-4xl  !font-bold text-primary "
          >
            Bike<span className="text-secondary">Shop</span>
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
      <div className="absolute bottom-12 w-full px-4">
        <Popconfirm
          title="Are you sure you want to log out?"
          onConfirm={() => {
            dispatch(logout());
            dispatch(clearCart())
          }}
          okText="Yes"
          cancelText="No"
        >
          <Button block icon={<LogoutOutlined />} className="!bg-transparent !rounded-none !text-primary">Logout</Button>
        </Popconfirm>
      </div>
    </Sider>
  );
};

export default Sidebar;
