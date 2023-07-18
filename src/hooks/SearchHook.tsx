import { useState, useEffect, useCallback } from 'react';

import { searchBooks } from '../api/fetchBooks';
import { IBook } from '../types/types';
import useDebounce from './useDebounce';

interface IUseSearchBooksResult {
  books: IBook[];
  isLoading: boolean;
  error: Error | null;
  totalItems: number;
}

const useSearchBooks = (
  query: string,
  category: string,
  sortBy: string,
  maxResults = 30,
  delay = 1500
): IUseSearchBooksResult => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0);

  const debouncedFetchBooks = useDebounce(
    useCallback(async (params) => {
      const { query, category, sortBy, maxResults } = params;
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const data = await searchBooks(query, category, sortBy, maxResults);
          setBooks(data.items);
          setTotalItems(data.totalItems);
        } catch (e) {
          setError(error);
        }
        setIsLoading(false);
      } else {
        setBooks([]);
      }
    }, [error]),
    delay
  );

  useEffect(() => {
    debouncedFetchBooks({ query, category, sortBy, maxResults });
  }, [query, category, sortBy, maxResults, debouncedFetchBooks]);

  return { books, isLoading, error, totalItems };
};

export default useSearchBooks;