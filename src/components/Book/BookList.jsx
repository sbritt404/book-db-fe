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
        const {name, value} = e.target;
        setBookInput((prevInput) => ({ ...prevInput, [name]: value }));
    }

    const handleSubmit = async (e) => {


    }

    return (
<div className= 'BookList'>
    <div className = "form-div">
        <form onSubmit= {handleSubmit}>
            <input

            />
        </form>
    </div>
</div>
    )

}




export default BookList;