import React from 'react';
import { connect } from 'react-redux';
import { saveToMyRecipes } from '../redux/actions/savetostorage.actions';

//I don't actually need to bring in savedRecipes here
const RecipeDetail = ({selectedRecipe, onSaveRecipe, savedRecipes}) => (
  <div className="recipe-detail">
    <h3>Recipe details</h3>
    {selectedRecipe.label}

    <div>
      <button onClick={ () => onSaveRecipe(selectedRecipe)}>Save to My Recipes</button>
    </div>
  </div>

)


const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe,
  savedRecipes: state.savedRecipes
})

const actions = {
  onSaveRecipe: saveToMyRecipes
}


export default connect(mapStateToProps, actions)(RecipeDetail);
