import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Redux/FormSlice";

export const Store = configureStore({
  reducer: {
    form: formReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: false,
    //   }),
  },
});
