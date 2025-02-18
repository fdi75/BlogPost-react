import React from "react";

export default function Comments(props) {
  return (
    <div className="comments">
      {props.comments &&
        props.comments.map((comment) => (
          <p key={comment.postId}>{comment.body}</p>
        ))}
    </div>
  );
}
