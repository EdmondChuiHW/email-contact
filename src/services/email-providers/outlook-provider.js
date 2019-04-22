import outlookIcon from "../../imgs/outlook.ico";
import {pipe} from "ramda";
import hrefSanitizer from "./href-sanitizer";

const hrefResolver = ({email = '', cc = '', subject = '', body = ''}) => (
  // Apr 21 2019 https://blogs.msdn.microsoft.com/carloshm/2016/01/16/how-to-compose-a-new-message-or-event-and-populate-fields-in-office365/#comment-1645
  // cc not support. Thanks Micro$0ft
  `https://outlook.live.com/?path=/mail/action/compose&to=${email}&cc=${cc}&subject=${subject}&body=${body}`
);

const outlookProvider = {
  name: 'Outlook',
  src: outlookIcon,
  hrefResolver: pipe(hrefSanitizer, hrefResolver),
};

export default outlookProvider;
