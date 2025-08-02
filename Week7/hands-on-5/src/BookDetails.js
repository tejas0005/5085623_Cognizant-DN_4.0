import React from 'react';

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" }
];

const BookDetails = () => (
  <div>
    <h3>Book List</h3>
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
        </li>
      ))}
    </ul>
  </div>
);

export default BookDetails;
