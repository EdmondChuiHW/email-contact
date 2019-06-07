import React from 'react';
import Paper from '@material-ui/core/Paper/index';
import IconButton from '@material-ui/core/IconButton/index';
import InputBase from '@material-ui/core/InputBase/index';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';
import { always } from 'ramda';
import * as PropTypes from 'prop-types';
import Loading from '../Loading';
import SimpleClearButton from '../ClearButton';

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
  ClearButton: PropTypes.elementType,
  SearchButton: PropTypes.elementType,
  Input: PropTypes.elementType,
};

const defaultProps = {
  label: '',
  query: '',
  isLoading: false,
  onQueryChange: always,
  onClearQuery: always,
  ClearButton: SimpleClearButton,
  SearchButton: PlaceboSearchButton,
  Input: InputBase,
};

const SearchBar = ({
  label, query, isLoading, onQueryChange, onClearQuery, ClearButton, SearchButton, Input,
}) => (
  <Paper className="root" elevation={1}>
    <Input
      autoComplete="postal-code"
      className="input"
      autoFocus
      placeholder={label}
      value={query}
      onChange={onQueryChange}
    />
    <Loading isLoading={isLoading} className="loading">
      {query
        ? <ClearButton onClearQuery={onClearQuery} />
        : <SearchButton />
      }
    </Loading>
  </Paper>
);

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
