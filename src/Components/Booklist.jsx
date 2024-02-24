import React from "react";
import CardBook from "./CardBook";

const BookList = ({ books }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {books.map((book) => (
        <CardBook key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
