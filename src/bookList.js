import React from 'react';
import { Link } from 'react-router-dom';

export class BookList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      books:[]

    };
      this.searchBooks = this.searchBooks.bind(this);
  }


 componentDidMount() {
  this.getBooks();
 }


getBooks() {
  let url="http://localhost:3001/books"
  fetch(url)
  .then(resp=>resp.json())
  .then(data => {
        let books = data.map((book, index) => {
          return (
                <div key={index}>
                    <div className="row">
                     <div class="col-xs-6 col-md-4">
                        <ul class="list-group">
                          <li class="list-group-item">{book.name}</li>
                        </ul>
                      </div>


                     <div class="col-xs-6 col-md-4">
                   <Link to={`/detail/${book.id}`}><button type="button" class="btn btn-primary">Detail</button></Link>
                     </div>
                </div>
              </div>
          )
      })
      this.setState({books:books})
  });
}

searchBooks(books){
  const bookName=document.getElementById('bookName').value;

  let url="http://localhost:3001/books?q="+bookName;
  fetch(url)
  .then(resp=>resp.json())
  .then(data => {
        let books = data.map((book, index) => {
          return (
                <div key={index}>
                    <div className="row">
                     <div class="col-xs-6 col-md-4">
                        <ul class="list-group">
                          <li class="list-group-item">{book.name}</li>
                        </ul>
                      </div>


                     <div class="col-xs-6 col-md-4">

                   <Link to={`/detail/${book.id}`}><button type="button" class="btn btn-primary">Detail</button></Link>
                     </div>
                </div>
              </div>
          )
      })
      this.setState({books:books})
  });

}
  render(){
    return (
      <div>

  <div className="Search">
    <form className="input-wrapper" >
      <input id="bookName" type="text" className="add-todo" placeholder="Please Enter Book Information "/ >
      </form>
    </div>


     <button type="button" class="btn"   onClick={this.searchBooks}>Search</button>

      <div class="bookList">
        {
         this.state.books
          }
        </div>
       <Link to="/create"><button>create</button></Link>


      </div>
    )
  }
}
