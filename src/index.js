import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';


import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
//do I need to import and install rxjs?

import rootReducer from './redux/reducers';
import rootEpic from './redux/epics'; //defaults to the index file in the folder

const loggerMiddleware = createLogger()

//note Purvi used:
//import configureStore from './store/configure-store';
//const store = configureStore()
//she also has a configure-store file
//her store also has a preloaded state
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // add redux-logger middleware!
  applyMiddleware(createEpicMiddleware(rootEpic), loggerMiddleware),
);



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
