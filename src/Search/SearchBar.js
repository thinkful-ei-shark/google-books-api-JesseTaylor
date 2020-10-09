import React, { Component } from 'react';


class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='search-bar'>
                {this.props.children}
            </div>
         );
    }
}
 
export default SearchBar;