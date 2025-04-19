import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "../slices/paginationSlice";

const store = configureStore({
  reducer: {
    page: paginationSlice.reducer,
  },
});

export default store;
