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
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Status",
            dataIndex: "isBlocked",
            key: "isBlocked",
        },
    ]
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