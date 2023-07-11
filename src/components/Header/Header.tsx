import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import CategoriesForm from './CategoriesForm/CateoriesForm';
import SortForm from './SortForm/SormForm';
import backgroundImage from '../../assets/images/background.png';


const Header: React.FC = () => {
  return (
      <div className="relative flex flex-col justify-center items-center min-h-[260px] px-5 shadow-md overflow-hidden p-2">
      <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <h1 className='text-4xl font-bold mb-5 z-10 text-white opacity-90'>Search for books</h1>
      <SearchForm />
      <div className='flex flex-row justify-between items-center z-10'>
        <CategoriesForm />
        <SortForm />
      </div>
    </div>
  );
};

export default Header;
