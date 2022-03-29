import React, { useEffect } from 'react';

const ErrorAlert = ({ setIsError }) => {
  useEffect(() => {
    const timerId = setTimeout(() => setIsError(false), 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [setIsError]);
  return (
    <span
      style={{
        color: 'red',
        fontSize: '1rem',
        marginTop: '2rem',
      }}
    >
      Something went wrong. <br /> Please try again leter!
    </span>
  );
};

export default ErrorAlert;
