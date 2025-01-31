import { useState } from "react";
import { Input, Select, Button } from "antd";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

const { Option } = Select;

const AllProducts = () => {
    const [query, setQuery] = useState({
        search: "",
        priceRange: "",
        model: "",
        brand: "",
        category: "",
        availability: "",
    });

    // Fetch filtered data from the backend
    const { data, isLoading } = useGetProductsQuery(query);
    const products = data?.data || [];

    // Handle input changes
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery((prev) => ({ ...prev, search: e.target.value }));
    };

    const handleFilterChange = (name: string, value: string) => {
        setQuery((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-7xl mx-auto py-5 text-white">
            {/* Filter Section */}
            <div className="p-3 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <Input
                        placeholder="Search by name, brand, or category"
                        value={query.search}
                        onChange={handleSearchChange}
                    />

                    <Select
                        className="w-full"
                        placeholder="Price Range"
                        onChange={(value) => handleFilterChange("priceRange", value)}
                    >
                        <Option value="">All Prices</Option>
                        <Option value="0-1000">0 - 1000</Option>
                        <Option value="1000-5000">1000 - 5000</Option>
                    </Select>

                    <Select
                        className="w-full"
                        placeholder="Brand"
                        onChange={(value) => handleFilterChange("brand", value)}
                    >
                        <Option value="">All Brands</Option>
                        <Option value="Yamaha">Yamaha</Option>
                        <Option value="Honda">Honda</Option>
                    </Select>

                    <Select
                        className="w-full"
                        placeholder="Category"
                        onChange={(value) => handleFilterChange("category", value)}
                    >
                        <Option value="">All Categories</Option>
                        <Option value="Sport">Sport</Option>
                        <Option value="Cruiser">Cruiser</Option>
                    </Select>

                    <Button
                        type="primary"
                        className="w-full"
                        onClick={() => console.log("Filtering with:", query)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </div>

            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {isLoading ? (
                    <div>Loading...</div>
                ) : products.length > 0 ? (
                    products.map((product: any) => <ProductCard key={product._id} product={product} />)
                ) : (
                    <div>No products found.</div>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
