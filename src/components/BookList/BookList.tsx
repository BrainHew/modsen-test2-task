import React from 'react';
import BookItem from './BookItem';
import Error from '../Error/Error';
import { BookApi } from '../services/BookService';
import Loader from '../Loader/Loader';

const BookList: React.FC = () => {
  const { data: bookResponse = { items: [] }, error, isLoading } = BookApi.useFetchAllBooksQuery(30);
  const books = bookResponse.items;

  return (
    <div className="bg-beige-100">
      <div className="flex flex-wrap justify-center">
        <h2 className=" m-2 text-base md:m-4 md:text-2xl">Found {books && books.length} results</h2>
      </div>

      <div className="flex flex-wrap justify-center">
        {isLoading && <Loader />}
        {error && <Error />}
        {books && books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;