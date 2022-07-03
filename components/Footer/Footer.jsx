import { Footer as FlowbiteFooter } from 'flowbite-react';
import Link from 'next/link';
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsDribbble,
} from 'react-icons/bs';
import { CalipsoLogo } from '../CalipsoLogo';

export const Footer = () => {
  return (
    <footer className="px-28 py-12 bg-gray-50">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <CalipsoLogo />

          <p className="mt-4 max-w-sm text-gray-400 text-sm">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
              Company
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4 hover:underline">
                <Link href="#">About Us</Link>
              </li>
              <li className="mb-4 hover:underline">
                <Link href="#">Contact Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
              Help center
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4 hover:underline">
                <Link href="#">Find Cities</Link>
              </li>
              <li className="mb-4 hover:underline">
                <a href="#">Find New Friends</a>
              </li>
              <li className="mb-4 hover:underline">
                <a href="#">Why Us?</a>
              </li>
              <li className="mb-4 hover:underline">
                <a href="#">FAQs</a>
              </li>
              <li className="hover:underline">
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
              CONTACT INFO
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4 hover:underline">
                <a href="#">Phone: +12 34566789</a>
              </li>
              <li className="mb-4 hover:underline">
                <a href="#">Email: company@email.com</a>
              </li>
              <li className="mb-8 hover:underline">
                <a href="#">Location: Ho Chi Minh City, Vietnam</a>
              </li>
              <li>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <BsFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <BsInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <BsTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <BsGithub className="w-5 h-5" />
                  </a>
                  <Link href="#">
                    <BsDribbble className="w-5 h-5" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2022{' '}
          <Link href="/" className="hover:underline">
            Calipso™ Team
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <span className="font-semibold text-sm text-gray-700">
            Created with ❤️ by Calipso Team.
          </span>
        </div>
      </div>
    </footer>
  );
};
