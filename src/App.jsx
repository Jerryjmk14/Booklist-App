import React from "react";
import BookList from "./Components/Book-List/BookList";
import BookCreate from "./Components/Book-Create/BookCreate";

export default function App() {
  const [books, setBooks] = React.useState([]);

  const createBook = (title) => {
    setBooks((books) => {
      return [...books, { title: title, id: crypto.randomUUID() }];
    });
  };

  const deleteBook = (id) => {
    setBooks((books) => {
      return books.filter((book) => book.id !== id);
    });
  };

  const editBookById = (bookId, newTitle) => {
    setBooks((books) => {
      return books.map((book) => {
        if (book.id === bookId) {
          return { ...books, title: newTitle };
        } else {
          return book;
        }
      });
    });
  };
  return (
    <div>
      <BookList books={books} onDelete={deleteBook} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
