import Link from 'next/link';
import PropTypes from 'prop-types';
import { BsFillHeartFill, BsFillStarFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { HiTrendingUp } from 'react-icons/hi';

const tabsData = [
  {
    name: 'Trending',
    Icon: HiTrendingUp,
    slug: 'trending',
  },
  {
    name: 'Top rating',
    Icon: BsFillStarFill,
    slug: 'top-rating',
  },
  {
    name: 'Most view',
    Icon: FaEye,
    slug: 'most-view',
  },
  {
    name: 'Favorites',
    Icon: BsFillHeartFill,
    slug: 'favorites',
  },
];

const Tabs = props => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabsData.map(tab => {
          const isActive = tab.slug === props.active;

          return (
            <li key={tab.slug} className="mr-2 cursor-pointer">
              <Link href={`/${tab.slug}`}>
                <span
                  className={
                    isActive
                      ? 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group'
                      : 'inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                  }
                >
                  <tab.Icon
                    className={
                      isActive
                        ? 'mr-2 w-5 h-5 text-blue-600 dark:text-blue-500 inline-block'
                        : 'mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 inline-block'
                    }
                  />
                  {tab.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  active: PropTypes.oneOf(tabsData.map(t => t.slug)).isRequired,
};

export default Tabs;
