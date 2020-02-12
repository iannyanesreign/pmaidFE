import { createStore } from "redux";
import rootReducer from "../reducers/index";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer
})
export default store;