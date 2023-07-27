import { useState, useEffect } from "react";

import { searchBooks } from "../api/fetchBooks";
import { IBook } from "../types/types";
import useDebounce from "./useDebounce";

export interface IUseSearchBooksResult {
  allBooks: IBook[];
  displayedBooks: IBook[];
  isLoading: boolean;
  error: Error | null;
  totalItems: number;
  setDisplayedBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export interface IFetchBooksParams {
  query: string;
  category: string;
  sortBy: string;
  startIndex: number;
  maxResults: number;
}
// eslint-disable-next-line no-unused-vars
type DebouncedFetchBooksFunction = (params: IFetchBooksParams) => Promise<void>;

const useSearchBooks = (
  query: string,
  category: string,
  sortBy: string,
  delay: number,
): IUseSearchBooksResult => {
  const [allBooks, setAllBooks] = useState<IBook[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0);

  const debouncedFetchBooks: DebouncedFetchBooksFunction = useDebounce(
    async (params: IFetchBooksParams) => {
      const { query, category, sortBy, startIndex, maxResults } = params;
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const data = await searchBooks(
            query,
            category,
            sortBy,
            startIndex,
            maxResults,
          );
          setAllBooks((prevBooks: IBook[]) => [...prevBooks, ...data.items]);
          setTotalItems(data.totalItems);
          setDisplayedBooks((prevBooks: IBook[]) => [
            ...prevBooks,
            ...data.items.slice(
              prevBooks.length,
              prevBooks.length + maxResults,
            ),
          ]);
        } catch (e: unknown) {
          if (e instanceof Error) {
            setError(e);
          }
        }
        setIsLoading(false);
      } else {
        setAllBooks([]);
        setDisplayedBooks([]);
      }
    },
    delay,
  );

  useEffect(() => {
    setDisplayedBooks([]);
    setTotalItems(0);
    void debouncedFetchBooks({
      query,
      category,
      sortBy,
      startIndex: 0,
      maxResults: 30,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, sortBy, delay]);

  return {
    allBooks,
    displayedBooks,
    setDisplayedBooks,
    isLoading,
    error,
    totalItems,
  };
};

export default useSearchBooks;
