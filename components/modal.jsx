import Image from 'next/image';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';

const Modal = ({
  clickedImg,
  setIsModal,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClickClose = () => {
    setIsModal(false);
  };

  return (
    <div>
      <div className="fixed top-0 flex items-center w-full h-screen scale-75 justify-items-center ">
        <Image
          alt="Clicked Image"
          src={clickedImg}
          className="block w-auto h-auto max-w-full mx-auto my-0 bg-contain"
        />
      </div>
      <IoCloseSharp
        className="fixed top-0 right-0 text-4xl"
        onClick={handleClickClose}
      />

      <div onClick={handelRotationRight}>
        <VscArrowRight className="fixed top-0 right-0 text-4xl items-right my-96" />
      </div>

      <div onClick={handelRotationLeft}>
        <VscArrowLeft className="fixed top-0 left-0 text-4xl items-left my-96" />
      </div>
    </div>
  );
};

export default Modal;
