import React from "react";

export default function Link(props) {
  return (
    <li index={props.index} onClick={(e) => props.onClick(props.index)}>
      {props.title}
    </li>
  );
}
