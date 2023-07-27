import { useState, useEffect } from "react";

import { getBookDetails } from "../api/fetchBooksDetails";
import { IBook } from "../types/types";

export const useBookDetails = (bookId: string) => {
  const [bookData, setBookData] = useState<IBook | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookData = await getBookDetails(bookId);
        setBookData(bookData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchBookData();
  }, [bookId]);

  return { bookData, isLoading };
};
