import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import "./style.css";
import reportMetric from "../Metrics";

export default function(params) {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(Tone.Transport.position);

  useEffect(() => {
    reportMetric({ example: params.label, action: "load" });
  }, [params.label]);

  useEffect(() => {
    Tone.Transport.position = 0;
    Tone.Transport.setLoopPoints(0, params.length);
    Tone.Transport.loop = true;
  }, [params.length]);

  const play = () => {
    reportMetric({ example: params.label, action: "play" });
    Tone.Transport.start();
    setPlaying(true);
  };

  const stop = () => {
    reportMetric({ example: params.label, action: "stop" });
    Tone.Transport.stop();
    setPlaying(false);
  };

  const handleLoop = () => {
    reportMetric({ example: params.label, action: "play" });
    setPlaying(true);
    Tone.Transport.start();
  };

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
      Tone.Transport.stop();
      reportMetric({ example: params.label, action: "left" });
    };
  }, [params.label]);

  return (
    <div className="transport">
      <div className="display">{position}</div>
      <div className="controls">
        <button className="play" onClick={play} disabled={playing}>
          play
        </button>
        <button className="loop" onClick={handleLoop} disabled={playing}>
          play
        </button>
        <button onClick={stop} disabled={!playing}>
          stop
        </button>
      </div>
    </div>
  );
}
