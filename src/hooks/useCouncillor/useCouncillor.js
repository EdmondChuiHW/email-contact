import { useEffect, useState, useMemo } from 'react';
import { pipe } from 'ramda';
import { getCouncillorFromAddress, getCouncillorFromGeo } from '../../services/address2councillor.service';

const useCouncillor = ({ address = '', coords = { latitude: 0, longitude: 0 } }) => {
  const [councillor, setCouncillor] = useState(undefined);
  const [completedQuery, setCompletedQuery] = useState(undefined);

  const onCouncillorLoaded = useMemo(() => pipe(
    setCouncillor,
    () => setCompletedQuery(address),
  ), [setCouncillor, setCompletedQuery, address]);

  useEffect(() => {
    const req = coords && !address
      ? getCouncillorFromGeo(coords)
      : getCouncillorFromAddress(address);
    req.then(onCouncillorLoaded);
    return () => req.abort();
  }, [address, coords, onCouncillorLoaded]);
  return [councillor, completedQuery];
};

export default useCouncillor;
