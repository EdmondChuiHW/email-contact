import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import { always, startsWith, when } from 'ramda';
import './CouncillorCard.css';
import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { isMobile } from 'react-device-detect';
import * as PropTypes from 'prop-types';
import makeYegCoreZoneEmail from '../../utils/makeYegCoreZoneEmail';
import EmailArray from '../EmailArray';
import commonEmailProviders, { mailToProvider } from '../../services/email-providers';

const defaultPhotoUrl = 'https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg';
const cc = 'council@edmonton.ca';

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  ward: PropTypes.string,
  role: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  photoUrl: PropTypes.string,
};

const defaultProps = {
  firstName: '',
  lastName: '',
  ward: '',
  role: '',
  phone: '',
  email: '',
  photoUrl: defaultPhotoUrl,
};

const CouncillorCard = ({
  firstName, lastName, ward, role, phone, email, photoUrl,
}) => {
  const name = `${firstName} ${lastName}`;
  const subtitle = when(startsWith('Councillor'), s => `${s} – ${ward}`)(role);
  const normalizeWard = when(startsWith('City'), always('Edmonton'));

  const [emailBody, emailDisplay, emailSubject] = makeYegCoreZoneEmail({
    role,
    lastName,
    ward: normalizeWard(ward),
  });
  const emailProviders = isMobile
    ? [mailToProvider, ...commonEmailProviders]
    : [...commonEmailProviders, mailToProvider];

  return (
    <Paper>
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
      <Divider />
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
            <CallIcon className="left-icon" />
          Call
          </Button>
        </div>
      </CardActions>
    </Paper>
  );
};

CouncillorCard.propTypes = propTypes;
CouncillorCard.defaultProps = defaultProps;

export default CouncillorCard;
