import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="p-4 w-full   px-10">
            <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-md md:flex-row flex-col">
              {/* Player Image and Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12 md:h-16 md:w-16">
                    <img src={item.product_image}></img>
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
                // onClick={() => handleDeletePlayers(player)}
                className="text-red-500 hover:text-red-600 text-xl mt-4 md:mt-0"
                aria-label="Delete Player"
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
