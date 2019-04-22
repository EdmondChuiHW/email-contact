import makeYegCoreZoneEmail from "./yeg-core-zone-template";

describe('makeYegCoreZoneEmail', () => {
  it('should say Edmonton if ward is empty', () => {
    const actual = makeYegCoreZoneEmail({
      ward: '',
      title: 'Councillor',
      name: 'McKeen',
    });
    const expected = `Dear Councillor McKeen,
I'm writing in support of the #YEGCoreZone proposal.

Sincerely,
Resident of Edmonton`;
    expect(actual).toEqual(expected);
  });

  it('should say ward name', () => {
    const actual = makeYegCoreZoneEmail({
      ward: '6',
      title: 'Councillor',
      name: 'McKeen',
    });
    const expected = `Dear Councillor McKeen,
I'm writing in support of the #YEGCoreZone proposal.

Sincerely,
Resident of Ward 6`;
    expect(actual).toEqual(expected);
  });

  it('should say Mayor by default', () => {
    const actual = makeYegCoreZoneEmail({});
    const expected = `Dear Mayor Iveson,
I'm writing in support of the #YEGCoreZone proposal.

Sincerely,
Resident of Edmonton`;
    expect(actual).toEqual(expected);
  });
});
