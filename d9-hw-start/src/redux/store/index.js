import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoriteCompanyReduce from "../reducers/favoriteCompanyReduce";
import jobsReducer from "../reducers/jobsReduce";

const rootReducer = combineReducers({
  pref: favoriteCompanyReduce,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
