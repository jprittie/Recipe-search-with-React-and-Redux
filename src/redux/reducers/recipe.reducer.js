import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false
};

export const textInput = (state = '', action) => {
  if(action.type === RECIPE_ACTIONS.INPUT_CHANGE) {
    return action.payload
  }
  return state;
};

export const selectedRecipe = (state = {}, action) => {
  if(action.type === RECIPE_ACTIONS.GET_RECIPE_DETAILS) {
    return {...action.payload}
  }
  return state;
}

export default (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    case RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS:
      return {...state, list: action.payload, isError: false };

    case RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR:
      return {...state, list: [], isError: true };

    default:
      return state;
  }
}
