import BTable from "../../../components/BTable";

const TrackMyOrder = () => {
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
          render: (t: any) => t.date_time,
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
          render: (products: any[]) => products.map((p) => p.quantity), 
        },
        {
          title: "Total Price",
          dataIndex: "totalPrice",
          key: "totalPrice",
        },
        {
          title: "Order ID",
          dataIndex: "transaction",
          key: "id",
          render: (transaction: any) => transaction?.id || "N/A", 
        },
        {
            title: "Delivery Date",
            dataIndex: "totalPrice",
            key: "totalPrice",
          },
        {
            title: "Order Status",
            dataIndex: "totalPrice",
            key: "totalPrice",
          },
        {
          title: "Bank Status",
          dataIndex: "transaction",
          key: "bank_status",
          render: (transaction: any) => transaction?.bank_status || "N/A", 
        },
      ];
    return (
      <>
        <h1 className="text-xl font-bold pb-3">Track My Order</h1>
       <BTable
          columns={columns}
          dataSource={[]}
          isBorder={true}
        //   isLoading={isFetching}
        />
      </>
    );
};

export default TrackMyOrder;