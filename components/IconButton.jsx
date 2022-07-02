import React from 'react'
import PropTypes from 'prop-types'

const IconButton = props => {
  return (
    <button
      type='button'
      className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-full text-base p-3.5 text-center'
    >
      {props.children}
    </button>
  )
}

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
}

export default IconButton
