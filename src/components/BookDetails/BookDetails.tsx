import React from 'react';
import { useParams } from 'react-router-dom';

import { useBookDetails } from '../../hooks/useBookDetails';
import Error from '../Error/Error';
import Loader from '../Loader';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { bookData, isLoading } = useBookDetails(id || '');

  if (isLoading) {
    return <Loader />;
  }

  if (!bookData) {
    return <Error />;
  }

  const book = bookData.volumeInfo;

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-0">
      <div className="flex md:w-1/2 md:p-8 items-center justify-center">
        {book.imageLinks?.large ? (
          <img
            src={book.imageLinks.large}
            alt={book.title}
            className="rounded-lg shadow-2xl object-cover w-2/3 h-full md:mr-8"
          />
        ) : (
          <div className="bg-gray-100 flex items-center justify-center rounded-lg shadow-2xl w-full h-full">
            <span className="text-gray-600">No image available</span>
          </div>
        )}
      </div>
      <div className="md:w-1/2 md:p-8">
        <h2 className="text-2xl font-bold mt-4">{book.title}</h2>
        <div className="text-gray-600 mb-4">By {book.authors?.join(', ')}</div>
        <div className="text-gray-600 mb-4">
          {book.categories?.length ? `Category: ${book.categories.join(', ')}` : 'No category'}
        </div>
        <div className="text-gray-600">{book.description}</div>
      </div>
    </div>
  );
};

export default BookDetails;