import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IBook } from '../../types/types';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<IBook | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BOOKS_API_URL}/${id}?key=${process.env.REACT_APP_BOOKS_API_KEY}`);
        setBookData(response.data);
      } catch (error) {
        setIsLoading(false);
        return <Error />;
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  if (isLoading) {
    return <Loader/>;
  }

  if (!bookData) {
    return <Error />;
  }

  const book = bookData.volumeInfo;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 md:p-8">
        {book.imageLinks?.large ? (
          <img
            src={book.imageLinks.large}
            alt={book.title}
            className="rounded-lg shadow-2xl object-cover w-full h-full"
          />
        ) : (
          <div className="bg-gray-100 flex items-center justify-center rounded-lg shadow-2xl w-full h-full">
            <span className="text-gray-600">No image available</span>
          </div>
        )}
      </div>
      <div className="md:w-1/2 md:p-8">
        <h2 className="text-2xl font-bold">{book.title}</h2>
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