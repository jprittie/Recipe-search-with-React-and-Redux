## Recipe search with React and Redux
### Built with React, React Router, Redux, Redux observables, Redux Watch, localstorage, Edamam API, Heroku

*Rangle.io Bridge school individual project*

### Project objectives:
This project allows users to search the Edamam API for recipes according to keyword, calories, diet type. Users can save favourite recipes and view them. You can [see the finished project on Heroku.](https://recipe-search-with-redux.herokuapp.com/)

### Specific requirements:
* Use as many stateless components as possible
* Unit tests on components, with at least 10 tests written
* Redux to manage state, with at least the following data being held:
		* List of recipes
		*	Selected recipe
		* Current search field value
* Use Redux observables to handle api requests


### Bonus features implemented:
* Routing
* Uses observables for error handling
* Uses observables to set loading state to true while API search is in progress
* Saving favourite recipes to localstorage, and syncing this with the Redux store
* Uses a package called redux-watch to watch for changes in favourite recipes, and only update localstorage when such changes occur (as opposed to syncing with localstorage any time state changes).