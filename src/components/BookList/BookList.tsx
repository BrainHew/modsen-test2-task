import React from 'react';
import BookItem from './BookItem';
import { IBook } from '../types/types';
import Error from '../Error/Error';

interface BookListProps {
  books: IBook[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  if (!books) {
    return <Error/>;
  }

  return (
    <div className="bg-beige-100">
      <div className="flex flex-wrap justify-center">
        <h2 className=" m-2 text-base md:m-4 md:text-2xl">Found {books.length} results</h2>
      </div>

      <div className="flex flex-wrap justify-center">
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;