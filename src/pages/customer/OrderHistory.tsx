import dayjs from "dayjs";
import BTable from "../../components/BTable";
import { useGetOrdersQuery } from "../../redux/features/order/orderSlice";

const OrderHistory = () => {
  const { data, isLoading, isFetching } = useGetOrdersQuery(undefined);
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
      render: (t: any) => {
        const date = dayjs(t?.date_time).format("MM-DD-YYYY");
        const time = dayjs(t?.date_time).format("hh:mm:ss A");
        return (
          <div>
            <div className="">{date}</div>
            <div className="text-xs">{time}</div>
          </div>
        );
      },
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
      title: "Method",
      dataIndex: "transaction",
      key: "method",
      render: (transaction: any) => transaction?.method || "N/A", // Handles missing status
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
  ];

  return (
    <>
      <div>
        <h1 className="text-xl font-bold pb-3">Order History</h1>
      </div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <BTable
          columns={columns}
          dataSource={data?.data || []}
          isBorder={true}
          isLoading={isFetching}
        />
      )}
    </>
  );
};

export default OrderHistory;
