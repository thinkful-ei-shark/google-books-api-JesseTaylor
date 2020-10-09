import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
    <div className='book-container'>
      {this.props.children}
    </div>
    );
  }
}

export default List;
