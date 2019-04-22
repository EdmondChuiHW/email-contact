import gmailIcon from "../../imgs/gmail.ico";
import {pipe} from "ramda";
import hrefSanitizer from "./href-sanitizer";

const hrefResolver = ({email = '', cc = '', subject = '', body = ''}) => (
  // Sep 19 2016 http://stackoverflow.com/a/8852679/
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&cc=${cc}&su=${subject}&body=${body}`
);

const gmailProvider = {
  name: 'Gmail',
  src: gmailIcon,
  hrefResolver: pipe(hrefSanitizer, hrefResolver),
};

export default gmailProvider;
