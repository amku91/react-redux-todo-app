import { createStore, applyMiddleware } from 'redux';
/**logger with default option. remove it if you don't want to use log rocket logging. Now this library owned by third party called logRocket.com */
import logger from 'redux-logger';
import reducer from './reducer';


export default configureTodoStore = (initialState) => {
    let store = createStore(reducer, initialState, applyMiddleware(logger));
    return store;
}