import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import { IBook} from "./components/types/types";
import { useState } from "react";


const App = () => {

  const [books, setBooks] = useState<IBook[]>([])

  return (
    <div>
      <Header setBooks={setBooks}/>
      <BookList books={books}/>
    </div>
  );
};

export default App;