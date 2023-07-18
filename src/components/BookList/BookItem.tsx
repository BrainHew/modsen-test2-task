import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IBook } from '../../types/types';
import { IBookData, formatBookData } from '../../utils/bookUtils';

interface BookItemProps {
  book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();
  const bookData: IBookData = formatBookData(book);

  const handleClick = () => {
    navigate(`/${bookData.id}`);
  };

  return (
    <div
      className="bg-gray-50 border border-gray-300 p-2 m-2 md:m-2 max-w-xs w-24 md:max-w-md md:w-1/5 lg:w-1/6 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center items-start mt-4">
      {bookData.image ? (
        <img
          src={bookData.image}
          alt={bookData.title}
          className="rounded-lg shadow-2xl object-cover w-full h-full md:w-24 md:h-32 lg:w-3/6 lg:h-40"
        />
      ) : (
        <div className="rounded-lg border border-gray-300 bg-white flex items-center justify-center w-full h-full md:w-24 md:h-32 lg:w-3/6 lg:h-40">
          <span className="text-gray-600 text-xs md:text-base text-center">No Image Available</span>
        </div>
      )}
      </div>
      <div className="text-gray-600 mt-2 text-sm md:text-base underline">
        {bookData.categories.length ? bookData.categories.join(', ') : 'N/A'}
      </div>
      <div className="text-xs md:text-base font-bold mt-4 mb-2">
        {bookData.title}
      </div>
      <div className="text-gray-600 mb-2 text-xs md:text-base">
        By {bookData.authors.join(', ')}
      </div>
    </div>
  );
};

export default BookItem;