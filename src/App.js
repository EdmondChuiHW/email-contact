import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import * as queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import './App.css';
import CouncillorCard from './components/CouncillorCard';
import DebouncedSearchBar from './components/DebouncedSearchBar';
import useCampaign from './hooks/useCampaign';
import useCouncillor from './hooks/useCouncillor';
import useGeo from './hooks/useGeo';

const App = () => {
  const [
    coords, geoErrorMessage, isGeoLoading, requestCurrentGeo,
  ] = useGeo({ disableLocateOnLoad: true });
  const [query, setQuery] = useState('');
  const [councillor, originalQuery] = useCouncillor({ address: query, coords });
  // eslint-disable-next-line camelcase
  const { iframe_pls: iframe, cid } = queryString.parse(window.location.search);
  const campaignId = cid || 'core_zone';

  const [campaign, campaignLoadError] = useCampaign(campaignId);

  const className = classNames(
    'app',
    { 'iframe-pls': iframe },
  );

  useEffect(() => {
    if (!campaign) return;

    document.title = campaign.subject;
  }, [campaign]);

  const isTextSearchLoading = query !== originalQuery;
  const geoLoadingMessage = isGeoLoading && 'Finding your area councillor with your location…';
  const searchBarLabel = geoErrorMessage || geoLoadingMessage || 'Find your councillor by postal code/address';

  return (
    <div className={className}>
      <CssBaseline />
      <DebouncedSearchBar
        label={searchBarLabel}
        onQueryChange={setQuery}
        onRequestCurrentLocation={requestCurrentGeo}
        isLoading={isTextSearchLoading || isGeoLoading}
        autoFocus={!iframe}
      />
      <Typography gutterBottom />
      {campaignLoadError && <Typography variant="subtitle1" color="error">{campaignLoadError.message}</Typography>}
      {councillor && campaign && <CouncillorCard {...councillor} campaign={campaign} />}
    </div>
  );
};

export default App;
