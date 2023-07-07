import React from 'react';
import { IBook } from '../types/types';
import BookItem from './BookItem';
interface BookListProps {
    books: IBook[]
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