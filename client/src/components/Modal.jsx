import React, { useRef } from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    } 
  };
  return (
    showModal && (
      <div
        ref={modalRef}
        onClick={closeModal}
        className="z-40 fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center  "
      >
        <div className="z-40 relative mx-auto pt-12 xl:max-w-none ">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
