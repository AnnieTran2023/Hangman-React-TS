import { useCallback, useEffect, useState } from "react";

import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  let randomIndex = Math.floor(Math.random() * words.length);

  const [wordToGuess, setWordToGuess] = useState(() => words[randomIndex]);

  console.log(wordToGuess);

  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const inCorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessLetter = useCallback(
    (letter: string) => {
      if (guessLetters.includes(letter)) return;
      setGuessLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessLetters]
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
        Hangman Game
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord guessLetters={guessLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={inCorrectLetters}
          addGuessLetter={addGuessLetter}
        />
      </div>
    </div>
  );
}

export default App;
