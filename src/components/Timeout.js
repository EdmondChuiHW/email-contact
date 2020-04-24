import React, { useEffect } from "react";

function Timeout({ show, onHide, duration = 3000, children }) {
  useEffect(() => {
    if (!show) return;

    const id = setTimeout(() => onHide && onHide(), duration);

    return () => clearTimeout(id);
  }, [show, onHide, duration]);

  return <>
    {show && children}
  </>;
}

export default Timeout;
