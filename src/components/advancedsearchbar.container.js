 
import { connect } from 'react-redux';
import { inputChange, getRecipeByName, searchByMaxCalories, searchByDietLabel, searchByHealthLabel } from '../redux/actions/recipe.actions';
import AdvancedSearchbar from './advancedsearchbar.component'


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
