import React from 'react';
import { IBook } from '../types/types';

interface BookItemProps {
    book: IBook
}
const BookItem: React.FC<BookItemProps> = ({book}) => {
  return (
    <div>
      <div key={book.id} style={{padding:15, border: '1px solid gray'}}>
            {book.id},
            {book.volumeInfo.authors},
            {book.volumeInfo.categories},
            {book.volumeInfo.title}
        </div>
    </div>
  );
};

export default BookItem;