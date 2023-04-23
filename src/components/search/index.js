import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';

const Search = () => {

 
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }

    const query = createSearchParams(searchQuery);

    navigate({
      pathname:'/search',
      search:`?${query}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} placeholder='Type the name of the pet'/>
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
