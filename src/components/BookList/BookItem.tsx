import React from 'react';
import { IBook } from '../types/types';

interface BookItemProps {
    book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 p-2 m-4 max-w-xs" style={{ width: '250px', height: '450px' }}>
      <div className="flex justify-center items-start mt-4 h-3/6">
        {book.volumeInfo.imageLinks?.smallThumbnail ? (
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
            className="rounded-lg shadow-md object-cover"
            style={{ width: '150px', height: '200px', boxShadow: '5px 4px 10px rgba(0, 0, 0, 0.6), -4px -4px 6px rgba(0, 0, 0, 0.1)' }}
          />
        ) : (
          <div
            className="w-full h-full rounded-lg object-cover"
            style={{ backgroundColor: 'white' }}
          />
        )}
      </div>
      <div className="text-gray-600 mt-2 text-sm underline">
        {book.volumeInfo.categories?.length ? book.volumeInfo.categories.join(", ") : "N/A"}
      </div>
      <div className="text-base font-bold mt-4 mb-2">{book.volumeInfo.title}</div>
      <div className="text-gray-600 mb-2">By {book.volumeInfo.authors?.join(", ")}</div>
    </div>
  );
};

export default BookItem;