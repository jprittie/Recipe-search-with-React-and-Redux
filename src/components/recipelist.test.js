import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './recipelist.component';
import RecipeCard from './recipecard';

describe ('recipe list component tests', () => {

	const recipeList = [
		{label: 'Ice Cream Waffle Sandwich',
		 image: 'https://www.edamam.com/web-img/cb0/cb0917de4667b4cb8c551e34afc83e40.jpg'},
    {label: 'Rhubarb-White Chocolate Soufflé',
     image: 'https://www.edamam.com/web-img/48a/48a1d36bd74e29090833fd358369d146.jpg'
    },
    {label: 'Buckwheat Blueberry Pancakes',
     image: 'https://www.edamam.com/web-img/385/385ce8742258053ddcda17d9897ad1d8.jpg'
    }
  ]

	const emptyList = []

	it('should render the entire list of recipes', () => {
		const wrapper = shallow(<RecipeList recipeList={recipeList}/>);
    expect(wrapper.find(RecipeCard)).toHaveLength(recipeList.length);
	});

	it('should not render any recipes', () => {
		const wrapper = shallow(<RecipeList recipeList={emptyList}/>);
		expect(wrapper.find(RecipeCard)).toHaveLength(0);
	});


});
