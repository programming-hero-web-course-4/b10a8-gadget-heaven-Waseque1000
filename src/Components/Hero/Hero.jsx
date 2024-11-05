import React from "react";
import { Link } from "react-router-dom";
import Hero2 from "./Hero2";

const Hero = () => {
  return (
    <div>
      <div className="bg-purple-400 pt-20 pb-52 text-center">
        <div>
          <h1 className="text-5xl font-bold text-white text-center ">
            {" "}
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-white text-center mt-10 pb-10 ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <Link>
            <button className="bg-white mb-12 text-purple-400 px-4 py-2 rounded-2xl">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <Hero2></Hero2>
    </div>
  );
};

export default Hero;
