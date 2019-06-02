import {cleanup, render} from 'react-testing-library';
import CouncillorCard from './CouncillorCard';
import React from 'react';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('CouncillorCard', () => {
  it('should render name', () => {
    const {getByText} = render(<CouncillorCard firstName="My" lastName="Boi"/>);
    expect(getByText('My Boi')).toBeInTheDocument();
  });

  it('should render subtitle for Mayor', () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    const {getByText} = render(<CouncillorCard role="Mayor"/>);
    expect(getByText('Mayor')).toBeInTheDocument();
  });

  it('should render subtitle for Councillor', () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    const {getByText} = render(<CouncillorCard role="Councillor" ward="Ward 6"/>);
    expect(getByText('Councillor – Ward 6')).toBeInTheDocument();
  });
});
