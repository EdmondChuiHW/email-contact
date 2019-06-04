import SearchBar from '../SearchBar';
import withDebouncedQueryChange from '../../hoc/withDebouncedQueryChange';

export default withDebouncedQueryChange({ debounceInMs: 300 })(SearchBar);
