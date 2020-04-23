import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from "react";
import useCampaigns from '../hooks/useCampaigns';

function Campaigns(props) {
  const [campaigns] = useCampaigns();

  if (!campaigns) return <>Loading…</>;

  return <>
    {campaigns.map(snapshot => {
      const campaign = snapshot.data();
      return <Fragment key={snapshot.id}>
        <Typography variant="h3">
          {campaign.name}
        </Typography>
        <Typography variant="h4">
          {campaign.subject}
        </Typography>
        <Typography paragraph>
          {campaign.body}
        </Typography>
        <Divider />
      </Fragment>
    })}
  </>;
}

export default Campaigns;
