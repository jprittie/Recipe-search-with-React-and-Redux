import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName } from './redux/actions/recipe.actions';

import Searchbar from './components/searchbar.js'




const App = ({recipeList, getRecipeByName}) =>
  (
    <div className="App">
      <div className="App-header">
        {recipeList.test}
        <h2>Welcome to <span className="strike">React</span> Redux-Observable!</h2>
      </div>
      <Searchbar />
      <p className="App-intro">
        <button onClick={() => getRecipeByName('omelet')}>Click me for Omelet</button>
      </p>
      {recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
    </div>
  );


//write this out as mapStateToProps and mapDispatchToProps
const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
}), {
  getRecipeByName
});

export default connectConfig(App);
