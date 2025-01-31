import { Button } from "antd";
import { Link } from "react-router-dom";

const featuredProducts = [
    { id: 1, name: "Product 1", price: "$100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7iwdT0dbye-DadL-XX2GUp_NwPHxZNmgGn4ULQaAcsLyg9xbzIpLtX17DRbJsbeJ5fk&usqp=CAU" },
    { id: 2, name: "Product 2", price: "$150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 3, name: "Product 3", price: "$200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 4, name: "Product 4", price: "$250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 5, name: "Product 5", price: "$300", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
    { id: 6, name: "Product 6", price: "$350", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nclv6Jz-YkVgA0WBLlirzLKAiHw17UxXhD_I7a2MjE-n5OLMBSkFxOcOTVYuFO25tOg&usqp=CAU" },
];
const FeaturedProducts = () => {
    return (
        <section className=" py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="my-5 md:my-8">
                    <h2 className="text-3xl font-bold text-center text-primary">Featured Products</h2>
                    <p className="text-sm text-center text-white w-full md:w-xl !mx-auto !my-4">Ultra-premium components, engineered by Probike. The ultimate upgrade. Wherever you ride, we’ve got a bike for the joyrider in you</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="space-y-4 rounded-lg text-white border shadow-lg max-w-[380px] cursor-pointer">
                            <div className="relative">
                                <img className="rounded-t-lg object-cover w-full h-[230px]" src={product.image} alt="" />
                                <p className="absolute top-5 right-0 px-4 py-2 bg-red-400 rounded-l-lg text-sm">Stock Out</p>
                            </div>
                            <div className="p-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-sm font-semibold ">{product.name}</h1>
                                        <h1 className="text-sm font-semibold ">{product.price}</h1>
                                    </div>
                                    {/* <p className="text-xs text-gray-500">{description.slice(0, 100)}</p> */}
                                    <div className="text-sm font-semibold flex justify-between items-center">
                                        <p>Price: ${product.price}</p>
                                        <p>Ratings: {product.price}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-xs justify-center items-center">
                                    <Button size="middle">Add to Cart</Button>
                                    <Button size="middle">View Details</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
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