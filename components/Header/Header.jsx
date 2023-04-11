import classNames from 'classnames';
import { Avatar, Button, Dropdown, Spinner } from 'flowbite-react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CalipsoLogo } from '../CalipsoLogo';
import { signOut, useSession } from 'next-auth/react';
import styles from './Header.module.css';

export function Header({ hasVideo = true, ...props }) {
  const textClassName = classNames(
    'text-base font-medium',
    hasVideo
      ? 'text-gray-200 hover:text-gray-300 active:text-gray-200'
      : 'text-gray-500 hover:text-gray-700 active:text-gray-500',
  );

  const { data: session, status } = useSession();

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
            {status === 'loading' ? (
              <Button pill={true} gradientMonochrome="info">
                <div className="mr-3">
                  <Spinner size="sm" light={true} />
                </div>
                Authenticating...
              </Button>
            ) : session?.user ? (
              <Dropdown
                size="sm"
                label={
                  <Avatar
                    alt="User settings"
                    img={session.user.image}
                    rounded={true}
                  />
                }
                arrowIcon={false}
                inline={true}
              >
                <Dropdown.Header>
                  {session.user.name && (
                    <span className="block text-sm">{session.user.name}</span>
                  )}
                  {session.user.email && (
                    <span className="block text-sm font-medium truncate">
                      {session.user.email}
                    </span>
                  )}
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <a
                    href={`/api/auth/signout`}
                    onClick={e => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </a>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Button pill={true} gradientMonochrome="info">
                <Link href="/api/auth/signin">
                  <span className="inline-flex items-center justify-center h-5 w-44">
                    Login
                  </span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  hasVideo: PropTypes.bool,
};
