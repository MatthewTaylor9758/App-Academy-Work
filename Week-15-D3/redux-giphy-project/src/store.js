// TODO: Import `createStore` from `redux`
// TODO: Import middleware
// TODO: Import `rootReducer`
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

// TODO: Define a `configureStore` function

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
// TODO: Export the `configureStore` function
export default configureStore;
