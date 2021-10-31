import React from 'react';
import Logo from '../Logo/Logo';
import ResultList from '../ResultList/ResultList';
import MobileSearchForm from './MobileSearchForm/MobileSearchForm';
import './MobileView.css'


function MobileView(){

    return(
        <div className="mobile-container">
           <Logo/>
           <MobileSearchForm/>
           <div>
               <ResultList/>
               <ResultList/>
               <ResultList/>
               <ResultList/>
               <ResultList/>
           </div>
           <Logo/>
        </div>
    )
}

export default MobileView;