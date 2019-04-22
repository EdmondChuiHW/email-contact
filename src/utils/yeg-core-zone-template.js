import {always, juxt} from "ramda";

const makeYegCoreZoneEmailBody = ({role = 'Mayor', lastName = 'Iveson', ward = ''}) =>
  (`Dear ${role} ${lastName},

I'm writing in support of the #YEGCoreZone proposal.

Thank you,
Resident of ${ward || 'Edmonton'}`
  );

const makeYegCoreZoneEmail = juxt([
  makeYegCoreZoneEmailBody,
  always('Support letter for #YEGCoreZone'),
]);

export default makeYegCoreZoneEmail;
