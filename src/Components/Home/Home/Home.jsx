import React from "react";
import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import Allproducts from "../../AllProducts/Allproducts";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Allproducts></Allproducts>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
