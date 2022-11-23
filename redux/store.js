import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducers";
import { persistStore, persistReducer } from 'redux-persist'

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';


// initial states here
const initalState = {};



const sagaMiddleware = createSagaMiddleware();

// middleware
const middleware = [thunk, logger, sagaMiddleware];
// creating store
export let store = createStore(
  rootReducer,
 applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
// assigning store to next wrapper
const makeStore = () => store;
export const persistor = persistStore(store)
export const wrapper = createWrapper(makeStore);
export default {
    store,
    persistor,
    wrapper
};