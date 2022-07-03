import classNames from 'classnames';
import { Button } from 'flowbite-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <CalipsoLogo />
          </div>

          {/** Nav */}
          <nav className="flex space-x-10">
            <a href="#" className={textClassName}>
              Find Cities
            </a>
            <a href="#" className={textClassName}>
              Share Stories
            </a>
            <a href="#" className={textClassName}>
              About us
            </a>
          </nav>

          {/** Right actions */}
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <Button pill={true} gradientMonochrome="info">
              <span className="w-44 h-5 inline-flex justify-center items-center">
                Login
              </span>
            </Button>
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
