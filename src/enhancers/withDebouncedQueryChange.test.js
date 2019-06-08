import React from 'react';
import { act, cleanup, render } from 'react-testing-library';
import { last } from 'ramda';
import withDebouncedQueryChange from './withDebouncedQueryChange';
import 'jest-dom/extend-expect';
import withPropsHistory from './withPropsHistory';

jest.useFakeTimers();
afterEach(cleanup);

// eslint-disable-next-line react/prop-types
const DumbSearchBar = ({ onQueryChange, onClearQuery }) => (
  <>
    <input onChange={onQueryChange} />
    <button onClick={onClearQuery} type="button" />
  </>
);

const debounceInMs = 500;
const makeDebouncedSearchBar = () => {
  const SearchBar = withPropsHistory(DumbSearchBar);
  const DebouncedSearchBar = withDebouncedQueryChange({ debounceInMs })(SearchBar);
  return [DebouncedSearchBar, SearchBar.propsHistory];
};

const typeQuery = ({ text, props }) => act(() => {
  // "Warning: The callback passed to ReactTestUtils.act(...) function must not return anything"
  props.onQueryChange({ target: { value: text } });
});

const clickClearButton = ({ props }) => act(() => {
  // "Warning: The callback passed to ReactTestUtils.act(...) function must not return anything"
  props.onClearQuery();
});

describe('withDebouncedQueryChange', () => {
  it('calls onQueryChange only once after debounce interval', async () => {
    const [DebouncedSearchBar, propsHistory] = makeDebouncedSearchBar();

    const onQueryChange = jest.fn();
    render(
      <DebouncedSearchBar onQueryChange={onQueryChange} />,
    );

    [
      'l',
      'la',
      'las',
      'last',
    ].forEach(text => typeQuery({ text, props: last(propsHistory) }));

    expect(onQueryChange).toBeCalledTimes(0);

    jest.advanceTimersByTime(debounceInMs * 2);

    expect(onQueryChange).toBeCalledTimes(1);
    expect(onQueryChange).toBeCalledWith('last');
  });

  it('sets query prop every time', async () => {
    const [DebouncedSearchBar, propsHistory] = makeDebouncedSearchBar();

    render(<DebouncedSearchBar />);

    [
      'l',
      'la',
      'las',
      'last',
    ].forEach(text => typeQuery({ text, props: last(propsHistory) }));

    jest.advanceTimersByTime(debounceInMs * 2);

    const initialRenderAndEventsCount = 1 + 4;
    expect(propsHistory.length).toEqual(initialRenderAndEventsCount);
    expect(last(propsHistory).query).toEqual('last');
  });

  it('clears query', async () => {
    const [DebouncedSearchBar, propsHistory] = makeDebouncedSearchBar();
    const onQueryChange = jest.fn();

    render(<DebouncedSearchBar onQueryChange={onQueryChange} />);

    const props = last(propsHistory);
    typeQuery({ text: 'some', props });
    clickClearButton({ props });

    expect(onQueryChange).toBeCalledTimes(0);

    jest.advanceTimersByTime(debounceInMs * 2);

    expect(onQueryChange).toBeCalledTimes(1);
    expect(props.query).toEqual('');
  });
});
