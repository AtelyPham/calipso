import { randNumber } from '@ngneat/falso';
import camelcaseKeys from 'camelcase-keys';
import Head from 'next/head';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Tabs } from '../components/placespage';
import dataJson from '../public/data.json';
import { getMultipleRandom, serializeSectionData } from '../utils';
import useLoadMoreOnScroll from 'react-hook-pagination';
import axios from 'axios';
import { Card } from '../components/Card';
import { Button, Spinner, TextInput } from 'flowbite-react';
import { IoIosSend } from 'react-icons/io';
import { Footer } from '../components/Footer/Footer';
import { HiMail } from 'react-icons/hi';

const TopRating = ({ places }) => {
  const fetchSize = 12;
  const limit = places.length;
  const ulElement = useRef();
  const [data, setData] = useState([]);
  const {
    start,
    end,
    isFetching,
    doneFetching,
    setIsFetching,
    forceDonefetching,
  } = useLoadMoreOnScroll({
    fetchSize,
    scroller: ulElement,
    limit: limit,
    mode: 'error',
  });

  const fetchHandler = useCallback(
    (start, end) => {
      setIsFetching(true);
      setTimeout(() => {
        setData(prev => [...prev, ...places.slice(start, end)]);

        setIsFetching(false);
      }, 2000);
    },
    [setIsFetching, places],
  );

  useEffect(() => {
    if (start !== end) {
      fetchHandler(start, end);
    }
  }, [start, end, fetchHandler]);

  return (
    <Fragment>
      <Head>
        <title>Top rating places</title>
      </Head>

      <Header hasVideo={false} />

      {/** Page content */}
      <div className="p-16">
        <Tabs active="top-rating" />

        <div
          className="list mt-12 grid grid-cols-4 gap-6"
          ref={ulElement}
          style={{ height: '650px', overflow: 'auto' }}
        >
          {data.map((place, idx) => {
            const { longSlug, ...cardProps } = place;
            return <Card key={`${idx}${longSlug}`} {...cardProps} />;
          })}
          {isFetching && (
            <div className="text-center">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}
        </div>
      </div>

      {/** Newsletter */}
      <div className="w-full h-24 bg-blue-100 py-4">
        <div className="flex justify-center items-center h-full">
          <div className="mr-4">
            <h4 className="text-gray-900 text-base font-semibold uppercase">
              Newsletter
            </h4>
            <p className="text-sm capitalize text-gray-800">Stay Upto Date</p>
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
            <IoIosSend className="mr-2 h-5 w-5 text-white inline-block" />
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
  const itemPerRow = randNumber({ min: 30, max: 50 });

  const places = placesData.length
    ? getMultipleRandom(placesData, itemPerRow)
    : [];

  const sortPlaces = places.map(p => serializeSectionData(p, usersData));
  sortPlaces.sort((a, b) => b.rating - a.rating);

  return {
    props: {
      places: sortPlaces,
    },
    revalidate: 60,
  };
}

export default TopRating;
