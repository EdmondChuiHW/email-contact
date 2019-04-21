import {useEffect, useState} from 'react';
import {getCouncillorFromAddress} from "../services/address2councillor.service";
import {pipe} from "ramda";

export const useCouncillor = (address = '') => {
  const [councillor, setCouncillor] = useState(undefined);
  const [completedQuery, setCompletedQuery] = useState(undefined);

  const onCouncillorLoaded = pipe(
    setCouncillor,
    () => setCompletedQuery(address),
  );

  useEffect(() => {
    const req = getCouncillorFromAddress(address);
    req.then(onCouncillorLoaded);
    return () => req.abort();
  }, [address]);
  return [councillor, completedQuery];
};
