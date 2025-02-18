import React from "react";
import Link from "./Link";
export default function Sidebar(props) {
  return (
    <aside>
      <ul>
        {props.posts &&
          props.posts.map((post, index) => (
            <Link
              key={post.id}
              title={post.title}
              onClick={props.onClickPost}
              index={index}
            />
          ))}
      </ul>
    </aside>
  );
}
