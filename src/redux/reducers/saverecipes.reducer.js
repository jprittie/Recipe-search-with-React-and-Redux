import { SAVE_RECIPE_ACTIONS } from '../actions/saverecipes.actions'
import { loadState } from '../../localstorage';

const SAVED_RECIPES = loadState();

const containsObject = (obj, list) => {
  return list.some(elem => elem == obj)
}

export const savedRecipes = (state = SAVED_RECIPES || [], action) => {
  if(action.type === SAVE_RECIPE_ACTIONS.SAVE_TO_MY_RECIPES &&  containsObject(action.payload, state)===false ) {
    if (SAVED_RECIPES) {
      return [...state, action.payload]
    } else {
      state = [];
      return [...state, action.payload];
    }
  }
  return state;
};
