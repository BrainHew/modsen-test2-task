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
    <div>
      <div className="flex flex-wrap justify-center">
        <h2 className="text-2xl m-4">Found {books.length} results</h2>
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