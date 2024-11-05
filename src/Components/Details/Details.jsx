// import React, { useState, useEffect } from "react";
// import { FaCartShopping } from "react-icons/fa6";
// import { useLoaderData, useParams } from "react-router-dom";

// const Details = () => {
//   const loaderData = useLoaderData();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const savedProduct = localStorage.getItem(`product_${id}`);
//     if (savedProduct) {
//       // Parse and set product from localStorage
//       setProduct(JSON.parse(savedProduct));
//     } else {
//       // Find product in loaderData if not in localStorage
//       const productFromData = loaderData.find((item) => item.product_id === id);
//       setProduct(productFromData);
//       if (productFromData) {
//         // Save to localStorage for future use
//         localStorage.setItem(`product_${id}`, JSON.stringify(productFromData));
//       }
//     }
//   }, [id, loaderData]);

//   return (
//     <div>
//       {product ? (
//         <div className=" pt-10 pb-10  mx-auto">
//           <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//               <img
//                 src={product.product_image}
//                 className="w-80 h-[100%] rounded-lg shadow-2xl"
//               />
//               <div className="pl-10">
//                 <h1 className="text-5xl font-bold">{product.product_title}</h1>
//                 <p className="mt-2">$ {product.price}</p>
//                 <p>
//                   {product.availability == true ? (
//                     <button className="bg-green-900 px-2 rounded-2xl mb-1 text-white">
//                       In Stock
//                     </button>
//                   ) : (
//                     <button>Out of Stock</button>
//                   )}
//                 </p>
//                 <p className="py-6">{product.description}</p>
//                 <p>Specification</p>
//                 <ul>
//                   {product.Specification.map((spec) => (
//                     <li className="my-2" key={spec}>
//                       {spec}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className=" flex bg-purple-600 text-white px-4 py-2 rounded-2xl">
//                   Add To Cart{" "}
//                   <FaCartShopping className="text-2xl ml-2"> </FaCartShopping>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Product not found.</p>
//       )}
//     </div>
//   );
// };

// export default Details;

import React, { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

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
    alert(`${product.product_title} has been added to your cart!`);
  };

  return (
    <div>
      {product ? (
        <div className=" pt-10 pb-10  mx-auto">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={product.product_image}
                className="w-80 h-[100%] rounded-lg shadow-2xl"
                alt={product.product_title}
              />
              <div className="pl-10">
                <h1 className="text-5xl font-bold">{product.product_title}</h1>
                <p className="mt-2">$ {product.price}</p>
                <p>
                  {product.availability ? (
                    <button className="bg-green-900 px-2 rounded-2xl mb-1 text-white">
                      In Stock
                    </button>
                  ) : (
                    <button>Out of Stock</button>
                  )}
                </p>
                <p className="py-6">{product.description}</p>
                <p>Specification</p>
                <ul>
                  {product.Specification.map((spec) => (
                    <li className="my-2" key={spec}>
                      {spec}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={addToCart}
                  className="flex bg-purple-600 text-white px-4 py-2 rounded-2xl"
                >
                  Add To Cart
                  <FaCartShopping className="text-2xl ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Details;
