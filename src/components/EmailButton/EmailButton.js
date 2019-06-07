import './EmailButton.css';
import Button from '@material-ui/core/Button';
import React from 'react';
import * as PropTypes from 'prop-types';
import ImgOrLeft from './ImgOrLeft';

const propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  href: PropTypes.string,
  left: PropTypes.node,
};

const defaultProps = {
  name: '',
  src: '',
  href: '',
  left: <></>,
};

const EmailButton = ({
  name, src, href, left,
}) => (
  <Button
    color="primary"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ImgOrLeft src={src} alt={name} left={left} />
    <span>{name}</span>
  </Button>
);

EmailButton.propTypes = propTypes;
EmailButton.defaultProps = defaultProps;

export default EmailButton;
