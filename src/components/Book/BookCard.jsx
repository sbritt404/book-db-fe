import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    book_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired
};

export default BookCard;
