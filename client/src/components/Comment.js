import React from "react";

const Comment = ({ comment }) => {
  //   console.log(comment);
  return (
    <div class="media mb-4">
      <img
        class="d-flex mr-3 rounded-circle"
        src="http://placehold.it/50x50"
        alt=""
      />
      <div class="media-body">
        <h5 class="mt-0" style={{ textTransform: "capitalize" }}>
          {comment?.name}
        </h5>
        {comment?.body}
      </div>
    </div>
  );
};

export default Comment;
