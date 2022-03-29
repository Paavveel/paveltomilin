import React, { useEffect } from 'react';

const ErrorAlert = ({ setIsSent }) => {
  useEffect(() => {
    const timerId = setTimeout(() => setIsSent(false), 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [setIsSent]);
  return (
    <span
      style={{
        color: 'lime',
        fontSize: '1rem',
        marginTop: '2rem',
      }}
    >
      Message sent! <br /> Thanks!
    </span>
  );
};

export default ErrorAlert;
