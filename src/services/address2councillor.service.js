import request from "request-promise-native";

export const getCouncillorFromAddress = (address = '') => request({
  url: 'https://address2contact.herokuapp.com/address2councillor',
  json: true,
  qs: {
    address,
  },
});

export const getCouncillorFromGeo = ({latitude = 0, longitude = 0}) => (
  getCouncillorFromAddress(`geo: lng: ${longitude}, lat: ${latitude}`)
);
