import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducerBundle";


export default createStore(reducers, applyMiddleware(thunk));