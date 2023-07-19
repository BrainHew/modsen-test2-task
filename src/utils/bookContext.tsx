import React, { createContext, useEffect, useState } from 'react';

import { searchBooks } from '../api/fetchBooks';
import useSearchBooks from '../hooks/SearchHook';

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const { displayedBooks, setDisplayedBooks, totalItems, isLoading, error } = useSearchBooks(query, category, sortBy, 1500);

  useEffect(() => {
    setDisplayedBooks([]);
  }, [query, category, sortBy,setDisplayedBooks]);

  const handleLoadMore = async () => {
    const nextStartIndex = displayedBooks.length;
    const nextData = await searchBooks(query, category, sortBy, nextStartIndex, 30);
    setDisplayedBooks([...displayedBooks, ...nextData.items]);
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