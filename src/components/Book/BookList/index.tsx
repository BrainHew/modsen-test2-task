import React, { useContext } from "react";

import { BookContext } from "../../../contexts/bookContext";
import { IBook } from "../../../types/types";
import ErrorBoundary from "../../Error/ErrorBoundary";
import Error from "../../Error/ErrorLoadBook";
import Loader from "../../Loader";
import BookItem from "../BookItem";

const BookList: React.FC = React.memo(() => {
  BookList.displayName = "BookList";
  const bookContext = useContext(BookContext);

  if (!bookContext) {
    return null;
  }

  const { books, totalItems, handleLoadMore, isLoading, isDarkMode } =
    bookContext;

  if (!books) {
    return <Error />;
  }

  return (
    <main
      className={` min-h-screen ${
        isDarkMode ? "bg-beige-600" : "bg-beige-100"
      }`}
    >
      <div className="relative">
        <div className="flex flex-wrap justify-center">
          <h2
            className={`mt-70 m-2 text-base md:m-4 md:text-2xl ${
              isDarkMode ? "text-gray-100" : ""
            }`}
          >
            Found {books.length} results out of {totalItems}
          </h2>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-center">
          {books.map((book: IBook) => (
            <ErrorBoundary key={book.id}>
              <BookItem book={book} />
            </ErrorBoundary>
          ))}
        </div>
      )}
      {books.length && books.length < totalItems && (
        <div className="bottom-0 left-0 flex w-full justify-center">
          <button
            className="mb-4 rounded-r bg-gray-600 px-4 py-2 font-bold text-white transition-opacity hover:bg-gray-800"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </main>
  );
});

export default BookList;
