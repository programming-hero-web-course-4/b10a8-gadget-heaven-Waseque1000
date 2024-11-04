import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Details = ({ item, cart, addToCart }) => {
  const {
    product_title,
    product_image,
    price,
    category,
    description,
    Specification,
  } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex w-[100%] h-[80%]   text-center">
      <div className=" pt-20   ">
        <img
          src={product_image}
          alt={product_title}
          className="mx-auto   mb-4"
        />
      </div>

      <div className="  text-left pt-8 pb-9">
        <h2 className="text-2xl font-bold mb-4">{product_title}</h2>

        <p className="text-lg text-gray-700">Category: {category}</p>
        <p className="text-lg text-gray-700 mb-4">Price: ${price}</p>

        <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {Specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <button
          onClick={() => addToCart(item)} // Add to cart on click
          className="bg-purple-500 flex text-white px-4 py-1 mt-3 rounded-2xl"
        >
          Add To Cart <FaCartShopping className="ml-2 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Details;
