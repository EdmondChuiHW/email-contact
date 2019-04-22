import './email-button.css';
import Button from "@material-ui/core/Button";
import React from "react";

const EmailButton = ({name = '', src = '', href = ''}) => (
  <Button color="primary" href={href} target="_blank" rel="noopener noreferrer">
    <img className="left-icon button-img" width={24} height={24} src={src} alt={name}/>
    {name}
  </Button>
);

export default EmailButton;
