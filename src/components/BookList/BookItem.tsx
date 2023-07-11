import React from 'react';
import { IBook } from '../types/types';

interface BookItemProps {
    book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 p-2 m-4 max-w-xs w-60 md:max-w-md md:w-1/3 lg:w-1/6">
        <div className="flex justify-center items-start mt-4 ">
          {book.volumeInfo.imageLinks?.smallThumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={book.volumeInfo.title}
              className="rounded-lg shadow-xl object-cover w-30 h-48 md:w-40 md:h-55 lg:w-50 lg:h-55"
            />
          ) : (
            <div className=" rounded-lg object-cover bg-white "/>
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