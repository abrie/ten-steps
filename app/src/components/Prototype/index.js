import React from "react";
import * as Tone from "tone";
import { ShufflePopper } from "../Shuffle";
import Transport from "../Transport";

export default function() {
  const kick = new Tone.MembraneSynth().toMaster();
  const snare = new Tone.NoiseSynth().toMaster();
  const hat = new Tone.MetalSynth().toMaster();
  hat.volume.value = -20;
  const synth = new Tone.PolySynth(3, Tone.Synth).toMaster();
  const synthb = new Tone.PolySynth(3, Tone.MonoSynth).toMaster();
  synthb.volume.value = -30;

  const SONG_LENGTH = "32m";

  const kickLoop = new Tone.Loop(time => {
    kick.triggerAttackRelease("C2", "4n", time, Math.random() * 0.25 + 0.75);
  }, "4n");
  kickLoop.start("0m").stop(SONG_LENGTH);

  const snareLoop = new Tone.Loop(time => {
    snare.triggerAttackRelease("2n", time);
  }, "2n");
  snareLoop.start("4n").stop(SONG_LENGTH);

  const hatLoop = new Tone.Loop(time => {
    hat.triggerAttackRelease("8n", time, Math.random() * 0.5 + 0.5);
  }, "8n");
  hatLoop.start("8n").stop(SONG_LENGTH);

  const selectRandom = arr => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  };

  const major = [0, 4, 7, 9];
  const makeMajor = root =>
    major.map(step => Tone.Frequency(root + step, "midi"));

  const makeTimeBase = arr => arr.map(not => Tone.TimeBase(not));
  const notes = ShufflePopper([...makeMajor(60), ...makeMajor(60 + 7)]);
  const durations = ShufflePopper(
    makeTimeBase(["16n", "8n", "4n", "1n", "32n", "32n"])
  );

  var remaining = 0;
  const synthLoop = new Tone.Loop(time => {
    if (remaining <= 0) {
      remaining = durations.next().value;
      synth.triggerAttackRelease(
        notes.next().value,
        remaining,
        time,
        Math.random() * 0.5 + 0.5
      );
      synth.triggerAttackRelease(
        notes.next().value,
        remaining * 0.75,
        time,
        Math.random() * 0.5 + 0.5
      );
      synthb.triggerAttackRelease(notes.next().value, remaining / 2, time);
    } else {
      remaining -= Tone.TimeBase("64n");
    }
  }, "64n");
  synthLoop.start("32n").stop(SONG_LENGTH);

  return <Transport />;
}
