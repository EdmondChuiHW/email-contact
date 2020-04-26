import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CouncillorCard from './CouncillorCard';

afterEach(cleanup);

describe('CouncillorCard', () => {
  it('should render name', () => {
    const { getByText } = render(<CouncillorCard firstName="My" lastName="Boi" campaign={{}} />);
    expect(getByText('My Boi')).toBeInTheDocument();
  });

  it('should render subtitle for Mayor', () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    const { getByText } = render(<CouncillorCard role="Mayor" campaign={{}} />);
    expect(getByText('Mayor')).toBeInTheDocument();
  });

  it('should render subtitle for Councillor', () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    const { getByText } = render(<CouncillorCard role="Councillor" ward="Ward 6" campaign={{}} />);
    expect(getByText('Councillor – Ward 6')).toBeInTheDocument();
  });
});
