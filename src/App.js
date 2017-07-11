import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { inputChange, getRecipeByName } from './redux/actions/recipe.actions';

import Searchbar from './components/searchbar';
import RecipeList from './components/recipelist';
import RecipeDetail from './components/recipedetail';




const App = ({textInput, recipeList, getRecipeByName}) =>
  (
    <div className="App">
      <div className="App-header">
        {recipeList.test}
        <h2>Search Recipes with the Edamam API</h2>
      </div>
      <Searchbar />
      <RecipeList />
      <RecipeDetail />

    </div>
  );




//write this out as mapStateToProps and mapDispatchToProps
const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  textInput: state.textInput,
}), {
  getRecipeByName
});

export default connectConfig(App);
