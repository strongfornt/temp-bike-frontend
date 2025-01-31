import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, InputNumber, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useAddProductMutation } from "../../redux/features/product/productApi";
// const { Option } = Select;
const AddProduct = () => {
  const [imageList, setImageList] = useState<any[]>([]);
  const [handleProductAdd] = useAddProductMutation();
  // Handle image change
  const handleImageChange = ({ fileList }: any) => {
    setImageList(fileList);
  };

  // Handle form submission
  const onFinish = async (values: any) => {
    const { image, ...payload } = values || {};
    const formData = new FormData();
    formData.append("image", image[0].originFileObj);

    formData.append("data", JSON.stringify(payload));

     await handleProductAdd(formData);

    
  };

  // Normalize file input
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
  return (
    <div className="p-6  flex flex-col justify-center items-center ">
      <h2 className="text-xl font-bold pb-3 text-center">Add Product</h2>

      <Card className="w-full  ">
        <Form
          name="addProduct"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          {/* Product Name and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-6">
            <Form.Item
              label="Product Name"
              name="name"
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
              // className="col-span-2!"

              rules={[
                { required: true, message: "Please enter the description" },
              ]}
            >
              <TextArea placeholder="Enter brand name" />
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
                beforeUpload={() => false} // Prevent auto upload, handle manually
                maxCount={1} // Allow only 1 image to be uploaded at a time
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
