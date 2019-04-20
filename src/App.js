import React, {useState} from 'react';
import SearchBar from './components/search-bar.component';
import './App.css';
import {useCouncillor} from "./hooks/useCouncillor.hook";
import {useDebounce} from "use-debounce";

const App = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 300);
  const councillor = useCouncillor(debouncedQuery);
  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery}/>
      <div>{JSON.stringify(councillor)}</div>
    </div>
  );
};

export default App;
