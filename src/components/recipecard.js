import React from 'react';


const RecipeCard = ({recipe}) => (

  <div className="card-container">
    <div className="card-image">
     <img src={recipe.image} />
    </div>
    <div className="card-title">
      {recipe.label}
    </div>
  </div>

);

export default RecipeCard;
