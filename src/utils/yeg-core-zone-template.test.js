import makeYegCoreZoneEmail from "./yeg-core-zone-template";

describe('makeYegCoreZoneEmail', () => {
  it('should say Edmonton if ward is empty', () => {
    const actual = makeYegCoreZoneEmail({
      ward: '',
      role: 'Councillor',
      lastName: 'McKeen',
    });
    const expected = `Dear Councillor McKeen,

I'm writing in support of the #YEGCoreZone proposal.

Thank you,
Resident of Edmonton`;
    expect(actual[0]).toEqual(expected);
  });

  it('should say ward name', () => {
    const actual = makeYegCoreZoneEmail({
      ward: 'Ward 6',
      role: 'Councillor',
      lastName: 'McKeen',
    });
    const expected = `Dear Councillor McKeen,

I'm writing in support of the #YEGCoreZone proposal.

Thank you,
Resident of Ward 6`;
    expect(actual[0]).toEqual(expected);
  });

  it('should say Mayor by default', () => {
    const actual = makeYegCoreZoneEmail({});
    const expected = `Dear Mayor Iveson,

I'm writing in support of the #YEGCoreZone proposal.

Thank you,
Resident of Edmonton`;
    expect(actual[0]).toEqual(expected);
  });
});
