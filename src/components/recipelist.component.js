import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';
import RecipeCard from './recipecard';


const RecipeList = ({recipeList, isError, onSetSelectedRecipe, loadingState, textInput}) => (

  <div>

    { (loadingState) ? <div className="loader"><h2>Loading results...</h2></div> : <div></div> }

    { (recipeList.length===0 && !isError) ? <div className="loader"><h2>Sorry, there were no search results for "{textInput} "</h2></div> : <div></div> }

    { (isError) ? <div className="loader"><h2>Sorry, there was an error retrieving results.</h2></div> :

      <div id="recipe-list">
        <div id="recipe-list-header" className="twelve columns">
          <h3>search results</h3>
        </div>

        <ul id="card-grid" className="twelve columns">
          {recipeList.map(recipe => <li className="card-container-link four columns" key={recipe.uri}><Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)}> <RecipeCard recipe={recipe}/> </Link></li> )}
        </ul>
      </div>
    }

  </div>


)

export default RecipeList;
