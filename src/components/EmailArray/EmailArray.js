import React from 'react';
import { pipe } from 'ramda';

import EmailButton from '../EmailButton';
import hrefSanitizer from '../../utils/hrefSanitizer';

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
