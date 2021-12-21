import React, {Component} from 'react'
import AddBook from '../../components/AddBook'
import Shelf from '../../components/Shelf'
import { getAll } from '../../BooksAPI';

class Home extends Component {


    async componentDidMount() {
        try{
            const myBooks = await getAll();
            this.props.pushBooks(myBooks)

        } catch(error) {
            console.log(error);
        }
    }
        
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title="Currently Reading" books={this.props.currentlyReading} handleShelf={this.props.handleShelf} />
                    <Shelf title="Want to Read" books={this.props.wantToRead} handleShelf={this.props.handleShelf} />
                    <Shelf title="Read" books={this.props.read} handleShelf={this.props.handleShelf} />
                </div>
                <AddBook />
            </div>
        )
    }
}

export default Home
