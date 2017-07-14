import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false
};

const DEFAULT_SEARCH_PARAMETERS = {
  textInput: '',
  maxCalories: ''
}

export const searchParameters = (state = DEFAULT_SEARCH_PARAMETERS, action) => {
  if(action.type === RECIPE_ACTIONS.INPUT_CHANGE) {
    return {...state, textInput: action.payload };
  }
  if(action.type === RECIPE_ACTIONS.CALORIES_SELECT) {
    return {...state, maxCalories: action.payload }
  }
  return state;
};

/*
export const maxCalories = (state = '', action) => {
  if(action.type === RECIPE_ACTIONS.CALORIES_SELECT) {
    return action.payload
  }
  return state;
};*/

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

export const loadingState = (state = false, action) => {
  if(action.type === RECIPE_ACTIONS.SET_LOADING_STATE) {
    return action.payload
  }
  return state;
}

/*
export const recipe.list = (state = [], action) => {
  if(action.type === RECIPE_ACTIONS.CLEAR_SEARCH_RESULTS) {
    return state;
  }
  return state;
} */
