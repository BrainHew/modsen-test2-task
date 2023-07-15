import { useState } from 'react';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useSearchBooks from './hooks/SearchHook';

const App = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);
  const maxResults = 30;

  const { books, totalItems } = useSearchBooks(query, category, sortBy, page, maxResults);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <BrowserRouter>
        <Header query={query} category={category} sortBy={sortBy} setQuery={setQuery} setCategory={setCategory} setSortBy={setSortBy} setPage={setPage} />
        <Routes>
          <Route
            path="/"
            element={<BookList books={books} totalItems={totalItems} onLoadMore={handleLoadMore} />}
          />
          <Route path="/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;