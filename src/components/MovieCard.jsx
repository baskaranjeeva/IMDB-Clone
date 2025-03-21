import React from "react";

function MovieCard() {
  return (
    <div>
      <img
        className="w-[200px] h-[40vh] bg-cover ml-10 mb-8 pointer-events-auto"
        style={{
          backgroundImage:
            "url(https://m.media-amazon.com/images/I/91SpnOlQP+L._AC_UF1000,1000_QL80_.jpg)",
        }}
      />
    </div>
  );
}

export default MovieCard;
