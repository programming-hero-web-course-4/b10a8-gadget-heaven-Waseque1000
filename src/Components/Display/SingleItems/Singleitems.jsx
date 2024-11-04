// import { useState } from "react";
// import Details from "../../Details/Details";
// import { Link } from "react-router-dom";

// const Singleitems = ({ item }) => {
//   //   console.log(item);
//   const { product_title, product_image, price, product_id, category } = item;
//   //   console.log(product_image);

//   return (
//     <div className="mb-5">
//       <div className="card w-100 h-[100%] bg-base-100   shadow-xl">
//         <figure className="px-10 pt-10">
//           <img src={product_image} alt="Shoes" />
//         </figure>
//         <div className="card-body items-right ">
//           <h2 className="card-title"> {product_title}</h2>
//           <p> {price}</p>
//           <div className="card-actions ">
//             <Link>
//               <button

//                 className="px-4 py-1 rounded-3xl text-purple-800 outline outline-1 outline-purple-300"
//               >
//                 View Details
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Details item={item}></Details>
//     </div>
//   );
// };

// export default Singleitems;

import { useState } from "react";
import Details from "../../Details/Details";
import { Link } from "react-router-dom";
import Modal from "../../Details/Modal";

const Singleitems = ({ item, cart, addToCart }) => {
  const { product_title, product_image, price, product_id, category } = item;

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mb-5">
      <div className="card w-100 h-[100%] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product_image} alt={product_title} />
        </figure>
        <div className="card-body items-right">
          <h2 className="card-title">{product_title}</h2>
          <p>${price}</p>
          <div className="card-actions">
            <Link>
              <button
                onClick={openModal} // Open modal on click
                className="px-4 py-1 rounded-3xl text-purple-800 outline outline-1 outline-purple-300"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for Details */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Details cart={cart} addToCart={addToCart} item={item}></Details>
      </Modal>
    </div>
  );
};

export default Singleitems;
