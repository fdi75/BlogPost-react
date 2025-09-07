import React from "react";

export default function Comments(props) {
  const comments = Array.isArray(props.comments) ? props.comments : [];

  return (
    <div className="comments">
      {comments &&
        comments.map((comment) => (
          <p key={comment.postId}>{comment.body}</p>
        ))}
    </div>
  );
}
