import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import { TextInput, Button } from 'flowbite-react';
import Head from 'next/head';
import Image from 'next/legacy/image';
import { Fragment } from 'react';
import { HiMail } from 'react-icons/hi';
import { IoIosSend } from 'react-icons/io';
import { MailIcon } from '../assets';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header';
import { Banner, Section } from '../components/homepage';
import IconButton from '../components/IconButton';
import Input from '../components/Input';
import { getMultipleRandom, serializeSectionData } from '../utils';
import dataJson from '../public/data.json';
import Link from 'next/link';

const Home = ({ trendingPlaces, aroundPlaces, topRatingPlaces }) => {
  return (
    <Fragment>
      <Head>
        <title>Capliso - Your travel agent</title>
        <meta name="description" content="Find a city and go" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Hero section */}
      <div className="relative w-screen h-screen">
        <video
          className="absolute object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source
            src="https://nft4charity-assets.s3.us-east-2.amazonaws.com/hero-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <Header />

        {/** Right card */}
        <div className="absolute p-6 bg-white border border-gray-200 rounded-lg shadow-md w-72 top-1/4 left-2/3">
          <div className="mb-2">
            <Image
              className="rounded-lg"
              priority
              src="/beach.jpg"
              alt="beach"
              width={256}
              height={144}
              objectFit="cover"
            />
          </div>
          <Input id="email" leadingIcon={<MailIcon />} />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
          >
            <Link href="/login">Login</Link>
          </button>
        </div>

        {/** Find city */}
        <div className="w-full flex justify-center absolute bottom-[10%] mx-auto">
          <div>
            <h1 className="mb-2 text-3xl font-semibold text-white uppercase">
              Find city
            </h1>
            <div className="bg-white px-8 py-3.5 rounded-full flex">
              <div className="relative z-0 pr-8 w-52">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Which city do you prefer?"
                />
              </div>

              <div className="relative z-0 w-40 pl-4 pr-8 border-l-2 border-l-slate-200">
                <label
                  htmlFor="continents"
                  className="block text-sm font-medium text-gray-900"
                >
                  Continents
                </label>
                <input
                  type="text"
                  id="continents"
                  className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="E.g. Asian"
                />
              </div>

              <div className="relative z-0 w-40 pl-4 pr-8 border-l-2 border-l-slate-200">
                <label
                  htmlFor="trending"
                  className="block text-sm font-medium text-gray-900"
                >
                  Trending
                </label>
                <input
                  type="text"
                  id="trending"
                  className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="City"
                />
              </div>

              <div className="ml-6">
                <IconButton>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.325 12.899L19.705 18.279C19.8941 18.4682 20.0003 18.7248 20.0002 18.9923C20.0001 19.2599 19.8937 19.5164 19.7045 19.7055C19.5153 19.8946 19.2587 20.0008 18.9912 20.0007C18.7236 20.0006 18.4671 19.8942 18.278 19.705L12.898 14.325C11.2897 15.5707 9.26729 16.1569 7.24214 15.9643C5.21699 15.7718 3.34124 14.815 1.99649 13.2886C0.651744 11.7622 -0.0609975 9.7808 0.0032639 7.74753C0.0675253 5.71427 0.903963 3.78185 2.34242 2.34339C3.78087 0.904939 5.71329 0.0685019 7.74656 0.00424047C9.77982 -0.0600209 11.7612 0.652721 13.2876 1.99747C14.814 3.34222 15.7708 5.21796 15.9634 7.24312C16.1559 9.26827 15.5697 11.2907 14.324 12.899H14.325ZM8.00001 14C9.59131 14 11.1174 13.3678 12.2427 12.2426C13.3679 11.1174 14 9.59129 14 7.99999C14 6.40869 13.3679 4.88257 12.2427 3.75735C11.1174 2.63213 9.59131 1.99999 8.00001 1.99999C6.40871 1.99999 4.88259 2.63213 3.75737 3.75735C2.63215 4.88257 2.00001 6.40869 2.00001 7.99999C2.00001 9.59129 2.63215 11.1174 3.75737 12.2426C4.88259 13.3678 6.40871 14 8.00001 14Z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-16">
        <Section
          name="Trending places to visit"
          data={trendingPlaces}
          slug="trending"
        />
        <Section
          name="Cities near your place"
          data={aroundPlaces}
          slug="most-view"
        />
        <Section name="Top rating" data={topRatingPlaces} slug="top-rating" />

        <Banner />
      </div>

      {/** Newsletter */}
      <div className="w-full h-24 py-4 bg-blue-100">
        <div className="flex items-center justify-center h-full">
          <div className="mr-4">
            <h4 className="text-base font-semibold text-gray-900 uppercase">
              Newsletter
            </h4>
            <p className="text-sm text-gray-800 capitalize">Stay Upto Date</p>
          </div>
          <div className="w-2/5 mr-2">
            <TextInput
              id="email"
              type="email"
              placeholder="news@email.com"
              icon={HiMail}
              sizing="md"
            />
          </div>
          <Button className="rounded-lg">
            <IoIosSend className="inline-block w-5 h-5 mr-2 text-white" />
            Send
          </Button>
        </div>
      </div>

      {/** Footer */}
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const usersResp = await axios.get(
    'https://randomuser.me/api/?results=5&inc=picture',
  );
  const placesResp = dataJson;
  const placesData = camelcaseKeys(placesResp || [], { deep: true });
  const usersData = usersResp.data.results || [];
  const itemPerRow = 4;

  const trendingPlaces = placesData.length
    ? getMultipleRandom(placesData, itemPerRow)
    : [];
  const aroundPlaces = placesData.length
    ? getMultipleRandom(placesData, itemPerRow)
    : [];
  const topRatingPlaces = placesData.length
    ? getMultipleRandom(placesData, itemPerRow)
    : [];

  return {
    props: {
      trendingPlaces: trendingPlaces.map(p =>
        serializeSectionData(p, usersData),
      ),
      aroundPlaces: aroundPlaces.map(p => serializeSectionData(p, usersData)),
      topRatingPlaces: topRatingPlaces.map(p =>
        serializeSectionData(p, usersData),
      ),
    },
    revalidate: 10,
  };
}

export default Home;
