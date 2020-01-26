import React, { useEffect, useState } from "react";
import * as Tone from "tone";

export default function() {
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    setSynth(new Tone.Synth().toMaster());
  }, []);

  const play = () => {
    const loop = new Tone.Loop(time => {
      synth.triggerAttackRelease("C4", "8n", time);
    }, "8n");
    loop.start("0m").stop("1m");
    Tone.Transport.start();
  };

  return (
    <div>
      <button onClick={play}>play</button>
    </div>
  );
}
