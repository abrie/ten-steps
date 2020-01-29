import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import { DefaultSynth } from "../Synths";

export default function() {
  const length = "1m";

  function run() {
    const synth = new DefaultSynth();

    const synthLoop = new Tone.Loop(time => {
      synth.triggerAttackRelease("C4", "4n", time);
    }, "4n");

    synthLoop.start("0m").stop("1m");

    return () => {
      synth.dispose();
      synthLoop.dispose();
    };
  }

  useEffect(run, []);

  return (
    <div>
      <p>
        Beep beep beep beep<strong>...</strong>
      </p>
      <Transport length={length} />
    </div>
  );
}
