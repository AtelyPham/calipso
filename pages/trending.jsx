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

const Trending = ({ places }) => {
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
        <title>Trending places</title>
      </Head>

      <Header hasVideo={false} />

      {/** Page content */}
      <div className="p-16">
        <Tabs active="trending" />

        <div
          className="grid grid-cols-4 gap-6 mt-12 list"
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
  let usersResp = { data: { results: [] } };

  try {
    usersResp = await axios.get(
      'https://randomuser.me/api/?results=5&inc=picture',
    );
  } catch (error) {}

  const placesResp = dataJson;
  const placesData = camelcaseKeys(placesResp || [], { deep: true });
  const usersData = usersResp.data.results || [];
  const itemPerRow = randNumber({ min: 30, max: 50 });

  const places = placesData.length
    ? getMultipleRandom(placesData, itemPerRow)
    : [];

  return {
    props: {
      places: places.map(p => serializeSectionData(p, usersData)),
    },
    revalidate: 60,
  };
}

export default Trending;
