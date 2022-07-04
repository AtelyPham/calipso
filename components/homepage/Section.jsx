import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import Link from 'next/link';

const Section = ({ name, data, slug }) => {
  return (
    <div className="mb-14">
      <div className="w-72 group">
        <h1 className="text-3xl font-bold text-gray-600 w-full group-hover:text-gray-800 group-hover:underline group-hover:underline-offset-4 cursor-pointer">
          <Link href={`/${slug}`}>
            <a>{name}</a>
          </Link>
        </h1>
        <div className="h-1.5 w-1/2 bg-gray-800 mt-3 group-hover:bg-transparent" />
      </div>
      <div className="flex justify-between mt-7">
        {data.map(place => {
          const { longSlug, ...cardProps } = place;
          return <Card key={longSlug} {...cardProps} />;
        })}
      </div>
    </div>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      longSlug: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      backgroundUrl: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      detailUrl: PropTypes.string.isRequired,
      isFavorited: PropTypes.bool.isRequired,
      isUserOnline: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Section;
