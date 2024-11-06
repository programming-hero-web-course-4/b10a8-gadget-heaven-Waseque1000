// import React from "react";
// import img from "../../assets/banner.jpg";

// const Hero2 = () => {
//   return (
//     <div className="px-52 -mt-40 ">
//       <img className="h-[425px] w-full" src={img} alt="" />
//     </div>
//   );
// };

// export default Hero2;

import React from "react";
import img from "../../assets/banner.jpg";

const Hero2 = () => {
  return (
    <div className="px-4 md:px-20 lg:px-52 -mt-20 md:-mt-32 lg:-mt-40">
      <img
        className="w-full h-64 md:h-80 lg:h-[425px] object-cover rounded-lg"
        src={img}
        alt="Gadget Heaven Banner"
      />
    </div>
  );
};

export default Hero2;
