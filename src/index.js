import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router,Route, BrowserRouter } from 'react-router-dom';
import {BookList} from './bookList'
import {BookCreate} from './bookCreate'
import {BookDetail} from './bookDetail'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/create" component={BookCreate}/>
      <Route path="/detail/:id" component={BookDetail}/>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
