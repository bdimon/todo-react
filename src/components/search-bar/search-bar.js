import React from 'react';
import './search-bar.css';
const SearchBar = () => {
  // const searchText = 'Type here';
  // const searchStyle = {
  //   fontSize: '20px'
  // }
  return <input type="text"
  className="form-control search-input"
  placeholder = "Type to search"
  />;
};
export default SearchBar;