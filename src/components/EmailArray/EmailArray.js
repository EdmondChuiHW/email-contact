import React from 'react';
import {
  keys, map, pick, pipe,
} from 'ramda';
import * as PropTypes from 'prop-types';
import EmailButton from '../EmailButton';
import commonEmailProviders from '../../services/email-providers';
import hrefSanitizer from '../../utils/hrefSanitizer';

const defaultHrefResolverParams = {
  email: '', cc: '', subject: '', body: '',
};

const makeButtonFromProvider = (hrefResolverParams = defaultHrefResolverParams) => {
  const Button = ({ name, hrefResolver, ...rest }) => (
    <EmailButton
      key={name}
      name={name}
      href={pipe(hrefSanitizer, hrefResolver)(hrefResolverParams)}
      {...rest}
    />
  );
  Button.propTypes = {
    name: PropTypes.string,
    hrefResolver: PropTypes.func.isRequired,
  };
  Button.defaultProps = {
    name: '',
  };
  return Button;
};

const hrefResolverParamsPicker = pick(keys(defaultHrefResolverParams));
const makeProviderToButtonMapperWithProps = pipe(
  hrefResolverParamsPicker,
  makeButtonFromProvider,
);

const EmailArray = (props = { providers: commonEmailProviders, ...defaultHrefResolverParams }) => (
  map(makeProviderToButtonMapperWithProps(props), props.providers)
);

export default EmailArray;
