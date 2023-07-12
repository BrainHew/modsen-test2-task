import React from 'react';

interface SortFormProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortForm: React.FC<SortFormProps> = ({ sortBy, setSortBy }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
  };

  return (
    <div className='top-0 right-0 flex flex-col md:flex-row items-center mb-3 mt-3 md:ml-3'>
      <span className='text-white mr-3 mb-3 md:mb-0 opacity-90'>Sort By:</span>
      <div className='relative w-full md:w-[200px]'>
        <select className='border rounded-md py2 px-4 w-full opacity-90  mr-2 md:mr-0 h-[37px]' value={sortBy} onChange={handleSortChange}>
          <option value='relevance'>Relevance</option>
          <option value='newest'>Newest</option>
        </select>
      </div>
    </div>
  );
};

export default SortForm;