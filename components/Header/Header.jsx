import classNames from 'classnames';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CalipsoLogo } from '../CalipsoLogo';
import styles from './Header.module.css';

export function Header(props) {
  const textClassName = classNames(
    'text-base font-medium',
    props.hasVideo
      ? 'text-gray-200 hover:text-gray-300 active:text-gray-200'
      : 'text-gray-500 hover:text-gray-700 active:text-gray-500',
  );

  return (
    <div className={classNames('relative', styles.header, props.className)}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <CalipsoLogo />
          </div>

          {/** Nav */}
          <nav className="flex space-x-10">
            <Link className={textClassName} href="/trending">
              Find Cities
            </Link>
            <Link className={textClassName} href="/">
              Share Stories
            </Link>
            <Link className={textClassName} href="/">
              About us
            </Link>
          </nav>

          {/** Right actions */}
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <Link href="/login">
              <Button pill={true} gradientMonochrome="info">
                <span className="inline-flex items-center justify-center h-5 w-44">
                  Login
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  hasVideo: true,
};

Header.propTypes = {
  hasVideo: PropTypes.bool,
};
