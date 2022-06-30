import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import APImiddleware from "./APImiddleware";


const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APImiddleware),
});

export default store;
