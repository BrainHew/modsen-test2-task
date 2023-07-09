import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import { IBook, IBookResponse } from "./components/types/types";
import axios from 'axios'

const App = () => {
  const [books,setBooks] = useState<IBook[]>([])
  const url = 'https://www.googleapis.com/books/v1/volumes?q=typescript&key=AIzaSyCVbhdTqvPKrr5E5-Q-8UljT76Ie9uUB2M&maxResults=30';

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks(){
    try{
      axios.get(url)
      .then(response => {
        const data: IBookResponse = response.data;
        setBooks(data.items);
      })
    } catch (e){
      alert(e)
    }
  } 
  
  return (
    <div>
      <Header/>
      <BookList books={books} />
    </div>
  );
};

export default App;