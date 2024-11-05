import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="px-20 pt-10">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Cart</div>
        <div className="flex text-center gap-2 justify-center">
          <p className="text-2xl mr-3 font-bold mt-1">
            {" "}
            Total: ${" "}
            {cartItems
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </p>
          <button className="flex gap-2  btn btn-outline btn-primary ">
            Sort By Price
            <MdOutlineSettingsInputComposite />
          </button>
          <button className="flex gap-2  btn  bg-purple-600 text-white  ">
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

              {/* Delete Button */}
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
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
