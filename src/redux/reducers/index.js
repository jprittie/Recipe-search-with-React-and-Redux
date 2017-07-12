import combineReducers from 'redux/es/combineReducers';
import recipeReducer, { textInput, selectedRecipe } from './recipe.reducer';
import { savedRecipes } from './savetostorage.reducer';

export default combineReducers({
  recipe: recipeReducer,
  textInput: textInput,
  selectedRecipe: selectedRecipe,
  savedRecipes: savedRecipes,

  testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});
