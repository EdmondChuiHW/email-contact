import request from "request-promise-native";

export const getCouncillorFromAddress = (address = '') => request({
  url: 'https://address2contact.herokuapp.com/address2councillor',
  json: true,
  qs: {
    address,
  },
});
