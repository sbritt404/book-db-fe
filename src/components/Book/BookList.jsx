import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './BookList.css'; 

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json', {
          params: { 'api-key': 'STzRl6ut1tLqv6jLl9AKdQcKaAaL1VOm' },
          headers: {
            'Accept': 'application/json'
          }
        });
        setBooks(response.data.results);
      } catch (error) {
        setError('Failed to fetch books.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-list">
      <h1>NYT Bestsellers</h1>
      <div className="book-grid">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
