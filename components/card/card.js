import React, { useState } from "react";
import ReactStars from "react-stars";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import Link from "next/link";


const Card = ({ place }) => {
  const [active, setActive] = useState(true);
  const styling = {
    backgroundImage: `url('https://nomadlist.com/assets/img/places/gran-canaria-canary-islands-spain.jpg')`,
    bacgroundSize: 'contain'
}
  return (
    <div
      className="flex flex-col justify-between items-center w-1/4 p-2.5 rounded border border-black"
      style={styling}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <ReactStars
          count={5}
          value={4}
          size={24}
          edit={false}
          color2={"#ffd700"}
        />

        {active === true ? (
          <IoHeart className="text-red-500 text-xl mt-2" />
        ) : (
          <IoHeartOutline className="text-white text-xl mt-2  " />
        )}
      </div>

      <div className="flex flex-col justify-center items-center my-4">
        <h2 className="font-bold text-2xl mt-4 text-white">Place</h2>
        <h3 className="font-bold text-lg mb-4 text-white">City</h3>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <div className="relative w-8 h-8">
          <img
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>

        <Link href="">
          <a className="flex flex-row justify-between items-center border-b border-white text-white text-xs">
            Detail <MdArrowRightAlt className="mt-1 " />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
