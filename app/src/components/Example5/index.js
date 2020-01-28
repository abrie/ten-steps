import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import { DefaultSynth, PulseSynth } from "../Synths";

export default function() {
  const length = "1m";

  function run() {
    const synths = [new DefaultSynth(), new PulseSynth()];

    const notes = ["C4", "D4", "E4", "F4"];

    const random = array => {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    };

    const synthLoop = new Tone.Loop(time => {
      random(synths).triggerAttackRelease(random(notes), "4n", time);
    }, "4n");

    synthLoop.start("0m").stop(length);

    return () => {
      synths.forEach(synth => synth.dispose());
      synthLoop.dispose();
    };
  }

  useEffect(run, []);

  return (
    <div>
      <p>Do re mi fa... randomly between two synths.</p>
      <Transport length={length} />
    </div>
  );
}
