import combineReducers from 'redux/es/combineReducers';
import { routerReducer } from 'react-router-redux';
import recipeReducer, { textInput, selectedRecipe, loadingState } from './recipe.reducer';
import { savedRecipes } from './saverecipes.reducer';

export default combineReducers({
  recipe: recipeReducer,
  routing: routerReducer,
  textInput: textInput,
  selectedRecipe: selectedRecipe,
  loadingState: loadingState,
  savedRecipes: savedRecipes,
  testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});

  //recipe.list: recipe.list,
