import React, { useContext } from 'react';

import { BookContext } from '../../contexts/bookContext';
import { IBook } from '../../types/types';
import Error from '../Error/Error';
import ErrorBoundary from '../Error/ErrorBoundary';
import Loader from '../Loader';
import BookItem from './BookItem';

const BookList: React.FC = React.memo(() => {

  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }
  
  const { books, totalItems, handleLoadMore, isLoading } = bookContext;
  
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
      {isLoading ? <Loader/>: <div className="flex flex-wrap justify-center">
        {books.map((book: IBook) => (
          <ErrorBoundary key={book.id}>
            <BookItem book={book} />
          </ErrorBoundary>
        ))}
      </div>}
      {books.length > 0 && books.length <  totalItems && (
        <div className="flex justify-center bottom-0 left-0 w-full">
          <button
            className=" text-black font-bold py-2 px-4 rounded-r"
            onClick={handleLoadMore}
          >
            Load more...
          </button>
        </div>
      )}
    </div>
  );
});

export default BookList;