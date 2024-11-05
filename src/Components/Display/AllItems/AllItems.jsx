import React, { useEffect, useState } from "react";
import Singleitems from "../SingleItems/Singleitems";
import { useLoaderData } from "react-router-dom";

const AllItems = ({ cart, addToCart }) => {
  const items = useLoaderData({});

  // }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-3">
      {items.map((item) => (
        <Singleitems key={item.product_id} item={item}></Singleitems>
      ))}
    </div>
  );
};

export default AllItems;
