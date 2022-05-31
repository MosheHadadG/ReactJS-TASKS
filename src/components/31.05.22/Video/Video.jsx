import React, { useState, useEffect, useRef } from "react";
import ShortVideo from './Horse_riding_3.mp4'
import './Video.css'

export default function Video() {
  const video = useRef();

  const playVideo = () => {
    video.current.play()
  };

  const pauseVideo = () => {
    video.current.pause();
  };

  return (
    <div className="video-container">
      <video
        ref={video}
        src={ShortVideo}
        type="video/mp4"
        style={{height: '80vh'}}
      />

      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}