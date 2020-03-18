import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import { DefaultSynth } from "../Synths";

export default function() {
  const length = "1m";

  function run() {
    const synth = new DefaultSynth();

    const notes = ["C4", "D4", "E4", "F4"];

    const randomNote = () => {
      const randomIndex = Math.floor(Math.random() * notes.length);
      return notes[randomIndex];
    };

    const synthLoop = new Tone.Loop(time => {
      synth.triggerAttackRelease(randomNote(), "4n", time);
    }, "4n");

    synthLoop.start("0m").stop(length);

    return () => {
      synth.dispose();
      synthLoop.dispose();
    };
  }

  useEffect(run, []);

  return (
    <div>
      <p>
        Do re mi fa... <strong>randomly.</strong>
      </p>
      <Transport length={length} label="3" />
    </div>
  );
}
