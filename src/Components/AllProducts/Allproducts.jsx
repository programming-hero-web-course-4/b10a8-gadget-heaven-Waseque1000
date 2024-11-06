import { Link } from "react-router-dom";
import AllItems from "../Display/AllItems/AllItems";

const Allproducts = () => {
  return (
    <div className="p-4 lg:p-10">
      <h1 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar for Categories */}
        <div className="w-full lg:w-1/5 bg-white text-black p-4 rounded-lg shadow-md">
          <div className="flex flex-col space-y-2">
            <Link className="p-3 text-lg hover:bg-blue-400 rounded-2xl text-center">
              <button>All Products</button>
            </Link>
            <Link className="p-3 text-lg hover:bg-blue-400 rounded-2xl text-center">
              <button>Laptops</button>
            </Link>
            <Link className="p-3 text-lg hover:bg-blue-400 rounded-2xl text-center">
              Mobile
            </Link>
            <Link className="p-3 text-lg hover:bg-blue-400 rounded-2xl text-center">
              Smart Watch
            </Link>
            <Link className="p-3 text-lg hover:bg-blue-400 rounded-2xl text-center">
              MacBook
            </Link>
            <Link className="p-3 text-lg hover:bg-blue-400 rounded-2xl text-center">
              iPhone
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-4/5">
          <AllItems />
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
