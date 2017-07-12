import { SAVE_RECIPE_ACTIONS } from '../actions/savetostorage.actions'

export const savedRecipes = (state = [], action) => {
  if(action.type === SAVE_RECIPE_ACTIONS.SAVE_TO_MY_RECIPES) {
    return [...state, action.payload]
  }
  return state;
};
