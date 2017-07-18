
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';
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
