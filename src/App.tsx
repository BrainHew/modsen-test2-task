import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/BookList/BookList';
import Header from './components/Header';
import {BookRoutes } from './constace/constanceText';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={BookRoutes.BookList} element={<BookList />} />
          <Route path={BookRoutes.BookDetails} element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;