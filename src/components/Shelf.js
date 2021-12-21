import React from 'react'
import Book from './Book'

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books && props.books.map(book => <Book key={book.id} {...book} handleShelf={props.handleShelf}/>)}
                </ol>
            </div>
        </div>
    )
}

export default Shelf
