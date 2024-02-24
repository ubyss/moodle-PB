import React, { useEffect, useState } from "react";
import BookList from "../Components/Booklist";

const BooksListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json")
      .then((response) => response.json())
      .then((data) => {
        const booksArray = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        setBooks(booksArray);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(books);

  return (
    <div>
      <h1>Lista de Livros</h1>
      <BookList books={books} />
    </div>
  );
};

export default BooksListPage;
