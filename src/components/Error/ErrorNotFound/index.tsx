import React from "react";

import {
  buttonTextGoBack,
  errorPageNotFound,
  pageNotFound,
} from "../../../constants/constantsText";

const PageNotFound: React.FC = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">{pageNotFound}</h1>
      <p className="mb-8 text-xl text-gray-500">{errorPageNotFound}</p>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => window.history.back()}
      >
        {buttonTextGoBack}
      </button>
    </main>
  );
};

export default PageNotFound;
