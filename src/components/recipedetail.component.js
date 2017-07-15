import React from 'react';
import { connect } from 'react-redux';
import { saveToMyRecipes } from '../redux/actions/saverecipes.actions';
import { Link } from 'react-router';

const RecipeDetail = ({selectedRecipe, onSaveRecipe}) => (

  <div>
    <div className="recipe-detail-image">
     <img src={selectedRecipe.image} />
    </div>

    <div className="recipe-detail">
      <h3>{selectedRecipe.label}</h3>

      <ul className="ingredient-list">
        {selectedRecipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}
      </ul>

      <p>Servings: {selectedRecipe.yield}</p>
      <p>Calories per serving: {selectedRecipe.calories/selectedRecipe.yield}</p>
      <Link to={selectedRecipe.url}>Source: {selectedRecipe.source}</Link>
      <div className="diet-labels">
        Diet Labels:
        <ul>
          {selectedRecipe.dietLabels.map(dietLabel => <li>{dietLabel}</li>)}
        </ul>
      </div>
      <div className="health-labels">
        Health Labels:
        <ul>
          {selectedRecipe.healthLabels.map(healthLabel => <li>{healthLabel}</li>)}
        </ul>
      </div>

      <div>
        <button onClick={ () => onSaveRecipe(selectedRecipe)}>Save to My Recipes</button>
      </div>
    </div>
  </div>

)

export default RecipeDetail;
