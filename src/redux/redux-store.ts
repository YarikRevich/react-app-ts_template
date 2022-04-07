import { createStore, combineReducers, Reducer, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import appReducer from "./app-reducer"

let reducers = combineReducers<Reducer>({
    app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
export const testStore = createStore(reducers, applyMiddleware(thunk));