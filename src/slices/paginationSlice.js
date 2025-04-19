import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "page",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    nextPage: (state) => {
      state.pageNo += 1;
    },
    prevPage: (state) => {
      if (state.pageNo > 1) {
        state.pageNo -= 1;
      }
    },
  },
});

export default paginationSlice;
