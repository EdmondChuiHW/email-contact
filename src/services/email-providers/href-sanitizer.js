const hrefSanitizer = ({subject = '', body = '', ...rest}) => ({
  subject: encodeURIComponent(subject),
  body: encodeURIComponent(body),
  ...rest,
});

export default hrefSanitizer;
