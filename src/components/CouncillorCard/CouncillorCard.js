import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import * as PropTypes from 'prop-types';
import { always, startsWith, when } from 'ramda';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import commonEmailProviders, { mailToProvider } from '../../services/email-providers';
import makeEmailCreatorFromCampaign from '../../utils/makeEmailCreatorFromCampaign';
import EmailArray from '../EmailArray';
import ShareSheet from '../ShareSheet/ShareSheet';
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

const shareSheetEnabled = false;

const CouncillorCard = ({
  firstName, lastName, ward, role, phone, email, photoUrl, campaign,
}) => {
  const [showShareSheet, setShowShareSheet] = useState(false);
  const name = `${firstName} ${lastName}`;
  const subtitle = when(startsWith('Councillor'), s => `${s} – ${ward}`)(role);
  const normalizeWard = when(startsWith('City'), always('Edmonton'));

  const emailCreator = makeEmailCreatorFromCampaign(campaign);
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
        <CardContent className="text-content">
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
            onClick={() => setShowShareSheet(true)}
          />
          <Button color="primary" href={`tel:${phone}`}>
            <CallIcon className="left-icon" />
            Call
          </Button>
        </div>
      </CardActions>
      {shareSheetEnabled && showShareSheet && (
        <>
          <Divider />
          <CardContent>
            <ShareSheet />
          </CardContent>
        </>
      )}
    </Paper>
  );
};

CouncillorCard.propTypes = propTypes;
CouncillorCard.defaultProps = defaultProps;

export default CouncillorCard;
