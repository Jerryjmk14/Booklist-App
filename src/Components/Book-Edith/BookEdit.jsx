import React from "react";

export default function BookEdit({ book, onEdit, edit }) {
  const [editbook, setEditBook] = React.useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();

    onEdit(book.id, editbook);
    edit();
  };
  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={editbook}
          onChange={(event) => setEditBook(event.target.value)}
        />
        <button className="button">Save</button>
      </form>
    </div>
  );
}
