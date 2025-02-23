import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-5 md:mb-8">
            Featured Products
          </h2>
          <p className="text-sm text-center text-white w-full md:w-xl !mx-auto mb-6 md:!mb-8">
            Ultra-premium components, engineered by Probike. The ultimate
            upgrade. Wherever you ride, we&apos;ve got a bike for the joyrider in you
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <div>Loading...</div>
            // <BikeCardSkeleton/>
          ) : data && data?.data.length > 0 ? (
            data?.data
              ?.slice(0, 6)
              ?.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))
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
