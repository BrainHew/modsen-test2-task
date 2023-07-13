import { useState, useEffect } from "react";
import axios from "axios";
import { IBook, IBookResponse } from "../../types/types";

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
  maxResults: number = 30
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
          let searchUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`;
          if (category !== "all") {
            searchUrl += `+subject:${category}`;
          }
          searchUrl += `&orderBy=${sortBy}&orderBy=${sortBy}&startIndex=${(page-1) * maxResults}&maxResults=${maxResults}`;
          const response = await axios.get(searchUrl);
          const data: IBookResponse = response.data;
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
  }, [query, category, sortBy, error, page, maxResults]);

  return { books, isLoading, error, totalItems};
};

export default useSearchBooks;