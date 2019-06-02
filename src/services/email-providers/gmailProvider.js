import gmailIcon from '../../imgs/gmail.ico';

const hrefResolver = ({email = '', cc = '', subject = '', body = ''}) => (
  // Sep 19 2016 http://stackoverflow.com/a/8852679/
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&cc=${cc}&su=${subject}&body=${body}`
);

const gmailProvider = {
  name: 'Gmail',
  src: gmailIcon,
  hrefResolver,
};

export default gmailProvider;
