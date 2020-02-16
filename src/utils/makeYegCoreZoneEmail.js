import { always, juxt } from 'ramda';

const makeYegCoreZoneEmailBody = ({ role = 'Mayor', lastName = 'Iveson', ward = '' }) => (`Hello ${role} ${lastName},

I want safe and liveable streets. That means 30 km/hr for residential streets in Edmonton. The #YEGCoreZone is the only option being presented to get us there. Please vote to approve the #YEGCoreZone on February 26.

Please also consider voting to reduce speed limits throughout the rest of Edmonton, in addition to the 30 km/hr Core Zone. It's time for Edmonton's residential streets to become the vibrant, community-building spaces our neighbourhoods and their residents would like to see. Vote YES to the Core Zone on February 26 and YES to slower streets in Edmonton's neighbourhoods.

Sincerely,
Constituent from ${ward || 'Edmonton'}`
);

const makeYegCoreZoneEmail = juxt([
  makeYegCoreZoneEmailBody,
  always('Speed Limits: Feb 26 Committee Meeting Item 6.1'),
]);

export default makeYegCoreZoneEmail;
