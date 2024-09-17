import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./Reducer/root-reducer"; // Assuming you have a root reducer

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // No need to manually add thunk
});

export default store;
