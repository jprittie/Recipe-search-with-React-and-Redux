import React from 'react';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';


const SavedRecipesList = ({savedRecipes, onSetSelectedRecipe}) => (
  <div className="recipe-list">
    <h3>My Saved Recipes</h3>
    <h4>Select a recipe to see details</h4>
    {savedRecipes.map(recipe => <button onClick={ () => onSetSelectedRecipe(recipe)} className="recipe-list-button" key={recipe.uri}>{recipe.label}</button>)}
  </div>

);


const mapStateToProps = (state) => ({
  savedRecipes: state.savedRecipes
});

const actions = {
  onSetSelectedRecipe: getRecipeDetails
}

export default connect(mapStateToProps, actions)(SavedRecipesList);
