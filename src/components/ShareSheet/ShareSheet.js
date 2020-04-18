import { FilledInput, FormControl, FormHelperText, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/index';
import Email from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import React, { useEffect, useReducer, useState } from 'react';


const SendButton = () => (
  <IconButton aria-label="Search" type="submit">
    <SendIcon />
  </IconButton>
);

export default function ShareSheet() {
  const [state, dispatch] = useReducer(progressReducer, { status: 'idle' });
  const [email, setEmail] = useState('');

  const errorMessage = state.status === "completed" && state.response.errorMessage;

  useEffect(() => {
    if (state.status !== 'inProgress') return;

    let didCancel = false;

    handleSubmit(state.formData, cancelAwareDispatch).catch((e) => {
      cancelAwareDispatch({
        type: 'completingRequest',
        payload: {
          response: { success: false, errorMessage: "Couldn't subscribe. Please try a different email address." },
        },
      });
    });

    return () => (didCancel = true);

    function cancelAwareDispatch(...args) {
      if (didCancel) return;

      dispatch(...args);
    }
  }, [state.formData, state.status]);

  return (
    <div style={{ maxWidth: '45em' }}>
      <Typography variant="h5" component="h2">
        Join The Email List
      </Typography>
      <Typography variant="subtitle1">
        Join the Climate Action Edmonton email list so that we can take collective action
        {' '}
        <i>together</i>
        {' '}
        to reduce greenhouse gases in Edmonton.
      </Typography>
      <form onSubmit={onSubmit}>
        <FormControl variant="filled" margin="normal" error={!!errorMessage} fullWidth onChange={() => dispatch({ type: 'reset' })}>
          <InputLabel htmlFor="email-text">Email address</InputLabel>
          <FilledInput
            id="email-text"
            type="email"
            autoComplete="email"
            name="EMAIL"
            fullWidth
            aria-describedby="email-text-error"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            startAdornment={(
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )}
            endAdornment={(
              <InputAdornment position="end">
                <SendButton />
              </InputAdornment>
            )}
          />

          <FormHelperText id="email-text-error">{errorMessage}</FormHelperText>
        </FormControl>

      </form>
      <Typography variant="subtitle1">
        <i>Unspammy guarantee</i>
        : we will send you 12 emails per year or less. You only get the good stuff.
      </Typography>
    </div>
  );

  function onSubmit(event) {
    event.preventDefault();
    if (state.status === 'inProgress') return;

    const formData = new FormData(event.currentTarget);
    dispatch({ type: 'requestingSubmit', payload: { formData } });
  }
}

function progressReducer(prevAction, action) {
  switch (action.type) {
    case 'reset':
      return { status: 'idle' };
    case 'requestingSubmit':
      if (prevAction.status === 'inProgress') throw new Error('already in progress');
      return { status: 'inProgress', formData: action.payload.formData };
    case 'completingRequest':
      return { status: 'completed', response: action.payload.response };
    default:
      return prevAction;
  }
}

async function handleSubmit(formData, dispatch) {
  const resp = await fetch('https://climateactionyeg.org/sample-page/', {
    method: 'POST',
    body: formData,
  });

  console.log(resp);
  dispatch({
    type: 'completingRequest', payload: {
      response: resp.ok ? { success: true } : { success: false, errorMessage: resp.statusText },
    },
  });
}
