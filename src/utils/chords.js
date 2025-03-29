const chords = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function transposeChord(chord, up = true) {
  let match = chord.match(/\[([A-G][#b]?m?)\]/);
  if (!match) return chord;

  let base = match[1];
  let isMinor = base.endsWith("m");
  let root = isMinor ? base.slice(0, -1) : base;

  let idx = chords.indexOf(root);
  if (idx === -1) return chord;

  let newIdx = up ? (idx + 1) % chords.length : (idx - 1 + chords.length) % chords.length;
  let newChord = chords[newIdx] + (isMinor ? "m" : "");

  return `[${newChord}]`;
}

export function transposeLyrics(lyrics, up = true) {
  return lyrics.replace(/\[[A-G][#b]?m?\]/g, chord => transposeChord(chord, up));
}

export function highlightChords(lyrics) {
  return lyrics.replace(/\[([A-G][#b]?m?)\]/g, `<span class="chord">[$1]</span>`);
}
