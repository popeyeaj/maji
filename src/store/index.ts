import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import rootSaga from "./rootSaga";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const SagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(SagaMiddleware));
const store = createStore(reducers, enhancer);
SagaMiddleware.run(rootSaga);

export default store;
