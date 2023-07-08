import React from 'react';
import { IBook } from '../types/types';

interface BookItemProps {
    book: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray' }}>
      {book.id}. {book.volumeInfo.title} by {book.volumeInfo.authors?.join(', ')}
    </div>
  );
};

export default BookItem;