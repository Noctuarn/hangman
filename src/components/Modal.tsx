import React from "react";

type ModalProps = {
  wordToGuess: string;
  setIsGameOver: (prev: boolean) => void;
  isWin: boolean;
  incorrectCount: number;
};

const Modal: React.FC<ModalProps> = ({
  wordToGuess,
  setIsGameOver,
  isWin,
  incorrectCount,
}) => {
  const handleRestart = () => {
    setIsGameOver(false);
    window.location.reload();
  };

  let incorrectCountMessage = "";

  switch (true) {
    case incorrectCount === 0:
      incorrectCountMessage = "Ого, ви не помилилися жодного разу, так тримати⭐";
      break;
    case incorrectCount < 3:
      incorrectCountMessage = "Ви добряче кмітливі";
      break;

    case incorrectCount < 5:
      incorrectCountMessage = "Хороша робота";
      break;

    case incorrectCount === 5:
      incorrectCountMessage = "Фуууух це було небезпечно";
      break;
  }

  return (
    <div className="modal">
      <div className="modal-container">
        {isWin ? (
          <div className="modal-message">
            <h1>Ура, ви перемогли🎉</h1>
            <p>{incorrectCountMessage}</p>
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
