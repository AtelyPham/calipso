/* eslint-disable @next/next/no-img-element */
import camelcaseKeys from 'camelcase-keys';
import classNames from 'classnames';
import { Avatar } from 'flowbite-react';
import Head from 'next/head';
import { useState } from 'react';
import {
  AiFillCloud,
  AiFillDollarCircle,
  AiFillLike,
  AiFillStar,
} from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { FiShare2 } from 'react-icons/fi';
import { Footer, GoogleMaps, Header, Modal, Scores } from '../../components';
import dataJson from '../../public/data.json';
import usersData from '../../public/users.json';
import { serializeDetailData } from '../../utils';

const Detail = ({ place }) => {
  const [isModal, setIsModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (img, index) => {
    setImgSrc(img);
    setCurrentIndex(index);
    setIsModal(true);
  };

  const handelRotationRight = () => {
    const totalLength = dataJson.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newURL = dataJson[0].image;
      setImgSrc(newURL);
      return;
    }
    const newIndex = currentIndex + 1;
    const newURL = dataJson.filter(item => {
      return dataJson.indexOf(item) === newIndex;
    });
    const newItem = newURL[0].image;

    setImgSrc(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = dataJson.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newURL = dataJson[totalLength - 1].image;
      setImgSrc(newURL);
      return;
    }
    const newIndex = currentIndex - 1;
    const newURL = dataJson.filter(item => {
      return dataJson.indexOf(item) === newIndex;
    });
    const newItem = newURL[0].image;

    setImgSrc(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <Header hasVideo={false} />
      <div className={classNames(isModal ? 'h-screen blur-sm' : 'h-screen')}>
        <Head>
          <title>
            {`${place.name.toString()} | ${place.country.toString()}`}
          </title>
        </Head>

        <div className="p-16">
          <div className="grid grid-cols-[57rem_auto_19.5rem] gap-5 auto-cols-auto">
            <img
              alt="Haha"
              src={dataJson[0].image}
              className="row-span-2 w-[912px] h-[540px] rounded-3xl shadow-2xl"
            />
            {dataJson.slice(0, 4).map((items, index) => {
              return (
                <div key={index}>
                  <img
                    alt={items.image_lastmod}
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
        <div className="flex flex-row px-24 space-y-4">
          <div className="my-8 space-y-4">
            <div className="flex flex-row w-[45.5rem] pl-4">
              <div>
                <h2 className="text-3xl font-bold">{place.city}</h2>
                <div className="font-thin">{place.country}</div>
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
                <span className="text-base font-bold text-slate-100">
                  {Math.floor(place.totalScore)}/5
                </span>
              </div>
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillDollarCircle
                  color="#6EE7B7"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base font-bold text-slate-100">
                  $ {place.costForNomadInUsd.toLocaleString()}
                </span>
              </div>
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillCloud
                  color="#ffffff"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base font-bold text-slate-100">
                  {place.temperatureCFeelsLike} &deg;C
                </span>
              </div>
              <div className="m-3 w-40 h-36 bg-[#6366F1] rounded-lg text-center pt-12">
                <AiFillLike
                  color="#38BDF8"
                  fontSize="2rem"
                  className="mx-auto"
                />
                <span className="text-base font-bold text-slate-100">
                  {place.overallScore.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="pl-4">
              <h2 className="text-2xl font-bold">City Description</h2>
              <span className="font-sans font-thin text-[#9A9A9A] text-xl">
                {place.descriptionFromReview}
              </span>
            </div>
          </div>
          <div className="mx-40">
            <div className="p-8 bg-white rounded-lg shadow-2xl w-80 h-72">
              <span className="font-serif text-xl font-semibold">
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
              <span className="font-serif text-base font-medium">
                Chat with people here before visiting
              </span>
              <div className="my-4">
                <button className="w-64 h-[2.5rem] bg-blue-700 text-center rounded-3xl pt-0 hover:bg-blue-800">
                  <span className="font-semibold text-slate-100 ">
                    Chat now
                  </span>
                </button>
              </div>
            </div>
            <div className="p-8 mt-4 bg-white rounded-lg shadow-2xl w-80 h-36">
              <span className="font-serif text-xl font-semibold">
                Share your experience
              </span>
              <hr />
              <div className="my-4">
                <button className="w-64 h-[2.5rem] bg-blue-700 text-center rounded-3xl pt-0 hover:bg-blue-800">
                  <span className="font-semibold text-slate-100 ">
                    Share now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Scores place={place} />
        <GoogleMaps className="pl-4" />
        <div className="pl-4"></div>
        <Footer />
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

export async function getStaticPaths() {
  const paths = dataJson.map(data => ({
    params: { slug: data.long_slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const placeData = dataJson.filter(d => d.long_slug === slug);
  if (!placeData.length) {
    throw Error('Not found haha');
  }

  const place = serializeDetailData(
    camelcaseKeys(placeData[0], { deep: true }),
    usersData.results,
  );

  return {
    props: {
      place,
    },
  };
}

export default Detail;
