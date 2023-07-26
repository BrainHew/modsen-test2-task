import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookDetails from './components/Book/BookDetails';
import BookList from './components/Book/BookList';
import PageNotFound from './components/Error/ErrorNotFound';
import Header from './components/Header';
import { BookRoutes } from './constants/constantsText';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={BookRoutes.BookList} element={<BookList />} />
          <Route path={BookRoutes.BookDetails} element={<BookDetails />} />
          <Route path={BookRoutes.NotFound} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;