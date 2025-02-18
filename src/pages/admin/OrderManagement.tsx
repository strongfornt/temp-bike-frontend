import { Button, DatePicker, Dropdown, Modal } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import BTable from "../../components/BTable";
import {
  useGetAllOrdersQuery,
  useUpdateDeliveryDateMutation,
  useUpdateOrderStatusMutation,
} from "../../redux/features/order/orderSlice";
import dayjs from "dayjs";

const OrderManagement = () => {
  const { data, isLoading, isFetching } = useGetAllOrdersQuery(undefined);
  const [editingOrder, setEditingOrder] = useState<any>(null);
  const [newDate, setNewDate] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  // const [] = useUpdateDeliveryDateQuery()
  const [handleUpdate, res] = useUpdateOrderStatusMutation();
  const [handleUpdateDelivery] = useUpdateDeliveryDateMutation();
  const handleSaveDate = async (orderId: string) => {
    if (!newDate) {
      toast.error("Please select a date");
      return;
    }
    const res = await handleUpdateDelivery({
      orderId,
      estimate_delivery_date: newDate,
    });
    if (res.error) {
      return toast.error(
        res.error?.data?.message || "An error occur. Please try again!"
      );
    }
    toast.success(
      isEditMode ? "Date updated successfully!" : "Date added successfully!"
    );
    setNewDate(null);
    setIsModalVisible(false);
  };

  const handleEditDate = (order: any) => {
    setEditingOrder(order);
    setNewDate(order?.estimate_delivery_date || null);
    setIsEditMode(true);
    setIsModalVisible(true);
  };

  const handleAddDate = (order: any) => {
    setEditingOrder(order);
    setNewDate(null);
    setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewDate(null);
  };
  const onMenuClick: any = async (data: any) => {
    const res = await handleUpdate(data);
    if (res.error) {
      return toast.error(
        res.error?.data?.message || "An error occur. Please try again!"
      );
    }
    toast.success(res.data?.message);
  };

  const items = [
    {
      key: "Pending",
      label: "Pending",
    },
    {
      key: "Processing",
      label: "Processing",
    },
    {
      key: "Shipped",
      label: "Shipped",
    },
    {
      key: "Delivered",
      label: "Delivered",
    },
  ];
  const columns = [
    {
      title: "SL",
      key: "sl",
      width: "80px",
      align: "center",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Date",
      key: "date_time",
      dataIndex: "transaction",
      // render: (t: any) => t.date_time
      render: (t: any) => {
        const date = dayjs(t?.value).format("MM-DD-YYYY");
        const time = dayjs(t?.value).format("hh:mm:ss A");
        return (
          <div>
            <div>{date}</div>
            <div className="text-xs">{time}</div>
          </div>
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "products",
      key: "products",
      render: (products: any[]) => products.map((p) => p.name).join(", "),
    },
    {
      title: "Quantity",
      dataIndex: "products",
      key: "quantity",
      render: (products: any[]) => products.map((p) => p.quantity),
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Method",
      dataIndex: "transaction",
      key: "method",
      render: (transaction: any) => transaction?.method || "N/A",
    },
    {
      title: "Transaction ID",
      dataIndex: "transaction",
      key: "id",
      render: (transaction: any) => transaction?.id || "N/A", // Handles missing status
    },
    {
      title: "Bank Status",
      dataIndex: "transaction",
      key: "bank_status",
      render: (transaction: any) => transaction?.bank_status || "N/A", // Handles missing status
    },
    {
      title: "Order Status",
      render: (record: any) => {
        return (
          <div>
            <Dropdown.Button
              disabled={record?.orderStatus === "Delivered"}
              size="small"
              menu={{
                items,
                onClick: (e) =>
                  onMenuClick({ key: e.key, orderId: record?._id }),
              }}
            >
              {record?.orderStatus}
            </Dropdown.Button>
          </div>
        );
      },
    },
    {
      title: "Delivery Date",
      dataIndex: "estimate_delivery_date",
      key: "estimate_delivery_date",
      render: (value: any) => {
        return <span>{value || "N/A"}</span>;
      },
    },
    {
      title: "Action",
      render: (record: any) => {
        return (
          <div className="flex items-center gap-2">
            {record?.estimate_delivery_date ? (
              <Button
                size="small"
                className="!bg-secondary  !text-white !px-4"
                onClick={() => handleEditDate(record)}
              >
                Edit Date
              </Button>
            ) : (
              <Button
                size="small"
                className="!bg-primary !text-white !px-4"
                onClick={() => handleAddDate(record)}
              >
                Add Date
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-xl font-bold pb-3">Order Management</h1>
      </div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <BTable
          columns={columns}
          dataSource={data?.data || []}
          isBorder={true}
          isLoading={isFetching || res.isLoading}
        />
      )}
      <Modal
        title={`${isEditMode ? "Edit" : "Add"} Date for Order`}
        visible={isModalVisible}
        onOk={() => handleSaveDate(editingOrder?._id)}
        onCancel={handleCancel}
        okText={isEditMode ? "Update" : "Add"}
        cancelText="Cancel"
      >
        <DatePicker
          className="w-full"
          value={newDate ? dayjs(newDate, "MM-DD-YYYY") : null}
          onChange={(value) => {
            if (value) {
              const date = value.format("MM-DD-YYYY");
              setNewDate(date);
            } else {
              setNewDate(null);
            }
          }}
          format="MM-DD-YYYY"
          allowClear={true}
        />
      </Modal>
    </>
  );
};

export default OrderManagement;
