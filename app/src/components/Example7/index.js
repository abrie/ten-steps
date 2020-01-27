import React, { useEffect } from "react";
import Transport from "../Transport";
import Tone from "../Tone";
import LFSR from "../LFSR";
import { PitchToMidi } from "../MIDI";

export default function() {
  const length = "1m";

  function DefaultSynth() {
    return new Tone.Synth().toMaster();
  }

  function PulseSynth() {
    const synth = new Tone.Synth({
      oscillator: {
        type: "square"
      }
    }).toMaster();
    synth.volume.value = -10;
    return synth;
  }

  function BetterSynth() {
    var synth = new Tone.Synth({
      oscillator: {
        type: "amtriangle",
        harmonicity: 0.5,
        modulationType: "sine"
      },
      envelope: {
        attackCurve: "exponential",
        attack: 0.05,
        decay: 0.2,
        sustain: 0.2,
        release: 1.5
      },
      portamento: 0.025
    }).toMaster();
    return synth;
  }

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
      <p>Four Notes, Three Synths, and an LFSR.</p>
      <Transport length={length} />
    </div>
  );
}
