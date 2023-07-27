import { useCallback, useEffect, useState } from "react";

import { searchBooks } from "../api/fetchBooks";
import { BookContext } from "../contexts/bookContext";
import useSearchBooks, { IUseSearchBooksResult } from "../hooks/useSearch";
import { IBook, IBookResponse } from "../types/types";

export const BookProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isDarkMode");
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const {
    displayedBooks,
    setDisplayedBooks,
    totalItems,
    isLoading,
    error,
  }: IUseSearchBooksResult = useSearchBooks(query, category, sortBy, 1500);

  const handleLoadMore = useCallback(async (): Promise<void> => {
    const nextStartIndex: number = displayedBooks.length;
    const nextData: IBookResponse = await searchBooks(
      query,
      category,
      sortBy,
      nextStartIndex,
      30,
    );
    setDisplayedBooks((prevBooks: IBook[]) => [
      ...prevBooks,
      ...nextData.items,
    ]);
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

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
