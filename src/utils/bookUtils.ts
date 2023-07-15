import { IBook } from '../types/types';

export interface IBookData {
  id: string;
  image: string;
  categories: string[];
  title: string;
  authors: string[];
}

export const formatBookData = (book: IBook): IBookData => {
  const id = book.id;
  const image = book.volumeInfo.imageLinks?.smallThumbnail || '';
  const categories = book.volumeInfo.categories || [];
  const title = book.volumeInfo.title || '';
  const authors = book.volumeInfo.authors || [];

  return { id, image, categories, title, authors };
};