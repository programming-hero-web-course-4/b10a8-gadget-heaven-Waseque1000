import React from "react";
import { FaX, FaXbox } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg   shadow-lg max-w-md w-full z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <MdCancel className="h-10 w-10 text-red-700" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
