import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch data and store in state
  useEffect(() => {
    fetch("data.json") // Replace with your endpoint or data source
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter products based on category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, selectedCategory]);

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.product_id}>
            <h3>{product.product_title}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.product_image} alt={product.product_title} />
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

export default Products;
