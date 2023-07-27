import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      role="status"
      className="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed dark:border-violet-400"></div>
    </div>
  );
};

export default Loader;
