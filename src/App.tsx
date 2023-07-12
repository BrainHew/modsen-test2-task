import React from 'react';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import { IBook } from './components/types/types';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  return (
    <div>
      <BrowserRouter>
        <Header setBooks={setBooks} />
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/:id" element={<BookDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;