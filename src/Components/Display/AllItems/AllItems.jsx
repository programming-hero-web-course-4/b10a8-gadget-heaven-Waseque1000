import React, { useEffect, useState } from "react";
import Singleitems from "../SingleItems/Singleitems";

const AllItems = () => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3">
      {allItems.map((item) => (
        <Singleitems key={item.id} item={item}></Singleitems>
      ))}
    </div>
  );
};

export default AllItems;
