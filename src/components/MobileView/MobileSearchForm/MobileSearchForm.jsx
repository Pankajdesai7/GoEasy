import React from 'react'
import SearchButton from '../../SearchButton/SearchButton'
import './MobileSearchForm.css'

function MobileSearchForm(){

        return(
            <div className="search-form-container-mobile">
                <div className="search-field-container-mobile">
                    <div className="source-container-mobile">
                        Source
                    </div>
                    <div className="destination-container-mobile">
                        Destination
                    </div>
                </div>
                <div className="button-container">
                 <SearchButton/>
                </div>
            </div>
        )
}

export default MobileSearchForm;