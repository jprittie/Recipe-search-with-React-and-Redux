import React from 'react';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';


const RecipeList = ({recipeList, onSetSelectedRecipe, selectedRecipe}) => (

  <div className="recipe-list">
  <h3>Search results</h3>
  <h4>Select a recipe to see details</h4>
  {recipeList.map(recipe => <button onClick={ () => onSetSelectedRecipe(recipe)}key={recipe.uri}>{recipe.label}</button>)}
  </div>

)


const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe,
  recipeList: state.recipe.list
})

const actions = {
  onSetSelectedRecipe: getRecipeDetails
}

export default connect(mapStateToProps, actions)(RecipeList);
