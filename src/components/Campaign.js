import {
  IconButton, InputAdornment, TextField, Tooltip, Typography,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import OpenTabIcon from '@material-ui/icons/OpenInNew';
import React, { useRef, useState } from 'react';
import useCampaigns from '../hooks/useCampaigns';
import CcAddressesField from './CcAddressesField';
import DeleteConfirm from './DeleteConfirm';
import Timeout from './Timeout';


const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing.unit * 4,

    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  textContext: {
    maxWidth: '45em',
  },
  icon: {
    marginRight: theme.spacing.unit * 0.5,
  },
  actions: { display: 'flex', alignItems: 'end', marginTop: theme.spacing.unit * 2 },
  copiedTextContainer: {
    flex: 1,
    alignItems: 'baseline',
    alignSelf: 'baseline',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: theme.spacing.unit,
  },
  templateGreeting: { alignSelf: 'start', height: 'auto', marginBottom: theme.spacing.unit * 2 },
  templateClosing: {
    alignSelf: 'end', height: 'auto', marginLeft: 0, marginTop: theme.spacing.unit * 2,
  },
});

function Campaign(props) {
  const {
    classes, id, subject, body, ccAddresses,
  } = props;
  const shareableLink = `${window.location.origin}/email-contact/?cid=${id}`;
  const shareableLinkInputRef = useRef();
  const [, , update, remove] = useCampaigns();
  const [showCopied, setShowCopied] = useState(false);

  return (
    <div key={id}>
      <Paper className={classes.card} elevation={1}>
        <TextField
          label="Subject"
          margin="normal"
          variant="outlined"
          fullWidth
          value={subject}
          onChange={e => update(id, { subject: e.target.value })}
        />
        <CcAddressesField ccAddresses={ccAddresses} update={updates => update(id, updates)} />
        <TextField
          label="Body template"
          multiline
          margin="normal"
          variant="outlined"
          fullWidth
          value={body}
          onChange={e => update(id, { body: e.target.value })}
          InputProps={{
            style: { flexDirection: 'column' },
            startAdornment: (
              <InputAdornment position="start" className={classes.templateGreeting}>
                <Tooltip title="automatically updated in live mode" placement="right">
                  <Typography variant="body1" color="textSecondary">Hello Councillor Knack,</Typography>
                </Tooltip>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" className={classes.templateClosing}>
                <Tooltip title="automatically updated in live mode" placement="right">
                  <Typography variant="body1" color="textSecondary">Constituent from Ward 1</Typography>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />

        <div className={classes.actions}>
          <TextField
            variant="standard"
            type="url"
            label="Shareable link"
            value={shareableLink}
            inputRef={shareableLinkInputRef}
            onClick={() => {
              shareableLinkInputRef.current.focus();
              shareableLinkInputRef.current.select();
              if (!document.execCommand('copy')) return;

              setShowCopied([]);
            }}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton href={shareableLink} target="_blank" rel="noreferrer noopener" onClick={e => e.stopPropagation()} aria-label="preview in new tab">
                    <OpenTabIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            style={{ flex: 3, alignSelf: 'baseline' }}
            fullWidth
          />
          <div className={classes.copiedTextContainer}>
            <Timeout show={showCopied} onHide={() => setShowCopied(false)}>
              <DoneIcon fontSize="small" color="primary" style={{ alignSelf: 'center', marginBottom: 4 }} />
              <Typography variant="overline" color="primary">Copied!</Typography>
            </Timeout>
          </div>
          <DeleteConfirm onDeleteConfirmed={() => remove(id)} />
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Campaign);
