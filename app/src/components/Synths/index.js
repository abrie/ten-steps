import Tone from "../Tone";

export function DefaultSynth() {
  return new Tone.Synth().toMaster();
}

export function PulseSynth() {
  const synth = new Tone.Synth({
    oscillator: {
      type: "square"
    }
  }).toMaster();
  synth.volume.value = -10;
  return synth;
}

export function BetterSynth() {
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
