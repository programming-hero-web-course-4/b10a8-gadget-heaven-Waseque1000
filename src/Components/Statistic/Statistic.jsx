import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Product Prices</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="product_title"
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
