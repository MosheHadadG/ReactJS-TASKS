import React, { useRef } from "react";
import bulbasaur from "./bulbasaur.png";
import pikachu from "./pikachu.png";
import './ImageToggle.css'

export default function ImageToggle() {
  const imageBulbasaur = useRef();

  const darkImage = () => {
    imageBulbasaur.current.style = '-webkit-filter: brightness(70%);';
  };

  const resetImage = () => {
    imageBulbasaur.current.style = 'background: none';
  };

  return (
    <div className="image-container">
      <img
     
        alt="bulbasaur"
        ref={imageBulbasaur}
        src={bulbasaur}
        onMouseOver={darkImage}
        onMouseOut={resetImage}
      />
    </div>
  );
}