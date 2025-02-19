/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import BTable from "../../../components/BTable";
import { setRefreshObj } from "../../../redux/features/commonRefresh/commonSlice";
import { useGetOrdersQuery } from "../../../redux/features/order/orderSlice";
import { useAppDispatch } from "../../../redux/hook";
import StatusTrackModal from "./StatusTrackModal";
const TrackMyOrder = () => {
  const { data, isLoading, isFetching, refetch } = useGetOrdersQuery(undefined, {
    pollingInterval: 60000,
  });
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
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
      render: (products: any[]) => products.map((p) => p.quantity),
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price: any) => {
        return <span>$ {price}</span>;
      },
    },
    {
      title: "Order ID",
      dataIndex: "transaction",
      key: "id",
      render: (transaction: any) => transaction?.id || "N/A",
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
      title: "Bank Status",
      dataIndex: "transaction",
      key: "bank_status",
      render: (transaction: any) => transaction?.bank_status || "N/A",
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (status: any) => {
        return (
          <>
            <Button
              size="small"
              className="!bg-primary !text-white !px-4"
              // type="primary"
              onClick={() => {
                setSelectedStatus(status);
                setIsModalOpen(true);
              }}
            >
              View
            </Button>
          </>
        );
      },
    },
  ];

  const handleRefresh = () => {
   refetch()
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
        <h1 className="text-xl font-bold pb-3">Track Order</h1>
      
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
      {isModalOpen && (
        <StatusTrackModal
          isModalOpen={isModalOpen}
          status={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default TrackMyOrder;
