import React from 'react';
import {keys, map, pick, pipe} from 'ramda';
import EmailButton from '../EmailButton';
import commonEmailProviders from '../../services/email-providers';
import hrefSanitizer from '../../utils/hrefSanitizer';

const defaultHrefResolverParams = {email: '', cc: '', subject: '', body: ''};

const makeButtonFromProvider = (hrefResolverParams = defaultHrefResolverParams) =>
  ({name = '', hrefResolver, ...rest}) => (
    <EmailButton
      key={name}
      name={name}
      href={pipe(hrefSanitizer, hrefResolver)(hrefResolverParams)}
      {...rest}
    />
  );

const hrefResolverParamsPicker = pick(keys(defaultHrefResolverParams));
const makeProviderToButtonMapperWithProps = pipe(
  hrefResolverParamsPicker,
  makeButtonFromProvider,
);

const EmailArray = (props = {providers: commonEmailProviders, ...defaultHrefResolverParams}) => (
  map(makeProviderToButtonMapperWithProps(props), props.providers)
);

export default EmailArray;
