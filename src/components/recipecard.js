import React from 'react';


const RecipeCard = ({recipe}) => (

  <div className="card-container">
    <div className="card-image">
     <img src={recipe.image} alt="finished recipe" />
    </div>
    <div className="card-title">
      <h4>{recipe.label}</h4>
    </div>
  </div>

);

export default RecipeCard;
