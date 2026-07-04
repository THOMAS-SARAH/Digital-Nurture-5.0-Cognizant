import React from "react";

function BookDetails() {

  const books = [
    {
      id: 1,
      name: "React Basics",
      author: "Jordan",
      price: 550
    },
    {
      id: 2,
      name: "Java Programming",
      author: "James",
      price: 700
    },
    {
      id: 3,
      name: "Python Essentials",
      author: "Guido",
      price: 650
    }
  ];

  return (
    <div className="card">

      <h3>Book Details</h3>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>

          {books.map(book => (

            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>₹{book.price}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BookDetails;