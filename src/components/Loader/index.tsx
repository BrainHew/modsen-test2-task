import React from 'react';

const Loader: React.FC = () => {
  return (
    <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
};

export default Loader;