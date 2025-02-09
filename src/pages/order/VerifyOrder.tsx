import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { useVerifyOrderQuery } from "../../redux/features/order/orderSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

export default function OrderVerification() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser)
  const { isLoading, data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });
  const orderData = data?.data?.[0];
  if (orderData?.sp_message === "Success") {
    dispatch(clearCart());
  }
  return isLoading ? (
   <div className="text-white text-center ">loading...</div>
  ) : (
    <div className="max-w-7xl mx-auto py-10 px-6  text-white rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center ">Order Verification</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-white">
          <h2 className="text-xl font-semibold mb-4 text-primary">Order Details</h2>
          <p><strong>Order ID:</strong> {orderData?.order_id}</p>
          <p><strong>Amount:</strong> {orderData?.currency} {orderData?.amount?.toFixed(2)}</p>
          <p><strong>Status:</strong>
            {
              orderData?.sp_message == "Success" ? <><CheckCircleOutlined className="text-lg !text-green-400 ml-1" />
                <span> Success</span></> : <><ExclamationCircleOutlined className="text-lg !text-red-400 ml-1" />
                <span> Failed</span></>
            }
          </p>
          <p><strong>Date:</strong> {new Date(orderData?.date_time)?.toLocaleString()}</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-white">
          <h2 className="text-xl font-semibold mb-4 text-primary">Payment Information</h2>
          <p><strong>Method:</strong> {orderData?.method}</p>
          <p><strong>Transaction ID:</strong> {orderData?.bank_trx_id}</p>
          <p><strong>Invoice No:</strong> {orderData?.invoice_no}</p>
          <p><strong>SP Code:</strong> {orderData?.sp_code}</p>
          <p><strong>SP Message:</strong> {orderData?.sp_message}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-white">
          <h2 className="text-xl font-semibold mb-4 text-primary">Customer Information</h2>
          <p><strong>Name:</strong> {orderData?.name}</p>
          <p><strong>Email:</strong> {orderData?.email}</p>
          <p><strong>Phone:</strong> {orderData?.phone_no}</p>
          <p><strong>Address:</strong> {orderData?.address}</p>
          <p><strong>City:</strong> {orderData?.city}</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-white text-center">
          <h2 className="text-xl font-semibold mb-4 text-primary">Verification Status</h2>
          {orderData?.bank_status === "Success" ? (
            <div className="flex items-center justify-center gap-3 text-green-400 text-xl">
              <CheckCircleOutlined className="text-3xl" />
              <span>Verified</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 text-yellow-400 text-xl">
              <ExclamationCircleOutlined className="text-3xl" />
              <span>Not Verified</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to={`/${user?.role}/order-history`}>
          <Button type="primary" size="large" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">View Orders</Button>
        </Link>
      </div>
    </div>
  );
}