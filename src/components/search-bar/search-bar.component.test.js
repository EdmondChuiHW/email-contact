import SearchBar from "./search-bar.component";
import React from "react";
import {cleanup, render} from "react-testing-library";
import 'jest-dom/extend-expect'

afterEach(cleanup);

describe('SearchBar', () => {
  it('should render label', () => {
    const {getByPlaceholderText} = render(<SearchBar label={'ayyyyyyyy'}/>);
    expect(getByPlaceholderText('ayyyyyyyy')).toBeInTheDocument();
  });

  it('should render isLoading=true', () => {
    const {getByRole} = render(<SearchBar isLoading={true}/>);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('should not render isLoading=false', () => {
    const {queryByRole} = render(<SearchBar isLoading={false}/>);
    expect(queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
