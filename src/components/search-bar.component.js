import React, {useCallback} from 'react';

export default ({query = '', setQuery}) => {
  const callback = e => setQuery(e.target.value);
  const onChange = useCallback(callback, []);
  return <input
    value={query}
    onChange={onChange}
  />;
};
