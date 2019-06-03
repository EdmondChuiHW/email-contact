import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import DebouncedSearchBar from './DebouncedSearchBar';
import 'jest-dom/extend-expect';

jest.useFakeTimers();
afterEach(cleanup);

describe('DebouncedSearchBar', () => {
  it('should call onQueryChange only once after debounce interval', async () => {
    const debounceInMs = 500;

    const onQueryChange = jest.fn();
    const { container } = render(
      <DebouncedSearchBar debounceInMs={debounceInMs} onQueryChange={onQueryChange} />,
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
});
