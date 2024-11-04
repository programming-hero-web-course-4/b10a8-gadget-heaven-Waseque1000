import React, { useState } from "react";
import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import Allproducts from "../../AllProducts/Allproducts";
import Footer from "../../Footer/Footer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const item = useLoaderData();
  const [cart, setCart] = useState([]);
  //   console.log(cart);
  //   TODO:
  const addToCart = () => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart

    console.log(cart);
  };
  return (
    <div>
      <Hero></Hero>
      <Allproducts cart={cart} addToCart={addToCart}></Allproducts>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
