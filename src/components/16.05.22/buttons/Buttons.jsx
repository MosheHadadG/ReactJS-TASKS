import React from "react";
import CreateBtn from "./CreateBtn";

const Buttons = () => {
  return (
    <div style={{display: 'flex'}}>
    <CreateBtn text="Important"/>
    <CreateBtn text="Not Important"/>
    </div>
  );
}

export default Buttons;