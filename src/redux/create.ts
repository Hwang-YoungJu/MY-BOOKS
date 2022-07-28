import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducers";
import createSagaMidleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleware = createSagaMidleware();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
