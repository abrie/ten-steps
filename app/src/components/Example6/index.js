import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import LFSR from "../LFSR";
import { DefaultSynth, PulseSynth, BetterSynth } from "../Synths";

export default function() {
  const length = "1m";

  function makeLFSR(seed) {
    const initial = parseInt(seed, 2);
    return new LFSR(seed.length, initial);
  }

  function run() {
    const synths = [new DefaultSynth(), new PulseSynth(), new BetterSynth()];
    const synthsLFSR = makeLFSR("1001");

    const notes = ["C4", "D4", "E4", "F4"];
    const notesLFSR = makeLFSR("1001");

    const select = (lfsr, array) => {
      lfsr.shift();
      const index = lfsr.register % array.length;
      return array[index];
    };

    const synthLoop = new Tone.Loop(time => {
      select(synthsLFSR, synths).triggerAttackRelease(
        select(notesLFSR, notes),
        "4n",
        time
      );
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
      <p>
        Do re mi fa... <strong>deterministically</strong>, using{" "}
        <strong>three</strong> different synths
        <span aria-label="musical notes" role="img">
          &nbsp;&#127926;
        </span>
        ...
      </p>
      <Transport length={length} />
    </div>
  );
}
