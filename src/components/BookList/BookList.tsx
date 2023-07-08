import React from 'react';
import BookItem from './BookItem';
import { IBook } from '../types/types';
interface BookListProps {
    books: IBook[];
}

const BookList: React.FC<BookListProps> = ({books}) => {
  return (
    <div>
      {books.map(book => 
        <BookItem key={book.id} book={book}/>
      )}
    </div>
  );
};

export default BookList;