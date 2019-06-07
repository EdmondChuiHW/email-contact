import React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  left: PropTypes.node,
};

const defaultProps = {
  src: '',
  alt: '',
  left: <></>,
};

const ImgOrLeft = ({ src, alt, left }) => (
  src
    ? (
      <img
        className="left-icon button-img"
        width={24}
        height={24}
        src={src}
        alt={alt}
      />
    )
    : left
);

ImgOrLeft.propTypes = propTypes;
ImgOrLeft.defaultProps = defaultProps;

export default ImgOrLeft;
