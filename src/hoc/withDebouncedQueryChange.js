import React, { useCallback, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { always, juxt } from 'ramda';
import * as PropTypes from 'prop-types';

const withDebouncedQueryChange = ({ debounceInMs }) => (Component) => {
  const Enhanced = ({ onQueryChange, ...rest }) => {
    const [query, setQuery] = useState('');
    const [debouncedQueryChange] = useDebouncedCallback(onQueryChange, debounceInMs);
    const onNewValue = juxt([setQuery, debouncedQueryChange]);
    const clearQuery = useCallback(() => onNewValue(''), []);
    const onChange = useCallback(e => onNewValue(e.target.value), []);

    return (
      <Component
        query={query}
        onQueryChange={onChange}
        onClearQuery={clearQuery}
        {...rest}
      />
    );
  };
  Enhanced.propTypes = {
    onQueryChange: PropTypes.func,
  };
  Enhanced.defaultProps = {
    onQueryChange: always,
  };
  return Enhanced;
};

export default withDebouncedQueryChange;
