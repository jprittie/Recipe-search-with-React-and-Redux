import React from 'react';
import { connect } from 'react-redux';


const RecipeDetail = ({selectedRecipe}) => (
  <div className="recipe-detail">
    <h3>Recipe details</h3>
    {selectedRecipe.label}

  </div>

)


const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe
})



export default connect(mapStateToProps)(RecipeDetail);
