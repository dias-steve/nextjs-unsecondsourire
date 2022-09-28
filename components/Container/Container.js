import React from "react";

export default function Container(props) {
  return (
    <>
      <p>Header</p>
      {props.children}
      <p>footer</p>
    </>
  );
}
