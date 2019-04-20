import {useEffect, useState} from 'react';
import {getCouncillorFromAddress} from "../services/address2councillor.service";

export const useCouncillor = (address = '') => {
  const [councillor, setCouncillor] = useState(undefined);
  useEffect(() => {
    const req = getCouncillorFromAddress(address);
    req.then(setCouncillor);
    return () => req.abort();
  }, [address]);
  return councillor;
};
