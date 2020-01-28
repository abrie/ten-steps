import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import { DefaultSynth } from "../Synths";

export default function() {
  const length = "1m";

  function run() {
    const synth = new DefaultSynth();

    const notes = ["C4", "D4", "E4", "F4"];

    const synthLoop = new Tone.Loop(time => {
      synth.triggerAttackRelease(notes.shift(), "4n", time);
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
      <p>Do re me fa</p>
      <Transport length={length} />
    </div>
  );
}
