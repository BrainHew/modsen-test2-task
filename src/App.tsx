import React from "react";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import { IBook } from "./components/types/types";

const App = () => {
  const books: IBook[] = [
    {id:'1', volumeInfo:{authors: 'sdf', categories: 'dajf', title: 'sdjfsdfk', ImageLinks:{thumbnail: 'dmkafk'}}},
    {id:'2', volumeInfo:{authors: 'sdf', categories: 'dajf', title: 'sdjfsdfk', ImageLinks:{thumbnail: 'dmkafk'}}}
  ]
  return (
    <div>
      <Header width="100%" height="30%">
        Работает!
      </Header>
      <BookList books={books} />
    </div>
  );
};

export default App;