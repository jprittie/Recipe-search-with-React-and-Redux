import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './recipecard';


describe ('recipe card component tests', () => {

	const recipe = {
		label: 'Ice Cream Waffle Sandwich',
		image: 'https://www.edamam.com/web-img/cb0/cb0917de4667b4cb8c551e34afc83e40.jpg',
	}

	it('should render the recipe name', () => {
		const wrapper = shallow(<RecipeCard recipe={recipe}/>);
		const label = 'Ice Cream Waffle Sandwich';
		expect(wrapper.contains(label)).toEqual(true);

	});

	it('should render the recipe image', () => {
		const wrapper = shallow(<RecipeCard recipe={recipe}/>);
		const image = <img src={recipe.image} />
		expect(wrapper.contains(image)).toEqual(true);

	});



});
