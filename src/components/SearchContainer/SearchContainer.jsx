import React from 'react'
import LeftNav from '../LeftNav/LeftNav'
import SearchForm from '../SearchForm/SearchForm'
import './SearchContainer.css'


function SearchContainer(){

    return(
        <div className="search-container">
          <LeftNav/>
          <SearchForm/>
        </div>
    )
}

export default SearchContainer;