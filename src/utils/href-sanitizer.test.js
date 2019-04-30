import hrefSanitizer from "./href-sanitizer";

describe('hrefSanitizer', () => {
  it('sanitizes body', () => {
    const body = `bad bois`;
    const actual = hrefSanitizer({body});
    const expected = `bad%20bois`;
    expect(actual.body).toEqual(expected);
  });

  it('sanitizes subject', () => {
    const subject = `bad bois`;
    const actual = hrefSanitizer({subject});
    const expected = `bad%20bois`;
    expect(actual.subject).toEqual(expected);
  });

  it('leaves everything else untouched', () => {
    const aye = `bad bois`;
    const actual = hrefSanitizer({aye});
    const expected = `bad bois`;
    expect(actual.aye).toEqual(expected);
  });
});
