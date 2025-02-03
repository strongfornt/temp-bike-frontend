import { Button, Card, Form, Input, InputNumber, Modal, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";

const ProductModal = () => {
    return (
        <Modal
            width={650}
            onCancel={() => {
                setVisible(false)
                setCurrentProduct(null)
                setImageList([])
                setIsEdit(false)
            }}
            onClose={() => {
                setVisible(false)
                setCurrentProduct(null)
                setImageList([])
                setIsEdit(false)
            }}
            open={visible}
            title={isEdit ? "Edit Product" : "Add Product"}
            footer={null}
        >
            <Card className="w-full">
                <Form onFinish={onFinish} layout="vertical" initialValues={isEdit ? currentProduct : null}>
                    {/* Product Name and Brand */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
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
                        {
                            !isEdit &&
                            <Form.Item
                                label="Product Image"
                                name="image"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                rules={[
                                    { required: !isEdit, message: "Please upload a product image" },
                                ]}
                            >
                                <Upload
                                    listType="picture-card"
                                    accept="jpg, png"
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
                        }
                    </div>
                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={res.isLoading} >
                            {isEdit ? "Update Product" : "Add Product"}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Modal>
    );
};

export default ProductModal;