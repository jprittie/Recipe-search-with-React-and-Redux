import React from 'react';
import { connect } from 'react-redux';

import { inputChange, getRecipeByName } from '../redux/actions/recipe.actions';

const Searchbar = ({textInput, onTextInputChange, onSearchRecipes}) => (

    <div className="input-group">
       <input
         value={textInput}

         className="input"
         onChange={ev => onTextInputChange(ev.target.value)}
       />
       <button
         className="submit-button"
         onClick={ () => onSearchRecipes(textInput)}
       >
         Search recipes
       </button>

  </div>
)

const mapStateToProps = (state) => ({
  textInput: state.textInput,
})

const actions = {
  onTextInputChange: inputChange,
  onSearchRecipes: getRecipeByName,
}

export default connect(mapStateToProps, actions)(Searchbar);
