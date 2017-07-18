import React from 'react';
import { Link } from 'react-router';


const AdvancedSearchbar = ({textInput, searchParameters, onTextInputChange, onCaloriesSelect, onDietLabelSelect, onHealthLabelSelect, onSearchRecipes }) => (

    <div id="advanced-searchbar-input-group">

        <label htmlFor="advanced-search-input" className="searchbar-input-labels">search by name</label>
        <input
           value={textInput}
           id="advanced-search-input"
           type="string"
           onChange={ev => onTextInputChange(ev.target.value)}
         />

       <label htmlFor="calories-drop-down" className="searchbar-input-labels">max. calories</label>
        <select id="calories-drop-down" type="number" onChange={ev => onCaloriesSelect(ev.target.value)}>
          <option selected="selected" value=" "></option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
        </select>

        <label htmlFor="diet-label-drop-down" className="searchbar-input-labels">diet label</label>
        <select id="diet-label-drop-down" onChange={ev => onDietLabelSelect(ev.target.value)}>
          <option selected="selected" value=" "></option>
          <option value="high-protein">high protein</option>
          <option value="high-fiber">high fibre</option>
          <option value="low-fat">low fat</option>
          <option value="low-carb">low carb</option>
          <option value="low-sodium">low sodium</option>
        </select>

        <label htmlFor="health-label-drop-down" className="searchbar-input-labels">health label</label>
        <select id="health-label-drop-down" onChange={ev => onHealthLabelSelect(ev.target.value)}>
          <option selected="selected" value=" "></option>
          <option value="vegetarian">vegetarian</option>
          <option value="gluten-free">gluten free</option>
          <option value="dairy-free">dairy free</option>
          <option value="tree-nut-free">tree nut free</option>
          <option value="low-sugar">low sugar</option>
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
           search
         </button>
        </Link>

    </div>


)

export default AdvancedSearchbar;
