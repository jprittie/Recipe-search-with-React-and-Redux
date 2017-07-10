import { RECIPE_ACTIONS } from '../actions/recipe.actions';

import { Observable } from 'rxjs';


// this is important! This adds additional methods to the rxjs prototype
// basically, you cant use mergeMap unless you explicitly include it
// it seems silly, but they do this to prevent bloat, things that aren't included this way can be
// excluded in the final build! And rxjs has like a bajillion methods
import 'rxjs/add/operator/mergeMap';


const APP_ID = 'e7e216b0';
const APP_KEY = '0b5ad1a1dcce889c9ea6a9df1e16a318';

const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;



// you may want to remove comments when you work on this, at least temporarily, if it becomes too bloated to read

export const getRecipeByNameEpic = action$ =>

  // the action$ object here is special, and hears ALL actions tha go through, like a reducer
  // ofType waits for a very specific action, and when it does, it allows everything after to fire
 // thing of ofType like an if statement - if the action is ofType [x] - then do!
  action$.ofType(RECIPE_ACTIONS.GET_RECIPES_BY_NAME)
    .mergeMap(action =>

      // you can use basically any kind of observable or promise in a mergemap
      // if you return any sort of async object that rxjs understands (which is most)
      // it automatically deals with WAITING for this async action to complete before moving on
      // to the next method in the chain

      // think of merge map like a map that WAITS until whatever you return is finished
      // here we are saying, after I get the GET_RECIPES_BY_NAME action, I want to 'map'
      // the data from that action into this new request I make, but WAIT until it gets
      // back from the server
      Observable.ajax(`${BASE_ENDPOINT}&q=${action.payload}`)

      // after it comes back from the server, send out this NEW action
      // this action is ONLY sent out when a successful response is reciped from the above ajax call
      // with redux-observable, the last thing you return in the chain should be an action object
      // that action object is then picked up by redux like normal!
        .map(({ response }) => ({
          type: RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS,
          // response.hits is where the recipes live! however they aren't in the nicest structure
          // so I do a little mapping over them to make them into something more consumable before I
          // send them off to my reducer
          // feel free to explore the full response!
          payload: response.hits.map(hit => hit.recipe),
        }))


    );
