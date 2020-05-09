import {
  Chip, InputAdornment, TextField, withStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import firebase from 'firebase';
import React, { useEffect, useRef, useState } from 'react';

const styles = (theme => ({
  chipsAdornment: {
    alignSelf: 'start',
    height: 'auto',
    maxHeight: 'initial',
    marginBottom: theme.spacing.unit,
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit / 2,
  },
  input: {
    paddingTop: theme.spacing.unit,
  },
  inputIdle: {
    paddingBottom: theme.spacing.unit,
  },
}));

function CcAddressesField({ classes, ccAddresses, update }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef();
  const hasExisting = ccAddresses && ccAddresses.length > 0;
  const showInput = !hasExisting || isFocus;

  useEffect(() => {
    if (ccAddresses && ccAddresses.length) return;

    setInputValue('');
  }, [ccAddresses]);

  return (
    <>
      <TextField
        label="CC"
        margin="normal"
        variant="outlined"
        placeholder="e.g. council@edmonton.ca, city.clerk@edmonton.ca"
        fullWidth
        multiline
        inputRef={inputRef}
        value={inputValue}
        onClick={() => inputRef.current.focus()}
        onFocus={() => setFocus(true)}
        onChange={e => setInputValue(e.currentTarget.value)}
        onBlur={onInputBlur}
        InputProps={{
          className: classNames({
            [classes.input]: hasExisting,
            [classes.inputIdle]: hasExisting && !showInput,
          }),
          inputProps: showInput ? undefined : { style: { height: 0 } },
          style: { flexDirection: 'column' },
          startAdornment: hasExisting && (
            <InputAdornment position="start" className={classes.chipsAdornment} style={showInput ? undefined : { marginBottom: 0 }}>
              <>
                {ccAddresses.map(address => (
                  <Chip
                    key={address}
                    label={address}
                    onDelete={handleDelete(address)}
                    className={classes.chip}
                  />
                ))}
              </>
            </InputAdornment>
          ),
        }}
      />
    </>
  );

  function handleDelete(email) {
    return () => {
      update({
        ccAddresses: firebase.firestore.FieldValue.arrayRemove(email),
      });
    };
  }

  function onInputBlur() {
    setFocus(false);
    setInputValue('');

    const addresses = inputValue.split(',').map(e => e.trim()).filter(e => !!e);
    if (!addresses.length) return;

    setInputValue(' ');
    update({
      ccAddresses: firebase.firestore.FieldValue.arrayUnion(...addresses),
    });
  }
}

export default withStyles(styles)(CcAddressesField);
