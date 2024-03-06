import React, { useState, useEffect } from 'react'
import BooksCards from './BooksCards';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
       fetch("https://example-data.draftbit.com/books?_limit=20").then(res => res.json()).then(data => setBooks(data))
    }, []);
    console.log(books)
  return (
    <div className='background_Cards'>
        <BooksCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default Books