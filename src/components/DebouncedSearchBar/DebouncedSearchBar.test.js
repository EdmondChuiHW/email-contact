import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import DebouncedSearchBar from './DebouncedSearchBar';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('DebouncedSearchBar', () => {
  it('should render label', () => {
    const { getByPlaceholderText } = render(<DebouncedSearchBar label="ayyyyyyyy" />);
    expect(getByPlaceholderText('ayyyyyyyy')).toBeInTheDocument();
  });

  it('should render query', () => {
    const { container, getByDisplayValue } = render(<DebouncedSearchBar />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'qqqqq' } });
    expect(getByDisplayValue('qqqqq')).toBeInTheDocument();
  });

  it('renders clear button when query exists', () => {
    const { container } = render(<DebouncedSearchBar />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'qqqqq' } });
    const actual = container.querySelector('[aria-label="Clear"]');
    expect(actual).toBeTruthy();
  });

  it('renders search icon when query is empty', () => {
    const { container } = render(<DebouncedSearchBar />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: '' } });
    const actual = container.querySelector('[aria-label="Search"]');
    expect(actual).toBeTruthy();
  });

  it('should render isLoading=true', () => {
    const { getByRole } = render(<DebouncedSearchBar isLoading />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('should not render isLoading=false', () => {
    const { queryByRole } = render(<DebouncedSearchBar isLoading={false} />);
    expect(queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
