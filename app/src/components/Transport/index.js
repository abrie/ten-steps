import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import "./style.css";

export default function() {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(Tone.Transport.position);

  useEffect(() => {
    Tone.Transport.setLoopPoints(0, "3m");
    Tone.Transport.loop = true;
    Tone.Transport.scheduleRepeat(
      () => {
        setPosition(Tone.Transport.position.split(".")[0]);
      },
      "32n",
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
      <div className="positionIndicator">{position}</div>
      <div>
        <button onClick={play} disabled={playing}>
          play
        </button>
        <button onClick={stop} disabled={!playing}>
          stop
        </button>
      </div>
    </div>
  );
}
