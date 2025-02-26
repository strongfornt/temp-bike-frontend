import { Card, Col, Row } from "antd";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const DashboardChart = ({ orders, products }: any) => {

  // Process orders data for Line Chart
  const orderDates = orders.map((order: any) =>
    new Date(order.createdAt).toLocaleDateString()
  );
  const orderCounts = orderDates.reduce((acc: any, date: any) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const lineChartData = {
    labels: Object.keys(orderCounts),
    datasets: [
      {
        label: "Orders Over Time",
        data: Object.values(orderCounts),
        borderColor: "#007bff",
        backgroundColor: "rgba(0,123,255,0.2)",
      },
    ],
  };

  // Process product data for Pie Chart
  const categoryCounts = products.reduce((acc: any, product: any) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        data: Object.values(categoryCounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card className="shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Orders Over Time</h2>
            <div style={{ width: "100%", height: "278px" }}>
            <Line data={lineChartData} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card className="shadow-md rounded-lg ">
            <h2 className="text-xl font-semibold mb-2">Product Distribution</h2>
            <div style={{ width: "100%", height: "278px" }}>
            <Pie 
              data={pieChartData} 
              options={{ 
                responsive: true,  
                maintainAspectRatio: false, 
                plugins: { 
                  tooltip: { 
                    position: "nearest", 
                    bodyFont: { size: 12 }, 
                    padding: 8 
                  } 
                } 
              }} 
            />
          </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardChart;
