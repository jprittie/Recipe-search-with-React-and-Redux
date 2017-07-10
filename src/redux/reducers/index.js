import combineReducers from 'redux/es/combineReducers';
import recipeReducer, { textInput } from './recipe.reducer';


export default combineReducers({
  recipe: recipeReducer,
  textInput: textInput,
  testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});
