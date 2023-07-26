import {useCallback, useEffect, useState } from "react";

import { searchBooks } from "../api/fetchBooks";
import { BookContext } from "../contexts/bookContext";
import useSearchBooks from "../hooks/useSearch";

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedValue = localStorage.getItem("isDarkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const { displayedBooks, setDisplayedBooks, totalItems, isLoading, error } = useSearchBooks(query, category, sortBy, 1500);

  const handleLoadMore = useCallback(async () => {
    const nextStartIndex = displayedBooks.length;
    const nextData = await searchBooks(query, category, sortBy, nextStartIndex, 30);
    setDisplayedBooks((prevBooks) => [...prevBooks, ...nextData.items]);
  }, [displayedBooks, query, category, sortBy, setDisplayedBooks]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
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
    isDarkMode,
    setIsDarkMode,
  };

  return <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>;
};