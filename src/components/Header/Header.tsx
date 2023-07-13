import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import backgroundImage from '../../assets/images/background.png';
import { IBook } from '../types/types';

interface HeaderProps {
  query: string;
  category: string;
  sortBy: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({query, category, sortBy, setQuery, setCategory, setSortBy, setPage }) => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[260px] px-5 shadow-md overflow-hidden p-2">
      <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h1 className="text-4xl font-bold mb-5 z-10 text-white opacity-90">Search for books</h1>
      <SearchForm
      query={query}
      category={category}
      sortBy={sortBy}
      setQuery={setQuery}
      setCategory={setCategory}
      setSortBy={setSortBy}
      setPage={setPage}
      />
    </div>
  );
};

export default Header;
