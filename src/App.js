import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { inputChange, getRecipeByName } from './redux/actions/recipe.actions';

import { history } from './index.js';
import { Router, Route, IndexRoute } from 'react-router';
//import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router';

import Main from './components/main';
import Splash from './components/splash';
import RecipeList from './components/recipelist';
import RecipeDetail from './components/recipedetail';
import SavedRecipesList from './components/savedrecipes';




const App = ({textInput, recipeList, getRecipeByName}) => (

    <div className="App">

      <Router history={history}>
        <Route component={Main}>
          <Route path="/" component={Splash} />
          <Route path="/search/:searchTerm" component={RecipeList}></Route>
          <Route path="/recipe/:selectedRecipe" component={RecipeDetail}></Route>
          <Route path="/savedrecipes" component={SavedRecipesList}></Route>
        </Route>
      </Router>

    </div>
  );





const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  textInput: state.textInput,
}), {
  getRecipeByName
});


export default connectConfig(App);
