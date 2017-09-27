import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Books N' Roses: Appetite for Instruction</h1>
        <div className="row">



          <div>
            <BookList />
          </div>
          <div>
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
