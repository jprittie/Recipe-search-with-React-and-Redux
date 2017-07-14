import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';
import RecipeCard from './recipecard';


const SavedRecipesList = ({savedRecipes, onSetSelectedRecipe, selectedRecipe}) => (

  <div className="recipe-list">
    <div className="recipe-list-header">
      <h3>Search results</h3>
    </div>

    <ul className="card-grid">
    {savedRecipes.map(recipe => <li className="card-container-link"><Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)} key={recipe.uri} > <RecipeCard recipe={recipe}/> </Link></li> )}
    </ul>
  </div>

);


const mapStateToProps = (state) => ({
  savedRecipes: state.savedRecipes,
  selectedRecipe: state.selectedRecipe
});

const actions = {
  onSetSelectedRecipe: getRecipeDetails
}

export default connect(mapStateToProps, actions)(SavedRecipesList);
