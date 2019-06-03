import { cleanup, render } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';
import EmailArray from './EmailArray';
import gmailIcon from '../../imgs/gmail.ico';

const makeDummyProvider = ({ name }) => {
  const hrefResolver = ({
    email = '', cc = '', subject = '', body = '',
  }) => (
    `https://dummy.provider/mail/?view=cm&fs=1&to=${email}&cc=${cc}&su=${subject}&body=${body}`
  );

  return {
    name,
    src: gmailIcon,
    hrefResolver,
  };
};

afterEach(cleanup);

describe('EmailArray', () => {
  it('renders children given providers', () => {
    const { queryByText } = render(<EmailArray
      providers={[
        makeDummyProvider({ name: 'silly' }),
        makeDummyProvider({ name: 'goose' }),
      ]}
    />);
    expect(queryByText('silly')).toBeInTheDocument();
    expect(queryByText('goose')).toBeInTheDocument();
  });
});
