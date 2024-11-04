import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="text-center text-4xl  font-bold">Gadget Heaven</h1>
        <p className="text-center mt-3">
          Leading the way in cuttin-edge technology and innivation
        </p>
      </div>
      <div className="flex justify-around  text-center mt-20 mb-20 mx-auto">
        <div>
          <p className="font-bold mb-2 ">Services</p>
          <p>Product Support </p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div>
          <p className="font-bold  mb-2">Company</p>
          <p>About Us </p>
          <p> Carers</p>
          <p> Contact</p>
        </div>
        <div>
          <p className="font-bold  mb-2">legal</p>
          <p> Terms & Conditions</p>
          <p> Privacy Policy</p>
          <p> Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
