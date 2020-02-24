import { pipe } from 'ramda';
import React from 'react';
import hrefSanitizer from '../../utils/hrefSanitizer';
import EmailButton from '../EmailButton';


function EmailArray(props) {
  const { providers, ...emailArrayProps } = props;
  return providers.map((provider) => {
    const { hrefResolver, name, ...rest } = provider;
    return (
      <EmailButton
        key={name}
        name={name}
        href={pipe(hrefSanitizer, hrefResolver)(emailArrayProps)}
        {...emailArrayProps}
        {...rest}
      />
    );
  });
}

export default EmailArray;
