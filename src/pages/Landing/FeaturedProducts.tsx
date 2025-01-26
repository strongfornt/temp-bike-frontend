import { Button } from "antd";
import { Link } from "react-router-dom";

const featuredProducts = [
    { id: 1, name: "Product 1", price: "$100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 2, name: "Product 2", price: "$150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 3, name: "Product 3", price: "$200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 4, name: "Product 4", price: "$250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 5, name: "Product 5", price: "$300", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 6, name: "Product 6", price: "$350", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
];
const FeaturedProducts = () => {
    return (
        <section className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="my-5 md:my-8">
                    <h2 className="text-3xl font-bold text-center ">Featured Products</h2>
                    <p className="text-sm text-center">Ultra-premium components, engineered by Probike. The ultimate upgrade. Wherever you ride, we’ve got a bike for the joyrider in you</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="shadow-lg">
                            <div className="bg-[#1C1B1B] p-2 rounded-t-xl">
                                <img className="w-full" src={product?.image} alt="" />
                                    <h4 className="text-lg md:text-xl font-medium text-[#FFE8D4] text-center my-5">{product.name}</h4>
                            </div>
                            <div className="bg-[#F6F6F6] p-4">
                                <div
                                    className="mt-8 space-y-2 flex items-center justify-between gap-3 md:gap-5 w-full md:w-11/12 text-xs md:text-sm font-medium">
                                    <div>
                                        <p>Brand: Mondrake</p>
                                        <p>Material: Steel</p>
                                    </div>
                                    <div>
                                        <p>Frame size: 55cm</p>
                                        <p>Torque: 50 Nm -70 NM</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button
                                size="large"
                                className="!rounded-none"
                                type="primary"
                                block
                                >
                                        View Details
                                </Button>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="text-center mt-6">
                    <Link
                        to="/products"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;