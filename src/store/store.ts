import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggingMiddleware } from './middleware/';

const store = createStore(rootReducer, composeWithDevTools(compose(applyMiddleware(loggingMiddleware, thunk))));

export default store;