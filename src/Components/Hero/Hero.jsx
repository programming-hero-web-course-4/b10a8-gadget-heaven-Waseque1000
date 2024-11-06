// import React from "react";
// import { Link } from "react-router-dom";
// import Hero2 from "./Hero2";
// import { Helmet } from "react-helmet";

// const Hero = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Gadget Heaven</title>
//         <meta name="description" content="Nested component" />
//       </Helmet>
//       <div className="bg-purple-400 pt-20 pb-52 text-center">
//         <div>
//           <h1 className="text-5xl font-bold text-white text-center ">
//             {" "}
//             Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
//           </h1>
//           <p className="text-white text-center mt-10 pb-10 ">
//             Explore the latest gadgets that will take your experience to the
//             next level. From smart devices to <br /> the coolest accessories, we
//             have it all!
//           </p>
//           <Link>
//             <button className="bg-white mb-12 text-purple-400 px-4 py-2 rounded-2xl">
//               Shop Now
//             </button>
//           </Link>
//         </div>
//       </div>
//       <Hero2></Hero2>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import Hero2 from "./Hero2";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-purple-400 pt-20 pb-32 md:pb-52 text-center">
        <div className="px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with{" "}
            <br className="hidden md:block" />
            Gadget Heaven Accessories
          </h1>
          <p className="text-white mt-6 md:mt-10 pb-8 md:pb-10 text-sm md:text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br className="hidden md:block" />
            the coolest accessories, we have it all!
          </p>
          <Link to="/shop">
            <button className="bg-white text-purple-400 px-4 py-2 rounded-2xl text-sm md:text-base">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Nested Hero2 Component */}
      <Hero2 />
    </div>
  );
};

export default Hero;
