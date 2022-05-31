import React, { useState, useEffect, useRef } from "react";

export default function SimpleEdit() {
  const [toggle, setToggle] = useState(false);
  const inputFocusRef = useRef();

  useEffect(() => {
    inputFocusRef.current.focus();
  });


  return (
    <>
      <input ref={inputFocusRef} style={{display: toggle ? "inline" : "none"}}/>
      <button onClick={() => setToggle(!toggle)}>{toggle ? "save" : "edit"}</button>
    </>
  );
}