import axios from "axios";

import { IBook } from "../types/types";

export const getBookDetails = async (bookId: string): Promise<IBook> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BOOKS_API_URL}/${bookId}?key=${process.env.REACT_APP_BOOKS_API_KEY}`,
  );
  return response.data as IBook;
};
