import { Button, IconButton, withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, { useState } from "react";


const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 0.5,
  }
});

function DeleteConfirm({ onDeleteConfirmed, classes }) {
  const [isAwaitingConfirm, setAwaitingConfirm] = useState(false);
  return <>
    {
      isAwaitingConfirm
        ? <>
          <Button aria-label="Cancel" onClick={() => setAwaitingConfirm(false)}>
            Cancel
          </Button>
          <Button aria-label="Confirm delete" color="secondary" onClick={onDeleteConfirmed}>
            <DeleteForeverIcon className={classes.icon} />
            Delete
          </Button>
        </>
        : <>
          <IconButton aria-label="Delete" onClick={() => setAwaitingConfirm(true)}>
            <DeleteIcon />
          </IconButton>
        </>
    }
  </>;
}

export default withStyles(styles)(DeleteConfirm);
