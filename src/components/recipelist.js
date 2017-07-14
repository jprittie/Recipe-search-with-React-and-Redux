import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';
import RecipeCard from './recipecard';


const RecipeList = ({recipeList, isError, onSetSelectedRecipe, loadingState, textInput}) => (

  <div>

    { (loadingState) ? <div className="loader"><h1>Loading results...</h1></div> : <div></div> }

    { (recipeList.length===0 && !isError) ? <div className="loader"><h1>Sorry, there were no search results for {textInput}.</h1></div> : <div></div> }

    { (isError) ? <div className="loader"><h1>Sorry, there was an error retrieving results.</h1></div> : <div></div> }

    <div className="recipe-list">
      <div className="recipe-list-header">
        <h3>Search results</h3>
      </div>

      <ul className="card-grid">
      {recipeList.map(recipe => <li className="card-container-link"><Link to={`/recipe/${recipe.label}`} onClick={ () => onSetSelectedRecipe(recipe)} key={recipe.uri} > <RecipeCard recipe={recipe}/> </Link></li> )}
      </ul>
    </div>

  </div>


)



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
