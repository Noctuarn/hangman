import React, {useState} from "react";

import Hangman from "./components/Hangman";
import MainWord from "./components/MainWord";
import Keyboard from "./components/Keyboard";

import words from "./data/words.json"

const App: React.FC = () => {

  const [wordToGuess, setWordToGuess] = useState<string>(words[Math.floor(Math.random() * words.length)].toUpperCase());

  return (
    <div className="app">
      <Hangman />
      <MainWord wordToGuess={wordToGuess}/>
      <Keyboard/>
    </div>
  );
};

export default App;
