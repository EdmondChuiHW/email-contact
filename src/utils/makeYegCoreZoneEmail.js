import React from 'react';
import { always, juxt } from 'ramda';
import * as PropTypes from 'prop-types';

const makeYegCoreZoneEmailBody = ({ role = 'Mayor', lastName = 'Iveson', ward = '' }) => (`Hello ${role} ${lastName},

I want safe and liveable streets. That means 30 km/hr in residential areas. The #YEGCoreZone is the only option to move Edmonton in this direction.

Please vote to approve the #YEGCoreZone on February 26. 

Thank you,
Constituent from ${ward || 'Edmonton'}`
);

const makeYegCoreZoneEmail = juxt([
  makeYegCoreZoneEmailBody,
  always('Support letter for #YEGCoreZone'),
]);

export default makeYegCoreZoneEmail;
