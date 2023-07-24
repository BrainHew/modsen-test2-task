import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { categoryOptions, sortByOptions } from "../../../constace/selectOptions";
import { BookContext } from '../../../contexts/bookContext';
import ErrorBoundary from "../../Error/ErrorBoundary";
import SelectForm from "../SelectForm.tsx";

const SearchForm = () => {

  const bookContext = useContext(BookContext);

  const navigate = useNavigate();
  
  if (!bookContext) {
    return null;
  }
  
  const {query, category, sortBy, setQuery, setCategory, setSortBy} = bookContext;

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <form onSubmit={submitHandler} className="relative w-full md:w-[560px]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="border rounded-md py2 px-4 opacity-90 w-full mb-2 h-[42px] text-lg md:text-base pr-10"
          placeholder="Search for books..."
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-[41px] px-3 py-2 rounded-md text-gray-800 bg-gray-200 hover:bg-gray-400 focus:outline-none"
        >
          Search
        </button>
      </form>
      <div className="flex flex-row justify-between items-center z-10">
        <ErrorBoundary>
          <SelectForm {...{ label: "Categories", value: category, options: categoryOptions, onChange: setCategory }} />
        </ErrorBoundary>
        <div className="mx-4" />
        <ErrorBoundary>
          <SelectForm {...{ label: "Sort By", value: sortBy, options: sortByOptions, onChange: setSortBy }} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default SearchForm;