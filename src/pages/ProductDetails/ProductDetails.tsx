import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../redux/features/product/productApi";
import { Button } from "antd";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetProductDetailsQuery({ id })
    const product = data?.data || []
    const dispatch = useAppDispatch()
    return (
        <div className="grid place-content-center min-h-[calc(100vh-72px)]  max-w-7xl mx-auto text-white">
            {
                isLoading ? <div> laoding.....</div> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    {/* Product Image Section */}
                    <div className="relative">
                        <img
                            src={product?.image}
                            alt={product?.name}
                            className="rounded-lg object-cover w-full h-[400px] sm:h-[500px] md:h-[400px] shadow-lg"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold ">{product?.name}</h1>
                        <h2 className="text-xl">{product?.brand} | {product?.category}</h2>

                        {/* Price and Stock Status */}
                        <div className="flex items-center gap-6 my-4">
                            <p className="text-2xl font-semibold text-green-400">${product?.price}</p>
                            <p
                                className={`text-sm px-4 py-1 rounded-full ${product?.inStock ? 'bg-green-500' : 'bg-red-500'}`}
                            >
                                {product?.inStock ? "In Stock" : "Out of Stock"}
                            </p>
                        </div>

                        {/* Product Description */}
                        <p className="text-lg mb-6">{product?.description}</p>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <Button
                                size="large"
                                type="primary"
                                disabled={!product?.inStock}
                                className="bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
                                onClick={() => dispatch(addToCart(product))}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;