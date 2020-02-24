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
  onClick: PropTypes.func,
};

const defaultProps = {
  name: '',
  src: '',
  href: '',
  left: <></>,
  onClick: undefined,
};

const EmailButton = ({
  name, src, href, left, onClick,
}) => (
  <Button
    color="primary"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
  >
    <ImgOrLeft src={src} alt={name} left={left} />
    <span>{name}</span>
  </Button>
);

EmailButton.propTypes = propTypes;
EmailButton.defaultProps = defaultProps;

export default EmailButton;
