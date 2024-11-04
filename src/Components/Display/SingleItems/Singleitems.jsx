import { useState } from "react";
import Details from "../../Details/Details";
import { Link } from "react-router-dom";

const Singleitems = ({ item }) => {
  //   console.log(item);
  const { product_title, product_image, price, product_id, category } = item;
  //   console.log(product_image);

  const showModal = (item) => {
    console.log(item);
  };

  return (
    <div className="mb-5">
      <div className="card w-100 h-[100%] bg-base-100   shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body items-right ">
          <h2 className="card-title"> {product_title}</h2>
          <p> {price}</p>
          <div className="card-actions ">
            <Link>
              <button
                onClick={() => showModal(item)}
                className="px-4 py-1 rounded-3xl text-purple-800 outline outline-1 outline-purple-300"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Details item={item}></Details>
    </div>
  );
};

export default Singleitems;
