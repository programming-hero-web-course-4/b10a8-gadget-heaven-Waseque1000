import React from "react";

const Footer = () => {
  return (
    <div className="py-10 px-4 bg-gray-100">
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          Gadget Heaven
        </h1>
        <p className="text-center mt-3 text-sm md:text-base">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around text-center mt-10 mx-auto gap-8 md:gap-0">
        <div>
          <p className="font-bold mb-2">Services</p>
          <p>Product Support</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div>
          <p className="font-bold mb-2">Company</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <p className="font-bold mb-2">Legal</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
      <p className="mt-4  text-center text-blue-400">
        Copyright &copy; 2023 || Waseque{" "}
      </p>
    </div>
  );
};

export default Footer;
