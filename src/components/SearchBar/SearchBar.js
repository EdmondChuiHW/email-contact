import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import IconButton from '@material-ui/core/IconButton/index';
import InputBase from '@material-ui/core/InputBase/index';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import './SearchBar.css';
import { always } from 'ramda';
import * as PropTypes from 'prop-types';
import Loading from '../Loading';

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

const PlaceboSearchButton = () => (
  <IconButton aria-label="Search">
    <SearchIcon />
  </IconButton>
);

const propTypes = {
  label: PropTypes.string,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  onQueryChange: PropTypes.func,
  onClearQuery: PropTypes.func,
};

const defaultProps = {
  label: '',
  query: '',
  isLoading: false,
  onQueryChange: always,
  onClearQuery: always,
};

const SearchBar = ({
  label, query, isLoading, onQueryChange, onClearQuery,
}) => (
  <Paper className="root" elevation={1}>
    <InputBase
      autoComplete="postal-code"
      className="input"
      placeholder={label}
      autoFocus
      value={query}
      onChange={onQueryChange}
    />
    <Loading isLoading={isLoading} className="loading">
      {query
        ? <ClearButton onClearQuery={onClearQuery} />
        : <PlaceboSearchButton />
      }
    </Loading>
  </Paper>
);

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
