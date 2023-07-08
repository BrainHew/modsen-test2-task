import React from 'react';

const CategoriesForm: React.FC = () => {
  return (
    <div className=' top-0 right-0 flex items-center mb-3 mt-3 ml-3'>
      <span className='text-white mr-3'>Сategories:</span>
      <div className='relative w-[200px]'>
        <input
          type='text'
          className='border py2 px-4 w-full mr-[30px] h-[37px]'
          placeholder='categories...'
        />
      </div> 
    </div>
  );
};

export default CategoriesForm;