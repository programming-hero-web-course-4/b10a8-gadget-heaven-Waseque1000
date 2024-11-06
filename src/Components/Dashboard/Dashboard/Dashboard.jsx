import { Helmet } from "react-helmet";
import Cart from "../../Cart/Cart";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="bg-purple-500 pt-20 pb-22  text-center">
        <div>
          <h1 className="text-3xl text-white font-bold mb-2">Dashboard</h1>
          <p className="m-2 text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div>
            <button className="bg-white mb-12 text-purple-400 px-8 py-2 rounded-2xl">
              Cart
            </button>
            <button className="text-white ml-2 mb-12 bg-purple-400 px-4 py-2 rounded-2xl">
              Wishlist
            </button>{" "}
          </div>
        </div>
      </div>
      <Cart></Cart>
    </div>
  );
};

export default Dashboard;
