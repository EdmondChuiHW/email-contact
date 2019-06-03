import React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  left: PropTypes.node,
};

const defaultProps = {
  src: '',
  name: '',
  left: <></>,
};

const ImgOrLeft = ({ src, name, left }) => (src
  ? (
    <img
      className="left-icon button-img"
      width={24}
      height={24}
      src={src}
      alt={name}
    />
  )
  : left);

ImgOrLeft.propTypes = propTypes;
ImgOrLeft.defaultProps = defaultProps;

export default ImgOrLeft;
