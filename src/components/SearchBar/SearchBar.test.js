import React from 'react';
import { cleanup, render } from 'react-testing-library';
import SearchBar from './SearchBar';
import 'jest-dom/extend-expect';
import makeComponentSpy from '../../utils/makeComponentSpy';

afterEach(cleanup);

describe('SearchBar', () => {
  it('should render label', () => {
    const InputSpy = makeComponentSpy();
    const placeholder = 'place';

    render(<SearchBar label="place" Input={InputSpy} />);

    expect(InputSpy).toBeCalledTimes(1);
    expect(InputSpy.mock.calls[0][0]).toMatchObject({ placeholder });
  });

  it('should render query', () => {
    const InputSpy = makeComponentSpy();
    const query = 'qqqqq';

    render(<SearchBar query={query} Input={InputSpy} />);

    expect(InputSpy).toBeCalledTimes(1);
    expect(InputSpy.mock.calls[0][0]).toMatchObject({ value: query });
  });

  it('renders clear button when query exists', () => {
    const ClearButtonSpy = makeComponentSpy();
    render(<SearchBar query="qqqqq" ClearButton={ClearButtonSpy} />);
    expect(ClearButtonSpy).toBeCalledTimes(1);
  });

  it('renders search icon when query is empty', () => {
    const SearchButtonSpy = makeComponentSpy();
    render(<SearchBar query="" SearchButton={SearchButtonSpy} />);
    expect(SearchButtonSpy).toBeCalledTimes(1);
  });

  it('should render progressbar when isLoading is true', () => {
    // todo remove getByRole
    const { getByRole } = render(<SearchBar isLoading />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('should not render progressbar when isLoading is false', () => {
    // todo remove getByRole
    const { queryByRole } = render(<SearchBar isLoading={false} />);
    expect(queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
