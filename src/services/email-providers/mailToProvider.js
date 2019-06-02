import EmailIcon from '@material-ui/icons/Email';
import React from 'react';

const hrefResolver = ({email = '', cc = '', subject = '', body = ''}) => (
  `mailto:${email}?subject=${subject}&body=${body}&cc=${cc}`
);

const mailToProvider = {
  name: 'Mail app',
  left: <EmailIcon className="left-icon"/>,
  hrefResolver,
};

export default mailToProvider;
