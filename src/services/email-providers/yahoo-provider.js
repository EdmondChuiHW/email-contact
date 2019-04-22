import yahooIcon from "../../imgs/yahoo.ico";
import {pipe} from "ramda";
import hrefSanitizer from "./href-sanitizer";

const hrefResolver = ({email = '', cc = '', subject = '', body = ''}) => (
  // Sep 19 2016 http://stackoverflow.com/a/30106907/1578294
  `https://compose.mail.yahoo.com/?to=${email}&cc=${cc}&subject=${subject}&body=${body}`
);

const yahooProvider = {
  name: 'Yahoo',
  src: yahooIcon,
  hrefResolver: pipe(hrefSanitizer, hrefResolver),
};

export default yahooProvider;
