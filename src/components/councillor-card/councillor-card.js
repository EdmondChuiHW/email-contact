import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import {always, startsWith, when} from "ramda";
import './councillor-card.css';
import {Divider} from "@material-ui/core";
import makeYegCoreZoneEmail from "../../utils/yeg-core-zone-template";
import Paper from "@material-ui/core/Paper";
import {isMobile} from "react-device-detect";
import EmailArray from "../email-array";
import commonEmailProviders, {mailToProvider} from "../../services/email-providers";

const defaultPhotoUrl = 'https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg';
const cc = 'council@edmonton.ca';

const CouncillorCard = ({firstName = '', lastName = '', ward = '', role = '', phone = '', email = '', photoUrl = defaultPhotoUrl}) => {
  const name = `${firstName} ${lastName}`;
  const subtitle = when(startsWith('Councillor'), s => `${s} – ${ward}`)(role);
  const normalizeWard = when(startsWith('City'), always('Edmonton'));

  const [emailBody, emailDisplay, emailSubject] = makeYegCoreZoneEmail({role, lastName, ward: normalizeWard(ward)});
  const emailProviders = isMobile
    ? [mailToProvider, ...commonEmailProviders]
    : [...commonEmailProviders, mailToProvider];

  return <Paper>
    <div className="contact">
      <img
        className="image"
        src={photoUrl}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary" paragraph>
          {subtitle}
        </Typography>
        <Typography component="pre" className="template">
          {emailDisplay}
        </Typography>
      </CardContent>
    </div>
    <Divider/>
    <CardActions>
      <div className="email-array">
        <EmailArray
          email={email}
          subject={emailSubject}
          body={emailBody}
          cc={cc}
          providers={emailProviders}
        />
        <Button color="primary" href={`tel:${phone}`}>
          <CallIcon className="left-icon"/>
          Call
        </Button>
      </div>
    </CardActions>
  </Paper>;
};

export default CouncillorCard;
