import React from 'react';
import { connect } from 'react-redux';
import { inputChange, getRecipeByName, searchByMaxCalories, searchByDietLabel, searchByHealthLabel } from '../redux/actions/recipe.actions';
import { Link } from 'react-router';


const AdvancedSearchbar = ({textInput, searchParameters, onTextInputChange, onCaloriesSelect, onDietLabelSelect, onHealthLabelSelect, onSearchRecipes }) => (

  <div className="input-group advanced-searchbar">

      <label htmlFor="advanced-search-input">Search by keyword  </label>
      <input
         value={textInput}
         id="advanced-search-input"
         type="string"
         onChange={ev => onTextInputChange(ev.target.value)}
       />

     <label htmlFor="calories-drop-down">Max Calories Per Serving  </label>
      <select id="calories-drop-down" type="number" onChange={ev => onCaloriesSelect(ev.target.value)}>
        <option selected="selected" value=" "></option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
      </select>

      <label htmlFor="diet-label-drop-down">Diet Label  </label>
      <select id="diet-label-drop-down" onChange={ev => onDietLabelSelect(ev.target.value)}>
        <option selected="selected" value=" "></option>
        <option value="balanced">Balanced</option>
        <option value="high-protein">High Protein</option>
        <option value="high-fiber">High Fibre</option>
        <option value="low-fat">Low Fat</option>
        <option value="low-carb">Low Carb</option>
        <option value="low-sodium">Low Sodium</option>
      </select>

      <label htmlFor="health-label-drop-down">Health Label  </label>
      <select id="health-label-drop-down" onChange={ev => onHealthLabelSelect(ev.target.value)}>
        <option selected="selected" value=" "></option>
        <option value="peanut-free">Peanut Free</option>
        <option value="tree-nut-free">Tree Nut Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten Free</option>
        <option value="dairy-free">Dairy Free</option>
        <option value="low-sugar">Low Sugar</option>
      </select>

      <Link to={`/search/${searchParameters.textInput}`}>
       <button
         id="advanced-search-submit-button"
         onClick={ () => onSearchRecipes(searchParameters)}
       >
         Search recipes
       </button>
      </Link>

  </div>
)

const mapStateToProps = (state) => ({
  textInput: state.textInput,
  maxCalories: state.maxCalories,
  searchParameters: state.searchParameters
})

const actions = {
  onTextInputChange: inputChange,
  onCaloriesSelect: searchByMaxCalories,
  onDietLabelSelect: searchByDietLabel,
  onHealthLabelSelect: searchByHealthLabel,
  onSearchRecipes: getRecipeByName,
}

export default connect(mapStateToProps, actions)(AdvancedSearchbar);
