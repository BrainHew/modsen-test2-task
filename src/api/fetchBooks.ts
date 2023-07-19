import axios from 'axios';

import { IBookResponse } from '../types/types';

export const searchBooks = async (
  query: string,
  category: string,
  sortBy: string,
  startIndex: number = 0,
  maxResults: number = 40
) => {
  const searchUrl = `${process.env.REACT_APP_BOOKS_API_URL}?q=intitle:${query}${category !== 'all' ? '+subject:' + category : ''}&orderBy=${sortBy}&key=${process.env.REACT_APP_BOOKS_API_KEY}&startIndex=${startIndex}&maxResults=${maxResults}`;
  const response = await axios.get(searchUrl);
  const data: IBookResponse = response.data;
  return data;
};