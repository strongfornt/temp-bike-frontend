/* eslint-disable react-hooks/exhaustive-deps */
import {
  DeleteOutlined,
  EditFilled,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Upload
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BTable from "../../../components/BTable/BTable";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../../redux/features/product/productApi";
import BPagination from "../../../shared/Pagination/BPagination";
import { setRefreshObj } from "../../../redux/features/commonRefresh/commonSlice";
import { useAppDispatch } from "../../../redux/hook";
import { SkeletonTable } from "../../../components/Skeleton/SkeletonTable";

const ProductManagement = () => {
  const [form] = Form.useForm();
  const [imageList, setImageList] = useState<any[]>([]);
  const [handleProductAdd, { isLoading: isAdding }] = useAddProductMutation();
  const [handleProductUpdate] = useUpdateProductMutation();
  const [handleProductDelete] = useDeleteProductMutation();
  const [visible, setVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any | null>(null);
  const [params, setParams] = useState<{ limit: number, page: number }>({ limit: 10, page: 1 })
  const [isEdit, setIsEdit] = useState(false);
  const { data, isLoading, isFetching, refetch } = useGetProductsQuery(params);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isEdit && currentProduct) {
      form.setFieldsValue(currentProduct);
    } else {
      form.resetFields();
    }
  }, [isEdit, currentProduct, form]);

  const handleImageChange = ({ fileList }: any) => {
    setImageList(fileList);
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = async (values: any) => {
    const { image, ...payload } = values || {};
    if (isEdit) {
      const formData = new FormData();
      formData.append("data", JSON.stringify(payload));
      try {
        await handleProductUpdate({ formData, id: currentProduct?._id });
        toast.success("Product updated successfully!");
        setVisible(false);
      } catch (error: any) {
        toast.error(error?.message || "An error occurred");
      }
    } else {
      const formData = new FormData();
      if (image && image.length > 0) {
        formData.append("image", image[0].originFileObj);
      }
      formData.append("data", JSON.stringify(payload));
      try {
        await handleProductAdd(formData);
        toast.success("Product added successfully!");
        setVisible(false);
        form.resetFields();
      } catch (error: any) {
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handleEdit = (record: any) => {
    setIsEdit(true);
    setCurrentProduct(record);
    setVisible(true);
    setImageList([]);
  };

  const handleDelete = (record: any) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      content: "This action cannot be undone",
      onOk: async () => {
        try {
          const res = await handleProductDelete({ id: record?._id });
          toast.success(res?.data?.message);
        } catch (error: any) {
          toast.error(error?.message || "Something went wrong");
        }
      },
      onCancel: () => toast.error("Cancel operation"),
    });
  };

  const columns = [
    {
      title: "SL",
      dataIndex: "serial",
      key: "serial",
      align: "center",
      width: '60px',
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Name",
      key: "name",
      render: (record: any) => (
        <div className="flex items-center gap-2">
          <img className="size-8 rounded-lg" src={record?.image} alt="" />
          <h1>{record?.name}</h1>
        </div>
      ),
    },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      render: (inStock: boolean) => (inStock ? "Yes" : "No"),
    },
    {
      title: "Action",
      key: "action",
      width: '120px',
      render: (record: any) => (
        <div className="flex justify-start items-center gap-2">
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


  const handleRefresh = () => {
    refetch();
  };
  useEffect(() => {
    dispatch(
      setRefreshObj({
        CB: () => {
          handleRefresh();
        },
      })
    );
    return () => {
      dispatch(setRefreshObj({}));
    };
  }, []);

  return (
    <>
      <div className="px-4 py-2">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-xl font-bold pb-3">All Products</h1>
          <Button
            icon={<PlusOutlined />}
            size="middle"
            type="primary"
            onClick={() => {
              setVisible(true);
              setIsEdit(false);
              setImageList([]);
            }}
          >
            Add Product
          </Button>
        </div>
        {
          isLoading ? <SkeletonTable cols={10} rows={6} /> : <BTable
            columns={columns}
            isLoading={isFetching}
            dataSource={data?.data || []}
            isBorder={true}
            scroll={{ x: 1000, y: 440 }}
          />
        }
        <BPagination params={params} setParams={setParams} totalCount={data?.totalCount} />
      </div>

      <Modal
        width={650}
        open={visible}
        title={isEdit ? "Edit Product" : "Add Product"}
        footer={null}
        onCancel={() => {
          setVisible(false);
          setCurrentProduct(null);
          setImageList([]);
          setIsEdit(false);
          form.resetFields();
        }}
      >
        <Card className="w-full">
          <Form form={form} onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Form.Item
                label="Product Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter the product name" },
                ]}
                className="col-span-2"
              >
                <Input placeholder="Enter product name" />
              </Form.Item>

              <Form.Item
                label="Brand"
                name="brand"
                rules={[{ required: true, message: "Please enter the brand" }]}
              >
                <Select
                  placeholder="Select a brand"
                  options={[
                    { value: "Yamaha", label: "Yamaha" },
                    { value: "Suzuki", label: "Suzuki" },
                    { value: "Honda", label: "Honda" },
                    { value: "Bajaj", label: "Bajaj" },
                    { value: "Hero", label: "Hero" },
                    { value: "Tvs", label: "TVS" },
                  ]}
                />
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
                <Select
                  placeholder="Select a category"
                  options={[
                    { value: "Mountain", label: "Mountain" },
                    { value: "Road", label: "Road" },
                    { value: "Hybrid", label: "Hybrid" },
                    { value: "Electric", label: "Electric" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Please enter the stock quantity",
                  },
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

              {!isEdit && (
                <Form.Item
                  label="Product Image"
                  name="image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: !isEdit,
                      message: "Please upload a product image",
                    },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    accept="image/*"
                    fileList={imageList}
                    onChange={handleImageChange}
                    beforeUpload={() => false}
                    maxCount={1}
                  >
                    {imageList.length < 1 && <UploadOutlined />}
                  </Upload>
                </Form.Item>
              )}
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isAdding}>
                {isEdit ? "Update Product" : "Add Product"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </>
  );
};

export default ProductManagement;
