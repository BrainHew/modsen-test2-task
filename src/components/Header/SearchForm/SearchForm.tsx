import React from 'react';

const SearchForm: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='relative w-full md:w-[560px]'>
        <input type='text' className='border py2 px-4 w-full mb-2 h-[42px] text-lg md:text-base' placeholder='Search for books...' />
      </div>
    </div>
  );
};

export default SearchForm;