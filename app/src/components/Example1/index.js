import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";

export default function() {
  const length = "1m";

  function DefaultSynth() {
    return new Tone.Synth().toMaster();
  }

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
      <p>Beep beep beep beep</p>
      <Transport length={length} />
    </div>
  );
}
