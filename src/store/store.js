import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import { watchGetData } from '../sagas/saga'


const sagaMiddlware = createSagaMiddleware();
export default createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddlware)));
sagaMiddlware.run(watchGetData);
