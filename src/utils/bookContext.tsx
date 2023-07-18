import React, { createContext, useEffect, useState } from 'react';

import useSearchBooks from '../hooks/SearchHook';
import { IBook } from '../types/types';

export const BookContext = createContext<any>(null);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);
  const maxResults = 30;
  const [isLoading, setIsLoading] = useState(false);
  const [displayedBooks, setDisplayedBooks] = useState<IBook[]>([]);

  const { books, totalItems } = useSearchBooks(query, category, sortBy, page, maxResults);
  
  useEffect(() => {
    setDisplayedBooks(books.slice(0, maxResults));
  }, [books]);

  const handleLoadMore = () => {
    setDisplayedBooks(books.slice(0, displayedBooks.length + maxResults));
  };
  
  const contextValue = {
    query,
    setQuery,
    category,
    setCategory,
    sortBy,
    setSortBy,
    page,
    setPage,
    maxResults,
    books,
    totalItems,
    isLoading, // Добавляем isLoading в контекст
    setIsLoading, // Добавляем setIsLoading в контекст
    displayedBooks,
    handleLoadMore
  };

  return (<BookContext.Provider value={contextValue}>{children}</BookContext.Provider>);
};