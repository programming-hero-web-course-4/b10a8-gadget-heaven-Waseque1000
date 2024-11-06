import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../assets/Group.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Function to handle item deletion
  const handleDeleteProducts = (itemToDelete) => {
    const updatedCart = cartItems.filter(
      (item) => item.product_id !== itemToDelete.product_id
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.info(
      `${itemToDelete.product_title} has been removed from your cart.`
    );
  };

  // Function to handle purchase confirmation
  const handlePurchase = () => {
    setCartItems([]); // Clear cart items in state
    localStorage.removeItem("cart"); // Remove cart data from localStorage
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="px-20 pt-10">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Cart</div>
        <div className="flex text-center gap-2 justify-center">
          <p className="text-2xl mr-3 font-bold mt-1">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </p>
          <button className="flex gap-2 btn btn-outline btn-primary">
            Sort By Price
            <MdOutlineSettingsInputComposite />
          </button>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on Purchase click
            className="flex gap-2 btn bg-purple-600 text-white"
          >
            Purchase
          </button>
        </div>
      </div>
      <ToastContainer />
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="p-4 w-full px-10">
            <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-md md:flex-row flex-col">
              {/* Product Image and Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12 md:h-16 md:w-16">
                    <img src={item.product_image} alt={item.product_title} />
                  </div>
                </div>
                <div className="pl10">
                  <div className="font-bold text-lg md:text-xl">
                    {item.product_title}
                  </div>
                  <p>{item.description}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleDeleteProducts(item)}
                className="text-red-500 hover:text-red-600 text-xl mt-4 md:mt-0"
                aria-label="Delete Product"
              >
                <FaTrashAlt className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}

      {/* Modal for Purchase Confirmation */}
      {isModalOpen && (
        <div className="fixed text-center inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="text-center pl-32">
              <img className="text-center" src={img} alt="" />
            </div>
            <h2 className="text-2xl mt-2 font-bold mb-4">
              Payment Successfully
            </h2>
            <hr className="mt-3 mb-3" />
            <p>Thanks For Purchasing</p>
            <p>
              Total{" "}
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}{" "}
            </p>

            <div className="flex justify-end mr-32 gap-4 mt-6">
              <button
                onClick={handlePurchase} // Confirm and clear cart
                className=" px-4 py-2 bg-gray-200 text-black    "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
