import React, { useState, useEffect } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProduct = localStorage.getItem(`product_${id}`);
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    } else {
      const productFromData = loaderData.find((item) => item.product_id === id);
      setProduct(productFromData);
      if (productFromData) {
        localStorage.setItem(`product_${id}`, JSON.stringify(productFromData));
      }
    }
  }, [id, loaderData]);

  // Function to add product to cart
  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${product.product_title} has been added to your cart!`);
  };

  return (
    <div className="mt-44">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {product ? (
        <div className="pt-10 pb-10 mx-auto">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row lg:max-w-screen-xl mx-auto">
              <img
                src={product.product_image}
                className="w-full lg:w-80 h-auto rounded-lg shadow-2xl"
                alt={product.product_title}
              />
              <div className="pl-0 lg:pl-10 mt-6 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {product.product_title}
                </h1>
                <p className="mt-2 text-lg">${product.price}</p>
                <p>
                  {product.availability ? (
                    <button className="bg-green-900 px-2 rounded-2xl mb-1 text-white">
                      In Stock
                    </button>
                  ) : (
                    <button className="text-red-500">Out of Stock</button>
                  )}
                </p>
                <p className="py-6 text-base lg:text-lg">
                  {product.description}
                </p>
                <p className="text-lg font-semibold">Specification:</p>
                <ul className="list-disc pl-5 text-base lg:text-lg">
                  {product.Specification.map((spec) => (
                    <li className="my-2" key={spec}>
                      {spec}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Rating:
                  <Rating
                    initialRating={product.rating}
                    readonly
                    emptySymbol={<span className="text-gray-400">☆</span>}
                    fullSymbol={<span className="text-yellow-500">★</span>}
                  />
                </p>
                <div className="flex justify-start items-center mt-6">
                  <button
                    onClick={addToCart}
                    className="flex bg-purple-600 text-white px-4 py-2 rounded-2xl mb-4 sm:mb-0 sm:mr-4"
                  >
                    Add To Cart
                    <FaCartShopping className="text-2xl ml-2" />
                  </button>
                  <button className="sm:ml-3 ml-3 -mt-4 border border-spacing-3 rounded-full">
                    <FaHeart className="text-2xl"></FaHeart>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl">Product not found.</p>
      )}
    </div>
  );
};

export default Details;
