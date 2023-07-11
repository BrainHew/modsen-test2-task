import React from 'react';

const CategoriesForm: React.FC = () => {
  return (
    <div className='top-0 right-0 flex flex-col md:flex-row items-center mb-3 mt-3 md:ml-3'>
      <span className='text-white mr-3 mb-3 md:mb-0 opacity-90'>Categories:</span>
      <div className='relative w-full md:w-[200px]'>
        <input type='text' className='border rounded-md py2 px-4 w-full opacity-90  mr-2 md:mr-0 h-[37px]' placeholder='Categories...' />
      </div>
    </div>
  );
};

export default CategoriesForm;