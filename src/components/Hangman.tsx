import React from "react";

const HEAD = <div className="hangman-head"></div>;
const BODY = <div className="hangman-body"></div>;
const LEFT_ARM = <div className="hangman-left-arm"></div>;
const RIGHT_ARM = <div className="hangman-right-arm"></div>;
const LEFT_LEG = <div className="hangman-left-leg"></div>;
const RIGHT_LEG = <div className="hangman-right-leg"></div>;

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanProps = {
  numberOfGuesses: number;
};

const Hangman: React.FC<HangmanProps> = ({ numberOfGuesses }) => {
  return (
    <div className="hangman">
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div className="hangman-rope"></div>
      <div className="hangman-outcrop"></div>
      <div className="hangman-column"></div>
      <div className="hangman-basis"></div>
    </div>
  );
};

export default Hangman;
