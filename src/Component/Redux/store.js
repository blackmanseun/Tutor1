import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [logger];

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
