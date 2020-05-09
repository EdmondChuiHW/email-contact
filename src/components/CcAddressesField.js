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

  return (
    <>
      <TextField
        label="CC"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        inputRef={inputRef}
        value={inputValue}
        onClick={() => inputRef.current.focus()}
        onFocus={() => setFocus(true)}
        onChange={e => setInputValue(e.currentTarget.value)}
        onBlur={onInputBlur}
        InputProps={{
          inputProps: isFocus ? undefined : { style: { height: 0 } },
          style: { flexDirection: 'column' },
          startAdornment: (
            <InputAdornment position="start" className={classes.chipsAdornment} style={isFocus ? undefined : { marginBottom: 0 }}>
              <>
                {ccAddresses && ccAddresses.map(address => (
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
