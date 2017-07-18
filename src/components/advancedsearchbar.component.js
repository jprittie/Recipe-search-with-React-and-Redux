import React from 'react';
import { Link } from 'react-router';


const AdvancedSearchbar = ({textInput, searchParameters, onTextInputChange, onCaloriesSelect, onDietLabelSelect, onHealthLabelSelect, onSearchRecipes }) => (

    <div id="advanced-searchbar-input-group">

        <label htmlFor="advanced-search-input" className="searchbar-input-labels">search by keyword</label>
        <input
           value={textInput}
           id="advanced-search-input"
           type="string"
           onChange={ev => onTextInputChange(ev.target.value)}
         />

       <label htmlFor="calories-drop-down" className="searchbar-input-labels">max calories/serving</label>
        <select id="calories-drop-down" type="number" onChange={ev => onCaloriesSelect(ev.target.value)}>
          <option selected="selected" value=" "></option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
        </select>

        <label htmlFor="diet-label-drop-down" className="searchbar-input-labels">diet label</label>
        <select id="diet-label-drop-down" onChange={ev => onDietLabelSelect(ev.target.value)}>
          <option selected="selected" value=" "></option>
          <option value="high-protein">High Protein</option>
          <option value="high-fiber">High Fibre</option>
          <option value="low-fat">Low Fat</option>
          <option value="low-carb">Low Carb</option>
          <option value="low-sodium">Low Sodium</option>
        </select>

        <label htmlFor="health-label-drop-down" className="searchbar-input-labels">health label</label>
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
           onClick={ (e) => {
             if (!searchParameters.textInput || /^\s*$/.test(searchParameters.textInput || !searchParameters.textInput || 0 === searchParameters.textInput.length)) {
               e.preventDefault();
             } else {
             onSearchRecipes(searchParameters)
             }
           }}
         >
           search recipes
         </button>
        </Link>

    </div>


)

export default AdvancedSearchbar;
