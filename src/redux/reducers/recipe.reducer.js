import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false
};


/* These search parameters are clunky... the API won't let me send empty strings to calories/dietlabels/health labels, so I'm going to try using a conditional in the epic so the API request only includes non-empty parameters. But for now, I'm just setting default parameters that will get the most search results.*/
const SEARCH_PARAMETERS = {
  textInput: '',
  maxCalories: 20000,
  dietLabel: 'balanced',
  healthLabel: 'peanut-free'
}


//rewrite as switch case
export const searchParameters = (state = SEARCH_PARAMETERS, action) => {
  if(action.type === RECIPE_ACTIONS.INPUT_CHANGE) {
    return {...state, textInput: action.payload };
  }
  if(action.type === RECIPE_ACTIONS.CALORIES_SELECT) {
    return {...state, maxCalories: action.payload }
  }
  if(action.type === RECIPE_ACTIONS.DIET_LABEL_SELECT) {
    return {...state, dietLabel: action.payload }
  }
  if(action.type === RECIPE_ACTIONS.HEALTH_LABEL_SELECT) {
    return {...state, healthLabel: action.payload }
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

export const loadingState = (state = false, action) => {
  if(action.type === RECIPE_ACTIONS.SET_LOADING_STATE) {
    return action.payload
  }
  return state;
}
