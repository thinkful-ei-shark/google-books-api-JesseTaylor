import React, { Component } from 'react';



class Search extends Component {



    render() { 
        const { handleSearchClicked } = this.props;

        return (
          <div>
            <form className="search-box" onSubmit={handleSearchClicked}>
              <input
                type="text"
                id="search-input"
                placeholder="search here"
                name="searchinput"
                
              />
              <button id="search-button">Search</button>
              <div><wrap>
                <label htmlFor="printType">Select Print Type </label>
                <select id="printType">
                  <option value="all">All</option>
                  <option value="books">Books</option>
                  <option value="magazines">Magazines</option>
                </select>
              </wrap>
              <wrap className="book-type-box">
                <label htmlFor="bookType"> Select Book Type </label>
                <select id="bookType">
                  <option value="partial">All Books</option>
                  <option value="free-ebooks">Free eBooks</option>
                  <option value="paid-ebooks">Paid eBooks</option>
                  <option value="ebooks">All eBooks</option>
                </select>
              </wrap></div>
            </form>
          </div>
        );
    }
}
 
export default Search;
