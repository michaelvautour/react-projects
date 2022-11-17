import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }: any) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  // above [list] allows it so the timer resets to 3 seconds if multiple actions happen at once
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
