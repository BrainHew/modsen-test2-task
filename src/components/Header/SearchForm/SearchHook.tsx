import { useState, useEffect } from "react";
import axios from "axios";
import { IBook, IBookResponse } from "../../types/types";

interface IUseSearchBooksResult {
  books: IBook[];
  isLoading: boolean;
  error: Error | null;
}

const useSearchBooks = (query: string, category: string, sortBy: string): IUseSearchBooksResult => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          let searchUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`;
          if (category !== "all") {
            searchUrl += `+subject:${category}`;
          }
          searchUrl += `&orderBy=${sortBy}&maxResults=30`;
          const response = await axios.get(searchUrl);
          const data: IBookResponse = response.data;
          setBooks(data.items);
        } catch (e) {
          setError(error);
        }
        setIsLoading(false);
      } else {
        setBooks([]);
      }
    };
    fetchBooks();
  }, [query, category, sortBy]);

  return { books, isLoading, error };
};

export default useSearchBooks;