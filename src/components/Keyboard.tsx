import React from "react";

import { Keys } from "../data/keys";

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  correctLetters: string[];
  incorrectLetters: string[];
};

const Keyboard: React.FC<KeyboardProps> = ({
  addGuessedLetter,
  correctLetters,
  incorrectLetters,
}) => {
  return (
    <div className="keyboard">
      {Keys.map((key, index) => {
        return (
          <button
            onClick={() => {
              addGuessedLetter(key.toUpperCase());
            }}
            key={index + "btn"}
            className={`keyboard-btn ${
              incorrectLetters.includes(key.toUpperCase())
                ? "keyboard-btn-incorrect"
                : ""
            } ${
              correctLetters.includes(key.toUpperCase())
                ? "keyboard-btn-correct"
                : ""
            }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
