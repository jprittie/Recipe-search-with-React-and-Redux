import React from 'react';
import { Link } from 'react-router';
import RecipeCard from './recipecard';


const SavedRecipesList = ({savedRecipes, onSetSelectedRecipe, selectedRecipe}) => (

  <div>

    { (savedRecipes.length===0) ? <div className="loader"> <h2>You don't have any saved recipes at the moment.</h2> </div> :

      <div id="recipe-list">
        <div id="recipe-list-header">
          <h3>my saved recipes</h3>
        </div>

        <ul id="card-grid">
        {savedRecipes.map(recipe => <li className="card-container-link four columns"><Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)} key={recipe.uri} > <RecipeCard recipe={recipe}/> </Link></li> )}
        </ul>
      </div>

    }

  </div>

);

export default SavedRecipesList;
