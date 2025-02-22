import {
  DeleteOutlined,
  LogoutOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Drawer, Dropdown, MenuProps } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../redux/features/cart/cartSlice";
import { useOrderProductMutation } from "../redux/features/order/orderSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import useHandleLogout from "../utils/handleLogout";
import logo from "../assets/logo/logo.png";
import "./nav.css"
const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium"
            : "font-medium hover:text-secondary "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium"
            : "font-medium hover:text-secondary "
        }
      >
        All Products
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium"
            : "font-medium hover:text-secondary "
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium"
            : "font-medium hover:text-secondary "
        }
      >
        Contact
      </NavLink>
      {/* <NavLink
        to="/blog"
        // className={({ isActive }) =>
        //   isActive
        //     ? "text-primary font-medium "
        //     : "font-medium hover:text-secondary cursor-not-allowed  "
        // }
        
        className="pointer-events-none line-through"
      >
        Blogs
      </NavLink> */}
    </>
  );
  const user = useAppSelector(selectCurrentUser);
  const cart: any = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const [handleProduct, res] = useOrderProductMutation();
  const [open, setOpen] = useState(false);
  const { handleLogout } = useHandleLogout();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleCheckout = async () => {
    const checkoutData = cart.cartItems?.map((p:any) => {
      return { id: p._id, quantity: p.quantity };
    });
    const res = await handleProduct(checkoutData);
    if (res.data.success) {
      window.location.href = res.data.data;
    }
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={`/${user?.role}/dashboard`}>Dashboard</Link>,
    },
    {
      key: "2",
      label: <button>Change Password</button>,
    },
    {
      key: "3",
      label: (
        <button
          onClick={() => {
            handleLogout();
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <LogoutOutlined />
          Logout
        </button>
      ),
    },
  ];
  return (
    <nav className="p-3 md:p-4 bg-[#000001] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto  container flex justify-between items-center">
        <div className="flex justify-center items-center gap-3 lg:gap-5">
          {/* Mobile menu toggle button */}
          <button className="w-7 h-7 flex justify-center items-center bg-primary rounded lg:hidden">
            {<MenuOutlined className="font-bold" />}
          </button>
          {/* Logo */}

          <Link
            to="/"
            className="text-xl flex items-center md:text-3xl lg:text-4xl font-bold text-primary cursor-pointer"
          >
            <span className="">
              <img className="h-8" src={logo} alt="" />
            </span>
            Steel<span className="text-secondary">Rev</span>
          </Link>

          {/* Search bar */}
          <div className="hidden mx-10 md:block md:w-[300px] lg:w-[350px] text-white ">
            <div className="relative">
              <span className="absolute inset-y-0 right-5 flex items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-[#454545]"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center items-center h-full gap-5 xl:gap-10 text-gray-300 hidden">
          {links}
        </div>
        {/* Auth/Cart Buttons */}
        <div className="flex gap-6 items-center">
          <div className="relative" onClick={showDrawer}>
            <ShoppingCartOutlined className="!text-white text-2xl cursor-pointer" />
            <p className="absolute -top-[6px] -right-[1px] text-white ">
              {cart?.totalQuantity}
            </p>
          </div>
          {user ? (
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <button>
                <UserOutlined className="!text-white text-2xl cursor-pointer" />
              </button>
            </Dropdown>
          ) : (
            <div className="">
              <Link to="/signin">
                <div className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group text-sm rounded-md">
                  <span className="w-full h-full bg-gradient-to-br from-secondary  to-primary group-hover:from-primary group-hover:to-secondary absolute"></span>
                  <span className="relative px-3 py-1 transition-all ease-out bg-[#000001] rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-gray-300">Signin</span>
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Drawer
        title="Cart Summary"
        onClose={onClose}
        open={open}
        style={{
          backgroundColor: '#000001'
        }}
        className=" !text-white"
        width={450}
        placement="right"
      >
        <div className="text-white p-5">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

          {/* Check if the cart is empty */}
          {cart.cartItems.length === 0 ? (
            <p className="text-center text-lg">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {/* Map over the cart items */}
              {cart.cartItems.map((item :any) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center p-4 border-b border-gray-600 rounded-lg bg-gray-700"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Input */}
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 text-center border bg-transparent text-white"
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item._id,
                            quantity: parseInt(e.target.value),
                          })
                        )
                      }
                    />
                    <Button
                      icon={<DeleteOutlined />}
                      className="text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg mr-2"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    />
                  </div>
                </div>
              ))}

              {/* Total Price */}
              <Divider className="border-gray-600" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              {/* Clear Cart Button */}
              <div className="flex justify-between items-center gap-5">
                <Button
                  onClick={() => dispatch(clearCart())}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg mt-4"
                >
                  Clear Cart
                </Button>
                {/* Checkout Button */}
                <Button
                  type="primary"
                  onClick={() => {
                    handleCheckout();
                  }}
                  loading={res.isLoading}
                  className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg mt-2"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
