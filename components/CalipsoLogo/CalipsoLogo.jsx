import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CalipsoImage from '../../public/Calipso.png';

export const CalipsoLogo = () => {
  return (
    <Link href="/">
      <div className="block relative h-14 w-[104px] cursor-pointer">
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
