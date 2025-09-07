import React from "react";

export default function Image(props) {
  return (
    <div className="post">
      <img src={`${process.env.PUBLIC_URL}/images/${props.post.image}`} alt="" />
      <h1>{props.post.title}</h1>
      <div className="post-text">{props.post.body}</div>
    </div>
  );
}
