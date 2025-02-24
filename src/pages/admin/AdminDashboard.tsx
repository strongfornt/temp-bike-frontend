import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Spin } from "antd";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import { useGetAllOrdersQuery } from "../../redux/features/order/orderSlice";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

const AdminDashboard = () => {
  const { data: userData1, isLoading: isLoadingUsers } = useGetAllUserQuery(undefined);
  const { data: orderData1, isLoading: isLoadingOrders } = useGetAllOrdersQuery(undefined);
  const { data: productData1, isLoading: isLoadingProducts } = useGetProductsQuery(undefined);
  // Static data for Users, Orders, and Products
  const userData = userData1?.data?.map((user: any) => ({
    month: user.createdAt.substring(0, 7), // assuming createdAt is in ISO 8601 format
    users: userData1.data.length, // this might need to be adjusted based on how you want to count users
  })) || [];

  const orderData = orderData1?.data?.map((order: any) => ({
    month: order.createdAt.substring(0, 7), // assuming createdAt is in ISO 8601 format
    orders: orderData1.data.length, // this might need to be adjusted based on order creation dates
  })) || [];

  const productData = productData1?.data?.map((product: any) => ({
    name: product.category,
    value: product.quantity,
  })) || [];
  const totalQuantity = productData1?.data?.reduce((total: any, bike: any) => total + bike.quantity, 0) || 0;
  const totalOrders = orderData1?.data?.reduce((total: number, order: any) => {
    return total + order?.products?.reduce((subtotal: number, product: any) => subtotal + product.quantity, 0) || 0;
  }, 0);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Colors for pie chart

  if (isLoadingUsers || isLoadingOrders || isLoadingProducts) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Users"
              value={userData1?.data?.length}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3B82F6" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Orders"
              value={totalOrders}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: "#10B981" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Products"
              value={totalQuantity}
              prefix={<ShoppingOutlined />}
              valueStyle={{ color: "#F59E0B" }}
            />
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row gutter={[16, 16]}>
        {/* Users Chart */}
        <Col xs={24} md={12}>
          <Card title="User Growth Over Time">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#3B82F6" name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Orders Chart */}
        <Col xs={24} md={12}>
          <Card title="Order Growth Over Time">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#10B981" name="Orders" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Products Chart */}
        <Col xs={24} md={12}>
          <Card title="Product Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {productData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
