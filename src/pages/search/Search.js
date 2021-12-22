import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { search , getAll} from "../../BooksAPI";
import Book from "../../components/Book";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            foundBooks: []
        }
    }

    async componentDidMount() {
        try{
            const myBooks = await getAll();
            this.props.pushBooks(myBooks)

        } catch(error) {
            console.log(error);
        }
    }

    handleChange = async (e) => {
        try{
            const searchInput = e.target.value;
            if(searchInput) {
                this.setState({searchInput});
                const result = await search(searchInput);
                if(result.error) {
                    this.setState({foundBooks: []});
                } else {
                    this.setState({foundBooks: result});
                    
                }
            } else {
                this.setState({foundBooks: []});
            }

        } catch(error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.foundBooks.length > 0 && this.state.foundBooks.map(book => {
                                const homeShelf = this.props.myBooks.find(searchedBook => searchedBook.id === book.id);
                                if(homeShelf) {
                                    book.shelf = homeShelf.shelf;
                                } else {
                                    book.shelf = "none";
                                }
                                return (
                                    <Book key={book.id} {...book} pushBooks={this.props.pushBooks} handleShelf={this.props.handleShelf} />
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
