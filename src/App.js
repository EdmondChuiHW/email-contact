import React, {useState} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import DebouncedSearchBar from './components/DebouncedSearchBar';
import useCouncillor from './hooks/use-councillor';
import CouncillorCard from './components/councillor-card';
import {geolocated} from 'react-geolocated';
import geolocationProvider from './utils/geo-location-provider';
import * as queryString from 'query-string';
import classNames from 'classnames';
import {Typography} from '@material-ui/core';

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
  const [councillor, originalQuery] = useCouncillor({address: query, coords});
  const {iframe_pls} = queryString.parse(window.location.search);

  const className = classNames(
    'app',
    {'iframe-pls': iframe_pls},
  );

  return (
    <div className={className}>
      <CssBaseline/>
      <DebouncedSearchBar
        label="Find your councillor by postal code/address"
        onQueryChange={setQuery}
        isLoading={query !== originalQuery}
      />
      <Typography gutterBottom/>
      {councillor && <CouncillorCard {...councillor}/>}
    </div>
  );
};

export default geolocated(geoLocatedConfig)(App);
