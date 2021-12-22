import React, { Component } from 'react';
export const MyContext = React.createContext();

export class index extends Component {
    constructor() {
        super();
        this.state = {
            myBooks: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            pushBooks: myBooks => {
                const currentlyReading = myBooks.filter((book) => book.shelf === "currentlyReading");
                const wantToRead = myBooks.filter((book) => book.shelf === "wantToRead");
                const read = myBooks.filter((book) => book.shelf === "read");
                this.setState({myBooks, currentlyReading, wantToRead, read});
            },
            handleShelf: (book, newShelf, mainShelfs) => {
                if(newShelf !== "none") {
                    const movedBooks = this.state.myBooks.map(oneBook => {
                        const bookId = mainShelfs[newShelf].find(selectedBook => selectedBook === oneBook.id);
                        if(bookId) {
                            oneBook.shelf = newShelf;
                        }
    
                        return oneBook;
                    });
                    this.state.pushBooks(movedBooks);
                }
            }
        };
    }
    render() {
        return (
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default index
