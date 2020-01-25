import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { geolocated } from 'react-geolocated';
import * as queryString from 'query-string';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import DebouncedSearchBar from './components/DebouncedSearchBar';
import useCouncillor from './hooks/useCouncillor';
import CouncillorCard from './components/CouncillorCard';
import geolocationProvider from './utils/geolocationProvider';

const geoLocatedConfig = {
  positionOptions: {
    enableHighAccuracy: false,
    timeout: 5000,
  },
  userDecisionTimeout: 5000,
  geolocationProvider,
};

const propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};

const defaultProps = {
  coords: undefined,
};

const App = ({ coords }) => {
  const [query, setQuery] = useState('');
  const [councillor, originalQuery] = useCouncillor({ address: query, coords });
  // eslint-disable-next-line camelcase
  const { iframe_pls: iframe, cid } = queryString.parse(window.location.search);

  const className = classNames(
    'app',
    { 'iframe-pls': iframe },
  );

  if (cid === 'open_parking') {
    document.title = 'Parking Minimums - Take Action On Climate';
  }

  return (
    <div className={className}>
      <CssBaseline />
      <DebouncedSearchBar
        label="Find your councillor by postal code/address"
        onQueryChange={setQuery}
        isLoading={query !== originalQuery}
        autoFocus={!iframe}
      />
      <Typography gutterBottom />
      {councillor && <CouncillorCard {...councillor} campaignId={cid} />}
    </div>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default geolocated(geoLocatedConfig)(App);
