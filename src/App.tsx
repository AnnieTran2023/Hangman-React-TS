import { useCallback, useEffect, useState } from "react";

import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  let randomIndex = Math.floor(Math.random() * words.length);

  const [wordToGuess] = useState(() => words[randomIndex]);

  console.log(wordToGuess);

  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const inCorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessLetters.includes(letter));

  const addGuessLetter = useCallback(
    (letter: string) => {
      if (guessLetters.includes(letter) || isLoser || isWinner) return;
      setGuessLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key);
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{ fontSize: "2.5rem", textAlign: "center", fontWeight: "700" }}
      >
        Hangman
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessLetters={guessLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={inCorrectLetters}
          addGuessLetter={addGuessLetter}
        />
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "400",
          color: "#4361ee",
        }}
      >
        {isWinner && "You win! - Refresh to try again"}
        {isLoser && "Nice try! - Refresh to try again"}
      </div>
    </div>
  );
}

export default App;
