import React from "react";

import { categoryOptions, sortByOptions } from "../../../constants/selectOptions";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import SelectForm from "../SelectForm.tsx/SelectForm";

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
          <SelectForm label="Categories" value={category} options={categoryOptions} onChange={setCategory} />
        </ErrorBoundary>
        <div className="mx-4" />
        <ErrorBoundary>
         <SelectForm label="Sort By" value={sortBy} options={sortByOptions} onChange={setSortBy} />
        </ErrorBoundary>
      </div>
  </div>
  );
};

export default SearchForm;