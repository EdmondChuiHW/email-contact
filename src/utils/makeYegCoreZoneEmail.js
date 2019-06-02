import React from 'react';
import {always, juxt} from 'ramda';

const makeYegCoreZoneEmailBody = ({role = 'Mayor', lastName = 'Iveson', ward = ''}) =>
  (`Dear ${role} ${lastName},

I'm writing in support of the #YEGCoreZone proposal.

Thank you,
Resident of ${ward || 'Edmonton'}`
  );

const clickableCoreZone = <a
  href="https://twitter.com/search?q=YEGCoreZone"
  target="_blank"
  rel="noopener noreferrer">
  #YEGCoreZone
</a>;

// todo use tagged template string
const makeYegCoreZoneEmailDisplay = ({role = 'Mayor', lastName = 'Iveson', ward = ''}) =>
  (<>{`Dear ${role} ${lastName},

I'm writing in support of the`} {clickableCoreZone} {`proposal.

Thank you,
Resident of ${ward || 'Edmonton'}`}
  </>);

const makeYegCoreZoneEmail = juxt([
  makeYegCoreZoneEmailBody,
  makeYegCoreZoneEmailDisplay,
  always('Support letter for #YEGCoreZone'),
]);

export default makeYegCoreZoneEmail;
