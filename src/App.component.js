import React from 'react';
import './App.css';

import { history } from './index.js';
import { Router, Route } from 'react-router';

import Main from './components/main';
import Splash from './components/splash';
import RecipeList from './components/recipelist.container';
import RecipeDetail from './components/recipedetail.container';
import SavedRecipesList from './components/savedrecipeslist.container';



const App = () => (

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

export default App;
