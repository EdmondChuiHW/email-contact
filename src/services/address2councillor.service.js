import request from 'request-promise-native';

const POSTAL_CODE_REGEX = /^\s*([A-Za-z]\d[A-Za-z])[ -]?(\d[A-Za-z]\d)\s*$/i;

// google API treats "T5G0M5" and "T5G 0M5" differently
// if `address` is a postal code, this fn ensures a space is between two parts
function sanitizeCanadianPostalCode(address) {
  const matches = POSTAL_CODE_REGEX.exec(address);
  if (!matches) return address;

  const [, leftPart, rightPart] = matches;
  return `${leftPart} ${rightPart}`;
}

export const getCouncillorFromAddress = (address = '') => request({
  url: `${process.env.REACT_APP_ADDRESS_SERVER_HOST}/address2councillor`,
  json: true,
  qs: {
    address: sanitizeCanadianPostalCode(address),
  },
});

export const getCouncillorFromGeo = ({ latitude = 0, longitude = 0 }) => (
  getCouncillorFromAddress(`geo: lng: ${longitude}, lat: ${latitude}`)
);
