import React from 'react';
import { connect } from 'react-redux';
import { saveToMyRecipes } from '../redux/actions/saverecipes.actions';
import { Link } from 'react-router';

const RecipeDetail = ({selectedRecipe, onSaveRecipe}) => (

  <div id="recipe-detail-container" className="twelve columns">


    <div id="recipe-detail-description" className="five columns offset-by-one">

      <h3 id="recipe-detail-title">{selectedRecipe.label}</h3>
      {/*
      <div>
        <button onClick={ () => onSaveRecipe(selectedRecipe)}>Save to My Recipes</button>
      </div>
      */}

      <ul id="ingredient-list">
        {selectedRecipe.ingredientLines.map(ingredient => <li>{ingredient}</li>)}
      </ul>

      <p id="recipe-detail-servings">Servings: {selectedRecipe.yield}</p>
      <p id="recipe-detail-calories">Calories per serving: {selectedRecipe.calories/selectedRecipe.yield}</p>
      <Link to={selectedRecipe.url}><p id="recipe-detail-source">Source: {selectedRecipe.source}</p></Link>

      <div id="nutrition-labels">
        <div id="diet-labels">
          <p>Diet Labels:</p>
          <ul>
            {selectedRecipe.dietLabels.map(dietLabel => <li>{dietLabel}</li>)}
          </ul>
        </div>
        <div id="health-labels">
          <p>Health Labels:</p>
          <ul>
            {selectedRecipe.healthLabels.map(healthLabel => <li>{healthLabel}</li>)}
          </ul>
        </div>
      </div>


    </div>

    <div id="recipe-detail-image" className="five columns">
     <img src={selectedRecipe.image} />
    </div>
  </div>

)

export default RecipeDetail;
