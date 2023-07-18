import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/BookList/BookList';
import Header from './components/Header/Header';
import { bookDetailsPath, bookListPath } from './constace/constanceText';
import { BookProvider } from './utils/bookContext';

const App = () => {
  return (
    <BookProvider>
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path={bookListPath} element={<BookList />} />
            <Route path={bookDetailsPath} element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BookProvider>
  );
};

export default App;