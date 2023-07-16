import React from 'react';

import { IBook } from '../../types/types';
import Error from '../Error/Error';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BookItem from './BookItem';

interface BookListProps {
  books: IBook[];
  totalItems: number;
  onLoadMore: () => void;
}

const BookList: React.FC<BookListProps> = ({ books, totalItems, onLoadMore }) => {

  if (!books) {
    return <Error />;
  }

  return (
    <div className="bg-beige-100">
      <div className="relative">
        <div className="flex flex-wrap justify-center">
          <h2 className="m-2 text-base md:m-4 md:text-2xl mt-70">
            Found {books.length} results out of {totalItems}
          </h2>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={onLoadMore}
        >
          Load more...
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {books.map((book) => (
          <ErrorBoundary>
            <BookItem key={book.id} book={book} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
};

export default BookList;