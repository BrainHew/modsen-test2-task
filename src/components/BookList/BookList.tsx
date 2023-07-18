import React, { useContext } from 'react';

import { IBook } from '../../types/types';
import { BookContext } from '../../utils/bookContext';
import ErrorBoundary from '../Error/ErrorBoundary/ErrorBoundary';
import Error from '../Error/Error';
import BookItem from './BookItem';

const BookList: React.FC = () => {
  
  const { displayedBooks, totalItems, handleLoadMore } = useContext(BookContext);
  if (!displayedBooks) {
    return <Error />;
  }
  
  return (
    <div className="bg-beige-100">
      <div className="relative">
        <div className="flex flex-wrap justify-center">
          <h2 className="m-2 text-base md:m-4 md:text-2xl mt-70">
            Found {displayedBooks.length} results out of {totalItems}
          </h2>
        </div>
      </div>
      {displayedBooks.length < totalItems && (
        <div className="fixed bottom-0 left-0 w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            onClick={handleLoadMore}
          >
            Load more...
          </button>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {displayedBooks.map((book: IBook) => (
          <ErrorBoundary key={book.id}>
            <BookItem book={book} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BookList);