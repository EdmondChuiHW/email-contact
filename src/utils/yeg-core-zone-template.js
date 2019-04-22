const makeYegCoreZoneEmail = ({title = 'Mayor', name = 'Iveson', ward = ''}) =>
  (`Dear ${title} ${name},
I'm writing in support of the #YEGCoreZone proposal.

Sincerely,
Resident of ${ward ? `Ward ${ward}` : 'Edmonton'}`
  );

export default makeYegCoreZoneEmail;
