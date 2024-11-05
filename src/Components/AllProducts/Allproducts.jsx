import { Link } from "react-router-dom";
import AllItems from "../Display/AllItems/AllItems";

const Allproducts = () => {
  return (
    <div>
      <div>
        <h1 className="text-center m-10 text-3xl ">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex flex-1 ">
        {/* TODO: catagory  */}
        <div className="w-1/5">
          <div className="flex bg-white text-black flex-col ml-10 mt-10">
            <Link className="mt-2  text-1xl p-3 active:bg-blue-400 rounded-2xl ">
              All Product
            </Link>
            <Link className="mt-2 text-1xl p-3 active:bg-blue-400 rounded-2xl">
              Laptops
            </Link>
            <Link className="mt-2 text-1xl p-3 active:bg-blue-400 rounded-2xl">
              Mobile
            </Link>
            <Link className="mt-2 text-1xl p-3 active:bg-blue-400 rounded-2xl">
              Smart Watch
            </Link>
            <Link className="mt-2 text-1xl p-3 active:bg-blue-400 rounded-2xl">
              MacBook
            </Link>
            <Link className="mt-2 text-1xl p-3 active:bg-blue-400 rounded-2xl">
              Iphone
            </Link>
          </div>
        </div>

        {/* TODO: */}
        <div className="w-4/5">
          <AllItems></AllItems>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
