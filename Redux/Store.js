// store.js
import { configureStore } from "@reduxjs/toolkit";
import schoolReducer from "./schoolSlice";

const Store = configureStore({
  reducer: {
    school: schoolReducer,
  },
});

export default Store;
