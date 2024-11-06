// import { Link } from "react-router-dom";

// import { FaCartShopping, FaHeart } from "react-icons/fa6";

// const Header = () => {
//   return (
//     <div className="">
//       <div className="navbar  px-20 bg-purple-400">
//         <div className="navbar-start">
//           <Link className="text-white    text-3xl font-bold">
//             {" "}
//             Gadget Heaven
//           </Link>
//         </div>
//         <div className="navbar-center">
//           <Link className=" mr-5 text-white  " to="/">
//             Home
//           </Link>
//           <Link className="mr-5 text-white" to="/statistic">
//             Statistic
//           </Link>
//           <Link className="mr-4 text-white" to="/dashboard">
//             Dashboard
//           </Link>
//           <Link className="mr-4 text-white" to="/blog">
//             Blog
//           </Link>
//         </div>
//         <div className="px-5 navbar-end ml-30">
//           <div className="indicator">
//             <span className="indicator-item badge  ">0</span>
//             <button className=" px-2 py-1 rounded-2xl">
//               <FaCartShopping className="text-2xl"></FaCartShopping>
//             </button>
//           </div>
//           <div className="indicator">
//             <span className="indicator-item badge  ">0</span>
//             <button className=" px-2 py-1 rounded-2xl">
//               <FaHeart className="text-2xl"></FaHeart>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-400">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-10">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-white   md:text-3xl font-bold">
            Gadget Heaven
          </Link>
        </div>

        {/* Toggle Button for Small Screens */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </button>

        {/* Links and Icons */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-purple-500 md:bg-transparent md:flex md:static md:w-auto`}
        >
          {/* Navbar Links */}
          <div className="flex flex-col md:flex-row md:space-x-1">
            <Link
              className="text-white py-2 px-4 hover:bg-purple-600 md:hover:bg-transparent"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white py-2 px-4 hover:bg-purple-600 md:hover:bg-transparent"
              to="/statistic"
            >
              Statistic
            </Link>
            <Link
              className="text-white py-2 px-4 hover:bg-purple-600 md:hover:bg-transparent"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-white py-2 px-4 hover:bg-purple-600 md:hover:bg-transparent"
              to="/blog"
            >
              Blog
            </Link>
          </div>

          {/* Icons for Cart and Wishlist */}
          <div className="flex justify-center space-x-4 mt-4 md:mt-0 md:ml-6">
            <div className="indicator">
              <span className="indicator-item badge bg-red-500 text-white">
                0
              </span>
              <button className="px-2 py-1 text-white">
                <FaCartShopping className="text-2xl" />
              </button>
            </div>
            <div className="indicator">
              <span className="indicator-item badge bg-red-500 text-white">
                0
              </span>
              <button className="px-2 py-1 text-white">
                <FaHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
