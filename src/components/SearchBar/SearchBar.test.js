import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import SearchBar from './SearchBar';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('SearchBar', () => {
  it('should render label', () => {
    const { getByPlaceholderText } = render(<SearchBar label="ayyyyyyyy" />);
    expect(getByPlaceholderText('ayyyyyyyy')).toBeInTheDocument();
  });

  it('should render query', () => {
    const { getByDisplayValue } = render(<SearchBar query="qqqqq" />);
    expect(getByDisplayValue('qqqqq')).toBeInTheDocument();
  });

  it('renders clear button when query exists', () => {
    const { container } = render(<SearchBar query="qqqqq" />);
    const actual = container.querySelector('[aria-label="Clear"]');
    expect(actual).toBeTruthy();
  });

  it('renders search icon when query is empty', () => {
    const { container } = render(<SearchBar />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: '' } });
    const actual = container.querySelector('[aria-label="Search"]');
    expect(actual).toBeTruthy();
  });

  it('should render isLoading=true', () => {
    const { getByRole } = render(<SearchBar isLoading />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('should not render isLoading=false', () => {
    const { queryByRole } = render(<SearchBar isLoading={false} />);
    expect(queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
