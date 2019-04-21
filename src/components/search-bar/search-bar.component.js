import React, {useCallback} from 'react';
import Paper from "@material-ui/core/Paper/index";
import IconButton from "@material-ui/core/IconButton/index";
import InputBase from "@material-ui/core/InputBase/index";
import SearchIcon from '@material-ui/icons/Search';
import './search-bar.component.css';
import Loading from "../loading";

const SearchBar = ({query = '', label = '', isLoading = false, setQuery}) => {
  const onChange = useCallback(e => setQuery(e.target.value), []);
  return <Paper className="root" elevation={1}>
    <InputBase
      autoComplete="postal-code"
      className="input"
      placeholder={label}
      value={query}
      onChange={onChange}
    />
    <Loading isLoading={isLoading} className="loading">
      <IconButton aria-label="Search">
        <SearchIcon/>
      </IconButton>
    </Loading>
  </Paper>;
};

export default SearchBar;
