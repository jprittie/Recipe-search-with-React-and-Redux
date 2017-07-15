import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetail from './recipedetail.component';


describe ('recipe detail component tests', () => {

	const selectedRecipe = {
		label: 'Ice Cream Waffle Sandwich',
		image: 'https://www.edamam.com/web-img/cb0/cb0917de4667b4cb8c551e34afc83e40.jpg',
    yield: '6',
    source: '',
    ingredientLines: [],
    dietLabels: [],
    healthLabels: []]
	}

	it('should render the recipe name', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const label = 'Ice Cream Waffle Sandwich';
		expect(wrapper.contains(label)).toEqual(true);
	});

	it('should render the recipe image', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const image = <img src={recipe.image} />
		expect(wrapper.contains(image)).toEqual(true);
	});

  it('should render the recipe yield', () => {
		const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
		const yield = '6';
		expect(wrapper.contains(yield)).toEqual(true);
	});

  it('should render the recipe source', () => {
    const wrapper = shallow(<RecipeDetail selectedRecipe={selectedRecipe}/>);
    const source = '';
    expect(wrapper.contains(source)).toEqual(true);
  });

});
