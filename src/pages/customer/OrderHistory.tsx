import BTable from "../../components/BTable";
import { useGetOrdersQuery } from "../../redux/features/order/orderSlice";

const OrderHistory = () => {
    const { data, isLoading, isFetching } = useGetOrdersQuery(undefined)
    const columns = [
        {
            title: "SL",
            key: "sl",
            width: "80px",
            align: "center",
            render: (_: any, __: any, index: number) => index + 1,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Product Name",
            dataIndex: "products",
            key: "products",
            render: (products: any[]) => products.map((p) => p.name).join(", "), // Handling multiple products
        },
        {
            title: "Quantity",
            dataIndex: "products",
            key: "quantity",
            render: (products: any[]) => products.map((p) => p.quantity), // Handling multiple products
        },
        {
            title: "Total Price",
            dataIndex: "totalPrice",
            key: "totalPrice",
        },
        {
            title: "Transaction ID",
            dataIndex: "transaction",
            key: "id",
            render: (transaction: any) => transaction?.id || "N/A", // Handles missing status
        },
        {
            title: "Status",
            dataIndex: "transaction",
            key: "transactionStatus",
            render: (transaction: any) => transaction?.transactionStatus || "N/A", // Handles missing status
        },
    ];

    return (
        <>
            <div>
                <h1 className="text-xl font-bold pb-3">Order History</h1>
            </div>
            {isLoading ? (
                <div>Loading....</div>
            ) : (
                <BTable columns={columns} dataSource={data?.data || []} isBorder={true} isLoading={isFetching} />
            )}
        </>
    );
};

export default OrderHistory;