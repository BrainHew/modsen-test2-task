import { useState, useEffect } from "react";
import axios from "axios";
import { IBook, IBookResponse } from "../../types/types";

interface IUseSearchBooksResult {
  books: IBook[];
  isLoading: boolean;
  error: Error | null;
}

const useSearchBooks = (query: string): IUseSearchBooksResult => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCVbhdTqvPKrr5E5-Q-8UljT76Ie9uUB2M&maxResults=30`;
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
  }, [query]);

  return { books, isLoading, error };
};

export default useSearchBooks;