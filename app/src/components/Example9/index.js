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

  function KickDrum() {
    return new Tone.MembraneSynth().toMaster();
  }

  function SnareDrum() {
    return new Tone.NoiseSynth().toMaster();
  }

  function HatDrum() {
    const hat = new Tone.MetalSynth().toMaster();
    hat.volume.value = -20;
    return hat;
  }

  function makeLFSR(seed) {
    const initial = parseInt(seed, 2);
    return new LFSR(seed.length, initial);
  }

  const buildTriad = root =>
    [0, 4, 7].map(semi => Tone.Frequency(PitchToMidi(root) + semi, "midi"));

  const velocity = v => Math.random() * v + (1 - v);

  function run() {
    const synths = [new DefaultSynth(), new PulseSynth(), new BetterSynth()];
    const synthsLFSR = makeLFSR("1001");

    const drums = [new KickDrum(), new SnareDrum(), new HatDrum()];
    const percussion = [
      t => drums[0].triggerAttackRelease("C1", "4n", t, velocity(0.25)),
      t => drums[1].triggerAttackRelease("2n", t, velocity(0.25)),
      t => drums[2].triggerAttackRelease("8n", t, velocity(0.5))
    ];
    const percussionLFSR = makeLFSR("1001");

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

    const drumLoop = new Tone.Loop(time => {
      const hit = select(percussionLFSR, percussion, 1);

      if (hit) {
        hit(time);
      }
    }, "4n");

    drumLoop.start("0m").stop(length);

    return () => {
      synths.forEach(synth => synth.dispose());
      drums.forEach(drum => drum.dispose());
      synthLoop.dispose();
      drumLoop.dispose();
    };
  }

  useEffect(run, []);

  return (
    <div>
      <p>
        Eight Notes, Three Synths, Basic Theory, Rests, Percussion, and LFSRs.
      </p>
      <Transport length={length} />
    </div>
  );
}
