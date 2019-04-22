import {cleanup, render} from "react-testing-library";
import CouncillorCard from "./councillor-card";
import React from "react";
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('CouncillorCard', () => {
  it('should render name', () => {
    const {getByText} = render(<CouncillorCard name="My boi"/>);
    expect(getByText('My boi')).toBeInTheDocument();
  });
});
