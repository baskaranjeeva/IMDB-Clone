import React from "react";

function Pagination({ pageNo, prePg, nxtPg }) {
  return (
    <div className="w-[100vw] h-[8vh] bg-teal-700 flex justify-center items-center gap-8 text-4xl">
      <div onClick={prePg}>
        <i class="fa-solid fa-square-caret-left"></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={nxtPg}>
        <i class="fa-solid fa-square-caret-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
