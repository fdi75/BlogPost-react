import React from "react";

export default function Image(props) {
  return (
    <div className="post">
      <img src={`../images/${props.post.image}`} alt="" />
      <h1>{props.post.title}</h1>
      <div>{props.post.body}</div>
    </div>
  );
}
