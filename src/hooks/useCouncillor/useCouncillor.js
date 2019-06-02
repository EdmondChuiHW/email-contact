import {useEffect, useState} from 'react';
import {getCouncillorFromAddress, getCouncillorFromGeo} from '../../services/address2councillor.service';
import {pipe} from 'ramda';

const useCouncillor = ({address = '', coords = {latitude: 0, longitude: 0}}) => {
  const [councillor, setCouncillor] = useState(undefined);
  const [completedQuery, setCompletedQuery] = useState(undefined);

  const onCouncillorLoaded = pipe(
    setCouncillor,
    () => setCompletedQuery(address),
  );

  useEffect(() => {
    const req = coords && !address
      ? getCouncillorFromGeo(coords)
      : getCouncillorFromAddress(address);
    req.then(onCouncillorLoaded);
    return () => req.abort();
  }, [address, coords]);
  return [councillor, completedQuery];
};

export default useCouncillor;
