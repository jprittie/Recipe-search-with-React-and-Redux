import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.component';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';


import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { saveState } from './localstorage'
import watch from 'redux-watch'


import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';

const loggerMiddleware = createLogger()


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createEpicMiddleware(rootEpic), loggerMiddleware),
);

export const history = syncHistoryWithStore(browserHistory, store);


// I want to watch for changes only in state.savedRecipes, not entire state
// So I'm using a module called redux-watch to do that
let w = watch(store.getState, 'savedRecipes')
store.subscribe(w((newVal, oldVal, objectPath) => {
  console.log('%s changed from %s to %s', objectPath, oldVal, newVal)
  saveState(
    store.getState().savedRecipes
  )
}))



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
