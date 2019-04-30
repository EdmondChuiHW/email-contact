import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({isLoading = false, size = 24, className = '', children}) => isLoading
  ? <CircularProgress size={size} thickness={4.8} className={className}/>
  : children;

export default Loading;
