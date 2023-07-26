import React, { useContext } from 'react';

import { BookContext } from '../../../contexts/bookContext';
import { IBook } from '../../../types/types';
import ErrorBoundary from '../../Error/ErrorBoundary';
import Error from '../../Error/ErrorLoadBook';
import Loader from '../../Loader';
import BookItem from '../BookItem';

const BookList: React.FC = React.memo(() => {

  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }
  
  const { books, totalItems, handleLoadMore, isLoading, isDarkMode } = bookContext;
  
  if (!books) {
    return <Error />;
  }

  return (
    <div className={` min-h-screen ${isDarkMode ? "bg-beige-600" : "bg-beige-100"}`}>
      <div className="relative">
        <div className="flex flex-wrap justify-center">
          <h2 className={`m-2 text-base md:m-4 md:text-2xl mt-70 ${isDarkMode ? "text-gray-100" : "" }`}> 
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
      {books.length && books.length < totalItems &&(
        <div className="flex justify-center bottom-0 left-0 w-full">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold mb-4 py-2 px-4 rounded-r transition-opacity"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
});

export default BookList;