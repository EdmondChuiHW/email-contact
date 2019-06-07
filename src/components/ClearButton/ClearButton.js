import React from 'react';
import IconButton from '@material-ui/core/IconButton/index';
import ClearIcon from '@material-ui/icons/Clear';
import { always } from 'ramda';
import * as PropTypes from 'prop-types';

const ClearButton = ({ onClearQuery }) => (
  <IconButton aria-label="Clear" onClick={onClearQuery}>
    <ClearIcon />
  </IconButton>
);
ClearButton.propTypes = {
  onClearQuery: PropTypes.func,
};
ClearButton.defaultProps = {
  onClearQuery: always,
};

export default ClearButton;
