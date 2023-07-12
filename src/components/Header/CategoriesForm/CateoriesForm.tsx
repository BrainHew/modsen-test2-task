import React from 'react';

interface CategoriesFormProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoriesForm: React.FC<CategoriesFormProps> = ({ category, setCategory }) => {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className='top-0 right-0 flex flex-col md:flex-row items-center mb-3 mt-3 md:ml-3'>
      <span className='text-white mr-3 mb-3 md:mb-0 opacity-90'>Categories:</span>
      <div className='relative w-full md:w-[200px]'>
        <select className='border rounded-md py2 px-4 w-full opacity-90  mr-2 md:mr-0 h-[37px]' value={category} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='art'>Art</option>
          <option value='biography'>Biography</option>
          <option value='computers'>Computers</option>
          <option value='history'>History</option>
          <option value='medical'>Medical</option>
          <option value='poetry'>Poetry</option>
        </select>
      </div>
    </div>
  );
};

export default CategoriesForm;