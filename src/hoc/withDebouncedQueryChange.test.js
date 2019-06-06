import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { last } from 'ramda';
import withDebouncedQueryChange from './withDebouncedQueryChange';
import 'jest-dom/extend-expect';
import withPropsHistory from './withPropsHistory';

jest.useFakeTimers();
afterEach(cleanup);

// eslint-disable-next-line react/prop-types
const DumbSearchBar = ({ onQueryChange }) => (
  <input onChange={onQueryChange} />
);

describe('withDebouncedQueryChange', () => {
  it('calls onQueryChange only once after debounce interval', async () => {
    const debounceInMs = 500;
    const DebouncedSearchBar = withDebouncedQueryChange({ debounceInMs })(DumbSearchBar);

    const onQueryChange = jest.fn();
    const { container } = render(
      <DebouncedSearchBar onQueryChange={onQueryChange} />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'l' } });
    fireEvent.change(input, { target: { value: 'la' } });
    fireEvent.change(input, { target: { value: 'las' } });
    fireEvent.change(input, { target: { value: 'last' } });

    jest.advanceTimersByTime(debounceInMs * 2);

    expect(onQueryChange).toBeCalledTimes(1);
    expect(onQueryChange).toBeCalledWith('last');
  });

  it('sets query prop every time', async () => {
    const debounceInMs = 500;
    const SearchBar = withPropsHistory(DumbSearchBar);
    const DebouncedSearchBar = withDebouncedQueryChange({ debounceInMs })(SearchBar);

    const { container } = render(<DebouncedSearchBar />);

    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'l' } });
    fireEvent.change(input, { target: { value: 'la' } });
    fireEvent.change(input, { target: { value: 'las' } });
    fireEvent.change(input, { target: { value: 'last' } });

    jest.advanceTimersByTime(debounceInMs * 2);

    const history = SearchBar.propsHistory;
    const initialRenderAndEventsCount = 1 + 4;
    expect(history.length).toEqual(initialRenderAndEventsCount);
    expect(last(history).query).toEqual('last');
  });

  it('clears query', async () => {
    const debounceInMs = 500;
    const SearchBar = withPropsHistory(DumbSearchBar);
    const DebouncedSearchBar = withDebouncedQueryChange({ debounceInMs })(SearchBar);

    const { container } = render(<DebouncedSearchBar />);

    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'l' } });
    fireEvent.change(input, { target: { value: 'la' } });
    fireEvent.change(input, { target: { value: 'las' } });
    fireEvent.change(input, { target: { value: 'last' } });

    jest.advanceTimersByTime(debounceInMs * 2);

    const history = SearchBar.propsHistory;
    const initialRenderAndEventsCount = 1 + 4;
    expect(history.length).toEqual(initialRenderAndEventsCount);
    expect(last(history).query).toEqual('last');
  });
});
