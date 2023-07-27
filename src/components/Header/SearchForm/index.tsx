import {
  categoryOptions,
  sortByOptions,
} from "../../../constants/selectOptions";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BookContext } from "../../../contexts/bookContext";
import ErrorBoundary from "../../Error/ErrorBoundary";
import SelectForm from "../SelectForm.tsx";

const SearchForm = () => {
  const bookContext = useContext(BookContext);

  const navigate = useNavigate();

  if (!bookContext) {
    return null;
  }

  const { query, category, sortBy, setQuery, setCategory, setSortBy } =
    bookContext;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="relative flex h-full flex-col items-center justify-center">
      <form onSubmit={submitHandler} className="relative w-full md:w-[560px]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="py2 mb-2 h-[42px] w-full rounded-md border px-4 pr-10 text-lg opacity-90 md:text-base"
          placeholder="Search for books..."
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-[41px] rounded-md bg-gray-200 px-3 py-2 text-gray-800 hover:bg-gray-400 focus:outline-none"
        >
          Search
        </button>
      </form>
      <div className="z-10 flex flex-row items-center justify-between">
        <ErrorBoundary>
          <SelectForm
            {...{
              label: "Categories",
              value: category,
              options: categoryOptions,
              onChange: setCategory,
            }}
          />
        </ErrorBoundary>
        <div className="mx-4" />
        <ErrorBoundary>
          <SelectForm
            {...{
              label: "Sort By",
              value: sortBy,
              options: sortByOptions,
              onChange: setSortBy,
            }}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default SearchForm;
