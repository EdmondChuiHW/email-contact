import makeYegCoreZoneEmail from './makeYegCoreZoneEmail';

describe('makeYegCoreZoneEmail', () => {
  it('should say Edmonton if ward is empty', () => {
    const actual = makeYegCoreZoneEmail({
      ward: '',
      role: 'Councillor',
      lastName: 'McKeen',
    });
    const expected = `Hello Councillor McKeen,

I want safe and liveable streets. That means 30 km/hr for residential streets in Edmonton. The #YEGCoreZone is the only option being presented to get us there. Please vote to approve the #YEGCoreZone on February 26.

Please also consider voting to reduce speed limits throughout the rest of Edmonton, in addition to the 30 km/hr Core Zone. It's time for Edmonton's residential streets to become the vibrant, community-building spaces our neighbourhoods and their residents would like to see. Vote YES to the Core Zone on February 26 and YES to slower streets in Edmonton's neighbourhoods.

Sincerely,
Constituent from Edmonton`;
    expect(actual[0]).toEqual(expected);
  });

  it('should say ward name', () => {
    const actual = makeYegCoreZoneEmail({
      ward: 'Ward 6',
      role: 'Councillor',
      lastName: 'McKeen',
    });
    const expected = `Hello Councillor McKeen,

I want safe and liveable streets. That means 30 km/hr for residential streets in Edmonton. The #YEGCoreZone is the only option being presented to get us there. Please vote to approve the #YEGCoreZone on February 26.

Please also consider voting to reduce speed limits throughout the rest of Edmonton, in addition to the 30 km/hr Core Zone. It's time for Edmonton's residential streets to become the vibrant, community-building spaces our neighbourhoods and their residents would like to see. Vote YES to the Core Zone on February 26 and YES to slower streets in Edmonton's neighbourhoods.

Sincerely,
Constituent from Ward 6`;
    expect(actual[0]).toEqual(expected);
  });

  it('should say Mayor by default', () => {
    const actual = makeYegCoreZoneEmail({});
    const expected = `Hello Mayor Iveson,

I want safe and liveable streets. That means 30 km/hr for residential streets in Edmonton. The #YEGCoreZone is the only option being presented to get us there. Please vote to approve the #YEGCoreZone on February 26.

Please also consider voting to reduce speed limits throughout the rest of Edmonton, in addition to the 30 km/hr Core Zone. It's time for Edmonton's residential streets to become the vibrant, community-building spaces our neighbourhoods and their residents would like to see. Vote YES to the Core Zone on February 26 and YES to slower streets in Edmonton's neighbourhoods.

Sincerely,
Constituent from Edmonton`;
    expect(actual[0]).toEqual(expected);
  });
});
