import { useState, useEffect } from 'react';

import {searchBooks} from '../api/fetchBooks'
import { IBook } from '../types/types';

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
  page: number,
  maxResults = 30
): IUseSearchBooksResult => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const data = await searchBooks(query, category, sortBy, page, maxResults);
          setBooks(data.items);
          setTotalItems(data.totalItems);
        } catch (e) {
          setError(error);
        }
        setIsLoading(false);
      } else {
        setBooks([]);
      }
    };
    fetchBooks();
  }, [query, category, sortBy, page, maxResults, error]);

  return { books, isLoading, error, totalItems };
};

export default useSearchBooks;