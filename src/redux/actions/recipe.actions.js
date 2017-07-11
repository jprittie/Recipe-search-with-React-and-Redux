export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  GET_RECIPE_DETAILS: 'GET_RECIPE_DETAILS',
  INPUT_CHANGE: 'INPUT_CHANGE',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = recipeName => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: recipeName,
});

export const inputChange = value => ({
  type: RECIPE_ACTIONS.INPUT_CHANGE,
  payload: value,
});

export const getRecipeDetails = recipe => ({
  type: RECIPE_ACTIONS.GET_RECIPE_DETAILS,
  payload: recipe
})
