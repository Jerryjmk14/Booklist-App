import React from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "") return;
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter Book Name
          <input
            className="input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <button className="button is-primary">Add Books</button>
      </form>
    </div>
  );
}
