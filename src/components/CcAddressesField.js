import {
  Chip, InputAdornment, TextField, withStyles,
} from '@material-ui/core';
import firebase from 'firebase';
import React, { useRef, useState } from 'react';

const styles = (theme => ({
  chipsAdornment: {
    alignSelf: 'start',
    height: 'auto',
    maxHeight: 'initial',
    marginBottom: theme.spacing.unit,
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
}));

function CcAddressesField({ classes, ccAddresses, update }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef();
  const showInput = !ccAddresses || !ccAddresses.length || isFocus;

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
          inputProps: showInput ? undefined : { style: { height: 0 } },
          style: { flexDirection: 'column' },
          startAdornment: ccAddresses && ccAddresses.length && (
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

    update({
      ccAddresses: firebase.firestore.FieldValue.arrayUnion(...addresses),
    });
  }
}

export default withStyles(styles)(CcAddressesField);
