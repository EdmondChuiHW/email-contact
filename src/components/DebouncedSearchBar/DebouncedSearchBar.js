import React, { useCallback, useState } from 'react';
import Paper from '@material-ui/core/Paper/index';
import IconButton from '@material-ui/core/IconButton/index';
import InputBase from '@material-ui/core/InputBase/index';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import './DebouncedSearchBar.css';
import { useDebouncedCallback } from 'use-debounce';
import { juxt, always } from 'ramda';
import * as PropTypes from 'prop-types';
import Loading from '../Loading';

const propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  onQueryChange: PropTypes.func,
  debounceInMs: PropTypes.number,
};

const defaultProps = {
  label: '',
  isLoading: false,
  onQueryChange: always,
  debounceInMs: 300,
};

const DebouncedSearchBar = ({
  label, isLoading, onQueryChange, debounceInMs,
}) => {
  const [query, setQuery] = useState('');
  const [debouncedQueryChange] = useDebouncedCallback(onQueryChange, debounceInMs);
  const newValueHandler = juxt([setQuery, debouncedQueryChange]);
  const clearQuery = useCallback(() => newValueHandler(''), []);
  const onChange = useCallback(e => newValueHandler(e.target.value), []);

  return (
    <Paper className="root" elevation={1}>
      <InputBase
        autoComplete="postal-code"
        className="input"
        placeholder={label}
        autoFocus
        value={query}
        onChange={onChange}
      />
      <Loading isLoading={isLoading} className="loading">
        {query
          ? (
            <IconButton aria-label="Clear" onClick={clearQuery}>
              <ClearIcon />
            </IconButton>
          )
          : (
            <IconButton aria-label="Search">
              <SearchIcon />
            </IconButton>
          )
      }
      </Loading>
    </Paper>
  );
};

DebouncedSearchBar.propTypes = propTypes;
DebouncedSearchBar.defaultProps = defaultProps;

export default DebouncedSearchBar;
