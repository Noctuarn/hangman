import React from "react";

type ModalProps = {
  wordToGuess: string;
};

const Modal: React.FC<ModalProps> = ({ wordToGuess }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-victory">
          <h1>Ура, ви перемогли🎉</h1>
          <p>Ви здогадалися з 10 спроб</p>
        </div>

        <h2>
          Загадане слово - <span className="modal-word">{wordToGuess} </span>{" "}
        </h2>

        <button className="modal-btn">Спробувати знову</button>
      </div>
    </div>
  );
};

export default Modal;
