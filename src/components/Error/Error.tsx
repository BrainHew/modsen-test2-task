import React from 'react';

const Error: React.FC = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">
        Unable to load book data. Please check your network connection and try again.
        If you are using a VPN, please ensure it is configured correctly and try again.
      </span>
    </div>
  );
};

export default Error;