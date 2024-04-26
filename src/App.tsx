import { useEffect, useState } from "react";

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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Hangman Game</div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord guessLetters={guessLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
