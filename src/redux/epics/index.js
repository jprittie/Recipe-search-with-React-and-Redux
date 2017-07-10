import { combineEpics } from 'redux-observable';

import { getRecipeByNameEpic } from './recipe.epics';

export default combineEpics(
  getRecipeByNameEpic,
)
