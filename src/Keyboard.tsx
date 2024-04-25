const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "repeat (auto-fit , minmax(75px,1fr)",
        gap: ".5rem",
      }}
    >
      <div>t</div>
      <div>t</div>
      <div>t</div>
    </div>
  );
}
