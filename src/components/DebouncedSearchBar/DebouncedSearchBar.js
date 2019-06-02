import React, {useCallback, useState} from 'react';
import Paper from '@material-ui/core/Paper/index';
import IconButton from '@material-ui/core/IconButton/index';
import InputBase from '@material-ui/core/InputBase/index';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import './DebouncedSearchBar.css';
import Loading from '../Loading';
import {useDebouncedCallback} from 'use-debounce';
import {juxt} from 'ramda';

const DebouncedSearchBar = ({label = '', isLoading = false, onQueryChange, debounceInMs = 300}) => {
  const [query, setQuery] = useState('');
  const [debouncedQueryChange] = useDebouncedCallback(onQueryChange, debounceInMs);
  const newValueHandler = juxt([setQuery, debouncedQueryChange]);
  const clearQuery = useCallback(() => newValueHandler(''), []);
  const onChange = useCallback(e => newValueHandler(e.target.value), []);

  return <Paper className="root" elevation={1}>
    <InputBase
      autoComplete="postal-code"
      className="input"
      placeholder={label}
      autoFocus={true}
      value={query}
      onChange={onChange}
    />
    <Loading isLoading={isLoading} className="loading">
      {query
        ? <IconButton aria-label="Clear" onClick={clearQuery}>
          <ClearIcon/>
        </IconButton>
        : <IconButton aria-label="Search">
          <SearchIcon/>
        </IconButton>
      }
    </Loading>
  </Paper>;
};

export default DebouncedSearchBar;
