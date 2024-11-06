import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-400">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-10">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-white text-2xl md:text-3xl font-bold">
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
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link className="text-white" to="/">
            Home
          </Link>
          <Link className="text-white" to="/statistic">
            Statistic
          </Link>
          <Link className="text-white" to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-white" to="/blog">
            Blog
          </Link>
        </div>

        {/* Icons for Cart and Wishlist */}
        <div className="hidden md:flex space-x-4 items-center">
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
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-500">
          <nav className="flex flex-col items-start px-4 py-2 space-y-2">
            <Link
              className="text-white w-full py-2"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-white w-full py-2"
              to="/statistic"
              onClick={() => setIsMenuOpen(false)}
            >
              Statistic
            </Link>
            <Link
              className="text-white w-full py-2"
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              className="text-white w-full py-2"
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>

          {/* Icons for Cart and Wishlist on Small Screens */}
          <div className="flex justify-center space-x-4 px-4 py-2">
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
        </div>
      )}
    </header>
  );
};

export default Header;
