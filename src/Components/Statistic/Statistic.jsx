import { Helmet } from "react-helmet";
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
  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>Statistic | Gadget Heaven</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="text-center py-20 bg-purple-500 text-white">
        <h1 className="text-4xl mb-2 font-extrabold">Statistic</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br />
          the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold  my-3 mb-4">Statistic</h2>
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
    </div>
  );
};

export default Statistic;
