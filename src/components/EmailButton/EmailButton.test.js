import { cleanup, render } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';
import EmailButton from './EmailButton';

afterEach(cleanup);

// todo extract some tests to ImgOrLeft
describe('EmailButton', () => {
  it('renders name', () => {
    const { getByText } = render(<EmailButton name="My Boi" />);
    expect(getByText('My Boi')).toBeInTheDocument();
  });

  it('renders name as alt', () => {
    const { container: { firstChild } } = render(<EmailButton src="some" name="i c u" />);
    const actual = firstChild.querySelector('img').getAttribute('alt');
    const expected = 'i c u';
    expect(actual).toEqual(expected);
  });

  it('renders href', () => {
    const { container: { firstChild } } = render(<EmailButton href="https://www.google.com" />);
    const actual = firstChild.getAttribute('href');
    const expected = 'https://www.google.com';
    expect(actual).toEqual(expected);
  });

  it('always includes target="_blank"', () => {
    const { container: { firstChild } } = render(<EmailButton href="https://www.google.com" />);
    const actual = firstChild.getAttribute('target');
    const expected = '_blank';
    expect(actual).toEqual(expected);
  });

  it('always includes rel="noopener noreferrer"', () => {
    const { container: { firstChild } } = render(<EmailButton href="https://www.google.com" />);
    const actual = firstChild.getAttribute('rel');
    const expected = 'noopener noreferrer';
    expect(actual).toEqual(expected);
  });

  it('renders src', () => {
    const { container: { firstChild } } = render(<EmailButton src="https://www.google.com/logo" />);
    const actual = firstChild.querySelector('img').getAttribute('src');
    const expected = 'https://www.google.com/logo';
    expect(actual).toEqual(expected);
  });

  it('renders left', () => {
    const { container: { firstChild } } = render(<EmailButton left={<div data-test="aye">AYES TO THE LEFT</div>} />);
    const actual = firstChild.querySelector('[data-test="aye"]').textContent;
    const expected = 'AYES TO THE LEFT';
    expect(actual).toEqual(expected);
  });
});
