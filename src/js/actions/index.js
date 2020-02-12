// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";
import {createAction} from "@reduxjs/toolkit";

export const addArticle = createAction(ADD_ARTICLE)
