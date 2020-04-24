import { TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import React, { useRef, useState } from "react";
import useCampaigns from '../hooks/useCampaigns';
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
    maxWidth: "45em"
  },
  icon: {
    marginRight: theme.spacing.unit * 0.5,
  },
  actions: { display: "flex", alignItems: "center", marginTop: theme.spacing.unit * 2 },
  copiedTextContainer: {
    flex: 1,
    alignItems: "baseline",
    alignSelf: "baseline",
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing.unit,
  }
});

function Campaign(props) {
  const { classes, id, subject, body } = props;
  const shareableLinkInputRef = useRef();
  const [, , update, remove] = useCampaigns();
  const [showCopied, setShowCopied] = useState(false);

  return <div key={id}>
    <Paper className={classes.card} elevation={1}>
      <TextField
        label="Subject"
        margin="normal"
        variant="outlined"
        fullWidth
        value={subject}
        onChange={e => update(id, { subject: e.target.value })}
      />
      <TextField
        label="Body template"
        rows={9}
        placeholder="Placeholder"
        multiline
        margin="normal"
        variant="outlined"
        fullWidth
        value={body}
        onChange={e => update(id, { body: e.target.value })}
      />

      <div className={classes.actions}>
        <TextField
          variant="standard"
          type="url"
          label="Shareable link"
          value={`https://edmondchuihw.github.io/email-contact/?cid=${id}`}
          InputProps={{ readOnly: true }}
          inputRef={shareableLinkInputRef}
          onClick={() => {
            shareableLinkInputRef.current.focus();
            shareableLinkInputRef.current.select();
            if (!document.execCommand("copy")) return;

            setShowCopied([]);
          }}
          style={{ flex: 2, alignSelf: "baseline" }}
          fullWidth
        />
        <div className={classes.copiedTextContainer} >
          <Timeout show={showCopied} onHide={() => setShowCopied(false)}>
            <DoneIcon fontSize="small" color="primary" style={{ alignSelf: "center", marginBottom: 4 }} />
            <Typography variant="overline" color="primary">Copied!</Typography>
          </Timeout>
        </div>
        <DeleteConfirm style={{ marginLeft: "auto" }} onDeleteConfirmed={() => remove(id)} />
      </div>
    </Paper>
  </div>;
}

export default withStyles(styles)(Campaign);
