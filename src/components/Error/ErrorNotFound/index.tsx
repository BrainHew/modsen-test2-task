import React from 'react';

import { buttonTextGoBack, errorPageNotFound, pageNotFound } from '../../../constants/constantsText';

const PageNotFound: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{pageNotFound}</h1>
      <p className="text-xl text-gray-500 mb-8">{errorPageNotFound}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.history.back()}>
        {buttonTextGoBack}
      </button>
    </main>
  );
};

export default PageNotFound;