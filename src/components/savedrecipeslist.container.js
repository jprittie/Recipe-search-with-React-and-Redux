 
import { connect } from 'react-redux';
import { getRecipeDetails } from '../redux/actions/recipe.actions';
import SavedRecipesList from './savedrecipeslist.component.js';

const mapStateToProps = (state) => ({
  savedRecipes: state.savedRecipes,
  selectedRecipe: state.selectedRecipe
});

const actions = {
  onSetSelectedRecipe: getRecipeDetails
}

export default connect(mapStateToProps, actions)(SavedRecipesList);
