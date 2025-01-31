import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, InputNumber, Upload } from "antd";
import { useState } from "react";
import { toast } from "sonner";

const AddProduct = () => {
  const [imageList, setImageList] = useState<any[]>([]);

  // Handle image change
  const handleImageChange = ({ fileList }: any) => {
    setImageList(fileList);
  };

  // Handle form submission
  const onFinish = (values: any) => {
    console.log("Form Values: ", values);
    toast.success("Product added successfully!");

    // Access the image uploaded in the values
    console.log("Uploaded Image: ", values.productImage[0]?.thumbUrl);
  };

  // Normalize file input
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold pb-3">Add Product</h2>

      <Card className="max-w-4xl">
        <Form
          name="addProduct"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          {/* Product Name and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: "Please enter the product name" }]}
              >
                <Input placeholder="Enter product name" />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                label="Brand"
                name="brand"
                rules={[{ required: true, message: "Please enter the brand" }]}
              >
                <Input placeholder="Enter brand name" />
              </Form.Item>
            </div>
          </div>
          {/* Price and Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please enter the price" }]}
              >
                <InputNumber min={0} style={{ width: "100%" }} placeholder="Enter price" />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                label="Model"
                name="model"
                rules={[{ required: true, message: "Please enter the model" }]}
              >
                <Input placeholder="Enter model name" />
              </Form.Item>
            </div>
          </div>

          {/* Stock and Image Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Form.Item
                label="Stock"
                name="stock"
                rules={[{ required: true, message: "Please enter the stock quantity" }]}
              >
                <InputNumber min={0} style={{ width: "100%" }} placeholder="Enter stock quantity" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Stock"
                name="stock"
                rules={[{ required: true, message: "Please enter the stock quantity" }]}
              >
                <InputNumber min={0} style={{ width: "100%" }} placeholder="Enter stock quantity" />
              </Form.Item>
            </div>
          </div>
          {/* Image Upload */}
          <div>
            <div>
              <Form.Item
                label="Product Image"
                name="productImage"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: "Please upload a product image" }]}
              >
                <Upload
                  action="/upload"
                  listType="picture-card"
                  fileList={imageList}
                  onChange={handleImageChange}
                  beforeUpload={() => false} // Prevent auto upload, handle manually
                  maxCount={1} // Allow only 1 image to be uploaded at a time
                >
                  {imageList.length >= 1 ? null : <div className="text-xl"><UploadOutlined /></div>}
                </Upload>
              </Form.Item>
            </div>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddProduct;
