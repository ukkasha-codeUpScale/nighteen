// VideoBackground.js or VideoBackground.tsx
import React from 'react';

const VideoBackground = ({ videoSource }:any) => {
  return (
    <div className='video-container'>
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='color-overlay'></div>
    </div>
  );
};

export default VideoBackground;
