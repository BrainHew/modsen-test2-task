import React from 'react';

import backgroundImage from '../../assets/images/background.png';
import {searchMessage } from '../../constants/constantsText';
import SearchForm from './SearchForm';

const Header: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[260px] px-5 shadow-md overflow-hidden p-2">
      <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h1 className="text-4xl font-bold mb-5 z-10 text-white opacity-90">{searchMessage}</h1>
      <SearchForm/>
    </div>
  );
};

export default Header;
