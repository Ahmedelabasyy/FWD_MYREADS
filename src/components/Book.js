import React from 'react';
import {update, getAll} from '../BooksAPI';
const Book = (props) => {
    const handleChange = async (e) => {
        try {
            const theShelf = e.target.value;
            const theResult = await update(props, theShelf);
            props.handleShelf(props, theShelf, theResult);
            const myBooks = await getAll();
            props.pushBooks(myBooks);
            
        } catch(error) {
            console.log(error);
        }

        try {
            
            const myBooks = await getAll();
            props.pushBooks(myBooks);
            
        } catch(error) {
            console.log(error);
        }


    }
    
    return (
        <div>
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks ? props.imageLinks.thumbnail : ""})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => handleChange(e)} value={props.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{props.title}</div>
                    <div className="book-authors">{props.authors}</div>
                </div>
                </li>
        </div>
    )
}

export default Book
