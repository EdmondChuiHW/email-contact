import React, { useCallback, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { always, juxt } from 'ramda';
import * as PropTypes from 'prop-types';
import SearchBar from './SearchBar';

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
    <SearchBar
      isLoading={isLoading}
      label={label}
      query={query}
      onQueryChange={onChange}
      onClearQuery={clearQuery}
    />
  );
};

DebouncedSearchBar.propTypes = propTypes;
DebouncedSearchBar.defaultProps = defaultProps;

export default DebouncedSearchBar;
