import React from 'react';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';


const RecipeList = ({recipeList, recipeCount, isError, onSetSelectedRecipe, selectedRecipe}) => (

  <div className="recipe-list">
  <h3>Search results</h3>
  <h4>Select a recipe to see details</h4>
  {recipeList.map(recipe => <button onClick={ () => onSetSelectedRecipe(recipe)} className="recipe-list-button" key={recipe.uri}>{recipe.label}</button>)}
  </div>

)

//do error handling here... if state.recipe.list has length 0, show no results found for textInput. However, state.recipe.list could also have length 0 if there is a server error, so that's not a reliable way to handle it
//if length === 0 && isError: false then there were no search results
// show server error if isError is true(and change view?)
// where did naming of state.recipe come from?

const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe,
  recipeList: state.recipe.list,
  isError: state.recipe.isError
})

const actions = {
  onSetSelectedRecipe: getRecipeDetails
}

export default connect(mapStateToProps, actions)(RecipeList);
