import makeYegCoreZoneEmail from './makeYegCoreZoneEmail';

describe('makeYegCoreZoneEmail', () => {
  it('should say Edmonton if ward is empty', () => {
    const actual = makeYegCoreZoneEmail({
      ward: '',
      role: 'Councillor',
      lastName: 'McKeen',
    });
    const expected = `Hello Councillor McKeen,

I want safe and liveable streets. That means 30 km/hr in residential areas. The #YEGCoreZone is the only option to move Edmonton in this direction.

Please vote to approve the #YEGCoreZone on February 26. 

Thank you,
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

I want safe and liveable streets. That means 30 km/hr in residential areas. The #YEGCoreZone is the only option to move Edmonton in this direction.

Please vote to approve the #YEGCoreZone on February 26. 

Thank you,
Constituent from Ward 6`;
    expect(actual[0]).toEqual(expected);
  });

  it('should say Mayor by default', () => {
    const actual = makeYegCoreZoneEmail({});
    const expected = `Hello Mayor Iveson,

I want safe and liveable streets. That means 30 km/hr in residential areas. The #YEGCoreZone is the only option to move Edmonton in this direction.

Please vote to approve the #YEGCoreZone on February 26. 

Thank you,
Constituent from Edmonton`;
    expect(actual[0]).toEqual(expected);
  });
});
