import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/books',
});

export const getAllBooks = () => api.get('/get-all-books');
export const createBook = (book) => api.post('/create-book', book);
export const updateBook = (id, book) => api.put(`/update-book/${id}`, book);
export const deleteBook = (id) => api.delete(`/delete-book/${id}`);
