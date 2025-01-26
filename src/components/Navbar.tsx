import { MenuOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const links = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive
                ? "text-primary font-medium"
                : "font-medium hover:text-secondary "
        }>Home</NavLink>
        <NavLink to="/all-products" className={({ isActive }) =>
            isActive
                ? "text-primary font-medium"
                : "font-medium hover:text-secondary "
        }>All Products</NavLink>
        <NavLink to="/about" className={({ isActive }) =>
            isActive
                ? "text-primary font-medium"
                : "font-medium hover:text-secondary "
        }>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
            isActive
                ? "text-primary font-medium"
                : "font-medium hover:text-secondary "
        }>Contact</NavLink>
        <NavLink to="/blog" className={({ isActive }) =>
            isActive
                ? "text-primary font-medium"
                : "font-medium hover:text-secondary "
        }>Blogs</NavLink>
    </>
    return (
        <nav className="p-3 md:p-4 bg-gray-900 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex justify-center items-center gap-3 lg:gap-5">
                    {/* Mobile menu toggle button */}
                    <button
                        className='w-7 h-7 flex justify-center items-center bg-primary rounded lg:hidden'
                    >
                        {<MenuOutlined className='font-bold' />}
                    </button>
                    {/* Logo */}
                    <Link to="/" className="text-xl md:text-3xl lg:text-4xl font-bold text-primary cursor-pointer">
                        Bike<span className="text-secondary">Shop</span>
                    </Link>

                    {/* Search bar */}
                    <div className="hidden mx-10 md:block md:w-[300px] lg:w-[350px] text-white ">
                        <div className="relative">
                            <span className="absolute inset-y-0 right-5 flex items-center">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
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
                <div className="flex justify-center items-center gap-3">
                    <Link to="/signin">
                        <Button
                            type="primary"
                        >
                            Signin
                        </Button>
                    </Link>
                    <Link to="/sign-up" className="hidden md:block">
                        <Button
                            type="primary"
                        >
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
