import { always, juxt } from 'ramda';

const makeOpenParkingEmailBody = ({ role = 'Mayor', lastName = 'Iveson', ward = '' }) => (`Dear ${role} ${lastName},

As one of your constituents, I would like to register my concern on the issue of parking minimums that is coming to council on January 28.

Parking minimums are an unnecessary intrusion on businesses and households. They incentivize car use, force our city to sprawl, and make land unproductive, all factors that contribute to climate change. 

I expect Edmonton to be a leader in acting to mitigate the climate emergency.

=====================
Please vote for Full Implementation of Open Parking on January 28.
=====================

Sincerely,
Constituent from ${ward || 'Edmonton'}`
);

const makeOpenParkingEmail = juxt([
  makeOpenParkingEmailBody,
  always('I Support Full Implementation of Open Parking'),
]);

export default makeOpenParkingEmail;
