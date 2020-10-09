import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import List from './List/List';
import Search from './Search/Search';
import ListItem from './List/ListItem';
import SearchBar from './Search/SearchBar';

class App extends Component {
  state = {
    search: '',
    printType: 'all',
    bookType: 'partial',
    results: [],
  };

  handleSearchClicked = e => {
    e.preventDefault();
    let search = e.target.searchinput.value;
    let printType = e.target.printType.value;
    let bookType = e.target.bookType.value;
    this.setState({
      search: search,
      printType: printType,
      bookType: bookType,
    });
    this.getApiRequest(search, bookType, printType);
  };
  getApiRequest = (search, bookType, printType) => {
    let filterBookType = `&filter=${bookType}`;
    let filterPrintType = `&printType=${printType}`;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${filterBookType}${filterPrintType}`
    )
      .then(res => res.json())
      .then(data => {
        if (data === undefined) {
          return [];
        }
        this.setState({
          results: data.items,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <SearchBar>
          <Search handleSearchClicked={this.handleSearchClicked} />
        </SearchBar>
        <List>
          <ListItem results={this.state.results} />
        </List>
      </main>
    );
  }
}

export default App;
