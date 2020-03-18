import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import { DefaultSynth } from "../Synths";

export default function() {
  const length = "1m";

  function run() {
    const synth = new DefaultSynth();

    const notes = ["C4", "D4", "E4", "F4"];
    const nextNote = () => notes[notes.push(notes.shift()) - 1];

    const synthLoop = new Tone.Loop(time => {
      synth.triggerAttackRelease(nextNote(), "4n", time);
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
        <strong>Do re mi fa</strong>...
      </p>
      <Transport length={length} label="2" />
    </div>
  );
}
