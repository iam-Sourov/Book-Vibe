// import React, { useEffect, useState } from 'react';

import Book from "../Book/Book";

const Books = ({ data }) => {

    // Fetch using UseEffect Hook.......
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch('/booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // }, [])
    // console.log(allBooks);

    return (
        <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-3 ">
            {
                data.map(book=> <Book key={book.bookId} book={book}></Book>)
            }
            
        </div>
    );
};

export default Books;