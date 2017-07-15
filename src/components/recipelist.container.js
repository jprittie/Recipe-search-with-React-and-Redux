import React from 'react';
import { connect } from 'react-redux';
import RecipeList from './recipelist.component.js';


const mapStateToProps = (state) => ({
  recipeList: state.recipe.list,
  textInput: state.textInput,
  isError: state.recipe.isError,
  loadingState: state.loadingState
})

const actions = {
  onSetSelectedRecipe: getRecipeDetails
}

export default connect(mapStateToProps, actions)(RecipeList);
