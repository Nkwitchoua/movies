import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movies: moviesReducer
});

export const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(thunk));