import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#000]">
            <section className="pt-5 md:pt-10 lg:pt-14 px-5 max-w-7xl mx-auto">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5 px-6">
                            <Link to="/" className="text-xl md:text-3xl lg:text-4xl font-bold text-primary cursor-pointer block">
                                Bike<span className="text-secondary">Shop</span>
                            </Link>
                            <p className="max-w-sm mt-8 text-gray-400">
                                Load up and head out. Explore the route less travelled or accelerate your daily routine with
                                one of these rugged, versatile e-bikes.
                            </p>
                            <div className="flex items-center gap-4 text-lg cursor-pointer mt-6 text-white">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-tiktok"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-300 font-medium uppercase">About</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Company</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Community</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Careers</a>
                                </div>
                                <div>
                                    <h3 className="text-gray-300 font-medium uppercase">Blog</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Tech</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Music</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Videos</a>
                                </div>
                                <div>
                                    <h3 className="text-gray-300 font-medium uppercase">Products</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Mega Cloud</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Aperion UI</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-400 hover:underline">Meraki UI</a>
                                </div>
                                <div>
                                    <h3 className="text-gray-300 font-medium uppercase">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-400 hover:underline">+1 526 654 8965</span>
                                    <span className="block mt-2 text-sm text-gray-400 hover:underline">bike@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none" />

                    <div>
                        <p className="text-center text-gray-400">© {new Date().getFullYear()} BikeShop. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;