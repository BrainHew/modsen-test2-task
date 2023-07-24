import React from 'react';

const PageNotFound: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.history.back()}>
        Go Back
      </button>
    </main>
  );
};

export default PageNotFound;