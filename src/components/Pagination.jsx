import React from "react";
import { useSelector, useDispatch } from "react-redux";
import paginationSlice from "../slices/paginationSlice";
const action = paginationSlice.actions;
function Pagination() {
  const pageNo = useSelector((store) => store.page.pageNo);
  const dispatch = useDispatch();
  const handleNextPage = () => {
    dispatch(action.nextPage());
  };
  const handlePrevPage = () => {
    dispatch(action.prevPage());
  };
  return (
    <div className="w-[100vw] h-[8vh] bg-teal-700 flex justify-center items-center gap-8 text-4xl">
      <div onClick={handlePrevPage}>
        <i class="fa-solid fa-square-caret-left"></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={handleNextPage}>
        <i class="fa-solid fa-square-caret-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
