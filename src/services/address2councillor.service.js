import request from 'request-promise-native';

export const getCouncillorFromAddress = (address = '') => request({
  url: `${process.env.REACT_APP_ADDRESS_SERVER_HOST}/address2councillor`,
  json: true,
  qs: {
    address,
  },
});

export const getCouncillorFromGeo = ({ latitude = 0, longitude = 0 }) => (
  getCouncillorFromAddress(`geo: lng: ${longitude}, lat: ${latitude}`)
);
