import React from "react";
import LFSR from "../LFSR";
import { ShufflePopper } from "../Shuffle";
import Transport from "../Transport";
import * as Tone from "tone";

export default function() {
  const seed = "100101";
  const initial = parseInt(seed, 2);
  const lfsr_a = new LFSR(seed.length, initial);

  const seed_b = "100000";
  const initial_b = parseInt(seed_b, 2);
  const lfsr_b = new LFSR(seed_b.length, initial_b);

  const kick = new Tone.MembraneSynth().toMaster();
  const snare = new Tone.NoiseSynth().toMaster();
  const hat = new Tone.MetalSynth().toMaster();
  hat.volume.value = -20;
  const synth = new Tone.PolySynth(3, Tone.Synth).toMaster();

  const SONG_LENGTH = "32m";

  const actions_a = [
    time =>
      kick.triggerAttackRelease("C2", "4n", time, Math.random() * 0.25 + 0.75),
    time => snare.triggerAttackRelease("2n", time),
    time => hat.triggerAttackRelease("8n", time, Math.random() * 0.5 + 0.5)
  ];

  const percussionLoop = new Tone.Loop(time => {
    lfsr_a.shift();
    const idx = lfsr_a.register % 4;
    const action = actions_a[idx];
    if (action) action(time);
  }, "8n");
  percussionLoop.start("0m").stop(SONG_LENGTH);

  const major = [0, 4, 7, 9];
  const makeMajor = root =>
    major.map(step => Tone.Frequency(root + step, "midi"));
  const notes = ShufflePopper([...makeMajor(60), ...makeMajor(60 + 7)]);

  const makeTimeBase = arr => arr.map(not => Tone.TimeBase(not));
  const durations = ShufflePopper(makeTimeBase(["16n", "8n", "32n", "32n"]));

  const actions_b = [
    (time, dur) => synth.triggerAttackRelease(notes.next().value, dur, time),
    (time, dur) => synth.triggerAttackRelease(notes.next().value, dur, time)
  ];

  var remaining = 0;
  const synthLoop = new Tone.Loop(time => {
    if (remaining <= 0) {
      remaining = durations.next().value;
      lfsr_b.shift();
      const idx = lfsr_b.register % 4;
      const action = actions_b[idx];
      if (action) action(time, remaining);
    } else {
      remaining -= Tone.TimeBase("64n");
    }
  }, "64n");
  synthLoop.start("0m").stop(SONG_LENGTH);

  return <Transport />;
}
