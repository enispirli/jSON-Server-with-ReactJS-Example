import React from 'react';
import { Link } from 'react-router-dom';

export class BookCreate extends React.Component{

  constructor() {
    super();
    this.addBook = this.addBook.bind(this);
  }
  addBook(e){
    e.preventDefault();
    const bookName=document.getElementById('InputName').value;
    const bookAuthor=document.getElementById('InputAuthor').value;
    const bookPublisher=document.getElementById('InputPublisher').value;
    const bookEditionYear=document.getElementById('InputEditionYear').value;
    const bookOverview=document.getElementById('InputOverview').value;
    var book = {
              name:bookName,
              author:bookAuthor,
              publisher:bookPublisher,
               editionYear:bookEditionYear,
               bookOverview:bookOverview
             };



            let url="http://localhost:3001/books"
            fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(book)
                       }
                )


  }

  render(){
    return (
      <div>
      <Link to="/"><button>back</button></Link>



<form>
  <div class="form-group">
    <label for="examplenName">Book Name</label>
    <input type="text" class="form-control" id="InputName"  placeholder="Enter Book Name"/>
  </div>

  <div class="form-group">
    <label for="exampleAuthor"> Book Author</label>
    <input type="text" class="form-control" id="InputAuthor" placeholder="Enter  Book Author"/>
  </div>

 <div class="form-group">
    <label for="examplePublisher"> Book Publisher</label>
    <input type="text" class="form-control" id="InputPublisher" placeholder="Enter  Book Publisher"/>
  </div>

<div class="form-group">
    <label for="exampleditionYear"> Book Edition Year</label>
    <input type="text" class="form-control" id="InputEditionYear" placeholder="Enter  Book Edition Year"/>
  </div>

 <div class="form-group">
    <label for="examplebookOverview">Book Overview</label>
    <textarea class="form-control" id="InputOverview" rows="2"></textarea>
  </div>
  <button type="submit" class="btn btn-primary" onClick={this.addBook}>Save Book</button>
</form>
</div>
)


  }
}
