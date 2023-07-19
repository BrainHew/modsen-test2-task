import { useState, useEffect, useCallback } from 'react';

import { searchBooks } from '../api/fetchBooks';
import { IBook } from '../types/types';
import useDebounce from './useDebounce';

interface IUseSearchBooksResult {
  allBooks: IBook[];
  displayedBooks: IBook[];
  isLoading: boolean;
  error: Error | null;
  totalItems: number;
  setDisplayedBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const useSearchBooks = (
  query: string,
  category: string,
  sortBy: string,
  delay = 1500
): IUseSearchBooksResult => {
  const [allBooks, setAllBooks] = useState<IBook[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0);

  const debouncedFetchBooks = useDebounce(
    useCallback(async (params) => {
      const { query, category, sortBy } = params;
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const data = await searchBooks(query, category, sortBy);
          setAllBooks(data.items);
          setTotalItems(data.totalItems);
          setDisplayedBooks(data.items.slice(0, 30));
        } catch (e) {
          setError(error);
        }
        setIsLoading(false);
      } else {
        setAllBooks([]);
        setDisplayedBooks([]);
      }
    }, [error]),
    delay
  );

  useEffect(() => {
    debouncedFetchBooks({ query, category, sortBy });
  }, [query, category, sortBy, debouncedFetchBooks]);

  return { allBooks, displayedBooks, setDisplayedBooks, isLoading, error, totalItems };
};

export default useSearchBooks;