import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, label, placeholder, leadingIcon }) => {
  return (
    <Fragment>
      {label && (
        <label
          htmlFor={id}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          {label}
        </label>
      )}
      <div className='relative mb-5'>
        {leadingIcon && (
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            {leadingIcon}
          </div>
        )}
        <input
          type='text'
          id={id}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2'
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  )
}

Input.defaultProps = {
  placeholder: 'example@email.com',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  leadingIcon: PropTypes.element,
}

export default Input
