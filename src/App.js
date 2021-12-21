import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './pages/Home/Home';
import Search from './pages/search/Search';
import Provider, {MyContext} from './Provider';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Provider>
            <Switch>
              <Route exact path="/" render={() => (
                <MyContext.Consumer>
                  {context => <Home {...context} />}
                </MyContext.Consumer>
              )} />
              <Route path="/search" render={() => (
                <MyContext.Consumer>
                  {context => <Search {...context} />}
                </MyContext.Consumer>
              )} />
            </Switch>
          </Provider>
        </Router>
      </div>
    )
  }
}

export default BooksApp
