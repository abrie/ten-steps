import React, { useState, useEffect } from "react";
import * as Tone from "tone";

export default function() {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    Tone.Transport.scheduleRepeat(
      () => setPosition(Tone.Transport.position),
      "16n",
      "0m"
    );
  }, []);

  const play = () => {
    Tone.Transport.start();
    setPlaying(true);
  };

  const stop = () => {
    Tone.Transport.stop();
    setPlaying(false);
  };

  return (
    <div>
      <button onClick={play} disabled={playing}>
        play
      </button>
      <button onClick={stop} disabled={!playing}>
        stop
      </button>
      {position}
    </div>
  );
}
