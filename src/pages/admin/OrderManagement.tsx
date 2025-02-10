import { Button, DatePicker, Modal, Select, message } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import BTable from "../../components/BTable";
import { useGetAllOrdersQuery } from "../../redux/features/order/orderSlice";

const OrderManagement = () => {
    const { data, isLoading, isFetching } = useGetAllOrdersQuery(undefined);
    const [editingOrder, setEditingOrder] = useState<any>(null);
    const [newDate, setNewDate] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleDateChange = (date: any, dateString: string) => {
        setNewDate(dateString);
    };

    const handleSaveDate = (orderId: string) => {
        if (!newDate) {
            message.error('Please select a date');
            return;
        }
        console.log(isEditMode ? 'Editing' : 'Adding', 'date for order:', 'Date:', newDate);

        message.success(isEditMode ? 'Date updated successfully!' : 'Date added successfully!');
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
            key: 'date_time',
            dataIndex: 'transaction',
            render: (t: any) => t.date_time
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
            dataIndex: "orderStatus",
            key: "orderStatus",
            render: (value: any) => {
                return (
                    <div>
                        <Select
                            className={`${value === "Pending" ? "!text-red-300" : "!text-green-400"}`}
                            defaultValue={value}
                            options={[
                                { label: "Pending", value: "Pending" },
                                { label: "Processing", value: "Processing" },
                                { label: "Shipped", value: "Shipped" },
                                { label: "Delivered", value: "Delivered" },
                            ]}
                        />
                    </div>
                )
            }
        },
        {
            title: "Delivery Date",
            dataIndex: "estimate_delivery_date",
            key: "estimate_delivery_date",
            render: (value: any) => {
                return (
                    <span>{value || 'N/A'}</span>
                )
            }
        },
        {
            title: "Action",
            render: (record: any) => {
                return (
                    <div className="flex items-center gap-2">
                        {
                            record?.estimate_delivery_date ?
                                <Button
                                    size="small"
                                    className='!bg-yellow-400  !text-black'
                                    onClick={() => handleEditDate(record)}
                                >
                                    Edit Date
                                </Button>
                                : <Button
                                    size="small"
                                    className='!bg-green-400 !text-black'
                                    onClick={() => handleAddDate(record)}
                                >
                                    Add Date
                                </Button>
                        }
                    </div>
                )
            }
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
                <>
                    <BTable columns={columns} dataSource={data?.data || []} isBorder={true} isLoading={isFetching} />

                    {/* Modal for adding/editing the date */}
                    <Modal
                        title={`${isEditMode ? 'Edit' : 'Add'} Date for Order`}
                        visible={isModalVisible}
                        onOk={() => handleSaveDate(editingOrder?._id)}
                        onCancel={handleCancel}
                        okText={isEditMode ? "Save" : "Add"}
                        cancelText="Cancel"
                    >
                        <DatePicker
                            className="w-full"
                            value={newDate ? moment(newDate, 'MM-DD-YYYY') : null}
                            onChange={handleDateChange}
                            format="YYYY-MM-DD"
                        />
                    </Modal>
                </>
            )}
        </>
    );
};

export default OrderManagement;
