import { Button } from "antd";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
    if (!product) return null;
    return (
        <div className="space-y-4 rounded-lg text-white border shadow-lg max-w-[380px] cursor-pointer">
            {/* Image & Stock Status */}
            <div className="relative">
                <img
                    className="rounded-t-lg object-cover w-full h-[230px]"
                    src={product?.image}
                    alt={product?.name || "Product Image"}
                />
                <p className={`absolute top-5 right-0 px-4 py-2 ${product?.inStock ? "bg-green-500" : "bg-red-500"} rounded-l-lg text-sm`}>
                    {product?.inStock ? "In Stock" : "Out of Stock"}
                </p>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <div className="space-y-1">
                    <h1 className="text-lg font-bold">{product?.name}</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-sm font-semibold">{product?.category}</h1>
                        <h1 className="text-sm font-semibold">{product?.brand}</h1>
                    </div>
                    <div className="text-sm font-semibold flex justify-between items-center">
                        <p>Price: <span className="text-green-400">${product?.price}</span></p>
                        <p>Ratings: <span className="text-yellow-400">4.5 ★</span></p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 text-xs justify-center items-center">
                    <Button size="middle" type="primary">Add to Cart</Button>
                    <Link to={`/product/${product?._id}`}> <Button size="middle">View Details</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;