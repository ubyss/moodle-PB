import React from "react";

const CardBook = ({ book }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        marginBottom: "20px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={book.cover}
        alt={book.title}
        style={{
          height: "150px",
          marginRight: "20px",
          borderRadius: "4px",
        }}
      />
      <div>
        <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{book.title}</h3>
        <p style={{ fontStyle: "italic", color: "#666" }}>{book.author}</p>
        <p>{book.genre}</p>
        <p>{book.language}</p>
        <p>{book.pages} páginas</p>
        <p>R$ {book.price}</p>
        <p>Publicado em: {book.publication_year}</p>
        <p>Editora: {book.publisher}</p>
        <p>Avaliação: {book.rating} / 5</p>
      </div>
    </div>
  );
};

export default CardBook;
