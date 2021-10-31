import React from 'react'
import './SearchForm.css'

function SearchForm(){

    return(
        <div className="search-form-container">
            <div className="search-field-container">
                <div className="source-container">
                    Source
                </div>
                <div className="destination-container">
                    Destination
                </div>
            </div>
        </div>
    )
}

export default SearchForm;
