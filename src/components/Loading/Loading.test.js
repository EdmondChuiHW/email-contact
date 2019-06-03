import { cleanup, render } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';
import Loading from './Loading';

afterEach(cleanup);

describe('Loading', () => {
  it('renders no children when loading', () => {
    const { queryByText } = render(<Loading isLoading>My Boi</Loading>);
    expect(queryByText('My Boi')).not.toBeInTheDocument();
  });

  it('renders children when loading', () => {
    const { queryByText } = render(<Loading isLoading={false}>My Boi</Loading>);
    expect(queryByText('My Boi')).toBeInTheDocument();
  });
});
