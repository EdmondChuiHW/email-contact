import React from 'react';
import { always, juxt } from 'ramda';
import * as PropTypes from 'prop-types';

const makeYegCoreZoneEmailBody = ({ role = 'Mayor', lastName = 'Iveson', ward = '' }) => (`Dear ${role} ${lastName},

I'm writing in support of the #YEGCoreZone proposal.

Thank you,
Resident of ${ward || 'Edmonton'}`
);

const clickableCoreZone = (
  <a
    href="https://twitter.com/search?q=YEGCoreZone"
    target="_blank"
    rel="noopener noreferrer"
  >
  #YEGCoreZone
  </a>
);

const propTypes = {
  role: PropTypes.string,
  lastName: PropTypes.string,
  ward: PropTypes.string,
};

const defaultProps = {
  role: 'Mayor',
  lastName: 'Iveson',
  ward: '',
};

// todo use tagged template string
const YegCoreZoneEmailDisplay = ({ role, lastName, ward }) => (
  <>
    {`Dear ${role} ${lastName},

I'm writing in support of the`}
    {' '}
    {clickableCoreZone}
    {' '}
    {`proposal.

Thank you,
Resident of ${ward || 'Edmonton'}`}
  </>
);

YegCoreZoneEmailDisplay.propTypes = propTypes;
YegCoreZoneEmailDisplay.defaultProps = defaultProps;

const makeYegCoreZoneEmail = juxt([
  makeYegCoreZoneEmailBody,
  YegCoreZoneEmailDisplay,
  always('Support letter for #YEGCoreZone'),
]);

export default makeYegCoreZoneEmail;
