import { Form, Input, Select, Slider } from "antd";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";


const AllProducts = () => {

    // Fetch filtered data from the backend
    const { data, isLoading } = useGetProductsQuery(undefined);
    const products = data?.data || [];
    const [form] = Form.useForm()

    return (
        <div className="max-w-7xl mx-auto py-5 text-white">
            {/* Filter Section */}
            <div className="rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                <Form form={form} className="my-4 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-start">
                    <div>
                        <Form.Item noStyle shouldUpdate>
                            {() => {
                                const formData = form.getFieldsValue(true);
                                return (
                                    <Input
                                        placeholder="Search by Brand, Bike Name, or Category"
                                        value={formData?.searchValue || ''}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            form.setFieldsValue({ searchValue: value });
                                        }}
                                        className="w-full md:w-[180px] py-[6.1px]"
                                    />
                                );
                            }}
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-end flex-1 w-full">
                        <div className="w-full flex md:flex-row flex-wrap flex-col justify-end items-end gap-[10px] transition-all duration-300 opacity-100">
                            {/* Brand Filter */}
                            <Form.Item noStyle shouldUpdate>
                                {() => {
                                    const formData = form.getFieldsValue(true);
                                    return (
                                        <Select
                                            placeholder="Brand"
                                            value={formData?.brand || undefined}
                                            onChange={(key, data: any) => {
                                                form.setFieldsValue({
                                                    brand: data?.value,
                                                });
                                            }}
                                            style={{ height: 35, borderRadius: 8, borderColor: '#D7D7D7', background: 'none' }}
                                            allowClear
                                            showSearch
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            className="!bg-red-400 md:w-[180px] w-full"
                                            suffixIcon={<span style={{ color: '#BBBABA' }}>▼</span>}
                                            options={[{ label: 'Yamaha', value: 'yamaha' }, { label: 'Honda', value: 'honda' }]}
                                        />
                                    );
                                }}
                            </Form.Item>

                            {/* Category Filter */}
                            <Form.Item noStyle shouldUpdate>
                                {() => {
                                    const formData = form.getFieldsValue(true);
                                    return (
                                        <Select
                                            placeholder="Category"
                                            value={formData?.category || undefined}
                                            onChange={(key, data: any) => {
                                                form.setFieldsValue({ category: data?.value });
                                            }}
                                            style={{ height: 35, borderRadius: 8, borderColor: '#D7D7D7' }}
                                            allowClear
                                            showSearch
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            className="!bg-red-400 md:w-[180px] w-full"
                                            suffixIcon={<span style={{ color: '#BBBABA' }}>▼</span>}
                                            options={[
                                                { label: 'Sports', value: 'sports' },
                                                { label: 'Cruiser', value: 'cruiser' },
                                            ]}
                                        />
                                    );
                                }}
                            </Form.Item>

                            {/* Model Filter */}
                            <Form.Item noStyle shouldUpdate>
                                {() => {
                                    const formData = form.getFieldsValue(true);
                                    return (
                                        <Select
                                            placeholder="Model"
                                            value={formData?.model || undefined}
                                            onChange={(key, data: any) => {
                                                form.setFieldsValue({ model: data?.value });
                                            }}
                                            style={{ height: 35, borderRadius: 8, borderColor: '#D7D7D7' }}
                                            allowClear
                                            showSearch
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            className="!bg-red-400 md:w-[180px] w-full"
                                            suffixIcon={<span style={{ color: '#BBBABA' }}>▼</span>}
                                            options={[
                                                { label: 'Model X', value: 'model-x' },
                                                { label: 'Model Y', value: 'model-y' },
                                            ]}
                                        />
                                    );
                                }}
                            </Form.Item>
                            {/* 
                            <Form.Item noStyle shouldUpdate>
                                {() => {
                                    const formData = form.getFieldsValue(true);
                                    return (
                                        <div className="md:w-[200px] w-full text-white">
                                            <label className=" text-sm mb-1 block">Price Range</label>
                                            <Slider
                                                range
                                                min={500}
                                                max={5000}
                                                step={100}
                                                value={formData?.priceRange || [500, 5000]}
                                                onChange={(value) => {
                                                    form.setFieldsValue({ priceRange: value });
                                                }}
                                            />
                                            <div className="flex justify-between  text-xs">
                                                <span>${formData?.priceRange?.[0] || 500}</span>
                                                <span>${formData?.priceRange?.[1] || 5000}</span>
                                            </div>
                                        </div>
                                    );
                                }}
                            </Form.Item> */}
                            {/* Availability Filter */}
                            <Form.Item noStyle shouldUpdate>
                                {() => {
                                    const formData = form.getFieldsValue(true);
                                    return (
                                        <Select
                                            placeholder="Availability"
                                            value={formData?.availability || undefined}
                                            onChange={(key, data: any) => {
                                                form.setFieldsValue({ availability: data?.value });
                                            }}
                                            style={{ height: 35, borderRadius: 8, borderColor: '#D7D7D7' }}
                                            allowClear
                                            showSearch
                                            className="!bg-red-400 md:w-[180px] w-full"
                                            suffixIcon={<span style={{ color: '#BBBABA' }}>▼</span>}
                                            options={[
                                                { label: 'In Stock', value: 'in-stock' },
                                                { label: 'Out of Stock', value: 'out-of-stock' },
                                            ]}
                                        />
                                    );
                                }}
                            </Form.Item>
                        </div>
                    </div>
                </Form>

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
