import React from "react";

const Singleitems = ({ item }) => {
  console.log(item);
  const { product_title, product_image, price, category } = item;
  console.log(product_image);
  return (
    <div className="mb-5">
      <div className="card bg-base-100   shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {product_title}</h2>
          <p> {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleitems;
