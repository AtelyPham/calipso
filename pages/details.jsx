import React, { useState } from 'react';
import Head from 'next/head';
import data from '../data.json';
import { Modal, Scores, GoogleMaps } from '../components';
import { FcLike } from 'react-icons/fc';
import { FiShare2 } from 'react-icons/fi';
import {
  AiFillStar,
  AiFillDollarCircle,
  AiFillCloud,
  AiFillLike,
} from 'react-icons/ai';
import { Avatar } from 'flowbite-react';

const Details = () => {
  const [isModal, setIsModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (img, index) => {
    setImgSrc(img);
    setCurrentIndex(index);
    setIsModal(true);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newURL = data[0].image;
      setImgSrc(newURL);
      return;
    }
    const newIndex = currentIndex + 1;
    const newURL = data.filter(item => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newURL[0].image;

    setImgSrc(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newURL = data[totalLength - 1].image;
      setImgSrc(newURL);
      return;
    }
    const newIndex = currentIndex - 1;
    const newURL = data.filter(item => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newURL[0].image;

    setImgSrc(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className={isModal ? 'h-screen blur-sm' : 'h-screen'}>
        <Head>
          <title>Details</title>
        </Head>

        <div className="p-16">
          <div className="grid grid-cols-[57rem_auto_19.5rem] gap-5 auto-cols-auto">
            <img
              src={data[0].image}
              className="row-span-2 w-[912px] h-[540px] rounded-3xl shadow-2xl"
            />
            {data.map((items, index) => {
              return (
                <div key={index}>
                  <img
                    id={items.image_lastmod}
                    src={items.image}
                    className="w-[315px] h-[260px] rounded-xl cursor-pointer shadow-2xl z-0 hover:blur-[1px]"
                    onClick={() => handleClick(items.image, index)}
                  />
                  <div className="text-center mt-[-3rem] ml-4 z-10">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      rounded={true}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-24 space-y-4 flex flex-row">
          <div className="space-y-4 my-8">
            <div className="flex flex-row w-[45.5rem] pl-4">
              <div>
                <h2 className="text-3xl font-bold"> Ho Chi Minh </h2>
                <div className="font-thin">Viet Nam</div>
              </div>
              <div className="flex flex-row absolute right-[54rem]">
                <FcLike className="text-3xl " />
                <FiShare2 className="text-3xl " />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillStar
                  color="#FCD34D"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base text-slate-100 font-bold">1</span>
              </div>
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillDollarCircle
                  color="#6EE7B7"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base text-slate-100 font-bold">2</span>
              </div>
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillCloud
                  color="#ffffff"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base text-slate-100 font-bold">3</span>
              </div>
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillLike
                  color="#38BDF8"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base text-slate-100 font-bold">4</span>
              </div>
            </div>
            <div className="pl-4">
              <h2 className="text-2xl font-bold">City Description</h2>
              <span className="font-sans font-thin text-[#9A9A9A] text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                earum vel cumque magni nesciunt quaerat ab quod veritatis
                laudantium, molestias, id, expedita voluptatum. Velit fugiat
                nihil a qui ipsa ex.
              </span>
            </div>
          </div>
          <div className="mx-40">
            <div className="bg-white w-80 h-72 shadow-2xl rounded-lg p-8">
              <span className="text-xl font-semibold font-serif">
                Chat with people here
              </span>
              <hr />
              <div className="mx-16 my-8">
                <Avatar.Group>
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    rounded={true}
                    stacked={true}
                  />
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    rounded={true}
                    stacked={true}
                  />
                </Avatar.Group>
              </div>
              <span className="text-base font-medium font-serif">
                Chat with people here before visiting
              </span>
              <div className="my-4">
                <button className="w-64 h-[2.5rem] bg-blue-700 text-center rounded-3xl pt-0 hover:bg-blue-800">
                  <span className="text-slate-100	font-semibold ">Chat now</span>
                </button>
              </div>
            </div>
            <div className="bg-white w-80 h-36 shadow-2xl rounded-lg p-8 mt-4">
              <span className="text-xl font-semibold font-serif">
                Share your experience
              </span>
              <hr />
              <div className="my-4">
                <button className="w-64 h-[2.5rem] bg-blue-700 text-center rounded-3xl pt-0 hover:bg-blue-800">
                  <span className="text-slate-100	font-semibold ">
                    Share now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Scores />
        <GoogleMaps className="pl-4" />
        <div className="pl-4"></div>
      </div>
      {isModal && (
        <Modal
          clickedImg={imgSrc}
          setIsModal={setIsModal}
          handelRotationRight={handelRotationRight}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
};

export default Details;
