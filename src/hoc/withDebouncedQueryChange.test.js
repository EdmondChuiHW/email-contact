import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
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

const typeQuery = ({ text, inContainer }) => (
  fireEvent.change(inContainer.querySelector('input'), { target: { value: text } })
);

const clickClearButton = ({ inContainer }) => (
  fireEvent.click(inContainer.querySelector('button'), {})
);

describe('withDebouncedQueryChange', () => {
  it('calls onQueryChange only once after debounce interval', async () => {
    const [DebouncedSearchBar] = makeDebouncedSearchBar();

    const onQueryChange = jest.fn();
    const { container } = render(
      <DebouncedSearchBar onQueryChange={onQueryChange} />,
    );

    [
      'l',
      'la',
      'las',
      'last',
    ].forEach(text => typeQuery({ text, inContainer: container }));

    jest.advanceTimersByTime(debounceInMs * 2);

    expect(onQueryChange).toBeCalledTimes(1);
    expect(onQueryChange).toBeCalledWith('last');
  });

  it('sets query prop every time', async () => {
    const [DebouncedSearchBar, propsHistory] = makeDebouncedSearchBar();

    const { container } = render(<DebouncedSearchBar />);

    [
      'l',
      'la',
      'las',
      'last',
    ].forEach(text => typeQuery({ text, inContainer: container }));

    jest.advanceTimersByTime(debounceInMs * 2);

    const initialRenderAndEventsCount = 1 + 4;
    expect(propsHistory.length).toEqual(initialRenderAndEventsCount);
    expect(last(propsHistory).query).toEqual('last');
  });

  it('clears query', async () => {
    const [DebouncedSearchBar, propsHistory] = makeDebouncedSearchBar();
    const onQueryChange = jest.fn();

    const { container } = render(<DebouncedSearchBar onQueryChange={onQueryChange} />);

    typeQuery({ text: 'some', inContainer: container });
    clickClearButton({ inContainer: container });

    jest.advanceTimersByTime(debounceInMs * 2);

    expect(onQueryChange).toBeCalledTimes(1);
    expect(last(propsHistory).query).toEqual('');
  });
});
