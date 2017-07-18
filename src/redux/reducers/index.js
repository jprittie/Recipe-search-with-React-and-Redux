import combineReducers from 'redux/es/combineReducers';
import { routerReducer } from 'react-router-redux';
import recipeReducer, { selectedRecipe, loadingState, searchParameters } from './recipe.reducer';
import { savedRecipes } from './saverecipes.reducer';

export default combineReducers({
  recipe: recipeReducer,
  routing: routerReducer,
  searchParameters: searchParameters,
  selectedRecipe: selectedRecipe,
  loadingState: loadingState,
  savedRecipes: savedRecipes,

});
