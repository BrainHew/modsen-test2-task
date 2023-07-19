import React, { createContext, useState } from 'react';

import useSearchBooks from '../hooks/SearchHook';

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const { allBooks, displayedBooks, setDisplayedBooks, totalItems, isLoading, error } = useSearchBooks(query, category, sortBy);

  const handleLoadMore = () => {
    const nextBooks = allBooks.slice(displayedBooks.length, displayedBooks.length + 30);
    setDisplayedBooks([...displayedBooks, ...nextBooks]);
  };

  const contextValue = {
    query,
    setQuery,
    category,
    setCategory,
    sortBy,
    setSortBy,
    books: displayedBooks,
    totalItems,
    isLoading,
    handleLoadMore,
    error,
  };

  return (<BookContext.Provider value={contextValue}>{children}</BookContext.Provider>);
};