import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/legacy/image';
import { Button } from 'flowbite-react';
import Link from 'next/link';

const Banner = props => {
  return (
    <div className="flex h-[380px] p-8 bg-blue-400 rounded-2xl shadow-md">
      <div className="flex items-center w-1/2 h-full">
        <div>
          <h2 className="w-64 mb-5 text-5xl font-bold text-blue-50">
            Let&apos;s travel with us!
          </h2>
          <p className="mb-5 text-xl text-blue-50">
            Find place with your interests.
          </p>
          <Link href="/login">
            <Button color="light" size="lg">
              <p className="text-lg font-semibold text-gray-900 w-36">
                Let&apos;s go
              </p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-1/2 h-full shadow-lg rounded-2xl">
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
