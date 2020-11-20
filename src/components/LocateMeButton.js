import IconButton from '@material-ui/core/IconButton/index';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import React from 'react';

export default function LocateMeButton({ children, onClick }) {
  if (!navigator.geolocation) {
    return <>{children}</>;
  }

  return (
    <>
      <IconButton
        onClick={onClick}
        aria-label="Use your location to find the area councillor"
      >
        <MyLocationIcon />
      </IconButton>
    </>
  );
}
