import { DeleteOutlined, EditFilled, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, InputNumber, Modal, Select, Tag, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import BTable from "../../../components/BTable";
import { useAddProductMutation, useGetProductsQuery } from "../../../redux/features/product/productApi";
import { toast } from "sonner";

const ProductManagement = () => {
    const [imageList, setImageList] = useState<any[]>([]);
    const [handleProductAdd, res] = useAddProductMutation();
    // const [handleProductUpdate] = useUpdateProductMutation();
    // const [handleProductDelete] = useDeleteProductMutation();
    const [visible, setVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const { data, refetch, isFetching } = useGetProductsQuery(undefined)
    const handleImageChange = ({ fileList }: any) => {
        if (fileList) {
            setImageList(fileList)
        }
    };

    const onFinish = async (values: any) => {
        const { image, ...payload } = values || {};
        const formData = new FormData();
        formData.append("image", image[0].originFileObj);
        formData.append("data", JSON.stringify(payload));
        if (isEdit) {
            // await handleProductUpdate({ id: currentProduct.key, ...formData });
            toast.success('Product updated successfully!');
        } else {
            await handleProductAdd(formData);
            refetch()
            toast.success('Product added successfully!');
            setVisible(false);
        }
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const brandValue = [
        { value: "Yamaha", label: "Yamaha" },
        { value: "Suzuki", label: "Suzuki" },
        { value: "Honda", label: "Honda" },
        { value: "Bajaj", label: "Bajaj" },
        { value: "Hero", label: "Hero" },
        { value: "Tvs", label: "TVS" },
    ];

    const bikeTypes = [
        { value: "Mountain", label: "Mountain" },
        { value: "Road", label: "Road" },
        { value: "Hybrid", label: "Hybrid" },
        { value: "Electric", label: "Electric" }
    ];

    const handleEdit = (record: any) => {
        setCurrentProduct(record);
        setIsEdit(true);
        setVisible(true);
    };

    const handleDelete = () => {
        Modal.confirm({
            title: 'Are you sure you want to delete this product?',
            content: 'This action cannot be undone',
            onOk: async () => {
                // await handleProductDelete(record.key);
                message.success('Product deleted successfully!');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const columns = [
        {
            title: "SL",
            dataIndex: "serial",
            width: '60px',
            key: "serial",
            render: (text: any, record: any, index: any) => index + 1,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "In Stock",
            dataIndex: "inStock",
            key: "inStock",
            render: (inStock: any) => (inStock ? "Yes" : "No"),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: any) => (
                <Tag color={status === "Approved" ? "green" : "red"}>
                    {status}
                </Tag>
            ),
        },
        {
            title: "Action",
            width: '120px',
            render: (record: any) => (
                <div className="flex justify-center items-center gap-2">
                    <Button size="small" onClick={() => handleEdit(record)}>
                        <EditFilled />
                    </Button>
                    <Button size="small" danger onClick={() => handleDelete(record)}>
                        <DeleteOutlined />
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <div className="px-4 py-2">
            <div className="flex justify-between items-center my-4">
                <div>
                    <h1 className="text-xl font-bold pb-3 text-center">All Products</h1>
                </div>
                <div>
                    <Button icon={<PlusOutlined />} size="middle" type="primary" onClick={() => { setVisible(true); setIsEdit(false); }}>
                        Add Product
                    </Button>
                </div>
            </div>
            <div>
                <BTable columns={columns} isLoading={isFetching} dataSource={data?.data || []} isBorder={true} />
            </div>
            <Modal
                width={650}
                onCancel={() => setVisible(false)}
                open={visible}
                title={isEdit ? "Edit Product" : "Add Product"}
                footer={null}
            >
                <Card className="w-full">
                    <Form name="addProduct" onFinish={onFinish} layout="vertical" initialValues={isEdit ? currentProduct || {} : {}}>
                        {/* Product Name and Brand */}
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-6">
                            <Form.Item
                                label="Product Name"
                                name="name"

                                className="col-span-2!"
                                rules={[
                                    { required: true, message: "Please enter the product name" },
                                ]}
                            >
                                <Input placeholder="Enter product name" />
                            </Form.Item>

                            <Form.Item
                                label="Brand"
                                name="brand"
                                rules={[{ required: true, message: "Please enter the brand" }]}
                            >
                                {/* <Input placeholder="Enter brand name" /> */}
                                <Select placeholder="Select a brand" options={brandValue} />
                            </Form.Item>

                            <Form.Item
                                label="Price"
                                name="price"
                                rules={[{ required: true, message: "Please enter the price" }]}
                            >
                                <InputNumber
                                    min={0}
                                    style={{ width: "100%" }}
                                    placeholder="Enter price"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Category"
                                name="category"
                                rules={[{ required: true, message: "Please enter the model" }]}
                            >

                                <Select placeholder="Select a category" options={bikeTypes} />
                            </Form.Item>

                            <Form.Item
                                label="Quantity"
                                name="quantity"
                                rules={[
                                    { required: true, message: "Please enter the stock quantity" },
                                ]}
                            >
                                <InputNumber
                                    min={0}
                                    style={{ width: "100%" }}
                                    placeholder="Enter stock quantity"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Description"
                                name="description"

                                rules={[
                                    { required: true, message: "Please enter the description" },
                                ]}
                            >
                                <TextArea rows={4} placeholder="Enter description" />
                            </Form.Item>

                            <Form.Item
                                label="Product Image"
                                name="image"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                rules={[
                                    { required: true, message: "Please upload a product image" },
                                ]}
                            >
                                <Upload
                                    action="/upload"
                                    listType="picture-card"
                                    fileList={imageList}
                                    onChange={handleImageChange}
                                    beforeUpload={() => false}
                                    maxCount={1}
                                >
                                    {imageList.length >= 1 ? null : (
                                        <div className="text-xl">
                                            <UploadOutlined />
                                        </div>
                                    )}
                                </Upload>
                            </Form.Item>
                        </div>
                        {/* Submit Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={res.isLoading}>
                                Add Product
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </div>
    );
};

export default ProductManagement;