import { RECIPE_ACTIONS } from '../actions/recipe.actions';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';


const APP_ID = 'e7e216b0';
const APP_KEY = '0b5ad1a1dcce889c9ea6a9df1e16a318';
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;



export const getRecipeByNameEpic = action$ =>


  action$.ofType(RECIPE_ACTIONS.GET_RECIPES_BY_NAME)
    .flatMap(action =>
      Observable.concat(
        // Set loading state before and after API call
        Observable.of({
          type: RECIPE_ACTIONS.SET_LOADING_STATE,
          payload: true
        }),
        Observable.ajax(`${BASE_ENDPOINT}&q=${action.payload.textInput}&from=0&to=9&calories=lte${action.payload.maxCalories}&diet=${action.payload.dietLabel}&health=${action.payload.healthLabel}`)
          .map(({ response }) => ({
            type: RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS,
            payload: response.hits.map(hit => hit.recipe)
          }))
          .catch(error => Observable.of({
            type: RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR,
            payload: error.xhr.response,
            error: true
          })),
          Observable.of({
            type: RECIPE_ACTIONS.SET_LOADING_STATE,
            payload: false
          })

      )
    );
