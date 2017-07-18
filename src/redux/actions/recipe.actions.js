export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  GET_RECIPE_DETAILS: 'GET_RECIPE_DETAILS',
  INPUT_CHANGE: 'INPUT_CHANGE',
  CALORIES_SELECT: 'CALORIES_SELECT',
  DIET_LABEL_SELECT: 'DIET_LABEL_SELECT',
  HEALTH_LABEL_SELECT: 'HEALTH_LABEL_SELECT',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
  SET_LOADING_STATE: 'SET_LOADING_STATE',
  CLEAR_SEARCH_RESULTS: 'CLEAR_SEARCH_RESULTS'
};

//change name of action to get by search parameters
export const getRecipeByName = searchTerms => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: searchTerms,
});

export const inputChange = value => ({
  type: RECIPE_ACTIONS.INPUT_CHANGE,
  payload: value,
});

export const searchByMaxCalories = value => ({
  type: RECIPE_ACTIONS.CALORIES_SELECT,
  payload: value,
});

export const searchByDietLabel = value => ({
  type: RECIPE_ACTIONS.DIET_LABEL_SELECT,
  payload: value,
});

export const searchByHealthLabel = value => ({
  type: RECIPE_ACTIONS.HEALTH_LABEL_SELECT,
  payload: value,
});

export const getRecipeDetails = recipe => ({
  type: RECIPE_ACTIONS.GET_RECIPE_DETAILS,
  payload: recipe
})

export const setLoadingState = boolean => ({
  type: RECIPE_ACTIONS.SET_LOADING_STATE,
  payload: boolean
})
