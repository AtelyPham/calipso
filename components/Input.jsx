import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  label,
  placeholder = 'example@email.com',
  leadingIcon,
}) => {
  return (
    <Fragment>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative mb-5">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <input
          type="text"
          id={id}
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  leadingIcon: PropTypes.element,
};

export default Input;
