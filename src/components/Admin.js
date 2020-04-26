import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import React from 'react';
import {
  Link, Redirect, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import useAuth from '../contexts/useAuth';
import Campaigns from './Campaigns';


const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function Admin(props) {
  const [user, signOut] = useAuth();
  if (!user) throw new Error('protected route');

  const { classes } = props;
  const { path, url } = useRouteMatch();
  const isCampaigns = !!useRouteMatch(`${path}/campaigns`);

  return (
    <>
      <Redirect from={path} to={`${path}/campaigns`} />
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            Email Campaigns Admin Panel
            </Typography>
            <Typography variant="body2" color="inherit">
              {user.email}
            </Typography>
            <Button color="inherit" onClick={signOut}>Sign out</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem
              button
              component={Link}
              to={`${url}/campaigns`}
              selected={isCampaigns}
            >
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="Campaigns" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/campaigns`}>
              <Campaigns />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default withStyles(styles)(Admin);
