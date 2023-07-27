import React from "react";

import { errorMessage } from "../../../constants/constantsText";

const Error: React.FC = () => {
  return (
    <div
      className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">{errorMessage}</span>
    </div>
  );
};

export default Error;
