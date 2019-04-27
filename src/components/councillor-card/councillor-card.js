import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import {always, pipe, startsWith, when} from "ramda";
import './councillor-card.css';
import {Divider} from "@material-ui/core";
import makeYegCoreZoneEmail from "../../utils/yeg-core-zone-template";
import Paper from "@material-ui/core/Paper";
import {BrowserView, MobileView} from "react-device-detect";
import EmailArray from "../email-array";
import hrefSanitizer from "../../services/email-providers/href-sanitizer";

const defaultPhotoUrl = 'https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg';
const cc = 'council@edmonton.ca';

// todo refactor to use email provider
const mailToHrefResolver = pipe(
  hrefSanitizer,
  ({email = '', cc = '', subject = '', body = ''}) => (
    `mailto:${email}?subject=${subject}&body=${body}&cc=${cc}`
  ),
);

const CouncillorCard = ({firstName = '', lastName = '', ward = '', role = '', phone = '', email = '', photoUrl = defaultPhotoUrl}) => {
  const name = `${firstName} ${lastName}`;
  const subtitle = when(startsWith('Councillor'), s => `${s} – ${ward}`)(role);
  const normalizeWard = when(startsWith('City'), always('Edmonton'));

  const [emailBody, emailDisplay, emailSubject] = makeYegCoreZoneEmail({role, lastName, ward: normalizeWard(ward)});

  const mailToButton = <Button color="primary"
                               href={mailToHrefResolver({email, cc, subject: emailSubject, body: emailBody})}
                               target="_blank"
                               rel="noopener noreferrer">
    <EmailIcon className="left-icon"/>
    Mail app
  </Button>;

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
        <MobileView>
          {mailToButton}
        </MobileView>
        <EmailArray email={email} subject={emailSubject} body={emailBody} cc={cc}/>
        <BrowserView>
          {mailToButton}
        </BrowserView>
        <Button color="primary" href={`tel:${phone}`}>
          <CallIcon className="left-icon"/>
          Call
        </Button>
      </div>
    </CardActions>
  </Paper>;
};

export default CouncillorCard;
