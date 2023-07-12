import React, { useState } from "react";
import useSearchBooks from "./SearchHook";
import { IBook } from "../../types/types";

interface SearchFormProps {
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const SearchForm: React.FC<SearchFormProps> = ({setBooks}) => {
  const [query, setQuery] = useState("");
  const {isLoading, error, books } = useSearchBooks(query);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setBooks(books);
  };

  return (
    <div className="flex items-center justify-center h-full">
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
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default SearchForm;