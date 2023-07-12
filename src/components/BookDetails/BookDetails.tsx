import React, { useState, useEffect } from 'react';
import { IBook } from '../types/types';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import axios from 'axios';
import Loader from '../Loader/Loader';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<IBook | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
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
        {book.imageLinks?.large && (
          <img
            src={book.imageLinks.large}
            alt={book.title}
            className="rounded-lg shadow-2xl object-cover w-full h-full"
          />
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