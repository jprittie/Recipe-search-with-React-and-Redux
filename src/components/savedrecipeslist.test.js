import React from 'react';
import { shallow } from 'enzyme';
import SavedRecipeList from './savedrecipeslist.component';
import RecipeCard from './recipecard';


describe ('saved recipes component tests', () => {

	const savedRecipes = [
		{label: 'Ice Cream Waffle Sandwich',
		 image: 'https://www.edamam.com/web-img/cb0/cb0917de4667b4cb8c551e34afc83e40.jpg'},
    {label: 'Rhubarb-White Chocolate Soufflé',
     image: 'https://www.edamam.com/web-img/48a/48a1d36bd74e29090833fd358369d146.jpg'
    },
    {label: 'Buckwheat Blueberry Pancakes',
     image: 'https://www.edamam.com/web-img/385/385ce8742258053ddcda17d9897ad1d8.jpg'
    }
  ]

	const emptyList = [];

	it('should render the entire list of saved recipes', () => {
		const wrapper = shallow(<SavedRecipeList savedRecipes={savedRecipes}/>);
    expect(wrapper.find(RecipeCard)).toHaveLength(savedRecipes.length);
	});

	it('should not render any saved recipes', () => {
		const wrapper = shallow(<SavedRecipeList savedRecipes={emptyList}/>);
		expect(wrapper.find(RecipeCard)).toHaveLength(0);
	});


});
