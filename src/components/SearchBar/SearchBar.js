
import InputBase from '@material-ui/core/InputBase/index';
import Paper from '@material-ui/core/Paper/index';
import * as PropTypes from 'prop-types';
import { always } from 'ramda';
import React from 'react';
import SimpleClearButton from '../ClearButton';
import Loading from '../Loading';
import LocateMeButton from '../LocateMeButton';
import './SearchBar.css';


const propTypes = {
  label: PropTypes.string,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onQueryChange: PropTypes.func,
  onClearQuery: PropTypes.func,
  onRequestCurrentLocation: PropTypes.func,
  ClearButton: PropTypes.elementType,
  Input: PropTypes.elementType,
};

const defaultProps = {
  label: '',
  query: '',
  isLoading: false,
  autoFocus: true,
  onQueryChange: always,
  onClearQuery: always,
  onRequestCurrentLocation: always,
  ClearButton: SimpleClearButton,
  Input: InputBase,
};

const SearchBar = ({
  label, query, isLoading, autoFocus, onQueryChange, onClearQuery, onRequestCurrentLocation,
  ClearButton, Input,
}) => (
  <Paper className="root" elevation={1}>
    <Input
      autoComplete="postal-code"
      className="input"
      autoFocus={autoFocus}
      placeholder={label}
      value={query}
      onChange={onQueryChange}
    />
    <Loading isLoading={isLoading} className="loading">
      {query
        ? <ClearButton onClearQuery={onClearQuery} />
        : <LocateMeButton onClick={onRequestCurrentLocation} />
      }
    </Loading>
  </Paper>
);

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
