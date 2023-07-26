import React, { useContext } from 'react';

import backgroundImage from '../../assets/images/background.png';
import darkBackgroundImage from '../../assets/images/dark-background.jpg';
import {searchMessage } from '../../constants/constantsText';
import { BookContext } from '../../contexts/bookContext';
import SearchForm from './SearchForm';

const Header: React.FC = () => {
  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }
  
  const { setIsDarkMode, isDarkMode} = bookContext;

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <header className={`relative flex flex-col justify-center items-center min-h-[260px] px-5 shadow-md overflow-hidden p-2`}>
    <img 
      src={isDarkMode ? darkBackgroundImage : backgroundImage} 
      alt="Background" 
      className="absolute inset-0 w-full h-full object-cover "
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 "></div>
    <h1 className="text-4xl font-bold mb-5 z-10 text-white opacity-90">{searchMessage}</h1>
    <SearchForm />
    <button
      className={`absolute top-3 right-3 rounded-full h-8 w-8 flex items-center justify-center ${isDarkMode ? "bg-gray-700" : "bg-white"} transition-colors duration-300`}
      onClick={handleClick}
    >
      {isDarkMode ? <i className="fas fa-sun text-yellow-500"></i> : <i className="fas fa-moon text-gray-800"></i>}
    </button>
  </header>
  );
};

export default Header;
