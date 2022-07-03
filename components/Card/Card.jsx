import React, { useMemo, useState } from 'react'
import ReactStars from 'react-stars'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { MdArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'
import classNames from 'classnames'

const Card = ({
  backgroundUrl,
  rating,
  isFavorited,
  city,
  country,
  avatarUrl,
  isUserOnline,
  detailUrl,
}) => {
  const iconSize = useMemo(() => 32, [])

  return (
    <div
      className='flex flex-col justify-between items-center w-1/4 p-2.5 rounded border border-black'
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <ReactStars
          count={5}
          value={rating}
          size={iconSize}
          edit={false}
          color1='#fff'
          color2={'#FCD34D'}
        />

        {isFavorited ? (
          <IoHeart size={iconSize} className='text-red-500' />
        ) : (
          <IoHeartOutline size={iconSize} className='text-white' />
        )}
      </div>

      <div className='flex flex-col justify-center items-center my-4'>
        <h2 className='font-bold text-2xl mt-4 text-white'>Place</h2>
        <h3 className='font-bold text-lg mb-4 text-white'>City</h3>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <div className='relative w-10 h-10'>
          <Image
            className='rounded-full border border-gray-100 shadow-sm'
            src={avatarUrl}
            alt='User avatar'
            layout='fill'
          />
          <div
            className={classNames(
              'absolute top-0 right-0 h-3 w-3 border-2 border-white rounded-full z-2',
              isUserOnline ? 'bg-green-400' : 'bg-gray-300'
            )}
          ></div>
        </div>

        <Link href={detailUrl}>
          <a className='flex flex-row justify-between items-center border-b border-white text-white text-sm'>
            Detail <MdArrowRightAlt className='mt-1 ' />
          </a>
        </Link>
      </div>
    </div>
  )
}

Card.propTypes = {
  backgroundUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isUserOnline: PropTypes.bool.isRequired,
  detailUrl: PropTypes.string.isRequired,
}

export default Card
