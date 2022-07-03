import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from 'flowbite-react';

const Banner = props => {
  return (
    <div className="flex h-[380px] p-8 bg-blue-400 rounded-2xl shadow-md">
      <div className="w-1/2 h-full flex items-center">
        <div>
          <h2 className="text-5xl text-blue-50 font-bold w-64 mb-5">
            Let&apos;s travel with us!
          </h2>
          <p className="text-xl text-blue-50 mb-5">
            Find place with your interests.
          </p>
          <Button color="light" size="lg">
            <p className="text-lg text-gray-900 font-semibold w-36">
              Let&apos;s go
            </p>
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full relative rounded-2xl shadow-lg">
        <Image
          src="/beach.jpg"
          alt="beach"
          objectFit="cover"
          layout="fill"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
