import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

const FeaturedProducts = () => {
    const { data, isLoading } = useGetProductsQuery(undefined)
    return (
        <section className=" py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="my-5 md:my-8">
                    <h2 className="text-3xl font-bold text-center text-primary">Featured Products</h2>
                    <p className="text-sm text-center text-white w-full md:w-xl !mx-auto !my-4">Ultra-premium components, engineered by Probike. The ultimate upgrade. Wherever you ride, we’ve got a bike for the joyrider in you</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : data && data?.data.length > 0 ? (
                        data?.data?.map((product:any) => <ProductCard key={product._id} product={product} />)
                    ) : (
                        <div>No products found.</div>
                    )}

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