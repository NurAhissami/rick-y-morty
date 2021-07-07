import React from 'react';
import PropTypes from 'prop-types';

const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="form__reset" type="button" onClick={handleReset}>
      Reset
    </button>
  );
};

export default Reset;

Reset.propTypes = {
  handleReset: PropTypes.func,
};
