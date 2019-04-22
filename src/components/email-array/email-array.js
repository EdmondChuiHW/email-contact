import {map} from "ramda";
import emailProviders from "../../services/email-providers";
import EmailButton from "./email-button";

const makeButtonFromProvider = ({email = '', cc = '', subject = '', body = ''}) =>
  ({name = '', src = '', hrefResolver}) => (
    EmailButton({name, src, href: hrefResolver({email, cc, subject, body})})
  );

const EmailArray = ({email = '', cc = '', subject = '', body = ''}) => (
  map(makeButtonFromProvider({email, cc, subject, body}))(emailProviders)
);

export default EmailArray;
