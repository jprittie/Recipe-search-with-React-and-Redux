
import { connect } from 'react-redux';
import { saveToMyRecipes } from '../redux/actions/saverecipes.actions';
import RecipeDetail from './recipedetail.component.js';


const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe,
  savedRecipes: state.savedRecipes
})

const actions = {
  onSaveRecipe: saveToMyRecipes
}


export default connect(mapStateToProps, actions)(RecipeDetail);
