import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";
import counterReducer from "./counter";
import homeReducer from "./home";

const reducer = combineReducers({
    counter: counterReducer,
    home: homeReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;