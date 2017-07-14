import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';
import RecipeCard from './recipecard';


const RecipeList = ({recipeList, isError, onSetSelectedRecipe, selectedRecipe}) => (

  <div className="recipe-list">
    <div className="recipe-list-header">
      <h3>Search results</h3>
    </div>

    <ul className="card-grid">
    {recipeList.map(recipe => <li className="card-container-link"><Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)} key={recipe.uri} > <RecipeCard recipe={recipe}/> </Link></li> )}
    </ul>
  </div>

)

/*    {recipeList.map(recipe => <Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)} className="recipe-list-button" key={recipe.uri}> {recipe.label} </Link> )}*/
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
