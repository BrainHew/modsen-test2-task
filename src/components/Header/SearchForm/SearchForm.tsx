import React from "react";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import CategoriesForm from "../CategoriesForm/CateoriesForm";
import SortForm from "../SortForm/SormForm";

interface SearchFormProps {
  query: string;
  category: string;
  sortBy: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchForm: React.FC<SearchFormProps> = ({query, category, sortBy, setQuery, setCategory, setSortBy, setPage }) => {

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className=" flex flex-col items-center justify-center h-full">
      <form onSubmit={submitHandler} className="relative w-full md:w-[560px]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="border rounded-md py2 px-4 opacity-90 w-full mb-2 h-[42px] text-lg md:text-base pr-10"
          placeholder="Search for books..."
        />
        <button
          type="button"
          onClick={submitHandler}
          className="absolute top-0 right-0 h-[41px] px-3 py-2 rounded-md text-gray-800 bg-gray-200 hover:bg-gray-400 focus:outline-none"
        >
          Search
        </button>
      </form>
      <div className="flex flex-row justify-between items-center z-10">
        <ErrorBoundary>
          <CategoriesForm category={category} setCategory={setCategory} />
        </ErrorBoundary>
        <div className="mx-4" />
        <ErrorBoundary>
         <SortForm sortBy={sortBy} setSortBy={setSortBy} />
        </ErrorBoundary>
      </div>
  </div>
  );
};

export default SearchForm;