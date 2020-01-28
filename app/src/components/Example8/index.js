import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import LFSR from "../LFSR";
import { PitchToMidi } from "../MIDI";
import { DefaultSynth, PulseSynth, BetterSynth } from "../Synths";

export default function() {
  const length = "1m";

  function makeLFSR(seed) {
    const initial = parseInt(seed, 2);
    return new LFSR(seed.length, initial);
  }

  const buildTriad = root =>
    [0, 4, 7].map(semi => Tone.Frequency(PitchToMidi(root) + semi, "midi"));

  function run() {
    const synths = [new DefaultSynth(), new PulseSynth(), new BetterSynth()];
    const synthsLFSR = makeLFSR("1001");

    const notes = [...buildTriad("C4"), ...buildTriad("F4")];
    const notesLFSR = makeLFSR("1001");

    const select = (lfsr, array, skip) => {
      lfsr.shift();
      const index = lfsr.register % (array.length + (skip ? skip : 0));
      return array[index];
    };

    const synthLoop = new Tone.Loop(time => {
      const synth = select(synthsLFSR, synths, 1);

      if (synth) {
        synth.triggerAttackRelease(select(notesLFSR, notes), "4n", time);
      }
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
        An LFSR <strong>sometimes</strong> selects one of eight major chord
        notes and one of three synths...
      </p>
      <Transport length={length} />
    </div>
  );
}
