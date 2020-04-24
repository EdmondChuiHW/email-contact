import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from "react";
import useCampaigns from '../hooks/useCampaigns';
import Campaign from './Campaign';


const styles = theme => ({
  card: {
    minWidth: 275,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
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
});

function Campaigns(props) {
  const { classes } = props;
  const [campaigns, create] = useCampaigns();

  if (!campaigns) return <>Loading…</>;

  return <div className={classes.textContext}>
    {campaigns.map(snapshot => {
      const campaign = snapshot.data();
      return <Campaign key={snapshot.id} id={snapshot.id} {...campaign} />;
    })}
    <Button fullWidth variant="outlined" color="primary" onClick={create}>
      <AddIcon className={classes.icon} />
      <span>Add new campign</span>
    </Button>
  </div>;
}

export default withStyles(styles)(Campaigns);
