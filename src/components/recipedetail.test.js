import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetail from './recipedetail.component';


describe ('recipe detail component tests', () => {

	const selectedRecipe = {
		label: 'Buckwheat Blueberry Pancakes',
		image: 'https://www.edamam.com/web-img/385/385ce8742258053ddcda17d9897ad1d8.jpg',
    yield: 16,
    source: 'Food52',
		calories: 1759.852502775192,
    ingredientLines: ["1 cup all purpose flour", "1/2 cup whole wheat flour", "1/2 cup buckwheat flour", "2 tablespoons sugar", "1 teaspoon baking soda", "1 tablespoon baking powder", "1/2 teaspoon salt", "1 1/2 cup milk", "1/2 cup plain yogurt (i use non-fat)", "1/2 teaspoon vanilla", "1/4 cup melted butter", "1 cup blueberries (fresh or frozen, no need to defrost)"],
    dietLabels: ["Balanced"],
    healthLabels: ["Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]
	}

	it('should render the recipe name', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const label = 'Buckwheat Blueberry Pancakes';
		expect(wrapper.contains(label)).toEqual(true);
	});

	it('should render the recipe image', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const image = <img src={selectedRecipe.image} />
		expect(wrapper.contains(image)).toEqual(true);
	});

	it('should render the recipe source', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const source = 'Food52';
		expect(wrapper.contains(source)).toEqual(true);
	});

  it('should render the recipe yield', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const servings = 16;
		expect(wrapper.contains(servings)).toEqual(true);
	});



});
