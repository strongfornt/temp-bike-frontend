/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

const AllProducts = () => {
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const limit = 6;
  const { data, isLoading } = useGetProductsQuery({ ...filter, limit, page });
  const products = data?.data || [];
  const [form] = Form.useForm();
  const { ref: loadMoreRef, inView } = useInView({ threshold: 0.1 });

  // Append new products when data updates
  useEffect(() => {
    if (data) {
      if (products.length > 0) {
        setAllProducts((prev) =>
          page === 1 ? products : [...new Set([...prev, ...products])]
        );
      }
      // Ensure `hasMore` updates correctly
      if (products.length < limit) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
  }, [data, page]);

  useEffect(() => {
    if (inView && hasMore && !isLoading && products.length === limit) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore, isLoading]);

  const handleFilter = () => {
    const filterData = form.getFieldsValue(true);
    setFilter(filterData);
    setPage(1);
    setAllProducts([]);
    setHasMore(true);
  };

  const handleSearch = (event: any) => {
    form.setFieldsValue({ search: event.target.value || undefined });
    setTimeout(() => {
      handleFilter();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>All Products | SteelRev</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-12  px-5 text-white">
        {/* Filter Section */}
        <div className="rounded-lg shadow">
          <Form
            form={form}
            onValuesChange={handleFilter}
            className="my-4 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-start"
          >
            <div>
              <Form.Item noStyle shouldUpdate>
                {() => {
                  const formData = form.getFieldsValue(true);
                  return (
                    <Input
                      placeholder="Search..."
                      value={formData?.search || ""}
                      allowClear
                      onChange={(event) => handleSearch(event)}
                      className="w-full  md:w-[180px] py-[6.1px] [&_.ant-input-clear-icon]:!text-white !bg-transparent !text-white placeholder:!text-white"
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
                        placeholder="Select Brand"
                        value={formData?.brand || undefined}
                        onChange={(value) => {
                          form.setFieldsValue({ brand: value || undefined });
                          handleFilter();
                        }}
                        allowClear
                        showSearch
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        suffixIcon={<span style={{ color: "#BBBABA" }}>▼</span>}
                        options={[
                          { label: "Yamaha", value: "Yamaha" },
                          { label: "Suzuki", value: "Suzuki" },
                          { label: "Honda", value: "Honda" },
                          { label: "Bajaj", value: "Bajaj" },
                          { label: "Hero", value: "Hero" },
                          { label: "TVS", value: "TVS" },
                        ]}
                        className="w-full md:w-[180px] py-[6.1px] filter"
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
                        placeholder="Select Category"
                        value={formData?.category || undefined}
                        onChange={(value) => {
                          form.setFieldsValue({ category: value || undefined });
                          handleFilter();
                        }}
                        allowClear
                        showSearch
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        className="md:w-[180px] w-full filter"
                        suffixIcon={<span style={{ color: "#BBBABA" }}>▼</span>}
                        options={[
                          { label: "Mountain", value: "Mountain" },
                          { label: "Road", value: "Road" },
                          { label: "Electric", value: "Electric" },
                        ]}
                      />
                    );
                  }}
                </Form.Item>

                {/* Price Range Filter */}
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    const formData = form.getFieldsValue(true);
                    return (
                      <Select
                        placeholder="Select Price Range"
                        value={formData?.priceRange || undefined}
                        onChange={(value) => {
                          if (value) {
                            const [minPrice, maxPrice] = value
                              .split("-")
                              .map(Number);
                            form.setFieldsValue({ minPrice, maxPrice });
                          } else {
                            form.setFieldsValue({
                              minPrice: undefined,
                              maxPrice: undefined,
                            });
                          }
                          handleFilter();
                        }}
                        allowClear
                        className="md:w-[180px] w-full filter"
                        suffixIcon={<span style={{ color: "#BBBABA" }}>▼</span>}
                        options={[
                          { label: "Below $1000", value: "0-1000" },
                          { label: "$1000 - $3000", value: "1000-3000" },
                          {
                            label: "Above $3000",
                            value: "3000-50000000000000000",
                          },
                        ]}
                      />
                    );
                  }}
                </Form.Item>

              {/* Availability Filter */}
              <Form.Item noStyle shouldUpdate>
                {() => {
                  const formData = form.getFieldsValue(true);
                  return (
                    <Select
                      placeholder="Select Availability"
                      value={
                        formData?.inStock !== undefined
                          ? formData.inStock
                          : undefined
                      }
                      onChange={(value) => {
                        form.setFieldsValue({
                          inStock: value !== undefined ? value : undefined,
                        });
                        handleFilter();
                      }}
                      allowClear
                      showSearch
                      className="md:w-[180px] w-full filter"
                      suffixIcon={<span style={{ color: "#BBBABA" }}>▼</span>}
                      options={[
                        { label: "In Stock", value: true },
                        { label: "Out of Stock", value: false },
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
      <>
        {isLoading && page === 1 ? (
          <div>Loading...</div>
        ) : allProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {allProducts.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            {hasMore && (
              <div ref={loadMoreRef} className="w-full flex justify-center py-4">
                <Spin />
              </div>
            )}
          </>
        ) : (
          <div>No products found.</div>
        )}
      </>
    </div>
    </>
  );
};

export default AllProducts;
