import React from 'react';
import { Link } from 'react-router';
import RecipeCard from './recipecard';


const RecipeList = ({recipeList, isError, onSetSelectedRecipe, loadingState, textInput}) => {

   if (loadingState) {
       return (<div className="loader"><h2>Loading results...</h2></div>)

    } else if (recipeList.length===0 && !isError) {
       return (<div className="loader"><h2>Sorry, there were no search results.</h2></div>)

    } else if (isError) {
      return (<div className="loader"><h2>Sorry, there was a server error. Please try again later.</h2></div>)

    } else if (recipeList.length>0 && !isError && !loadingState) {
      return (<div id="recipe-list">
        <div id="recipe-list-header" className="twelve columns">
          <h3>search results</h3>
        </div>

        <ul id="card-grid" className="twelve columns">
          {recipeList.map(recipe => <li className="card-container-link four columns" key={recipe.uri}><Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)}> <RecipeCard recipe={recipe}/> </Link></li> )}
        </ul>
      </div>)
    }

}

export default RecipeList;
