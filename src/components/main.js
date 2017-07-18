import React from 'react';
import AdvancedSearchbar from './advancedsearchbar.container';
import { Link } from 'react-router';


const Main = (props) => (
  <div>
    <div id="header">
      <Link to="/" id="app-title">
        <h1 id="main-title">search recipes</h1>
        <h2 id="main-subhed">with the edamam api</h2>
      </Link>
      <Link to="/savedrecipes" className="saved-recipes-link">
        <h4>view saved recipes</h4>
      </Link>


    </div>
    <div id="searchbar">
      <AdvancedSearchbar />
    </div>
    <div className="container">
      {props.children}
    </div>

  </div>
);


export default Main;
