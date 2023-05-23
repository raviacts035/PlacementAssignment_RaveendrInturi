import React, { useEffect } from 'react';

const Alert = ({ alert, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  return <p className="bg-sky-200 py-2 px-10 rounded-xl">{alert}</p>;
};

export default Alert;