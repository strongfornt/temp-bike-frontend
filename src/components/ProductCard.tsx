import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { addToCart } from "../redux/features/cart/cartSlice";

const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch();
  if (!product) return null;
  return (
    <div className="border border-primary/30 rounded-lg  text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      {/* Image & Stock Status */}
      <div className="relative">
        <img
          className="rounded-t-lg object-cover w-full h-[230px]"
          src={product?.image}
          alt={product?.name || "Product Image"}
        />
        <p
          className={`absolute top-5 text-white right-0 px-4 py-2 ${
            product?.inStock ? "bg-green-500" : "bg-red-500"
          } rounded-l-lg text-sm`}
        >
          {product?.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      {/* Product Details */}
      <div className="p-4 text-gray-300">
        <div className="space-y-1">
          <h1 className="text-lg text-left font-bold">
            {" "}
            Brand: <span className="text-base">{product?.brand}</span>
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold">Name: {product?.name}</h1>
            <h1 className="text-sm font-semibold">Category: {product?.category}</h1>
          </div>
          <div className="text-sm font-semibold flex justify-between items-center">
            <p>
              Price:{" "}
              <span className="text-green-400">
                $ {product?.price}
              </span>
            </p>
            <p>
              Ratings: <span className="text-yellow-400">4.5 ★</span>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 text-xs justify-center items-center">
          <Button
            onClick={() => {
              dispatch(addToCart(product));
            }}
            size="middle"
            type="primary"
            disabled={!product.inStock}
            className="!text-white"
          >
            Add to Cart
          </Button>
          <Link to={`/product/${product?._id}`}>
            {" "}
            <Button size="middle">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
