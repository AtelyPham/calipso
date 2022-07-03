import classNames from 'classnames';
import Image from 'next/image';
import CalipsoLogo from '../../public/Calipso.png';
import Button from '../Button';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={classNames('relative', styles.header)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/** Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="block relative h-14">
              <style jsx>{`
                a {
                  width: 104px;
                }
              `}</style>
              <span className="sr-only">Calipso</span>
              <Image
                src={CalipsoLogo}
                alt="Calipso logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>

          {/** Nav */}
          <nav className="flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-gray-300 active:text-gray-200"
            >
              Find Cities
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-gray-300 active:text-gray-200"
            >
              Share Stories
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-gray-300 active:text-gray-200"
            >
              About us
            </a>
          </nav>

          {/** Right actions */}
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <Button className="w-44 h-10">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
