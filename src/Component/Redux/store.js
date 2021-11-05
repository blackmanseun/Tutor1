import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from 'redux-persist';


const middlewares = [logger];

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);

export default { store, persistor };
