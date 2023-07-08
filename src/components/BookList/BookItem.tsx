import React from 'react';
import { IBook } from '../types/types';

interface BookItemProps {
    book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-2 m-2 max-w-xs">
      <div className="text-base font-medium mb-2">
        {book.volumeInfo.title}
      </div>
      <div className="text-gray-600 mb-2">
        By {book.volumeInfo.authors?.join(", ")}
      </div>
      {book.volumeInfo.imageLinks?.thumbnail ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="w-full mb-2 rounded-lg object-cover h-40"
        />
      ) : (
        <div
          className="w-full mb-2 rounded-lg object-cover h-40"
          style={{ backgroundColor: '#F3F4F6' }}
        />
      )}

      <div className="text-gray-600 mt-2 text-sm">
        Categories:{" "}
        {book.volumeInfo.categories?.length
          ? book.volumeInfo.categories.join(", ")
          : "N/A"}
      </div>
    </div>
  );
};

export default BookItem;