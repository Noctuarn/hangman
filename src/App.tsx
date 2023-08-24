import React, { useState, useEffect, useCallback } from "react";

import Hangman from "./components/Hangman";
import MainWord from "./components/MainWord";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";

import words from "./data/words.json";

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isWin, setIsWin] = useState<boolean>(false);

  const correctLetters = guessedLetters.filter((letter) => {
    return wordToGuess.substring(1, wordToGuess.length - 1).includes(letter);
  });

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.substring(1, wordToGuess.length - 1).includes(letter);
  });

  useEffect(() => {

    console.log(correctLetters);
    

    if (incorrectLetters.length > 5) {
      setIsGameOver(true);
    }

    if(correctLetters.length == wordToGuess.length - 2){
      setIsGameOver(true);
      setIsWin(true);
    }
  }, [guessedLetters]);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters]
  );

  return (
    <div className="app">
      <Hangman numberOfGuesses={incorrectLetters.length} />
      <MainWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        correctLetters ={correctLetters}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
      {isGameOver && (
        <Modal wordToGuess={wordToGuess} setIsGameOver={setIsGameOver} isWin = {isWin} />
      )}
    </div>
  );
};

export default App;
