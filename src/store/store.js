import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import APImiddleware from "./APImiddleware";
import { createStore } from "redux";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APImiddleware),
});

export default store;
