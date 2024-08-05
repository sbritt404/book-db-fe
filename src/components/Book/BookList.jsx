import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BookList.css'

function BookList() {
    const [bookList, setBookList] = useState([]);
    const [bookInput, setBookInput] = useState({
        title: '',
        author: '',
        publishedYear: ''
    })

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get('http://localhost:3000/api/books/get-all-books');
                setBookList(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookInput((prevInput) => ({ ...prevInput, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/books/create-book', bookInput);
            setBookInput({
                title: '',
                author: '',
                publishedYear: ''
            });
            const response = await axios.get('http://localhost:3000/api/books/get-all-books');
            setBookList(response.data.data);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className='BookList'>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={bookInput.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={bookInput.author}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="publishedYear"
                        placeholder="Published Year"
                        value={bookInput.publishedYear}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div>
                <ul>
                    {bookList.map((book) => (
                        <li key={book._id}>
                            {book.title} by {book.author} ({book.publishedYear})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}




export default BookList;