import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as PropTypes from 'prop-types';

const propTypes = {
  isLoading: PropTypes.bool,
  size: PropTypes.number,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.node,
};

const defaultProps = {
  isLoading: false,
  size: 24,
  className: '',
  children: <></>,
};

const Loading = ({
  isLoading, size, className, children,
}) => (isLoading
  ? <CircularProgress size={size} thickness={4.8} className={className} />
  : children);

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
