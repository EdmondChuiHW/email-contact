import React, {useState} from 'react';
import './App.css';
import {useDebounce} from "use-debounce";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchBar from "./components/search-bar";
import useCouncillor from "./hooks/use-councillor";
import CouncillorCard from "./components/councillor-card";
import {geolocated} from "react-geolocated";
import geolocationProvider from "./utils/geo-location-provider";
import * as queryString from "query-string";
import classNames from "classnames";
import {Typography} from "@material-ui/core";

const geoLocatedConfig = {
  positionOptions: {
    enableHighAccuracy: false,
    timeout: 5000,
  },
  userDecisionTimeout: 5000,
  geolocationProvider,
};

const App = ({coords}) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 300);
  const [councillor, originalQuery] = useCouncillor({address: debouncedQuery, coords});
  const {iframe_pls} = queryString.parse(window.location.search);

  const className = classNames(
    'app',
    {'iframe-pls': iframe_pls},
  );

  return (
    <div className={className}>
      <CssBaseline/>
      <SearchBar
        label="Find your councillor by postal code/address"
        query={query}
        setQuery={setQuery}
        isLoading={query !== debouncedQuery || debouncedQuery !== originalQuery}
      />
      <Typography gutterBottom/>
      {councillor && <CouncillorCard {...councillor}/>}
    </div>
  );
};

export default geolocated(geoLocatedConfig)(App);
