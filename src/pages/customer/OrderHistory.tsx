/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BTable from "../../components/BTable/BTable";
import { SkeletonTable } from "../../components/Skeleton/SkeletonTable";
import { setRefreshObj } from "../../redux/features/commonRefresh/commonSlice";
import { useGetOrdersQuery } from "../../redux/features/order/orderSlice";
import { useAppDispatch } from "../../redux/hook";
import BPagination from "../../shared/Pagination/BPagination";

const OrderHistory = () => {
   const [params, setParams] = useState<{ limit: number; page: number }>({
      limit: 10,
      page: 1,
    });
  const { data, isLoading, isFetching, refetch } = useGetOrdersQuery(params, {
    pollingInterval:120000 
  });
  
  const dispatch = useAppDispatch()
  const columns = [
    {
      title: "SL",
      key: "sl",
      width: "50px",
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
     <Helmet>
            <title>Order History | SteelRev</title>
          </Helmet>
      <div>
        <h1 className="text-xl font-bold pb-3">Order History</h1>
      </div>
      {isLoading ? (
        <SkeletonTable cols={10} rows={8} />
      ) : (
        <>
           <BTable
          columns={columns}
          dataSource={data?.data || []}
          isBorder={true}
          isLoading={isFetching}
          scroll={{ x: 1000, y: 440 }}
        />
        <BPagination params={params} setParams={setParams} totalCount={data?.totalCount}  />
        </>
      )}
    </>
  );
};

export default OrderHistory;
