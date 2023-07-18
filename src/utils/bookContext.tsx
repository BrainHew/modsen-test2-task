import React, { createContext, useState } from 'react';

import useSearchBooks from '../hooks/SearchHook';

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [maxResults, setMaxResults] = useState(30);

  const { books, totalItems, isLoading, error } = useSearchBooks(query, category, sortBy,  maxResults);

  const handleLoadMore = () => {
    setMaxResults(maxResults+30)
  };

  const contextValue = {
    query,
    setQuery,
    category,
    setCategory,
    sortBy,
    setSortBy,
    maxResults,
    books,
    totalItems,
    isLoading,
    handleLoadMore,
    error,
  };

  return (<BookContext.Provider value={contextValue}>{children}</BookContext.Provider>);
};