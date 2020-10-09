import React, { Component } from 'react';

class BookItem extends Component {

    getBooks = () => {
        //let bookArray = []
        let books = this.props.results === undefined ? 'no books': this.props.results.map((book) => {
          let bookTitle = book.volumeInfo.title;
          let bookAuthor = book.volumeInfo.authors;
          let bookDesc = book.volumeInfo.description;
            let bookPrice =
              book.volumeInfo.saleInfo
                ? book.volumeInfo.saleInfo.listPrice.amount
                : 'No price info';
          let bookImage = book.volumeInfo.imageLinks.thumbnail
          return (
            <div className="bookResult">
              <img src={bookImage} alt={bookTitle}></img>
              <ul>
                <li>Book Title: {bookTitle}</li>
                <li>Author: {bookAuthor}</li>
                <li>Price : {bookPrice}</li>
                <li>{bookDesc}</li>
              </ul>
            </div>
          );
        }) 
        //bookArray = books ? bookArray = books : 'book not found';
        return books;
    }

    render() { 
        const { results } = this.props

        console.log(this.props.results)
        return ( 
            <>
            {this.getBooks()}
            </>
         );
    }
}
 
export default BookItem;
