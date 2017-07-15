import React from 'react';
import Searchbar from './searchbar';
import AdvancedSearchbar from './advancedsearchbar.container';
import { Link } from 'react-router';


const Main = (props) => (
  <div>
    <div className="App-header">
      <Link to="/" className="app-title">
        <h2>Search Recipes with the Edamam API</h2>
      </Link>
      <Link to="/savedrecipes" className="saved-recipes-link">
        <h4>My Saved Recipes</h4>
      </Link>


    </div>
    <div>
      <AdvancedSearchbar />
    </div>
    <div>
      {props.children}
    </div>

  </div>
);


export default Main;
