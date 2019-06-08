import { render } from 'react-testing-library';
import React from 'react';
import { last } from 'ramda';
import withPropsHistory from './withPropsHistory';

const Dummy = () => <></>;

describe('withPropsHistory', () => {
  it('pushes history from initial render', async () => {
    const DummyWithHistory = withPropsHistory(Dummy);

    render(<DummyWithHistory once={1} upon a="time" />);

    const history = DummyWithHistory.propsHistory;
    expect(history.length).toEqual(1);
    expect(history[0].once).toEqual(1);
    expect(history[0].upon).toEqual(true);
    expect(history[0].a).toEqual('time');
  });

  it('pushes history for subsequent renders', async () => {
    const DummyWithHistory = withPropsHistory(Dummy);

    render(<DummyWithHistory once={1} upon a="time" />);
    render(<DummyWithHistory once={2} upon a="timez" />);
    render(<DummyWithHistory once={5} upon a="timezzz" />);

    const history = DummyWithHistory.propsHistory;
    expect(history.length).toEqual(3);

    const lastHistory = last(history);
    expect(lastHistory.once).toEqual(5);
    expect(lastHistory.upon).toEqual(true);
    expect(lastHistory.a).toEqual('timezzz');
  });
});
