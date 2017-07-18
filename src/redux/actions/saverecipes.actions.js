export const SAVE_RECIPE_ACTIONS = {
  //user actions
  SAVE_TO_MY_RECIPES: 'SAVE_TO_MY_RECIPES'

}


export const saveToMyRecipes = recipe => ({
  type: SAVE_RECIPE_ACTIONS.SAVE_TO_MY_RECIPES,
  payload: recipe
});
