// This is where we init the store
// We could do this in index.js, but
// it's a good practice to separate it
// cause it's quickly a mess
import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

// We get all the reducers at once
import rootReducer from './reducers';

// We setup redux-api-middleware
const middleware = applyMiddleware(apiMiddleware, thunk);

// We are forced to use "compose", because "createStore" uses only two arguments
export default () => {
  const store = createStore(
    rootReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

  return store;
}