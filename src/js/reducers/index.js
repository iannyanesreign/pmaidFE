// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    articles: []
};

const rootReducer = createReducer(initialState, {
    [ADD_ARTICLE]: (state,action) => Object.assign({}, state, {
                            articles: state.articles.concat(action.payload)})
})

export default rootReducer;
