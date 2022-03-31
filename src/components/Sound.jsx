import React from "react";

const Sound = () => {
  return (
    <audio autoPlay loop>
      <source
        src="https://freesound.org/data/previews/234/234226_3914271-lq.mp3"
        type="audio/mp3"
      ></source>
    </audio>
  );
};

export default Sound;
