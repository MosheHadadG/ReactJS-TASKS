import React from "react";


const TimeInput = ({name, handleChange, inputValue}) => {

  return (
    <div className="input-time">
      <label>{name} </label>
      <input
      name={name}
      value={inputValue}
      onChange={handleChange}
       />
    </div>
 
  );
}

export default TimeInput;