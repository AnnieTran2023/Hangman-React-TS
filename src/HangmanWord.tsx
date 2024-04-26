type HangmanWordProps = {
  guessLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({ guessLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".3em",
        fontSize: "3.5rem",
        fontWeight: "400",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessLetters.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
