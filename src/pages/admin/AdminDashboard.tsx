/* eslint-disable react-hooks/exhaustive-deps */
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Spin, Statistic } from "antd";
import { Helmet } from "react-helmet-async";
import { useGetAllOrdersQuery } from "../../redux/features/order/orderSlice";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import DashboardChart from "./DashboardChart";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import PassChangeModal from "../../components/modal/PassChangeModal";
import profile from "./../../assets/images.jpeg"
import { setRefreshObj } from "../../redux/features/commonRefresh/commonSlice";
const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const { data: userData1, isLoading: isLoadingUsers, refetch: userRefetch } =
    useGetAllUserQuery(undefined);
  const { data: orderData1, isLoading: isLoadingOrders, refetch: ordersRefetch } =
    useGetAllOrdersQuery(undefined);
  const { data: productData1, isLoading: isLoadingProducts, refetch: productRefetch } =
    useGetProductsQuery(undefined);




    const handleRefresh = () => {
      userRefetch();
      ordersRefetch();
      productRefetch();
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


  if (isLoadingUsers || isLoadingOrders || isLoadingProducts) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }
   
  return (
  <>
    <div  className="space-y-5 mb-4 ">
      <Helmet>
        <title>Dashboard | SteelRev</title>
      </Helmet>
      <div className="bg-white rounded-2xl w-full ">
          <img
            alt="profile cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWumRdY_Qm3mPwyVFyyunAlNqGI721bc3Ftw&s"
            className="w-full mb-4 rounded-t-lg h-36 bg-cover"
          />
          <div className="flex gap-1 flex-col items-center justify-center p-4 -mt-20 text-sm">
            <img
              alt="profile"
              src={profile}
              className="mx-auto object-cover rounded-full h-28 w-28 border-4 border-white"
            />
           <div  className="text-center mt-2">
           <span className="font-medium text-black ">
              Name: <span className="font-medium" >{currentUser?.name || "Unknown"}</span>
            </span>
            <p className="font-medium text-black">
              Email: {currentUser?.email || "Not Available"}
            </p>
           </div>
            {/* <p className="font-bold text-black">Address: {userDb?.address || 'Not Provided'}</p> */}
            <Button
              // disabled
              type="primary"
              className="mt-4"
              onClick={() => setIsModalOpen(true)}
            >
              Change Password
            </Button>
          </div>
        </div>
      {/* Stats Cards */}
      <Row gutter={[20, 20]} className="">
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Users"
              value={userData1?.data?.length || 0}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3B82F6" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Orders"
              value={orderData1?.data?.length || 0}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: "#10B981" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Products"
              value={productData1?.data?.length || 0}
              prefix={<ShoppingOutlined />}
              valueStyle={{ color: "#F59E0B" }}
            />
          </Card>
        </Col>
      </Row>
      
    <DashboardChart orders={orderData1?.data} products={productData1?.data} />
    </div>

    
    <PassChangeModal
        email={currentUser?.email}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
  </>
  );
};

export default AdminDashboard;
