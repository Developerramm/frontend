import React, { useState } from "react";

const LikeButton = () => {
  let [liked, setLiked] = useState(false);
  return (
    <div className="row">
      <div className="col">
        <h3>Like button</h3>

        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setLiked(!liked);
          }}
        >
          {" "}
          {liked ? " ❤ liked" : " 🤍 like"}{" "}
        </button>
      </div>
    </div>
  );
};

export default LikeButton;
