import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false
};

export default (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    // Here I am listening to a SUCCESSFUL response from the server, this action is only ever emitted by
    // an epic! By the time this action fires, the api request is completed successfully
    // check recipe.epics.js to see where this action is being created
    case RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS:
      return {...state, list: action.payload, isError: false };


      // We'll handle errors on a later date :) but if you feel like you might have an idea, or want to try it on your own...
      // https://github.com/redux-observable/redux-observable/blob/master/docs/recipes/ErrorHandling.md
    case RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR:
      return {...state, list: [], isError: true };

    default:
      return state;
  }
}
