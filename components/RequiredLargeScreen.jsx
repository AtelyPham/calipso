import React from 'react'
import PropTypes from 'prop-types'

const RequiredLargeScreen = props => {
  return (
    <div className='w-screen h-screen'>
      <div className='block md:hidden'>
        <div
          tabIndex='-1'
          className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-full bg-slate-600'
        >
          <div className='relative p-4 w-full max-w-2xl h-full mx-auto md:h-auto flex justify-center items-center'>
            {/* <!-- Modal content --> */}
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              {/* <!-- Modal header --> */}
              <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Terms of Service
                </h3>
              </div>
              {/* <!-- Modal body --> */}
              <div className='p-6 space-y-6'>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  Currently, we don&apos;t support on small screen, please wait!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>{props.children}</div>
    </div>
  )
}

RequiredLargeScreen.propTypes = {}

export default RequiredLargeScreen
