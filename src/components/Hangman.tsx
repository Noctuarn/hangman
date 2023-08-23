import React from "react";

const Hangman: React.FC = () => {
  return (
    <div className="hangman">

      <div className="hangman-head"></div>
      <div className="hangman-body"></div>
      <div className="hangman-left-arm"></div>
      <div className="hangman-right-arm"></div>
      <div className="hangman-left-leg"></div>
      <div className="hangman-right-leg"></div>

      <div className="hangman-rope"></div>
      <div className="hangman-outcrop"></div>
      <div className="hangman-column"></div>
      <div className="hangman-basis"></div>
    </div>
  );
};

export default Hangman;
