import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import CalipsoImage from '../../public/Calipso.png';

export const CalipsoLogo = () => {
  return (
    <Link href="/">
      <div className="relative block w-24 h-24 cursor-pointer">
        <span className="sr-only">Calipso</span>
        <Image
          priority
          src={CalipsoImage}
          alt="Calipso logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Link>
  );
};
