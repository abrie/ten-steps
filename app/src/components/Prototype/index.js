import React, { useEffect, useState } from "react";
import * as Tone from "tone";

export default function() {
  const [synth, setSynth] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setSynth(new Tone.Synth().toMaster());
    Tone.Transport.scheduleRepeat(
      () => setTick(Tone.Transport.ticks),
      "1i",
      "0m"
    );
  }, []);

  const play = () => {
    const loop = new Tone.Loop(time => {
      synth.triggerAttackRelease("C4", "8n", time);
    }, "8n");
    loop.start("0m").stop("1m");
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
      {tick}
    </div>
  );
}
