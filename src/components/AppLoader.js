import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";

const AppLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="page-loader">
          <div className='load-logo'>
            <RingLoader color={'white'} loading={isLoading} size={150}/>
          </div>
          <br></br>
          <div className='load-text'>
            <h1>Please wait...</h1>
          </div>
        </div>
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
};

export default AppLoader;