import React, {useState} from 'react';
import './App.css';
import {useCouncillor} from "./hooks/useCouncillor.hook";
import {useDebounce} from "use-debounce";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchBar from "./components/search-bar/search-bar.component";

const App = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 300);
  const [councillor, originalQuery] = useCouncillor(debouncedQuery);
  return (
    <div className="App">
      <CssBaseline/>
      <SearchBar
        label="Find councillor with postal code or address"
        query={query}
        setQuery={setQuery}
        isLoading={query !== debouncedQuery || debouncedQuery !== originalQuery}
      />
      <div>{JSON.stringify(councillor)}</div>
    </div>
  );
};

export default App;
