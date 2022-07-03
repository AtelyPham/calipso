import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  return (
    <button
      type="button"
      className={classNames(
        'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default Button;
