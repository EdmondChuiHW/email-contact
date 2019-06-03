import './EmailButton.css';
import Button from '@material-ui/core/Button';
import React from 'react';

const makeImgOrLeft = ({ src = '', name = '', left = <></> }) => (src
  ? (
    <img
      className="left-icon button-img"
      width={24}
      height={24}
      src={src}
      alt={name}
    />
  )
  : left);

const EmailButton = ({
  name = '', src = '', href = '', left = <></>,
}) => (
  <Button
    color="primary"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {makeImgOrLeft({ src, name, left })}
    <span>{name}</span>
  </Button>
);

export default EmailButton;
