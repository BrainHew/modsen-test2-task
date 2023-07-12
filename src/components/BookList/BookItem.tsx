import React from 'react';
import { IBook } from '../types/types';

interface BookItemProps {
    book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="bg-gray-50 border border-gray-300 p-2 m-2 md:m-2 max-w-xs w-24 md:max-w-md md:w-1/5 lg:w-1/6">
        <div className="flex justify-center items-start mt-4 ">
          {book.volumeInfo.imageLinks?.smallThumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={book.volumeInfo.title}
              className="rounded-lg shadow-2xl object-cover w-full h-full md:w-24 md:h-32 lg:w-3/6 lg:h-40"
            />
          ) : (
            <div className=" rounded-lg object-cover bg-white "/>
          )}
        </div>
      <div className="text-gray-600 mt-2 text-sm md:text-base underline">
      {book.volumeInfo.categories?.length ? book.volumeInfo.categories.join(", ") : "N/A"}
      </div>
      <div className="text-xs md:text-base font-bold mt-4 mb-2">{book.volumeInfo.title}</div>
      <div className="text-gray-600 mb-2 text-xs md:text-base">By {book.volumeInfo.authors?.join(", ")}</div>
    </div>
  );
};

export default BookItem;