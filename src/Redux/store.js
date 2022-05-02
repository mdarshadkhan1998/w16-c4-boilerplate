// // create store here
// import { legacy_createStore as createstore, compose } from "redux";
// import { reducer } from "./reducer";

// export const store = createstore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// // do not remove this code, its for testing purpose
// if (window.Cypress) {
//   window.store = store;
// }

// create store here
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
 
/**
 * @param {redux state} state
 */
const customMiddeware = (store) => (next) => (action) => {
  return typeof action === 'function' ? action(store.dispatch) : next(action)
}


const composeEnhancer = 
(typeof window !== "undefined" &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_)||
  compose;

const enhancer = composeEnhancer(applyMiddleware(customMiddeware));

export const store = createStore(reducer, enhancer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}