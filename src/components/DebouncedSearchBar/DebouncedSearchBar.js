import SearchBar from '../SearchBar';
import withDebouncedQueryChange from '../../enhancers/withDebouncedQueryChange';

export default withDebouncedQueryChange({ debounceInMs: 300 })(SearchBar);
