import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {BookList} from './bookList'
import {BookCreate} from './bookCreate'
import {BookDetail} from './bookDetail'


class App extends Component {



  render() {
    return (
      <div className="content">
        <BookList/>

      </div>
    );
  }
}
export default App;
