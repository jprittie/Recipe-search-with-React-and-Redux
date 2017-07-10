import combineReducers from 'redux/es/combineReducers';
import recipeReducer from './recipe.reducer';


export default combineReducers({
  recipe: recipeReducer,
  testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});
