import { Link } from "react-router-dom";

import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="">
      <div className="navbar  px-20 bg-purple-400">
        <div className="navbar-start">
          <Link className="text-white    text-3xl font-bold">
            {" "}
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center">
          <Link className=" mr-5 text-white  " to="/">
            Home
          </Link>
          <Link className="mr-5 text-white" to="/statistic">
            Statistic
          </Link>
          <Link className="mr-4 text-white" to="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-4 text-white" to="/blog">
            Blog
          </Link>
        </div>
        <div className="px-5 navbar-end ml-30">
          <div className="indicator">
            <span className="indicator-item badge  ">0</span>
            <button className=" px-2 py-1 rounded-2xl">
              <FaCartShopping className="text-2xl"></FaCartShopping>
            </button>
          </div>
          <div className="indicator">
            <span className="indicator-item badge  ">0</span>
            <button className=" px-2 py-1 rounded-2xl">
              <FaHeart className="text-2xl"></FaHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
