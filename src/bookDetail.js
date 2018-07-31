import React from 'react';

export class BookDetail extends React.Component{

  constructor(props){
    super(props);
    this.state={
      book:[]

    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    let url="http://localhost:3001/books?id="+params.id;
    fetch(url)
    .then(resp=>resp.json())
    .then(data => {
      let bookData = data.map((book, index) => {
        return (
          <div>
            <div className="row">
                <div class="col-md-4">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label for="exampleAuthor:"> Book Name</label>
                        </li>
                        <li class="list-group-item">
                            <label for="exampleAuthor:"> Book Author</label>
                        </li>
                        <li class="list-group-item">
                            <label for="examplePublisher:"> Book Publisher</label>
                        </li>
                        <li class="list-group-item">
                            <label for="exampleditionYear:"> Book Edition Year</label>
                        </li>
                        <li class="list-group-item">
                            <label for="examplebookOverview:">Book Overview</label>
                        </li>
                    </ul>
                </div>


                <div class="col-xs-6 col-md-4">
                    <li class="list-group-item">
                        <label for="exampleAuthor:"> {book.name}</label>
                    </li>
                    <li class="list-group-item">
                        <label for="exampleAuthor:"> {book.author}</label>
                    </li>
                    <li class="list-group-item">
                        <label for="exampleAuthor:"> {book.publisher}</label>
                    </li>
                    <li class="list-group-item">
                        <label for="exampleAuthor:"> {book.editionYear}</label>
                    </li>
                    <li class="list-group-item">
                        <label for="exampleAuthor:"> {book.bookOverview}</label>
                    </li>
                </div>
            </div>
        </div>
        )

      });


        this.setState({book:bookData});
    });
  }
  render(){
    return (
      <div>{this.state.book}</div>

  );
  }
}
