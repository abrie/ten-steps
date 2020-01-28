import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import "./style.css";

export default function(params) {
  const [looping, setLooping] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(Tone.Transport.position);

  useEffect(() => {
    Tone.Transport.position = 0;
    Tone.Transport.setLoopPoints(0, params.length);
    Tone.Transport.loop = looping;
  }, [params.length, looping]);

  useEffect(() => {
    const id = Tone.Transport.scheduleRepeat(
      () => {
        setPosition(Tone.Transport.position.split(".")[0]);
      },
      "128n",
      "0m"
    );
    return () => {
      Tone.Transport.clear(id);
      stop();
    };
  }, []);

  const play = () => {
    Tone.Transport.start();
    setPlaying(true);
  };

  const stop = () => {
    Tone.Transport.stop();
    setPlaying(false);
    setLooping(false);
  };

  const handleLoop = () => {
    setLooping(true);
    setPlaying(true);
    Tone.Transport.start();
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
        <button onClick={handleLoop} disabled={playing}>
          loop
        </button>
      </div>
    </div>
  );
}
