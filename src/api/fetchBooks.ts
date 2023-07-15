import axios from 'axios';

import { IBookResponse } from '../types/types';

export const searchBooks = async (
  query: string,
  category: string,
  sortBy: string,
  page: number,
  maxResults: number
) => {
  let searchUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`;
  if (category !== 'all') {
    searchUrl += `+subject:${category}`;
  }
  searchUrl += `&orderBy=${sortBy}&orderBy=${sortBy}&startIndex=${(page - 1) * maxResults}&maxResults=${maxResults}`;
  const response = await axios.get(searchUrl);
  const data: IBookResponse = response.data;
  return data;
};