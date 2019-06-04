import { render } from 'react-testing-library';
import React from 'react';
import { last } from 'ramda';
import withPropsHistory from './withPropsHistory';

const Dummy = () => <></>;

describe('withPropsHistory', () => {
  it('pushes history from initial render', async () => {
    const [DummyWithHistory, history] = withPropsHistory(Dummy);

    render(<DummyWithHistory once={1} upon a="time" />);

    expect(history.length).toEqual(1);
    expect(history[0].once).toEqual(1);
    expect(history[0].upon).toEqual(true);
    expect(history[0].a).toEqual('time');
  });

  it('pushes history for subsequent renders', async () => {
    const [DummyWithHistory, history] = withPropsHistory(Dummy);

    render(<DummyWithHistory once={1} upon a="time" />);
    render(<DummyWithHistory once={2} upon a="timez" />);
    render(<DummyWithHistory once={5} upon a="timezzz" />);

    expect(history.length).toEqual(3);
    expect(last(history).once).toEqual(5);
    expect(last(history).upon).toEqual(true);
    expect(last(history).a).toEqual('timezzz');
  });
});
