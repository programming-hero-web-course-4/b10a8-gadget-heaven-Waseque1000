import { Helmet } from "react-helmet";
import Cart from "../../Cart/Cart";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="bg-purple-500 pt-20 pb-12 text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
            Dashboard
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-8 px-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-400 px-8 py-2 rounded-2xl mb-4 sm:mb-0">
              Cart
            </button>
            <button className="bg-purple-400 text-white px-4 py-2 rounded-2xl">
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Dashboard;
