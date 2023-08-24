import React from "react";

type ModalProps = {
  wordToGuess: string;
  setIsGameOver: (prev: boolean) => void;
  isWin: boolean;
};

const Modal: React.FC<ModalProps> = ({ wordToGuess, setIsGameOver, isWin }) => {
  const handleRestart = () => {
    setIsGameOver(false);
    window.location.reload();
  };

  return (
    <div className="modal">
      <div className="modal-container">
        {isWin ? (
          <div className="modal-message">
            <h1>Ура, ви перемогли🎉</h1>
            <p>Ви здогадалися з 10 спроб</p>
          </div>
        ) : (
          <div className="modal-message">
            <h1>Нажаль ви програли</h1>
            <p>Наступного разу пощастить більше</p>
          </div>
        )}

        <h2>
          Загадане слово - <span className="modal-word">{wordToGuess} </span>{" "}
        </h2>

        <button onClick={handleRestart} className="modal-btn">
          Спробувати знову
        </button>
      </div>
    </div>
  );
};

export default Modal;
