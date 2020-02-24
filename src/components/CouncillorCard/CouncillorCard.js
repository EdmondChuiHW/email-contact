import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import * as PropTypes from 'prop-types';
import { always, startsWith, when } from 'ramda';
import React from 'react';
import { isMobile } from 'react-device-detect';
import commonEmailProviders, { mailToProvider } from '../../services/email-providers';
import makeOpenParkingEmail from '../../utils/makeOpenParkingEmail';
import makeYegCoreZoneEmail from '../../utils/makeYegCoreZoneEmail';
import EmailArray from '../EmailArray';
import './CouncillorCard.css';

const defaultPhotoUrl = 'https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg';

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  ward: PropTypes.string,
  role: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  photoUrl: PropTypes.string,

  campaignId: PropTypes.string,
};

const defaultProps = {
  firstName: '',
  lastName: '',
  ward: '',
  role: '',
  phone: '',
  email: '',
  photoUrl: defaultPhotoUrl,
  campaignId: '',
};

function emailCreatorFrom(campaignId) {
  switch (campaignId) {
    case 'open_parking':
      return makeOpenParkingEmail;
    default:
      return makeYegCoreZoneEmail;
  }
}

const CouncillorCard = ({
  firstName, lastName, ward, role, phone, email, photoUrl, campaignId,
}) => {
  const name = `${firstName} ${lastName}`;
  const subtitle = when(startsWith('Councillor'), s => `${s} – ${ward}`)(role);
  const normalizeWard = when(startsWith('City'), always('Edmonton'));

  const emailCreator = emailCreatorFrom(campaignId);
  const [emailBody, emailSubject] = emailCreator({
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
            {emailBody}
          </Typography>
        </CardContent>
      </div>
      <Divider />
      <CardActions>
        <div className="email-array">
          <EmailArray
            email={[email, 'council@edmonton.ca', 'city.clerk@edmonton.ca'].join(',')}
            subject={emailSubject}
            body={emailBody}
            providers={emailProviders}
            onClick={() => undefined}
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
