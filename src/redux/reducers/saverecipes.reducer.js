import { SAVE_RECIPE_ACTIONS } from '../actions/saverecipes.actions'
import { loadState } from '../../localstorage';

const SAVED_RECIPES = loadState();

//check logic
export const savedRecipes = (state = SAVED_RECIPES || [], action) => {
  if(action.type === SAVE_RECIPE_ACTIONS.SAVE_TO_MY_RECIPES) {
    if (SAVED_RECIPES) {
      return [...state, action.payload]
    } else {
      state = [];
      return [...state, action.payload];
    }
  }
  return state;
};
